"use strict";

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t, e = require("tslib"), n = (t = require("@firebase/app")) && "object" == typeof t && "default" in t ? t.default : t, r = require("@firebase/logger"), i = require("@firebase/util"), o = require("@firebase/webchannel-wrapper"), s = require("@firebase/component"), u = n.SDK_VERSION, a = new r.Logger("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function c() {
    return a.logLevel;
}

function h(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (a.logLevel <= r.LogLevel.DEBUG) {
        var o = n.map(l);
        a.debug.apply(a, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

function f(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (a.logLevel <= r.LogLevel.ERROR) {
        var o = n.map(l);
        a.error.apply(a, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function l(t) {
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
 */ function p(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + u + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw f(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function d(t, e) {
    t || p();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function y(t, 
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
 */ function v(t) {
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
 */ var g = /** @class */ function() {
    function t() {}
    return t.t = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = v(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function m(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function w(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function _(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
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
 */ var b = 
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
}, I = /** @class */ function() {
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
        return m(this.projectId, t.projectId) || m(this.database, t.database);
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
function E(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function T(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function N(t) {
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
 */ var A = /** @class */ function() {
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
        T(this.l, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype._ = function() {
        return N(this.l);
    }, t;
}(), x = {
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
}, D = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return e.__extends(n, t), n;
}(Error), S = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new D(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new D(x.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new D(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new D(x.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
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
        return this.seconds === t.seconds ? m(this.nanoseconds, t.nanoseconds) : m(this.seconds, t.seconds);
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
}(), k = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.I = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new S(0, 0));
    }, t.prototype.o = function(t) {
        return this.timestamp.T(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.m = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.A = function() {
        return this.timestamp;
    }, t;
}(), P = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && p(), void 0 === n ? n = t.length - e : n > t.length - e && p(), 
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
    }, t.prototype.g = function(t) {
        return t = void 0 === t ? 1 : t, this.V(this.segments, this.offset + t, this.length - t);
    }, t.prototype.p = function() {
        return this.V(this.segments, this.offset, this.length - 1);
    }, t.prototype.v = function() {
        return this.segments[this.offset];
    }, t.prototype.S = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype._ = function() {
        return 0 === this.length;
    }, t.prototype.D = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.C = function(t) {
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
}(), L = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.N = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.F().join("/");
    }, n.prototype.toString = function() {
        return this.N();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.$ = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.k = function() {
        return new n([]);
    }, n;
}(P), O = /^[_a-zA-Z][_a-zA-Z0-9]*$/, R = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.V = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.M = function(t) {
        return O.test(t);
    }, n.prototype.N = function() {
        return this.F().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.M(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.N();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.O = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.L = function() {
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
    n.B = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new D(x.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new D(x.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new D(x.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.k = function() {
        return new n([]);
    }, n;
}(P), V = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.q = function(e) {
        return new t(L.$(e).g(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.U = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === L.P(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.P = function(t, e) {
        return L.P(t.path, e.path);
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
        return new t(new L(e.slice()));
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
function U(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function C(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function M(t) {
    return "number" == typeof t && Number.isInteger(t) && !C(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

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
var F = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.K = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function q(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new F(t, e, n, r, i, o, s);
}

function j(t) {
    var e = y(t);
    if (null === e.K) {
        var n = e.path.N();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.N() + t.op.toString() + Lt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return (e = t).field.N() + e.dir;
            var e;
        })).join(","), U(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += gn(e.startAt)), e.endAt && (n += "|ub:", n += gn(e.endAt)), e.K = n;
    }
    return e.K;
}

function z(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!In(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    !(i instanceof hn && o instanceof hn && i.op === o.op && i.field.isEqual(o.field) && Dt(i.value, o.value))) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!wn(t.startAt, e.startAt) && wn(t.endAt, e.endAt);
}

function B(t) {
    return V.W(t.path) && null === t.collectionGroup && 0 === t.filters.length;
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
 */ var G = /** @class */ function() {
    function t(t) {
        this.G = t;
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
        return t = this.G, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.G);
    }, t.prototype.H = function() {
        return 2 * this.G.length;
    }, t.prototype.o = function(t) {
        return m(this.G, t.G);
    }, t.prototype.isEqual = function(t) {
        return this.G === t.G;
    }, t;
}();

G.Y = new G("");

var Q, W, $ = /** @class */ function() {
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
        void 0 === i && (i = k.min()), void 0 === o && (o = k.min()), void 0 === s && (s = G.Y), 
        this.target = t, this.targetId = e, this.J = n, this.sequenceNumber = r, this.X = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Z = function(e) {
        return new t(this.target, this.targetId, this.J, e, this.X, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.tt = function(e, n) {
        return new t(this.target, this.targetId, this.J, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.et = function(e) {
        return new t(this.target, this.targetId, this.J, this.sequenceNumber, this.X, e, this.resumeToken);
    }, t;
}(), K = 
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
function H(t) {
    switch (t) {
      case x.OK:
        return p();

      case x.CANCELLED:
      case x.UNKNOWN:
      case x.DEADLINE_EXCEEDED:
      case x.RESOURCE_EXHAUSTED:
      case x.INTERNAL:
      case x.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case x.UNAUTHENTICATED:
        return !1;

      case x.INVALID_ARGUMENT:
      case x.NOT_FOUND:
      case x.ALREADY_EXISTS:
      case x.PERMISSION_DENIED:
      case x.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case x.ABORTED:
      case x.OUT_OF_RANGE:
      case x.UNIMPLEMENTED:
      case x.DATA_LOSS:
        return !0;

      default:
        return p();
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
 */ function Y(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return f("GRPC error has no .code"), x.UNKNOWN;
    switch (t) {
      case Q.OK:
        return x.OK;

      case Q.CANCELLED:
        return x.CANCELLED;

      case Q.UNKNOWN:
        return x.UNKNOWN;

      case Q.DEADLINE_EXCEEDED:
        return x.DEADLINE_EXCEEDED;

      case Q.RESOURCE_EXHAUSTED:
        return x.RESOURCE_EXHAUSTED;

      case Q.INTERNAL:
        return x.INTERNAL;

      case Q.UNAVAILABLE:
        return x.UNAVAILABLE;

      case Q.UNAUTHENTICATED:
        return x.UNAUTHENTICATED;

      case Q.INVALID_ARGUMENT:
        return x.INVALID_ARGUMENT;

      case Q.NOT_FOUND:
        return x.NOT_FOUND;

      case Q.ALREADY_EXISTS:
        return x.ALREADY_EXISTS;

      case Q.PERMISSION_DENIED:
        return x.PERMISSION_DENIED;

      case Q.FAILED_PRECONDITION:
        return x.FAILED_PRECONDITION;

      case Q.ABORTED:
        return x.ABORTED;

      case Q.OUT_OF_RANGE:
        return x.OUT_OF_RANGE;

      case Q.UNIMPLEMENTED:
        return x.UNIMPLEMENTED;

      case Q.DATA_LOSS:
        return x.DATA_LOSS;

      default:
        return p();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (W = Q || (Q = {}))[W.OK = 0] = "OK", W[W.CANCELLED = 1] = "CANCELLED", W[W.UNKNOWN = 2] = "UNKNOWN", 
W[W.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", W[W.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", 
W[W.NOT_FOUND = 5] = "NOT_FOUND", W[W.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", W[W.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
W[W.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", W[W.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
W[W.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", W[W.ABORTED = 10] = "ABORTED", 
W[W.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", W[W.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
W[W.INTERNAL = 13] = "INTERNAL", W[W.UNAVAILABLE = 14] = "UNAVAILABLE", W[W.DATA_LOSS = 15] = "DATA_LOSS";

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
var J = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.root = e || Z.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.nt = function(e, n) {
        return new t(this.P, this.root.nt(e, n, this.P).copy(null, null, Z.st, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.P, this.root.remove(e, this.P).copy(null, null, Z.st, null, null));
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
        return new X(this.root, null, this.P, !1);
    }, t.prototype.ut = function(t) {
        return new X(this.root, t, this.P, !1);
    }, t.prototype.ct = function() {
        return new X(this.root, null, this.P, !0);
    }, t.prototype.lt = function(t) {
        return new X(this.root, t, this.P, !0);
    }, t;
}(), X = /** @class */ function() {
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
}(), Z = /** @class */ function() {
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
        return t.right.At() && !t.left.At() && (t = t.gt()), t.left.At() && t.left.left.At() && (t = t.Pt()), 
        t.left.At() && t.right.At() && (t = t.yt()), t;
    }, t.prototype.Rt = function() {
        var t = this.yt();
        return t.right.left.At() && (t = (t = (t = t.copy(null, null, null, null, t.right.Pt())).gt()).yt()), 
        t;
    }, t.prototype.Vt = function() {
        var t = this.yt();
        return t.left.left.At() && (t = (t = t.Pt()).yt()), t;
    }, t.prototype.gt = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.Pt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.yt = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.pt = function() {
        var t = this.bt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.bt = function() {
        if (this.At() && this.left.At()) throw p();
        if (this.right.At()) throw p();
        var t = this.left.bt();
        if (t !== this.right.bt()) throw p();
        return t + (this.At() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Z.EMPTY = null, Z.RED = !0, Z.st = !1, 
// end LLRBEmptyNode
Z.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw p();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw p();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw p();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw p();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw p();
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
        return new Z(t, e);
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
    t.prototype.pt = function() {
        return !0;
    }, t.prototype.bt = function() {
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
var tt = /** @class */ function() {
    function t(t) {
        this.P = t, this.data = new J(this.P);
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
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.vt = function(t, e) {
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
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Dt = function(t) {
        var e = this.data.ut(t);
        return e.wt() ? e.dt().key : null;
    }, t.prototype.at = function() {
        return new et(this.data.at());
    }, t.prototype.ut = function(t) {
        return new et(this.data.ut(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).nt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype._ = function() {
        return this.data._();
    }, t.prototype.Ct = function(t) {
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
}(), et = /** @class */ function() {
    function t(t) {
        this.Ft = t;
    }
    return t.prototype.dt = function() {
        return this.Ft.dt().key;
    }, t.prototype.wt = function() {
        return this.Ft.wt();
    }, t;
}(), nt = new J(V.P);

function rt() {
    return nt;
}

function it() {
    return rt();
}

var ot = new J(V.P);

function st() {
    return ot;
}

var ut = new J(V.P), at = new tt(V.P);

function ct() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = at, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var ht = new tt(m);

function ft() {
    return ht;
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
 */ var lt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.P = t ? function(e, n) {
            return t(e, n) || V.P(e.key, n.key);
        } : function(t, e) {
            return V.P(t.key, e.key);
        }, this.Nt = st(), this.$t = new J(this.P)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.kt = function(e) {
        return new t(e.P);
    }, t.prototype.has = function(t) {
        return null != this.Nt.get(t);
    }, t.prototype.get = function(t) {
        return this.Nt.get(t);
    }, t.prototype.first = function() {
        return this.$t.it();
    }, t.prototype.last = function() {
        return this.$t.rt();
    }, t.prototype._ = function() {
        return this.$t._();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Nt.get(t);
        return e ? this.$t.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.$t.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.$t.ot((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Nt.nt(t.key, t), e.$t.nt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.Nt.remove(t), this.$t.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.$t.at(), r = e.$t.at(); n.wt(); ) {
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
        return r.P = this.P, r.Nt = e, r.$t = n, r;
    }, t;
}(), pt = /** @class */ function() {
    function t() {
        this.xt = new J(V.P);
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
        p() : this.xt = this.xt.nt(e, t);
    }, t.prototype.Mt = function() {
        var t = [];
        return this.xt.ot((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), dt = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Ot = n, this.docChanges = r, this.Lt = i, this.fromCache = o, 
        this.Bt = s, this.qt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Ut = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, lt.kt(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Lt._();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Bt === t.Bt && this.Lt.isEqual(t.Lt) && on(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ot.isEqual(t.Ot))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), yt = /** @class */ function() {
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
        this.X = t, this.Qt = e, this.Wt = n, this.jt = r, this.Kt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Gt = function(e, n) {
        var r = new Map;
        return r.set(e, vt.zt(e, n)), new t(k.min(), r, ft(), rt(), ct());
    }, t;
}(), vt = /** @class */ function() {
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
        this.resumeToken = t, this.Ht = e, this.Yt = n, this.Jt = r, this.Xt = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.zt = function(e, n) {
        return new t(G.Y, n, ct(), ct(), ct());
    }, t;
}(), gt = function(
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
}, mt = function(t, e) {
    this.targetId = t, this.ee = e;
}, wt = function(
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
    void 0 === n && (n = G.Y), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, _t = /** @class */ function() {
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
        this.se = Et(), 
        /** See public getters for explanations of these fields. */
        this.ie = G.Y, this.re = !1, 
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
        var t = ct(), e = ct(), n = ct();
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
                p();
            }
        })), new vt(this.ie, this.re, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.le = function() {
        this.oe = !1, this.se = Et();
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
}(), bt = /** @class */ function() {
    function t(t) {
        this.Ee = t, 
        /** The internal state of all tracked targets. */
        this.Ie = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.me = rt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ae = It(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Re = new tt(m)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Pe = function(t) {
        for (var e = 0, n = t.Zt; e < n.length; e++) {
            var r = n[e];
            t.te instanceof tn ? this.Ve(r, t.te) : t.te instanceof en && this.ge(r, t.key, t.te);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.ge(s, t.key, t.te);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.ye = function(t) {
        var e = this;
        this.pe(t, (function(n) {
            var r = e.be(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.ve(n) && r.ue(t.resumeToken);
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
                e.ve(n) && (r.Te(), r.ue(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.ve(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Se(n), r.ue(t.resumeToken));
                break;

              default:
                p();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.pe = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ie.forEach((function(t, r) {
            n.ve(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.De = function(t) {
        var e = t.targetId, n = t.ee.count, r = this.Ce(e);
        if (r) {
            var i = r.target;
            if (B(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new V(i.path);
                this.ge(e, o, new en(o, k.min()));
            } else d(1 === n); else this.Fe(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Se(e), this.Re = this.Re.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Ne = function(t) {
        var e = this, n = new Map;
        this.Ie.forEach((function(r, i) {
            var o = e.Ce(i);
            if (o) {
                if (r.Ht && B(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new V(o.target.path);
                    null !== e.me.get(s) || e.$e(i, s) || e.ge(i, s, new en(s, t));
                }
                r.ae && (n.set(i, r.ce()), r.le());
            }
        }));
        var r = ct();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ae.forEach((function(t, n) {
            var i = !0;
            n.St((function(t) {
                var n = e.Ce(t);
                return !n || 2 /* LimboResolution */ === n.J || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new yt(t, n, this.Re, this.me, r);
        return this.me = rt(), this.Ae = It(), this.Re = new tt(m), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Ve = function(t, e) {
        if (this.ve(t)) {
            var n = this.$e(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.be(t)._e(e.key, n), this.me = this.me.nt(e.key, e), this.Ae = this.Ae.nt(e.key, this.ke(e.key).add(t));
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
    t.prototype.ge = function(t, e, n) {
        if (this.ve(t)) {
            var r = this.be(t);
            this.$e(t, e) ? r._e(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.fe(e), this.Ae = this.Ae.nt(e, this.ke(e).delete(t)), n && (this.me = this.me.nt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Ie.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Fe = function(t) {
        var e = this.be(t).ce();
        return this.Ee.xe(t).size + e.Yt.size - e.Xt.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.de = function(t) {
        this.be(t).de();
    }, t.prototype.be = function(t) {
        var e = this.Ie.get(t);
        return e || (e = new _t, this.Ie.set(t, e)), e;
    }, t.prototype.ke = function(t) {
        var e = this.Ae.get(t);
        return e || (e = new tt(m), this.Ae = this.Ae.nt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.ve = function(t) {
        var e = null !== this.Ce(t);
        return e || h("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.Ce = function(t) {
        var e = this.Ie.get(t);
        return e && e.he ? null : this.Ee.Me(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Se = function(t) {
        var e = this;
        this.Ie.set(t, new _t), this.Ee.xe(t).forEach((function(n) {
            e.ge(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.$e = function(t, e) {
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
 */ function It() {
    return new J(V.P);
}

function Et() {
    return new J(V.P);
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
 */ function Tt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Nt(t) {
    var e = Ot(t.mapValue.fields.__local_write_time__.timestampValue);
    return new S(e.seconds, e.nanos);
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
var At = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function xt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Tt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : p();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Dt(t, e) {
    var n = xt(t);
    if (n !== xt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Nt(t).isEqual(Nt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = Ot(t.timestampValue), r = Ot(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Vt(t.bytesValue).isEqual(Vt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return Rt(t.geoPointValue.latitude) === Rt(e.geoPointValue.latitude) && Rt(t.geoPointValue.longitude) === Rt(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return Rt(t.integerValue) === Rt(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = Rt(t.doubleValue), r = Rt(e.doubleValue);
                return n === r ? C(n) === C(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return w(t.arrayValue.values || [], e.arrayValue.values || [], Dt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (E(n) !== E(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Dt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return p();
    }
}

function St(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Dt(t, e);
    }));
}

function kt(t, e) {
    var n = xt(t), r = xt(e);
    if (n !== r) return m(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return m(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = Rt(t.integerValue || t.doubleValue), r = Rt(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Pt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Pt(Nt(t), Nt(e));

      case 5 /* StringValue */ :
        return m(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = Vt(t), r = Vt(e);
            return n.o(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = m(n[i], r[i]);
                if (0 !== o) return o;
            }
            return m(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = m(Rt(t.latitude), Rt(e.latitude));
            return 0 !== n ? n : m(Rt(t.longitude), Rt(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = kt(n[i], r[i]);
                if (o) return o;
            }
            return m(n.length, r.length);
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
                var u = m(r[s], o[s]);
                if (0 !== u) return u;
                var a = kt(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return m(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw p();
    }
}

function Pt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return m(t, e);
    var n = Ot(t), r = Ot(e), i = m(n.seconds, r.seconds);
    return 0 !== i ? i : m(n.nanos, r.nanos);
}

function Lt(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = Ot(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? Vt(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        V.q(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
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
        }(e.mapValue) : p();
        var n, r;
    }(t);
}

function Ot(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (d(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = At.exec(t);
        if (d(!!n), n[1]) {
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
        seconds: Rt(t.seconds),
        nanos: Rt(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function Rt(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Vt(t) {
    return "string" == typeof t ? G.fromBase64String(t) : G.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Ut(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.N()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Ct(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Mt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Ft(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function qt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function jt(t) {
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
 */ var zt = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Bt = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Gt = function(t, e) {
    this.s = t, this.Oe = e;
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
function Qt(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function Wt(t, e) {
    if (t.Oe) {
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
        doubleValue: C(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function $t(t, e) {
    return M(e) ? Qt(e) : Wt(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function Kt(t, e) {
    return t.Oe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function Ht(t, e) {
    return t.Oe ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function Yt(t, e) {
    return Kt(t, e.A());
}

function Jt(t) {
    return d(!!t), k.I(function(t) {
        var e = Ot(t);
        return new S(e.seconds, e.nanos);
    }(t));
}

function Xt(t, e) {
    return function(t) {
        return new L([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).N();
}

function Zt(t) {
    var e = L.$(t);
    return d(me(e)), e;
}

function te(t, e) {
    return Xt(t.s, e.path);
}

function ee(t, e) {
    var n = Zt(e);
    return d(n.get(1) === t.s.projectId), d(!n.get(3) && !t.s.database || n.get(3) === t.s.database), 
    new V(oe(n));
}

function ne(t, e) {
    return Xt(t.s, e);
}

function re(t) {
    var e = Zt(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? L.k() : oe(e);
}

function ie(t) {
    return new L([ "projects", t.s.projectId, "databases", t.s.database ]).N();
}

function oe(t) {
    return d(t.length > 4 && "documents" === t.get(4)), t.g(5)
    /** Creates an api.Document from key and fields (but no create/update time) */;
}

function se(t, e, n) {
    return {
        name: te(t, e),
        fields: n.proto.mapValue.fields
    };
}

function ue(t, e) {
    var n;
    if (e instanceof ze) n = {
        update: se(t, e.key, e.value)
    }; else if (e instanceof Ke) n = {
        delete: te(t, e.key)
    }; else if (e instanceof Be) n = {
        update: se(t, e.key, e.data),
        updateMask: ge(e.Le)
    }; else if (e instanceof Qe) n = {
        transform: {
            document: te(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof Ee) return {
                        fieldPath: e.field.N(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof Te) return {
                        fieldPath: e.field.N(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Ae) return {
                        fieldPath: e.field.N(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof De) return {
                        fieldPath: e.field.N(),
                        increment: n.Be
                    };
                    throw p();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof He)) return p();
        n = {
            verify: te(t, e.key)
        };
    }
    return e.Ue.qe || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Yt(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : p();
    }(t, e.Ue)), n;
}

function ae(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Re.updateTime(Jt(t.updateTime)) : void 0 !== t.exists ? Re.exists(t.exists) : Re.Qe();
    }(e.currentDocument) : Re.Qe();
    if (e.update) {
        e.update.name;
        var r = ee(t, e.update.name), i = new Ye({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var o = function(t) {
                var e = t.fieldPaths || [];
                return new Pe(e.map((function(t) {
                    return R.B(t);
                })));
            }(e.updateMask);
            return new Be(r, i, o, n);
        }
        return new ze(r, i, n);
    }
    if (e.delete) {
        var s = ee(t, e.delete);
        return new Ke(s, n);
    }
    if (e.transform) {
        var u = ee(t, e.transform.document), a = e.transform.fieldTransforms.map((function(e) {
            return function(t, e) {
                var n = null;
                if ("setToServerValue" in e) d("REQUEST_TIME" === e.setToServerValue), n = new Ee; else if ("appendMissingElements" in e) {
                    var r = e.appendMissingElements.values || [];
                    n = new Te(r);
                } else if ("removeAllFromArray" in e) {
                    var i = e.removeAllFromArray.values || [];
                    n = new Ae(i);
                } else "increment" in e ? n = new De(t, e.increment) : p();
                var o = R.B(e.fieldPath);
                return new Le(o, n);
            }(t, e);
        }));
        return d(!0 === n.exists), new Qe(u, a);
    }
    if (e.verify) {
        var c = ee(t, e.verify);
        return new He(c, n);
    }
    return p();
}

function ce(t, e) {
    return {
        documents: [ ne(t, e.path) ]
    };
}

function he(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = ne(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = ne(t, r.p()), n.structuredQuery.from = [ {
        collectionId: r.S()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                return t instanceof hn ? 
                // visible for testing
                function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (qt(t.value)) return {
                            unaryFilter: {
                                field: pe(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Ft(t.value)) return {
                            unaryFilter: {
                                field: pe(t.field),
                                op: "IS_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: pe(t.field),
                            op: (e = t.op, Bt[e]),
                            value: t.value
                        }
                    };
                    // visible for testing
                                        var e;
                }(t) : p();
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
                field: pe((e = t).field),
                direction: (n = e.dir, zt[n])
            };
            // visible for testing
                        var e, n;
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.Oe || U(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = fe(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = fe(e.endAt)), n;
}

function fe(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function le(t) {
    var e = !!t.before, n = t.values || [];
    return new vn(n, e);
}

// visible for testing
function pe(t) {
    return {
        fieldPath: t.N()
    };
}

function de(t) {
    return R.B(t.fieldPath);
}

function ye(t) {
    return hn.create(de(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return p();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function ve(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = de(t.unaryFilter.field);
        return hn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = de(t.unaryFilter.field);
        return hn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return p();
    }
}

function ge(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.N());
    })), {
        fieldPaths: e
    };
}

function me(t) {
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
/** Represents a transform within a TransformMutation. */ var we = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.je = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function _e(t, e, n) {
    return t instanceof Ee ? function(t, e) {
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
    }(n, e) : t instanceof Te ? Ne(t, e) : t instanceof Ae ? xe(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ie(t, e), r = Se(n) + Se(t.Be);
        return Ct(n) && Ct(t.Be) ? Qt(r) : Wt(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function be(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Te ? Ne(t, e) : t instanceof Ae ? xe(t, e) : n;
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
 */ function Ie(t, e) {
    return t instanceof De ? Ct(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Ee = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n;
}(we), Te = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return e.__extends(n, t), n;
}(we);

/** Transforms an array value via a union operation. */ function Ne(t, e) {
    for (var n = ke(e), r = function(t) {
        n.some((function(e) {
            return Dt(e, t);
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

/** Transforms an array value via a remove operation. */ var Ae = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return e.__extends(n, t), n;
}(we);

function xe(t, e) {
    for (var n = ke(e), r = function(t) {
        n = n.filter((function(e) {
            return !Dt(e, t);
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
 */ var De = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).serializer = e, r.Be = n, r;
    }
    return e.__extends(n, t), n;
}(we);

function Se(t) {
    return Rt(t.integerValue || t.doubleValue);
}

function ke(t) {
    return Mt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
 */ var Pe = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(R.P)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.Ke = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].D(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return w(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Le = function(t, e) {
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
}, Re = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.Qe = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "qe", {
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
function Ve(t, e) {
    return void 0 !== t.updateTime ? e instanceof tn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof tn;
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
 */ var Ue = function() {};

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
 */ function Ce(t, e, n) {
    return t instanceof ze ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new tn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof Be ? function(t, e, n) {
        if (!Ve(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new nn(t.key, n.version);
        var r = Ge(t, e);
        return new tn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof Qe ? function(t, e, n) {
        if (d(null != n.transformResults), !Ve(t.Ue, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new nn(t.key, n.version);
        var r = We(t, e), i = 
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
            d(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], s = o.transform, u = null;
                e instanceof tn && (u = e.field(o.field)), r.push(be(s, u, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, s = $e(t, r.data(), i);
        return new tn(t.key, o, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new en(t.key, n.version, {
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
 */ function Me(t, e, n, r) {
    return t instanceof ze ? function(t, e) {
        if (!Ve(t.Ue, e)) return e;
        var n = je(e);
        return new tn(t.key, n, t.value, {
            Ge: !0
        });
    }(t, e) : t instanceof Be ? function(t, e) {
        if (!Ve(t.Ue, e)) return e;
        var n = je(e), r = Ge(t, e);
        return new tn(t.key, n, r, {
            Ge: !0
        });
    }(t, e) : t instanceof Qe ? function(t, e, n, r) {
        if (!Ve(t.Ue, e)) return e;
        var i = We(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
                var u = s[o], a = u.transform, c = null;
                n instanceof tn && (c = n.field(u.field)), null === c && r instanceof tn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                c = r.field(u.field)), i.push(_e(a, c, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), s = $e(t, i.data(), o);
        return new tn(t.key, i.version, s, {
            Ge: !0
        });
    }(t, e, r, n) : function(t, e) {
        return Ve(t.Ue, e) ? new en(t.key, k.min()) : e;
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
    return t instanceof Qe ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof tn ? e.field(o.field) : void 0, u = Ie(o.transform, s || null);
            null != u && (n = null == n ? (new Je).set(o.field, u) : n.set(o.field, u));
        }
        return n ? n.ze() : null;
    }(t, e) : null;
}

function qe(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ue.isEqual(e.Ue) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.Le.isEqual(e.Le) : 2 /* Transform */ !== t.type || w(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof Te && e instanceof Te || t instanceof Ae && e instanceof Ae ? w(t.elements, e.elements, Dt) : t instanceof De && e instanceof De ? Dt(t.Be, e.Be) : t instanceof Ee && e instanceof Ee;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function je(t) {
    return t instanceof tn ? t.version : k.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var ze = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).key = e, i.value = n, i.Ue = r, i.type = 0 /* Set */ , 
        i;
    }
    return e.__extends(n, t), n;
}(Ue), Be = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this) || this).key = e, o.data = n, o.Le = r, o.Ue = i, o.type = 1 /* Patch */ , 
        o;
    }
    return e.__extends(n, t), n;
}(Ue);

function Ge(t, e) {
    return function(t, e) {
        var n = new Je(e);
        return t.Le.fields.forEach((function(e) {
            if (!e._()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.ze();
    }(t, e instanceof tn ? e.data() : Ye.empty());
}

var Qe = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ue = Re.exists(!0), r;
    }
    return e.__extends(n, t), n;
}(Ue);

function We(t, e) {
    return e;
}

function $e(t, e, n) {
    for (var r = new Je(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.ze();
}

/** A mutation that deletes the document at the given key. */ var Ke = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Ue = n, r.type = 3 /* Delete */ , r;
    }
    return e.__extends(n, t), n;
}(Ue), He = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Ue = n, r.type = 4 /* Verify */ , r;
    }
    return e.__extends(n, t), n;
}(Ue), Ye = /** @class */ function() {
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
            if (!jt(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.S()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Dt(this.proto, t.proto);
    }, t;
}(), Je = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = Ye.empty()), this.He = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ye = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Je(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Je(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Je = function(t, e) {
        for (var n = this.Ye, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === xt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.S(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.ze = function() {
        var t = this.Xe(R.k(), this.Ye);
        return null != t ? new Ye(t) : this.He;
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
        var n = this, r = !1, i = this.He.field(t), o = jt(i) ? // If there is already data at the current path, base our
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
function Xe(t) {
    var e = [];
    return T(t.fields || {}, (function(t, n) {
        var r = new R([ t ]);
        if (jt(n)) {
            var i = Xe(n.mapValue).fields;
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
    })), new Pe(e)
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

var Ze = function(t, e) {
    this.key = t, this.version = e;
}, tn = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).Ze = r, o.Ge = !!i.Ge, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return e.__extends(n, t), n.prototype.field = function(t) {
        return this.Ze.field(t);
    }, n.prototype.data = function() {
        return this.Ze;
    }, n.prototype.tn = function() {
        return this.Ze.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ge === t.Ge && this.hasCommittedMutations === t.hasCommittedMutations && this.Ze.isEqual(t.Ze);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Ze.toString() + ", {hasLocalMutations: " + this.Ge + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.Ge || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(Ze), en = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
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
}(Ze), nn = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
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
}(Ze), rn = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.en = n, 
        this.filters = r, this.limit = i, this.nn = o, this.startAt = s, this.endAt = u, 
        this.sn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.rn = null, this.startAt && this.on(this.startAt), this.endAt && this.on(this.endAt);
    }
    return t.hn = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.sn) {
                this.sn = [];
                var t = this.an(), e = this.un();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.O() || this.sn.push(new _n(t)), this.sn.push(new _n(R.L(), "asc" /* ASCENDING */)); else {
                    for (var n = !1, r = 0, i = this.en; r < i.length; r++) {
                        var o = i[r];
                        this.sn.push(o), o.field.O() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.en.length > 0 ? this.en[this.en.length - 1].dir : "asc" /* ASCENDING */;
                        this.sn.push(new _n(R.L(), s));
                    }
                }
            }
            return this.sn;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.cn = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.en.slice(), n, this.limit, this.nn, this.startAt, this.endAt);
    }, t.prototype.ln = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.en.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
    }, t.prototype._n = function(e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.fn = function(e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.dn = function(e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, e, this.endAt);
    }, t.prototype.wn = function(e) {
        return new t(this.path, this.collectionGroup, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Tn = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.En = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.en.length || 1 === this.en.length && this.en[0].field.O());
    }, t.prototype.In = function() {
        return !U(this.limit) && "F" /* First */ === this.nn;
    }, t.prototype.mn = function() {
        return !U(this.limit) && "L" /* Last */ === this.nn;
    }, t.prototype.un = function() {
        return this.en.length > 0 ? this.en[0].field : null;
    }, t.prototype.an = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof hn && n.An()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.Rn = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof hn && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.Pn = function() {
        return B(this.We());
    }, t.prototype.Vn = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.We = function() {
        if (!this.rn) if ("F" /* First */ === this.nn) this.rn = q(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = "desc" /* DESCENDING */ === r.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new _n(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new vn(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new vn(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.rn = q(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.rn;
    }, t.prototype.on = function(t) {}, t;
}();

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */ function on(t, e) {
    return z(t.We(), e.We()) && t.nn === e.nn;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function sn(t) {
    return j(t.We()) + "|lt:" + t.nn;
}

function un(t) {
    return "Query(target=" + function(t) {
        var e = t.path.N();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.N() + " " + e.op + " " + Lt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        U(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return (e = t).field.N() + " (" + e.dir + ")";
            var e;
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + gn(t.startAt)), t.endAt && (e += ", endAt: " + gn(t.endAt)), 
        "Target(" + e + ")";
    }(t.We()) + "; limitType=" + t.nn + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function an(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.U(t.collectionGroup) && t.path.D(n) : V.W(t.path) ? t.path.isEqual(n) : t.path.C(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.en; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.O() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !mn(t.startAt, t.orderBy, e)) && (!t.endAt || !mn(t.endAt, t.orderBy, e));
    }(t, e);
}

function cn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = t.orderBy; i < o.length; i++) {
            var s = o[i], u = bn(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.O();
        }
        return 0;
    };
}

var hn = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return e.__extends(n, t), n.create = function(t, e, r) {
        if (t.O()) return "in" /* IN */ === e ? new ln(t, r) : new fn(t, e, r);
        if (Ft(r)) {
            if ("==" /* EQUAL */ !== e) throw new D(x.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (qt(r)) {
            if ("==" /* EQUAL */ !== e) throw new D(x.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new pn(t, r) : "in" /* IN */ === e ? new dn(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new yn(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && xt(this.value) === xt(e) && this.gn(kt(e, this.value));
    }, n.prototype.gn = function(t) {
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
            return p();
        }
    }, n.prototype.An = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var fn = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = V.q(r.referenceValue), i;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = V.P(t.key, this.key);
        return this.gn(e);
    }, n;
}(hn), ln = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, e, "in" /* IN */ , n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return V.q(t.referenceValue);
        })), r;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(hn), pn = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return Mt(e) && St(e.arrayValue, this.value);
    }, n;
}(hn), dn = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, "in" /* IN */ , n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && St(this.value.arrayValue, e);
    }, n;
}(hn), yn = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!Mt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return St(e.value.arrayValue, t);
        }));
    }, n;
}(hn), vn = function(t, e) {
    this.position = t, this.before = e;
};

/** Filter that matches on key fields within an array. */ function gn(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return Lt(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function mn(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.O() ? V.P(V.q(s.referenceValue), n.key) : kt(s, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function wn(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Dt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var _n = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function bn(t, e, n) {
    var r = t.field.O() ? V.P(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? kt(r, i) : p();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return p();
    }
}

function In(t, e) {
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
 */ var En = /** @class */ function() {
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
        this.batchId = t, this.yn = e, this.baseMutations = n, this.mutations = r
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
    return t.prototype.pn = function(t, e, n) {
        for (var r = n.bn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = Ce(o, e, r[i]));
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
    t.prototype.vn = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = Me(i, e, e, this.yn));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = Me(a, e, o, this.yn));
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
            var i = e.vn(r.key, t.get(r.key));
            i && (n = n.nt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), ct());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && w(this.mutations, t.mutations, (function(t, e) {
            return qe(t, e);
        })) && w(this.baseMutations, t.baseMutations, (function(t, e) {
            return qe(t, e);
        }));
    }, t;
}(), Tn = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.Dn = e, this.bn = n, this.Cn = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        d(e.mutations.length === r.length);
        for (var i = ut, o = e.mutations, s = 0; s < o.length; s++) i = i.nt(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Nn = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Fn = null, this.Nn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.$n = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.kn = !1, t((function(t) {
            e.$n = !0, e.result = t, e.Fn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Fn(t);
        }), (function(t) {
            e.$n = !0, e.error = t, e.Nn && e.Nn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.kn && p(), this.kn = !0, this.$n ? this.error ? this.xn(n, this.error) : this.Mn(e, this.result) : new t((function(t, i) {
            r.Fn = function(n) {
                r.Mn(e, n).next(t, i);
            }, r.Nn = function(e) {
                r.xn(n, e).next(t, i);
            };
        }));
    }, t.prototype.On = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Ln = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Mn = function(e, n) {
        return e ? this.Ln((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.xn = function(e, n) {
        return e ? this.Ln((function() {
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
    }, t.Bn = function(
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
    t.qn = function(e) {
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
        })), this.Bn(r);
    }, t;
}(), An = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Un = new A((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.Qn = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.Wn;
        },
        set: function(t) {
            this.Wn = t;
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
    t.prototype.jn = function(t, e) {
        this.Kn(), this.readTime = e, this.Un.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Gn = function(t, e) {
        this.Kn(), e && (this.readTime = e), this.Un.set(t, null);
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
        this.Kn();
        var n = this.Un.get(e);
        return void 0 !== n ? Nn.resolve(n) : this.Hn(t, e);
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
        return this.Yn(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Kn(), this.Qn = !0, this.Jn(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Kn = function() {}, 
    t;
}(), xn = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Dn = /** @class */ function() {
    function t() {
        this.Xn = [];
    }
    return t.prototype.Zn = function(t) {
        this.Xn.push(t);
    }, t.prototype.ts = function() {
        this.Xn.forEach((function(t) {
            return t();
        }));
    }, t;
}(), Sn = /** @class */ function() {
    function t(t, e, n) {
        this.es = t, this.ns = e, this.ss = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.rs = function(t, e) {
        var n = this;
        return this.ns.os(t, e).next((function(r) {
            return n.hs(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.hs = function(t, e, n) {
        return this.es.zn(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].vn(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.as = function(t, e, n) {
        var r = it();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].vn(t, e);
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
    t.prototype.us = function(t, e) {
        var n = this;
        return this.es.getEntries(t, e).next((function(e) {
            return n.cs(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.cs = function(t, e) {
        var n = this;
        return this.ns.ls(t, e).next((function(r) {
            var i = n.as(t, e, r), o = rt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new en(t, k.min())), o = o.nt(t, e);
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
    t.prototype._s = function(t, e, n) {
        return e.Pn() ? this.fs(t, e.path) : e.Vn() ? this.ds(t, e, n) : this.ws(t, e, n);
    }, t.prototype.fs = function(t, e) {
        // Just do a simple document lookup.
        return this.rs(t, new V(e)).next((function(t) {
            var e = st();
            return t instanceof tn && (e = e.nt(t.key, t)), e;
        }));
    }, t.prototype.ds = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = st();
        return this.ss.Ts(t, i).next((function(s) {
            return Nn.forEach(s, (function(s) {
                var u = e.Tn(s.child(i));
                return r.ws(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.nt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.ws = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.es._s(t, e, n).next((function(n) {
            return r = n, o.ns.Es(t, e);
        })).next((function(e) {
            return i = e, o.Is(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], c = a.key, h = r.get(c), f = Me(a, h, h, o.yn);
                    r = f instanceof tn ? r.nt(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                an(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Is = function(t, e, n) {
        for (var r = ct(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof Be && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.es.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof tn && (c = c.nt(t, e));
            })), c;
        }));
    }, t;
}(), kn = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.ms = n, this.As = r;
    }
    return t.Rs = function(e, n) {
        for (var r = ct(), i = ct(), o = 0, s = n.docChanges; o < s.length; o++) {
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
}(), Pn = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.Ps = function(t) {
            return n.Vs(t);
        }, this.gs = function(t) {
            return e.ys(t);
        });
    }
    return t.prototype.Vs = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.gs && this.gs(t), t;
    }, t;
}();

/** The result of applying a mutation batch to the backend. */ Pn.ps = -1;

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
var Ln = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, On = /** @class */ function() {
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
        this.bs = t, this.vs = e, this.Ss = n, this.Ds = r, this.Cs = i, this.Fs = 0, this.Ns = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.$s = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Fs = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.ks = function() {
        this.Fs = this.Cs;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.xs = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Fs + this.Ms()), r = Math.max(0, Date.now() - this.$s), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && h("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Fs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Ns = this.bs.Os(this.vs, i, (function() {
            return e.$s = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Fs *= this.Ds, this.Fs < this.Ss && (this.Fs = this.Ss), this.Fs > this.Cs && (this.Fs = this.Cs);
    }, t.prototype.Ls = function() {
        null !== this.Ns && (this.Ns.Bs(), this.Ns = null);
    }, t.prototype.cancel = function() {
        null !== this.Ns && (this.Ns.cancel(), this.Ns = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Ms = function() {
        return (Math.random() - .5) * this.Fs;
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
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function Rn(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Un(e)), e = Vn(t.get(n), e);
    return Un(e);
}

/** Encodes a single segment of a resource path into the given result */ function Vn(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Un(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Cn(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (d(e >= 2), 2 === e) return d("" === t.charAt(0) && "" === t.charAt(1)), L.k();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && p(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            p();
        }
        o = s + 2;
    }
    return new L(r);
}

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
/**
 * An in-memory implementation of IndexManager.
 */ var Mn = /** @class */ function() {
    function t() {
        this.qs = new Fn;
    }
    return t.prototype.Us = function(t, e) {
        return this.qs.add(e), Nn.resolve();
    }, t.prototype.Ts = function(t, e) {
        return Nn.resolve(this.qs.getEntries(e));
    }, t;
}(), Fn = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.S(), n = t.p(), r = this.index[e] || new tt(L.P), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.S(), n = t.p(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new tt(L.P)).F();
    }, t;
}(), qn = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Qs = new Fn;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Us = function(t, e) {
        var n = this;
        if (!this.Qs.has(e)) {
            var r = e.S(), i = e.p();
            t.Zn((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.Qs.add(e);
            }));
            var o = {
                collectionId: r,
                parent: Rn(i)
            };
            return jn(t).put(o);
        }
        return Nn.resolve();
    }, t.prototype.Ts = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ _(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return jn(t).Ws(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(Cn(o.parent));
            }
            return n;
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function jn(t) {
    return hr.js(t, Ur.store);
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
/** Serializer for values stored in the LocalStore. */ var zn = function(t) {
    this.Ks = t;
};

/** Decodes a remote document from storage locally to a Document. */ function Bn(t, e) {
    if (e.document) return function(t, e, n) {
        var r = ee(t, e.name), i = Jt(e.updateTime), o = new Ye({
            mapValue: {
                fields: e.fields
            }
        });
        return new tn(r, i, o, {
            hasCommittedMutations: !!n
        });
    }(t.Ks, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = V.j(e.noDocument.path), r = Kn(e.noDocument.readTime);
        return new en(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        var i = V.j(e.unknownDocument.path), o = Kn(e.unknownDocument.version);
        return new nn(i, o);
    }
    return p();
}

/** Encodes a document for storage locally. */ function Gn(t, e, n) {
    var r = Qn(n), i = e.key.path.p().F();
    if (e instanceof tn) {
        var o = function(t, e) {
            return {
                name: te(t, e.key),
                fields: e.tn().mapValue.fields,
                updateTime: Kt(t, e.version.A())
            };
        }(t.Ks, e), s = e.hasCommittedMutations;
        return new Pr(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, s, r, i);
    }
    if (e instanceof en) {
        var u = e.key.path.F(), a = $n(e.version), c = e.hasCommittedMutations;
        return new Pr(
        /* unknownDocument= */ null, new Sr(u, a), 
        /* document= */ null, c, r, i);
    }
    if (e instanceof nn) {
        var h = e.key.path.F(), f = $n(e.version);
        return new Pr(new kr(h, f), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return p();
}

function Qn(t) {
    var e = t.A();
    return [ e.seconds, e.nanoseconds ];
}

function Wn(t) {
    var e = new S(t[0], t[1]);
    return k.I(e);
}

function $n(t) {
    var e = t.A();
    return new Tr(e.seconds, e.nanoseconds);
}

function Kn(t) {
    var e = new S(t.seconds, t.nanoseconds);
    return k.I(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function Hn(t, e) {
    var n = (e.baseMutations || []).map((function(e) {
        return ae(t.Ks, e);
    })), r = e.mutations.map((function(e) {
        return ae(t.Ks, e);
    })), i = S.fromMillis(e.localWriteTimeMs);
    return new En(e.batchId, i, n, r);
}

/** Decodes a DbTarget into TargetData */ function Yn(t) {
    var e, n = Kn(t.readTime), r = void 0 !== t.lastLimboFreeSnapshotVersion ? Kn(t.lastLimboFreeSnapshotVersion) : k.min();
    return e = void 0 !== t.query.documents ? function(t) {
        d(1 === t.documents.length);
        var e = t.documents[0];
        return rn.hn(re(e)).We();
    }(t.query) : function(t) {
        var e = re(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            d(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = function t(e) {
            return e ? void 0 !== e.unaryFilter ? [ ve(e) ] : void 0 !== e.fieldFilter ? [ ye(e) ] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                return t(e);
            })).reduce((function(t, e) {
                return t.concat(e);
            })) : p() : [];
        }(n.where));
        var u = [];
        n.orderBy && (u = n.orderBy.map((function(t) {
            return new _n(de((e = t).field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(e.direction));
            var e;
        })));
        var a = null;
        n.limit && (a = function(t) {
            var e;
            return U(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = le(n.startAt));
        var h = null;
        return n.endAt && (h = le(n.endAt)), new rn(e, i, u, s, a, "F" /* First */ , c, h).We();
    }(t.query), new $(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, n, r, G.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function Jn(t, e) {
    var n, r = $n(e.X), i = $n(e.lastLimboFreeSnapshotVersion);
    n = B(e.target) ? ce(t.Ks, e.target) : he(t.Ks, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Or(e.targetId, j(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
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
 */ var Xn = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.serializer = t, this.ss = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.jn = function(t, e, n) {
        return tr(t).put(er(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Gn = function(t, e) {
        var n = tr(t), r = er(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Gs(t, r);
        }));
    }, t.prototype.zn = function(t, e) {
        var n = this;
        return tr(t).get(er(e)).next((function(t) {
            return n.zs(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Hs = function(t, e) {
        var n = this;
        return tr(t).get(er(e)).next((function(t) {
            var e = n.zs(t);
            return e ? {
                Ys: e,
                size: nr(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = it();
        return this.Js(t, e, (function(t, e) {
            var i = n.zs(e);
            r = r.nt(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.Xs = function(t, e) {
        var n = this, r = it(), i = new J(V.P);
        return this.Js(t, e, (function(t, e) {
            var o = n.zs(e);
            o ? (r = r.nt(t, o), i = i.nt(t, nr(e))) : (r = r.nt(t, null), i = i.nt(t, 0));
        })).next((function() {
            return {
                Zs: r,
                ti: i
            };
        }));
    }, t.prototype.Js = function(t, e, n) {
        if (e._()) return Nn.resolve();
        var r = IDBKeyRange.bound(e.first().path.F(), e.last().path.F()), i = e.at(), o = i.dt();
        return tr(t).ei({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = V.j(t); o && V.P(o, s) < 0; ) n(o, null), o = i.dt();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.wt() ? i.dt() : null), 
            // Skip to the next key (if there is one).
            o ? r.ni(o.path.F()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.wt() ? i.dt() : null;
        }));
    }, t.prototype._s = function(t, e, n) {
        var r = this, i = st(), o = e.path.length + 1, s = {};
        if (n.isEqual(k.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.F();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.F(), c = Qn(n);
            s.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), s.index = Pr.collectionReadTimeIndex;
        }
        return tr(t).ei(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = Bn(r.serializer, n);
                e.path.D(u.key.path) ? u instanceof tn && an(e, u) && (i = i.nt(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.si = function(t, e) {
        var n = this, r = rt(), i = Qn(e), o = tr(t), s = IDBKeyRange.lowerBound(i, !0);
        return o.ei({
            index: Pr.readTimeIndex,
            range: s
        }, (function(t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var o = Bn(n.serializer, e);
            r = r.nt(o.key, o), i = e.readTime;
        })).next((function() {
            return {
                ii: r,
                readTime: Wn(i)
            };
        }));
    }, 
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.min() if not available.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.ri = function(t) {
        var e = tr(t), n = k.min();
        // If there are no existing entries, we return SnapshotVersion.min().
                return e.ei({
            index: Pr.readTimeIndex,
            reverse: !0
        }, (function(t, e, r) {
            e.readTime && (n = Wn(e.readTime)), r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.oi = function(e) {
        return new t.hi(this, !!e && e.ai);
    }, t.prototype.ui = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Zn(t).get(Lr.key).next((function(t) {
            return d(!!t), t;
        }));
    }, t.prototype.Gs = function(t, e) {
        return Zn(t).put(Lr.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.zs = function(t) {
        if (t) {
            var e = Bn(this.serializer, t);
            return e instanceof en && e.version.isEqual(k.min()) ? null : e;
        }
        return null;
    }, t;
}();

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Zn(t) {
    return hr.js(t, Lr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function tr(t) {
    return hr.js(t, Pr.store);
}

function er(t) {
    return t.path.F();
}

/**
 * Retrusn an approximate size for the given document.
 */ function nr(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw p();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
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
/** Offset to ensure non-overlapping target ids. */ Xn.hi = /** @class */ function(t) {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).ci = e, r.ai = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.li = new A((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return e.__extends(n, t), n.prototype.Jn = function(t) {
        var e = this, n = [], r = 0, i = new tt((function(t, e) {
            return m(t.N(), e.N());
        }));
        return this.Un.forEach((function(o, s) {
            var u = e.li.get(o);
            if (s) {
                var a = Gn(e.ci.serializer, s, e.readTime);
                i = i.add(o.path.p());
                var c = nr(a);
                r += c - u, n.push(e.ci.jn(t, o, a));
            } else if (r -= u, e.ai) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = Gn(e.ci.serializer, new en(o, k.min()), e.readTime);
                n.push(e.ci.jn(t, o, h));
            } else n.push(e.ci.Gn(t, o));
        })), i.forEach((function(r) {
            n.push(e.ci.ss.Us(t, r));
        })), n.push(this.ci.updateMetadata(t, r)), Nn.Bn(n);
    }, n.prototype.Hn = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.ci.Hs(t, e).next((function(t) {
            return null === t ? (n.li.set(e, 0), null) : (n.li.set(e, t.size), t.Ys);
        }));
    }, n.prototype.Yn = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.ci.Xs(t, e).next((function(t) {
            var e = t.Zs;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.ti.forEach((function(t, e) {
                n.li.set(t, e);
            })), e;
        }));
    }, n;
}(An);

/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
var rr = /** @class */ function() {
    function t(t) {
        this._i = t;
    }
    return t.prototype.next = function() {
        return this._i += 2, this._i;
    }, t.fi = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.di = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), ir = /** @class */ function() {
    function t(t, e) {
        this.wi = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Ti = function(t) {
        var e = this;
        return this.Ei(t).next((function(n) {
            var r = new rr(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Ii(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.mi = function(t) {
        return this.Ei(t).next((function(t) {
            return k.I(new S(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Ai = function(t) {
        return this.Ei(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.Ri = function(t, e, n) {
        var r = this;
        return this.Ei(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.A()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ii(t, i);
        }));
    }, t.prototype.Pi = function(t, e) {
        var n = this;
        return this.Vi(t, e).next((function() {
            return n.Ei(t).next((function(r) {
                return r.targetCount += 1, n.gi(e, r), n.Ii(t, r);
            }));
        }));
    }, t.prototype.yi = function(t, e) {
        return this.Vi(t, e);
    }, t.prototype.pi = function(t, e) {
        var n = this;
        return this.bi(t, e.targetId).next((function() {
            return or(t).delete(e.targetId);
        })).next((function() {
            return n.Ei(t);
        })).next((function(e) {
            return d(e.targetCount > 0), e.targetCount -= 1, n.Ii(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.vi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return or(t).ei((function(s, u) {
            var a = Yn(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.pi(t, a)));
        })).next((function() {
            return Nn.Bn(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.pe = function(t, e) {
        return or(t).ei((function(t, n) {
            var r = Yn(n);
            e(r);
        }));
    }, t.prototype.Ei = function(t) {
        return sr(t).get(Vr.key).next((function(t) {
            return d(null !== t), t;
        }));
    }, t.prototype.Ii = function(t, e) {
        return sr(t).put(Vr.key, e);
    }, t.prototype.Vi = function(t, e) {
        return or(t).put(Jn(this.serializer, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.gi = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.Si = function(t) {
        return this.Ei(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.Di = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = j(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return or(t).ei({
            range: r,
            index: Or.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = Yn(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        z(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.Ci = function(t, e, n) {
        var r = this, i = [], o = ur(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = Rn(e.path);
            i.push(o.put(new Rr(n, s))), i.push(r.wi.Fi(t, n, e));
        })), Nn.Bn(i);
    }, t.prototype.Ni = function(t, e, n) {
        var r = this, i = ur(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return Nn.forEach(e, (function(e) {
            var o = Rn(e.path);
            return Nn.Bn([ i.delete([ n, o ]), r.wi.$i(t, n, e) ]);
        }));
    }, t.prototype.bi = function(t, e) {
        var n = ur(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.ki = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = ur(t), i = ct();
        return r.ei({
            range: n,
            xi: !0
        }, (function(t, e, n) {
            var r = Cn(t[1]), o = new V(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.Mi = function(t, e) {
        var n = Rn(e.path), r = IDBKeyRange.bound([ n ], [ _(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return ur(t).ei({
            index: Rr.documentTargetsIndex,
            xi: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Me = function(t, e) {
        return or(t).get(e).next((function(t) {
            return t ? Yn(t) : null;
        }));
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
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function or(t) {
    return hr.js(t, Or.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function sr(t) {
    return hr.js(t, Vr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function ur(t) {
    return hr.js(t, Rr.store);
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
 */ var ar = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", cr = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).Oi = e, r.Li = n, r;
    }
    return e.__extends(n, t), n;
}(Dn), hr = /** @class */ function() {
    function t(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    e, n, r, i, o, s, u, a, c, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    h) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.bs = o, this.window = s, this.document = u, this.Bi = c, this.qi = h, this.Ui = null, 
        this.Qi = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Wi = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.ji = null, 
        /** The client metadata refresh task. */
        this.Ki = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Gi = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.zi = function(t) {
            return Promise.resolve();
        }, !t.Hi()) throw new D(x.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.wi = new pr(this, i), this.Yi = n + "main", this.serializer = new zn(a), this.Ji = new ir(this.wi, this.serializer), 
        this.ss = new qn, this.es = new Xn(this.serializer, this.ss), this.window && this.window.localStorage ? this.Xi = this.window.localStorage : (this.Xi = null, 
        !1 === h && f("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    return t.js = function(t, e) {
        if (t instanceof cr) return qr.js(t.Oi, e);
        throw p();
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
        var t = this;
        return qr.Zi(this.Yi, Ir, new Er(this.serializer)).then((function(e) {
            return t.tr = e, t.er();
        })).then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new D(x.FAILED_PRECONDITION, ar);
            return t.nr(), t.sr(), t.ir(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.Ji.Ai(e);
            }));
        })).then((function(e) {
            t.Ui = new Pn(e, t.Bi);
        })).then((function() {
            t.Qi = !0;
        })).catch((function(e) {
            return t.tr && t.tr.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.rr = function(t) {
        var n = this;
        return this.zi = function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    return this.or ? [ 2 /*return*/ , t(r) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.hr = function(t) {
        var n = this;
        this.tr.ar((function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === r.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.ur = function(t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.bs.cr((function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.or ? [ 4 /*yield*/ , this.er() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.er = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return lr(e).put(new Mr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.lr(e).next((function(e) {
                    e || (t.isPrimary = !1, t.bs._r((function() {
                        return t.zi(!1);
                    })));
                }));
            })).next((function() {
                return t.dr(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.wr(e).next((function() {
                    return !1;
                })) : !!n && t.Tr(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (Br(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return h("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return h("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.bs._r((function() {
                return t.zi(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.lr = function(t) {
        var e = this;
        return fr(t).get(Nr.key).next((function(t) {
            return Nn.resolve(e.Er(t));
        }));
    }, t.prototype.Ir = function(t) {
        return lr(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.mr = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !this.isPrimary || this.Ar(this.Gi, 18e5) ? [ 3 /*break*/ , 2 ] : (this.Gi = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                        var n = t.js(e, Mr.store);
                        return n.Ws().next((function(t) {
                            var e = s.Rr(t, 18e5), r = t.filter((function(t) {
                                return -1 === e.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return Nn.forEach(r, (function(t) {
                                return n.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (n = e.sent(), this.Xi) for (r = 0, i = n; r < i.length; r++) o = i[r], this.Xi.removeItem(this.Pr(o.clientId));
                    e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.ir = function() {
        var t = this;
        this.Ki = this.bs.Os("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.er().then((function() {
                return t.mr();
            })).then((function() {
                return t.ir();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.Er = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.dr = function(t) {
        var e = this;
        return this.qi ? Nn.resolve(!0) : fr(t).get(Nr.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.Ar(n.leaseTimestampMs, 5e3) && !e.Vr(n.ownerId)) {
                if (e.Er(n) && e.networkEnabled) return !0;
                if (!e.Er(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new D(x.FAILED_PRECONDITION, ar);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || lr(t).Ws().next((function(t) {
                return void 0 === e.Rr(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && h("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.gr = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.Qi = !1, this.yr(), this.Ki && (this.Ki.cancel(), this.Ki = null), this.pr(), 
                    this.br(), [ 4 /*yield*/ , this.runTransaction("shutdown", "readwrite", (function(e) {
                        return t.wr(e).next((function() {
                            return t.Ir(e);
                        }));
                    })).catch((function(t) {
                        h("IndexedDbPersistence", "Proceeding with shutdown despite failure: ", t);
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return e.sent(), this.tr.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.vr(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.Rr = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.Ar(t.updateTimeMs, e) && !n.Vr(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Sr = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return lr(e).Ws().next((function(e) {
                return t.Rr(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(t.prototype, "or", {
        get: function() {
            return this.Qi;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Dr = function(t) {
        return vr.Cr(t, this.serializer, this.ss, this.wi);
    }, t.prototype.Fr = function() {
        return this.Ji;
    }, t.prototype.Nr = function() {
        return this.es;
    }, t.prototype.$r = function() {
        return this.ss;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        h("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.tr.runTransaction(o, Fr, (function(o) {
            return i = new cr(o, r.Ui ? r.Ui.next() : Pn.ps), "readwrite-primary" === e ? r.lr(i).next((function(t) {
                return !!t || r.dr(i);
            })).next((function(e) {
                if (!e) throw f("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.bs._r((function() {
                    return r.zi(!1);
                })), new D(x.FAILED_PRECONDITION, xn);
                return n(i);
            })).next((function(t) {
                return r.Tr(i).next((function() {
                    return t;
                }));
            })) : r.kr(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.ts(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.kr = function(t) {
        var e = this;
        return fr(t).get(Nr.key).next((function(t) {
            if (null !== t && e.Ar(t.leaseTimestampMs, 5e3) && !e.Vr(t.ownerId) && !e.Er(t) && !(e.qi || e.allowTabSynchronization && t.allowTabSynchronization)) throw new D(x.FAILED_PRECONDITION, ar);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.Tr = function(t) {
        var e = new Nr(this.clientId, this.allowTabSynchronization, Date.now());
        return fr(t).put(Nr.key, e);
    }, t.Hi = function() {
        return qr.Hi();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.wr = function(t) {
        var e = this, n = fr(t);
        return n.get(Nr.key).next((function(t) {
            return e.Er(t) ? (h("IndexedDbPersistence", "Releasing primary lease."), n.delete(Nr.key)) : Nn.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.Ar = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (f("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.nr = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.ji = function() {
            t.bs.cr((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.er();
            }));
        }, this.document.addEventListener("visibilitychange", this.ji), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.pr = function() {
        this.ji && (this.document.removeEventListener("visibilitychange", this.ji), this.ji = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.sr = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Wi = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.yr(), e.bs.cr((function() {
                return e.gr();
            }));
        }, this.window.addEventListener("unload", this.Wi));
    }, t.prototype.br = function() {
        this.Wi && (this.window.removeEventListener("unload", this.Wi), this.Wi = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Vr = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Xi) || void 0 === e ? void 0 : e.getItem(this.Pr(t)));
            return h("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return f("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.yr = function() {
        if (this.Xi) try {
            this.Xi.setItem(this.Pr(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            f("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.vr = function() {
        if (this.Xi) try {
            this.Xi.removeItem(this.Pr(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.Pr = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function fr(t) {
    return hr.js(t, Nr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function lr(t) {
    return hr.js(t, Mr.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ var pr = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.xr = new ii(this, e);
    }
    return t.prototype.Mr = function(t) {
        var e = this.Or(t);
        return this.db.Fr().Si(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.Or = function(t) {
        var e = 0;
        return this.Lr(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.pe = function(t, e) {
        return this.db.Fr().pe(t, e);
    }, t.prototype.Lr = function(t, e) {
        return this.Br(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.Fi = function(t, e, n) {
        return dr(t, n);
    }, t.prototype.$i = function(t, e, n) {
        return dr(t, n);
    }, t.prototype.vi = function(t, e, n) {
        return this.db.Fr().vi(t, e, n);
    }, t.prototype.qr = function(t, e) {
        return dr(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Ur = function(t, e) {
        /** Returns true if any mutation queue contains the given document. */
        return function(t, e) {
            var n = !1;
            return br(t).Qr((function(r) {
                return gr(t, r, e).next((function(t) {
                    return t && (n = !0), Nn.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.Wr = function(t, e) {
        var n = this, r = this.db.Nr().oi(), i = [], o = 0;
        return this.Br(t, (function(s, u) {
            if (u <= e) {
                var a = n.Ur(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.zn(t, s).next((function() {
                        return r.Gn(s), ur(t).delete([ 0, Rn(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return Nn.Bn(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.Z(t.Li);
        return this.db.Fr().yi(t, n);
    }, t.prototype.jr = function(t, e) {
        return dr(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Br = function(t, e) {
        var n, r = ur(t), i = Pn.ps;
        return r.ei({
            index: Rr.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Pn.ps && e(new V(Cn(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Pn.ps;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Pn.ps && e(new V(Cn(n)), i);
        }));
    }, t.prototype.Kr = function(t) {
        return this.db.Nr().ui(t);
    }, t;
}();

function dr(t, e) {
    return ur(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Rr(0, Rn(t.path), e);
    }(e, t.Li));
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function yr(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.i || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
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
    /** A mutation queue for a specific user, backed by IndexedDB. */;
}

var vr = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.serializer = e, this.ss = n, this.wi = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Gr = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Cr = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return d("" !== e.uid), new t(e.zr() ? e.uid : "", n, r, i);
    }, t.prototype.Hr = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return wr(t).ei({
            index: xr.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.Yr = function(t, e, n, r) {
        var i = this, o = _r(t), s = wr(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            d("number" == typeof u);
            for (var a = new En(u, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return ue(t.Ks, e);
                })), i = n.mutations.map((function(e) {
                    return ue(t.Ks, e);
                }));
                return new xr(e, n.batchId, n.yn.toMillis(), r, i);
            }(i.serializer, i.userId, a), h = [], f = new tt((function(t, e) {
                return m(t.N(), e.N());
            })), l = 0, p = r; l < p.length; l++) {
                var y = p[l], v = Dr.key(i.userId, y.key.path, u);
                f = f.add(y.key.path.p()), h.push(s.put(c)), h.push(o.put(v, Dr.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.ss.Us(t, e));
            })), t.Zn((function() {
                i.Gr[u] = a.keys();
            })), Nn.Bn(h).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Jr = function(t, e) {
        var n = this;
        return wr(t).get(e).next((function(t) {
            return t ? (d(t.userId === n.userId), Hn(n.serializer, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Xr = function(t, e) {
        var n = this;
        return this.Gr[e] ? Nn.resolve(this.Gr[e]) : this.Jr(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.Gr[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.Zr = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return wr(t).ei({
            index: xr.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (d(e.batchId >= r), o = Hn(n.serializer, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.to = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return wr(t).ei({
            index: xr.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.eo = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return wr(t).Ws(xr.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return Hn(e.serializer, t);
            }));
        }));
    }, t.prototype.os = function(t, e) {
        var n = this, r = Dr.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return _r(t).ei({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], c = r[2], h = Cn(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return wr(t).get(c).next((function(t) {
                if (!t) throw p();
                d(t.userId === n.userId), o.push(Hn(n.serializer, t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.ls = function(t, e) {
        var n = this, r = new tt(m), i = [];
        return e.forEach((function(e) {
            var o = Dr.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = _r(t).ei({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], c = Cn(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), Nn.Bn(i).next((function() {
            return n.no(t, r);
        }));
    }, t.prototype.Es = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = Dr.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new tt(m);
        return _r(t).ei({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], c = t[2], h = Cn(a);
            s === n.userId && r.D(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (u = u.add(c)) : o.done();
        })).next((function() {
            return n.no(t, u);
        }));
    }, t.prototype.no = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(wr(t).get(e).next((function(t) {
                if (null === t) throw p();
                d(t.userId === n.userId), r.push(Hn(n.serializer, t));
            })));
        })), Nn.Bn(i).next((function() {
            return r;
        }));
    }, t.prototype.so = function(t, e) {
        var n = this;
        return mr(t.Oi, this.userId, e).next((function(r) {
            return t.Zn((function() {
                n.io(e.batchId);
            })), Nn.forEach(r, (function(e) {
                return n.wi.qr(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.io = function(t) {
        delete this.Gr[t];
    }, t.prototype.ro = function(t) {
        var e = this;
        return this.Hr(t).next((function(n) {
            if (!n) return Nn.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(Dr.prefixForUser(e.userId)), i = [];
            return _r(t).ei({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = Cn(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                d(0 === i.length);
            }));
        }));
    }, t.prototype.Mi = function(t, e) {
        return gr(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.oo = function(t) {
        var e = this;
        return br(t).get(this.userId).next((function(t) {
            return t || new Ar(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function gr(t, e, n) {
    var r = Dr.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return _r(t).ei({
        range: o,
        xi: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

function mr(t, e, n) {
    var r = t.store(xr.store), i = t.store(Dr.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.ei({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        d(1 === u);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], p = Dr.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
    }
    return Nn.Bn(o).next((function() {
        return c;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function wr(t) {
    return hr.js(t, xr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function _r(t) {
    return hr.js(t, Dr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function br(t) {
    return hr.js(t, Ar.store);
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
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 */ var Ir = 10, Er = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, e, n, r) {
        var i = this;
        d(n < r && n >= 0 && r <= Ir);
        var o = new Gr(e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Nr.store);
        }(t), function(t) {
            t.createObjectStore(Ar.store, {
                keyPath: Ar.keyPath
            }), t.createObjectStore(xr.store, {
                keyPath: xr.keyPath,
                autoIncrement: !0
            }).createIndex(xr.userMutationsIndex, xr.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Dr.store);
        }(t), Cr(t), function(t) {
            t.createObjectStore(Pr.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = Nn.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Rr.store), t.deleteObjectStore(Or.store), t.deleteObjectStore(Vr.store);
        }(t), Cr(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Vr.store), n = new Vr(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, k.min().A(), 
                /*targetCount=*/ 0);
                return e.put(Vr.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(xr.store).Ws().next((function(n) {
                    t.deleteObjectStore(xr.store), t.createObjectStore(xr.store, {
                        keyPath: xr.keyPath,
                        autoIncrement: !0
                    }).createIndex(xr.userMutationsIndex, xr.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(xr.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return Nn.Bn(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(Mr.store, {
                    keyPath: Mr.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.removeAcknowledgedMutations(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(Lr.store);
            }(t), i.addDocumentGlobal(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ensureSequenceNumbers(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.createCollectionParentIndex(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Pr.store);
                e.createIndex(Pr.readTimeIndex, Pr.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Pr.collectionReadTimeIndex, Pr.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.rewriteCanonicalIds(o);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var e = 0;
        return t.store(Pr.store).ei((function(t, n) {
            e += nr(n);
        })).next((function() {
            var n = new Lr(e);
            return t.store(Lr.store).put(Lr.key, n);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var e = this, n = t.store(Ar.store), r = t.store(xr.store);
        return n.Ws().next((function(n) {
            return Nn.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Ws(xr.userMutationsIndex, i).next((function(r) {
                    return Nn.forEach(r, (function(r) {
                        d(r.userId === n.userId);
                        var i = Hn(e.serializer, r);
                        return mr(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var e = t.store(Rr.store), n = t.store(Pr.store);
        return t.store(Vr.store).get(Vr.key).next((function(t) {
            var r = [];
            return n.ei((function(n, i) {
                var o = new L(n), s = function(t) {
                    return [ 0, Rn(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? Nn.resolve() : function(n) {
                        return e.put(new Rr(0, Rn(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return Nn.Bn(r);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, e) {
        // Create the index.
        t.createObjectStore(Ur.store, {
            keyPath: Ur.keyPath
        });
        var n = e.store(Ur.store), r = new Fn, i = function(t) {
            if (r.add(t)) {
                var e = t.S(), i = t.p();
                return n.put({
                    collectionId: e,
                    parent: Rn(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Pr.store).ei({
            xi: !0
        }, (function(t, e) {
            var n = new L(t);
            return i(n.p());
        })).next((function() {
            return e.store(Dr.store).ei({
                xi: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], Cn(n));
                return i(r.p());
            }));
        }));
    }, t.prototype.rewriteCanonicalIds = function(t) {
        var e = this, n = t.store(Or.store);
        return n.ei((function(t, r) {
            var i = Yn(r), o = Jn(e.serializer, i);
            return n.put(o);
        }));
    }, t;
}(), Tr = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Nr = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/** Performs database creation and schema upgrades. */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Nr.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Nr.key = "owner";

var Ar = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Ar.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Ar.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var xr = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ xr.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
xr.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
xr.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
xr.userMutationsKeyPath = [ "userId", "batchId" ];

var Dr = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, Rn(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, Rn(e), n ];
    }, t;
}();

Dr.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
Dr.PLACEHOLDER = new Dr;

var Sr = function(t, e) {
    this.path = t, this.readTime = e;
}, kr = function(t, e) {
    this.path = t, this.version = e;
}, Pr = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Pr.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Pr.readTimeIndex = "readTimeIndex", Pr.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Pr.collectionReadTimeIndex = "collectionReadTimeIndex", Pr.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var Lr = 
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function(t) {
    this.byteSize = t;
};

Lr.store = "remoteDocumentGlobal", Lr.key = "remoteDocumentGlobalKey";

var Or = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Or.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Or.keyPath = "targetId", 
/** The name of the queryTargets index. */
Or.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Or.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Rr = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Rr.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Rr.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Rr.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Rr.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Vr = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Vr.key = "targetGlobalKey", Vr.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Ur = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ function Cr(t) {
    t.createObjectStore(Rr.store, {
        keyPath: Rr.keyPath
    }).createIndex(Rr.documentTargetsIndex, Rr.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Or.store, {
        keyPath: Or.keyPath
    }).createIndex(Or.queryTargetsIndexName, Or.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Vr.store);
}

Ur.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Ur.keyPath = [ "collectionId", "parent" ];

var Mr = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ Mr.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
Mr.keyPath = "clientId";

var Fr = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([ Ar.store, xr.store, Dr.store, Pr.store, Or.store, Nr.store, Vr.store, Rr.store ], [ Mr.store ]), [ Lr.store ]), [ Ur.store ]), qr = /** @class */ function() {
    function t(e) {
        this.db = e, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.ho(i.getUA()) && f("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */;
    }
    return t.Zi = function(e, n, r) {
        return h("SimpleDb", "Opening database:", e), new Nn((function(i, o) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            var s = indexedDB.open(e, n);
            s.onsuccess = function(e) {
                var n = e.target.result;
                i(new t(n));
            }, s.onblocked = function() {
                o(new D(x.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = function(t) {
                var e = t.target.error;
                "VersionError" === e.name ? o(new D(x.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e);
            }, s.onupgradeneeded = function(t) {
                h("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
                var n = t.target.result;
                r.createOrUpgrade(n, s.transaction, t.oldVersion, Ir).next((function() {
                    h("SimpleDb", "Database upgrade to version " + Ir + " complete");
                }));
            };
        })).On();
    }, 
    /** Deletes the specified database. */ t.delete = function(t) {
        return h("SimpleDb", "Removing database:", t), Wr(window.indexedDB.deleteDatabase(t)).On();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.Hi = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (t.ao()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = i.getUA(), n = t.ho(e), r = 0 < n && n < 10, o = t.uo(e), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.ao = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.co);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.js = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.ho = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.uo = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, t.prototype.ar = function(t) {
        this.db.onversionchange = function(e) {
            return t(e);
        };
    }, t.prototype.runTransaction = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return e.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === t, o = 0, s = function() {
                        var t, s, a, c, f;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                ++o, t = Gr.open(u.db, i ? "readonly" : "readwrite", n), e.label = 1;

                              case 1:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return e.trys.push([ 1, 3, , 4 ]), s = r(t).catch((function(e) {
                                    // Abort the transaction if there was an error.
                                    return t.abort(e), Nn.reject(e);
                                })).On(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , t.lo ];

                              case 2:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                e.sent(), s), a) ];

                              case 3:
                                return c = e.sent(), f = "FirebaseError" !== c.name && o < 3, h("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", c.message, f), 
                                f ? [ 3 /*break*/ , 4 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 4:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db.close();
    }, t;
}(), jr = /** @class */ function() {
    function t(t) {
        this._o = t, this.fo = !1, this.do = null;
    }
    return Object.defineProperty(t.prototype, "$n", {
        get: function() {
            return this.fo;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "wo", {
        get: function() {
            return this.do;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this._o = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.fo = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.ni = function(t) {
        this.do = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Wr(this._o.delete());
    }, t;
}(), zr = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, x.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", 
        n;
    }
    return e.__extends(n, t), n;
}(D);

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function Br(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ var Gr = /** @class */ function() {
    function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.To = new Ln, this.transaction.oncomplete = function() {
            e.To.resolve();
        }, this.transaction.onabort = function() {
            t.error ? e.To.reject(new zr(t.error)) : e.To.resolve();
        }, this.transaction.onerror = function(t) {
            var n = Kr(t.target.error);
            e.To.reject(new zr(n));
        };
    }
    return t.open = function(e, n, r) {
        return new t(e.transaction(r, n));
    }, Object.defineProperty(t.prototype, "lo", {
        get: function() {
            return this.To.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.To.reject(t), this.aborted || (h("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new Qr(e);
    }, t;
}(), Qr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (h("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (h("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Wr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return h("SimpleDb", "ADD", this.store.name, t, t), Wr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Wr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), h("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return h("SimpleDb", "DELETE", this.store.name, t), Wr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return h("SimpleDb", "COUNT", this.store.name), Wr(this.store.count());
    }, t.prototype.Ws = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.Eo(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.Io = function(t, e) {
        h("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.xi = !1;
        var r = this.cursor(n);
        return this.Eo(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.ei = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.Eo(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.Qr = function(t) {
        var e = this.cursor({});
        return new Nn((function(n, r) {
            e.onerror = function(t) {
                var e = Kr(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.Eo = function(t, e) {
        var n = [];
        return new Nn((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new jr(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof Nn) {
                        var u = s.catch((function(t) {
                            return o.done(), Nn.reject(t);
                        }));
                        n.push(u);
                    }
                    o.$n ? r() : null === o.wo ? i.continue() : i.continue(o.wo);
                } else r();
            };
        })).next((function() {
            return Nn.Bn(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.xi ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function Wr(t) {
    return new Nn((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = Kr(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var $r = !1;

function Kr(t) {
    var e = qr.ho(i.getUA());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new D("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return $r || ($r = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw r;
            }), 0)), r;
        }
    }
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
/** The Platform's 'window' implementation or null if not available. */ function Hr() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */
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
 */ var Yr = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.mo = t, this.vs = e, this.Ao = n, this.op = r, this.Ro = i, this.Po = new Ln, 
        this.then = this.Po.promise.then.bind(this.Po.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Po.promise.catch((function(t) {}))
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
    return t.Vo = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.yo = setTimeout((function() {
            return e.po();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Bs = function() {
        return this.po();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.yo && (this.clearTimeout(), this.Po.reject(new D(x.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.po = function() {
        var t = this;
        this.mo.cr((function() {
            return null !== t.yo ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Po.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.yo && (this.Ro(this), clearTimeout(this.yo), this.yo = null);
    }, t;
}(), Jr = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.bo = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.vo = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.So = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Do = [], 
        // visible for testing
        this.Co = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Fo = !1, 
        // List of TimerIds to fast-forward delays for.
        this.No = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.$o = new On(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ko = function() {
            return t.$o.Ls();
        };
        var e = Hr();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ko);
    }
    return Object.defineProperty(t.prototype, "xo", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.So;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.cr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Mo = function(t) {
        this.Oo(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Lo(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Bo = function(t) {
        return this.Oo(), this.Lo(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.qo = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Oo(), this.So ? [ 3 /*break*/ , 2 ] : (this.So = !0, (n = Hr()) && n.removeEventListener("visibilitychange", this.ko), 
                    [ 4 /*yield*/ , this.Bo(t) ]);

                  case 1:
                    e.sent(), e.label = 2;

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
        return this.Oo(), this.So ? new Promise((function(t) {})) : this.Lo(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype._r = function(t) {
        var e = this;
        this.vo.push(t), this.cr((function() {
            return e.Uo();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Uo = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (0 === this.vo.length) return [ 3 /*break*/ , 5 ];
                    e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.vo[0]() ];

                  case 2:
                    return e.sent(), this.vo.shift(), this.$o.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!Br(t = e.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return h("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.vo.length > 0 && 
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
                    this.$o.xs((function() {
                        return n.Uo();
                    })), e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Lo = function(t) {
        var e = this, n = this.bo.then((function() {
            return e.Fo = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Co = t, e.Fo = !1, f("INTERNAL UNHANDLED ERROR: ", 
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
                return e.Fo = !1, t;
            }));
        }));
        return this.bo = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.Os = function(t, e, n) {
        var r = this;
        this.Oo(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.No.indexOf(t) > -1 && (e = 0);
        var i = Yr.Vo(this, t, e, n, (function(t) {
            return r.Qo(t);
        }));
        return this.Do.push(i), i;
    }, t.prototype.Oo = function() {
        this.Co && p();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.Wo = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.jo = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.bo ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.bo) return [ 3 /*break*/ , 0 ];
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
    t.prototype.Ko = function(t) {
        for (var e = 0, n = this.Do; e < n.length; e++) {
            if (n[e].vs === t) return !0;
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
    t.prototype.Go = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.jo().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Do.sort((function(t, e) {
                return t.Ao - e.Ao;
            }));
            for (var n = 0, r = e.Do; n < r.length; n++) {
                var i = r[n];
                if (i.Bs(), "all" /* All */ !== t && i.vs === t) break;
            }
            return e.jo();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.zo = function(t) {
        this.No.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Qo = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Do.indexOf(t);
        this.Do.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Xr(t, e) {
    if (f("AsyncQueue", e + ": " + t), Br(t)) return new D(x.UNAVAILABLE, e + ": " + t);
    throw t;
}

function Zr(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = m(n, i);
    return 0 === s ? m(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var ti = /** @class */ function() {
    function t(t) {
        this.Ho = t, this.buffer = new tt(Zr), this.Yo = 0;
    }
    return t.prototype.Jo = function() {
        return ++this.Yo;
    }, t.prototype.Xo = function(t) {
        var e = [ t, this.Jo() ];
        if (this.buffer.size < this.Ho) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            Zr(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), ei = {
    Zo: !1,
    th: 0,
    eh: 0,
    nh: 0
}, ni = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.sh = t, this.ih = e, this.rh = n;
    }
    return t.oh = function(e) {
        return new t(e, t.hh, t.ah);
    }, t;
}();

ni.uh = -1, ni.lh = 1048576, ni._h = 41943040, ni.hh = 10, ni.ah = 1e3, ni.fh = new ni(ni._h, ni.hh, ni.ah), 
ni.dh = new ni(ni.uh, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
var ri = /** @class */ function() {
    function t(t, e) {
        this.xr = t, this.mo = e, this.wh = !1, this.Th = null;
    }
    return t.prototype.start = function(t) {
        this.xr.params.sh !== ni.uh && this.Eh(t);
    }, t.prototype.stop = function() {
        this.Th && (this.Th.cancel(), this.Th = null);
    }, Object.defineProperty(t.prototype, "or", {
        get: function() {
            return null !== this.Th;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Eh = function(t) {
        var n = this, r = this.wh ? 3e5 : 6e4;
        h("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.Th = this.mo.Os("lru_garbage_collection" /* LruGarbageCollection */ , r, (function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                var n;
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        this.Th = null, this.wh = !0, e.label = 1;

                      case 1:
                        return e.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , t.Ih(this.xr) ];

                      case 2:
                        return e.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return Br(n = e.sent()) ? (h("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , ai(n) ];

                      case 5:
                        e.sent(), e.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.Eh(t) ];

                      case 8:
                        return e.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t;
}(), ii = /** @class */ function() {
    function t(t, e) {
        this.mh = t, this.params = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */;
    }
    return t.prototype.Ah = function(t, e) {
        return this.mh.Mr(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */ t.prototype.Rh = function(t, e) {
        var n = this;
        if (0 === e) return Nn.resolve(Pn.ps);
        var r = new ti(e);
        return this.mh.pe(t, (function(t) {
            return r.Xo(t.sequenceNumber);
        })).next((function() {
            return n.mh.Lr(t, (function(t) {
                return r.Xo(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.vi = function(t, e, n) {
        return this.mh.vi(t, e, n);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.Wr = function(t, e) {
        return this.mh.Wr(t, e);
    }, t.prototype.Ph = function(t, e) {
        var n = this;
        return this.params.sh === ni.uh ? (h("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Nn.resolve(ei)) : this.Kr(t).next((function(r) {
            return r < n.params.sh ? (h("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.sh), 
            ei) : n.Vh(t, e);
        }));
    }, t.prototype.Kr = function(t) {
        return this.mh.Kr(t);
    }, t.prototype.Vh = function(t, e) {
        var n, i, o, s, u, a, f, l = this, p = Date.now();
        return this.Ah(t, this.params.ih).next((function(e) {
            // Cap at the configured max
            return e > l.params.rh ? (h("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.rh + " from " + e), 
            i = l.params.rh) : i = e, s = Date.now(), l.Rh(t, i);
        })).next((function(r) {
            return n = r, u = Date.now(), l.vi(t, n, e);
        })).next((function(e) {
            return o = e, a = Date.now(), l.Wr(t, n);
        })).next((function(t) {
            return f = Date.now(), c() <= r.LogLevel.DEBUG && h("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (f - a) + "ms\nTotal Duration: " + (f - p) + "ms"), 
            Nn.resolve({
                Zo: !0,
                th: i,
                eh: o,
                nh: t
            });
        }));
    }, t;
}(), oi = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.gh = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.yh = new J(m), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.ph = new A((function(t) {
            return j(t);
        }), z), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.bh = k.min(), this.ns = t.Dr(n), this.vh = t.Nr(), this.Ji = t.Fr(), this.Sh = new Sn(this.vh, this.ns, this.persistence.$r()), 
        this.gh.Dh(this.Sh);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Ch = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = this.ns, r = this.Sh, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.ns.eo(e).next((function(s) {
                            return i = s, n = o.persistence.Dr(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new Sn(o.vh, n, o.persistence.$r()), n.eo(e);
                        })).next((function(t) {
                            for (var n = [], o = [], s = ct(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var c = a[u];
                                n.push(c.batchId);
                                for (var h = 0, f = c.mutations; h < f.length; h++) {
                                    var l = f[h];
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
                                                        return r.us(e, s).next((function(t) {
                                return {
                                    Fh: t,
                                    Nh: n,
                                    $h: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = e.sent(), [ 2 /*return*/ , (this.ns = n, this.Sh = r, this.gh.Dh(this.Sh), 
                    i) ];
                }
            }));
        }));
    }, t.prototype.kh = function(t) {
        var e, n = this, r = S.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), ct());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.Sh.us(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var c = a[u], h = Fe(c, e.get(c.key));
                    null != h && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new Be(c.key, h, Xe(h.proto.mapValue), Re.exists(!0)));
                }
                return n.ns.Yr(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.Sn(e);
            return {
                batchId: t.batchId,
                Un: n
            };
        }));
    }, t.prototype.xh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.vh.oi({
                ai: !0
            });
            return e.Mh(n, t, i).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.ns.ro(n);
            })).next((function() {
                return e.Sh.us(n, r);
            }));
        }));
    }, t.prototype.Oh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.ns.Jr(n, t).next((function(t) {
                return d(null !== t), r = t.keys(), e.ns.so(n, t);
            })).next((function() {
                return e.ns.ro(n);
            })).next((function() {
                return e.Sh.us(n, r);
            }));
        }));
    }, t.prototype.to = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.ns.to(e);
        }));
    }, t.prototype.mi = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.Ji.mi(e);
        }));
    }, t.prototype.Lh = function(e) {
        var n = this, r = e.X, i = this.yh;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.vh.oi({
                ai: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.yh;
            var u = [];
            e.Qt.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.Ji.Ni(o, e.Xt, s).next((function() {
                        return n.Ji.Ci(o, e.Yt, s);
                    })));
                    var c = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (c.H() > 0) {
                        var h = a.tt(c, r).Z(o.Li);
                        i = i.nt(s, h), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.Bh(a, h, e) && u.push(n.Ji.yi(o, h));
                    }
                }
            }));
            var a = rt(), c = ct();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.jt.forEach((function(t, e) {
                c = c.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, c).next((function(t) {
                e.jt.forEach((function(i, c) {
                    var f = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        c instanceof en && c.version.isEqual(k.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Gn(i, r), a = a.nt(i, c)) : null == f || c.version.o(f.version) > 0 || 0 === c.version.o(f.version) && f.hasPendingWrites ? (s.jn(c, r), 
                    a = a.nt(i, c)) : h("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", f.version, " Watch version:", c.version), 
                    e.Kt.has(i) && u.push(n.persistence.wi.jr(o, i));
                }));
            }))), !r.isEqual(k.min())) {
                var f = n.Ji.mi(o).next((function(t) {
                    return n.Ji.Ri(o, o.Li, r);
                }));
                u.push(f);
            }
            return Nn.Bn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.Sh.cs(o, a);
            }));
        })).then((function(t) {
            return n.yh = i, t;
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
    t.Bh = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return d(e.resumeToken.H() > 0), 0 === t.resumeToken.H() || (e.X.m() - t.X.m() >= this.qh || n.Yt.size + n.Jt.size + n.Xt.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, t.prototype.Uh = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, c, f = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return e.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(e) {
                        return Nn.forEach(t, (function(t) {
                            return Nn.forEach(t.ms, (function(n) {
                                return f.persistence.wi.Fi(e, t.targetId, n);
                            })).next((function() {
                                return Nn.forEach(t.As, (function(n) {
                                    return f.persistence.wi.$i(e, t.targetId, n);
                                }));
                            }));
                        }));
                    })) ];

                  case 1:
                    return e.sent(), [ 3 /*break*/ , 3 ];

                  case 2:
                    if (!Br(n = e.sent())) throw n;
                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.
                                        return h("LocalStore", "Failed to update sequence numbers: " + n), 
                    [ 3 /*break*/ , 3 ];

                  case 3:
                    for (r = 0, i = t; r < i.length; r++) o = i[r], s = o.targetId, o.fromCache || (u = this.yh.get(s), 
                    a = u.X, c = u.et(a), 
                    // Advance the last limbo free snapshot version
                    this.yh = this.yh.nt(s, c));
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Qh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.ns.Zr(n, t);
        }));
    }, t.prototype.Wh = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.Sh.rs(n, t);
        }));
    }, t.prototype.jh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.Ji.Di(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Nn.resolve(r)) : e.Ji.Ti(n).next((function(i) {
                    return r = new $(t, i, 0 /* Listen */ , n.Li), e.Ji.Pi(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            // If Multi-Tab is enabled, the existing target data may be newer than
            // the in-memory data
            var r = e.yh.get(n.targetId);
            return (null === r || n.X.o(r.X) > 0) && (e.yh = e.yh.nt(n.targetId, n), e.ph.set(t, n.targetId)), 
            n;
        }));
    }, t.prototype.Di = function(t, e) {
        var n = this.ph.get(e);
        return void 0 !== n ? Nn.resolve(this.yh.get(n)) : this.Ji.Di(t, e);
    }, t.prototype.Kh = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    r = this.yh.get(t), i = n ? "readwrite" : "readwrite-primary", e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 5 ]), n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.persistence.runTransaction("Release target", i, (function(t) {
                        return s.persistence.wi.removeTarget(t, r);
                    })) ];

                  case 2:
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 5 ];

                  case 4:
                    if (!Br(o = e.sent())) throw o;
                    // All `releaseTarget` does is record the final metadata state for the
                    // target, but we've been recording this periodically during target
                    // activity. If we lose this write this could cause a very slight
                    // difference in the order of target deletion during GC, but we
                    // don't define exact LRU semantics so this is acceptable.
                                        return h("LocalStore", "Failed to update sequence numbers for target " + t + ": " + o), 
                    [ 3 /*break*/ , 5 ];

                  case 5:
                    return this.yh = this.yh.remove(t), this.ph.delete(r.target), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Gh = function(t, e) {
        var n = this, r = k.min(), i = ct();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.Di(o, t.We()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.Ji.ki(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.gh._s(o, t, e ? r : k.min(), e ? i : ct());
            })).next((function(t) {
                return {
                    documents: t,
                    zh: i
                };
            }));
        }));
    }, t.prototype.Mh = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Nn.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.zn(t, r);
            })).next((function(t) {
                var o = t, s = e.Cn.get(r);
                d(null !== s), (!o || o.version.o(s) < 0) && ((o = i.pn(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.jn(o, e.Dn));
            }));
        })), s.next((function() {
            return r.ns.so(t, i);
        }));
    }, t.prototype.Ih = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.Ph(n, e.yh);
        }));
    }, t;
}();

/** Implements the steps for LRU garbage collection. */
/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
function si(
/** Manages our in-memory or durable persistence. */
t, e, n) {
    return new oi(t, e, n);
}

/**
 * An implementation of LocalStore that provides additional functionality
 * for MultiTabSyncEngine.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
// PORTING NOTE: Web only.
oi.qh = 3e8;

var ui = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).persistence = e, i.ns = e.Dr(r), i.vh = e.Nr(), 
        i.Ji = e.Fr(), i;
    }
    /** Starts the LocalStore. */    return e.__extends(n, t), n.prototype.start = function() {
        return this.Hh();
    }, n.prototype.Yh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", (function(n) {
            return e.ns.Xr(n, t).next((function(t) {
                return t ? e.Sh.us(n, t) : Nn.resolve(null);
            }));
        }));
    }, n.prototype.Jh = function(t) {
        this.ns.io(t);
    }, n.prototype.ur = function(t) {
        this.persistence.ur(t);
    }, n.prototype.Sr = function() {
        return this.persistence.Sr();
    }, n.prototype.Xh = function(t) {
        var e = this, n = this.yh.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", (function(n) {
            return e.Ji.Me(n, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, n.prototype.si = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
            return t.vh.si(e, t.bh);
        })).then((function(e) {
            var n = e.ii, r = e.readTime;
            return t.bh = r, n;
        }));
    }, n.prototype.Hh = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                        return n.vh.ri(t);
                    })) ];

                  case 1:
                    return t.bh = e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n;
}(oi);

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function ai(t) {
    return e.__awaiter(this, void 0, void 0, (function() {
        return e.__generator(this, (function(e) {
            if (t.code !== x.FAILED_PRECONDITION || t.message !== xn) throw t;
            return h("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
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
 */ var ci = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Zh = new tt(hi.ta), 
        // A set of outstanding references to a document sorted by target id.
        this.ea = new tt(hi.na)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype._ = function() {
        return this.Zh._();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Fi = function(t, e) {
        var n = new hi(t, e);
        this.Zh = this.Zh.add(n), this.ea = this.ea.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.sa = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Fi(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.$i = function(t, e) {
        this.ia(new hi(t, e));
    }, t.prototype.ra = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.$i(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.oa = function(t) {
        var e = this, n = new V(new L([])), r = new hi(n, t), i = new hi(n, t + 1), o = [];
        return this.ea.vt([ r, i ], (function(t) {
            e.ia(t), o.push(t.key);
        })), o;
    }, t.prototype.ha = function() {
        var t = this;
        this.Zh.forEach((function(e) {
            return t.ia(e);
        }));
    }, t.prototype.ia = function(t) {
        this.Zh = this.Zh.delete(t), this.ea = this.ea.delete(t);
    }, t.prototype.aa = function(t) {
        var e = new V(new L([])), n = new hi(e, t), r = new hi(e, t + 1), i = ct();
        return this.ea.vt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Mi = function(t) {
        var e = new hi(t, 0), n = this.Zh.Dt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), hi = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.ua = e
        /** Compare by key then by ID */;
    }
    return t.ta = function(t, e) {
        return V.P(t.key, e.key) || m(t.ua, e.ua);
    }, 
    /** Compare by ID then by key */ t.na = function(t, e) {
        return m(t.ua, e.ua) || V.P(t.key, e.key);
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
function fi(t, e) {
    if (0 !== e.length) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Si(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function li(t, e, n) {
    if (e.length !== n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires " + Si(n, "argument") + ", but was called with " + Si(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function pi(t, e, n) {
    if (e.length < n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Si(n, "argument") + ", but was called with " + Si(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function di(t, e, n, r) {
    if (e.length < n || e.length > r) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Si(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function yi(t, e, n, r) {
    bi(t, e, Di(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function vi(t, e, n, r) {
    void 0 !== r && yi(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function gi(t, e, n, r) {
    bi(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function mi(t, e, n, r) {
    void 0 !== r && gi(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function wi(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(Ei(a));
        }
        var c = Ei(r);
        throw new D(x.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
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
 */ function _i(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new D(x.INVALID_ARGUMENT, "Invalid value " + Ei(r) + " provided to function " + t + "() for its " + Di(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function bi(t, e, n, r) {
    if (!("object" === e ? Ii(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = Ei(r);
        throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function Ii(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function Ei(t) {
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
    return "function" == typeof t ? "a function" : p();
}

function Ti(t, e, n) {
    if (void 0 === n) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Di(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function Ni(t, e, n) {
    T(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new D(x.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function Ai(t, e, n, r) {
    var i = Ei(r);
    return new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + Di(n) + " argument to be a " + e + ", but it was: " + i);
}

function xi(t, e, n) {
    if (n <= 0) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + Di(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function Di(t) {
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
 */ function Si(t, e) {
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
/** Helper function to assert Uint8Array is available at runtime. */ function ki() {
    if ("undefined" == typeof Uint8Array) throw new D(x.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Pi() {
    if ("undefined" == typeof atob) throw new D(x.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var Li = /** @class */ function() {
    function t(t) {
        Pi(), this.ca = t;
    }
    return t.fromBase64String = function(e) {
        li("Blob.fromBase64String", arguments, 1), yi("Blob.fromBase64String", "string", 1, e), 
        Pi();
        try {
            return new t(G.fromBase64String(e));
        } catch (e) {
            throw new D(x.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (li("Blob.fromUint8Array", arguments, 1), ki(), !(e instanceof Uint8Array)) throw Ai("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(G.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return li("Blob.toBase64", arguments, 0), Pi(), this.ca.toBase64();
    }, t.prototype.toUint8Array = function() {
        return li("Blob.toUint8Array", arguments, 0), ki(), this.ca.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.ca.isEqual(t.ca);
    }, t;
}(), Oi = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new D(x.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + Si(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (yi("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new D(x.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.la = new R(t);
}, Ri = /** @class */ function(t) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return t.call(this, e) || this;
    }
    return e.__extends(n, t), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(R.L().N());
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw Ai("isEqual", "FieldPath", 1, t);
        return this.la.isEqual(t.la);
    }, n;
}(Oi), Vi = new RegExp("[~\\*/\\[\\]]"), Ui = function() {
    /** A pointer to the implementing class. */
    this._a = this;
}, Ci = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).fa = e, n;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        if (2 /* MergeSet */ !== t.wa) throw 1 /* Update */ === t.wa ? t.Ta(this.fa + "() can only appear at the top level of your update data") : t.Ta(this.fa + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Le.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ui);

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
function Mi(t, e, n) {
    return new Xi({
        wa: 3 /* Argument */ ,
        Ea: e.settings.Ea,
        methodName: t.fa,
        Ia: n
    }, e.s, e.serializer, e.ignoreUndefinedProperties);
}

var Fi = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).fa = e, n;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        return new Le(t.path, new Ee);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ui), qi = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).fa = e, r.ma = n, r;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        var e = Mi(this, t, 
        /*array=*/ !0), n = this.ma.map((function(t) {
            return io(t, e);
        })), r = new Te(n);
        return new Le(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ui), ji = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).fa = e, r.ma = n, r;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        var e = Mi(this, t, 
        /*array=*/ !0), n = this.ma.map((function(t) {
            return io(t, e);
        })), r = new Ae(n);
        return new Le(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ui), zi = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).fa = e, r.Aa = n, r;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        var e = new De(t.serializer, $t(t.serializer, this.Aa));
        return new Le(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ui), Bi = /** @class */ function(t) {
    function n() {
        return t.call(this) || this;
    }
    return e.__extends(n, t), n.delete = function() {
        return fi("FieldValue.delete", arguments), new Gi(new Ci("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return fi("FieldValue.serverTimestamp", arguments), new Gi(new Fi("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return pi("FieldValue.arrayUnion", arguments, 1), new Gi(new qi("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return pi("FieldValue.arrayRemove", arguments, 1), new Gi(new ji("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return yi("FieldValue.increment", "number", 1, t), li("FieldValue.increment", arguments, 1), 
        new Gi(new zi("FieldValue.increment", t));
    }, n;
}(Ui), Gi = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this)._a = e, n.fa = e.fa, n;
    }
    return e.__extends(n, t), n.prototype.da = function(t) {
        return this._a.da(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this._a.isEqual(t._a);
    }, n;
}(Bi), Qi = /** @class */ function() {
    function t(t, e) {
        if (li("GeoPoint", arguments, 2), yi("GeoPoint", "number", 1, t), yi("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new D(x.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new D(x.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Ra = t, this.Pa = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.Ra;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.Pa;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.Ra === t.Ra && this.Pa === t.Pa;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.T = function(t) {
        return m(this.Ra, t.Ra) || m(this.Pa, t.Pa);
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
function Wi(t) {
    return new Gt(t, /* useProto3Json= */ !0);
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
 */ var $i = /^__.*__$/, Ki = function(t, e, n) {
    this.Va = t, this.ga = e, this.ya = n;
}, Hi = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
    }
    return t.prototype.pa = function(t, e) {
        var n = [];
        return null !== this.Le ? n.push(new Be(t, this.data, this.Le, e)) : n.push(new ze(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new Qe(t, this.fieldTransforms)), n;
    }, t;
}(), Yi = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Le = e, this.fieldTransforms = n;
    }
    return t.prototype.pa = function(t, e) {
        var n = [ new Be(t, this.data, this.Le, e) ];
        return this.fieldTransforms.length > 0 && n.push(new Qe(t, this.fieldTransforms)), 
        n;
    }, t;
}();

/**
 * A reference to a document in a Firebase project.
 *
 * This class serves as a common base class for the public DocumentReferences
 * exposed in the lite, full and legacy SDK.
 */ function Ji(t) {
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
        throw p();
    }
}

/** A "context" object passed around while parsing user data. */ var Xi = /** @class */ function() {
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
        void 0 === i && this.ba(), this.fieldTransforms = i || [], this.Le = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "wa", {
        get: function() {
            return this.settings.wa;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.va = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Le);
    }, t.prototype.Sa = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.va({
            path: n,
            Ia: !1
        });
        return r.Da(t), r;
    }, t.prototype.Ca = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.va({
            path: n,
            Ia: !1
        });
        return r.ba(), r;
    }, t.prototype.Fa = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.va({
            path: void 0,
            Ia: !0
        });
    }, t.prototype.Ta = function(t) {
        return ho(t, this.settings.methodName, this.settings.Na || !1, this.path, this.settings.Ea);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Le.find((function(e) {
            return t.D(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.D(e.field);
        }));
    }, t.prototype.ba = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.Da(this.path.get(t));
    }, t.prototype.Da = function(t) {
        if (0 === t.length) throw this.Ta("Document fields must not be empty");
        if (Ji(this.wa) && $i.test(t)) throw this.Ta('Document fields cannot begin and end with "__"');
    }, t;
}(), Zi = /** @class */ function() {
    function t(t, e, n) {
        this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || Wi(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.$a = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Xi({
            wa: t,
            methodName: e,
            Ea: n,
            path: R.k(),
            Ia: !1,
            Na: r
        }, this.s, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function to(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.$a(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    uo("Data must be an object, but it was:", s, r);
    var u, a, c = oo(r, s);
    if (o.merge) u = new Pe(s.Le), a = s.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var d = l[f], y = void 0;
            if (d instanceof Oi) y = d.la; else {
                if ("string" != typeof d) throw p();
                y = co(e, d, n);
            }
            if (!s.contains(y)) throw new D(x.INVALID_ARGUMENT, "Field '" + y + "' is specified in your field mask but missing from your input data.");
            fo(h, y) || h.push(y);
        }
        u = new Pe(h), a = s.fieldTransforms.filter((function(t) {
            return u.Ke(t.field);
        }));
    } else u = null, a = s.fieldTransforms;
    return new Hi(new Ye(c), u, a);
}

/** Parse update data from an update() call. */ function eo(t, e, n, r) {
    var i = t.$a(1 /* Update */ , e, n);
    uo("Data must be an object, but it was:", i, r);
    var o = [], s = new Je;
    T(r, (function(t, r) {
        var u = co(e, t, n), a = i.Ca(u);
        if (r instanceof Ui && r._a instanceof Ci) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(u); else {
            var c = io(r, a);
            null != c && (o.push(u), s.set(u, c));
        }
    }));
    var u = new Pe(o);
    return new Yi(s.ze(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function no(t, e, n, r, i, o) {
    var s = t.$a(1 /* Update */ , e, n), u = [ ao(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new D(x.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) u.push(ao(e, o[c])), a.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var h = [], f = new Je, l = u.length - 1; l >= 0; --l) if (!fo(h, u[l])) {
        var p = u[l], d = a[l], y = s.Ca(p);
        if (d instanceof Ui && d._a instanceof Ci) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(p); else {
            var v = io(d, y);
            null != v && (h.push(p), f.set(p, v));
        }
    }
    var g = new Pe(h);
    return new Yi(f.ze(), g, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ro(t, e, n, r) {
    return void 0 === r && (r = !1), io(n, t.$a(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function io(t, e) {
    if (so(t)) return uo("Unsupported field value:", e, t), oo(t, e);
    if (t instanceof Ui) 
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
        if (!Ji(e.wa)) throw e.Ta(t.fa + "() can only be used with update() and set()");
        if (!e.path) throw e.Ta(t.fa + "() is not currently supported inside arrays");
        var n = t.da(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Le.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Ia && 4 /* ArrayArgument */ !== e.wa) throw e.Ta("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = io(o[i], e.Fa(r));
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
        if ("number" == typeof t) return $t(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = S.fromDate(t);
            return {
                timestampValue: Kt(e.serializer, n)
            };
        }
        if (t instanceof S) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new S(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: Kt(e.serializer, r)
            };
        }
        if (t instanceof Qi) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Li) return {
            bytesValue: Ht(e.serializer, t)
        };
        if (t instanceof Ki) {
            var i = e.s, o = t.Va;
            if (!o.isEqual(i)) throw e.Ta("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: Xt(t.Va || e.s, t.ga.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.Ta("Unsupported field value: " + Ei(t));
    }(t, e);
}

function oo(t, e) {
    var n = {};
    return N(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Le.push(e.path) : T(t, (function(t, r) {
        var i = io(r, e.Sa(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function so(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof S || t instanceof Qi || t instanceof Li || t instanceof Ki || t instanceof Ui);
}

function uo(t, e, n) {
    if (!so(n) || !Ii(n)) {
        var r = Ei(n);
        throw "an object" === r ? e.Ta(t + " a custom object") : e.Ta(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function ao(t, e, n) {
    if (e instanceof Oi) return e.la;
    if ("string" == typeof e) return co(t, e);
    throw ho("Field path arguments must be of type string or FieldPath.", t, 
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
 */ function co(t, n, r) {
    try {
        return function(t) {
            if (t.search(Vi) >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (Ri.bind.apply(Ri, e.__spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new D(x.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).la;
    } catch (n) {
        throw ho((i = n) instanceof Error ? i.message : i.toString(), t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, r);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function ho(t, e, n, r, i) {
    var o = r && !r._(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var a = "";
    return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), 
    a += ")"), new D(x.INVALID_ARGUMENT, (u += ". ") + t + a);
}

function fo(t, e) {
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
 */ var lo = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.zr = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.ka = function() {
        return this.zr() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** A user with a null UID. */ lo.UNAUTHENTICATED = new lo(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
lo.xa = new lo("google-credentials-uid"), lo.Ma = new lo("first-party-uid");

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
var po = function(t, e) {
    this.user = e, this.type = "OAuth", this.Oa = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.Oa.Authorization = "Bearer " + t;
}, yo = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.La = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.Ba = function() {}, t.prototype.qa = function(t) {
        this.La = t, 
        // Fire with initial user.
        t(lo.UNAUTHENTICATED);
    }, t.prototype.Ua = function() {
        this.La = null;
    }, t;
}(), vo = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.Qa = null, 
        /** Tracks the current User. */
        this.currentUser = lo.UNAUTHENTICATED, this.Wa = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.ja = 0, 
        /** The listener registered with setChangeListener(). */
        this.La = null, this.forceRefresh = !1, this.Qa = function() {
            e.ja++, e.currentUser = e.Ka(), e.Wa = !0, e.La && e.La(e.currentUser);
        }, this.ja = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Qa) : (
        // if auth is not available, invoke tokenListener once with null token
        this.Qa(null), t.get().then((function(t) {
            e.auth = t, e.Qa && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.Qa);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.ja, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.ja !== e ? (h("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (d("string" == typeof n.accessToken), new po(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.Ba = function() {
        this.forceRefresh = !0;
    }, t.prototype.qa = function(t) {
        this.La = t, 
        // Fire the initial event
        this.Wa && t(this.currentUser);
    }, t.prototype.Ua = function() {
        this.auth && this.auth.removeAuthTokenListener(this.Qa), this.Qa = null, this.La = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.Ka = function() {
        var t = this.auth && this.auth.getUid();
        return d(null === t || "string" == typeof t), new lo(t);
    }, t;
}(), go = /** @class */ function() {
    function t(t, e) {
        this.Ga = t, this.za = e, this.type = "FirstParty", this.user = lo.Ma;
    }
    return Object.defineProperty(t.prototype, "Oa", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.za
            }, e = this.Ga.auth.Ha([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), mo = /** @class */ function() {
    function t(t, e) {
        this.Ga = t, this.za = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new go(this.Ga, this.za));
    }, t.prototype.qa = function(t) {
        // Fire with initial uid.
        t(lo.Ma);
    }, t.prototype.Ua = function() {}, t.prototype.Ba = function() {}, t;
}(), wo = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.bs = t, this.Ya = n, this.Ja = r, this.Xa = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Za = 0, this.tu = null, this.stream = null, this.$o = new On(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.eu = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.nu = function() {
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
        3 /* Error */ !== this.state ? this.auth() : this.su();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.eu() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

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
    t.prototype.iu = function() {
        this.state = 0 /* Initial */ , this.$o.reset();
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
    t.prototype.ru = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.nu() && null === this.tu && (this.tu = this.bs.Os(this.Ya, 6e4, (function() {
            return t.ou();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.hu = function(t) {
        this.au(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.ou = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.nu() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.au = function() {
        this.tu && (this.tu.cancel(), this.tu = null);
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
    t.prototype.close = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.au(), this.$o.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Za++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.$o.reset() : n && n.code === x.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    f(n.toString()), f("Using maximum backoff delay to prevent overloading the backend."), 
                    this.$o.ks()) : n && n.code === x.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Xa.Ba(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.uu(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.cu(n) ];

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
    t.prototype.uu = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.lu(this.Za), n = this.Za;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Xa.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Za === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t._u(e);
        }), (function(n) {
            e((function() {
                var e = new D(x.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.fu(e);
            }));
        }));
    }, t.prototype._u = function(t) {
        var e = this, n = this.lu(this.Za);
        this.stream = this.du(t), this.stream.wu((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.wu();
            }));
        })), this.stream.cu((function(t) {
            n((function() {
                return e.fu(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.su = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.$o.xs((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.fu = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return h("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.lu = function(t) {
        var e = this;
        return function(n) {
            e.bs.cr((function() {
                return e.Za === t ? n() : (h("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), _o = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return e.__extends(n, t), n.prototype.du = function(t) {
        return this.Ja.Tu("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.$o.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : p();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Oe ? (d(void 0 === e || "string" == typeof e), G.fromBase64String(e || "")) : (d(void 0 === e || e instanceof Uint8Array), 
                    G.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function(t) {
                    var e = void 0 === t.code ? x.UNKNOWN : Y(t.code);
                    return new D(e, t.message || "");
                }(s);
                n = new wt(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var a = e.documentChange;
                a.document, a.document.name, a.document.updateTime;
                var c = ee(t, a.document.name), h = Jt(a.document.updateTime), f = new Ye({
                    mapValue: {
                        fields: a.document.fields
                    }
                }), l = new tn(c, h, f, {}), y = a.targetIds || [], v = a.removedTargetIds || [];
                n = new gt(y, v, l.key, l);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var g = e.documentDelete;
                g.document;
                var m = ee(t, g.document), w = g.readTime ? Jt(g.readTime) : k.min(), _ = new en(m, w), b = g.removedTargetIds || [];
                n = new gt([], b, _.key, _);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var I = e.documentRemove;
                I.document;
                var E = ee(t, I.document), T = I.removedTargetIds || [];
                n = new gt([], T, E, null);
            } else {
                if (!("filter" in e)) return p();
                e.filter;
                var N = e.filter;
                N.targetId;
                var A = N.count || 0, S = new K(A), P = N.targetId;
                n = new mt(P, S);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return k.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? k.min() : e.readTime ? Jt(e.readTime) : k.min();
        }(t);
        return this.listener.Eu(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.Iu = function(t) {
        var e = {};
        e.database = ie(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = B(r) ? {
                documents: ce(t, r)
            } : {
                query: he(t, r)
            }).targetId = e.targetId, e.resumeToken.H() > 0 && (n.resumeToken = Ht(t, e.resumeToken)), 
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
                    return p();
                }
            }(0, e.J);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.hu(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.mu = function(t) {
        var e = {};
        e.database = ie(this.serializer), e.removeTarget = t, this.hu(e);
    }, n;
}(wo), bo = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.Au = !1, s;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "Ru", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Au;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Au = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
    }, n.prototype.uu = function() {
        this.Au && this.Pu([]);
    }, n.prototype.du = function(t) {
        return this.Ja.Tu("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        d(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Au) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.$o.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (d(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? Jt(t.updateTime) : Jt(e);
                        n.isEqual(k.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = Jt(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new Oe(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = Jt(t.commitTime);
            return this.listener.Vu(n, e);
        }
        // The first response is always the handshake response
                return d(!t.writeResults || 0 === t.writeResults.length), this.Au = !0, 
        this.listener.gu();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.yu = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = ie(this.serializer), this.hu(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Pu = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return ue(e.serializer, t);
            }))
        };
        this.hu(n);
    }, n;
}(wo), Io = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Ja = e, i.credentials = n, i.serializer = r, i.pu = !1, 
        i;
    }
    return e.__extends(n, t), n.prototype.bu = function() {
        if (this.pu) throw new D(x.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.vu = function(t, e) {
        var n = this;
        return this.bu(), this.credentials.getToken().then((function(r) {
            return n.Ja.vu(t, e, r);
        })).catch((function(t) {
            throw t.code === x.UNAUTHENTICATED && n.credentials.Ba(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.Su = function(t, e) {
        var n = this;
        return this.bu(), this.credentials.getToken().then((function(r) {
            return n.Ja.Su(t, e, r);
        })).catch((function(t) {
            throw t.code === x.UNAUTHENTICATED && n.credentials.Ba(), t;
        }));
    }, n;
}((function() {
    // Make sure that the structural type of `Datastore` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.je = void 0;
})), Eo = /** @class */ function() {
    function t(t) {
        this.Du = t, 
        // The version of each document that was read during this transaction.
        this.Cu = new Map, this.mutations = [], this.Fu = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Nu = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.$u = new Set;
    }
    return t.prototype.ku = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.xu(), this.mutations.length > 0) throw new D(x.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, n) {
                        return e.__awaiter(this, void 0, void 0, (function() {
                            var r, i, o, s, u;
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return r = y(t), i = {
                                        database: ie(r.serializer),
                                        documents: n.map((function(t) {
                                            return te(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.Su("BatchGetDocuments", i) ];

                                  case 1:
                                    return o = e.sent(), s = new Map, o.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                d(!!e.found), e.found.name, e.found.updateTime;
                                                var n = ee(t, e.found.name), r = Jt(e.found.updateTime), i = new Ye({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new tn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                d(!!e.missing), d(!!e.readTime);
                                                var n = ee(t, e.missing), r = Jt(e.readTime);
                                                return new en(n, r);
                                            }(t, e) : p();
                                        }(r.serializer, t);
                                        s.set(e.key.toString(), e);
                                    })), u = [], [ 2 /*return*/ , (n.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        d(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.Du, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((n = i.sent()).forEach((function(t) {
                        t instanceof en || t instanceof tn ? r.Mu(t) : p();
                    })), n) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.pa(t, this.Ue(t))), this.$u.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.pa(t, this.Ou(t)));
        } catch (t) {
            this.Nu = t;
        }
        this.$u.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new Ke(t, this.Ue(t)) ]), this.$u.add(t);
    }, t.prototype.commit = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.xu(), this.Nu) throw this.Nu;
                    return t = this.Cu, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        var r = new V(L.$(e));
                        n.mutations.push(new He(r, n.Ue(r)));
                    })), [ 4 /*yield*/ , function(t, n) {
                        return e.__awaiter(this, void 0, void 0, (function() {
                            var r, i;
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return r = y(t), i = {
                                        database: ie(r.serializer),
                                        writes: n.map((function(t) {
                                            return ue(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.vu("Commit", i) ];

                                  case 1:
                                    return e.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Du, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return r.sent(), this.Fu = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Mu = function(t) {
        var e;
        if (t instanceof tn) e = t.version; else {
            if (!(t instanceof en)) throw p();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = k.min();
        }
        var n = this.Cu.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new D(x.ABORTED, "Document version changed between two reads.");
        } else this.Cu.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Ue = function(t) {
        var e = this.Cu.get(t.toString());
        return !this.$u.has(t) && e ? Re.updateTime(e) : Re.Qe();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.Ou = function(t) {
        var e = this.Cu.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.$u.has(t) && e) {
            if (e.isEqual(k.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new D(x.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Re.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return Re.exists(!0);
    }, t.prototype.write = function(t) {
        this.xu(), this.mutations = this.mutations.concat(t);
    }, t.prototype.xu = function() {}, t;
}(), To = /** @class */ function() {
    function t(t, e) {
        this.mo = t, this.Lu = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Bu = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.qu = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Uu = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Qu = function() {
        var t = this;
        0 === this.Bu && (this.Wu("Unknown" /* Unknown */), this.qu = this.mo.Os("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.qu = null, t.ju("Backend didn't respond within 10 seconds."), t.Wu("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Ku = function(t) {
        "Online" /* Online */ === this.state ? this.Wu("Unknown" /* Unknown */) : (this.Bu++, 
        this.Bu >= 1 && (this.Gu(), this.ju("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Wu("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Gu(), this.Bu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Uu = !1), this.Wu(t);
    }, t.prototype.Wu = function(t) {
        t !== this.state && (this.state = t, this.Lu(t));
    }, t.prototype.ju = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Uu ? (f(e), this.Uu = !1) : h("OnlineStateTracker", e);
    }, t.prototype.Gu = function() {
        null !== this.qu && (this.qu.cancel(), this.qu = null);
    }, t;
}(), No = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, r, i, o) {
        var s = this;
        this.zu = t, this.Du = n, this.mo = r, 
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
        this.Hu = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.Yu = new Map, this.Ju = null, 
        /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
        this.Xu = new Set, this.Zu = o, this.Zu.tc((function(t) {
            r.cr((function() {
                return e.__awaiter(s, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.ec() ? (h("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.nc() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.sc = new To(r, i), 
        // Create streams (but note they're not started yet).
        this.ic = function(t, e, n) {
            var r = y(t);
            return new _o(e, r.Ja, r.credentials, r.serializer, n);
        }(this.Du, r, {
            wu: this.rc.bind(this),
            cu: this.oc.bind(this),
            Eu: this.hc.bind(this)
        }), this.ac = function(t, e, n) {
            var r = y(t);
            return new bo(e, r.Ja, r.credentials, r.serializer, n);
        }(this.Du, r, {
            wu: this.uc.bind(this),
            cu: this.cc.bind(this),
            gu: this.lc.bind(this),
            Vu: this.Vu.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return this.Xu.delete(0 /* UserDisabled */), this._c();
    }, t.prototype._c = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.ec() ? (this.fc() ? this.dc() : this.sc.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.wc() ]) : [ 3 /*break*/ , 2 ];

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
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Xu.add(0 /* UserDisabled */), [ 4 /*yield*/ , this.Tc() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.sc.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Tc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.ac.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.ic.stop() ];

                  case 2:
                    return t.sent(), this.Hu.length > 0 && (h("RemoteStore", "Stopping write stream with " + this.Hu.length + " pending writes"), 
                    this.Hu = []), this.Ec(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.gr = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return h("RemoteStore", "RemoteStore shutting down."), this.Xu.add(5 /* Shutdown */), 
                    [ 4 /*yield*/ , this.Tc() ];

                  case 1:
                    return t.sent(), this.Zu.gr(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.sc.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.Yu.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.Yu.set(t.targetId, t), this.fc() ? 
        // The listen will be sent in onWatchStreamOpen
        this.dc() : this.ic.nu() && this.Ic(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.mc = function(t) {
        this.Yu.delete(t), this.ic.nu() && this.Ac(t), 0 === this.Yu.size && (this.ic.nu() ? this.ic.ru() : this.ec() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.sc.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.Me = function(t) {
        return this.Yu.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.xe = function(t) {
        return this.Rc.xe(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.Ic = function(t) {
        this.Ju.de(t.targetId), this.ic.Iu(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Ac = function(t) {
        this.Ju.de(t), this.ic.mu(t);
    }, t.prototype.dc = function() {
        this.Ju = new bt(this), this.ic.start(), this.sc.Qu();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.fc = function() {
        return this.ec() && !this.ic.eu() && this.Yu.size > 0;
    }, t.prototype.ec = function() {
        return 0 === this.Xu.size;
    }, t.prototype.Ec = function() {
        this.Ju = null;
    }, t.prototype.rc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                return this.Yu.forEach((function(e, n) {
                    t.Ic(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.oc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return this.Ec(), 
                // If we still need the watch stream, retry the connection.
                this.fc() ? (this.sc.Ku(t), this.dc()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.sc.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.hc = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.sc.set("Online" /* Online */), !(t instanceof wt && 2 /* Removed */ === t.state && t.cause)) 
                    // Mark the client as online since we got a message from the server
                    return [ 3 /*break*/ , 6 ];
                    e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , this.Pc(t) ];

                  case 2:
                    return e.sent(), [ 3 /*break*/ , 5 ];

                  case 3:
                    return r = e.sent(), h("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), 
                    [ 4 /*yield*/ , this.Vc(r) ];

                  case 4:
                    return e.sent(), [ 3 /*break*/ , 5 ];

                  case 5:
                    return [ 3 /*break*/ , 13 ];

                  case 6:
                    if (t instanceof gt ? this.Ju.Pe(t) : t instanceof mt ? this.Ju.De(t) : this.Ju.ye(t), 
                    n.isEqual(k.min())) return [ 3 /*break*/ , 13 ];
                    e.label = 7;

                  case 7:
                    return e.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , this.zu.mi() ];

                  case 8:
                    return i = e.sent(), n.o(i) >= 0 ? [ 4 /*yield*/ , this.gc(n) ] : [ 3 /*break*/ , 10 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                                      case 9:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                    e.sent(), e.label = 10;

                  case 10:
                    return [ 3 /*break*/ , 13 ];

                  case 11:
                    return h("RemoteStore", "Failed to raise snapshot:", o = e.sent()), [ 4 /*yield*/ , this.Vc(o) ];

                  case 12:
                    return e.sent(), [ 3 /*break*/ , 13 ];

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
    t.prototype.Vc = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (!Br(t)) throw t;
                    // Disable network and raise offline snapshots
                    return this.Xu.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this.Tc() ];

                  case 1:
                    // Disable network and raise offline snapshots
                    return i.sent(), this.sc.set("Offline" /* Offline */), n || (
                    // Use a simple read operation to determine if IndexedDB recovered.
                    // Ideally, we would expose a health check directly on SimpleDb, but
                    // RemoteStore only has access to persistence through LocalStore.
                    n = function() {
                        return r.zu.mi();
                    }), 
                    // Probe IndexedDB periodically and re-enable network
                    this.mo._r((function() {
                        return e.__awaiter(r, void 0, void 0, (function() {
                            return e.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return h("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , n() ];

                                  case 1:
                                    return t.sent(), this.Xu.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , this._c() ];

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
    t.prototype.yc = function(t) {
        var e = this;
        return t().catch((function(n) {
            return e.Vc(n, t);
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.gc = function(t) {
        var e = this, n = this.Ju.Ne(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.Qt.forEach((function(n, r) {
            if (n.resumeToken.H() > 0) {
                var i = e.Yu.get(r);
                // A watched target might have been removed already.
                                i && e.Yu.set(r, i.tt(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.Wt.forEach((function(t) {
            var n = e.Yu.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.Yu.set(t, n.tt(G.Y, n.X)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Ac(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new $(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.Ic(r);
            }
        })), this.Rc.Lh(n);
    }, 
    /** Handles an error on a target */ t.prototype.Pc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    n = t.cause, r = 0, i = t.targetIds, e.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.Yu.has(o) ? [ 4 /*yield*/ , this.Rc.pc(o, n) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                  case 2:
                    e.sent(), this.Yu.delete(o), this.Ju.removeTarget(o), e.label = 3;

                  case 3:
                    e.label = 4;

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
    t.prototype.wc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    t = this.Hu.length > 0 ? this.Hu[this.Hu.length - 1].batchId : -1, e.label = 1;

                  case 1:
                    if (!this.bc()) return [ 3 /*break*/ , 7 ];
                    e.label = 2;

                  case 2:
                    return e.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , this.zu.Qh(t) ];

                  case 3:
                    return null === (n = e.sent()) ? (0 === this.Hu.length && this.ac.ru(), [ 3 /*break*/ , 7 ]) : (t = n.batchId, 
                    this.vc(n), [ 3 /*break*/ , 6 ]);

                  case 4:
                    return r = e.sent(), [ 4 /*yield*/ , this.Vc(r) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 3 /*break*/ , 1 ];

                  case 7:
                    return this.Sc() && this.Dc(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.bc = function() {
        return this.ec() && this.Hu.length < 10;
    }, 
    // For testing
    t.prototype.Cc = function() {
        return this.Hu.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.vc = function(t) {
        this.Hu.push(t), this.ac.nu() && this.ac.Ru && this.ac.Pu(t.mutations);
    }, t.prototype.Sc = function() {
        return this.ec() && !this.ac.eu() && this.Hu.length > 0;
    }, t.prototype.Dc = function() {
        this.ac.start();
    }, t.prototype.uc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.ac.yu(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.lc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n, r;
            return e.__generator(this, (function(e) {
                // Send the write pipeline now that the stream is established.
                for (t = 0, n = this.Hu; t < n.length; t++) r = n[t], this.ac.Pu(r.mutations);
                return [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Vu = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return r = this.Hu.shift(), i = Tn.from(r, t, n), [ 4 /*yield*/ , this.yc((function() {
                        return o.Rc.Fc(i);
                    })) ];

                  case 1:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return e.sent(), [ 4 /*yield*/ , this.wc() ];

                  case 2:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.cc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t && this.ac.Ru ? [ 4 /*yield*/ , this.Nc(t) ] : [ 3 /*break*/ , 2 ];

                    // This error affects the actual write.
                                      case 1:
                    // This error affects the actual write.
                    e.sent(), e.label = 2;

                  case 2:
                    // If the write stream closed after the write handshake completes, a write
                    // operation failed and we fail the pending operation.
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    return this.Sc() && this.Dc(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Nc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return H(r = t.code) && r !== x.ABORTED ? (n = this.Hu.shift(), 
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    this.ac.iu(), [ 4 /*yield*/ , this.yc((function() {
                        return i.Rc.$c(n.batchId, t);
                    })) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return e.sent(), [ 4 /*yield*/ , this.wc() ];

                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.kc = function() {
        return new Eo(this.Du);
    }, t.prototype.nc = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Xu.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , this.Tc() ];

                  case 1:
                    return t.sent(), this.sc.set("Unknown" /* Unknown */), this.ac.iu(), this.ic.iu(), 
                    this.Xu.delete(4 /* ConnectivityChange */), [ 4 /*yield*/ , this._c() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.xc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.mo.Wo(), 
                    // Tear down and re-create our network streams. This will ensure we get a
                    // fresh auth token for the new user and re-fill the write pipeline with
                    // new mutations from the LocalStore (since mutations are per-user).
                    h("RemoteStore", "RemoteStore received new credentials"), this.Xu.add(3 /* CredentialChange */), 
                    [ 4 /*yield*/ , this.Tc() ];

                  case 1:
                    return e.sent(), this.sc.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.Rc.xc(t) ];

                  case 2:
                    return e.sent(), this.Xu.delete(3 /* CredentialChange */), [ 4 /*yield*/ , this._c() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Mc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t ? (this.Xu.delete(2 /* IsSecondary */), [ 4 /*yield*/ , this._c() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return e.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (n = t) ? [ 3 /*break*/ , 4 ] : (this.Xu.add(2 /* IsSecondary */), [ 4 /*yield*/ , this.Tc() ]);

                  case 3:
                    e.sent(), n = this.sc.set("Unknown" /* Unknown */), e.label = 4;

                  case 4:
                    n, e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}();

/** A CredentialsProvider that always yields an empty token. */
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
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Ao(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function xo(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.zr() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function Do(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var So = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Oc = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new D(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, s) : (f("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.Lc = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), ko = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Oc = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new D(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (f("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.Lc = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Po = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Oc = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = ft(), s = 0; i && s < r.activeTargetIds.length; ++s) i = M(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (f("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Lo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Oc = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (f("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), Oo = /** @class */ function() {
    function t() {
        this.activeTargetIds = ft();
    }
    return t.prototype.Bc = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.qc = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Lc = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.F(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Ro = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.window = t, this.bs = e, this.persistenceKey = n, this.Uc = r, this.Rc = null, 
        this.Lu = null, this.Ps = null, this.Qc = this.Wc.bind(this), this.jc = new J(m), 
        this.or = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Kc = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Gc = Ao(this.persistenceKey, this.Uc), 
        this.zc = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.jc = this.jc.nt(this.Uc, new Oo), this.Hc = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Yc = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Jc = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.Xc = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.Qc);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.Hi = function(t) {
        return !(!t || !t.localStorage);
    }, t.prototype.start = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n, r, i, o, s, u, a, c, h, f, l = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Rc.Sr() ];

                  case 1:
                    for (t = e.sent(), n = 0, r = t; n < r.length; n++) (i = r[n]) !== this.Uc && (o = this.getItem(Ao(this.persistenceKey, i))) && (s = Po.Oc(i, o)) && (this.jc = this.jc.nt(s.clientId, s));
                    for (this.Zc(), (u = this.storage.getItem(this.Xc)) && (a = this.tl(u)) && this.el(a), 
                    c = 0, h = this.Kc; c < h.length; c++) f = h[c], this.Wc(f);
                    return this.Kc = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return l.gr();
                    })), this.or = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ys = function(t) {
        this.setItem(this.zc, JSON.stringify(t));
    }, t.prototype.nl = function() {
        return this.sl(this.jc);
    }, t.prototype.il = function(t) {
        var e = !1;
        return this.jc.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.rl = function(t) {
        this.ol(t, "pending");
    }, t.prototype.hl = function(t, e, n) {
        this.ol(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.al(t);
    }, t.prototype.ul = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.il(t)) {
            var n = this.storage.getItem(Do(this.persistenceKey, t));
            if (n) {
                var r = ko.Oc(t, n);
                r && (e = r.state);
            }
        }
        return this.cl.Bc(t), this.Zc(), e;
    }, t.prototype.ll = function(t) {
        this.cl.qc(t), this.Zc();
    }, t.prototype._l = function(t) {
        return this.cl.activeTargetIds.has(t);
    }, t.prototype.fl = function(t) {
        this.removeItem(Do(this.persistenceKey, t));
    }, t.prototype.dl = function(t, e, n) {
        this.wl(t, e, n);
    }, t.prototype.Ch = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.al(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.rl(t);
        }));
    }, t.prototype.Tl = function(t) {
        this.El(t);
    }, t.prototype.gr = function() {
        this.or && (this.window.removeEventListener("storage", this.Qc), this.removeItem(this.Gc), 
        this.or = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return h("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        h("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        h("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.Wc = function(t) {
        var n = this, r = t;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (r.storageArea === this.storage) {
            if (h("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Gc) return void f("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.bs._r((function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    var t, n, i, o, s, u;
                    return e.__generator(this, (function(e) {
                        if (this.or) {
                            if (null !== r.key) if (this.Hc.test(r.key)) {
                                if (null == r.newValue) return t = this.Il(r.key), [ 2 /*return*/ , this.ml(t, null) ];
                                if (n = this.Al(r.key, r.newValue)) return [ 2 /*return*/ , this.ml(n.clientId, n) ];
                            } else if (this.Yc.test(r.key)) {
                                if (null !== r.newValue && (i = this.Rl(r.key, r.newValue))) return [ 2 /*return*/ , this.Pl(i) ];
                            } else if (this.Jc.test(r.key)) {
                                if (null !== r.newValue && (o = this.Vl(r.key, r.newValue))) return [ 2 /*return*/ , this.gl(o) ];
                            } else if (r.key === this.Xc) {
                                if (null !== r.newValue && (s = this.tl(r.newValue))) return [ 2 /*return*/ , this.el(s) ];
                            } else r.key === this.zc && (u = function(t) {
                                var e = Pn.ps;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    d("number" == typeof n), e = n;
                                } catch (t) {
                                    f("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(r.newValue)) !== Pn.ps && this.Ps(u);
                        } else this.Kc.push(r);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "cl", {
        get: function() {
            return this.jc.get(this.Uc);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Zc = function() {
        this.setItem(this.Gc, this.cl.Lc());
    }, t.prototype.ol = function(t, e, n) {
        var r = new So(this.currentUser, t, e, n), i = xo(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Lc());
    }, t.prototype.al = function(t) {
        var e = xo(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.El = function(t) {
        var e = {
            clientId: this.Uc,
            onlineState: t
        };
        this.storage.setItem(this.Xc, JSON.stringify(e));
    }, t.prototype.wl = function(t, e, n) {
        var r = Do(this.persistenceKey, t), i = new ko(t, e, n);
        this.setItem(r, i.Lc());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.Il = function(t) {
        var e = this.Hc.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Al = function(t, e) {
        var n = this.Il(t);
        return Po.Oc(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Rl = function(t, e) {
        var n = this.Yc.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return So.Oc(new lo(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Vl = function(t, e) {
        var n = this.Jc.exec(t), r = Number(n[1]);
        return ko.Oc(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.tl = function(t) {
        return Lo.Oc(t);
    }, t.prototype.Pl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.Rc.yl(t.batchId, t.state, t.error) ] : (h("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.gl = function(t) {
        return this.Rc.pl(t.targetId, t.state, t.error);
    }, t.prototype.ml = function(t, e) {
        var n = this, r = e ? this.jc.nt(t, e) : this.jc.remove(t), i = this.sl(this.jc), o = this.sl(r), s = [], u = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || u.push(t);
        })), this.Rc.bl(s, u).then((function() {
            n.jc = r;
        }));
    }, t.prototype.el = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.jc.get(t.clientId) && this.Lu(t.onlineState);
    }, t.prototype.sl = function(t) {
        var e = ft();
        return t.forEach((function(t, n) {
            e = e.Ct(n.activeTargetIds);
        })), e;
    }, t;
}(), Vo = /** @class */ function() {
    function t() {
        this.vl = new Oo, this.Sl = {}, this.Rc = null, this.Lu = null, this.Ps = null;
    }
    return t.prototype.rl = function(t) {
        // No op.
    }, t.prototype.hl = function(t, e, n) {
        // No op.
    }, t.prototype.ul = function(t) {
        return this.vl.Bc(t), this.Sl[t] || "not-current";
    }, t.prototype.dl = function(t, e, n) {
        this.Sl[t] = e;
    }, t.prototype.ll = function(t) {
        this.vl.qc(t);
    }, t.prototype._l = function(t) {
        return this.vl.activeTargetIds.has(t);
    }, t.prototype.fl = function(t) {
        delete this.Sl[t];
    }, t.prototype.nl = function() {
        return this.vl.activeTargetIds;
    }, t.prototype.il = function(t) {
        return this.vl.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.vl = new Oo, Promise.resolve();
    }, t.prototype.Ch = function(t, e, n) {
        // No op.
    }, t.prototype.Tl = function(t) {
        // No op.
    }, t.prototype.gr = function() {}, t.prototype.ys = function(t) {}, t;
}(), Uo = function(t) {
    this.key = t;
}, Co = function(t) {
    this.key = t;
}, Mo = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.Dl = e, this.Cl = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Ht = !1, 
        /** Documents in the view but not in the remote target */
        this.Fl = ct(), 
        /** Document Keys that have local changes */
        this.Lt = ct(), this.Nl = cn(t), this.$l = new lt(this.Nl);
    }
    return Object.defineProperty(t.prototype, "kl", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.Dl;
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
    t.prototype.xl = function(t, e) {
        var n = this, r = e ? e.Ml : new pt, i = e ? e.$l : this.$l, o = e ? e.Lt : this.Lt, s = i, u = !1, a = this.query.In() && i.size === this.query.limit ? i.last() : null, c = this.query.mn() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ot((function(t, e) {
            var h = i.get(t), f = e instanceof tn ? e : null;
            f && (f = an(n.query, f) ? f : null);
            var l = !!h && n.Lt.has(h.key), p = !!f && (f.Ge || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Lt.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.Ol(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.Nl(f, a) > 0 || c && n.Nl(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.In() || this.query.mn()) for (;s.size > this.query.limit; ) {
            var h = this.query.In() ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            $l: s,
            Ml: r,
            Ll: u,
            Lt: o
        };
    }, t.prototype.Ol = function(t, e) {
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
    t.prototype.Jn = function(t, e, n) {
        var r = this, i = this.$l;
        this.$l = t.$l, this.Lt = t.Lt;
        // Sort changes based on type and query comparator
        var o = t.Ml.Mt();
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
                        return p();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.Nl(t.doc, e.doc);
        })), this.Bl(n);
        var s = e ? this.ql() : [], u = 0 === this.Fl.size && this.Ht ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.Cl;
        return this.Cl = u, 0 !== o.length || a ? {
            snapshot: new dt(this.query, t.$l, i, o, t.Lt, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            Ul: s
        } : {
            Ul: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Ql = function(t) {
        return this.Ht && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Ht = !1, this.Jn({
            $l: this.$l,
            Ml: new pt,
            Lt: this.Lt,
            Ll: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Ul: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Wl = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.Dl.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.$l.has(t) && !this.$l.get(t).Ge;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Bl = function(t) {
        var e = this;
        t && (t.Yt.forEach((function(t) {
            return e.Dl = e.Dl.add(t);
        })), t.Jt.forEach((function(t) {})), t.Xt.forEach((function(t) {
            return e.Dl = e.Dl.delete(t);
        })), this.Ht = t.Ht);
    }, t.prototype.ql = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Ht) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.Fl;
        this.Fl = ct(), this.$l.forEach((function(e) {
            t.Wl(e.key) && (t.Fl = t.Fl.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.Fl.has(e) || n.push(new Co(e));
        })), this.Fl.forEach((function(t) {
            e.has(t) || n.push(new Uo(t));
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
    t.prototype.jl = function(t) {
        this.Dl = t.zh, this.Fl = ct();
        var e = this.xl(t.documents);
        return this.Jn(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Kl = function() {
        return dt.Ut(this.query, this.$l, this.Lt, 0 /* Local */ === this.Cl);
    }, t;
}(), Fo = /** @class */ function() {
    function t(t, e, n, r) {
        this.mo = t, this.Du = e, this.updateFunction = n, this.Po = r, this.Gl = 5, this.$o = new On(this.mo, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.zl();
    }, t.prototype.zl = function() {
        var t = this;
        this.$o.xs((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                var t, n, r = this;
                return e.__generator(this, (function(e) {
                    return t = new Eo(this.Du), (n = this.Hl(t)) && n.then((function(e) {
                        r.mo.cr((function() {
                            return t.commit().then((function() {
                                r.Po.resolve(e);
                            })).catch((function(t) {
                                r.Yl(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.Yl(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Hl = function(t) {
        try {
            var e = this.updateFunction(t);
            return !U(e) && e.catch && e.then ? e : (this.Po.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Po.reject(t), null;
        }
    }, t.prototype.Yl = function(t) {
        var e = this;
        this.Gl > 0 && this.Jl(t) ? (this.Gl -= 1, this.mo.cr((function() {
            return e.zl(), Promise.resolve();
        }))) : this.Po.reject(t);
    }, t.prototype.Jl = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !H(e);
        }
        return !1;
    }, t;
}(), qo = function(
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
}, jo = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Xl = !1;
}, zo = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.zu = t, this.Zl = e, this.Du = n, this.t_ = r, this.currentUser = i, this.e_ = o, 
        this.n_ = null, this.s_ = new A((function(t) {
            return sn(t);
        }), on), this.i_ = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.r_ = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.o_ = new J(V.P), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.h_ = new Map, this.a_ = new ci, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.u_ = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.c_ = new Map, this.l_ = rr.di(), this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "__", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.subscribe = function(t) {
        this.n_ = t;
    }, t.prototype.listen = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.f_("listen()"), (i = this.s_.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    n = i.targetId, this.t_.ul(n), r = i.view.Kl(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.zu.jh(t.We()) ];

                  case 2:
                    return o = e.sent(), s = this.t_.ul(o.targetId), n = o.targetId, [ 4 /*yield*/ , this.d_(t, n, "current" === s) ];

                  case 3:
                    r = e.sent(), this.__ && this.Zl.listen(o), e.label = 4;

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
    t.prototype.d_ = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a, c;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.zu.Gh(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return i = e.sent(), o = new Mo(t, i.zh), s = o.xl(i.documents), u = vt.zt(n, r && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.Jn(s, 
                    /* updateLimboDocuments= */ this.__, u), this.w_(n, a.Ul), c = new qo(t, n, o), 
                    [ 2 /*return*/ , (this.s_.set(t, c), this.i_.has(n) ? this.i_.get(n).push(t) : this.i_.set(n, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, t.prototype.mc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.f_("unlisten()"), n = this.s_.get(t), (r = this.i_.get(n.targetId)).length > 1 ? [ 2 /*return*/ , (this.i_.set(n.targetId, r.filter((function(e) {
                        return !on(e, t);
                    }))), void this.s_.delete(t)) ] : this.__ ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.t_.ll(n.targetId), this.t_.il(n.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.zu.Kh(n.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.t_.fl(n.targetId), i.Zl.mc(n.targetId), i.T_(n.targetId);
                    })).catch(ai) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.T_(n.targetId), [ 4 /*yield*/ , this.zu.Kh(n.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    e.sent(), e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.write = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.f_("write()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , this.zu.kh(t) ];

                  case 2:
                    return r = e.sent(), this.t_.rl(r.batchId), this.E_(r.batchId, n), [ 4 /*yield*/ , this.I_(r.Un) ];

                  case 3:
                    return e.sent(), [ 4 /*yield*/ , this.Zl.wc() ];

                  case 4:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 5:
                    return i = e.sent(), o = Xr(i, "Failed to persist write"), n.reject(o), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.runTransaction = function(t, e, n) {
        new Fo(t, this.Du, e, n).run();
    }, t.prototype.Lh = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.f_("applyRemoteEvent()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zu.Lh(t) ];

                  case 2:
                    return n = e.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.Qt.forEach((function(t, e) {
                        var n = r.h_.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        d(t.Yt.size + t.Jt.size + t.Xt.size <= 1), t.Yt.size > 0 ? n.Xl = !0 : t.Jt.size > 0 ? d(n.Xl) : t.Xt.size > 0 && (d(n.Xl), 
                        n.Xl = !1));
                    })), [ 4 /*yield*/ , this.I_(n, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ai(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ql = function(t, e) {
        this.f_("applyOnlineStateChange()");
        var n = [];
        this.s_.forEach((function(e, r) {
            var i = r.view.Ql(t);
            i.snapshot && n.push(i.snapshot);
        })), this.n_.m_(t), this.n_.Eu(n), this.onlineState = t;
    }, t.prototype.pc = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.f_("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.t_.dl(t, "rejected", n), r = this.h_.get(t), (i = r && r.key) ? (o = (o = new J(V.P)).nt(i, new en(i, k.min())), 
                    s = ct().add(i), u = new yt(k.min(), 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new tt(m), o, s), [ 4 /*yield*/ , this.Lh(u) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return e.sent(), 
                    // Since this query failed, we won't want to manually unlisten to it.
                    // We only remove it from bookkeeping after we successfully applied the
                    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                    // this query when the RemoteStore restarts the Watch stream, which should
                    // re-trigger the target failure.
                    this.o_ = this.o_.remove(i), this.h_.delete(t), this.A_(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , this.zu.Kh(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.T_(t, n);
                    })).catch(ai) ];

                  case 3:
                    e.sent(), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Fc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.f_("applySuccessfulWrite()"), n = t.batch.batchId, e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zu.xh(t) ];

                  case 2:
                    return r = e.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.R_(n, /*error=*/ null), this.P_(n), this.t_.hl(n, "acknowledged"), [ 4 /*yield*/ , this.I_(r) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ai(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.$c = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.f_("rejectFailedWrite()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.zu.Oh(t) ];

                  case 2:
                    return r = e.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.R_(t, n), this.P_(t), this.t_.hl(t, "rejected", n), [ 4 /*yield*/ , this.I_(r) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ai(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.V_ = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.Zl.ec() || h("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.zu.to() ];

                  case 2:
                    return -1 === (n = e.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.c_.get(n) || []).push(t), 
                    this.c_.set(n, r), [ 3 /*break*/ , 4 ]);

                  case 3:
                    return i = e.sent(), o = Xr(i, "Initialization of waitForPendingWrites() operation failed"), 
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
    t.prototype.P_ = function(t) {
        (this.c_.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.c_.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.g_ = function(t) {
        this.c_.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new D(x.CANCELLED, t));
            }));
        })), this.c_.clear();
    }, t.prototype.E_ = function(t, e) {
        var n = this.u_[this.currentUser.ka()];
        n || (n = new J(m)), n = n.nt(t, e), this.u_[this.currentUser.ka()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.R_ = function(t, e) {
        var n = this.u_[this.currentUser.ka()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.u_[this.currentUser.ka()] = n;
        }
    }, t.prototype.T_ = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.t_.ll(t);
        for (var r = 0, i = this.i_.get(t); r < i.length; r++) {
            var o = i[r];
            this.s_.delete(o), e && this.n_.y_(o, e);
        }
        this.i_.delete(t), this.__ && this.a_.oa(t).forEach((function(t) {
            n.a_.Mi(t) || 
            // We removed the last reference for this key
            n.p_(t);
        }));
    }, t.prototype.p_ = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.o_.get(t);
        null !== e && (this.Zl.mc(e), this.o_ = this.o_.remove(t), this.h_.delete(e), this.A_());
    }, t.prototype.w_ = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof Uo ? (this.a_.Fi(i.key, t), this.b_(i)) : i instanceof Co ? (h("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.a_.$i(i.key, t), this.a_.Mi(i.key) || 
            // We removed the last reference for this key
            this.p_(i.key)) : p();
        }
    }, t.prototype.b_ = function(t) {
        var e = t.key;
        this.o_.get(e) || (h("SyncEngine", "New document in limbo: " + e), this.r_.push(e), 
        this.A_());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.A_ = function() {
        for (;this.r_.length > 0 && this.o_.size < this.e_; ) {
            var t = this.r_.shift(), e = this.l_.next();
            this.h_.set(e, new jo(t)), this.o_ = this.o_.nt(t, e), this.Zl.listen(new $(rn.hn(t.path).We(), e, 2 /* LimboResolution */ , Pn.ps));
        }
    }, 
    // Visible for testing
    t.prototype.v_ = function() {
        return this.o_;
    }, 
    // Visible for testing
    t.prototype.S_ = function() {
        return this.r_;
    }, t.prototype.I_ = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return r = [], i = [], o = [], this.s_.forEach((function(e, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.xl(t);
                            return e.Ll ? s.zu.Gh(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.xl(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var e = n && n.Qt.get(u.targetId), o = u.view.Jn(t, 
                            /* updateLimboDocuments= */ s.__, e);
                            if (s.w_(u.targetId, o.Ul), o.snapshot) {
                                s.__ && s.t_.dl(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), r.push(o.snapshot);
                                var a = kn.Rs(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return e.sent(), this.n_.Eu(r), [ 4 /*yield*/ , this.zu.Uh(i) ];

                  case 2:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.f_ = function(t) {}, t.prototype.xc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.currentUser.isEqual(t) ? [ 3 /*break*/ , 3 ] : (h("SyncEngine", "User change. New user:", t.ka()), 
                    [ 4 /*yield*/ , this.zu.Ch(t) ]);

                  case 1:
                    return n = e.sent(), this.currentUser = t, 
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.g_("'waitForPendingWrites' promise is rejected due to a user change."), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.t_.Ch(t, n.Nh, n.$h), [ 4 /*yield*/ , this.I_(n.Fh) ];

                  case 2:
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.enableNetwork = function() {
        return this.Zl.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Zl.disableNetwork();
    }, t.prototype.xe = function(t) {
        var e = this.h_.get(t);
        if (e && e.Xl) return ct().add(e.key);
        var n = ct(), r = this.i_.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.s_.get(s);
            n = n.Ct(u.view.kl);
        }
        return n;
    }, t;
}();

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
function Bo(t, e, n, 
// PORTING NOTE: Manages state synchronization in multi-tab environments.
r, i, o) {
    return new zo(t, e, n, r, i, o);
}

/**
 * An implementation of `SyncEngineImpl` providing multi-tab synchronization on
 * top of `SyncEngineImpl`.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ var Go = /** @class */ function(t) {
    function n(e, n, r, i, o, s) {
        var u = this;
        return (u = t.call(this, e, n, r, i, o, s) || this).zu = e, 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        u.D_ = void 0, u;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "__", {
        get: function() {
            return !0 === this.D_;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.enableNetwork = function() {
        return this.zu.ur(!0), t.prototype.enableNetwork.call(this);
    }, n.prototype.disableNetwork = function() {
        return this.zu.ur(!1), t.prototype.disableNetwork.call(this);
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    n.prototype.C_ = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.zu.Gh(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return n = e.sent(), r = t.view.jl(n), [ 2 /*return*/ , (this.D_ && this.w_(t.targetId, r.Ul), 
                    r) ];
                }
            }));
        }));
    }, n.prototype.Ql = function(e, n) {
        // If we are the primary client, the online state of all clients only
        // depends on the online state of the local RemoteStore.
        this.__ && 0 /* RemoteStore */ === n && (t.prototype.Ql.call(this, e, n), this.t_.Tl(e)), 
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        this.__ || 1 /* SharedClientState */ !== n || t.prototype.Ql.call(this, e, n);
    }, n.prototype.yl = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.f_("applyBatchState()"), [ 4 /*yield*/ , this.zu.Yh(t) ];

                  case 1:
                    return null === (i = e.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Zl.wc() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === n || "rejected" === n ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this.R_(t, r || null), this.zu.Jh(t)) : p(), e.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.I_(i) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 7 ];

                  case 6:
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    h("SyncEngine", "Cannot apply mutation batch with id: " + t), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Mc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, c = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !0 !== t || !0 === this.D_ ? [ 3 /*break*/ , 3 ] : (n = this.t_.nl(), [ 4 /*yield*/ , this.F_(n.F(), 
                    /*transitionToPrimary=*/ !0) ]);

                  case 1:
                    return r = e.sent(), this.D_ = !0, [ 4 /*yield*/ , this.Zl.Mc(!0) ];

                  case 2:
                    for (e.sent(), i = 0, o = r; i < o.length; i++) s = o[i], this.Zl.listen(s);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.D_ ? [ 3 /*break*/ , 7 ] : (u = [], a = Promise.resolve(), 
                    this.i_.forEach((function(t, e) {
                        c.t_._l(e) ? u.push(e) : a = a.then((function() {
                            return c.T_(e), c.zu.Kh(e, 
                            /*keepPersistedTargetData=*/ !0);
                        })), c.Zl.mc(e);
                    })), [ 4 /*yield*/ , a ]);

                  case 4:
                    return e.sent(), [ 4 /*yield*/ , this.F_(u, 
                    /*transitionToPrimary=*/ !1) ];

                  case 5:
                    return e.sent(), this.N_(), this.D_ = !1, [ 4 /*yield*/ , this.Zl.Mc(!1) ];

                  case 6:
                    e.sent(), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.N_ = function() {
        var t = this;
        this.h_.forEach((function(e, n) {
            t.Zl.mc(n);
        })), this.a_.ha(), this.h_ = new Map, this.o_ = new J(V.P);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     *
     * @param targets the list of targets with views that need to be recomputed
     * @param transitionToPrimary `true` iff the tab transitions from a secondary
     * tab to a primary tab
     */
    n.prototype.F_ = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, c, h, f, l, p, d;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    n = [], r = [], i = 0, o = t, e.label = 1;

                  case 1:
                    return i < o.length ? (s = o[i], u = void 0, (a = this.i_.get(s)) && 0 !== a.length ? [ 4 /*yield*/ , this.zu.jh(a[0].We()) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

                  case 2:
                    // For queries that have a local View, we fetch their current state
                    // from LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    u = e.sent(), c = 0, h = a, e.label = 3;

                  case 3:
                    return c < h.length ? (f = h[c], l = this.s_.get(f), [ 4 /*yield*/ , this.C_(l) ]) : [ 3 /*break*/ , 6 ];

                  case 4:
                    (p = e.sent()).snapshot && r.push(p.snapshot), e.label = 5;

                  case 5:
                    return c++, [ 3 /*break*/ , 3 ];

                  case 6:
                    return [ 3 /*break*/ , 11 ];

                  case 7:
                    return [ 4 /*yield*/ , this.zu.Xh(s) ];

                  case 8:
                    return d = e.sent(), [ 4 /*yield*/ , this.zu.jh(d) ];

                  case 9:
                    return u = e.sent(), [ 4 /*yield*/ , this.d_(this.k_(d), s, 
                    /*current=*/ !1) ];

                  case 10:
                    e.sent(), e.label = 11;

                  case 11:
                    n.push(u), e.label = 12;

                  case 12:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 13:
                    return [ 2 /*return*/ , (this.n_.Eu(r), n) ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    n.prototype.k_ = function(t) {
        return new rn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }, n.prototype.Sr = function() {
        return this.zu.Sr();
    }, n.prototype.pl = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.D_ ? (
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    h("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    if (!this.i_.has(t)) return [ 3 /*break*/ , 8 ];
                    switch (n) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 2 ];

                      case "rejected":
                        return [ 3 /*break*/ , 5 ];
                    }
                    return [ 3 /*break*/ , 7 ];

                  case 2:
                    return [ 4 /*yield*/ , this.zu.si() ];

                  case 3:
                    return i = e.sent(), o = yt.Gt(t, "current" === n), [ 4 /*yield*/ , this.I_(i, o) ];

                  case 4:
                    return e.sent(), [ 3 /*break*/ , 8 ];

                  case 5:
                    return [ 4 /*yield*/ , this.zu.Kh(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 6:
                    return e.sent(), this.T_(t, r), [ 3 /*break*/ , 8 ];

                  case 7:
                    p(), e.label = 8;

                  case 8:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.bl = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a, c, f, l, p, d = this;
            return e.__generator(this, (function(y) {
                switch (y.label) {
                  case 0:
                    if (!this.D_) return [ 3 /*break*/ , 10 ];
                    r = 0, i = t, y.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.i_.has(o) ? (
                    // A target might have been added in a previous attempt
                    h("SyncEngine", "Adding an already active target " + o), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , this.zu.Xh(o) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return s = y.sent(), [ 4 /*yield*/ , this.zu.jh(s) ];

                  case 3:
                    return u = y.sent(), [ 4 /*yield*/ , this.d_(this.k_(s), u.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    y.sent(), this.Zl.listen(u), y.label = 5;

                  case 5:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 6:
                    a = function(t) {
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return c.i_.has(t) ? [ 4 /*yield*/ , c.zu.Kh(t, /* keepPersistedTargetData */ !1).then((function() {
                                    d.Zl.mc(t), d.T_(t);
                                })).catch(ai) ] : [ 3 /*break*/ , 2 ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                e.sent(), e.label = 2;

                              case 2:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, c = this, f = 0, l = n, y.label = 7;

                  case 7:
                    return f < l.length ? (p = l[f], [ 5 /*yield**/ , a(p) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    y.sent(), y.label = 9;

                  case 9:
                    return f++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n;
}(zo), Qo = function() {
    this.x_ = void 0, this.listeners = [];
}, Wo = /** @class */ function() {
    function t(t) {
        this.Rc = t, this.M_ = new A((function(t) {
            return sn(t);
        }), on), this.onlineState = "Unknown" /* Unknown */ , this.O_ = new Set, this.Rc.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (n = t.query, r = !1, (i = this.M_.get(n)) || (r = !0, i = new Qo), !r) return [ 3 /*break*/ , 4 ];
                    e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 3, , 4 ]), o = i, [ 4 /*yield*/ , this.Rc.listen(n) ];

                  case 2:
                    return o.x_ = e.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    return s = e.sent(), u = Xr(s, "Initialization of query '" + un(t.query) + "' failed"), 
                    [ 2 /*return*/ , void t.onError(u) ];

                  case 4:
                    return this.M_.set(n, i), i.listeners.push(t), 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.Ql(this.onlineState), i.x_ && t.L_(i.x_) && this.B_(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.mc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o;
            return e.__generator(this, (function(e) {
                return n = t.query, r = !1, (i = this.M_.get(n)) && (o = i.listeners.indexOf(t)) >= 0 && (i.listeners.splice(o, 1), 
                r = 0 === i.listeners.length), r ? [ 2 /*return*/ , (this.M_.delete(n), this.Rc.mc(n)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Eu = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.M_.get(o);
            if (s) {
                for (var u = 0, a = s.listeners; u < a.length; u++) {
                    a[u].L_(i) && (e = !0);
                }
                s.x_ = i;
            }
        }
        e && this.B_();
    }, t.prototype.y_ = function(t, e) {
        var n = this.M_.get(t);
        if (n) for (var r = 0, i = n.listeners; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.M_.delete(t);
    }, t.prototype.m_ = function(t) {
        this.onlineState = t;
        var e = !1;
        this.M_.forEach((function(n, r) {
            for (var i = 0, o = r.listeners; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Ql(t) && (e = !0);
            }
        })), e && this.B_();
    }, t.prototype.q_ = function(t) {
        this.O_.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.U_ = function(t) {
        this.O_.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.B_ = function() {
        this.O_.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), $o = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Q_ = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.W_ = !1, this.j_ = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.L_ = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new dt(t.query, t.docs, t.Ot, e, t.Lt, t.fromCache, t.Bt, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.W_ ? this.K_(t) && (this.Q_.next(t), o = !0) : this.G_(t, this.onlineState) && (this.z_(t), 
        o = !0), this.j_ = t, o;
    }, t.prototype.onError = function(t) {
        this.Q_.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Ql = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.j_ && !this.W_ && this.G_(this.j_, t) && (this.z_(this.j_), e = !0), 
        e;
    }, t.prototype.G_ = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.H_ && n || t.docs._() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.K_ = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.j_ && this.j_.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Bt && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.z_ = function(t) {
        t = dt.Ut(t.query, t.docs, t.Lt, t.fromCache), this.W_ = !0, this.Q_.next(t);
    }, t;
}(), Ko = /** @class */ function() {
    function t() {}
    return t.prototype.Dh = function(t) {
        this.Y_ = t;
    }, t.prototype._s = function(t, e, n, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.En() || n.isEqual(k.min()) ? this.J_(t, e) : this.Y_.us(t, i).next((function(s) {
            var u = o.X_(e, s);
            return (e.In() || e.mn()) && o.Ll(e.nn, u, i, n) ? o.J_(t, e) : (c() <= r.LogLevel.DEBUG && h("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), un(e)), 
            o.Y_._s(t, e, n).next((function(t) {
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
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.X_ = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new tt(cn(t));
        return e.forEach((function(e, r) {
            r instanceof tn && an(t, r) && (n = n.add(r));
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
    t.prototype.Ll = function(t, e, n, r) {
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
    }, t.prototype.J_ = function(t, e) {
        return c() <= r.LogLevel.DEBUG && h("IndexFreeQueryEngine", "Using full collection scan to execute query:", un(e)), 
        this.Y_._s(t, e, k.min());
    }, t;
}(), Ho = /** @class */ function() {
    function t(t, e) {
        this.ss = t, this.wi = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.ns = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Z_ = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.tf = new tt(hi.ta);
    }
    return t.prototype.Hr = function(t) {
        return Nn.resolve(0 === this.ns.length);
    }, t.prototype.Yr = function(t, e, n, r) {
        var i = this.Z_;
        this.Z_++, this.ns.length > 0 && this.ns[this.ns.length - 1];
        var o = new En(i, e, n, r);
        this.ns.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.tf = this.tf.add(new hi(a.key, i)), this.ss.Us(t, a.key.path.p());
        }
        return Nn.resolve(o);
    }, t.prototype.Jr = function(t, e) {
        return Nn.resolve(this.ef(e));
    }, t.prototype.Zr = function(t, e) {
        var n = e + 1, r = this.nf(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Nn.resolve(this.ns.length > i ? this.ns[i] : null);
    }, t.prototype.to = function() {
        return Nn.resolve(0 === this.ns.length ? -1 : this.Z_ - 1);
    }, t.prototype.eo = function(t) {
        return Nn.resolve(this.ns.slice());
    }, t.prototype.os = function(t, e) {
        var n = this, r = new hi(e, 0), i = new hi(e, Number.POSITIVE_INFINITY), o = [];
        return this.tf.vt([ r, i ], (function(t) {
            var e = n.ef(t.ua);
            o.push(e);
        })), Nn.resolve(o);
    }, t.prototype.ls = function(t, e) {
        var n = this, r = new tt(m);
        return e.forEach((function(t) {
            var e = new hi(t, 0), i = new hi(t, Number.POSITIVE_INFINITY);
            n.tf.vt([ e, i ], (function(t) {
                r = r.add(t.ua);
            }));
        })), Nn.resolve(this.sf(r));
    }, t.prototype.Es = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                V.W(i) || (i = i.child(""));
        var o = new hi(new V(i), 0), s = new tt(m);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.tf.St((function(t) {
            var e = t.key.path;
            return !!n.D(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.ua)), !0);
        }), o), Nn.resolve(this.sf(s));
    }, t.prototype.sf = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.ef(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.so = function(t, e) {
        var n = this;
        d(0 === this.if(e.batchId, "removed")), this.ns.shift();
        var r = this.tf;
        return Nn.forEach(e.mutations, (function(i) {
            var o = new hi(i.key, e.batchId);
            return r = r.delete(o), n.wi.qr(t, i.key);
        })).next((function() {
            n.tf = r;
        }));
    }, t.prototype.io = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Mi = function(t, e) {
        var n = new hi(e, 0), r = this.tf.Dt(n);
        return Nn.resolve(e.isEqual(r && r.key));
    }, t.prototype.ro = function(t) {
        return this.ns.length, Nn.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.if = function(t, e) {
        return this.nf(t);
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
    t.prototype.nf = function(t) {
        return 0 === this.ns.length ? 0 : t - this.ns[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.ef = function(t) {
        var e = this.nf(t);
        return e < 0 || e >= this.ns.length ? null : this.ns[e];
    }, t;
}(), Yo = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.ss = t, this.rf = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new J(V.P), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.jn = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.rf(e);
        return this.docs = this.docs.nt(r, {
            Ys: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.ss.Us(t, r.path.p());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Gn = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.zn = function(t, e) {
        var n = this.docs.get(e);
        return Nn.resolve(n ? n.Ys : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = it();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.nt(t, e ? e.Ys : null);
        })), Nn.resolve(r);
    }, t.prototype._s = function(t, e, n) {
        for (var r = st(), i = new V(e.path.child("")), o = this.docs.ut(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.wt(); ) {
            var s = o.dt(), u = s.key, a = s.value, c = a.Ys, h = a.readTime;
            if (!e.path.D(u.path)) break;
            h.o(n) <= 0 || c instanceof tn && an(e, c) && (r = r.nt(c.key, c));
        }
        return Nn.resolve(r);
    }, t.prototype.hf = function(t, e) {
        return Nn.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.oi = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.hi(this);
    }, t.prototype.ui = function(t) {
        return Nn.resolve(this.size);
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
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Yo.hi = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).ci = e, n;
    }
    return e.__extends(n, t), n.prototype.Jn = function(t) {
        var e = this, n = [];
        return this.Un.forEach((function(r, i) {
            i ? n.push(e.ci.jn(t, i, e.readTime)) : e.ci.Gn(r);
        })), Nn.Bn(n);
    }, n.prototype.Hn = function(t, e) {
        return this.ci.zn(t, e);
    }, n.prototype.Yn = function(t, e) {
        return this.ci.getEntries(t, e);
    }, n;
}(An);

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
var Jo = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.af = new A((function(t) {
            return j(t);
        }), z), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = k.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.uf = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.cf = new ci, this.targetCount = 0, this.lf = rr.fi();
    }
    return t.prototype.pe = function(t, e) {
        return this.af.forEach((function(t, n) {
            return e(n);
        })), Nn.resolve();
    }, t.prototype.mi = function(t) {
        return Nn.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Ai = function(t) {
        return Nn.resolve(this.uf);
    }, t.prototype.Ti = function(t) {
        return this.highestTargetId = this.lf.next(), Nn.resolve(this.highestTargetId);
    }, t.prototype.Ri = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.uf && (this.uf = e), 
        Nn.resolve();
    }, t.prototype.Vi = function(t) {
        this.af.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.lf = new rr(e), this.highestTargetId = e), t.sequenceNumber > this.uf && (this.uf = t.sequenceNumber);
    }, t.prototype.Pi = function(t, e) {
        return this.Vi(e), this.targetCount += 1, Nn.resolve();
    }, t.prototype.yi = function(t, e) {
        return this.Vi(e), Nn.resolve();
    }, t.prototype.pi = function(t, e) {
        return this.af.delete(e.target), this.cf.oa(e.targetId), this.targetCount -= 1, 
        Nn.resolve();
    }, t.prototype.vi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.af.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.af.delete(s), o.push(r.bi(t, u.targetId)), 
            i++);
        })), Nn.Bn(o).next((function() {
            return i;
        }));
    }, t.prototype.Si = function(t) {
        return Nn.resolve(this.targetCount);
    }, t.prototype.Di = function(t, e) {
        var n = this.af.get(e) || null;
        return Nn.resolve(n);
    }, t.prototype.Ci = function(t, e, n) {
        return this.cf.sa(e, n), Nn.resolve();
    }, t.prototype.Ni = function(t, e, n) {
        this.cf.ra(e, n);
        var r = this.persistence.wi, i = [];
        return r && e.forEach((function(e) {
            i.push(r.qr(t, e));
        })), Nn.Bn(i);
    }, t.prototype.bi = function(t, e) {
        return this.cf.oa(e), Nn.resolve();
    }, t.prototype.ki = function(t, e) {
        var n = this.cf.aa(e);
        return Nn.resolve(n);
    }, t.prototype.Mi = function(t, e) {
        return Nn.resolve(this.cf.Mi(e));
    }, t;
}(), Xo = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this._f = {}, this.Ui = new Pn(0), this.Qi = !1, this.Qi = !0, this.wi = t(this), 
        this.Ji = new Jo(this), this.ss = new Mn, this.es = new Yo(this.ss, (function(t) {
            return e.wi.ff(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.gr = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Qi = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "or", {
        get: function() {
            return this.Qi;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.hr = function() {
        // No op.
    }, t.prototype.$r = function() {
        return this.ss;
    }, t.prototype.Dr = function(t) {
        var e = this._f[t.ka()];
        return e || (e = new Ho(this.ss, this.wi), this._f[t.ka()] = e), e;
    }, t.prototype.Fr = function() {
        return this.Ji;
    }, t.prototype.Nr = function() {
        return this.es;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        h("MemoryPersistence", "Starting transaction:", t);
        var i = new Zo(this.Ui.next());
        return this.wi.df(), n(i).next((function(t) {
            return r.wi.wf(i).next((function() {
                return t;
            }));
        })).On().then((function(t) {
            return i.ts(), t;
        }));
    }, t.prototype.Tf = function(t, e) {
        return Nn.qn(Object.values(this._f).map((function(n) {
            return function() {
                return n.Mi(t, e);
            };
        })));
    }, t;
}(), Zo = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).Li = e, n;
    }
    return e.__extends(n, t), n;
}(Dn), ts = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Ef = new ci, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.If = null;
    }
    return t.mf = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Af", {
        get: function() {
            if (this.If) return this.If;
            throw p();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Fi = function(t, e, n) {
        return this.Ef.Fi(n, e), this.Af.delete(n), Nn.resolve();
    }, t.prototype.$i = function(t, e, n) {
        return this.Ef.$i(n, e), this.Af.add(n), Nn.resolve();
    }, t.prototype.qr = function(t, e) {
        return this.Af.add(e), Nn.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Ef.oa(e.targetId).forEach((function(t) {
            return n.Af.add(t);
        }));
        var r = this.persistence.Fr();
        return r.ki(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.Af.add(t);
            }));
        })).next((function() {
            return r.pi(t, e);
        }));
    }, t.prototype.df = function() {
        this.If = new Set;
    }, t.prototype.wf = function(t) {
        var e = this, n = this.persistence.Nr().oi();
        // Remove newly orphaned documents.
                return Nn.forEach(this.Af, (function(r) {
            return e.Rf(t, r).next((function(t) {
                t || n.Gn(r);
            }));
        })).next((function() {
            return e.If = null, n.apply(t);
        }));
    }, t.prototype.jr = function(t, e) {
        var n = this;
        return this.Rf(t, e).next((function(t) {
            t ? n.Af.delete(e) : n.Af.add(e);
        }));
    }, t.prototype.ff = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Rf = function(t, e) {
        var n = this;
        return Nn.qn([ function() {
            return Nn.resolve(n.Ef.Mi(e));
        }, function() {
            return n.persistence.Fr().Mi(t, e);
        }, function() {
            return n.persistence.Tf(t, e);
        } ]);
    }, t;
}(), es = /** @class */ function() {
    function t(t) {
        this.Pf = t.Pf, this.Vf = t.Vf;
    }
    return t.prototype.wu = function(t) {
        this.gf = t;
    }, t.prototype.cu = function(t) {
        this.yf = t;
    }, t.prototype.onMessage = function(t) {
        this.pf = t;
    }, t.prototype.close = function() {
        this.Vf();
    }, t.prototype.send = function(t) {
        this.Pf(t);
    }, t.prototype.bf = function() {
        this.gf();
    }, t.prototype.vf = function(t) {
        this.yf(t);
    }, t.prototype.Sf = function(t) {
        this.pf(t);
    }, t;
}(), ns = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, rs = "gl-js/ fire/" + u, is = /** @class */ function() {
    function t(t) {
        this.s = t.s;
        var e = t.ssl ? "https" : "http";
        this.Df = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.Cf = function(t, e) {
        if (e) for (var n in e.Oa) e.Oa.hasOwnProperty(n) && (t[n] = e.Oa[n]);
        t["X-Goog-Api-Client"] = rs;
    }, t.prototype.vu = function(t, e, n) {
        var r = this, i = this.Ff(t);
        return new Promise((function(s, u) {
            var a = new o.XhrIo;
            a.listenOnce(o.EventType.COMPLETE, (function() {
                try {
                    switch (a.getLastErrorCode()) {
                      case o.ErrorCode.NO_ERROR:
                        var e = a.getResponseJson();
                        h("Connection", "XHR received:", JSON.stringify(e)), s(e);
                        break;

                      case o.ErrorCode.TIMEOUT:
                        h("Connection", 'RPC "' + t + '" timed out'), u(new D(x.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case o.ErrorCode.HTTP_ERROR:
                        var n = a.getStatus();
                        if (h("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), 
                        n > 0) {
                            var r = a.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(x).indexOf(e) >= 0 ? e : x.UNKNOWN;
                                }(r.status);
                                u(new D(i, r.message));
                            } else u(new D(x.UNKNOWN, "Server responded with status " + a.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        h("Connection", 'RPC "' + t + '" failed'), u(new D(x.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        p();
                    }
                } finally {
                    h("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var c = Object.assign({}, e);
            delete c.database;
            var f = JSON.stringify(c);
            h("Connection", "XHR sending: ", i + " " + f);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var l = {
                "Content-Type": "text/plain"
            };
            r.Cf(l, n), a.send(i, "POST", f, l, 15);
        }));
    }, t.prototype.Su = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.vu(t, e, n);
    }, t.prototype.Tu = function(t, n) {
        var s = [ this.Df, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], c = o.createWebChannelTransport(), f = {
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
        this.Cf(f.initMessageHeaders, n), 
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
        i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (f.httpHeadersOverwriteParam = "$httpHeaders");
        var p = s.join("");
        h("Connection", "Creating WebChannel: " + p + " " + f);
        var y = c.createWebChannel(p, f), v = !1, g = !1, m = new es({
            Pf: function(t) {
                g ? h("Connection", "Not sending because WebChannel is closed:", t) : (v || (h("Connection", "Opening WebChannel transport."), 
                y.open(), v = !0), h("Connection", "WebChannel sending:", t), y.send(t));
            },
            Vf: function() {
                return y.close();
            }
        }), w = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            y.listen(t, (function(t) {
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
        return w(o.WebChannel.EventType.OPEN, (function() {
            g || h("Connection", "WebChannel transport opened.");
        })), w(o.WebChannel.EventType.CLOSE, (function() {
            g || (g = !0, h("Connection", "WebChannel transport closed"), m.vf());
        })), w(o.WebChannel.EventType.ERROR, (function(t) {
            g || (g = !0, function(t) {
                for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                if (a.logLevel <= r.LogLevel.WARN) {
                    var o = n.map(l);
                    a.warn.apply(a, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
                }
            }("Connection", "WebChannel transport errored:", t), m.vf(new D(x.UNAVAILABLE, "The operation could not be completed")));
        })), w(o.WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!g) {
                var n = t.data[0];
                d(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    h("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = Q[t];
                        if (void 0 !== e) return Y(e);
                    }(o), u = i.message;
                    void 0 === s && (s = x.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    g = !0, m.vf(new D(s, u)), y.close();
                } else h("Connection", "WebChannel received:", n), m.Sf(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            m.bf();
        }), 0), m;
    }, 
    // visible for testing
    t.prototype.Ff = function(t) {
        var e = ns[t];
        return this.Df + "/v1/projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents:" + e;
    }, t;
}(), os = /** @class */ function() {
    function t() {
        var t = this;
        this.Nf = function() {
            return t.$f();
        }, this.kf = function() {
            return t.xf();
        }, this.Mf = [], this.Of();
    }
    return t.prototype.tc = function(t) {
        this.Mf.push(t);
    }, t.prototype.gr = function() {
        window.removeEventListener("online", this.Nf), window.removeEventListener("offline", this.kf);
    }, t.prototype.Of = function() {
        window.addEventListener("online", this.Nf), window.addEventListener("offline", this.kf);
    }, t.prototype.$f = function() {
        h("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Mf; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.xf = function() {
        h("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Mf; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Hi = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), ss = /** @class */ function() {
    function t() {}
    return t.prototype.tc = function(t) {
        // No-op.
    }, t.prototype.gr = function() {
        // No-op.
    }, t;
}(), us = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", as = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.t_ = this.Lf(t), this.persistence = this.Bf(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.qf = this.Uf(t), this.zu = this.Qf(t), this.Zl = this.Wf(t), 
                    this.Rc = this.jf(t), this.Kf = this.Gf(t), this.t_.Lu = function(t) {
                        return n.Rc.Ql(t, 1 /* SharedClientState */);
                    }, this.Zl.Rc = this.Rc, [ 4 /*yield*/ , this.zu.start() ];

                  case 2:
                    return e.sent(), [ 4 /*yield*/ , this.t_.start() ];

                  case 3:
                    return e.sent(), [ 4 /*yield*/ , this.Zl.start() ];

                  case 4:
                    return e.sent(), [ 4 /*yield*/ , this.Zl.Mc(this.Rc.__) ];

                  case 5:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Gf = function(t) {
        return new Wo(this.Rc);
    }, t.prototype.Uf = function(t) {
        return null;
    }, t.prototype.Qf = function(t) {
        return si(this.persistence, new Ko, t.zf);
    }, t.prototype.Bf = function(t) {
        if (t.Yf.Hf) throw new D(x.FAILED_PRECONDITION, us);
        return new Xo(ts.mf);
    }, t.prototype.Wf = function(t) {
        var e = this;
        return new No(this.zu, t.Du, t.mo, (function(t) {
            return e.Rc.Ql(t, 0 /* RemoteStore */);
        }), os.Hi() ? new os : new ss);
    }, t.prototype.Lf = function(t) {
        return new Vo;
    }, t.prototype.jf = function(t) {
        return Bo(this.zu, this.Zl, t.Du, this.t_, t.zf, t.e_);
    }, t.prototype.clearPersistence = function(t, e) {
        throw new D(x.FAILED_PRECONDITION, us);
    }, t;
}(), cs = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.initialize = function(n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, n) ];

                  case 1:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 4 /*yield*/ , this.persistence.rr((function(t) {
                        return e.__awaiter(r, void 0, void 0, (function() {
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.Rc.Mc(t) ];

                                  case 1:
                                    return e.sent(), this.qf && (t && !this.qf.or ? this.qf.start(this.zu) : t || this.qf.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 2:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Qf = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new Ko, r = t.zf, new ui(e, n, r);
        var e, n, r;
    }, n.prototype.jf = function(t) {
        var e, n, r, i, o, s, u = (e = this.zu, n = this.Zl, r = t.Du, i = this.t_, o = t.zf, 
        s = t.e_, new Go(e, n, r, i, o, s));
        return this.t_ instanceof Ro && (this.t_.Rc = u), u;
    }, n.prototype.Lf = function(t) {
        if (t.Yf.Hf && t.Yf.synchronizeTabs) {
            var e = Hr();
            if (!Ro.Hi(e)) throw new D(x.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            var n = yr(t.Jf.s, t.Jf.persistenceKey);
            return new Ro(e, t.mo, n, t.clientId, t.zf);
        }
        return new Vo;
    }, n;
}(/** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.Qf = function(t) {
        return si(this.persistence, new Ko, t.zf);
    }, n.prototype.jf = function(t) {
        return Bo(this.zu, this.Zl, t.Du, this.t_, t.zf, t.e_);
    }, n.prototype.Uf = function(t) {
        var e = this.persistence.wi.xr;
        return new ri(e, t.mo);
    }, n.prototype.Bf = function(t) {
        var e = yr(t.Jf.s, t.Jf.persistenceKey), n = Wi(t.Jf.s);
        return new hr(t.Yf.synchronizeTabs, e, t.clientId, ni.oh(t.Yf.cacheSizeBytes), t.mo, Hr(), "undefined" != typeof document ? document : null, n, this.t_, t.Yf.qi);
    }, n.prototype.Lf = function(t) {
        return new Vo;
    }, n.prototype.clearPersistence = function(t, n) {
        return function(t) {
            return e.__awaiter(this, void 0, void 0, (function() {
                var n;
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return qr.Hi() ? (n = t + "main", [ 4 /*yield*/ , qr.delete(n) ]) : [ 2 /*return*/ , Promise.resolve() ];

                      case 1:
                        return e.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(yr(t, n));
    }, n;
}(as)), hs = /** @class */ function() {
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
        this.credentials = t, this.mo = e, this.clientId = g.t()
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
        this.bu(), this.Jf = t;
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var i = new Ln, o = new Ln, s = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.qa((function(t) {
            if (!s) return s = !0, h("FirestoreClient", "Initializing. user=", t.uid), r.Xf(e, n, t, o).then(i.resolve, i.reject);
            r.mo._r((function() {
                return r.Zl.xc(t);
            }));
        })), 
        // Block the async queue until initialization is done
        this.mo.cr((function() {
            return i.promise;
        })), o.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.bu(), this.mo.enqueue((function() {
            return t.Rc.enableNetwork();
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
    t.prototype.Xf = function(t, n, r, i) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var o, s, u, a, c, h = this;
            return e.__generator(this, (function(f) {
                switch (f.label) {
                  case 0:
                    return f.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , (c = this.Jf, Promise.resolve(new is(c))) ];

                  case 1:
                    return o = f.sent(), s = Wi(this.Jf.s), u = function(t, e, n) {
                        return new Io(t, e, n);
                    }(o, this.credentials, s), [ 4 /*yield*/ , t.initialize({
                        mo: this.mo,
                        Jf: this.Jf,
                        Du: u,
                        clientId: this.clientId,
                        zf: r,
                        e_: 100,
                        Yf: n
                    }) ];

                  case 2:
                    return f.sent(), this.persistence = t.persistence, this.t_ = t.t_, this.zu = t.zu, 
                    this.Zl = t.Zl, this.Rc = t.Rc, this.qf = t.qf, this.Zf = t.Kf, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.hr((function() {
                        return e.__awaiter(h, void 0, void 0, (function() {
                            return e.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (a = f.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    i.reject(a), !this.td(a)) throw a;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), 
                    this.Xf(new as, {
                        Hf: !1
                    }, r, i)) ];

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
    t.prototype.td = function(t) {
        return "FirebaseError" === t.name ? t.code === x.FAILED_PRECONDITION || t.code === x.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
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
    t.prototype.bu = function() {
        if (this.mo.xo) throw new D(x.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.bu(), this.mo.enqueue((function() {
            return t.Rc.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.mo.qo((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.qf && this.qf.stop(), [ 4 /*yield*/ , this.Zl.gr() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.t_.gr() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.gr() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.Ua(), [ 2 /*return*/ ];
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
        this.bu();
        var e = new Ln;
        return this.mo.cr((function() {
            return t.Rc.V_(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.bu();
        var i = new $o(t, e, n);
        return this.mo.cr((function() {
            return r.Zf.listen(i);
        })), i;
    }, t.prototype.mc = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.ed || this.mo.cr((function() {
            return e.Zf.mc(t);
        }));
    }, t.prototype.nd = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.bu(), n = new Ln, [ 4 /*yield*/ , this.mo.enqueue((function() {
                        return e.__awaiter(r, void 0, void 0, (function() {
                            var r, i, o;
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return e.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.zu.Wh(t) ];

                                  case 1:
                                    return (r = e.sent()) instanceof tn ? n.resolve(r) : r instanceof en ? n.resolve(null) : n.reject(new D(x.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                    [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return i = e.sent(), o = Xr(i, "Failed to get document '" + t + " from cache"), 
                                    n.reject(o), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (i.sent(), n.promise) ];
                }
            }));
        }));
    }, t.prototype.sd = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.bu(), n = new Ln, [ 4 /*yield*/ , this.mo.enqueue((function() {
                        return e.__awaiter(r, void 0, void 0, (function() {
                            var r, i, o, s, u, a;
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return e.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.zu.Gh(t, 
                                    /* usePreviousResults= */ !0) ];

                                  case 1:
                                    return r = e.sent(), i = new Mo(t, r.zh), o = i.xl(r.documents), s = i.Jn(o, 
                                    /* updateLimboDocuments= */ !1), n.resolve(s.snapshot), [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return u = e.sent(), a = Xr(u, "Failed to execute query '" + t + " against cache"), 
                                    n.reject(a), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (i.sent(), n.promise) ];
                }
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.bu();
        var n = new Ln;
        return this.mo.cr((function() {
            return e.Rc.write(t, n);
        })), n.promise;
    }, t.prototype.s = function() {
        return this.Jf.s;
    }, t.prototype.q_ = function(t) {
        var e = this;
        this.bu(), this.mo.cr((function() {
            return e.Zf.q_(t), Promise.resolve();
        }));
    }, t.prototype.U_ = function(t) {
        var e = this;
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
                this.ed || this.mo.cr((function() {
            return e.Zf.U_(t), Promise.resolve();
        }));
    }, Object.defineProperty(t.prototype, "ed", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.mo.xo;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.bu();
        var n = new Ln;
        return this.mo.cr((function() {
            return e.Rc.runTransaction(e.mo, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), fs = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.rd(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.rd(this.observer.error, t);
    }, t.prototype.od = function() {
        this.muted = !0;
    }, t.prototype.rd = function(t, e) {
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
function ls(t) {
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

var ps = /** @class */ function() {
    function t(t, e, n, r) {
        this.s = t, this.timestampsInSnapshots = e, this.hd = n, this.ad = r;
    }
    return t.prototype.ud = function(t) {
        switch (xt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return Rt(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.ld(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this._d(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new Li(Vt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.fd(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.dd(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.wd(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.Td(t.mapValue);

          default:
            throw p();
        }
    }, t.prototype.Td = function(t) {
        var e = this, n = {};
        return T(t.fields || {}, (function(t, r) {
            n[t] = e.ud(r);
        })), n;
    }, t.prototype.dd = function(t) {
        return new Qi(Rt(t.latitude), Rt(t.longitude));
    }, t.prototype.wd = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.ud(t);
        }));
    }, t.prototype._d = function(t) {
        switch (this.hd) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Tt(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.ud(e);

          case "estimate":
            return this.ld(Nt(t));

          default:
            return null;
        }
    }, t.prototype.ld = function(t) {
        var e = Ot(t), n = new S(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.fd = function(t) {
        var e = L.$(t);
        d(me(e));
        var n = new I(e.get(1), e.get(3)), r = new V(e.g(5));
        return n.isEqual(this.s) || 
        // TODO(b/64130202): Somehow support foreign references.
        f("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.s.projectId + "/" + this.s.database + ") instead."), 
        this.ad(r);
    }, t;
}(), ds = ni.uh, ys = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new D(x.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else gi("settings", "non-empty string", "host", t.host), this.host = t.host, mi("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (Ni("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        mi("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        mi("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), mi("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? f("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && f("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        mi("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ni._h; else {
            if (t.cacheSizeBytes !== ds && t.cacheSizeBytes < ni.lh) throw new D(x.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ni.lh);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        mi("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), vs = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(n, r, i) {
        var o = this;
        if (void 0 === i && (i = new as), this.Ed = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Id = new Jr, this.INTERNAL = {
            delete: function() {
                return e.__awaiter(o, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.md(), [ 4 /*yield*/ , this.Ad.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var s = n;
            this.Ed = s, this.Va = t.Rd(s), this.Pd = s.name, this.Vd = new vo(r);
        } else {
            var u = n;
            if (!u.projectId) throw new D(x.INVALID_ARGUMENT, "Must provide projectId");
            this.Va = new I(u.projectId, u.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.Pd = "[DEFAULT]", this.Vd = new yo;
        }
        this.gd = i, this.yd = new ys({});
    }
    return Object.defineProperty(t.prototype, "pd", {
        get: function() {
            return this.bd || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.bd = new Zi(this.Va, this.yd.ignoreUndefinedProperties)), this.bd;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.settings = function(t) {
        li("Firestore.settings", arguments, 1), yi("Firestore.settings", "object", 1, t);
        var e = new ys(t);
        if (this.Ad && !this.yd.isEqual(e)) throw new D(x.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.yd = e, void 0 !== e.credentials && (this.Vd = function(t) {
            if (!t) return new yo;
            switch (t.type) {
              case "gapi":
                var e = t.vd;
                // Make sure this really is a Gapi client.
                                return d(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new mo(e, t.za || "0");

              case "provider":
                return t.vd;

              default:
                throw new D(x.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.md(), this.Ad.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.md(), this.Ad.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.Ad) throw new D(x.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && f("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new D(x.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Sd(this.gd, {
            Hf: !0,
            cacheSizeBytes: this.yd.cacheSizeBytes,
            synchronizeTabs: r,
            qi: i
        });
    }, t.prototype.clearPersistence = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(r) {
                if (void 0 !== this.Ad && !this.Ad.ed) throw new D(x.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                return t = new Ln, [ 2 /*return*/ , (this.Id.Mo((function() {
                    return e.__awaiter(n, void 0, void 0, (function() {
                        var n;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.gd.clearPersistence(this.Va, this.Pd) ];

                              case 1:
                                return e.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return n = e.sent(), t.reject(n), [ 3 /*break*/ , 3 ];

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
    }, Object.defineProperty(t.prototype, "Dd", {
        get: function() {
            return this.md(), this.Ad.ed;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.md(), this.Ad.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.md(), ls(t)) return gs(this.Ad, t);
        yi("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return gs(this.Ad, e);
    }, t.prototype.md = function() {
        return this.Ad || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Sd(new as, {
            Hf: !1
        }), this.Ad;
    }, t.prototype.Cd = function() {
        return new b(this.Va, this.Pd, this.yd.host, this.yd.ssl, this.yd.forceLongPolling);
    }, t.prototype.Sd = function(t, e) {
        var n = this.Cd();
        return this.Ad = new hs(this.Vd, this.Id), this.Ad.start(n, t, e);
    }, t.Rd = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new D(x.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
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
 */        if (!n || "string" != typeof n) throw new D(x.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new I(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.Ed) throw new D(x.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Ed;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return li("Firestore.collection", arguments, 1), yi("Firestore.collection", "non-empty string", 1, t), 
        this.md(), new Ss(L.$(t), this, 
        /* converter= */ null);
    }, t.prototype.doc = function(t) {
        return li("Firestore.doc", arguments, 1), yi("Firestore.doc", "non-empty string", 1, t), 
        this.md(), _s.Fd(L.$(t), this, 
        /* converter= */ null);
    }, t.prototype.collectionGroup = function(t) {
        if (li("Firestore.collectionGroup", arguments, 1), yi("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.md(), new As(new rn(L.k(), t), this, 
        /* converter= */ null);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return li("Firestore.runTransaction", arguments, 1), yi("Firestore.runTransaction", "function", 1, t), 
        this.md().transaction((function(n) {
            return t(new ms(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.md(), new ws(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (c()) {
              case r.LogLevel.DEBUG:
                return "debug";

              case r.LogLevel.ERROR:
                return "error";

              case r.LogLevel.SILENT:
                return "silent";

              case r.LogLevel.WARN:
                return "warn";

              case r.LogLevel.INFO:
                return "info";

              case r.LogLevel.VERBOSE:
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
        li("Firestore.setLogLevel", arguments, 1), _i("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, a.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Nd = function() {
        return this.yd.timestampsInSnapshots;
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
/** Registers the listener for onSnapshotsInSync() */ function gs(t, e) {
    var n = new fs({
        next: function() {
            e.next && e.next();
        },
        error: function(t) {
            throw p();
        }
    });
    return t.q_(n), function() {
        n.od(), t.U_(n);
    }
    /**
 * A reference to a transaction.
 */;
}

var ms = /** @class */ function() {
    function t(t, e) {
        this.$d = t, this.kd = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        li("Transaction.get", arguments, 1);
        var n = Os("Transaction.get", t, this.$d);
        return this.kd.ku([ n.ga ]).then((function(t) {
            if (!t || 1 !== t.length) return p();
            var r = t[0];
            if (r instanceof en) return new Es(e.$d, n.ga, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.ya);
            if (r instanceof tn) return new Es(e.$d, n.ga, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.ya);
            throw p();
        }));
    }, t.prototype.set = function(t, e, n) {
        di("Transaction.set", arguments, 2, 3);
        var r = Os("Transaction.set", t, this.$d);
        n = ks("Transaction.set", n);
        var i = Vs(r.ya, e, n), o = to(this.$d.pd, "Transaction.set", r.ga, i, null !== r.ya, n);
        return this.kd.set(r.ga, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof Ri ? (pi("Transaction.update", arguments, 3), 
        r = Os("Transaction.update", t, this.$d), i = no(this.$d.pd, "Transaction.update", r.ga, e, n, o)) : (li("Transaction.update", arguments, 2), 
        r = Os("Transaction.update", t, this.$d), i = eo(this.$d.pd, "Transaction.update", r.ga, e)), 
        this.kd.update(r.ga, i), this;
    }, t.prototype.delete = function(t) {
        li("Transaction.delete", arguments, 1);
        var e = Os("Transaction.delete", t, this.$d);
        return this.kd.delete(e.ga), this;
    }, t;
}(), ws = /** @class */ function() {
    function t(t) {
        this.$d = t, this.xd = [], this.Md = !1;
    }
    return t.prototype.set = function(t, e, n) {
        di("WriteBatch.set", arguments, 2, 3), this.Od();
        var r = Os("WriteBatch.set", t, this.$d);
        n = ks("WriteBatch.set", n);
        var i = Vs(r.ya, e, n), o = to(this.$d.pd, "WriteBatch.set", r.ga, i, null !== r.ya, n);
        return this.xd = this.xd.concat(o.pa(r.ga, Re.Qe())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.Od(), "string" == typeof e || e instanceof Ri ? (pi("WriteBatch.update", arguments, 3), 
        r = Os("WriteBatch.update", t, this.$d), i = no(this.$d.pd, "WriteBatch.update", r.ga, e, n, o)) : (li("WriteBatch.update", arguments, 2), 
        r = Os("WriteBatch.update", t, this.$d), i = eo(this.$d.pd, "WriteBatch.update", r.ga, e)), 
        this.xd = this.xd.concat(i.pa(r.ga, Re.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        li("WriteBatch.delete", arguments, 1), this.Od();
        var e = Os("WriteBatch.delete", t, this.$d);
        return this.xd = this.xd.concat(new Ke(e.ga, Re.Qe())), this;
    }, t.prototype.commit = function() {
        return this.Od(), this.Md = !0, this.xd.length > 0 ? this.$d.md().write(this.xd) : Promise.resolve();
    }, t.prototype.Od = function() {
        if (this.Md) throw new D(x.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), _s = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, n.Va, e, r) || this).ga = e, i.firestore = n, i.ya = r, 
        i.Ad = i.firestore.md(), i;
    }
    return e.__extends(n, t), n.Fd = function(t, e, r) {
        if (t.length % 2 != 0) throw new D(x.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.N() + " has " + t.length);
        return new n(new V(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.ga.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new Ss(this.ga.path.p(), this.firestore, this.ya);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.ga.path.N();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (li("DocumentReference.collection", arguments, 1), yi("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new D(x.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = L.$(t);
        return new Ss(this.ga.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw Ai("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.ga.isEqual(t.ga) && this.ya === t.ya;
    }, n.prototype.set = function(t, e) {
        di("DocumentReference.set", arguments, 1, 2), e = ks("DocumentReference.set", e);
        var n = Vs(this.ya, t, e), r = to(this.firestore.pd, "DocumentReference.set", this.ga, n, null !== this.ya, e);
        return this.Ad.write(r.pa(this.ga, Re.Qe()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof Ri ? (pi("DocumentReference.update", arguments, 2), 
        n = no(this.firestore.pd, "DocumentReference.update", this.ga, t, e, r)) : (li("DocumentReference.update", arguments, 1), 
        n = eo(this.firestore.pd, "DocumentReference.update", this.ga, t)), this.Ad.write(n.pa(this.ga, Re.exists(!0)));
    }, n.prototype.delete = function() {
        return li("DocumentReference.delete", arguments, 0), this.Ad.write([ new Ke(this.ga, Re.Qe()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        di("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
            includeMetadataChanges: !1
        }, u = 0;
        "object" != typeof i[u] || ls(i[u]) || (Ni("DocumentReference.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        mi("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++);
        var a = {
            includeMetadataChanges: s.includeMetadataChanges
        };
        if (ls(i[u])) {
            var c = i[u];
            i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), 
            i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else yi("DocumentReference.onSnapshot", "function", u, i[u]), vi("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), 
        vi("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
        var h = {
            next: function(t) {
                i[u] && i[u](r.Ld(t));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return bs(this.Ad, this.ga, a, h);
    }, n.prototype.get = function(t) {
        var e = this;
        return di("DocumentReference.get", arguments, 0, 1), Ls("DocumentReference.get", t), 
        t && "cache" === t.source ? this.firestore.md().nd(this.ga).then((function(t) {
            return new Es(e.firestore, e.ga, t, 
            /*fromCache=*/ !0, t instanceof tn && t.Ge, e.ya);
        })) : 
        /**
         * Retrieves a latency-compensated document from the backend via a
         * SnapshotListener.
         */
        function(t, e, n) {
            var r = new Ln, i = bs(t, e, {
                includeMetadataChanges: !0,
                H_: !0
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
                    r.reject(new D(x.UNAVAILABLE, "Failed to get document because the client is offline.")) : o && t.fromCache && n && "server" === n.source ? r.reject(new D(x.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : r.resolve(t);
                },
                error: function(t) {
                    return r.reject(t);
                }
            });
            return r.promise;
        }(this.Ad, this.ga, t).then((function(t) {
            return e.Ld(t);
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.ga, this.firestore, t);
    }, 
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n.prototype.Ld = function(t) {
        var e = t.docs.get(this.ga);
        return new Es(this.firestore, this.ga, e, t.fromCache, t.hasPendingWrites, this.ya);
    }, n;
}(Ki);

/** Registers an internal snapshot listener for `ref`. */ function bs(t, e, n, r) {
    var i = function(t) {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    r.error && (i = r.error.bind(r));
    var o = new fs({
        next: function(t) {
            r.next && r.next(t);
        },
        error: i
    }), s = t.listen(rn.hn(e.path), o, n);
    return function() {
        o.od(), t.mc(s);
    };
}

var Is = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Es = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.$d = t, this.ga = e, this.Bd = n, this.qd = r, this.Ud = i, this.ya = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (di("DocumentSnapshot.data", arguments, 0, 1), t = Ps("DocumentSnapshot.data", t), 
        this.Bd) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.ya) {
                var n = new Ts(this.$d, this.ga, this.Bd, this.qd, this.Ud, 
                /* converter= */ null);
                return this.ya.fromFirestore(n, t);
            }
            return new ps(this.$d.Va, this.$d.Nd(), t.serverTimestamps || "none", (function(t) {
                return new _s(t, e.$d, /* converter= */ null);
            })).ud(this.Bd.tn());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (di("DocumentSnapshot.get", arguments, 1, 2), e = Ps("DocumentSnapshot.get", e), 
        this.Bd) {
            var r = this.Bd.data().field(ao("DocumentSnapshot.get", t, this.ga));
            if (null !== r) return new ps(this.$d.Va, this.$d.Nd(), e.serverTimestamps || "none", (function(t) {
                return new _s(t, n.$d, n.ya);
            })).ud(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.ga.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new _s(this.ga, this.$d, this.ya);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.Bd;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Is(this.Ud, this.qd);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw Ai("isEqual", "DocumentSnapshot", 1, e);
        return this.$d === e.$d && this.qd === e.qd && this.ga.isEqual(e.ga) && (null === this.Bd ? null === e.Bd : this.Bd.isEqual(e.Bd)) && this.ya === e.ya;
    }, t;
}(), Ts = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.data = function(e) {
        return t.prototype.data.call(this, e);
    }, n;
}(Es);

/** The query class that is shared between the full, lite and legacy SDK. */ function Ns(t) {
    if (t.mn() && 0 === t.en.length) throw new D(x.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var As = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, n.Va, n.pd, e) || this).Qd = e, i.firestore = n, i.ya = r, 
        i;
    }
    return e.__extends(n, t), n.prototype.where = function(t, e, r) {
        li("Query.where", arguments, 3), Ti("Query.where", 3, r);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var i = _i("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, e), o = ao("Query.where", t), s = this.Wd(o, i, r);
        return new n(this.Qd.cn(s), this.firestore, this.ya);
    }, n.prototype.orderBy = function(t, e) {
        var r;
        if (di("Query.orderBy", arguments, 1, 2), vi("Query.orderBy", "non-empty string", 2, e), 
        void 0 === e || "asc" === e) r = "asc" /* ASCENDING */; else {
            if ("desc" !== e) throw new D(x.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        var i = ao("Query.orderBy", t), o = this.zd(i, r);
        return new n(this.Qd.ln(o), this.firestore, this.ya);
    }, n.prototype.limit = function(t) {
        return li("Query.limit", arguments, 1), yi("Query.limit", "number", 1, t), xi("Query.limit", 1, t), 
        new n(this.Qd._n(t), this.firestore, this.ya);
    }, n.prototype.limitToLast = function(t) {
        return li("Query.limitToLast", arguments, 1), yi("Query.limitToLast", "number", 1, t), 
        xi("Query.limitToLast", 1, t), new n(this.Qd.fn(t), this.firestore, this.ya);
    }, n.prototype.startAt = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        pi("Query.startAt", arguments, 1);
        var i = this.Zd("Query.startAt", t, e, 
        /*before=*/ !0);
        return new n(this.Qd.dn(i), this.firestore, this.ya);
    }, n.prototype.startAfter = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        pi("Query.startAfter", arguments, 1);
        var i = this.Zd("Query.startAfter", t, e, 
        /*before=*/ !1);
        return new n(this.Qd.dn(i), this.firestore, this.ya);
    }, n.prototype.endBefore = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        pi("Query.endBefore", arguments, 1);
        var i = this.Zd("Query.endBefore", t, e, 
        /*before=*/ !0);
        return new n(this.Qd.wn(i), this.firestore, this.ya);
    }, n.prototype.endAt = function(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        pi("Query.endAt", arguments, 1);
        var i = this.Zd("Query.endAt", t, e, 
        /*before=*/ !1);
        return new n(this.Qd.wn(i), this.firestore, this.ya);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw Ai("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && on(this.Qd, t.Qd) && this.ya === t.ya;
    }, n.prototype.withConverter = function(t) {
        return new n(this.Qd, this.firestore, t);
    }, 
    /** Helper function to create a bound from a document or fields */ n.prototype.Zd = function(t, n, r, i) {
        if (Ti(t, 1, n), n instanceof Es) return li(t, e.__spreadArrays([ n ], r), 1), this.Yd(t, n.Bd, i);
        var o = [ n ].concat(r);
        return this.Jd(t, o, i);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        di("Query.onSnapshot", arguments, 1, 4);
        var s = {}, u = 0;
        if ("object" != typeof i[u] || ls(i[u]) || (Ni("Query.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        mi("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++), ls(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), 
            i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else yi("Query.onSnapshot", "function", u, i[u]), vi("Query.onSnapshot", "function", u + 1, i[u + 1]), 
        vi("Query.onSnapshot", "function", u + 2, i[u + 2]);
        var c = {
            next: function(t) {
                i[u] && i[u](new Ds(r.firestore, r.Qd, t, r.ya));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return Ns(this.Qd), xs(this.firestore.md(), this.Qd, s, c);
    }, n.prototype.get = function(t) {
        var e = this;
        di("Query.get", arguments, 0, 1), Ls("Query.get", t), Ns(this.Qd);
        var n = this.firestore.md();
        return (t && "cache" === t.source ? n.sd(this.Qd) : 
        /**
     * Retrieves a latency-compensated query snapshot from the backend via a
     * SnapshotListener.
     */
        function(t, e, n) {
            var r = new Ln, i = xs(t, e, {
                includeMetadataChanges: !0,
                H_: !0
            }, {
                next: function(t) {
                    // Remove query first before passing event to user to avoid
                    // user actions affecting the now stale query.
                    i(), t.fromCache && n && "server" === n.source ? r.reject(new D(x.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : r.resolve(t);
                },
                error: function(t) {
                    return r.reject(t);
                }
            });
            return r.promise;
        }(n, this.Qd, t)).then((function(t) {
            return new Ds(e.firestore, e.Qd, t, e.ya);
        }));
    }, n;
}(/** @class */ function() {
    function t(t, e, n) {
        this.Va = t, this.pd = e, this.Qd = n;
    }
    return t.prototype.Wd = function(t, e, n) {
        var r;
        if (t.O()) {
            if ("array-contains" /* ARRAY_CONTAINS */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) throw new D(x.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + e + "' queries on FieldPath.documentId().");
            if ("in" /* IN */ === e) {
                this.jd(n, e);
                for (var i = [], o = 0, s = n; o < s.length; o++) {
                    var u = s[o];
                    i.push(this.Kd(u));
                }
                r = {
                    arrayValue: {
                        values: i
                    }
                };
            } else r = this.Kd(n);
        } else "in" /* IN */ !== e && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== e || this.jd(n, e), 
        r = ro(this.pd, "Query.where", n, "in" /* IN */ === e);
        var a = hn.create(t, e, r);
        return this.Gd(a), a;
    }, t.prototype.zd = function(t, e) {
        if (null !== this.Qd.startAt) throw new D(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.Qd.endAt) throw new D(x.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var n = new _n(t, e);
        return this.Hd(n), n;
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
    t.prototype.Yd = function(t, e, n) {
        if (!e) throw new D(x.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var r = [], i = 0, o = this.Qd.orderBy; i < o.length; i++) {
            var s = o[i];
            if (s.field.O()) r.push(Ut(this.Va, e.key)); else {
                var u = e.field(s.field);
                if (Tt(u)) throw new D(x.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === u) {
                    var a = s.field.N();
                    throw new D(x.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + a + "' (used as the orderBy) does not exist.");
                }
                r.push(u);
            }
        }
        return new vn(r, n);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Jd = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.Qd.en;
        if (e.length > r.length) throw new D(x.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.O()) {
                if ("string" != typeof s) throw new D(x.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.Qd.Vn() && -1 !== s.indexOf("/")) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.Qd.path.child(L.$(s));
                if (!V.W(u)) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new V(u);
                i.push(Ut(this.Va, a));
            } else {
                var c = ro(this.pd, t, s);
                i.push(c);
            }
        }
        return new vn(i, n);
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.Kd = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.Qd.Vn() && -1 !== t.indexOf("/")) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.Qd.path.child(L.$(t));
            if (!V.W(e)) throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return Ut(this.Va, new V(e));
        }
        if (t instanceof Ki) return Ut(this.Va, t.ga);
        throw new D(x.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Ei(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.jd = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new D(x.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new D(x.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.Gd = function(t) {
        if (t instanceof hn) {
            var e = [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], n = [ "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.An()) {
                var o = this.Qd.an();
                if (null !== o && !o.isEqual(t.field)) throw new D(x.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.Qd.un();
                null !== s && this.Xd(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.Qd.Rn(n)), null === u && r && (u = this.Qd.Rn(e)), null !== u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new D(x.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new D(x.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.Hd = function(t) {
        if (null === this.Qd.un()) {
            // This is the first order by. It must match any inequality.
            var e = this.Qd.an();
            null !== e && this.Xd(e, t.field);
        }
    }, t.prototype.Xd = function(t, e) {
        if (!e.isEqual(t)) throw new D(x.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}());

function xs(t, e, n, r) {
    var i = function(t) {
        console.error("Uncaught Error in onSnapshot:", t);
    };
    r.error && (i = r.error.bind(r));
    var o = new fs({
        next: function(t) {
            r.next && r.next(t);
        },
        error: i
    }), s = t.listen(e, o, n);
    return function() {
        o.od(), t.mc(s);
    };
}

var Ds = /** @class */ function() {
    function t(t, e, n, r) {
        this.$d = t, this.tw = e, this.ew = n, this.ya = r, this.nw = null, this.sw = null, 
        this.metadata = new Is(n.hasPendingWrites, n.fromCache);
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
            return this.ew.docs._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.ew.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        di("QuerySnapshot.forEach", arguments, 1, 2), yi("QuerySnapshot.forEach", "function", 1, t), 
        this.ew.docs.forEach((function(r) {
            t.call(e, n.iw(r, n.metadata.fromCache, n.ew.Lt.has(r.key)));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new As(this.tw, this.$d, this.ya);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (Ni("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), mi("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.ew.qt) throw new D(x.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.nw && this.sw === e || (this.nw = 
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
            if (t.Ot._()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r = 0;
                return t.docChanges.map((function(e) {
                    var i = n(e.doc, t.fromCache, t.Lt.has(e.doc.key));
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
            var i = t.Ot;
            return t.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var r = n(e.doc, t.fromCache, t.Lt.has(e.doc.key)), o = -1, s = -1;
                return 0 /* Added */ !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                    type: Rs(e.type),
                    doc: r,
                    oldIndex: o,
                    newIndex: s
                };
            }));
        }(this.ew, e, this.iw.bind(this)), this.sw = e), this.nw;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw Ai("isEqual", "QuerySnapshot", 1, e);
        return this.$d === e.$d && on(this.tw, e.tw) && this.ew.isEqual(e.ew) && this.ya === e.ya;
    }, t.prototype.iw = function(t, e, n) {
        return new Ts(this.$d, t.key, t, e, n, this.ya);
    }, t;
}(), Ss = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        if ((i = t.call(this, rn.hn(e), n, r) || this).rw = e, e.length % 2 != 1) throw new D(x.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.N() + " has " + e.length);
        return i;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Qd.path.S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Qd.path.p();
            return t._() ? null : new _s(new V(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Qd.path.N();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        di("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = g.t()), yi("CollectionReference.doc", "non-empty string", 1, t);
        var e = L.$(t);
        return _s.Fd(this.Qd.path.child(e), this.firestore, this.ya);
    }, n.prototype.add = function(t) {
        li("CollectionReference.add", arguments, 1), yi("CollectionReference.add", "object", 1, this.ya ? this.ya.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.rw, this.firestore, t);
    }, n;
}(As);

function ks(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (Ni(t, e, [ "merge", "mergeFields" ]), mi(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + Ei(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new D(x.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + Ei(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof Ri;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new D(x.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function Ps(t, e) {
    return void 0 === e ? {} : (Ni(t, e, [ "serverTimestamps" ]), wi(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Ls(t, e) {
    vi(t, "object", 1, e), e && (Ni(t, e, [ "source" ]), wi(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Os(t, e, n) {
    if (e instanceof Ki) {
        if (e.firestore !== n) throw new D(x.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw Ai(t, "DocumentReference", 1, e);
}

function Rs(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return p();
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
 */ function Vs(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var Us = {
    Firestore: vs,
    GeoPoint: Qi,
    Timestamp: S,
    Blob: Li,
    Transaction: ms,
    WriteBatch: ws,
    DocumentReference: _s,
    DocumentSnapshot: Es,
    Query: As,
    QueryDocumentSnapshot: Ts,
    QuerySnapshot: Ds,
    CollectionReference: Ss,
    FieldPath: Ri,
    FieldValue: Bi,
    setLogLevel: vs.setLogLevel,
    CACHE_SIZE_UNLIMITED: ds
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
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */ function Cs(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new s.Component("firestore", (function(t) {
            return function(t, e) {
                return new vs(t, e, new cs);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, Us)));
    }(t), t.registerVersion("@firebase/firestore", "1.16.1");
}

Cs(n), exports.__PRIVATE_registerFirestore = Cs;
//# sourceMappingURL=index.cjs.js.map
