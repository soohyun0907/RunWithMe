import { __extends as t, __awaiter as e, __generator as n, __spreadArrays as r } from "tslib";

import i from "@firebase/app";

import { Logger as o, LogLevel as s } from "@firebase/logger";

import { isMobileCordova as u, isReactNative as a, isElectron as h, isIE as c, isUWP as f, isBrowserExtension as l } from "@firebase/util";

import { XhrIo as p, EventType as d, ErrorCode as y, createWebChannelTransport as v, WebChannel as g } from "@firebase/webchannel-wrapper";

import { Component as m } from "@firebase/component";

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
/** The semver (www.semver.org) version of the SDK. */ var w = i.SDK_VERSION, b = new o("@firebase/firestore");

/**
 * @license
 * Copyright 2020 Google LLC
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
/** Formats an object as a JSON string, suitable for logging. */
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
// Helper methods are needed because variables can't be exported as read/write
function E() {
    return b.logLevel;
}

function I(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (b.logLevel <= s.DEBUG) {
        var i = e.map(A);
        b.debug.apply(b, r([ "Firestore (" + w + "): " + t ], i));
    }
}

function N(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (b.logLevel <= s.ERROR) {
        var i = e.map(A);
        b.error.apply(b, r([ "Firestore (" + w + "): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function A(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    var e;
}

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
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function T(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + w + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw N(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function _(t, e) {
    t || T();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function D(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function P(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

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
 */ var V = /** @class */ function() {
    function t() {}
    return t.t = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = P(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function k(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function U(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

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
 */ var S = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.s = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, L = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "i", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.o = function(t) {
        return k(this.projectId, t.projectId) || k(this.database, t.database);
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
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
function R(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function O(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function M(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

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
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ var C = /** @class */ function() {
    function t(t, e) {
        this.h = t, this.u = e, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.l = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.h(t), n = this.l[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.u(s, t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.h(t), r = this.l[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.u(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.l[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.h(t), n = this.l[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.u(n[r][0], t)) return 1 === n.length ? delete this.l[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        O(this.l, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype._ = function() {
        return M(this.l);
    }, t;
}(), q = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, x = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return t(n, e), n;
}(Error), j = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new x(q.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new x(q.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new x(q.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new x(q.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.T = function(t) {
        return this.seconds === t.seconds ? k(this.nanoseconds, t.nanoseconds) : k(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), F = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.m = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new j(0, 0));
    }, t.prototype.o = function(t) {
        return this.timestamp.T(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.I = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.A = function() {
        return this.timestamp;
    }, t;
}(), G = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && T(), void 0 === n ? n = t.length - e : n > t.length - e && T(), 
        this.segments = t, this.offset = e, this.R = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.R;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.P(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.V(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.p = function(t) {
        return t = void 0 === t ? 1 : t, this.V(this.segments, this.offset + t, this.length - t);
    }, t.prototype.g = function() {
        return this.V(this.segments, this.offset, this.length - 1);
    }, t.prototype.v = function() {
        return this.segments[this.offset];
    }, t.prototype.S = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype._ = function() {
        return 0 === this.length;
    }, t.prototype.C = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.D = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.F = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.P = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), B = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.$ = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.F().join("/");
    }, n.prototype.toString = function() {
        return this.$();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.N = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new x(q.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.k = function() {
        return new n([]);
    }, n;
}(G), z = /^[_a-zA-Z][_a-zA-Z0-9]*$/, Q = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.O = function(t) {
        return z.test(t);
    }, n.prototype.$ = function() {
        return this.F().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.O(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.$();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.L = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.M = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.q = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new x(q.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new x(q.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new x(q.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new x(q.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.k = function() {
        return new n([]);
    }, n;
}(G), W = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.B = function(e) {
        return new t(B.N(e).p(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.U = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === B.P(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.P = function(t, e) {
        return B.P(t.path, e.path);
    }, t.W = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.j = function(e) {
        return new t(new B(e.slice()));
    }, t;
}();

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
/**
 * Returns whether a variable is either undefined or null.
 */
function H(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function Z(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */
/**
 * @license
 * Copyright 2019 Google LLC
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
// Visible for testing
var Y = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.G = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function X(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new Y(t, e, n, r, i, o, s);
}

function J(t) {
    var e = D(t);
    if (null === e.G) {
        var n = e.path.$();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.$() + t.op.toString() + Gt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return (e = t).field.$() + e.dir;
            var e;
        })).join(","), H(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += wn(e.startAt)), e.endAt && (n += "|ub:", n += wn(e.endAt)), e.G = n;
    }
    return e.G;
}

function $(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!An(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    !(i instanceof ln && o instanceof ln && i.op === o.op && i.field.isEqual(o.field) && qt(i.value, o.value))) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!En(t.startAt, e.startAt) && En(t.endAt, e.endAt);
}

function K(t) {
    return W.W(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

/**
 * @license
 * Copyright 2020 Google LLC
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
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var tt = /** @class */ function() {
    function t(t) {
        this.K = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.K, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.K);
    }, t.prototype.H = function() {
        return 2 * this.K.length;
    }, t.prototype.o = function(t) {
        return k(this.K, t.K);
    }, t.prototype.isEqual = function(t) {
        return this.K === t.K;
    }, t;
}();

tt.Y = new tt("");

var et, nt, rt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = F.min()), void 0 === o && (o = F.min()), void 0 === s && (s = tt.Y), 
        this.target = t, this.targetId = e, this.X = n, this.sequenceNumber = r, this.J = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Z = function(e) {
        return new t(this.target, this.targetId, this.X, e, this.J, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.tt = function(e, n) {
        return new t(this.target, this.targetId, this.X, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.et = function(e) {
        return new t(this.target, this.targetId, this.X, this.sequenceNumber, this.J, e, this.resumeToken);
    }, t;
}(), it = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

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
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ot(t) {
    switch (t) {
      case q.OK:
        return T();

      case q.CANCELLED:
      case q.UNKNOWN:
      case q.DEADLINE_EXCEEDED:
      case q.RESOURCE_EXHAUSTED:
      case q.INTERNAL:
      case q.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case q.UNAUTHENTICATED:
        return !1;

      case q.INVALID_ARGUMENT:
      case q.NOT_FOUND:
      case q.ALREADY_EXISTS:
      case q.PERMISSION_DENIED:
      case q.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case q.ABORTED:
      case q.OUT_OF_RANGE:
      case q.UNIMPLEMENTED:
      case q.DATA_LOSS:
        return !0;

      default:
        return T();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function st(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return N("GRPC error has no .code"), q.UNKNOWN;
    switch (t) {
      case et.OK:
        return q.OK;

      case et.CANCELLED:
        return q.CANCELLED;

      case et.UNKNOWN:
        return q.UNKNOWN;

      case et.DEADLINE_EXCEEDED:
        return q.DEADLINE_EXCEEDED;

      case et.RESOURCE_EXHAUSTED:
        return q.RESOURCE_EXHAUSTED;

      case et.INTERNAL:
        return q.INTERNAL;

      case et.UNAVAILABLE:
        return q.UNAVAILABLE;

      case et.UNAUTHENTICATED:
        return q.UNAUTHENTICATED;

      case et.INVALID_ARGUMENT:
        return q.INVALID_ARGUMENT;

      case et.NOT_FOUND:
        return q.NOT_FOUND;

      case et.ALREADY_EXISTS:
        return q.ALREADY_EXISTS;

      case et.PERMISSION_DENIED:
        return q.PERMISSION_DENIED;

      case et.FAILED_PRECONDITION:
        return q.FAILED_PRECONDITION;

      case et.ABORTED:
        return q.ABORTED;

      case et.OUT_OF_RANGE:
        return q.OUT_OF_RANGE;

      case et.UNIMPLEMENTED:
        return q.UNIMPLEMENTED;

      case et.DATA_LOSS:
        return q.DATA_LOSS;

      default:
        return T();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (nt = et || (et = {}))[nt.OK = 0] = "OK", nt[nt.CANCELLED = 1] = "CANCELLED", 
nt[nt.UNKNOWN = 2] = "UNKNOWN", nt[nt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
nt[nt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", nt[nt.NOT_FOUND = 5] = "NOT_FOUND", 
nt[nt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", nt[nt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
nt[nt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", nt[nt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
nt[nt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", nt[nt.ABORTED = 10] = "ABORTED", 
nt[nt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", nt[nt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
nt[nt.INTERNAL = 13] = "INTERNAL", nt[nt.UNAVAILABLE = 14] = "UNAVAILABLE", nt[nt.DATA_LOSS = 15] = "DATA_LOSS";

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
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var ut = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.root = e || ht.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.nt = function(e, n) {
        return new t(this.P, this.root.nt(e, n, this.P).copy(null, null, ht.st, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.P, this.root.remove(e, this.P).copy(null, null, ht.st, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e._(); ) {
            var n = this.P(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n._(); ) {
            var r = this.P(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype._ = function() {
        return this.root._();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.it = function() {
        return this.root.it();
    }, 
    // Returns the maximum key in the map.
    t.prototype.rt = function() {
        return this.root.rt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ot = function(t) {
        return this.root.ot(t);
    }, t.prototype.forEach = function(t) {
        this.ot((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ot((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.root.ht(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.at = function() {
        return new at(this.root, null, this.P, !1);
    }, t.prototype.ut = function(t) {
        return new at(this.root, t, this.P, !1);
    }, t.prototype.ct = function() {
        return new at(this.root, null, this.P, !0);
    }, t.prototype.lt = function(t) {
        return new at(this.root, t, this.P, !0);
    }, t;
}(), at = /** @class */ function() {
    function t(t, e, n, r) {
        this._t = r, this.ft = [];
        for (var i = 1; !t._(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this._t ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.ft.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.ft.push(t), t = this._t ? t.right : t.left;
        }
    }
    return t.prototype.dt = function() {
        var t = this.ft.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this._t) for (t = t.left; !t._(); ) this.ft.push(t), t = t.right; else for (t = t.right; !t._(); ) this.ft.push(t), 
        t = t.left;
        return e;
    }, t.prototype.wt = function() {
        return this.ft.length > 0;
    }, t.prototype.Tt = function() {
        if (0 === this.ft.length) return null;
        var t = this.ft[this.ft.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), ht = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype._ = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ot = function(t) {
        return this.left.ot(t) || t(this.key, this.value) || this.right.ot(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left._() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.it = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.rt = function() {
        return this.right._() ? this.key : this.right.rt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.nt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.nt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.nt(t, e, n))).Et();
    }, t.prototype.It = function() {
        if (this.left._()) return t.EMPTY;
        var e = this;
        return e.left.At() || e.left.left.At() || (e = e.Rt()), (e = e.copy(null, null, null, e.left.It(), null)).Et();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left._() || i.left.At() || i.left.left.At() || (i = i.Rt()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.At() && (i = i.Pt()), i.right._() || i.right.At() || i.right.left.At() || (i = i.Vt()), 
            0 === n(e, i.key)) {
                if (i.right._()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.It());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.Et();
    }, t.prototype.At = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Et = function() {
        var t = this;
        return t.right.At() && !t.left.At() && (t = t.yt()), t.left.At() && t.left.left.At() && (t = t.Pt()), 
        t.left.At() && t.right.At() && (t = t.pt()), t;
    }, t.prototype.Rt = function() {
        var t = this.pt();
        return t.right.left.At() && (t = (t = (t = t.copy(null, null, null, null, t.right.Pt())).yt()).pt()), 
        t;
    }, t.prototype.Vt = function() {
        var t = this.pt();
        return t.left.left.At() && (t = (t = t.Pt()).pt()), t;
    }, t.prototype.yt = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.Pt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.pt = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.gt = function() {
        var t = this.vt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.vt = function() {
        if (this.At() && this.left.At()) throw T();
        if (this.right.At()) throw T();
        var t = this.left.vt();
        if (t !== this.right.vt()) throw T();
        return t + (this.At() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ht.EMPTY = null, ht.RED = !0, ht.st = !1, 
// end LLRBEmptyNode
ht.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.nt = function(t, e, n) {
        return new ht(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype._ = function() {
        return !0;
    }, t.prototype.ot = function(t) {
        return !1;
    }, t.prototype.ht = function(t) {
        return !1;
    }, t.prototype.it = function() {
        return null;
    }, t.prototype.rt = function() {
        return null;
    }, t.prototype.At = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.gt = function() {
        return !0;
    }, t.prototype.vt = function() {
        return 0;
    }, t;
}());

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
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var ct = /** @class */ function() {
    function t(t) {
        this.P = t, this.data = new ut(this.P);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.it();
    }, t.prototype.last = function() {
        return this.data.rt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ot((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.bt = function(t, e) {
        for (var n = this.data.ut(t[0]); n.wt(); ) {
            var r = n.dt();
            if (this.P(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.St = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ut(e) : this.data.at(); n.wt(); ) if (!t(n.dt().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Ct = function(t) {
        var e = this.data.ut(t);
        return e.wt() ? e.dt().key : null;
    }, t.prototype.at = function() {
        return new ft(this.data.at());
    }, t.prototype.ut = function(t) {
        return new ft(this.data.ut(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).nt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype._ = function() {
        return this.data._();
    }, t.prototype.Dt = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.at(), r = e.data.at(); n.wt(); ) {
            var i = n.dt().key, o = r.dt().key;
            if (0 !== this.P(i, o)) return !1;
        }
        return !0;
    }, t.prototype.F = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.P);
        return n.data = e, n;
    }, t;
}(), ft = /** @class */ function() {
    function t(t) {
        this.Ft = t;
    }
    return t.prototype.dt = function() {
        return this.Ft.dt().key;
    }, t.prototype.wt = function() {
        return this.Ft.wt();
    }, t;
}(), lt = new ut(W.P);

function pt() {
    return lt;
}

function dt() {
    return pt();
}

var yt = new ut(W.P);

function vt() {
    return yt;
}

var gt = new ut(W.P), mt = new ct(W.P);

function wt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = mt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var bt = new ct(k);

function Et() {
    return bt;
}

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
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var It = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.P = t ? function(e, n) {
            return t(e, n) || W.P(e.key, n.key);
        } : function(t, e) {
            return W.P(t.key, e.key);
        }, this.$t = vt(), this.Nt = new ut(this.P)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.kt = function(e) {
        return new t(e.P);
    }, t.prototype.has = function(t) {
        return null != this.$t.get(t);
    }, t.prototype.get = function(t) {
        return this.$t.get(t);
    }, t.prototype.first = function() {
        return this.Nt.it();
    }, t.prototype.last = function() {
        return this.Nt.rt();
    }, t.prototype._ = function() {
        return this.Nt._();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.$t.get(t);
        return e ? this.Nt.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Nt.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Nt.ot((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.$t.nt(t.key, t), e.Nt.nt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.$t.remove(t), this.Nt.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Nt.at(), r = e.Nt.at(); n.wt(); ) {
            var i = n.dt().key, o = r.dt().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.P = this.P, r.$t = e, r.Nt = n, r;
    }, t;
}(), Nt = /** @class */ function() {
    function t() {
        this.xt = new ut(W.P);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.xt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.xt = this.xt.nt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.xt = this.xt.nt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.nt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.xt = this.xt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.xt = this.xt.nt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.xt = this.xt.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        T() : this.xt = this.xt.nt(e, t);
    }, t.prototype.Ot = function() {
        var t = [];
        return this.xt.ot((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), At = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Lt = n, this.docChanges = r, this.Mt = i, this.fromCache = o, 
        this.qt = s, this.Bt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Ut = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, It.kt(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Mt._();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.qt === t.qt && this.Mt.isEqual(t.Mt) && un(this.query, t.query) && this.docs.isEqual(t.docs) && this.Lt.isEqual(t.Lt))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), Tt = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.J = t, this.Qt = e, this.Wt = n, this.jt = r, this.Gt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Kt = function(e, n) {
        var r = new Map;
        return r.set(e, _t.zt(e, n)), new t(F.min(), r, Et(), pt(), wt());
    }, t;
}(), _t = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Ht = e, this.Yt = n, this.Xt = r, this.Jt = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.zt = function(e, n) {
        return new t(tt.Y, n, wt(), wt(), wt());
    }, t;
}(), Dt = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.Zt = t, this.removedTargetIds = e, this.key = n, this.te = r;
}, Pt = function(t, e) {
    this.targetId = t, this.ee = e;
}, Vt = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = tt.Y), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, kt = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ne = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.se = Lt(), 
        /** See public getters for explanations of these fields. */
        this.ie = tt.Y, this.re = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.oe = !0;
    }
    return Object.defineProperty(t.prototype, "Ht", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.re;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.ie;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "he", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.ne;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ae", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.oe;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.ue = function(t) {
        t.H() > 0 && (this.oe = !0, this.ie = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.ce = function() {
        var t = wt(), e = wt(), n = wt();
        return this.se.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                T();
            }
        })), new _t(this.ie, this.re, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.le = function() {
        this.oe = !1, this.se = Lt();
    }, t.prototype._e = function(t, e) {
        this.oe = !0, this.se = this.se.nt(t, e);
    }, t.prototype.fe = function(t) {
        this.oe = !0, this.se = this.se.remove(t);
    }, t.prototype.de = function() {
        this.ne += 1;
    }, t.prototype.we = function() {
        this.ne -= 1;
    }, t.prototype.Te = function() {
        this.oe = !0, this.re = !0;
    }, t;
}(), Ut = /** @class */ function() {
    function t(t) {
        this.Ee = t, 
        /** The internal state of all tracked targets. */
        this.me = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Ie = pt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ae = St(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Re = new ct(k)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Pe = function(t) {
        for (var e = 0, n = t.Zt; e < n.length; e++) {
            var r = n[e];
            t.te instanceof nn ? this.Ve(r, t.te) : t.te instanceof rn && this.ye(r, t.key, t.te);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.ye(s, t.key, t.te);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.pe = function(t) {
        var e = this;
        this.ge(t, (function(n) {
            var r = e.ve(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.be(n) && r.ue(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.we(), r.he || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.le(), r.ue(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.we(), r.he || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.be(n) && (r.Te(), r.ue(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.be(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Se(n), r.ue(t.resumeToken));
                break;

              default:
                T();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.ge = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.me.forEach((function(t, r) {
            n.be(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.Ce = function(t) {
        var e = t.targetId, n = t.ee.count, r = this.De(e);
        if (r) {
            var i = r.target;
            if (K(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new W(i.path);
                this.ye(e, o, new rn(o, F.min()));
            } else _(1 === n); else this.Fe(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Se(e), this.Re = this.Re.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.$e = function(t) {
        var e = this, n = new Map;
        this.me.forEach((function(r, i) {
            var o = e.De(i);
            if (o) {
                if (r.Ht && K(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new W(o.target.path);
                    null !== e.Ie.get(s) || e.Ne(i, s) || e.ye(i, s, new rn(s, t));
                }
                r.ae && (n.set(i, r.ce()), r.le());
            }
        }));
        var r = wt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ae.forEach((function(t, n) {
            var i = !0;
            n.St((function(t) {
                var n = e.De(t);
                return !n || 2 /* LimboResolution */ === n.X || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new Tt(t, n, this.Re, this.Ie, r);
        return this.Ie = pt(), this.Ae = St(), this.Re = new ct(k), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Ve = function(t, e) {
        if (this.be(t)) {
            var n = this.Ne(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.ve(t)._e(e.key, n), this.Ie = this.Ie.nt(e.key, e), this.Ae = this.Ae.nt(e.key, this.ke(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.ye = function(t, e, n) {
        if (this.be(t)) {
            var r = this.ve(t);
            this.Ne(t, e) ? r._e(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.fe(e), this.Ae = this.Ae.nt(e, this.ke(e).delete(t)), n && (this.Ie = this.Ie.nt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.me.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Fe = function(t) {
        var e = this.ve(t).ce();
        return this.Ee.xe(t).size + e.Yt.size - e.Jt.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.de = function(t) {
        this.ve(t).de();
    }, t.prototype.ve = function(t) {
        var e = this.me.get(t);
        return e || (e = new kt, this.me.set(t, e)), e;
    }, t.prototype.ke = function(t) {
        var e = this.Ae.get(t);
        return e || (e = new ct(k), this.Ae = this.Ae.nt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.be = function(t) {
        var e = null !== this.De(t);
        return e || I("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.De = function(t) {
        var e = this.me.get(t);
        return e && e.he ? null : this.Ee.Oe(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Se = function(t) {
        var e = this;
        this.me.set(t, new kt), this.Ee.xe(t).forEach((function(n) {
            e.ye(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Ne = function(t, e) {
        return this.Ee.xe(t).has(e);
    }, t;
}();

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
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function St() {
    return new ut(W.P);
}

function Lt() {
    return new ut(W.P);
}

/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Rt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Ot(t) {
    var e = Bt(t.mapValue.fields.__local_write_time__.timestampValue);
    return new j(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
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
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var Mt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Ct(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Rt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : T();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function qt(t, e) {
    var n = Ct(t);
    if (n !== Ct(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Ot(t).isEqual(Ot(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = Bt(t.timestampValue), r = Bt(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Qt(t.bytesValue).isEqual(Qt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return zt(t.geoPointValue.latitude) === zt(e.geoPointValue.latitude) && zt(t.geoPointValue.longitude) === zt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return zt(t.integerValue) === zt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = zt(t.doubleValue), r = zt(e.doubleValue);
                return n === r ? Z(n) === Z(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return U(t.arrayValue.values || [], e.arrayValue.values || [], qt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (R(n) !== R(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !qt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return T();
    }
}

function xt(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return qt(t, e);
    }));
}

function jt(t, e) {
    var n = Ct(t), r = Ct(e);
    if (n !== r) return k(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return k(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = zt(t.integerValue || t.doubleValue), r = zt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Ft(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Ft(Ot(t), Ot(e));

      case 5 /* StringValue */ :
        return k(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = Qt(t), r = Qt(e);
            return n.o(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = k(n[i], r[i]);
                if (0 !== o) return o;
            }
            return k(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = k(zt(t.latitude), zt(e.latitude));
            return 0 !== n ? n : k(zt(t.longitude), zt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = jt(n[i], r[i]);
                if (o) return o;
            }
            return k(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = k(r[s], o[s]);
                if (0 !== u) return u;
                var a = jt(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return k(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw T();
    }
}

function Ft(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return k(t, e);
    var n = Bt(t), r = Bt(e), i = k(n.seconds, r.seconds);
    return 0 !== i ? i : k(n.nanos, r.nanos);
}

function Gt(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = Bt(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? Qt(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        W.B(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : T();
        var n, r;
    }(t);
}

function Bt(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (_(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = Mt.exec(t);
        if (_(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: zt(t.seconds),
        nanos: zt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function zt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Qt(t) {
    return "string" == typeof t ? tt.fromBase64String(t) : tt.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Wt(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.$()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Ht(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Zt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Yt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function Xt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Jt(t) {
    return !!t && "mapValue" in t;
}

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
 */ var $t = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Kt = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, te = function(t, e) {
    this.s = t, this.Le = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns an IntegerValue for `value`.
 */
function ee(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ne(t, e) {
    if (t.Le) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: Z(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function re(t, e) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !Z(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(e) ? ee(e) : ne(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function ie(t, e) {
    return t.Le ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function oe(t, e) {
    return t.Le ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function se(t, e) {
    return ie(t, e.A());
}

function ue(t) {
    return _(!!t), F.m(function(t) {
        var e = Bt(t);
        return new j(e.seconds, e.nanos);
    }(t));
}

function ae(t, e) {
    return function(t) {
        return new B([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).$();
}

function he(t, e) {
    return ae(t.s, e.path);
}

function ce(t, e) {
    var n, r = function(t) {
        var e = B.N(t);
        return _(be(e)), e;
    }(e);
    return _(r.get(1) === t.s.projectId), _(!r.get(3) && !t.s.database || r.get(3) === t.s.database), 
    new W((_((n = r).length > 4 && "documents" === n.get(4)), n.p(5)));
}

function fe(t, e) {
    return ae(t.s, e);
}

function le(t) {
    return new B([ "projects", t.s.projectId, "databases", t.s.database ]).$();
}

function pe(t, e, n) {
    return {
        name: he(t, e),
        fields: n.proto.mapValue.fields
    };
}

function de(t, e) {
    var n;
    if (e instanceof ze) n = {
        update: pe(t, e.key, e.value)
    }; else if (e instanceof Xe) n = {
        delete: he(t, e.key)
    }; else if (e instanceof Qe) n = {
        update: pe(t, e.key, e.data),
        updateMask: we(e.Me)
    }; else if (e instanceof He) n = {
        transform: {
            document: he(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof Te) return {
                        fieldPath: e.field.$(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof _e) return {
                        fieldPath: e.field.$(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Pe) return {
                        fieldPath: e.field.$(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof ke) return {
                        fieldPath: e.field.$(),
                        increment: n.qe
                    };
                    throw T();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof Je)) return T();
        n = {
            verify: he(t, e.key)
        };
    }
    return e.Ue.Be || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: se(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : T();
    }(t, e.Ue)), n;
}

function ye(t, e) {
    return {
        documents: [ fe(t, e.path) ]
    };
}

function ve(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = fe(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = fe(t, r.g()), n.structuredQuery.from = [ {
        collectionId: r.S()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                return t instanceof ln ? 
                // visible for testing
                function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (Xt(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Yt(t.value)) return {
                            unaryFilter: {
                                field: me(t.field),
                                op: "IS_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: me(t.field),
                            op: (e = t.op, Kt[e]),
                            value: t.value
                        }
                    };
                    // visible for testing
                                        var e;
                }(t) : T();
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            return {
                field: me((e = t).field),
                direction: (n = e.dir, $t[n])
            };
            // visible for testing
                        var e, n;
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.Le || H(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = ge(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = ge(e.endAt)), n;
}

function ge(t) {
    return {
        before: t.before,
        values: t.position
    };
}

// visible for testing
function me(t) {
    return {
        fieldPath: t.$()
    };
}

function we(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.$());
    })), {
        fieldPaths: e
    };
}

function be(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
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
/** Represents a transform within a TransformMutation. */ var Ee = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Qe = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Ie(t, e, n) {
    return t instanceof Te ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof _e ? De(t, e) : t instanceof Pe ? Ve(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ae(t, e), r = Ue(n) + Ue(t.qe);
        return Ht(n) && Ht(t.qe) ? ee(r) : ne(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Ne(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof _e ? De(t, e) : t instanceof Pe ? Ve(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function Ae(t, e) {
    return t instanceof ke ? Ht(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Te = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n;
}(Ee), _e = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Ee);

/** Transforms an array value via a union operation. */ function De(t, e) {
    for (var n = Se(e), r = function(t) {
        n.some((function(e) {
            return qt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Pe = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Ee);

function Ve(t, e) {
    for (var n = Se(e), r = function(t) {
        n = n.filter((function(e) {
            return !qt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var ke = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.qe = n, r;
    }
    return t(n, e), n;
}(Ee);

function Ue(t) {
    return zt(t.integerValue || t.doubleValue);
}

function Se(t) {
    return Zt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

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
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var Le = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(Q.P)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.We = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].C(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return U(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Re = function(t, e) {
    this.field = t, this.transform = e;
};

/** A field path and the TransformOperation to perform upon it. */
/** The result of successfully applying a mutation to the backend. */ var Oe = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, Me = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.je = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Be", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function Ce(t, e) {
    return void 0 !== t.updateTime ? e instanceof nn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof nn;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var qe = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function xe(t, e, n) {
    return t instanceof ze ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new nn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof Qe ? function(t, e, n) {
        if (!Ce(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(t.key, n.version);
        var r = We(t, e);
        return new nn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof He ? function(t, e, n) {
        if (_(null != n.transformResults), !Ce(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new on(t.key, n.version);
        var r = Ze(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param baseDoc The document prior to applying this mutation batch.
 * @param serverTransformResults The transform results received by the server.
 * @return The transform results list.
 */
        function(t, e, n) {
            var r = [];
            _(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], s = o.transform, u = null;
                e instanceof nn && (u = e.field(o.field)), r.push(Ne(s, u, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, s = Ye(t, r.data(), i);
        return new nn(t.key, o, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new rn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function je(t, e, n, r) {
    return t instanceof ze ? function(t, e) {
        if (!Ce(t.Ue, e)) return e;
        var n = Be(e);
        return new nn(t.key, n, t.value, {
            Ge: !0
        });
    }(t, e) : t instanceof Qe ? function(t, e) {
        if (!Ce(t.Ue, e)) return e;
        var n = Be(e), r = We(t, e);
        return new nn(t.key, n, r, {
            Ge: !0
        });
    }(t, e) : t instanceof He ? function(t, e, n, r) {
        if (!Ce(t.Ue, e)) return e;
        var i = Ze(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
                var u = s[o], a = u.transform, h = null;
                n instanceof nn && (h = n.field(u.field)), null === h && r instanceof nn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                h = r.field(u.field)), i.push(Ie(a, h, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), s = Ye(t, i.data(), o);
        return new nn(t.key, i.version, s, {
            Ge: !0
        });
    }(t, e, r, n) : function(t, e) {
        return Ce(t.Ue, e) ? new rn(t.key, F.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function Fe(t, e) {
    return t instanceof He ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof nn ? e.field(o.field) : void 0, u = Ae(o.transform, s || null);
            null != u && (n = null == n ? (new Ke).set(o.field, u) : n.set(o.field, u));
        }
        return n ? n.Ke() : null;
    }(t, e) : null;
}

function Ge(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ue.isEqual(e.Ue) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.Me.isEqual(e.Me) : 2 /* Transform */ !== t.type || U(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof _e && e instanceof _e || t instanceof Pe && e instanceof Pe ? U(t.elements, e.elements, qt) : t instanceof ke && e instanceof ke ? qt(t.qe, e.qe) : t instanceof Te && e instanceof Te;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Be(t) {
    return t instanceof nn ? t.version : F.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var ze = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Ue = r, i.type = 0 /* Set */ , 
        i;
    }
    return t(n, e), n;
}(qe), Qe = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.Me = r, o.Ue = i, o.type = 1 /* Patch */ , 
        o;
    }
    return t(n, e), n;
}(qe);

function We(t, e) {
    return function(t, e) {
        var n = new Ke(e);
        return t.Me.fields.forEach((function(e) {
            if (!e._()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.Ke();
    }(t, e instanceof nn ? e.data() : $e.empty());
}

var He = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ue = Me.exists(!0), r;
    }
    return t(n, e), n;
}(qe);

function Ze(t, e) {
    return e;
}

function Ye(t, e, n) {
    for (var r = new Ke(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.Ke();
}

/** A mutation that deletes the document at the given key. */ var Xe = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ue = n, r.type = 3 /* Delete */ , r;
    }
    return t(n, e), n;
}(qe), Je = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ue = n, r.type = 4 /* Verify */ , r;
    }
    return t(n, e), n;
}(qe), $e = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t._()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!Jt(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.S()]) || null;
    }, t.prototype.isEqual = function(t) {
        return qt(this.proto, t.proto);
    }, t;
}(), Ke = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = $e.empty()), this.ze = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.He = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Ye(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Ye(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Ye = function(t, e) {
        for (var n = this.He, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === Ct(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.S(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.Ke = function() {
        var t = this.Xe(Q.k(), this.He);
        return null != t ? new $e(t) : this.ze;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.Xe = function(t, e) {
        var n = this, r = !1, i = this.ze.field(t), o = Jt(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.Xe(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function tn(t) {
    var e = [];
    return O(t.fields || {}, (function(t, n) {
        var r = new Q([ t ]);
        if (Jt(n)) {
            var i = tn(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new Le(e)
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
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var en = function(t, e) {
    this.key = t, this.version = e;
}, nn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).Je = r, o.Ge = !!i.Ge, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return t(n, e), n.prototype.field = function(t) {
        return this.Je.field(t);
    }, n.prototype.data = function() {
        return this.Je;
    }, n.prototype.Ze = function() {
        return this.Je.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ge === t.Ge && this.hasCommittedMutations === t.hasCommittedMutations && this.Je.isEqual(t.Je);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Je.toString() + ", {hasLocalMutations: " + this.Ge + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.Ge || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(en), rn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return t(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(en), on = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(en), sn = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.tn = n, 
        this.filters = r, this.limit = i, this.en = o, this.startAt = s, this.endAt = u, 
        this.nn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.sn = null, this.startAt && this.rn(this.startAt), this.endAt && this.rn(this.endAt);
    }
    return t.on = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.nn) {
                this.nn = [];
                var t = this.hn(), e = this.an();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.L() || this.nn.push(new In(t)), this.nn.push(new In(Q.M(), "asc" /* ASCENDING */)); else {
                    for (var n = !1, r = 0, i = this.tn; r < i.length; r++) {
                        var o = i[r];
                        this.nn.push(o), o.field.L() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.tn.length > 0 ? this.tn[this.tn.length - 1].dir : "asc" /* ASCENDING */;
                        this.nn.push(new In(Q.M(), s));
                    }
                }
            }
            return this.nn;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.un = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.tn.slice(), n, this.limit, this.en, this.startAt, this.endAt);
    }, t.prototype.cn = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.tn.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.en, this.startAt, this.endAt);
    }, t.prototype.ln = function(e) {
        return new t(this.path, this.collectionGroup, this.tn.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype._n = function(e) {
        return new t(this.path, this.collectionGroup, this.tn.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.fn = function(e) {
        return new t(this.path, this.collectionGroup, this.tn.slice(), this.filters.slice(), this.limit, this.en, e, this.endAt);
    }, t.prototype.dn = function(e) {
        return new t(this.path, this.collectionGroup, this.tn.slice(), this.filters.slice(), this.limit, this.en, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.wn = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.tn.slice(), this.filters.slice(), this.limit, this.en, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.Tn = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.tn.length || 1 === this.tn.length && this.tn[0].field.L());
    }, t.prototype.En = function() {
        return !H(this.limit) && "F" /* First */ === this.en;
    }, t.prototype.mn = function() {
        return !H(this.limit) && "L" /* Last */ === this.en;
    }, t.prototype.an = function() {
        return this.tn.length > 0 ? this.tn[0].field : null;
    }, t.prototype.hn = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof ln && n.In()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.An = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof ln && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.Rn = function() {
        return K(this.Pn());
    }, t.prototype.Vn = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.Pn = function() {
        if (!this.sn) if ("F" /* First */ === this.en) this.sn = X(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = "desc" /* DESCENDING */ === r.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new In(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new mn(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new mn(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.sn = X(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.sn;
    }, t.prototype.rn = function(t) {}, t;
}();

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ function un(t, e) {
    return $(t.Pn(), e.Pn()) && t.en === e.en;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function an(t) {
    return J(t.Pn()) + "|lt:" + t.en;
}

function hn(t) {
    return "Query(target=" + function(t) {
        var e = t.path.$();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.$() + " " + e.op + " " + Gt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        H(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return (e = t).field.$() + " (" + e.dir + ")";
            var e;
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + wn(t.startAt)), t.endAt && (e += ", endAt: " + wn(t.endAt)), 
        "Target(" + e + ")";
    }(t.Pn()) + "; limitType=" + t.en + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function cn(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.U(t.collectionGroup) && t.path.C(n) : W.W(t.path) ? t.path.isEqual(n) : t.path.D(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.tn; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.L() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !bn(t.startAt, t.orderBy, e)) && (!t.endAt || !bn(t.endAt, t.orderBy, e));
    }(t, e);
}

function fn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = t.orderBy; i < o.length; i++) {
            var s = o[i], u = Nn(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.L();
        }
        return 0;
    };
}

var ln = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return t(n, e), n.create = function(t, e, r) {
        if (t.L()) return "in" /* IN */ === e ? new dn(t, r) : new pn(t, e, r);
        if (Yt(r)) {
            if ("==" /* EQUAL */ !== e) throw new x(q.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (Xt(r)) {
            if ("==" /* EQUAL */ !== e) throw new x(q.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new yn(t, r) : "in" /* IN */ === e ? new vn(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new gn(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && Ct(this.value) === Ct(e) && this.yn(jt(e, this.value));
    }, n.prototype.yn = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return T();
        }
    }, n.prototype.In = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var pn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = W.B(r.referenceValue), i;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = W.P(t.key, this.key);
        return this.yn(e);
    }, n;
}(ln), dn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return W.B(t.referenceValue);
        })), r;
    }
    return t(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(ln), yn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return Zt(e) && xt(e.arrayValue, this.value);
    }, n;
}(ln), vn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && xt(this.value.arrayValue, e);
    }, n;
}(ln), gn = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!Zt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return xt(e.value.arrayValue, t);
        }));
    }, n;
}(ln), mn = function(t, e) {
    this.position = t, this.before = e;
};

/** Filter that matches on key fields within an array. */ function wn(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return Gt(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function bn(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.L() ? W.P(W.B(s.referenceValue), n.key) : jt(s, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function En(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!qt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var In = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function Nn(t, e, n) {
    var r = t.field.L() ? W.P(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? jt(r, i) : T();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return T();
    }
}

function An(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

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
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var Tn = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.pn = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.gn = function(t, e, n) {
        for (var r = n.vn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = xe(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.bn = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = je(i, e, e, this.pn));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = je(a, e, o, this.pn));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Sn = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.bn(r.key, t.get(r.key));
            i && (n = n.nt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), wt());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && U(this.mutations, t.mutations, (function(t, e) {
            return Ge(t, e);
        })) && U(this.baseMutations, t.baseMutations, (function(t, e) {
            return Ge(t, e);
        }));
    }, t;
}(), _n = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.Cn = e, this.vn = n, this.Dn = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        _(e.mutations.length === r.length);
        for (var i = gt, o = e.mutations, s = 0; s < o.length; s++) i = i.nt(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Dn = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Fn = null, this.$n = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Nn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.kn = !1, t((function(t) {
            e.Nn = !0, e.result = t, e.Fn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Fn(t);
        }), (function(t) {
            e.Nn = !0, e.error = t, e.$n && e.$n(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.kn && T(), this.kn = !0, this.Nn ? this.error ? this.xn(n, this.error) : this.On(e, this.result) : new t((function(t, i) {
            r.Fn = function(n) {
                r.On(e, n).next(t, i);
            }, r.$n = function(e) {
                r.xn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Ln = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Mn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.On = function(e, n) {
        return e ? this.Mn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.xn = function(e, n) {
        return e ? this.Mn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.qn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Bn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.qn(r);
    }, t;
}(), Pn = /** @class */ function() {
    function t(t, e, n) {
        this.Un = t, this.Qn = e, this.Wn = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.jn = function(t, e) {
        var n = this;
        return this.Qn.Gn(t, e).next((function(r) {
            return n.Kn(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Kn = function(t, e, n) {
        return this.Un.zn(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].bn(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Hn = function(t, e, n) {
        var r = dt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].bn(t, e);
            }
            r = r.nt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Yn = function(t, e) {
        var n = this;
        return this.Un.getEntries(t, e).next((function(e) {
            return n.Xn(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Xn = function(t, e) {
        var n = this;
        return this.Qn.Jn(t, e).next((function(r) {
            var i = n.Hn(t, e, r), o = pt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new rn(t, F.min())), o = o.nt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Zn = function(t, e, n) {
        return e.Rn() ? this.ts(t, e.path) : e.Vn() ? this.es(t, e, n) : this.ns(t, e, n);
    }, t.prototype.ts = function(t, e) {
        // Just do a simple document lookup.
        return this.jn(t, new W(e)).next((function(t) {
            var e = vt();
            return t instanceof nn && (e = e.nt(t.key, t)), e;
        }));
    }, t.prototype.es = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = vt();
        return this.Wn.ss(t, i).next((function(s) {
            return Dn.forEach(s, (function(s) {
                var u = e.wn(s.child(i));
                return r.ns(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.nt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.ns = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Un.Zn(t, e, n).next((function(n) {
            return r = n, o.Qn.rs(t, e);
        })).next((function(e) {
            return i = e, o.os(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = je(a, c, c, o.pn);
                    r = f instanceof nn ? r.nt(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                cn(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.os = function(t, e, n) {
        for (var r = wt(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Qe && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.Un.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof nn && (h = h.nt(t, e));
            })), h;
        }));
    }, t;
}(), Vn = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.hs = n, this.as = r;
    }
    return t.us = function(e, n) {
        for (var r = wt(), i = wt(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), kn = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.cs = function(t) {
            return n.ls(t);
        }, this._s = function(t) {
            return e.fs(t);
        });
    }
    return t.prototype.ls = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this._s && this._s(t), t;
    }, t;
}();

/** The result of applying a mutation batch to the backend. */ kn.ds = -1;

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
var Un = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, Sn = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.ws = t, this.Ts = e, this.Es = n, this.ms = r, this.Is = i, this.As = 0, this.Rs = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Ps = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.As = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Vs = function() {
        this.As = this.Is;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.ys = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.As + this.ps()), r = Math.max(0, Date.now() - this.Ps), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && I("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.As + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Rs = this.ws.gs(this.Ts, i, (function() {
            return e.Ps = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.As *= this.ms, this.As < this.Es && (this.As = this.Es), this.As > this.Is && (this.As = this.Is);
    }, t.prototype.vs = function() {
        null !== this.Rs && (this.Rs.bs(), this.Rs = null);
    }, t.prototype.cancel = function() {
        null !== this.Rs && (this.Rs.cancel(), this.Rs = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.ps = function() {
        return (Math.random() - .5) * this.As;
    }, t;
}(), Ln = /** @class */ function() {
    function t() {
        this.Ss = new Rn;
    }
    return t.prototype.Cs = function(t, e) {
        return this.Ss.add(e), Dn.resolve();
    }, t.prototype.ss = function(t, e) {
        return Dn.resolve(this.Ss.getEntries(e));
    }, t;
}(), Rn = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.S(), n = t.g(), r = this.index[e] || new ct(B.P), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.S(), n = t.g(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new ct(B.P)).F();
    }, t;
}(), On = /** @class */ function() {
    function t(t) {
        this.Ds = t;
    }
    return t.prototype.next = function() {
        return this.Ds += 2, this.Ds;
    }, t.Fs = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.$s = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}();

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
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
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
/** Verifies whether `e` is an IndexedDbTransactionError. */ function Mn(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2020 Google LLC
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
/** The Platform's 'window' implementation or null if not available. */ function Cn() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

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
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var qn = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Ns = t, this.Ts = e, this.ks = n, this.op = r, this.xs = i, this.Os = new Un, 
        this.then = this.Os.promise.then.bind(this.Os.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Os.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Ls = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.Ms = setTimeout((function() {
            return e.qs();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.bs = function() {
        return this.qs();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.Ms && (this.clearTimeout(), this.Os.reject(new x(q.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.qs = function() {
        var t = this;
        this.Ns.Bs((function() {
            return null !== t.Ms ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Os.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.Ms && (this.xs(this), clearTimeout(this.Ms), this.Ms = null);
    }, t;
}(), xn = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Us = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Qs = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Ws = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.js = [], 
        // visible for testing
        this.Gs = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ks = !1, 
        // List of TimerIds to fast-forward delays for.
        this.zs = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Hs = new Sn(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Ys = function() {
            return t.Hs.vs();
        };
        var e = Cn();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Ys);
    }
    return Object.defineProperty(t.prototype, "Xs", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Ws;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Bs = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Js = function(t) {
        this.Zs(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.ti(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.ei = function(t) {
        return this.Zs(), this.ti(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.ni = function(t) {
        return e(this, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Zs(), this.Ws ? [ 3 /*break*/ , 2 ] : (this.Ws = !0, (e = Cn()) && e.removeEventListener("visibilitychange", this.Ys), 
                    [ 4 /*yield*/ , this.ei(t) ]);

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Zs(), this.Ws ? new Promise((function(t) {})) : this.ti(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.si = function(t) {
        var e = this;
        this.Qs.push(t), this.Bs((function() {
            return e.ii();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.ii = function() {
        return e(this, void 0, void 0, (function() {
            var t, e = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.Qs.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Qs[0]() ];

                  case 2:
                    return n.sent(), this.Qs.shift(), this.Hs.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!Mn(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return I("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Qs.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.Hs.ys((function() {
                        return e.ii();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ti = function(t) {
        var e = this, n = this.Us.then((function() {
            return e.Ks = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Gs = t, e.Ks = !1, N("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Ks = !1, t;
            }));
        }));
        return this.Us = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.gs = function(t, e, n) {
        var r = this;
        this.Zs(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.zs.indexOf(t) > -1 && (e = 0);
        var i = qn.Ls(this, t, e, n, (function(t) {
            return r.ri(t);
        }));
        return this.js.push(i), i;
    }, t.prototype.Zs = function() {
        this.Gs && T();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.oi = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.hi = function() {
        return e(this, void 0, void 0, (function() {
            var t;
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Us ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Us) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.ai = function(t) {
        for (var e = 0, n = this.js; e < n.length; e++) {
            if (n[e].Ts === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.ui = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.hi().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.js.sort((function(t, e) {
                return t.ks - e.ks;
            }));
            for (var n = 0, r = e.js; n < r.length; n++) {
                var i = r[n];
                if (i.bs(), "all" /* All */ !== t && i.Ts === t) break;
            }
            return e.hi();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.ci = function(t) {
        this.zs.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.ri = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.js.indexOf(t);
        this.js.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function jn(t, e) {
    if (N("AsyncQueue", e + ": " + t), Mn(t)) return new x(q.UNAVAILABLE, e + ": " + t);
    throw t;
}

var Fn = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.li = t, this._i = e, this.fi = n;
    }
    return t.di = function(e) {
        return new t(e, t.wi, t.Ti);
    }, t;
}();

Fn.Ei = -1, Fn.mi = 1048576, Fn.Ii = 41943040, Fn.wi = 10, Fn.Ti = 1e3, Fn.Ai = new Fn(Fn.Ii, Fn.wi, Fn.Ti), 
Fn.Ri = new Fn(Fn.Ei, 0, 0);

/**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
var Gn = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.Pi = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Vi = new ut(k), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.yi = new C((function(t) {
            return J(t);
        }), $), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.pi = F.min(), this.Qn = t.gi(n), this.vi = t.bi(), this.Si = t.Ci(), this.Di = new Pn(this.vi, this.Qn, this.persistence.Fi()), 
        this.Pi.$i(this.Di);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Ni = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.Qn, r = this.Di, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(n) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.Qn.ki(n).next((function(s) {
                            return i = s, e = o.persistence.gi(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new Pn(o.vi, e, o.persistence.Fi()), e.ki(n);
                        })).next((function(t) {
                            for (var e = [], o = [], s = wt(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                e.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var v = 0, g = y.mutations; v < g.length; v++) {
                                    var m = g[v];
                                    s = s.add(m.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.Yn(n, s).next((function(t) {
                                return {
                                    xi: t,
                                    Oi: e,
                                    Li: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = n.sent(), [ 2 /*return*/ , (this.Qn = e, this.Di = r, this.Pi.$i(this.Di), 
                    i) ];
                }
            }));
        }));
    }, t.prototype.Mi = function(t) {
        var e, n = this, r = j.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), wt());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.Di.Yn(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = Fe(h, e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new Qe(h.key, c, tn(c.proto.mapValue), Me.exists(!0)));
                }
                return n.Qn.qi(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.Sn(e);
            return {
                batchId: t.batchId,
                Bi: n
            };
        }));
    }, t.prototype.Ui = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.vi.Qi({
                Wi: !0
            });
            return e.ji(n, t, i).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.Qn.Gi(n);
            })).next((function() {
                return e.Di.Yn(n, r);
            }));
        }));
    }, t.prototype.Ki = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.Qn.zi(n, t).next((function(t) {
                return _(null !== t), r = t.keys(), e.Qn.Hi(n, t);
            })).next((function() {
                return e.Qn.Gi(n);
            })).next((function() {
                return e.Di.Yn(n, r);
            }));
        }));
    }, t.prototype.Yi = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.Qn.Yi(e);
        }));
    }, t.prototype.Xi = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.Si.Xi(e);
        }));
    }, t.prototype.Ji = function(e) {
        var n = this, r = e.J, i = this.Vi;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.vi.Qi({
                Wi: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.Vi;
            var u = [];
            e.Qt.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.Si.Zi(o, e.Jt, s).next((function() {
                        return n.Si.tr(o, e.Yt, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.H() > 0) {
                        var c = a.tt(h, r).Z(o.er);
                        i = i.nt(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.nr(a, c, e) && u.push(n.Si.sr(o, c));
                    }
                }
            }));
            var a = pt(), h = wt();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.jt.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.jt.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        h instanceof rn && h.version.isEqual(F.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.ir(i, r), a = a.nt(i, h)) : null == c || h.version.o(c.version) > 0 || 0 === h.version.o(c.version) && c.hasPendingWrites ? (s.rr(h, r), 
                    a = a.nt(i, h)) : I("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.Gt.has(i) && u.push(n.persistence.hr.or(o, i));
                }));
            }))), !r.isEqual(F.min())) {
                var c = n.Si.Xi(o).next((function(t) {
                    return n.Si.ar(o, o.er, r);
                }));
                u.push(c);
            }
            return Dn.qn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.Di.Xn(o, a);
            }));
        })).then((function(t) {
            return n.Vi = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.nr = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return _(e.resumeToken.H() > 0), 0 === t.resumeToken.H() || (e.J.I() - t.J.I() >= this.ur || n.Yt.size + n.Xt.size + n.Jt.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, t.prototype.cr = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o, s, u, a, h, c = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(e) {
                        return Dn.forEach(t, (function(t) {
                            return Dn.forEach(t.hs, (function(n) {
                                return c.persistence.hr.lr(e, t.targetId, n);
                            })).next((function() {
                                return Dn.forEach(t.as, (function(n) {
                                    return c.persistence.hr._r(e, t.targetId, n);
                                }));
                            }));
                        }));
                    })) ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 3 ];

                  case 2:
                    if (!Mn(e = n.sent())) throw e;
                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.
                                        return I("LocalStore", "Failed to update sequence numbers: " + e), 
                    [ 3 /*break*/ , 3 ];

                  case 3:
                    for (r = 0, i = t; r < i.length; r++) o = i[r], s = o.targetId, o.fromCache || (u = this.Vi.get(s), 
                    a = u.J, h = u.et(a), 
                    // Advance the last limbo free snapshot version
                    this.Vi = this.Vi.nt(s, h));
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.dr = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.Qn.wr(n, t);
        }));
    }, t.prototype.Tr = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.Di.jn(n, t);
        }));
    }, t.prototype.Er = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.Si.mr(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Dn.resolve(r)) : e.Si.Ir(n).next((function(i) {
                    return r = new rt(t, i, 0 /* Listen */ , n.er), e.Si.Ar(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            // If Multi-Tab is enabled, the existing target data may be newer than
            // the in-memory data
            var r = e.Vi.get(n.targetId);
            return (null === r || n.J.o(r.J) > 0) && (e.Vi = e.Vi.nt(n.targetId, n), e.yi.set(t, n.targetId)), 
            n;
        }));
    }, t.prototype.mr = function(t, e) {
        var n = this.yi.get(e);
        return void 0 !== n ? Dn.resolve(this.Vi.get(n)) : this.Si.mr(t, e);
    }, t.prototype.Rr = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o, s = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = this.Vi.get(t), i = r ? "readwrite" : "readwrite-primary", n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 5 ]), r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.persistence.runTransaction("Release target", i, (function(t) {
                        return s.persistence.hr.removeTarget(t, e);
                    })) ];

                  case 2:
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 5 ];

                  case 4:
                    if (!Mn(o = n.sent())) throw o;
                    // All `releaseTarget` does is record the final metadata state for the
                    // target, but we've been recording this periodically during target
                    // activity. If we lose this write this could cause a very slight
                    // difference in the order of target deletion during GC, but we
                    // don't define exact LRU semantics so this is acceptable.
                                        return I("LocalStore", "Failed to update sequence numbers for target " + t + ": " + o), 
                    [ 3 /*break*/ , 5 ];

                  case 5:
                    return this.Vi = this.Vi.remove(t), this.yi.delete(e.target), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Pr = function(t, e) {
        var n = this, r = F.min(), i = wt();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.mr(o, t.Pn()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.Si.Vr(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.Pi.Zn(o, t, e ? r : F.min(), e ? i : wt());
            })).next((function(t) {
                return {
                    documents: t,
                    yr: i
                };
            }));
        }));
    }, t.prototype.ji = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Dn.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.zn(t, r);
            })).next((function(t) {
                var o = t, s = e.Dn.get(r);
                _(null !== s), (!o || o.version.o(s) < 0) && ((o = i.gn(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.rr(o, e.Cn));
            }));
        })), s.next((function() {
            return r.Qn.Hi(t, i);
        }));
    }, t.prototype.pr = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.gr(n, e.Vi);
        }));
    }, t;
}();

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function Bn(t) {
    return e(this, void 0, void 0, (function() {
        return n(this, (function(e) {
            if (t.code !== q.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return I("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

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
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ Gn.ur = 3e8;

var zn = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.vr = new ct(Qn.br), 
        // A set of outstanding references to a document sorted by target id.
        this.Sr = new ct(Qn.Cr)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype._ = function() {
        return this.vr._();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.lr = function(t, e) {
        var n = new Qn(t, e);
        this.vr = this.vr.add(n), this.Sr = this.Sr.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Dr = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.lr(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype._r = function(t, e) {
        this.Fr(new Qn(t, e));
    }, t.prototype.$r = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n._r(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Nr = function(t) {
        var e = this, n = new W(new B([])), r = new Qn(n, t), i = new Qn(n, t + 1), o = [];
        return this.Sr.bt([ r, i ], (function(t) {
            e.Fr(t), o.push(t.key);
        })), o;
    }, t.prototype.kr = function() {
        var t = this;
        this.vr.forEach((function(e) {
            return t.Fr(e);
        }));
    }, t.prototype.Fr = function(t) {
        this.vr = this.vr.delete(t), this.Sr = this.Sr.delete(t);
    }, t.prototype.xr = function(t) {
        var e = new W(new B([])), n = new Qn(e, t), r = new Qn(e, t + 1), i = wt();
        return this.Sr.bt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Or = function(t) {
        var e = new Qn(t, 0), n = this.vr.Ct(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Qn = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Lr = e
        /** Compare by key then by ID */;
    }
    return t.br = function(t, e) {
        return W.P(t.key, e.key) || k(t.Lr, e.Lr);
    }, 
    /** Compare by ID then by key */ t.Cr = function(t, e) {
        return k(t.Lr, e.Lr) || W.P(t.key, e.key);
    }, t;
}();

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
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function Wn(t, e) {
    if (0 !== e.length) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + cr(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function Hn(t, e, n) {
    if (e.length !== n) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires " + cr(n, "argument") + ", but was called with " + cr(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function Zn(t, e, n) {
    if (e.length < n) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires at least " + cr(n, "argument") + ", but was called with " + cr(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function Yn(t, e, n, r) {
    if (e.length < n || e.length > r) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + cr(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function Xn(t, e, n, r) {
    nr(t, e, hr(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function Jn(t, e, n, r) {
    void 0 !== r && Xn(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function $n(t, e, n, r) {
    nr(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function Kn(t, e, n, r) {
    void 0 !== r && $n(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function tr(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(ir(a));
        }
        var h = ir(r);
        throw new x(q.INVALID_ARGUMENT, "Invalid value " + h + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function er(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new x(q.INVALID_ARGUMENT, "Invalid value " + ir(r) + " provided to function " + t + "() for its " + hr(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function nr(t, e, n, r) {
    if (!("object" === e ? rr(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = ir(r);
        throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function rr(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function ir(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : T();
}

function or(t, e, n) {
    if (void 0 === n) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + hr(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function sr(t, e, n) {
    O(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new x(q.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function ur(t, e, n, r) {
    var i = ir(r);
    return new x(q.INVALID_ARGUMENT, "Function " + t + "() requires its " + hr(n) + " argument to be a " + e + ", but it was: " + i);
}

function ar(t, e, n) {
    if (n <= 0) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires its " + hr(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function hr(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function cr(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

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
/** Helper function to assert Uint8Array is available at runtime. */ function fr() {
    if ("undefined" == typeof Uint8Array) throw new x(q.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function lr() {
    if ("undefined" == typeof atob) throw new x(q.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var pr = /** @class */ function() {
    function t(t) {
        lr(), this.Mr = t;
    }
    return t.fromBase64String = function(e) {
        Hn("Blob.fromBase64String", arguments, 1), Xn("Blob.fromBase64String", "string", 1, e), 
        lr();
        try {
            return new t(tt.fromBase64String(e));
        } catch (e) {
            throw new x(q.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (Hn("Blob.fromUint8Array", arguments, 1), fr(), !(e instanceof Uint8Array)) throw ur("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(tt.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return Hn("Blob.toBase64", arguments, 0), lr(), this.Mr.toBase64();
    }, t.prototype.toUint8Array = function() {
        return Hn("Blob.toUint8Array", arguments, 0), fr(), this.Mr.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Mr.isEqual(t.Mr);
    }, t;
}(), dr = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new x(q.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + cr(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (Xn("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new x(q.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.qr = new Q(t);
}, yr = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, t) || this;
    }
    return t(n, e), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(Q.M().$());
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw ur("isEqual", "FieldPath", 1, t);
        return this.qr.isEqual(t.qr);
    }, n;
}(dr), vr = new RegExp("[~\\*/\\[\\]]"), gr = function() {
    /** A pointer to the implementing class. */
    this.Br = this;
}, mr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Ur = t, n;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        if (2 /* MergeSet */ !== t.Wr) throw 1 /* Update */ === t.Wr ? t.jr(this.Ur + "() can only appear at the top level of your update data") : t.jr(this.Ur + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Me.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(gr);

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
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */
function wr(t, e, n) {
    return new Lr({
        Wr: 3 /* Argument */ ,
        Gr: e.settings.Gr,
        methodName: t.Ur,
        Kr: n
    }, e.s, e.serializer, e.ignoreUndefinedProperties);
}

var br = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Ur = t, n;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        return new Re(t.path, new Te);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(gr), Er = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Ur = t, r.zr = n, r;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        var e = wr(this, t, 
        /*array=*/ !0), n = this.zr.map((function(t) {
            return xr(t, e);
        })), r = new _e(n);
        return new Re(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(gr), Ir = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Ur = t, r.zr = n, r;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        var e = wr(this, t, 
        /*array=*/ !0), n = this.zr.map((function(t) {
            return xr(t, e);
        })), r = new Pe(n);
        return new Re(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(gr), Nr = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Ur = t, r.Hr = n, r;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        var e = new ke(t.serializer, re(t.serializer, this.Hr));
        return new Re(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(gr), Ar = /** @class */ function(e) {
    function n() {
        return e.call(this) || this;
    }
    return t(n, e), n.delete = function() {
        return Wn("FieldValue.delete", arguments), new Tr(new mr("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return Wn("FieldValue.serverTimestamp", arguments), new Tr(new br("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return Zn("FieldValue.arrayUnion", arguments, 1), new Tr(new Er("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return Zn("FieldValue.arrayRemove", arguments, 1), new Tr(new Ir("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return Xn("FieldValue.increment", "number", 1, t), Hn("FieldValue.increment", arguments, 1), 
        new Tr(new Nr("FieldValue.increment", t));
    }, n;
}(gr), Tr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Br = t, n.Ur = t.Ur, n;
    }
    return t(n, e), n.prototype.Qr = function(t) {
        return this.Br.Qr(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Br.isEqual(t.Br);
    }, n;
}(Ar), _r = /** @class */ function() {
    function t(t, e) {
        if (Hn("GeoPoint", arguments, 2), Xn("GeoPoint", "number", 1, t), Xn("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new x(q.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new x(q.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Yr = t, this.Xr = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.Yr;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.Xr;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.Yr === t.Yr && this.Xr === t.Xr;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.T = function(t) {
        return k(this.Yr, t.Yr) || k(this.Xr, t.Xr);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
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
function Dr(t) {
    return new te(t, /* useProto3Json= */ !0);
}

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
 */ var Pr = /^__.*__$/, Vr = function(t, e, n) {
    this.Jr = t, this.Zr = e, this.to = n;
}, kr = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Me = e, this.fieldTransforms = n;
    }
    return t.prototype.eo = function(t, e) {
        var n = [];
        return null !== this.Me ? n.push(new Qe(t, this.data, this.Me, e)) : n.push(new ze(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new He(t, this.fieldTransforms)), n;
    }, t;
}(), Ur = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Me = e, this.fieldTransforms = n;
    }
    return t.prototype.eo = function(t, e) {
        var n = [ new Qe(t, this.data, this.Me, e) ];
        return this.fieldTransforms.length > 0 && n.push(new He(t, this.fieldTransforms)), 
        n;
    }, t;
}();

/**
 * A reference to a document in a Firebase project.
 *
 * This class serves as a common base class for the public DocumentReferences
 * exposed in the lite, full and legacy SDK.
 */ function Sr(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw T();
    }
}

/** A "context" object passed around while parsing user data. */ var Lr = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.s = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.no(), this.fieldTransforms = i || [], this.Me = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Wr", {
        get: function() {
            return this.settings.Wr;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.so = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Me);
    }, t.prototype.io = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.so({
            path: n,
            Kr: !1
        });
        return r.ro(t), r;
    }, t.prototype.oo = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.so({
            path: n,
            Kr: !1
        });
        return r.no(), r;
    }, t.prototype.ho = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.so({
            path: void 0,
            Kr: !0
        });
    }, t.prototype.jr = function(t) {
        return Qr(t, this.settings.methodName, this.settings.ao || !1, this.path, this.settings.Gr);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Me.find((function(e) {
            return t.C(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.C(e.field);
        }));
    }, t.prototype.no = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.ro(this.path.get(t));
    }, t.prototype.ro = function(t) {
        if (0 === t.length) throw this.jr("Document fields must not be empty");
        if (Sr(this.Wr) && Pr.test(t)) throw this.jr('Document fields cannot begin and end with "__"');
    }, t;
}(), Rr = /** @class */ function() {
    function t(t, e, n) {
        this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || Dr(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.uo = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Lr({
            Wr: t,
            methodName: e,
            Gr: n,
            path: Q.k(),
            Kr: !1,
            ao: r
        }, this.s, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function Or(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.uo(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Gr("Data must be an object, but it was:", s, r);
    var u, a, h = jr(r, s);
    if (o.merge) u = new Le(s.Me), a = s.fieldTransforms; else if (o.mergeFields) {
        for (var c = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = l[f], d = void 0;
            if (p instanceof dr) d = p.qr; else {
                if ("string" != typeof p) throw T();
                d = zr(e, p, n);
            }
            if (!s.contains(d)) throw new x(q.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
            Wr(c, d) || c.push(d);
        }
        u = new Le(c), a = s.fieldTransforms.filter((function(t) {
            return u.We(t.field);
        }));
    } else u = null, a = s.fieldTransforms;
    return new kr(new $e(h), u, a);
}

/** Parse update data from an update() call. */ function Mr(t, e, n, r) {
    var i = t.uo(1 /* Update */ , e, n);
    Gr("Data must be an object, but it was:", i, r);
    var o = [], s = new Ke;
    O(r, (function(t, r) {
        var u = zr(e, t, n), a = i.oo(u);
        if (r instanceof gr && r.Br instanceof mr) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(u); else {
            var h = xr(r, a);
            null != h && (o.push(u), s.set(u, h));
        }
    }));
    var u = new Le(o);
    return new Ur(s.Ke(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Cr(t, e, n, r, i, o) {
    var s = t.uo(1 /* Update */ , e, n), u = [ Br(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new x(q.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var h = 0; h < o.length; h += 2) u.push(Br(e, o[h])), a.push(o[h + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var c = [], f = new Ke, l = u.length - 1; l >= 0; --l) if (!Wr(c, u[l])) {
        var p = u[l], d = a[l], y = s.oo(p);
        if (d instanceof gr && d.Br instanceof mr) 
        // Add it to the field mask, but don't add anything to updateData.
        c.push(p); else {
            var v = xr(d, y);
            null != v && (c.push(p), f.set(p, v));
        }
    }
    var g = new Le(c);
    return new Ur(f.Ke(), g, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function qr(t, e, n, r) {
    return void 0 === r && (r = !1), xr(n, t.uo(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function xr(t, e) {
    if (Fr(t)) return Gr("Unsupported field value:", e, t), jr(t, e);
    if (t instanceof gr) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Sr(e.Wr)) throw e.jr(t.Ur + "() can only be used with update() and set()");
        if (!e.path) throw e.jr(t.Ur + "() is not currently supported inside arrays");
        var n = t.Qr(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Me.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Kr && 4 /* ArrayArgument */ !== e.Wr) throw e.jr("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = xr(o[i], e.ho(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return re(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = j.fromDate(t);
            return {
                timestampValue: ie(e.serializer, n)
            };
        }
        if (t instanceof j) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new j(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: ie(e.serializer, r)
            };
        }
        if (t instanceof _r) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof pr) return {
            bytesValue: oe(e.serializer, t)
        };
        if (t instanceof Vr) {
            var i = e.s, o = t.Jr;
            if (!o.isEqual(i)) throw e.jr("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: ae(t.Jr || e.s, t.Zr.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.jr("Unsupported field value: " + ir(t));
    }(t, e);
}

function jr(t, e) {
    var n = {};
    return M(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Me.push(e.path) : O(t, (function(t, r) {
        var i = xr(r, e.io(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Fr(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof j || t instanceof _r || t instanceof pr || t instanceof Vr || t instanceof gr);
}

function Gr(t, e, n) {
    if (!Fr(n) || !rr(n)) {
        var r = ir(n);
        throw "an object" === r ? e.jr(t + " a custom object") : e.jr(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Br(t, e, n) {
    if (e instanceof dr) return e.qr;
    if ("string" == typeof e) return zr(t, e);
    throw Qr("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */ function zr(t, e, n) {
    try {
        return function(t) {
            if (t.search(vr) >= 0) throw new x(q.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (yr.bind.apply(yr, r([ void 0 ], t.split("."))));
            } catch (e) {
                throw new x(q.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(e).qr;
    } catch (e) {
        throw Qr((i = e) instanceof Error ? i.message : i.toString(), t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Qr(t, e, n, r, i) {
    var o = r && !r._(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var a = "";
    return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), 
    a += ")"), new x(q.INVALID_ARGUMENT, (u += ". ") + t + a);
}

function Wr(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

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
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ var Hr = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.co = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.lo = function() {
        return this.co() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** A user with a null UID. */ Hr.UNAUTHENTICATED = new Hr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Hr._o = new Hr("google-credentials-uid"), Hr.fo = new Hr("first-party-uid");

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
var Zr = function(t, e) {
    this.user = e, this.type = "OAuth", this.do = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.do.Authorization = "Bearer " + t;
}, Yr = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.wo = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.To = function() {}, t.prototype.Eo = function(t) {
        this.wo = t, 
        // Fire with initial user.
        t(Hr.UNAUTHENTICATED);
    }, t.prototype.mo = function() {
        this.wo = null;
    }, t;
}(), Xr = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.Io = null, 
        /** Tracks the current User. */
        this.currentUser = Hr.UNAUTHENTICATED, this.Ao = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.Ro = 0, 
        /** The listener registered with setChangeListener(). */
        this.wo = null, this.forceRefresh = !1, this.Io = function() {
            e.Ro++, e.currentUser = e.Po(), e.Ao = !0, e.wo && e.wo(e.currentUser);
        }, this.Ro = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Io) : (
        // if auth is not available, invoke tokenListener once with null token
        this.Io(null), t.get().then((function(t) {
            e.auth = t, e.Io && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.Io);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.Ro, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.Ro !== e ? (I("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (_("string" == typeof n.accessToken), new Zr(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.To = function() {
        this.forceRefresh = !0;
    }, t.prototype.Eo = function(t) {
        this.wo = t, 
        // Fire the initial event
        this.Ao && t(this.currentUser);
    }, t.prototype.mo = function() {
        this.auth && this.auth.removeAuthTokenListener(this.Io), this.Io = null, this.wo = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.Po = function() {
        var t = this.auth && this.auth.getUid();
        return _(null === t || "string" == typeof t), new Hr(t);
    }, t;
}(), Jr = /** @class */ function() {
    function t(t, e) {
        this.Vo = t, this.yo = e, this.type = "FirstParty", this.user = Hr.fo;
    }
    return Object.defineProperty(t.prototype, "do", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.yo
            }, e = this.Vo.auth.po([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), $r = /** @class */ function() {
    function t(t, e) {
        this.Vo = t, this.yo = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new Jr(this.Vo, this.yo));
    }, t.prototype.Eo = function(t) {
        // Fire with initial uid.
        t(Hr.fo);
    }, t.prototype.mo = function() {}, t.prototype.To = function() {}, t;
}(), Kr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.ws = t, this.vo = n, this.bo = r, this.So = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Co = 0, this.Do = null, this.stream = null, this.Hs = new Sn(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.Fo = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.$o = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.No();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Fo() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.ko = function() {
        this.state = 0 /* Initial */ , this.Hs.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.xo = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.$o() && null === this.Do && (this.Do = this.ws.gs(this.vo, 6e4, (function() {
            return t.Oo();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.Lo = function(t) {
        this.Mo(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.Oo = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                return this.$o() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.Mo = function() {
        this.Do && (this.Do.cancel(), this.Do = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.Mo(), this.Hs.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Co++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Hs.reset() : r && r.code === q.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    N(r.toString()), N("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Hs.Vs()) : r && r.code === q.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.So.To(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.qo(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Bo(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.qo = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Uo(this.Co), n = this.Co;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.So.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Co === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Qo(e);
        }), (function(n) {
            e((function() {
                var e = new x(q.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.Wo(e);
            }));
        }));
    }, t.prototype.Qo = function(t) {
        var e = this, n = this.Uo(this.Co);
        this.stream = this.jo(t), this.stream.Go((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Go();
            }));
        })), this.stream.Bo((function(t) {
            n((function() {
                return e.Wo(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.No = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Hs.ys((function() {
            return e(t, void 0, void 0, (function() {
                return n(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.Wo = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return I("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Uo = function(t) {
        var e = this;
        return function(n) {
            e.ws.Bs((function() {
                return e.Co === t ? n() : (I("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), ti = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return t(n, e), n.prototype.jo = function(t) {
        return this.bo.Ko("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Hs.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : T();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Le ? (_(void 0 === e || "string" == typeof e), tt.fromBase64String(e || "")) : (_(void 0 === e || e instanceof Uint8Array), 
                    tt.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function(t) {
                    var e = void 0 === t.code ? q.UNKNOWN : st(t.code);
                    return new x(e, t.message || "");
                }(s);
                n = new Vt(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var a = e.documentChange;
                a.document, a.document.name, a.document.updateTime;
                var h = ce(t, a.document.name), c = ue(a.document.updateTime), f = new $e({
                    mapValue: {
                        fields: a.document.fields
                    }
                }), l = new nn(h, c, f, {}), p = a.targetIds || [], d = a.removedTargetIds || [];
                n = new Dt(p, d, l.key, l);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var y = e.documentDelete;
                y.document;
                var v = ce(t, y.document), g = y.readTime ? ue(y.readTime) : F.min(), m = new rn(v, g), w = y.removedTargetIds || [];
                n = new Dt([], w, m.key, m);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var b = e.documentRemove;
                b.document;
                var E = ce(t, b.document), I = b.removedTargetIds || [];
                n = new Dt([], I, E, null);
            } else {
                if (!("filter" in e)) return T();
                e.filter;
                var N = e.filter;
                N.targetId;
                var A = N.count || 0, D = new it(A), P = N.targetId;
                n = new Pt(P, D);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return F.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? F.min() : e.readTime ? ue(e.readTime) : F.min();
        }(t);
        return this.listener.zo(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.Ho = function(t) {
        var e = {};
        e.database = le(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = K(r) ? {
                documents: ye(t, r)
            } : {
                query: ve(t, r)
            }).targetId = e.targetId, e.resumeToken.H() > 0 && (n.resumeToken = oe(t, e.resumeToken)), 
            n;
        }(this.serializer, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return T();
                }
            }(0, e.X);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.Lo(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Yo = function(t) {
        var e = {};
        e.database = le(this.serializer), e.removeTarget = t, this.Lo(e);
    }, n;
}(Kr), ei = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.Xo = !1, s;
    }
    return t(n, e), Object.defineProperty(n.prototype, "Jo", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Xo;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Xo = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.qo = function() {
        this.Xo && this.Zo([]);
    }, n.prototype.jo = function(t) {
        return this.bo.Ko("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        _(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Xo) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Hs.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (_(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? ue(t.updateTime) : ue(e);
                        n.isEqual(F.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = ue(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new Oe(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = ue(t.commitTime);
            return this.listener.th(n, e);
        }
        // The first response is always the handshake response
                return _(!t.writeResults || 0 === t.writeResults.length), this.Xo = !0, 
        this.listener.eh();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.nh = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = le(this.serializer), this.Lo(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Zo = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return de(e.serializer, t);
            }))
        };
        this.Lo(n);
    }, n;
}(Kr), ni = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).bo = t, i.credentials = n, i.serializer = r, i.sh = !1, 
        i;
    }
    return t(n, e), n.prototype.ih = function() {
        if (this.sh) throw new x(q.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.rh = function(t, e) {
        var n = this;
        return this.ih(), this.credentials.getToken().then((function(r) {
            return n.bo.rh(t, e, r);
        })).catch((function(t) {
            throw t.code === q.UNAUTHENTICATED && n.credentials.To(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.oh = function(t, e) {
        var n = this;
        return this.ih(), this.credentials.getToken().then((function(r) {
            return n.bo.oh(t, e, r);
        })).catch((function(t) {
            throw t.code === q.UNAUTHENTICATED && n.credentials.To(), t;
        }));
    }, n;
}((function() {
    // Make sure that the structural type of `Datastore` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Qe = void 0;
})), ri = /** @class */ function() {
    function t(t) {
        this.hh = t, 
        // The version of each document that was read during this transaction.
        this.ah = new Map, this.mutations = [], this.uh = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.lh = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this._h = new Set;
    }
    return t.prototype.fh = function(t) {
        return e(this, void 0, void 0, (function() {
            var r, i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.dh(), this.mutations.length > 0) throw new x(q.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, r) {
                        return e(this, void 0, void 0, (function() {
                            var e, i, o, s, u;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = D(t), i = {
                                        database: le(e.serializer),
                                        documents: r.map((function(t) {
                                            return he(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.oh("BatchGetDocuments", i) ];

                                  case 1:
                                    return o = n.sent(), s = new Map, o.forEach((function(t) {
                                        var n = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                _(!!e.found), e.found.name, e.found.updateTime;
                                                var n = ce(t, e.found.name), r = ue(e.found.updateTime), i = new $e({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new nn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                _(!!e.missing), _(!!e.readTime);
                                                var n = ce(t, e.missing), r = ue(e.readTime);
                                                return new rn(n, r);
                                            }(t, e) : T();
                                        }(e.serializer, t);
                                        s.set(n.key.toString(), n);
                                    })), u = [], [ 2 /*return*/ , (r.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        _(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.hh, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((r = o.sent()).forEach((function(t) {
                        t instanceof rn || t instanceof nn ? i.wh(t) : T();
                    })), r) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.eo(t, this.Ue(t))), this._h.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.eo(t, this.Th(t)));
        } catch (t) {
            this.lh = t;
        }
        this._h.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new Xe(t, this.Ue(t)) ]), this._h.add(t);
    }, t.prototype.commit = function() {
        return e(this, void 0, void 0, (function() {
            var t, r = this;
            return n(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.dh(), this.lh) throw this.lh;
                    return t = this.ah, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        var n = new W(B.N(e));
                        r.mutations.push(new Je(n, r.Ue(n)));
                    })), [ 4 /*yield*/ , function(t, r) {
                        return e(this, void 0, void 0, (function() {
                            var e, i;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = D(t), i = {
                                        database: le(e.serializer),
                                        writes: r.map((function(t) {
                                            return de(e.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , e.rh("Commit", i) ];

                                  case 1:
                                    return n.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.hh, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.uh = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.wh = function(t) {
        var e;
        if (t instanceof nn) e = t.version; else {
            if (!(t instanceof rn)) throw T();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = F.min();
        }
        var n = this.ah.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new x(q.ABORTED, "Document version changed between two reads.");
        } else this.ah.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Ue = function(t) {
        var e = this.ah.get(t.toString());
        return !this._h.has(t) && e ? Me.updateTime(e) : Me.je();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.Th = function(t) {
        var e = this.ah.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this._h.has(t) && e) {
            if (e.isEqual(F.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new x(q.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Me.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return Me.exists(!0);
    }, t.prototype.write = function(t) {
        this.dh(), this.mutations = this.mutations.concat(t);
    }, t.prototype.dh = function() {}, t;
}(), ii = /** @class */ function() {
    function t(t, e) {
        this.Ns = t, this.Eh = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.mh = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Ih = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Ah = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Rh = function() {
        var t = this;
        0 === this.mh && (this.Ph("Unknown" /* Unknown */), this.Ih = this.Ns.gs("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Ih = null, t.Vh("Backend didn't respond within 10 seconds."), t.Ph("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.yh = function(t) {
        "Online" /* Online */ === this.state ? this.Ph("Unknown" /* Unknown */) : (this.mh++, 
        this.mh >= 1 && (this.ph(), this.Vh("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Ph("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.ph(), this.mh = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Ah = !1), this.Ph(t);
    }, t.prototype.Ph = function(t) {
        t !== this.state && (this.state = t, this.Eh(t));
    }, t.prototype.Vh = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Ah ? (N(e), this.Ah = !1) : I("OnlineStateTracker", e);
    }, t.prototype.ph = function() {
        null !== this.Ih && (this.Ih.cancel(), this.Ih = null);
    }, t;
}(), oi = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    r, i, o, s) {
        var u = this;
        this.gh = t, this.hh = r, this.Ns = i, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.vh = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.bh = new Map, this.Sh = null, 
        /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
        this.Ch = new Set, this.Dh = s, this.Dh.Fh((function(t) {
            i.Bs((function() {
                return e(u, void 0, void 0, (function() {
                    return n(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.$h() ? (I("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Nh() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.kh = new ii(i, o), 
        // Create streams (but note they're not started yet).
        this.xh = function(t, e, n) {
            var r = D(t);
            return new ti(e, r.bo, r.credentials, r.serializer, n);
        }(this.hh, i, {
            Go: this.Oh.bind(this),
            Bo: this.Lh.bind(this),
            zo: this.Mh.bind(this)
        }), this.qh = function(t, e, n) {
            var r = D(t);
            return new ei(e, r.bo, r.credentials, r.serializer, n);
        }(this.hh, i, {
            Go: this.Bh.bind(this),
            Bo: this.Uh.bind(this),
            eh: this.Qh.bind(this),
            th: this.th.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return this.Ch.delete(0 /* UserDisabled */), this.Wh();
    }, t.prototype.Wh = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.$h() ? (this.jh() ? this.Gh() : this.kh.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.Kh() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Ch.add(0 /* UserDisabled */), [ 4 /*yield*/ , this.zh() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.kh.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.zh = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.qh.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.xh.stop() ];

                  case 2:
                    return t.sent(), this.vh.length > 0 && (I("RemoteStore", "Stopping write stream with " + this.vh.length + " pending writes"), 
                    this.vh = []), this.Hh(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Yh = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return I("RemoteStore", "RemoteStore shutting down."), this.Ch.add(5 /* Shutdown */), 
                    [ 4 /*yield*/ , this.zh() ];

                  case 1:
                    return t.sent(), this.Dh.Yh(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.kh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.bh.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.bh.set(t.targetId, t), this.jh() ? 
        // The listen will be sent in onWatchStreamOpen
        this.Gh() : this.xh.$o() && this.Xh(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.Jh = function(t) {
        this.bh.delete(t), this.xh.$o() && this.Zh(t), 0 === this.bh.size && (this.xh.$o() ? this.xh.xo() : this.$h() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.kh.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.Oe = function(t) {
        return this.bh.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.xe = function(t) {
        return this.ta.xe(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.Xh = function(t) {
        this.Sh.de(t.targetId), this.xh.Ho(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Zh = function(t) {
        this.Sh.de(t), this.xh.Yo(t);
    }, t.prototype.Gh = function() {
        this.Sh = new Ut(this), this.xh.start(), this.kh.Rh();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.jh = function() {
        return this.$h() && !this.xh.Fo() && this.bh.size > 0;
    }, t.prototype.$h = function() {
        return 0 === this.Ch.size;
    }, t.prototype.Hh = function() {
        this.Sh = null;
    }, t.prototype.Oh = function() {
        return e(this, void 0, void 0, (function() {
            var t = this;
            return n(this, (function(e) {
                return this.bh.forEach((function(e, n) {
                    t.Xh(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Lh = function(t) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                return this.Hh(), 
                // If we still need the watch stream, retry the connection.
                this.jh() ? (this.kh.yh(t), this.Gh()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.kh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Mh = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.kh.set("Online" /* Online */), !(t instanceof Vt && 2 /* Removed */ === t.state && t.cause)) 
                    // Mark the client as online since we got a message from the server
                    return [ 3 /*break*/ , 6 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , this.ea(t) ];

                  case 2:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 3:
                    return e = n.sent(), I("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), e), 
                    [ 4 /*yield*/ , this.na(e) ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 5:
                    return [ 3 /*break*/ , 13 ];

                  case 6:
                    if (t instanceof Dt ? this.Sh.Pe(t) : t instanceof Pt ? this.Sh.Ce(t) : this.Sh.pe(t), 
                    r.isEqual(F.min())) return [ 3 /*break*/ , 13 ];
                    n.label = 7;

                  case 7:
                    return n.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , this.gh.Xi() ];

                  case 8:
                    return i = n.sent(), r.o(i) >= 0 ? [ 4 /*yield*/ , this.sa(r) ] : [ 3 /*break*/ , 10 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                                      case 9:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                    n.sent(), n.label = 10;

                  case 10:
                    return [ 3 /*break*/ , 13 ];

                  case 11:
                    return I("RemoteStore", "Failed to raise snapshot:", o = n.sent()), [ 4 /*yield*/ , this.na(o) ];

                  case 12:
                    return n.sent(), [ 3 /*break*/ , 13 ];

                  case 13:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */
    t.prototype.na = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (!Mn(t)) throw t;
                    // Disable network and raise offline snapshots
                    return this.Ch.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this.zh() ];

                  case 1:
                    // Disable network and raise offline snapshots
                    return o.sent(), this.kh.set("Offline" /* Offline */), r || (
                    // Use a simple read operation to determine if IndexedDB recovered.
                    // Ideally, we would expose a health check directly on SimpleDb, but
                    // RemoteStore only has access to persistence through LocalStore.
                    r = function() {
                        return i.gh.Xi();
                    }), 
                    // Probe IndexedDB periodically and re-enable network
                    this.Ns.si((function() {
                        return e(i, void 0, void 0, (function() {
                            return n(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return I("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , r() ];

                                  case 1:
                                    return t.sent(), this.Ch.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this.Wh() ];

                                  case 2:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */
    t.prototype.ia = function(t) {
        var e = this;
        return t().catch((function(n) {
            return e.na(n, t);
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.sa = function(t) {
        var e = this, n = this.Sh.$e(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.Qt.forEach((function(n, r) {
            if (n.resumeToken.H() > 0) {
                var i = e.bh.get(r);
                // A watched target might have been removed already.
                                i && e.bh.set(r, i.tt(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.Wt.forEach((function(t) {
            var n = e.bh.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.bh.set(t, n.tt(tt.Y, n.J)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Zh(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new rt(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.Xh(r);
            }
        })), this.ta.Ji(n);
    }, 
    /** Handles an error on a target */ t.prototype.ea = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = t.cause, r = 0, i = t.targetIds, n.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.bh.has(o) ? [ 4 /*yield*/ , this.ta.ra(o, e) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                  case 2:
                    n.sent(), this.bh.delete(o), this.Sh.removeTarget(o), n.label = 3;

                  case 3:
                    n.label = 4;

                  case 4:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.Kh = function() {
        return e(this, void 0, void 0, (function() {
            var t, e, r;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    t = this.vh.length > 0 ? this.vh[this.vh.length - 1].batchId : -1, n.label = 1;

                  case 1:
                    if (!this.oa()) return [ 3 /*break*/ , 7 ];
                    n.label = 2;

                  case 2:
                    return n.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , this.gh.dr(t) ];

                  case 3:
                    return null === (e = n.sent()) ? (0 === this.vh.length && this.qh.xo(), [ 3 /*break*/ , 7 ]) : (t = e.batchId, 
                    this.ha(e), [ 3 /*break*/ , 6 ]);

                  case 4:
                    return r = n.sent(), [ 4 /*yield*/ , this.na(r) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 3 /*break*/ , 1 ];

                  case 7:
                    return this.aa() && this.ua(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.oa = function() {
        return this.$h() && this.vh.length < 10;
    }, 
    // For testing
    t.prototype.ca = function() {
        return this.vh.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.ha = function(t) {
        this.vh.push(t), this.qh.$o() && this.qh.Jo && this.qh.Zo(t.mutations);
    }, t.prototype.aa = function() {
        return this.$h() && !this.qh.Fo() && this.vh.length > 0;
    }, t.prototype.ua = function() {
        this.qh.start();
    }, t.prototype.Bh = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                return this.qh.nh(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Qh = function() {
        return e(this, void 0, void 0, (function() {
            var t, e, r;
            return n(this, (function(n) {
                // Send the write pipeline now that the stream is established.
                for (t = 0, e = this.vh; t < e.length; t++) r = e[t], this.qh.Zo(r.mutations);
                return [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.th = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.vh.shift(), i = _n.from(e, t, r), [ 4 /*yield*/ , this.ia((function() {
                        return o.ta.la(i);
                    })) ];

                  case 1:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.Kh() ];

                  case 2:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Uh = function(t) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t && this.qh.Jo ? [ 4 /*yield*/ , this._a(t) ] : [ 3 /*break*/ , 2 ];

                    // This error affects the actual write.
                                      case 1:
                    // This error affects the actual write.
                    e.sent(), e.label = 2;

                  case 2:
                    // If the write stream closed after the write handshake completes, a write
                    // operation failed and we fail the pending operation.
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    return this.aa() && this.ua(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype._a = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return ot(r = t.code) && r !== q.ABORTED ? (e = this.vh.shift(), 
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    this.qh.ko(), [ 4 /*yield*/ , this.ia((function() {
                        return i.ta.fa(e.batchId, t);
                    })) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.Kh() ];

                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.da = function() {
        return new ri(this.hh);
    }, t.prototype.Nh = function() {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Ch.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , this.zh() ];

                  case 1:
                    return t.sent(), this.kh.set("Unknown" /* Unknown */), this.qh.ko(), this.xh.ko(), 
                    this.Ch.delete(4 /* ConnectivityChange */), [ 4 /*yield*/ , this.Wh() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.wa = function(t) {
        return e(this, void 0, void 0, (function() {
            return n(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Ns.oi(), 
                    // Tear down and re-create our network streams. This will ensure we get a
                    // fresh auth token for the new user and re-fill the write pipeline with
                    // new mutations from the LocalStore (since mutations are per-user).
                    I("RemoteStore", "RemoteStore received new credentials"), this.Ch.add(3 /* CredentialChange */), 
                    [ 4 /*yield*/ , this.zh() ];

                  case 1:
                    return e.sent(), this.kh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.ta.wa(t) ];

                  case 2:
                    return e.sent(), this.Ch.delete(3 /* CredentialChange */), [ 4 /*yield*/ , this.Wh() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Ta = function(t) {
        return e(this, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return t ? (this.Ch.delete(2 /* IsSecondary */), [ 4 /*yield*/ , this.Wh() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (e = t) ? [ 3 /*break*/ , 4 ] : (this.Ch.add(2 /* IsSecondary */), [ 4 /*yield*/ , this.zh() ]);

                  case 3:
                    n.sent(), e = this.kh.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    e, n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), si = /** @class */ function() {
    function t() {
        this.activeTargetIds = Et();
    }
    return t.prototype.Ea = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.ma = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Ia = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.F(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), ui = /** @class */ function() {
    function t() {
        this.Aa = new si, this.Ra = {}, this.ta = null, this.Eh = null, this.cs = null;
    }
    return t.prototype.Pa = function(t) {
        // No op.
    }, t.prototype.Va = function(t, e, n) {
        // No op.
    }, t.prototype.ya = function(t) {
        return this.Aa.Ea(t), this.Ra[t] || "not-current";
    }, t.prototype.pa = function(t, e, n) {
        this.Ra[t] = e;
    }, t.prototype.ga = function(t) {
        this.Aa.ma(t);
    }, t.prototype.va = function(t) {
        return this.Aa.activeTargetIds.has(t);
    }, t.prototype.ba = function(t) {
        delete this.Ra[t];
    }, t.prototype.Sa = function() {
        return this.Aa.activeTargetIds;
    }, t.prototype.Ca = function(t) {
        return this.Aa.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.Aa = new si, Promise.resolve();
    }, t.prototype.Ni = function(t, e, n) {
        // No op.
    }, t.prototype.Da = function(t) {
        // No op.
    }, t.prototype.Yh = function() {}, t.prototype.fs = function(t) {}, t;
}(), ai = function(t) {
    this.key = t;
}, hi = function(t) {
    this.key = t;
}, ci = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Fa = e, this.$a = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Ht = !1, 
        /** Documents in the view but not in the remote target */
        this.Na = wt(), 
        /** Document Keys that have local changes */
        this.Mt = wt(), this.ka = fn(t), this.xa = new It(this.ka);
    }
    return Object.defineProperty(t.prototype, "Oa", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.Fa;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.La = function(t, e) {
        var n = this, r = e ? e.Ma : new Nt, i = e ? e.xa : this.xa, o = e ? e.Mt : this.Mt, s = i, u = !1, a = this.query.En() && i.size === this.query.limit ? i.last() : null, h = this.query.mn() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ot((function(t, e) {
            var c = i.get(t), f = e instanceof nn ? e : null;
            f && (f = cn(n.query, f) ? f : null);
            var l = !!c && n.Mt.has(c.key), p = !!f && (f.Ge || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Mt.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.qa(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.ka(f, a) > 0 || h && n.ka(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.En() || this.query.mn()) for (;s.size > this.query.limit; ) {
            var c = this.query.En() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            xa: s,
            Ma: r,
            Ba: u,
            Mt: o
        };
    }, t.prototype.qa = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ge && e.hasCommittedMutations && !e.Ge;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.Ua = function(t, e, n) {
        var r = this, i = this.xa;
        this.xa = t.xa, this.Mt = t.Mt;
        // Sort changes based on type and query comparator
        var o = t.Ma.Ot();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return T();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.ka(t.doc, e.doc);
        })), this.Qa(n);
        var s = e ? this.Wa() : [], u = 0 === this.Na.size && this.Ht ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.$a;
        return this.$a = u, 0 !== o.length || a ? {
            snapshot: new At(this.query, t.xa, i, o, t.Mt, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            ja: s
        } : {
            ja: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Ga = function(t) {
        return this.Ht && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Ht = !1, this.Ua({
            xa: this.xa,
            Ma: new Nt,
            Mt: this.Mt,
            Ba: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            ja: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Ka = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Fa.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.xa.has(t) && !this.xa.get(t).Ge;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Qa = function(t) {
        var e = this;
        t && (t.Yt.forEach((function(t) {
            return e.Fa = e.Fa.add(t);
        })), t.Xt.forEach((function(t) {})), t.Jt.forEach((function(t) {
            return e.Fa = e.Fa.delete(t);
        })), this.Ht = t.Ht);
    }, t.prototype.Wa = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Ht) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.Na;
        this.Na = wt(), this.xa.forEach((function(e) {
            t.Ka(e.key) && (t.Na = t.Na.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.Na.has(e) || n.push(new hi(e));
        })), this.Na.forEach((function(t) {
            e.has(t) || n.push(new ai(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.za = function(t) {
        this.Fa = t.yr, this.Na = wt();
        var e = this.La(t.documents);
        return this.Ua(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ha = function() {
        return At.Ut(this.query, this.xa, this.Mt, 0 /* Local */ === this.$a);
    }, t;
}(), fi = /** @class */ function() {
    function t(t, e, n, r) {
        this.Ns = t, this.hh = e, this.updateFunction = n, this.Os = r, this.Ya = 5, this.Hs = new Sn(this.Ns, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.Xa();
    }, t.prototype.Xa = function() {
        var t = this;
        this.Hs.ys((function() {
            return e(t, void 0, void 0, (function() {
                var t, e, r = this;
                return n(this, (function(n) {
                    return t = new ri(this.hh), (e = this.Ja(t)) && e.then((function(e) {
                        r.Ns.Bs((function() {
                            return t.commit().then((function() {
                                r.Os.resolve(e);
                            })).catch((function(t) {
                                r.Za(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.Za(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Ja = function(t) {
        try {
            var e = this.updateFunction(t);
            return !H(e) && e.catch && e.then ? e : (this.Os.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Os.reject(t), null;
        }
    }, t.prototype.Za = function(t) {
        var e = this;
        this.Ya > 0 && this.tu(t) ? (this.Ya -= 1, this.Ns.Bs((function() {
            return e.Xa(), Promise.resolve();
        }))) : this.Os.reject(t);
    }, t.prototype.tu = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !ot(e);
        }
        return !1;
    }, t;
}(), li = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, pi = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.eu = !1;
}, di = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.gh = t, this.nu = e, this.hh = n, this.su = r, this.currentUser = i, this.iu = o, 
        this.ru = null, this.ou = new C((function(t) {
            return an(t);
        }), un), this.hu = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.au = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.uu = new ut(W.P), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.cu = new Map, this.lu = new zn, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this._u = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.fu = new Map, this.du = On.$s(), this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "wu", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.subscribe = function(t) {
        this.ru = t;
    }, t.prototype.listen = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o, s;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Tu("listen()"), (i = this.ou.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    e = i.targetId, this.su.ya(e), r = i.view.Ha(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.gh.Er(t.Pn()) ];

                  case 2:
                    return o = n.sent(), s = this.su.ya(o.targetId), e = o.targetId, [ 4 /*yield*/ , this.Eu(t, e, "current" === s) ];

                  case 3:
                    r = n.sent(), this.wu && this.nu.listen(o), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ , r ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.Eu = function(t, r, i) {
        return e(this, void 0, void 0, (function() {
            var e, o, s, u, a, h;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.gh.Pr(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), o = new ci(t, e.yr), s = o.La(e.documents), u = _t.zt(r, i && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.Ua(s, 
                    /* updateLimboDocuments= */ this.wu, u), this.mu(r, a.ja), h = new li(t, r, o), 
                    [ 2 /*return*/ , (this.ou.set(t, h), this.hu.has(r) ? this.hu.get(r).push(t) : this.hu.set(r, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, t.prototype.Jh = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.Tu("unlisten()"), e = this.ou.get(t), (r = this.hu.get(e.targetId)).length > 1 ? [ 2 /*return*/ , (this.hu.set(e.targetId, r.filter((function(e) {
                        return !un(e, t);
                    }))), void this.ou.delete(t)) ] : this.wu ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.su.ga(e.targetId), this.su.Ca(e.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.gh.Rr(e.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.su.ba(e.targetId), i.nu.Jh(e.targetId), i.Iu(e.targetId);
                    })).catch(Bn) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.Iu(e.targetId), [ 4 /*yield*/ , this.gh.Rr(e.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.write = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Tu("write()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , this.gh.Mi(t) ];

                  case 2:
                    return e = n.sent(), this.su.Pa(e.batchId), this.Au(e.batchId, r), [ 4 /*yield*/ , this.Ru(e.Bi) ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.nu.Kh() ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 5:
                    return i = n.sent(), o = jn(i, "Failed to persist write"), r.reject(o), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.runTransaction = function(t, e, n) {
        new fi(t, this.hh, e, n).run();
    }, t.prototype.Ji = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Tu("applyRemoteEvent()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.gh.Ji(t) ];

                  case 2:
                    return e = n.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.Qt.forEach((function(t, e) {
                        var n = r.cu.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        _(t.Yt.size + t.Xt.size + t.Jt.size <= 1), t.Yt.size > 0 ? n.eu = !0 : t.Xt.size > 0 ? _(n.eu) : t.Jt.size > 0 && (_(n.eu), 
                        n.eu = !1));
                    })), [ 4 /*yield*/ , this.Ru(e, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Bn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ga = function(t, e) {
        this.Tu("applyOnlineStateChange()");
        var n = [];
        this.ou.forEach((function(e, r) {
            var i = r.view.Ga(t);
            i.snapshot && n.push(i.snapshot);
        })), this.ru.Pu(t), this.ru.zo(n), this.onlineState = t;
    }, t.prototype.ra = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o, s, u, a = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Tu("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.su.pa(t, "rejected", r), e = this.cu.get(t), (i = e && e.key) ? (o = (o = new ut(W.P)).nt(i, new rn(i, F.min())), 
                    s = wt().add(i), u = new Tt(F.min(), 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new ct(k), o, s), [ 4 /*yield*/ , this.Ji(u) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), 
                    // Since this query failed, we won't want to manually unlisten to it.
                    // We only remove it from bookkeeping after we successfully applied the
                    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                    // this query when the RemoteStore restarts the Watch stream, which should
                    // re-trigger the target failure.
                    this.uu = this.uu.remove(i), this.cu.delete(t), this.Vu(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , this.gh.Rr(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.Iu(t, r);
                    })).catch(Bn) ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.la = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Tu("applySuccessfulWrite()"), e = t.batch.batchId, n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.gh.Ui(t) ];

                  case 2:
                    return r = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.yu(e, /*error=*/ null), this.pu(e), this.su.Va(e, "acknowledged"), [ 4 /*yield*/ , this.Ru(r) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Bn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.fa = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Tu("rejectFailedWrite()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.gh.Ki(t) ];

                  case 2:
                    return e = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.yu(t, r), this.pu(t), this.su.Va(t, "rejected", r), [ 4 /*yield*/ , this.Ru(e) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Bn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.gu = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.nu.$h() || I("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.gh.Yi() ];

                  case 2:
                    return -1 === (e = n.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.fu.get(e) || []).push(t), 
                    this.fu.set(e, r), [ 3 /*break*/ , 4 ]);

                  case 3:
                    return i = n.sent(), o = jn(i, "Initialization of waitForPendingWrites() operation failed"), 
                    t.reject(o), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.pu = function(t) {
        (this.fu.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.fu.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.vu = function(t) {
        this.fu.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new x(q.CANCELLED, t));
            }));
        })), this.fu.clear();
    }, t.prototype.Au = function(t, e) {
        var n = this._u[this.currentUser.lo()];
        n || (n = new ut(k)), n = n.nt(t, e), this._u[this.currentUser.lo()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.yu = function(t, e) {
        var n = this._u[this.currentUser.lo()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this._u[this.currentUser.lo()] = n;
        }
    }, t.prototype.Iu = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.su.ga(t);
        for (var r = 0, i = this.hu.get(t); r < i.length; r++) {
            var o = i[r];
            this.ou.delete(o), e && this.ru.bu(o, e);
        }
        this.hu.delete(t), this.wu && this.lu.Nr(t).forEach((function(t) {
            n.lu.Or(t) || 
            // We removed the last reference for this key
            n.Su(t);
        }));
    }, t.prototype.Su = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.uu.get(t);
        null !== e && (this.nu.Jh(e), this.uu = this.uu.remove(t), this.cu.delete(e), this.Vu());
    }, t.prototype.mu = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof ai ? (this.lu.lr(i.key, t), this.Cu(i)) : i instanceof hi ? (I("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.lu._r(i.key, t), this.lu.Or(i.key) || 
            // We removed the last reference for this key
            this.Su(i.key)) : T();
        }
    }, t.prototype.Cu = function(t) {
        var e = t.key;
        this.uu.get(e) || (I("SyncEngine", "New document in limbo: " + e), this.au.push(e), 
        this.Vu());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.Vu = function() {
        for (;this.au.length > 0 && this.uu.size < this.iu; ) {
            var t = this.au.shift(), e = this.du.next();
            this.cu.set(e, new pi(t)), this.uu = this.uu.nt(t, e), this.nu.listen(new rt(sn.on(t.path).Pn(), e, 2 /* LimboResolution */ , kn.ds));
        }
    }, 
    // Visible for testing
    t.prototype.Du = function() {
        return this.uu;
    }, 
    // Visible for testing
    t.prototype.Fu = function() {
        return this.au;
    }, t.prototype.Ru = function(t, r) {
        return e(this, void 0, void 0, (function() {
            var e, i, o, s = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = [], i = [], o = [], this.ou.forEach((function(n, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.La(t);
                            return e.Ba ? s.gh.Pr(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.La(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var n = r && r.Qt.get(u.targetId), o = u.view.Ua(t, 
                            /* updateLimboDocuments= */ s.wu, n);
                            if (s.mu(u.targetId, o.ja), o.snapshot) {
                                s.wu && s.su.pa(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), e.push(o.snapshot);
                                var a = Vn.us(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return n.sent(), this.ru.zo(e), [ 4 /*yield*/ , this.gh.cr(i) ];

                  case 2:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Tu = function(t) {}, t.prototype.wa = function(t) {
        return e(this, void 0, void 0, (function() {
            var e;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.currentUser.isEqual(t) ? [ 3 /*break*/ , 3 ] : (I("SyncEngine", "User change. New user:", t.lo()), 
                    [ 4 /*yield*/ , this.gh.Ni(t) ]);

                  case 1:
                    return e = n.sent(), this.currentUser = t, 
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.vu("'waitForPendingWrites' promise is rejected due to a user change."), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.su.Ni(t, e.Oi, e.Li), [ 4 /*yield*/ , this.Ru(e.xi) ];

                  case 2:
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.enableNetwork = function() {
        return this.nu.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.nu.disableNetwork();
    }, t.prototype.xe = function(t) {
        var e = this.cu.get(t);
        if (e && e.eu) return wt().add(e.key);
        var n = wt(), r = this.hu.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.ou.get(s);
            n = n.Dt(u.view.Oa);
        }
        return n;
    }, t;
}(), yi = function() {
    this.$u = void 0, this.listeners = [];
}, vi = /** @class */ function() {
    function t(t) {
        this.ta = t, this.Nu = new C((function(t) {
            return an(t);
        }), un), this.onlineState = "Unknown" /* Unknown */ , this.ku = new Set, this.ta.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o, s, u;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (e = t.query, r = !1, (i = this.Nu.get(e)) || (r = !0, i = new yi), !r) return [ 3 /*break*/ , 4 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), o = i, [ 4 /*yield*/ , this.ta.listen(e) ];

                  case 2:
                    return o.$u = n.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    return s = n.sent(), u = jn(s, "Initialization of query '" + hn(t.query) + "' failed"), 
                    [ 2 /*return*/ , void t.onError(u) ];

                  case 4:
                    return this.Nu.set(e, i), i.listeners.push(t), 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.Ga(this.onlineState), i.$u && t.xu(i.$u) && this.Ou(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Jh = function(t) {
        return e(this, void 0, void 0, (function() {
            var e, r, i, o;
            return n(this, (function(n) {
                return e = t.query, r = !1, (i = this.Nu.get(e)) && (o = i.listeners.indexOf(t)) >= 0 && (i.listeners.splice(o, 1), 
                r = 0 === i.listeners.length), r ? [ 2 /*return*/ , (this.Nu.delete(e), this.ta.Jh(e)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.zo = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.Nu.get(o);
            if (s) {
                for (var u = 0, a = s.listeners; u < a.length; u++) {
                    a[u].xu(i) && (e = !0);
                }
                s.$u = i;
            }
        }
        e && this.Ou();
    }, t.prototype.bu = function(t, e) {
        var n = this.Nu.get(t);
        if (n) for (var r = 0, i = n.listeners; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.Nu.delete(t);
    }, t.prototype.Pu = function(t) {
        this.onlineState = t;
        var e = !1;
        this.Nu.forEach((function(n, r) {
            for (var i = 0, o = r.listeners; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Ga(t) && (e = !0);
            }
        })), e && this.Ou();
    }, t.prototype.Lu = function(t) {
        this.ku.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.Mu = function(t) {
        this.ku.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Ou = function() {
        this.ku.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), gi = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.qu = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Bu = !1, this.Uu = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.xu = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new At(t.query, t.docs, t.Lt, e, t.Mt, t.fromCache, t.qt, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Bu ? this.Qu(t) && (this.qu.next(t), o = !0) : this.Wu(t, this.onlineState) && (this.ju(t), 
        o = !0), this.Uu = t, o;
    }, t.prototype.onError = function(t) {
        this.qu.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Ga = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Uu && !this.Bu && this.Wu(this.Uu, t) && (this.ju(this.Uu), e = !0), 
        e;
    }, t.prototype.Wu = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Gu && n || t.docs._() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Qu = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Uu && this.Uu.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.qt && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.ju = function(t) {
        t = At.Ut(t.query, t.docs, t.Mt, t.fromCache), this.Bu = !0, this.qu.next(t);
    }, t;
}(), mi = /** @class */ function() {
    function t() {}
    return t.prototype.$i = function(t) {
        this.Ku = t;
    }, t.prototype.Zn = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.Tn() || n.isEqual(F.min()) ? this.zu(t, e) : this.Ku.Yn(t, r).next((function(o) {
            var u = i.Hu(e, o);
            return (e.En() || e.mn()) && i.Ba(e.en, u, r, n) ? i.zu(t, e) : (E() <= s.DEBUG && I("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), hn(e)), 
            i.Ku.Zn(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.nt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Hu = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new ct(fn(t));
        return e.forEach((function(e, r) {
            r instanceof nn && cn(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.Ba = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.o(r) > 0);
    }, t.prototype.zu = function(t, e) {
        return E() <= s.DEBUG && I("IndexFreeQueryEngine", "Using full collection scan to execute query:", hn(e)), 
        this.Ku.Zn(t, e, F.min());
    }, t;
}(), wi = /** @class */ function() {
    function t(t, e) {
        this.Wn = t, this.hr = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Qn = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Yu = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Xu = new ct(Qn.br);
    }
    return t.prototype.Ju = function(t) {
        return Dn.resolve(0 === this.Qn.length);
    }, t.prototype.qi = function(t, e, n, r) {
        var i = this.Yu;
        this.Yu++, this.Qn.length > 0 && this.Qn[this.Qn.length - 1];
        var o = new Tn(i, e, n, r);
        this.Qn.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.Xu = this.Xu.add(new Qn(a.key, i)), this.Wn.Cs(t, a.key.path.g());
        }
        return Dn.resolve(o);
    }, t.prototype.zi = function(t, e) {
        return Dn.resolve(this.Zu(e));
    }, t.prototype.wr = function(t, e) {
        var n = e + 1, r = this.tc(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Dn.resolve(this.Qn.length > i ? this.Qn[i] : null);
    }, t.prototype.Yi = function() {
        return Dn.resolve(0 === this.Qn.length ? -1 : this.Yu - 1);
    }, t.prototype.ki = function(t) {
        return Dn.resolve(this.Qn.slice());
    }, t.prototype.Gn = function(t, e) {
        var n = this, r = new Qn(e, 0), i = new Qn(e, Number.POSITIVE_INFINITY), o = [];
        return this.Xu.bt([ r, i ], (function(t) {
            var e = n.Zu(t.Lr);
            o.push(e);
        })), Dn.resolve(o);
    }, t.prototype.Jn = function(t, e) {
        var n = this, r = new ct(k);
        return e.forEach((function(t) {
            var e = new Qn(t, 0), i = new Qn(t, Number.POSITIVE_INFINITY);
            n.Xu.bt([ e, i ], (function(t) {
                r = r.add(t.Lr);
            }));
        })), Dn.resolve(this.ec(r));
    }, t.prototype.rs = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                W.W(i) || (i = i.child(""));
        var o = new Qn(new W(i), 0), s = new ct(k);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.Xu.St((function(t) {
            var e = t.key.path;
            return !!n.C(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.Lr)), !0);
        }), o), Dn.resolve(this.ec(s));
    }, t.prototype.ec = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Zu(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Hi = function(t, e) {
        var n = this;
        _(0 === this.nc(e.batchId, "removed")), this.Qn.shift();
        var r = this.Xu;
        return Dn.forEach(e.mutations, (function(i) {
            var o = new Qn(i.key, e.batchId);
            return r = r.delete(o), n.hr.sc(t, i.key);
        })).next((function() {
            n.Xu = r;
        }));
    }, t.prototype.ic = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Or = function(t, e) {
        var n = new Qn(e, 0), r = this.Xu.Ct(n);
        return Dn.resolve(e.isEqual(r && r.key));
    }, t.prototype.Gi = function(t) {
        return this.Qn.length, Dn.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.nc = function(t, e) {
        return this.tc(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.tc = function(t) {
        return 0 === this.Qn.length ? 0 : t - this.Qn[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Zu = function(t) {
        var e = this.tc(t);
        return e < 0 || e >= this.Qn.length ? null : this.Qn[e];
    }, t;
}(), bi = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Wn = t, this.rc = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new ut(W.P), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.rr = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.rc(e);
        return this.docs = this.docs.nt(r, {
            oc: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Wn.Cs(t, r.path.g());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.ir = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.zn = function(t, e) {
        var n = this.docs.get(e);
        return Dn.resolve(n ? n.oc : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = dt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.nt(t, e ? e.oc : null);
        })), Dn.resolve(r);
    }, t.prototype.Zn = function(t, e, n) {
        for (var r = vt(), i = new W(e.path.child("")), o = this.docs.ut(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.wt(); ) {
            var s = o.dt(), u = s.key, a = s.value, h = a.oc, c = a.readTime;
            if (!e.path.C(u.path)) break;
            c.o(n) <= 0 || h instanceof nn && cn(e, h) && (r = r.nt(h.key, h));
        }
        return Dn.resolve(r);
    }, t.prototype.hc = function(t, e) {
        return Dn.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Qi = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.ac(this);
    }, t.prototype.uc = function(t) {
        return Dn.resolve(this.size);
    }, t;
}();

/** A CredentialsProvider that always yields an empty token. */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
bi.ac = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).wc = t, n;
    }
    return t(n, e), n.prototype.Ua = function(t) {
        var e = this, n = [];
        return this.Bi.forEach((function(r, i) {
            i ? n.push(e.wc.rr(t, i, e.readTime)) : e.wc.ir(r);
        })), Dn.qn(n);
    }, n.prototype.fc = function(t, e) {
        return this.wc.zn(t, e);
    }, n.prototype.dc = function(t, e) {
        return this.wc.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Bi = new C((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.cc = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.lc;
        },
        set: function(t) {
            this.lc = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.rr = function(t, e) {
        this._c(), this.readTime = e, this.Bi.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.ir = function(t, e) {
        this._c(), e && (this.readTime = e), this.Bi.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.zn = function(t, e) {
        this._c();
        var n = this.Bi.get(e);
        return void 0 !== n ? Dn.resolve(n) : this.fc(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.dc(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this._c(), this.cc = !0, this.Ua(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype._c = function() {}, 
    t;
}());

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
var Ei = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.Tc = new C((function(t) {
            return J(t);
        }), $), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = F.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Ec = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.mc = new zn, this.targetCount = 0, this.Ic = On.Fs();
    }
    return t.prototype.ge = function(t, e) {
        return this.Tc.forEach((function(t, n) {
            return e(n);
        })), Dn.resolve();
    }, t.prototype.Xi = function(t) {
        return Dn.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Ac = function(t) {
        return Dn.resolve(this.Ec);
    }, t.prototype.Ir = function(t) {
        return this.highestTargetId = this.Ic.next(), Dn.resolve(this.highestTargetId);
    }, t.prototype.ar = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.Ec && (this.Ec = e), 
        Dn.resolve();
    }, t.prototype.Rc = function(t) {
        this.Tc.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Ic = new On(e), this.highestTargetId = e), t.sequenceNumber > this.Ec && (this.Ec = t.sequenceNumber);
    }, t.prototype.Ar = function(t, e) {
        return this.Rc(e), this.targetCount += 1, Dn.resolve();
    }, t.prototype.sr = function(t, e) {
        return this.Rc(e), Dn.resolve();
    }, t.prototype.Pc = function(t, e) {
        return this.Tc.delete(e.target), this.mc.Nr(e.targetId), this.targetCount -= 1, 
        Dn.resolve();
    }, t.prototype.Vc = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.Tc.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Tc.delete(s), o.push(r.yc(t, u.targetId)), 
            i++);
        })), Dn.qn(o).next((function() {
            return i;
        }));
    }, t.prototype.pc = function(t) {
        return Dn.resolve(this.targetCount);
    }, t.prototype.mr = function(t, e) {
        var n = this.Tc.get(e) || null;
        return Dn.resolve(n);
    }, t.prototype.tr = function(t, e, n) {
        return this.mc.Dr(e, n), Dn.resolve();
    }, t.prototype.Zi = function(t, e, n) {
        this.mc.$r(e, n);
        var r = this.persistence.hr, i = [];
        return r && e.forEach((function(e) {
            i.push(r.sc(t, e));
        })), Dn.qn(i);
    }, t.prototype.yc = function(t, e) {
        return this.mc.Nr(e), Dn.resolve();
    }, t.prototype.Vr = function(t, e) {
        var n = this.mc.xr(e);
        return Dn.resolve(n);
    }, t.prototype.Or = function(t, e) {
        return Dn.resolve(this.mc.Or(e));
    }, t;
}(), Ii = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this.gc = {}, this.vc = new kn(0), this.bc = !1, this.bc = !0, this.hr = t(this), 
        this.Si = new Ei(this), this.Wn = new Ln, this.Un = new bi(this.Wn, (function(t) {
            return e.hr.Sc(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Yh = function() {
        // No durable state to ensure is closed on shutdown.
        return this.bc = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Cc", {
        get: function() {
            return this.bc;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Dc = function() {
        // No op.
    }, t.prototype.Fi = function() {
        return this.Wn;
    }, t.prototype.gi = function(t) {
        var e = this.gc[t.lo()];
        return e || (e = new wi(this.Wn, this.hr), this.gc[t.lo()] = e), e;
    }, t.prototype.Ci = function() {
        return this.Si;
    }, t.prototype.bi = function() {
        return this.Un;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        I("MemoryPersistence", "Starting transaction:", t);
        var i = new Ni(this.vc.next());
        return this.hr.Fc(), n(i).next((function(t) {
            return r.hr.$c(i).next((function() {
                return t;
            }));
        })).Ln().then((function(t) {
            return i.Nc(), t;
        }));
    }, t.prototype.kc = function(t, e) {
        return Dn.Bn(Object.values(this.gc).map((function(n) {
            return function() {
                return n.Or(t, e);
            };
        })));
    }, t;
}(), Ni = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).er = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return t(n, e), n;
}(/** @class */ function() {
    function t() {
        this.xc = [];
    }
    return t.prototype.Oc = function(t) {
        this.xc.push(t);
    }, t.prototype.Nc = function() {
        this.xc.forEach((function(t) {
            return t();
        }));
    }, t;
}()), Ai = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Lc = new zn, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Mc = null;
    }
    return t.qc = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Bc", {
        get: function() {
            if (this.Mc) return this.Mc;
            throw T();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.lr = function(t, e, n) {
        return this.Lc.lr(n, e), this.Bc.delete(n), Dn.resolve();
    }, t.prototype._r = function(t, e, n) {
        return this.Lc._r(n, e), this.Bc.add(n), Dn.resolve();
    }, t.prototype.sc = function(t, e) {
        return this.Bc.add(e), Dn.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Lc.Nr(e.targetId).forEach((function(t) {
            return n.Bc.add(t);
        }));
        var r = this.persistence.Ci();
        return r.Vr(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.Bc.add(t);
            }));
        })).next((function() {
            return r.Pc(t, e);
        }));
    }, t.prototype.Fc = function() {
        this.Mc = new Set;
    }, t.prototype.$c = function(t) {
        var e = this, n = this.persistence.bi().Qi();
        // Remove newly orphaned documents.
                return Dn.forEach(this.Bc, (function(r) {
            return e.Uc(t, r).next((function(t) {
                t || n.ir(r);
            }));
        })).next((function() {
            return e.Mc = null, n.apply(t);
        }));
    }, t.prototype.or = function(t, e) {
        var n = this;
        return this.Uc(t, e).next((function(t) {
            t ? n.Bc.delete(e) : n.Bc.add(e);
        }));
    }, t.prototype.Sc = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Uc = function(t, e) {
        var n = this;
        return Dn.Bn([ function() {
            return Dn.resolve(n.Lc.Or(e));
        }, function() {
            return n.persistence.Ci().Or(t, e);
        }, function() {
            return n.persistence.kc(t, e);
        } ]);
    }, t;
}(), Ti = /** @class */ function() {
    function t(t) {
        this.Qc = t.Qc, this.Wc = t.Wc;
    }
    return t.prototype.Go = function(t) {
        this.jc = t;
    }, t.prototype.Bo = function(t) {
        this.Gc = t;
    }, t.prototype.onMessage = function(t) {
        this.Kc = t;
    }, t.prototype.close = function() {
        this.Wc();
    }, t.prototype.send = function(t) {
        this.Qc(t);
    }, t.prototype.zc = function() {
        this.jc();
    }, t.prototype.Hc = function(t) {
        this.Gc(t);
    }, t.prototype.Yc = function(t) {
        this.Kc(t);
    }, t;
}(), _i = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, Di = "gl-js/ fire/" + w, Pi = /** @class */ function() {
    function t(t) {
        this.s = t.s;
        var e = t.ssl ? "https" : "http";
        this.Xc = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.Jc = function(t, e) {
        if (e) for (var n in e.do) e.do.hasOwnProperty(n) && (t[n] = e.do[n]);
        t["X-Goog-Api-Client"] = Di;
    }, t.prototype.rh = function(t, e, n) {
        var r = this, i = this.Zc(t);
        return new Promise((function(o, s) {
            var u = new p;
            u.listenOnce(d.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case y.NO_ERROR:
                        var e = u.getResponseJson();
                        I("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case y.TIMEOUT:
                        I("Connection", 'RPC "' + t + '" timed out'), s(new x(q.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case y.HTTP_ERROR:
                        var n = u.getStatus();
                        if (I("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(q).indexOf(e) >= 0 ? e : q.UNKNOWN;
                                }(r.status);
                                s(new x(i, r.message));
                            } else s(new x(q.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        I("Connection", 'RPC "' + t + '" failed'), s(new x(q.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        T();
                    }
                } finally {
                    I("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var a = Object.assign({}, e);
            delete a.database;
            var h = JSON.stringify(a);
            I("Connection", "XHR sending: ", i + " " + h);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var c = {
                "Content-Type": "text/plain"
            };
            r.Jc(c, n), u.send(i, "POST", h, c, 15);
        }));
    }, t.prototype.oh = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.rh(t, e, n);
    }, t.prototype.Ko = function(t, e) {
        var n = [ this.Xc, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], i = v(), o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.s.projectId + "/databases/" + this.s.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.Jc(o.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        u() || a() || h() || c() || f() || l() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var p = n.join("");
        I("Connection", "Creating WebChannel: " + p + " " + o);
        var d = i.createWebChannel(p, o), y = !1, m = !1, E = new Ti({
            Qc: function(t) {
                m ? I("Connection", "Not sending because WebChannel is closed:", t) : (y || (I("Connection", "Opening WebChannel transport."), 
                d.open(), y = !0), I("Connection", "WebChannel sending:", t), d.send(t));
            },
            Wc: function() {
                return d.close();
            }
        }), N = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            d.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return N(g.EventType.OPEN, (function() {
            m || I("Connection", "WebChannel transport opened.");
        })), N(g.EventType.CLOSE, (function() {
            m || (m = !0, I("Connection", "WebChannel transport closed"), E.Hc());
        })), N(g.EventType.ERROR, (function(t) {
            m || (m = !0, function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (b.logLevel <= s.WARN) {
                    var i = e.map(A);
                    b.warn.apply(b, r([ "Firestore (" + w + "): " + t ], i));
                }
            }("Connection", "WebChannel transport errored:", t), E.Hc(new x(q.UNAVAILABLE, "The operation could not be completed")));
        })), N(g.EventType.MESSAGE, (function(t) {
            var e;
            if (!m) {
                var n = t.data[0];
                _(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    I("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = et[t];
                        if (void 0 !== e) return st(e);
                    }(o), u = i.message;
                    void 0 === s && (s = q.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    m = !0, E.Hc(new x(s, u)), d.close();
                } else I("Connection", "WebChannel received:", n), E.Yc(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            E.zc();
        }), 0), E;
    }, 
    // visible for testing
    t.prototype.Zc = function(t) {
        var e = _i[t];
        return this.Xc + "/v1/projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents:" + e;
    }, t;
}(), Vi = /** @class */ function() {
    function t() {
        var t = this;
        this.tl = function() {
            return t.el();
        }, this.nl = function() {
            return t.sl();
        }, this.il = [], this.rl();
    }
    return t.prototype.Fh = function(t) {
        this.il.push(t);
    }, t.prototype.Yh = function() {
        window.removeEventListener("online", this.tl), window.removeEventListener("offline", this.nl);
    }, t.prototype.rl = function() {
        window.addEventListener("online", this.tl), window.addEventListener("offline", this.nl);
    }, t.prototype.el = function() {
        I("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.il; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.sl = function() {
        I("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.il; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.ol = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), ki = /** @class */ function() {
    function t() {}
    return t.prototype.Fh = function(t) {
        // No-op.
    }, t.prototype.Yh = function() {
        // No-op.
    }, t;
}(), Ui = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", Si = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return e(this, void 0, void 0, (function() {
            var e = this;
            return n(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.su = this.hl(t), this.persistence = this.al(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return n.sent(), this.ul = this.cl(t), this.gh = this.ll(t), this.nu = this._l(t), 
                    this.ta = this.fl(t), this.dl = this.wl(t), this.su.Eh = function(t) {
                        return e.ta.Ga(t, 1 /* SharedClientState */);
                    }, this.nu.ta = this.ta, [ 4 /*yield*/ , this.gh.start() ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.su.start() ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.nu.start() ];

                  case 4:
                    return n.sent(), [ 4 /*yield*/ , this.nu.Ta(this.ta.wu) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.wl = function(t) {
        return new vi(this.ta);
    }, t.prototype.cl = function(t) {
        return null;
    }, t.prototype.ll = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new mi, r = t.Tl, new Gn(e, n, r);
        var e, n, r;
    }, t.prototype.al = function(t) {
        if (t.ml.El) throw new x(q.FAILED_PRECONDITION, Ui);
        return new Ii(Ai.qc);
    }, t.prototype._l = function(t) {
        var e = this;
        return new oi(this.gh, t.hh, t.Ns, (function(t) {
            return e.ta.Ga(t, 0 /* RemoteStore */);
        }), Vi.ol() ? new Vi : new ki);
    }, t.prototype.hl = function(t) {
        return new ui;
    }, t.prototype.fl = function(t) {
        return e = this.gh, n = this.nu, r = t.hh, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        i = this.su, o = t.Tl, s = t.iu, new di(e, n, r, i, o, s);
        var e, n, r, i, o, s;
    }, t.prototype.clearPersistence = function(t, e) {
        throw new x(q.FAILED_PRECONDITION, Ui);
    }, t;
}(), Li = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.credentials = t, this.Ns = e, this.clientId = V.t()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param databaseInfo The connection information for the current instance.
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e, n) {
        var r = this;
        this.ih(), this.Il = t;
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var i = new Un, o = new Un, s = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.Eo((function(t) {
            if (!s) return s = !0, I("FirestoreClient", "Initializing. user=", t.uid), r.Al(e, n, t, o).then(i.resolve, i.reject);
            r.Ns.si((function() {
                return r.nu.wa(t);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Ns.Bs((function() {
            return i.promise;
        })), o.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.ih(), this.Ns.enqueue((function() {
            return t.ta.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.Al = function(t, r, i, o) {
        return e(this, void 0, void 0, (function() {
            var s, u, a, h, c, f = this;
            return n(this, (function(l) {
                switch (l.label) {
                  case 0:
                    return l.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , (c = this.Il, Promise.resolve(new Pi(c))) ];

                  case 1:
                    return s = l.sent(), u = Dr(this.Il.s), a = function(t, e, n) {
                        return new ni(t, e, n);
                    }(s, this.credentials, u), [ 4 /*yield*/ , t.initialize({
                        Ns: this.Ns,
                        Il: this.Il,
                        hh: a,
                        clientId: this.clientId,
                        Tl: i,
                        iu: 100,
                        ml: r
                    }) ];

                  case 2:
                    return l.sent(), this.persistence = t.persistence, this.su = t.su, this.gh = t.gh, 
                    this.nu = t.nu, this.ta = t.ta, this.ul = t.ul, this.Rl = t.dl, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.Dc((function() {
                        return e(f, void 0, void 0, (function() {
                            return n(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (h = l.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(h), !this.Pl(h)) throw h;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + h), 
                    this.Al(new Si, {
                        El: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.Pl = function(t) {
        return "FirebaseError" === t.name ? t.code === q.FAILED_PRECONDITION || t.code === q.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.ih = function() {
        if (this.Ns.Xs) throw new x(q.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.ih(), this.Ns.enqueue((function() {
            return t.ta.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Ns.ni((function() {
            return e(t, void 0, void 0, (function() {
                return n(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.ul && this.ul.stop(), [ 4 /*yield*/ , this.nu.Yh() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.su.Yh() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.Yh() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.mo(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.ih();
        var e = new Un;
        return this.Ns.Bs((function() {
            return t.ta.gu(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.ih();
        var i = new gi(t, e, n);
        return this.Ns.Bs((function() {
            return r.Rl.listen(i);
        })), i;
    }, t.prototype.Jh = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.Vl || this.Ns.Bs((function() {
            return e.Rl.Jh(t);
        }));
    }, t.prototype.yl = function(t) {
        return e(this, void 0, void 0, (function() {
            var r, i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.ih(), r = new Un, [ 4 /*yield*/ , this.Ns.enqueue((function() {
                        return e(i, void 0, void 0, (function() {
                            var e, i, o;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.gh.Tr(t) ];

                                  case 1:
                                    return (e = n.sent()) instanceof nn ? r.resolve(e) : e instanceof rn ? r.resolve(null) : r.reject(new x(q.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                    [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return i = n.sent(), o = jn(i, "Failed to get document '" + t + " from cache"), 
                                    r.reject(o), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.pl = function(t) {
        return e(this, void 0, void 0, (function() {
            var r, i = this;
            return n(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.ih(), r = new Un, [ 4 /*yield*/ , this.Ns.enqueue((function() {
                        return e(i, void 0, void 0, (function() {
                            var e, i, o, s, u, a;
                            return n(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.gh.Pr(t, 
                                    /* usePreviousResults= */ !0) ];

                                  case 1:
                                    return e = n.sent(), i = new ci(t, e.yr), o = i.La(e.documents), s = i.Ua(o, 
                                    /* updateLimboDocuments= */ !1), r.resolve(s.snapshot), [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return u = n.sent(), a = jn(u, "Failed to execute query '" + t + " against cache"), 
                                    r.reject(a), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.ih();
        var n = new Un;
        return this.Ns.Bs((function() {
            return e.ta.write(t, n);
        })), n.promise;
    }, t.prototype.s = function() {
        return this.Il.s;
    }, t.prototype.Lu = function(t) {
        var e = this;
        this.ih(), this.Ns.Bs((function() {
            return e.Rl.Lu(t), Promise.resolve();
        }));
    }, t.prototype.Mu = function(t) {
        var e = this;
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
                this.Vl || this.Ns.Bs((function() {
            return e.Rl.Mu(t), Promise.resolve();
        }));
    }, Object.defineProperty(t.prototype, "Vl", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Ns.Xs;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.ih();
        var n = new Un;
        return this.Ns.Bs((function() {
            return e.ta.runTransaction(e.Ns, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Ri = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.gl(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.gl(this.observer.error, t);
    }, t.prototype.vl = function() {
        this.muted = !0;
    }, t.prototype.gl = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

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
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
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
function Oi(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Mi = /** @class */ function() {
    function t(t, e, n, r) {
        this.s = t, this.timestampsInSnapshots = e, this.bl = n, this.Sl = r;
    }
    return t.prototype.Cl = function(t) {
        switch (Ct(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return zt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Dl(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.Fl(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new pr(Qt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.$l(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.Nl(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.kl(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.xl(t.mapValue);

          default:
            throw T();
        }
    }, t.prototype.xl = function(t) {
        var e = this, n = {};
        return O(t.fields || {}, (function(t, r) {
            n[t] = e.Cl(r);
        })), n;
    }, t.prototype.Nl = function(t) {
        return new _r(zt(t.latitude), zt(t.longitude));
    }, t.prototype.kl = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.Cl(t);
        }));
    }, t.prototype.Fl = function(t) {
        switch (this.bl) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Rt(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.Cl(e);

          case "estimate":
            return this.Dl(Ot(t));

          default:
            return null;
        }
    }, t.prototype.Dl = function(t) {
        var e = Bt(t), n = new j(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.$l = function(t) {
        var e = B.N(t);
        _(be(e));
        var n = new L(e.get(1), e.get(3)), r = new W(e.p(5));
        return n.isEqual(this.s) || 
        // TODO(b/64130202): Somehow support foreign references.
        N("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.s.projectId + "/" + this.s.database + ") instead."), 
        this.Sl(r);
    }, t;
}(), Ci = Fn.Ei, qi = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new x(q.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else $n("settings", "non-empty string", "host", t.host), this.host = t.host, Kn("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (sr("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        Kn("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        Kn("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), Kn("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? N("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && N("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        Kn("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Fn.Ii; else {
            if (t.cacheSizeBytes !== Ci && t.cacheSizeBytes < Fn.mi) throw new x(q.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Fn.mi);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        Kn("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), xi = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(r, i, o) {
        var s = this;
        if (void 0 === o && (o = new Si), this.Ol = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Ll = new xn, this.INTERNAL = {
            delete: function() {
                return e(s, void 0, void 0, (function() {
                    return n(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.Ml(), [ 4 /*yield*/ , this.ql.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = r;
            this.Ol = u, this.Jr = t.Bl(u), this.Ul = u.name, this.Ql = new Xr(i);
        } else {
            var a = r;
            if (!a.projectId) throw new x(q.INVALID_ARGUMENT, "Must provide projectId");
            this.Jr = new L(a.projectId, a.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.Ul = "[DEFAULT]", this.Ql = new Yr;
        }
        this.Wl = o, this.jl = new qi({});
    }
    return Object.defineProperty(t.prototype, "Gl", {
        get: function() {
            return this.Kl || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.Kl = new Rr(this.Jr, this.jl.ignoreUndefinedProperties)), this.Kl;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settings = function(t) {
        Hn("Firestore.settings", arguments, 1), Xn("Firestore.settings", "object", 1, t);
        var e = new qi(t);
        if (this.ql && !this.jl.isEqual(e)) throw new x(q.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.jl = e, void 0 !== e.credentials && (this.Ql = function(t) {
            if (!t) return new Yr;
            switch (t.type) {
              case "gapi":
                var e = t.zl;
                // Make sure this really is a Gapi client.
                                return _(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new $r(e, t.yo || "0");

              case "provider":
                return t.zl;

              default:
                throw new x(q.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.Ml(), this.ql.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Ml(), this.ql.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.ql) throw new x(q.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && N("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new x(q.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Hl(this.Wl, {
            El: !0,
            cacheSizeBytes: this.jl.cacheSizeBytes,
            synchronizeTabs: r,
            Yl: i
        });
    }, t.prototype.clearPersistence = function() {
        return e(this, void 0, void 0, (function() {
            var t, r = this;
            return n(this, (function(i) {
                if (void 0 !== this.ql && !this.ql.Vl) throw new x(q.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                return t = new Un, [ 2 /*return*/ , (this.Ll.Js((function() {
                    return e(r, void 0, void 0, (function() {
                        var e;
                        return n(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.Wl.clearPersistence(this.Jr, this.Ul) ];

                              case 1:
                                return n.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return e = n.sent(), t.reject(e), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "Xl", {
        get: function() {
            return this.Ml(), this.ql.Vl;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.Ml(), this.ql.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.Ml(), Oi(t)) return ji(this.ql, t);
        Xn("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return ji(this.ql, e);
    }, t.prototype.Ml = function() {
        return this.ql || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Hl(new Si, {
            El: !1
        }), this.ql;
    }, t.prototype.Jl = function() {
        return new S(this.Jr, this.Ul, this.jl.host, this.jl.ssl, this.jl.forceLongPolling);
    }, t.prototype.Hl = function(t, e) {
        var n = this.Jl();
        return this.ql = new Li(this.Ql, this.Ll), this.ql.start(n, t, e);
    }, t.Bl = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new x(q.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
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
 */        if (!n || "string" != typeof n) throw new x(q.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new L(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.Ol) throw new x(q.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Ol;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return Hn("Firestore.collection", arguments, 1), Xn("Firestore.collection", "non-empty string", 1, t), 
        this.Ml(), new $i(B.N(t), this, 
        /* converter= */ null);
    }, t.prototype.doc = function(t) {
        return Hn("Firestore.doc", arguments, 1), Xn("Firestore.doc", "non-empty string", 1, t), 
        this.Ml(), Bi.Zl(B.N(t), this, 
        /* converter= */ null);
    }, t.prototype.collectionGroup = function(t) {
        if (Hn("Firestore.collectionGroup", arguments, 1), Xn("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new x(q.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.Ml(), new Yi(new sn(B.k(), t), this, 
        /* converter= */ null);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return Hn("Firestore.runTransaction", arguments, 1), Xn("Firestore.runTransaction", "function", 1, t), 
        this.Ml().transaction((function(n) {
            return t(new Fi(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.Ml(), new Gi(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (E()) {
              case s.DEBUG:
                return "debug";

              case s.ERROR:
                return "error";

              case s.SILENT:
                return "silent";

              case s.WARN:
                return "warn";

              case s.INFO:
                return "info";

              case s.VERBOSE:
                return "verbose";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !1,
        configurable: !0
    }), t.setLogLevel = function(t) {
        var e;
        Hn("Firestore.setLogLevel", arguments, 1), er("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, b.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.t_ = function() {
        return this.jl.timestampsInSnapshots;
    }, t;
}();

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
// settings() defaults:
/** Registers the listener for onSnapshotsInSync() */ function ji(t, e) {
    var n = new Ri({
        next: function() {
            e.next && e.next();
        },
        error: function(t) {
            throw T();
        }
    });
    return t.Lu(n), function() {
        n.vl(), t.Mu(n);
    }
    /**
 * A reference to a transaction.
 */;
}

var Fi = /** @class */ function() {
    function t(t, e) {
        this.e_ = t, this.n_ = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        Hn("Transaction.get", arguments, 1);
        var n = no("Transaction.get", t, this.e_);
        return this.n_.fh([ n.Zr ]).then((function(t) {
            if (!t || 1 !== t.length) return T();
            var r = t[0];
            if (r instanceof rn) return new Wi(e.e_, n.Zr, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.to);
            if (r instanceof nn) return new Wi(e.e_, n.Zr, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.to);
            throw T();
        }));
    }, t.prototype.set = function(t, e, n) {
        Yn("Transaction.set", arguments, 2, 3);
        var r = no("Transaction.set", t, this.e_);
        n = Ki("Transaction.set", n);
        var i = io(r.to, e, n), o = Or(this.e_.Gl, "Transaction.set", r.Zr, i, null !== r.to, n);
        return this.n_.set(r.Zr, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof yr ? (Zn("Transaction.update", arguments, 3), 
        r = no("Transaction.update", t, this.e_), i = Cr(this.e_.Gl, "Transaction.update", r.Zr, e, n, o)) : (Hn("Transaction.update", arguments, 2), 
        r = no("Transaction.update", t, this.e_), i = Mr(this.e_.Gl, "Transaction.update", r.Zr, e)), 
        this.n_.update(r.Zr, i), this;
    }, t.prototype.delete = function(t) {
        Hn("Transaction.delete", arguments, 1);
        var e = no("Transaction.delete", t, this.e_);
        return this.n_.delete(e.Zr), this;
    }, t;
}(), Gi = /** @class */ function() {
    function t(t) {
        this.e_ = t, this.s_ = [], this.i_ = !1;
    }
    return t.prototype.set = function(t, e, n) {
        Yn("WriteBatch.set", arguments, 2, 3), this.r_();
        var r = no("WriteBatch.set", t, this.e_);
        n = Ki("WriteBatch.set", n);
        var i = io(r.to, e, n), o = Or(this.e_.Gl, "WriteBatch.set", r.Zr, i, null !== r.to, n);
        return this.s_ = this.s_.concat(o.eo(r.Zr, Me.je())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.r_(), "string" == typeof e || e instanceof yr ? (Zn("WriteBatch.update", arguments, 3), 
        r = no("WriteBatch.update", t, this.e_), i = Cr(this.e_.Gl, "WriteBatch.update", r.Zr, e, n, o)) : (Hn("WriteBatch.update", arguments, 2), 
        r = no("WriteBatch.update", t, this.e_), i = Mr(this.e_.Gl, "WriteBatch.update", r.Zr, e)), 
        this.s_ = this.s_.concat(i.eo(r.Zr, Me.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        Hn("WriteBatch.delete", arguments, 1), this.r_();
        var e = no("WriteBatch.delete", t, this.e_);
        return this.s_ = this.s_.concat(new Xe(e.Zr, Me.je())), this;
    }, t.prototype.commit = function() {
        return this.r_(), this.i_ = !0, this.s_.length > 0 ? this.e_.Ml().write(this.s_) : Promise.resolve();
    }, t.prototype.r_ = function() {
        if (this.i_) throw new x(q.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Bi = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.Jr, t, r) || this).Zr = t, i.firestore = n, i.to = r, 
        i.ql = i.firestore.Ml(), i;
    }
    return t(n, e), n.Zl = function(t, e, r) {
        if (t.length % 2 != 0) throw new x(q.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.$() + " has " + t.length);
        return new n(new W(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Zr.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new $i(this.Zr.path.g(), this.firestore, this.to);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Zr.path.$();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (Hn("DocumentReference.collection", arguments, 1), Xn("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new x(q.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = B.N(t);
        return new $i(this.Zr.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw ur("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.Zr.isEqual(t.Zr) && this.to === t.to;
    }, n.prototype.set = function(t, e) {
        Yn("DocumentReference.set", arguments, 1, 2), e = Ki("DocumentReference.set", e);
        var n = io(this.to, t, e), r = Or(this.firestore.Gl, "DocumentReference.set", this.Zr, n, null !== this.to, e);
        return this.ql.write(r.eo(this.Zr, Me.je()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof yr ? (Zn("DocumentReference.update", arguments, 2), 
        n = Cr(this.firestore.Gl, "DocumentReference.update", this.Zr, t, e, r)) : (Hn("DocumentReference.update", arguments, 1), 
        n = Mr(this.firestore.Gl, "DocumentReference.update", this.Zr, t)), this.ql.write(n.eo(this.Zr, Me.exists(!0)));
    }, n.prototype.delete = function() {
        return Hn("DocumentReference.delete", arguments, 0), this.ql.write([ new Xe(this.Zr, Me.je()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        Yn("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
            includeMetadataChanges: !1
        }, u = 0;
        "object" != typeof i[u] || Oi(i[u]) || (sr("DocumentReference.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        Kn("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++);
        var a = {
            includeMetadataChanges: s.includeMetadataChanges
        };
        if (Oi(i[u])) {
            var h = i[u];
            i[u] = null === (t = h.next) || void 0 === t ? void 0 : t.bind(h), i[u + 1] = null === (e = h.error) || void 0 === e ? void 0 : e.bind(h), 
            i[u + 2] = null === (n = h.complete) || void 0 === n ? void 0 : n.bind(h);
        } else Xn("DocumentReference.onSnapshot", "function", u, i[u]), Jn("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), 
        Jn("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
        var c = {
            next: function(t) {
                i[u] && i[u](r.o_(t));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return zi(this.ql, this.Zr, a, c);
    }, n.prototype.get = function(t) {
        var e = this;
        return Yn("DocumentReference.get", arguments, 0, 1), eo("DocumentReference.get", t), 
        t && "cache" === t.source ? this.firestore.Ml().yl(this.Zr).then((function(t) {
            return new Wi(e.firestore, e.Zr, t, 
            /*fromCache=*/ !0, t instanceof nn && t.Ge, e.to);
        })) : 
        /**
         * Retrieves a latency-compensated document from the backend via a
         * SnapshotListener.
         */
        function(t, e, n) {
            var r = new Un, i = zi(t, e, {
                includeMetadataChanges: !0,
                Gu: !0
            }, {
                next: function(t) {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    i();
                    var o = t.docs.has(e);
                    !o && t.fromCache ? 
                    // TODO(dimond): If we're online and the document doesn't
                    // exist then we resolve with a doc.exists set to false. If
                    // we're offline however, we reject the Promise in this
                    // case. Two options: 1) Cache the negative response from
                    // the server so we can deliver that even when you're
                    // offline 2) Actually reject the Promise in the online case
                    // if the document doesn't exist.
                    r.reject(new x(q.UNAVAILABLE, "Failed to get document because the client is offline.")) : o && t.fromCache && n && "server" === n.source ? r.reject(new x(q.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : r.resolve(t);
                },
                error: function(t) {
                    return r.reject(t);
                }
            });
            return r.promise;
        }(this.ql, this.Zr, t).then((function(t) {
            return e.o_(t);
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Zr, this.firestore, t);
    }, 
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n.prototype.o_ = function(t) {
        var e = t.docs.get(this.Zr);
        return new Wi(this.firestore, this.Zr, e, t.fromCache, t.hasPendingWrites, this.to);
    }, n;
}(Vr);

/** Registers an internal snapshot listener for `ref`. */ function zi(t, e, n, r) {
    var i = function(t) {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    r.error && (i = r.error.bind(r));
    var o = new Ri({
        next: function(t) {
            r.next && r.next(t);
        },
        error: i
    }), s = t.listen(sn.on(e.path), o, n);
    return function() {
        o.vl(), t.Jh(s);
    };
}

var Qi = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Wi = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.e_ = t, this.Zr = e, this.h_ = n, this.a_ = r, this.u_ = i, this.to = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (Yn("DocumentSnapshot.data", arguments, 0, 1), t = to("DocumentSnapshot.data", t), 
        this.h_) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.to) {
                var n = new Hi(this.e_, this.Zr, this.h_, this.a_, this.u_, 
                /* converter= */ null);
                return this.to.fromFirestore(n, t);
            }
            return new Mi(this.e_.Jr, this.e_.t_(), t.serverTimestamps || "none", (function(t) {
                return new Bi(t, e.e_, /* converter= */ null);
            })).Cl(this.h_.Ze());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (Yn("DocumentSnapshot.get", arguments, 1, 2), e = to("DocumentSnapshot.get", e), 
        this.h_) {
            var r = this.h_.data().field(Br("DocumentSnapshot.get", t, this.Zr));
            if (null !== r) return new Mi(this.e_.Jr, this.e_.t_(), e.serverTimestamps || "none", (function(t) {
                return new Bi(t, n.e_, n.to);
            })).Cl(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Zr.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Bi(this.Zr, this.e_, this.to);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.h_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Qi(this.u_, this.a_);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ur("isEqual", "DocumentSnapshot", 1, e);
        return this.e_ === e.e_ && this.a_ === e.a_ && this.Zr.isEqual(e.Zr) && (null === this.h_ ? null === e.h_ : this.h_.isEqual(e.h_)) && this.to === e.to;
    }, t;
}(), Hi = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Wi);

/** The query class that is shared between the full, lite and legacy SDK. */ function Zi(t) {
    if (t.mn() && 0 === t.tn.length) throw new x(q.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var Yi = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.Jr, n.Gl, t) || this).c_ = t, i.firestore = n, i.to = r, 
        i;
    }
    return t(n, e), n.prototype.where = function(t, e, r) {
        Hn("Query.where", arguments, 3), or("Query.where", 3, r);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var i = er("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, e), o = Br("Query.where", t), s = this.l_(o, i, r);
        return new n(this.c_.un(s), this.firestore, this.to);
    }, n.prototype.orderBy = function(t, e) {
        var r;
        if (Yn("Query.orderBy", arguments, 1, 2), Jn("Query.orderBy", "non-empty string", 2, e), 
        void 0 === e || "asc" === e) r = "asc" /* ASCENDING */; else {
            if ("desc" !== e) throw new x(q.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        var i = Br("Query.orderBy", t), o = this.w_(i, r);
        return new n(this.c_.cn(o), this.firestore, this.to);
    }, n.prototype.limit = function(t) {
        return Hn("Query.limit", arguments, 1), Xn("Query.limit", "number", 1, t), ar("Query.limit", 1, t), 
        new n(this.c_.ln(t), this.firestore, this.to);
    }, n.prototype.limitToLast = function(t) {
        return Hn("Query.limitToLast", arguments, 1), Xn("Query.limitToLast", "number", 1, t), 
        ar("Query.limitToLast", 1, t), new n(this.c_._n(t), this.firestore, this.to);
    }, n.prototype.startAt = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        Zn("Query.startAt", arguments, 1);
        var i = this.A_("Query.startAt", t, e, 
        /*before=*/ !0);
        return new n(this.c_.fn(i), this.firestore, this.to);
    }, n.prototype.startAfter = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        Zn("Query.startAfter", arguments, 1);
        var i = this.A_("Query.startAfter", t, e, 
        /*before=*/ !1);
        return new n(this.c_.fn(i), this.firestore, this.to);
    }, n.prototype.endBefore = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        Zn("Query.endBefore", arguments, 1);
        var i = this.A_("Query.endBefore", t, e, 
        /*before=*/ !0);
        return new n(this.c_.dn(i), this.firestore, this.to);
    }, n.prototype.endAt = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        Zn("Query.endAt", arguments, 1);
        var i = this.A_("Query.endAt", t, e, 
        /*before=*/ !1);
        return new n(this.c_.dn(i), this.firestore, this.to);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw ur("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && un(this.c_, t.c_) && this.to === t.to;
    }, n.prototype.withConverter = function(t) {
        return new n(this.c_, this.firestore, t);
    }, 
    /** Helper function to create a bound from a document or fields */ n.prototype.A_ = function(t, e, n, i) {
        if (or(t, 1, e), e instanceof Wi) return Hn(t, r([ e ], n), 1), this.E_(t, e.h_, i);
        var o = [ e ].concat(n);
        return this.m_(t, o, i);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        Yn("Query.onSnapshot", arguments, 1, 4);
        var s = {}, u = 0;
        if ("object" != typeof i[u] || Oi(i[u]) || (sr("Query.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        Kn("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++), Oi(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), 
            i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else Xn("Query.onSnapshot", "function", u, i[u]), Jn("Query.onSnapshot", "function", u + 1, i[u + 1]), 
        Jn("Query.onSnapshot", "function", u + 2, i[u + 2]);
        var h = {
            next: function(t) {
                i[u] && i[u](new Ji(r.firestore, r.c_, t, r.to));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return Zi(this.c_), Xi(this.firestore.Ml(), this.c_, s, h);
    }, n.prototype.get = function(t) {
        var e = this;
        Yn("Query.get", arguments, 0, 1), eo("Query.get", t), Zi(this.c_);
        var n = this.firestore.Ml();
        return (t && "cache" === t.source ? n.pl(this.c_) : 
        /**
     * Retrieves a latency-compensated query snapshot from the backend via a
     * SnapshotListener.
     */
        function(t, e, n) {
            var r = new Un, i = Xi(t, e, {
                includeMetadataChanges: !0,
                Gu: !0
            }, {
                next: function(t) {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    i(), t.fromCache && n && "server" === n.source ? r.reject(new x(q.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : r.resolve(t);
                },
                error: function(t) {
                    return r.reject(t);
                }
            });
            return r.promise;
        }(n, this.c_, t)).then((function(t) {
            return new Ji(e.firestore, e.c_, t, e.to);
        }));
    }, n;
}(/** @class */ function() {
    function t(t, e, n) {
        this.Jr = t, this.Gl = e, this.c_ = n;
    }
    return t.prototype.l_ = function(t, e, n) {
        var r;
        if (t.L()) {
            if ("array-contains" /* ARRAY_CONTAINS */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) throw new x(q.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + e + "' queries on FieldPath.documentId().");
            if ("in" /* IN */ === e) {
                this.__(n, e);
                for (var i = [], o = 0, s = n; o < s.length; o++) {
                    var u = s[o];
                    i.push(this.f_(u));
                }
                r = {
                    arrayValue: {
                        values: i
                    }
                };
            } else r = this.f_(n);
        } else "in" /* IN */ !== e && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== e || this.__(n, e), 
        r = qr(this.Gl, "Query.where", n, "in" /* IN */ === e);
        var a = ln.create(t, e, r);
        return this.d_(a), a;
    }, t.prototype.w_ = function(t, e) {
        if (null !== this.c_.startAt) throw new x(q.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.c_.endAt) throw new x(q.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var n = new In(t, e);
        return this.T_(n), n;
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.E_ = function(t, e, n) {
        if (!e) throw new x(q.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var r = [], i = 0, o = this.c_.orderBy; i < o.length; i++) {
            var s = o[i];
            if (s.field.L()) r.push(Wt(this.Jr, e.key)); else {
                var u = e.field(s.field);
                if (Rt(u)) throw new x(q.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === u) {
                    var a = s.field.$();
                    throw new x(q.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + a + "' (used as the orderBy) does not exist.");
                }
                r.push(u);
            }
        }
        return new mn(r, n);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.m_ = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.c_.tn;
        if (e.length > r.length) throw new x(q.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.L()) {
                if ("string" != typeof s) throw new x(q.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.c_.Vn() && -1 !== s.indexOf("/")) throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.c_.path.child(B.N(s));
                if (!W.W(u)) throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new W(u);
                i.push(Wt(this.Jr, a));
            } else {
                var h = qr(this.Gl, t, s);
                i.push(h);
            }
        }
        return new mn(i, n);
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.f_ = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.c_.Vn() && -1 !== t.indexOf("/")) throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.c_.path.child(B.N(t));
            if (!W.W(e)) throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return Wt(this.Jr, new W(e));
        }
        if (t instanceof Vr) return Wt(this.Jr, t.Zr);
        throw new x(q.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + ir(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.__ = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new x(q.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new x(q.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new x(q.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new x(q.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.d_ = function(t) {
        if (t instanceof ln) {
            var e = [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], n = [ "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.In()) {
                var o = this.c_.hn();
                if (null !== o && !o.isEqual(t.field)) throw new x(q.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.c_.an();
                null !== s && this.I_(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.c_.An(n)), null === u && r && (u = this.c_.An(e)), null !== u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new x(q.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new x(q.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.T_ = function(t) {
        if (null === this.c_.an()) {
            // This is the first order by. It must match any inequality.
            var e = this.c_.hn();
            null !== e && this.I_(e, t.field);
        }
    }, t.prototype.I_ = function(t, e) {
        if (!e.isEqual(t)) throw new x(q.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}());

function Xi(t, e, n, r) {
    var i = function(t) {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    r.error && (i = r.error.bind(r));
    var o = new Ri({
        next: function(t) {
            r.next && r.next(t);
        },
        error: i
    }), s = t.listen(e, o, n);
    return function() {
        o.vl(), t.Jh(s);
    };
}

var Ji = /** @class */ function() {
    function t(t, e, n, r) {
        this.e_ = t, this.R_ = e, this.P_ = n, this.to = r, this.V_ = null, this.y_ = null, 
        this.metadata = new Qi(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.P_.docs._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.P_.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        Yn("QuerySnapshot.forEach", arguments, 1, 2), Xn("QuerySnapshot.forEach", "function", 1, t), 
        this.P_.docs.forEach((function(r) {
            t.call(e, n.p_(r, n.metadata.fromCache, n.P_.Mt.has(r.key)));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Yi(this.R_, this.e_, this.to);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (sr("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), Kn("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.P_.Bt) throw new x(q.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.V_ && this.y_ === e || (this.V_ = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     *
     * @param snapshot The ViewSnapshot that represents the expected state.
     * @param includeMetadataChanges Whether to include metadata changes.
     * @param converter A factory function that returns a QueryDocumentSnapshot.
     * @return An objecyt that matches the firestore.DocumentChange API.
     */
        function(t, e, n) {
            if (t.Lt._()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r = 0;
                return t.docChanges.map((function(e) {
                    var i = n(e.doc, t.fromCache, t.Mt.has(e.doc.key));
                    return e.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: r++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var i = t.Lt;
            return t.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var r = n(e.doc, t.fromCache, t.Mt.has(e.doc.key)), o = -1, s = -1;
                return 0 /* Added */ !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                    type: ro(e.type),
                    doc: r,
                    oldIndex: o,
                    newIndex: s
                };
            }));
        }(this.P_, e, this.p_.bind(this)), this.y_ = e), this.V_;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw ur("isEqual", "QuerySnapshot", 1, e);
        return this.e_ === e.e_ && un(this.R_, e.R_) && this.P_.isEqual(e.P_) && this.to === e.to;
    }, t.prototype.p_ = function(t, e, n) {
        return new Hi(this.e_, t.key, t, e, n, this.to);
    }, t;
}(), $i = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, sn.on(t), n, r) || this).g_ = t, t.length % 2 != 1) throw new x(q.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.$() + " has " + t.length);
        return i;
    }
    return t(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.c_.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.c_.path.g();
            return t._() ? null : new Bi(new W(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.c_.path.$();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        Yn("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = V.t()), Xn("CollectionReference.doc", "non-empty string", 1, t);
        var e = B.N(t);
        return Bi.Zl(this.c_.path.child(e), this.firestore, this.to);
    }, n.prototype.add = function(t) {
        Hn("CollectionReference.add", arguments, 1), Xn("CollectionReference.add", "object", 1, this.to ? this.to.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.g_, this.firestore, t);
    }, n;
}(Yi);

function Ki(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (sr(t, e, [ "merge", "mergeFields" ]), Kn(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + ir(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new x(q.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + ir(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof yr;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new x(q.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function to(t, e) {
    return void 0 === e ? {} : (sr(t, e, [ "serverTimestamps" ]), tr(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function eo(t, e) {
    Jn(t, "object", 1, e), e && (sr(t, e, [ "source" ]), tr(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function no(t, e, n) {
    if (e instanceof Vr) {
        if (e.firestore !== n) throw new x(q.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw ur(t, "DocumentReference", 1, e);
}

function ro(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return T();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function io(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var oo = {
    Firestore: xi,
    GeoPoint: _r,
    Timestamp: j,
    Blob: pr,
    Transaction: Fi,
    WriteBatch: Gi,
    DocumentReference: Bi,
    DocumentSnapshot: Wi,
    Query: Yi,
    QueryDocumentSnapshot: Hi,
    QuerySnapshot: Ji,
    CollectionReference: $i,
    FieldPath: yr,
    FieldValue: Ar,
    setLogLevel: xi.setLogLevel,
    CACHE_SIZE_UNLIMITED: Ci
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Registers the memory-only Firestore build with the components framework.
 */ function so(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new m("firestore", (function(t) {
            return function(t, e) {
                return new xi(t, e, new Si);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, oo)));
    }(t), t.registerVersion("@firebase/firestore", "1.16.1");
}

so(i);

export { so as __PRIVATE_registerFirestore };
//# sourceMappingURL=index.memory.esm.js.map
