/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { User } from '../auth/user';
import { LocalStore, MultiTabLocalStore } from '../local/local_store';
import { DocumentKeySet } from '../model/collections';
import { DocumentKey } from '../model/document_key';
import { Mutation } from '../model/mutation';
import { RemoteStore } from '../remote/remote_store';
import { RemoteSyncer } from '../remote/remote_syncer';
import { Deferred } from '../util/promise';
import { SortedMap } from '../util/sorted_map';
import { SharedClientState } from '../local/shared_client_state';
import { SharedClientStateSyncer } from '../local/shared_client_state_syncer';
import { Query } from './query';
import { Transaction } from './transaction';
import { OnlineState, OnlineStateSource, TargetId } from './types';
import { ViewSnapshot } from './view_snapshot';
import { AsyncQueue } from '../util/async_queue';
import { Datastore } from '../remote/datastore';
/**
 * Interface implemented by EventManager to handle notifications from
 * SyncEngine.
 */
export interface SyncEngineListener {
    /** Handles new view snapshots. */
    onWatchChange(snapshots: ViewSnapshot[]): void;
    /** Handles the failure of a query. */
    onWatchError(query: Query, error: Error): void;
    /** Handles a change in online state. */
    onOnlineStateChange(onlineState: OnlineState): void;
}
/**
 * SyncEngine is the central controller in the client SDK architecture. It is
 * the glue code between the EventManager, LocalStore, and RemoteStore. Some of
 * SyncEngine's responsibilities include:
 * 1. Coordinating client requests and remote events between the EventManager
 *    and the local and remote data stores.
 * 2. Managing a View object for each query, providing the unified view between
 *    the local and remote data stores.
 * 3. Notifying the RemoteStore when the LocalStore has new mutations in its
 *    queue that need sending to the backend.
 *
 * The SyncEngine’s methods should only ever be called by methods running in the
 * global async queue.
 */
export interface SyncEngine extends RemoteSyncer {
    isPrimaryClient: boolean;
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
    subscribe(syncEngineListener: SyncEngineListener): void;
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    listen(query: Query): Promise<ViewSnapshot>;
    /** Stops listening to the query. */
    unlisten(query: Query): Promise<void>;
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    write(batch: Mutation[], userCallback: Deferred<void>): Promise<void>;
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    runTransaction<T>(asyncQueue: AsyncQueue, updateFunction: (transaction: Transaction) => Promise<T>, deferred: Deferred<T>): void;
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    applyOnlineStateChange(onlineState: OnlineState, source: OnlineStateSource): void;
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    registerPendingWritesCallback(callback: Deferred<void>): Promise<void>;
    activeLimboDocumentResolutions(): SortedMap<DocumentKey, TargetId>;
    enqueuedLimboDocumentResolutions(): DocumentKey[];
    handleCredentialChange(user: User): Promise<void>;
    enableNetwork(): Promise<void>;
    disableNetwork(): Promise<void>;
    getRemoteKeysForTarget(targetId: TargetId): DocumentKeySet;
}
export declare function newSyncEngine(localStore: LocalStore, remoteStore: RemoteStore, datastore: Datastore, sharedClientState: SharedClientState, currentUser: User, maxConcurrentLimboResolutions: number): SyncEngine;
/**
 * An extension of SyncEngine that also includes SharedClientStateSyncer for
 * Multi-Tab synchronization.
 */
export interface MultiTabSyncEngine extends SharedClientStateSyncer, SyncEngine {
    applyPrimaryState(isPrimary: boolean): Promise<void>;
}
export declare function newMultiTabSyncEngine(localStore: MultiTabLocalStore, remoteStore: RemoteStore, datastore: Datastore, sharedClientState: SharedClientState, currentUser: User, maxConcurrentLimboResolutions: number): MultiTabSyncEngine;
