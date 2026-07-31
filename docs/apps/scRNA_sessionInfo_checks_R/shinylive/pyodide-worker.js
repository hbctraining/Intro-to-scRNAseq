// Shinylive 0.10.8
// Copyright 2026 Posit, PBC
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b3) => (typeof require !== "undefined" ? require : a)[b3]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/ws/browser.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// src/awaitable-queue.ts
var AwaitableQueue = class {
  constructor() {
    this._buffer = [];
    this._resolve = null;
    this._promise = null;
    this._notifyAll();
  }
  async _wait() {
    await this._promise;
  }
  _notifyAll() {
    if (this._resolve) {
      this._resolve();
    }
    this._promise = new Promise((resolve) => this._resolve = resolve);
  }
  async dequeue() {
    while (this._buffer.length === 0) {
      await this._wait();
    }
    return this._buffer.shift();
  }
  enqueue(x2) {
    this._buffer.push(x2);
    this._notifyAll();
  }
};

// src/utils.ts
function uint8ArrayToString(buf) {
  let result = "";
  for (let i2 = 0; i2 < buf.length; i2++) {
    result += String.fromCharCode(buf[i2]);
  }
  return result;
}

// node_modules/webr/dist/webr.mjs
var Rs = Object.create;
var gr = Object.defineProperty;
var gs = Object.getOwnPropertyDescriptor;
var bs = Object.getOwnPropertyNames;
var ws = Object.getPrototypeOf;
var xs = Object.prototype.hasOwnProperty;
var br = (r5) => {
  throw TypeError(r5);
};
var ee = ((r5) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(r5, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : r5)(function(r5) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + r5 + '" is not supported');
});
var T = (r5, e) => () => (e || r5((e = { exports: {} }).exports, e), e.exports);
var Es = (r5, e, t, s2) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of bs(e)) !xs.call(r5, n) && n !== t && gr(r5, n, { get: () => e[n], enumerable: !(s2 = gs(e, n)) || s2.enumerable });
  return r5;
};
var be = (r5, e, t) => (t = r5 != null ? Rs(ws(r5)) : {}, Es(e || !r5 || !r5.__esModule ? gr(t, "default", { value: r5, enumerable: true }) : t, r5));
var qt = (r5, e, t) => e.has(r5) || br("Cannot " + t);
var i = (r5, e, t) => (qt(r5, e, "read from private field"), t ? t.call(r5) : e.get(r5));
var p = (r5, e, t) => e.has(r5) ? br("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r5) : e.set(r5, t);
var M = (r5, e, t) => (qt(r5, e, "access private method"), t);
var De = T((I2) => {
  "use strict";
  Object.defineProperty(I2, "__esModule", { value: true });
  I2.getUint64 = I2.getInt64 = I2.setInt64 = I2.setUint64 = I2.UINT32_MAX = void 0;
  I2.UINT32_MAX = 4294967295;
  function ks(r5, e, t) {
    let s2 = t / 4294967296, n = t;
    r5.setUint32(e, s2), r5.setUint32(e + 4, n);
  }
  I2.setUint64 = ks;
  function Ms(r5, e, t) {
    let s2 = Math.floor(t / 4294967296), n = t;
    r5.setUint32(e, s2), r5.setUint32(e + 4, n);
  }
  I2.setInt64 = Ms;
  function Ws(r5, e) {
    let t = r5.getInt32(e), s2 = r5.getUint32(e + 4);
    return t * 4294967296 + s2;
  }
  I2.getInt64 = Ws;
  function Ds(r5, e) {
    let t = r5.getUint32(e), s2 = r5.getUint32(e + 4);
    return t * 4294967296 + s2;
  }
  I2.getUint64 = Ds;
});
var ft = T((_2) => {
  "use strict";
  var $t, Xt, Kt;
  Object.defineProperty(_2, "__esModule", { value: true });
  _2.utf8DecodeTD = _2.TEXT_DECODER_THRESHOLD = _2.utf8DecodeJs = _2.utf8EncodeTE = _2.TEXT_ENCODER_THRESHOLD = _2.utf8EncodeJs = _2.utf8Count = void 0;
  var Ar = De(), yt = (typeof process > "u" || (($t = process == null ? void 0 : process.env) === null || $t === void 0 ? void 0 : $t.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
  function As(r5) {
    let e = r5.length, t = 0, s2 = 0;
    for (; s2 < e; ) {
      let n = r5.charCodeAt(s2++);
      if ((n & 4294967168) === 0) {
        t++;
        continue;
      } else if ((n & 4294965248) === 0) t += 2;
      else {
        if (n >= 55296 && n <= 56319 && s2 < e) {
          let o = r5.charCodeAt(s2);
          (o & 64512) === 56320 && (++s2, n = ((n & 1023) << 10) + (o & 1023) + 65536);
        }
        (n & 4294901760) === 0 ? t += 3 : t += 4;
      }
    }
    return t;
  }
  _2.utf8Count = As;
  function Os(r5, e, t) {
    let s2 = r5.length, n = t, o = 0;
    for (; o < s2; ) {
      let a = r5.charCodeAt(o++);
      if ((a & 4294967168) === 0) {
        e[n++] = a;
        continue;
      } else if ((a & 4294965248) === 0) e[n++] = a >> 6 & 31 | 192;
      else {
        if (a >= 55296 && a <= 56319 && o < s2) {
          let c = r5.charCodeAt(o);
          (c & 64512) === 56320 && (++o, a = ((a & 1023) << 10) + (c & 1023) + 65536);
        }
        (a & 4294901760) === 0 ? (e[n++] = a >> 12 & 15 | 224, e[n++] = a >> 6 & 63 | 128) : (e[n++] = a >> 18 & 7 | 240, e[n++] = a >> 12 & 63 | 128, e[n++] = a >> 6 & 63 | 128);
      }
      e[n++] = a & 63 | 128;
    }
  }
  _2.utf8EncodeJs = Os;
  var Ae = yt ? new TextEncoder() : void 0;
  _2.TEXT_ENCODER_THRESHOLD = yt ? typeof process < "u" && ((Xt = process == null ? void 0 : process.env) === null || Xt === void 0 ? void 0 : Xt.TEXT_ENCODING) !== "force" ? 200 : 0 : Ar.UINT32_MAX;
  function Cs(r5, e, t) {
    e.set(Ae.encode(r5), t);
  }
  function Is(r5, e, t) {
    Ae.encodeInto(r5, e.subarray(t));
  }
  _2.utf8EncodeTE = Ae != null && Ae.encodeInto ? Is : Cs;
  var Us = 4096;
  function Ns(r5, e, t) {
    let s2 = e, n = s2 + t, o = [], a = "";
    for (; s2 < n; ) {
      let c = r5[s2++];
      if ((c & 128) === 0) o.push(c);
      else if ((c & 224) === 192) {
        let u = r5[s2++] & 63;
        o.push((c & 31) << 6 | u);
      } else if ((c & 240) === 224) {
        let u = r5[s2++] & 63, k2 = r5[s2++] & 63;
        o.push((c & 31) << 12 | u << 6 | k2);
      } else if ((c & 248) === 240) {
        let u = r5[s2++] & 63, k2 = r5[s2++] & 63, g2 = r5[s2++] & 63, H2 = (c & 7) << 18 | u << 12 | k2 << 6 | g2;
        H2 > 65535 && (H2 -= 65536, o.push(H2 >>> 10 & 1023 | 55296), H2 = 56320 | H2 & 1023), o.push(H2);
      } else o.push(c);
      o.length >= Us && (a += String.fromCharCode(...o), o.length = 0);
    }
    return o.length > 0 && (a += String.fromCharCode(...o)), a;
  }
  _2.utf8DecodeJs = Ns;
  var js = yt ? new TextDecoder() : null;
  _2.TEXT_DECODER_THRESHOLD = yt ? typeof process < "u" && ((Kt = process == null ? void 0 : process.env) === null || Kt === void 0 ? void 0 : Kt.TEXT_DECODER) !== "force" ? 200 : 0 : Ar.UINT32_MAX;
  function Bs(r5, e, t) {
    let s2 = r5.subarray(e, e + t);
    return js.decode(s2);
  }
  _2.utf8DecodeTD = Bs;
});
var Yt = T((mt) => {
  "use strict";
  Object.defineProperty(mt, "__esModule", { value: true });
  mt.ExtData = void 0;
  var Qt = class {
    constructor(e, t) {
      this.type = e, this.data = t;
    }
  };
  mt.ExtData = Qt;
});
var gt = T((Rt) => {
  "use strict";
  Object.defineProperty(Rt, "__esModule", { value: true });
  Rt.DecodeError = void 0;
  var Zt = class r5 extends Error {
    constructor(e) {
      super(e);
      let t = Object.create(r5.prototype);
      Object.setPrototypeOf(this, t), Object.defineProperty(this, "name", { configurable: true, enumerable: false, value: r5.name });
    }
  };
  Rt.DecodeError = Zt;
});
var er = T((P2) => {
  "use strict";
  Object.defineProperty(P2, "__esModule", { value: true });
  P2.timestampExtension = P2.decodeTimestampExtension = P2.decodeTimestampToTimeSpec = P2.encodeTimestampExtension = P2.encodeDateToTimeSpec = P2.encodeTimeSpecToTimestamp = P2.EXT_TIMESTAMP = void 0;
  var Ls = gt(), Or = De();
  P2.EXT_TIMESTAMP = -1;
  var Fs = 4294967296 - 1, qs = 17179869184 - 1;
  function Cr({ sec: r5, nsec: e }) {
    if (r5 >= 0 && e >= 0 && r5 <= qs) if (e === 0 && r5 <= Fs) {
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, r5), t;
    } else {
      let t = r5 / 4294967296, s2 = r5 & 4294967295, n = new Uint8Array(8), o = new DataView(n.buffer);
      return o.setUint32(0, e << 2 | t & 3), o.setUint32(4, s2), n;
    }
    else {
      let t = new Uint8Array(12), s2 = new DataView(t.buffer);
      return s2.setUint32(0, e), (0, Or.setInt64)(s2, 4, r5), t;
    }
  }
  P2.encodeTimeSpecToTimestamp = Cr;
  function Ir(r5) {
    let e = r5.getTime(), t = Math.floor(e / 1e3), s2 = (e - t * 1e3) * 1e6, n = Math.floor(s2 / 1e9);
    return { sec: t + n, nsec: s2 - n * 1e9 };
  }
  P2.encodeDateToTimeSpec = Ir;
  function Ur(r5) {
    if (r5 instanceof Date) {
      let e = Ir(r5);
      return Cr(e);
    } else return null;
  }
  P2.encodeTimestampExtension = Ur;
  function Nr(r5) {
    let e = new DataView(r5.buffer, r5.byteOffset, r5.byteLength);
    switch (r5.byteLength) {
      case 4:
        return { sec: e.getUint32(0), nsec: 0 };
      case 8: {
        let t = e.getUint32(0), s2 = e.getUint32(4), n = (t & 3) * 4294967296 + s2, o = t >>> 2;
        return { sec: n, nsec: o };
      }
      case 12: {
        let t = (0, Or.getInt64)(e, 4), s2 = e.getUint32(0);
        return { sec: t, nsec: s2 };
      }
      default:
        throw new Ls.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${r5.length}`);
    }
  }
  P2.decodeTimestampToTimeSpec = Nr;
  function jr(r5) {
    let e = Nr(r5);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  P2.decodeTimestampExtension = jr;
  P2.timestampExtension = { type: P2.EXT_TIMESTAMP, encode: Ur, decode: jr };
});
var xt = T((wt) => {
  "use strict";
  Object.defineProperty(wt, "__esModule", { value: true });
  wt.ExtensionCodec = void 0;
  var bt = Yt(), Vs = er(), Oe = class {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(Vs.timestampExtension);
    }
    register({ type: e, encode: t, decode: s2 }) {
      if (e >= 0) this.encoders[e] = t, this.decoders[e] = s2;
      else {
        let n = 1 + e;
        this.builtInEncoders[n] = t, this.builtInDecoders[n] = s2;
      }
    }
    tryToEncode(e, t) {
      for (let s2 = 0; s2 < this.builtInEncoders.length; s2++) {
        let n = this.builtInEncoders[s2];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = -1 - s2;
            return new bt.ExtData(a, o);
          }
        }
      }
      for (let s2 = 0; s2 < this.encoders.length; s2++) {
        let n = this.encoders[s2];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = s2;
            return new bt.ExtData(a, o);
          }
        }
      }
      return e instanceof bt.ExtData ? e : null;
    }
    decode(e, t, s2) {
      let n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return n ? n(e, t, s2) : new bt.ExtData(t, e);
    }
  };
  wt.ExtensionCodec = Oe;
  Oe.defaultCodec = new Oe();
});
var tr = T((de2) => {
  "use strict";
  Object.defineProperty(de2, "__esModule", { value: true });
  de2.createDataView = de2.ensureUint8Array = void 0;
  function Br(r5) {
    return r5 instanceof Uint8Array ? r5 : ArrayBuffer.isView(r5) ? new Uint8Array(r5.buffer, r5.byteOffset, r5.byteLength) : r5 instanceof ArrayBuffer ? new Uint8Array(r5) : Uint8Array.from(r5);
  }
  de2.ensureUint8Array = Br;
  function Js(r5) {
    if (r5 instanceof ArrayBuffer) return new DataView(r5);
    let e = Br(r5);
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  de2.createDataView = Js;
});
var sr = T((B2) => {
  "use strict";
  Object.defineProperty(B2, "__esModule", { value: true });
  B2.Encoder = B2.DEFAULT_INITIAL_BUFFER_SIZE = B2.DEFAULT_MAX_DEPTH = void 0;
  var Ce = ft(), Hs = xt(), Lr = De(), zs = tr();
  B2.DEFAULT_MAX_DEPTH = 100;
  B2.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var rr = class {
    constructor(e = Hs.ExtensionCodec.defaultCodec, t = void 0, s2 = B2.DEFAULT_MAX_DEPTH, n = B2.DEFAULT_INITIAL_BUFFER_SIZE, o = false, a = false, c = false, u = false) {
      this.extensionCodec = e, this.context = t, this.maxDepth = s2, this.initialBufferSize = n, this.sortKeys = o, this.forceFloat32 = a, this.ignoreUndefined = c, this.forceIntegerToFloat = u, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.subarray(0, this.pos);
    }
    encode(e) {
      return this.reinitializeState(), this.doEncode(e, 1), this.bytes.slice(0, this.pos);
    }
    doEncode(e, t) {
      if (t > this.maxDepth) throw new Error(`Too deep objects in depth ${t}`);
      e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.encodeObject(e, t);
    }
    ensureBufferSizeToWrite(e) {
      let t = this.pos + e;
      this.view.byteLength < t && this.resizeBuffer(t * 2);
    }
    resizeBuffer(e) {
      let t = new ArrayBuffer(e), s2 = new Uint8Array(t), n = new DataView(t);
      s2.set(this.bytes), this.view = n, this.bytes = s2;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      e === false ? this.writeU8(194) : this.writeU8(195);
    }
    encodeNumber(e) {
      Number.isSafeInteger(e) && !this.forceIntegerToFloat ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
    }
    writeStringHeader(e) {
      if (e < 32) this.writeU8(160 + e);
      else if (e < 256) this.writeU8(217), this.writeU8(e);
      else if (e < 65536) this.writeU8(218), this.writeU16(e);
      else if (e < 4294967296) this.writeU8(219), this.writeU32(e);
      else throw new Error(`Too long string: ${e} bytes in UTF-8`);
    }
    encodeString(e) {
      if (e.length > Ce.TEXT_ENCODER_THRESHOLD) {
        let n = (0, Ce.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, Ce.utf8EncodeTE)(e, this.bytes, this.pos), this.pos += n;
      } else {
        let n = (0, Ce.utf8Count)(e);
        this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), (0, Ce.utf8EncodeJs)(e, this.bytes, this.pos), this.pos += n;
      }
    }
    encodeObject(e, t) {
      let s2 = this.extensionCodec.tryToEncode(e, this.context);
      if (s2 != null) this.encodeExtension(s2);
      else if (Array.isArray(e)) this.encodeArray(e, t);
      else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
      else if (typeof e == "object") this.encodeMap(e, t);
      else throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
    }
    encodeBinary(e) {
      let t = e.byteLength;
      if (t < 256) this.writeU8(196), this.writeU8(t);
      else if (t < 65536) this.writeU8(197), this.writeU16(t);
      else if (t < 4294967296) this.writeU8(198), this.writeU32(t);
      else throw new Error(`Too large binary: ${t}`);
      let s2 = (0, zs.ensureUint8Array)(e);
      this.writeU8a(s2);
    }
    encodeArray(e, t) {
      let s2 = e.length;
      if (s2 < 16) this.writeU8(144 + s2);
      else if (s2 < 65536) this.writeU8(220), this.writeU16(s2);
      else if (s2 < 4294967296) this.writeU8(221), this.writeU32(s2);
      else throw new Error(`Too large array: ${s2}`);
      for (let n of e) this.doEncode(n, t + 1);
    }
    countWithoutUndefined(e, t) {
      let s2 = 0;
      for (let n of t) e[n] !== void 0 && s2++;
      return s2;
    }
    encodeMap(e, t) {
      let s2 = Object.keys(e);
      this.sortKeys && s2.sort();
      let n = this.ignoreUndefined ? this.countWithoutUndefined(e, s2) : s2.length;
      if (n < 16) this.writeU8(128 + n);
      else if (n < 65536) this.writeU8(222), this.writeU16(n);
      else if (n < 4294967296) this.writeU8(223), this.writeU32(n);
      else throw new Error(`Too large map object: ${n}`);
      for (let o of s2) {
        let a = e[o];
        this.ignoreUndefined && a === void 0 || (this.encodeString(o), this.doEncode(a, t + 1));
      }
    }
    encodeExtension(e) {
      let t = e.data.length;
      if (t === 1) this.writeU8(212);
      else if (t === 2) this.writeU8(213);
      else if (t === 4) this.writeU8(214);
      else if (t === 8) this.writeU8(215);
      else if (t === 16) this.writeU8(216);
      else if (t < 256) this.writeU8(199), this.writeU8(t);
      else if (t < 65536) this.writeU8(200), this.writeU16(t);
      else if (t < 4294967296) this.writeU8(201), this.writeU32(t);
      else throw new Error(`Too large extension object: ${t}`);
      this.writeI8(e.type), this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
    }
    writeU8a(e) {
      let t = e.length;
      this.ensureBufferSizeToWrite(t), this.bytes.set(e, this.pos), this.pos += t;
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8), (0, Lr.setUint64)(this.view, this.pos, e), this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8), (0, Lr.setInt64)(this.view, this.pos, e), this.pos += 8;
    }
  };
  B2.Encoder = rr;
});
var Fr = T((Et) => {
  "use strict";
  Object.defineProperty(Et, "__esModule", { value: true });
  Et.encode = void 0;
  var Gs = sr(), $s = {};
  function Xs(r5, e = $s) {
    return new Gs.Encoder(e.extensionCodec, e.context, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32, e.ignoreUndefined, e.forceIntegerToFloat).encodeSharedRef(r5);
  }
  Et.encode = Xs;
});
var qr = T((vt) => {
  "use strict";
  Object.defineProperty(vt, "__esModule", { value: true });
  vt.prettyByte = void 0;
  function Ks(r5) {
    return `${r5 < 0 ? "-" : ""}0x${Math.abs(r5).toString(16).padStart(2, "0")}`;
  }
  vt.prettyByte = Ks;
});
var Vr = T((Pt) => {
  "use strict";
  Object.defineProperty(Pt, "__esModule", { value: true });
  Pt.CachedKeyDecoder = void 0;
  var Qs = ft(), Ys = 16, Zs = 16, nr = class {
    constructor(e = Ys, t = Zs) {
      this.maxKeyLength = e, this.maxLengthPerKey = t, this.hit = 0, this.miss = 0, this.caches = [];
      for (let s2 = 0; s2 < this.maxKeyLength; s2++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, s2) {
      let n = this.caches[s2 - 1];
      e: for (let o of n) {
        let a = o.bytes;
        for (let c = 0; c < s2; c++) if (a[c] !== e[t + c]) continue e;
        return o.str;
      }
      return null;
    }
    store(e, t) {
      let s2 = this.caches[e.length - 1], n = { bytes: e, str: t };
      s2.length >= this.maxLengthPerKey ? s2[Math.random() * s2.length | 0] = n : s2.push(n);
    }
    decode(e, t, s2) {
      let n = this.find(e, t, s2);
      if (n != null) return this.hit++, n;
      this.miss++;
      let o = (0, Qs.utf8DecodeJs)(e, t, s2), a = Uint8Array.prototype.slice.call(e, t, t + s2);
      return this.store(a, o), o;
    }
  };
  Pt.CachedKeyDecoder = nr;
});
var Tt = T(($2) => {
  "use strict";
  Object.defineProperty($2, "__esModule", { value: true });
  $2.Decoder = $2.DataViewIndexOutOfBoundsError = void 0;
  var or = qr(), en = xt(), oe2 = De(), ar = ft(), ir = tr(), tn = Vr(), G2 = gt(), rn = (r5) => {
    let e = typeof r5;
    return e === "string" || e === "number";
  }, Ie = -1, cr = new DataView(new ArrayBuffer(0)), sn = new Uint8Array(cr.buffer);
  $2.DataViewIndexOutOfBoundsError = (() => {
    try {
      cr.getInt8(0);
    } catch (r5) {
      return r5.constructor;
    }
    throw new Error("never reached");
  })();
  var Jr = new $2.DataViewIndexOutOfBoundsError("Insufficient data"), nn = new tn.CachedKeyDecoder(), lr = class {
    constructor(e = en.ExtensionCodec.defaultCodec, t = void 0, s2 = oe2.UINT32_MAX, n = oe2.UINT32_MAX, o = oe2.UINT32_MAX, a = oe2.UINT32_MAX, c = oe2.UINT32_MAX, u = nn) {
      this.extensionCodec = e, this.context = t, this.maxStrLength = s2, this.maxBinLength = n, this.maxArrayLength = o, this.maxMapLength = a, this.maxExtLength = c, this.keyDecoder = u, this.totalPos = 0, this.pos = 0, this.view = cr, this.bytes = sn, this.headByte = Ie, this.stack = [];
    }
    reinitializeState() {
      this.totalPos = 0, this.headByte = Ie, this.stack.length = 0;
    }
    setBuffer(e) {
      this.bytes = (0, ir.ensureUint8Array)(e), this.view = (0, ir.createDataView)(this.bytes), this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte === Ie && !this.hasRemaining(1)) this.setBuffer(e);
      else {
        let t = this.bytes.subarray(this.pos), s2 = (0, ir.ensureUint8Array)(e), n = new Uint8Array(t.length + s2.length);
        n.set(t), n.set(s2, t.length), this.setBuffer(n);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: s2 } = this;
      return new RangeError(`Extra ${t.byteLength - s2} of ${t.byteLength} byte(s) found at buffer[${e}]`);
    }
    decode(e) {
      this.reinitializeState(), this.setBuffer(e);
      let t = this.doDecodeSync();
      if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
      return t;
    }
    *decodeMulti(e) {
      for (this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); ) yield this.doDecodeSync();
    }
    async decodeAsync(e) {
      let t = false, s2;
      for await (let c of e) {
        if (t) throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(c);
        try {
          s2 = this.doDecodeSync(), t = true;
        } catch (u) {
          if (!(u instanceof $2.DataViewIndexOutOfBoundsError)) throw u;
        }
        this.totalPos += this.pos;
      }
      if (t) {
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
        return s2;
      }
      let { headByte: n, pos: o, totalPos: a } = this;
      throw new RangeError(`Insufficient data in parsing ${(0, or.prettyByte)(n)} at ${a} (${o} in the current buffer)`);
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, true);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, false);
    }
    async *decodeMultiAsync(e, t) {
      let s2 = t, n = -1;
      for await (let o of e) {
        if (t && n === 0) throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(o), s2 && (n = this.readArraySize(), s2 = false, this.complete());
        try {
          for (; yield this.doDecodeSync(), --n !== 0; ) ;
        } catch (a) {
          if (!(a instanceof $2.DataViewIndexOutOfBoundsError)) throw a;
        }
        this.totalPos += this.pos;
      }
    }
    doDecodeSync() {
      e: for (; ; ) {
        let e = this.readHeadByte(), t;
        if (e >= 224) t = e - 256;
        else if (e < 192) if (e < 128) t = e;
        else if (e < 144) {
          let n = e - 128;
          if (n !== 0) {
            this.pushMapState(n), this.complete();
            continue e;
          } else t = {};
        } else if (e < 160) {
          let n = e - 144;
          if (n !== 0) {
            this.pushArrayState(n), this.complete();
            continue e;
          } else t = [];
        } else {
          let n = e - 160;
          t = this.decodeUtf8String(n, 0);
        }
        else if (e === 192) t = null;
        else if (e === 194) t = false;
        else if (e === 195) t = true;
        else if (e === 202) t = this.readF32();
        else if (e === 203) t = this.readF64();
        else if (e === 204) t = this.readU8();
        else if (e === 205) t = this.readU16();
        else if (e === 206) t = this.readU32();
        else if (e === 207) t = this.readU64();
        else if (e === 208) t = this.readI8();
        else if (e === 209) t = this.readI16();
        else if (e === 210) t = this.readI32();
        else if (e === 211) t = this.readI64();
        else if (e === 217) {
          let n = this.lookU8();
          t = this.decodeUtf8String(n, 1);
        } else if (e === 218) {
          let n = this.lookU16();
          t = this.decodeUtf8String(n, 2);
        } else if (e === 219) {
          let n = this.lookU32();
          t = this.decodeUtf8String(n, 4);
        } else if (e === 220) {
          let n = this.readU16();
          if (n !== 0) {
            this.pushArrayState(n), this.complete();
            continue e;
          } else t = [];
        } else if (e === 221) {
          let n = this.readU32();
          if (n !== 0) {
            this.pushArrayState(n), this.complete();
            continue e;
          } else t = [];
        } else if (e === 222) {
          let n = this.readU16();
          if (n !== 0) {
            this.pushMapState(n), this.complete();
            continue e;
          } else t = {};
        } else if (e === 223) {
          let n = this.readU32();
          if (n !== 0) {
            this.pushMapState(n), this.complete();
            continue e;
          } else t = {};
        } else if (e === 196) {
          let n = this.lookU8();
          t = this.decodeBinary(n, 1);
        } else if (e === 197) {
          let n = this.lookU16();
          t = this.decodeBinary(n, 2);
        } else if (e === 198) {
          let n = this.lookU32();
          t = this.decodeBinary(n, 4);
        } else if (e === 212) t = this.decodeExtension(1, 0);
        else if (e === 213) t = this.decodeExtension(2, 0);
        else if (e === 214) t = this.decodeExtension(4, 0);
        else if (e === 215) t = this.decodeExtension(8, 0);
        else if (e === 216) t = this.decodeExtension(16, 0);
        else if (e === 199) {
          let n = this.lookU8();
          t = this.decodeExtension(n, 1);
        } else if (e === 200) {
          let n = this.lookU16();
          t = this.decodeExtension(n, 2);
        } else if (e === 201) {
          let n = this.lookU32();
          t = this.decodeExtension(n, 4);
        } else throw new G2.DecodeError(`Unrecognized type byte: ${(0, or.prettyByte)(e)}`);
        this.complete();
        let s2 = this.stack;
        for (; s2.length > 0; ) {
          let n = s2[s2.length - 1];
          if (n.type === 0) if (n.array[n.position] = t, n.position++, n.position === n.size) s2.pop(), t = n.array;
          else continue e;
          else if (n.type === 1) {
            if (!rn(t)) throw new G2.DecodeError("The type of key must be string or number but " + typeof t);
            if (t === "__proto__") throw new G2.DecodeError("The key __proto__ is not allowed");
            n.key = t, n.type = 2;
            continue e;
          } else if (n.map[n.key] = t, n.readCount++, n.readCount === n.size) s2.pop(), t = n.map;
          else {
            n.key = null, n.type = 1;
            continue e;
          }
        }
        return t;
      }
    }
    readHeadByte() {
      return this.headByte === Ie && (this.headByte = this.readU8()), this.headByte;
    }
    complete() {
      this.headByte = Ie;
    }
    readArraySize() {
      let e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (e < 160) return e - 144;
          throw new G2.DecodeError(`Unrecognized array type byte: ${(0, or.prettyByte)(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) throw new G2.DecodeError(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.push({ type: 1, size: e, key: null, readCount: 0, map: {} });
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) throw new G2.DecodeError(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.push({ type: 0, size: e, array: new Array(e), position: 0 });
    }
    decodeUtf8String(e, t) {
      var s2;
      if (e > this.maxStrLength) throw new G2.DecodeError(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + t + e) throw Jr;
      let n = this.pos + t, o;
      return this.stateIsMapKey() && (!((s2 = this.keyDecoder) === null || s2 === void 0) && s2.canBeCached(e)) ? o = this.keyDecoder.decode(this.bytes, n, e) : e > ar.TEXT_DECODER_THRESHOLD ? o = (0, ar.utf8DecodeTD)(this.bytes, n, e) : o = (0, ar.utf8DecodeJs)(this.bytes, n, e), this.pos += t + e, o;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1].type === 1 : false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength) throw new G2.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + t)) throw Jr;
      let s2 = this.pos + t, n = this.bytes.subarray(s2, s2 + e);
      return this.pos += t + e, n;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength) throw new G2.DecodeError(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      let s2 = this.view.getInt8(this.pos + t), n = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(n, s2, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      let e = this.view.getUint8(this.pos);
      return this.pos++, e;
    }
    readI8() {
      let e = this.view.getInt8(this.pos);
      return this.pos++, e;
    }
    readU16() {
      let e = this.view.getUint16(this.pos);
      return this.pos += 2, e;
    }
    readI16() {
      let e = this.view.getInt16(this.pos);
      return this.pos += 2, e;
    }
    readU32() {
      let e = this.view.getUint32(this.pos);
      return this.pos += 4, e;
    }
    readI32() {
      let e = this.view.getInt32(this.pos);
      return this.pos += 4, e;
    }
    readU64() {
      let e = (0, oe2.getUint64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      let e = (0, oe2.getInt64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readF32() {
      let e = this.view.getFloat32(this.pos);
      return this.pos += 4, e;
    }
    readF64() {
      let e = this.view.getFloat64(this.pos);
      return this.pos += 8, e;
    }
  };
  $2.Decoder = lr;
});
var ur = T((L2) => {
  "use strict";
  Object.defineProperty(L2, "__esModule", { value: true });
  L2.decodeMulti = L2.decode = L2.defaultDecodeOptions = void 0;
  var Hr = Tt();
  L2.defaultDecodeOptions = {};
  function on(r5, e = L2.defaultDecodeOptions) {
    return new Hr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(r5);
  }
  L2.decode = on;
  function an(r5, e = L2.defaultDecodeOptions) {
    return new Hr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeMulti(r5);
  }
  L2.decodeMulti = an;
});
var $r = T((Y2) => {
  "use strict";
  Object.defineProperty(Y2, "__esModule", { value: true });
  Y2.ensureAsyncIterable = Y2.asyncIterableFromStream = Y2.isAsyncIterable = void 0;
  function zr(r5) {
    return r5[Symbol.asyncIterator] != null;
  }
  Y2.isAsyncIterable = zr;
  function ln(r5) {
    if (r5 == null) throw new Error("Assertion Failure: value must not be null nor undefined");
  }
  async function* Gr(r5) {
    let e = r5.getReader();
    try {
      for (; ; ) {
        let { done: t, value: s2 } = await e.read();
        if (t) return;
        ln(s2), yield s2;
      }
    } finally {
      e.releaseLock();
    }
  }
  Y2.asyncIterableFromStream = Gr;
  function cn(r5) {
    return zr(r5) ? r5 : Gr(r5);
  }
  Y2.ensureAsyncIterable = cn;
});
var Kr = T((F2) => {
  "use strict";
  Object.defineProperty(F2, "__esModule", { value: true });
  F2.decodeStream = F2.decodeMultiStream = F2.decodeArrayStream = F2.decodeAsync = void 0;
  var pr = Tt(), dr = $r(), St = ur();
  async function un(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(t);
  }
  F2.decodeAsync = un;
  function pn(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(t);
  }
  F2.decodeArrayStream = pn;
  function Xr(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(t);
  }
  F2.decodeMultiStream = Xr;
  function dn(r5, e = St.defaultDecodeOptions) {
    return Xr(r5, e);
  }
  F2.decodeStream = dn;
});
var Zr = T((d) => {
  "use strict";
  Object.defineProperty(d, "__esModule", { value: true });
  d.decodeTimestampExtension = d.encodeTimestampExtension = d.decodeTimestampToTimeSpec = d.encodeTimeSpecToTimestamp = d.encodeDateToTimeSpec = d.EXT_TIMESTAMP = d.ExtData = d.ExtensionCodec = d.Encoder = d.DataViewIndexOutOfBoundsError = d.DecodeError = d.Decoder = d.decodeStream = d.decodeMultiStream = d.decodeArrayStream = d.decodeAsync = d.decodeMulti = d.decode = d.encode = void 0;
  var hn = Fr();
  Object.defineProperty(d, "encode", { enumerable: true, get: function() {
    return hn.encode;
  } });
  var Qr = ur();
  Object.defineProperty(d, "decode", { enumerable: true, get: function() {
    return Qr.decode;
  } });
  Object.defineProperty(d, "decodeMulti", { enumerable: true, get: function() {
    return Qr.decodeMulti;
  } });
  var _t = Kr();
  Object.defineProperty(d, "decodeAsync", { enumerable: true, get: function() {
    return _t.decodeAsync;
  } });
  Object.defineProperty(d, "decodeArrayStream", { enumerable: true, get: function() {
    return _t.decodeArrayStream;
  } });
  Object.defineProperty(d, "decodeMultiStream", { enumerable: true, get: function() {
    return _t.decodeMultiStream;
  } });
  Object.defineProperty(d, "decodeStream", { enumerable: true, get: function() {
    return _t.decodeStream;
  } });
  var Yr = Tt();
  Object.defineProperty(d, "Decoder", { enumerable: true, get: function() {
    return Yr.Decoder;
  } });
  Object.defineProperty(d, "DataViewIndexOutOfBoundsError", { enumerable: true, get: function() {
    return Yr.DataViewIndexOutOfBoundsError;
  } });
  var yn = gt();
  Object.defineProperty(d, "DecodeError", { enumerable: true, get: function() {
    return yn.DecodeError;
  } });
  var fn = sr();
  Object.defineProperty(d, "Encoder", { enumerable: true, get: function() {
    return fn.Encoder;
  } });
  var mn = xt();
  Object.defineProperty(d, "ExtensionCodec", { enumerable: true, get: function() {
    return mn.ExtensionCodec;
  } });
  var Rn = Yt();
  Object.defineProperty(d, "ExtData", { enumerable: true, get: function() {
    return Rn.ExtData;
  } });
  var he = er();
  Object.defineProperty(d, "EXT_TIMESTAMP", { enumerable: true, get: function() {
    return he.EXT_TIMESTAMP;
  } });
  Object.defineProperty(d, "encodeDateToTimeSpec", { enumerable: true, get: function() {
    return he.encodeDateToTimeSpec;
  } });
  Object.defineProperty(d, "encodeTimeSpecToTimestamp", { enumerable: true, get: function() {
    return he.encodeTimeSpecToTimestamp;
  } });
  Object.defineProperty(d, "decodeTimestampToTimeSpec", { enumerable: true, get: function() {
    return he.decodeTimestampToTimeSpec;
  } });
  Object.defineProperty(d, "encodeTimestampExtension", { enumerable: true, get: function() {
    return he.encodeTimestampExtension;
  } });
  Object.defineProperty(d, "decodeTimestampExtension", { enumerable: true, get: function() {
    return he.decodeTimestampExtension;
  } });
});
var D = class extends Error {
  constructor(e) {
    super(e), this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var A = class extends D {
};
var E = typeof process < "u" && process.release && process.release.name === "node";
var Vt;
if (globalThis.document) Vt = (r5) => new Promise((e, t) => {
  let s2 = document.createElement("script");
  s2.src = r5, s2.onload = () => e(), s2.onerror = t, document.head.appendChild(s2);
});
else if (globalThis.importScripts) Vt = async (r5) => {
  try {
    globalThis.importScripts(r5);
  } catch (e) {
    if (e instanceof TypeError) await Promise.resolve().then(() => be(ee(r5)));
    else throw e;
  }
};
else if (E) Vt = async (r5) => {
  let e = (await Promise.resolve().then(() => be(ee("path")))).default;
  await Promise.resolve().then(() => be(ee(e.resolve(r5))));
};
else throw new D("Cannot determine runtime environment");
var U = { null: 0, symbol: 1, pairlist: 2, closure: 3, environment: 4, promise: 5, call: 6, special: 7, builtin: 8, string: 9, logical: 10, integer: 13, double: 14, complex: 15, character: 16, dots: 17, any: 18, list: 19, expression: 20, bytecode: 21, pointer: 22, weakref: 23, raw: 24, s4: 25, new: 30, free: 31, function: 99 };
function we(r5) {
  return !!r5 && typeof r5 == "object" && Object.keys(U).includes(r5.type);
}
function te(r5) {
  return !!r5 && typeof r5 == "object" && "re" in r5 && "im" in r5;
}
var l = {};
function wr(r5) {
  Object.keys(r5).forEach((e) => l._free(r5[e]));
}
function xe(r5) {
  return l._Rf_protect(N(r5)), r5;
}
function b(r5, e) {
  return l._Rf_protect(N(r5)), ++e.n, r5;
}
function xr(r5) {
  let e = l._malloc(4);
  return l._R_ProtectWithIndex(N(r5), e), { loc: l.getValue(e, "i32"), ptr: e };
}
function Er(r5) {
  l._Rf_unprotect(1), l._free(r5.ptr);
}
function vr(r5, e) {
  return l._R_Reprotect(N(r5), e.loc), r5;
}
function v(r5) {
  l._Rf_unprotect(r5);
}
function Jt(r5, e, t) {
  l._Rf_defineVar(N(e), N(t), N(r5));
}
function Ht(r5, e) {
  let t = {}, s2 = { n: 0 };
  try {
    let n = new ve(e);
    b(n, s2), t.code = l.allocateUTF8(r5);
    let o = l._R_ParseEvalString(t.code, n.ptr);
    return h.wrap(o);
  } finally {
    wr(t), v(s2.n);
  }
}
function Ee(r5, e) {
  return l.getWasmTableEntry(l.GOT.ffi_safe_eval.value)(N(r5), N(e));
}
function N(r5) {
  return Ye(r5) ? r5.ptr : r5;
}
function ne(r5, e) {
  if (l._TYPEOF(r5.ptr) !== U[e]) throw new Error(`Unexpected object type "${r5.type()}" when expecting type "${e}"`);
}
function Sr(r5) {
  if (we(r5)) return new (_r(r5.type))(r5);
  if (typeof r5 > "u") return new Te();
  if (r5 && typeof r5 == "object" && "type" in r5 && r5.type === "null") return new Te();
  if (r5 === null) return new se({ type: "logical", names: null, values: [null] });
  if (typeof r5 == "boolean") return new se(r5);
  if (typeof r5 == "number") return new We(r5);
  if (typeof r5 == "string") return new z(r5);
  if (te(r5)) return new Ke(r5);
  if (ArrayBuffer.isView(r5) || r5 instanceof ArrayBuffer) return new Qe(r5);
  if (Array.isArray(r5)) return Ts(r5);
  if (typeof r5 == "object") return ke.fromObject(r5);
  throw new Error("R object construction for this JS object is not yet supported.");
}
function Ts(r5) {
  let e = { n: 0 };
  if (r5.every((s2) => s2 && typeof s2 == "object" && !Ye(s2) && !te(s2))) {
    let s2 = r5, n = s2.every((a) => Object.keys(a).filter((c) => !Object.keys(s2[0]).includes(c)).length === 0 && Object.keys(s2[0]).filter((c) => !Object.keys(a).includes(c)).length === 0), o = s2.every((a) => Object.values(a).every((c) => Mr(c) || kr(c)));
    if (n && o) return ke.fromD3(s2);
  }
  if (r5.every((s2) => typeof s2 == "boolean" || s2 === null)) return new se(r5);
  if (r5.every((s2) => typeof s2 == "number" || s2 === null)) return new We(r5);
  if (r5.every((s2) => typeof s2 == "string" || s2 === null)) return new z(r5);
  try {
    let s2 = new K([new C("c"), ...r5]);
    return b(s2, e), s2.eval();
  } finally {
    v(e.n);
  }
}
var w = class {
  constructor(e) {
    this.ptr = e;
  }
  type() {
    let e = l._TYPEOF(this.ptr);
    return Object.keys(U).find((s2) => U[s2] === e);
  }
};
var ce;
var Xe;
var re = class re2 extends w {
  constructor(t) {
    if (!(t instanceof w)) return Sr(t);
    super(t.ptr);
    p(this, ce);
  }
  static wrap(t) {
    let s2 = l._TYPEOF(t), n = Object.keys(U)[Object.values(U).indexOf(s2)];
    return new (_r(n))(new w(t));
  }
  get [Symbol.toStringTag]() {
    return `RObject:${this.type()}`;
  }
  static getPersistentObject(t) {
    return S[t];
  }
  getPropertyValue(t) {
    return this[t];
  }
  inspect() {
    Ht(".Internal(inspect(x))", { x: this });
  }
  isNull() {
    return l._TYPEOF(this.ptr) === U.null;
  }
  isNa() {
    try {
      let t = Ht("is.na(x)", { x: this });
      return xe(t), t.toBoolean();
    } finally {
      v(1);
    }
  }
  isUnbound() {
    return this.ptr === S.unboundValue.ptr;
  }
  attrs() {
    return Se.wrap(l._ATTRIB(this.ptr));
  }
  class() {
    let t = { n: 0 }, s2 = new K([new C("class"), this]);
    b(s2, t);
    try {
      return s2.eval();
    } finally {
      v(t.n);
    }
  }
  setNames(t) {
    let s2;
    if (t === null) s2 = S.null;
    else if (Array.isArray(t) && t.every((n) => typeof n == "string" || n === null)) s2 = new z(t);
    else throw new Error("Argument to setNames must be null or an Array of strings or null");
    return l._Rf_setAttrib(this.ptr, S.namesSymbol.ptr, s2.ptr), this;
  }
  names() {
    let t = z.wrap(l._Rf_getAttrib(this.ptr, S.namesSymbol.ptr));
    return t.isNull() ? null : t.toArray();
  }
  includes(t) {
    let s2 = this.names();
    return s2 && s2.includes(t);
  }
  toJs(t = { depth: 0 }, s2 = 1) {
    throw new Error("This R object cannot be converted to JS");
  }
  subset(t) {
    return M(this, ce, Xe).call(this, t, S.bracketSymbol.ptr);
  }
  get(t) {
    return M(this, ce, Xe).call(this, t, S.bracket2Symbol.ptr);
  }
  getDollar(t) {
    return M(this, ce, Xe).call(this, t, S.dollarSymbol.ptr);
  }
  pluck(...t) {
    let s2 = xr(S.null);
    try {
      let n = (a, c) => {
        let u = a.get(c);
        return vr(u, s2);
      }, o = t.reduce(n, this);
      return o.isNull() ? void 0 : o;
    } finally {
      Er(s2);
    }
  }
  set(t, s2) {
    let n = { n: 0 };
    try {
      let o = new re2(t);
      b(o, n);
      let a = new re2(s2);
      b(a, n);
      let c = new C("[[<-"), u = l._Rf_lang4(c.ptr, this.ptr, o.ptr, a.ptr);
      return b(u, n), re2.wrap(Ee(u, S.baseEnv));
    } finally {
      v(n.n);
    }
  }
  static getMethods(t) {
    let s2 = /* @__PURE__ */ new Set(), n = t;
    do
      Object.getOwnPropertyNames(n).map((o) => s2.add(o));
    while (n = Object.getPrototypeOf(n));
    return [...s2.keys()].filter((o) => typeof t[o] == "function");
  }
};
ce = /* @__PURE__ */ new WeakSet(), Xe = function(t, s2) {
  let n = { n: 0 };
  try {
    let o = new re(t);
    b(o, n);
    let a = l._Rf_lang3(s2, this.ptr, o.ptr);
    return b(a, n), re.wrap(Ee(a, S.baseEnv));
  } finally {
    v(n.n);
  }
};
var h = re;
var Te = class extends h {
  constructor() {
    return super(new w(l.getValue(l._R_NilValue, "*"))), this;
  }
  toJs() {
    return { type: "null" };
  }
};
var C = class extends h {
  constructor(e) {
    if (e instanceof w) {
      ne(e, "symbol"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new w(l._Rf_install(t)));
    } finally {
      l._free(t);
    }
  }
  toJs() {
    let e = this.toObject();
    return { type: "symbol", printname: e.printname, symvalue: e.symvalue, internal: e.internal };
  }
  toObject() {
    return { printname: this.printname().isUnbound() ? null : this.printname().toString(), symvalue: this.symvalue().isUnbound() ? null : this.symvalue().ptr, internal: this.internal().isNull() ? null : this.internal().ptr };
  }
  toString() {
    return this.printname().toString();
  }
  printname() {
    return Me.wrap(l._PRINTNAME(this.ptr));
  }
  symvalue() {
    return h.wrap(l._SYMVALUE(this.ptr));
  }
  internal() {
    return h.wrap(l._INTERNAL(this.ptr));
  }
};
var Se = class r extends h {
  constructor(e) {
    if (e instanceof w) return ne(e, "pairlist"), super(e), this;
    let t = { n: 0 };
    try {
      let { names: s2, values: n } = ue(e), o = r.wrap(l._Rf_allocList(n.length));
      b(o, t);
      for (let [a, c] = [0, o]; !c.isNull(); [a, c] = [a + 1, c.cdr()]) c.setcar(new h(n[a]));
      o.setNames(s2), super(o);
    } finally {
      v(t.n);
    }
  }
  get length() {
    return this.toArray().length;
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s2 = -1 } = {}) {
    let n = this.entries({ depth: s2 }), o = n.map(([a]) => a);
    if (!e && new Set(o).size !== o.length) throw new Error("Duplicate key when converting pairlist without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a)) throw new Error("Empty or null key when converting pairlist without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((u) => u[0] === a[0]) === c));
  }
  entries(e = { depth: 1 }) {
    let t = this.toJs(e);
    return t.values.map((s2, n) => [t.names ? t.names[n] : null, s2]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s2 = [], n = false, o = [];
    for (let c = this; !c.isNull(); c = c.cdr()) {
      let u = c.tag();
      u.isNull() ? s2.push("") : (n = true, s2.push(u.toString())), e.depth && t >= e.depth ? o.push(c.car()) : o.push(c.car().toJs(e, t + 1));
    }
    return { type: "pairlist", names: n ? s2 : null, values: o };
  }
  includes(e) {
    return e in this.toObject();
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return h.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return h.wrap(l._CDR(this.ptr));
  }
  tag() {
    return h.wrap(l._TAG(this.ptr));
  }
};
var K = class r2 extends h {
  constructor(e) {
    if (e instanceof w) return ne(e, "call"), super(e), this;
    let t = { n: 0 };
    try {
      let { values: s2 } = ue(e), n = s2.map((a) => b(new h(a), t)), o = r2.wrap(l._Rf_allocVector(U.call, s2.length));
      b(o, t);
      for (let [a, c] = [0, o]; !c.isNull(); [a, c] = [a + 1, c.cdr()]) c.setcar(n[a]);
      super(o);
    } finally {
      v(t.n);
    }
  }
  setcar(e) {
    l._SETCAR(this.ptr, e.ptr);
  }
  car() {
    return h.wrap(l._CAR(this.ptr));
  }
  cdr() {
    return h.wrap(l._CDR(this.ptr));
  }
  eval() {
    return l.webr.evalR(this, { env: S.baseEnv });
  }
  capture(e = {}) {
    return l.webr.captureR(this, e);
  }
  deparse() {
    let e = { n: 0 };
    try {
      let t = l._Rf_lang2(new C("deparse1").ptr, l._Rf_lang2(new C("quote").ptr, this.ptr));
      b(t, e);
      let s2 = z.wrap(Ee(t, S.baseEnv));
      return b(s2, e), s2.toString();
    } finally {
      v(e.n);
    }
  }
};
var _e = class r3 extends h {
  constructor(e, t = null) {
    if (e instanceof w) {
      if (ne(e, "list"), super(e), t) {
        if (t.length !== this.length) throw new Error("Can't construct named `RList`. Supplied `names` must be the same length as the list.");
        this.setNames(t);
      }
      return this;
    }
    let s2 = { n: 0 };
    try {
      let n = ue(e), o = l._Rf_allocVector(U.list, n.values.length);
      b(o, s2), n.values.forEach((c, u) => {
        Wr(c) ? l._SET_VECTOR_ELT(o, u, new r3(c).ptr) : l._SET_VECTOR_ELT(o, u, new h(c).ptr);
      });
      let a = t || n.names;
      if (a && a.length !== n.values.length) throw new Error("Can't construct named `RList`. Supplied `names` must be the same length as the list.");
      h.wrap(o).setNames(a), super(new w(o));
    } finally {
      v(s2.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  isDataFrame() {
    let e = Se.wrap(l._ATTRIB(this.ptr)).get("class");
    return !e.isNull() && e.toArray().includes("data.frame");
  }
  toArray(e = { depth: 1 }) {
    return this.toJs(e).values;
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s2 = -1 } = {}) {
    let n = this.entries({ depth: s2 }), o = n.map(([a]) => a);
    if (!e && new Set(o).size !== o.length) throw new Error("Duplicate key when converting list without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a)) throw new Error("Empty or null key when converting list without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((u) => u[0] === a[0]) === c));
  }
  toD3() {
    if (!this.isDataFrame()) throw new Error("Can't convert R list object to D3 format. Object must be of class 'data.frame'.");
    return this.entries().reduce((t, s2) => (s2[1].forEach((n, o) => t[o] = Object.assign(t[o] || {}, { [s2[0]]: n })), t), []);
  }
  entries(e = { depth: -1 }) {
    let t = this.toJs(e);
    return this.isDataFrame() && e.depth < 0 && (t.values = t.values.map((s2) => s2.toArray())), t.values.map((s2, n) => [t.names ? t.names[n] : null, s2]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    return { type: "list", names: this.names(), values: [...Array(this.length).keys()].map((s2) => e.depth && t >= e.depth ? this.get(s2 + 1) : this.get(s2 + 1).toJs(e, t + 1)) };
  }
};
var ke = class r4 extends _e {
  constructor(e) {
    if (e instanceof w) {
      if (super(e), !this.isDataFrame()) throw new Error("Can't construct `RDataFrame`. Supplied R object is not a `data.frame`.");
      return this;
    }
    return r4.fromObject(e);
  }
  static fromObject(e) {
    let { names: t, values: s2 } = ue(e), n = { n: 0 };
    try {
      let o = !!t && t.length > 0 && t.every((c) => c), a = s2.length > 0 && s2.every((c) => Array.isArray(c) || ArrayBuffer.isView(c) || c instanceof ArrayBuffer);
      if (o && a) {
        let c = s2, u = c.every((g2) => g2.length === c[0].length), k2 = c.every((g2) => Mr(g2[0]) || kr(g2[0]));
        if (u && k2) {
          let g2 = new _e({ type: "list", names: t, values: c.map((ms) => Sr(ms)) });
          b(g2, n);
          let H2 = new K([new C("as.data.frame"), g2]);
          return b(H2, n), new r4(H2.eval());
        }
      }
    } finally {
      v(n.n);
    }
    throw new Error("Can't construct `data.frame`. Source object is not eligible.");
  }
  static fromD3(e) {
    return this.fromObject(Object.fromEntries(Object.keys(e[0]).map((t) => [t, e.map((s2) => s2[t])])));
  }
};
var le = class extends h {
  exec(...e) {
    let t = { n: 0 };
    try {
      let s2 = new K([this, ...e]);
      return b(s2, t), s2.eval();
    } finally {
      v(t.n);
    }
  }
  capture(e = {}, ...t) {
    let s2 = { n: 0 };
    try {
      let n = new K([this, ...t]);
      return b(n, s2), n.capture(e);
    } finally {
      v(s2.n);
    }
  }
};
var Ze = class Ze2 extends h {
  constructor(e) {
    if (e instanceof w) {
      ne(e, "string"), super(e);
      return;
    }
    let t = l.allocateUTF8(e);
    try {
      super(new w(l._Rf_mkCharCE(t, Ze2.CEType.CE_UTF8)));
    } finally {
      l._free(t);
    }
  }
  toString() {
    let e = l._vmaxget();
    try {
      return l.UTF8ToString(l._Rf_translateCharUTF8(this.ptr));
    } finally {
      l._vmaxset(e);
    }
  }
  toJs() {
    return { type: "string", value: this.toString() };
  }
};
Ze.CEType = { CE_NATIVE: 0, CE_UTF8: 1, CE_LATIN1: 2, CE_BYTES: 3, CE_SYMBOL: 5, CE_ANY: 99 };
var Me = Ze;
var ve = class extends h {
  constructor(e = {}) {
    if (e instanceof w) return ne(e, "environment"), super(e), this;
    let t = 0;
    try {
      let { names: s2, values: n } = ue(e), o = xe(l._R_NewEnv(S.globalEnv.ptr, 0, 0));
      ++t, n.forEach((a, c) => {
        let u = s2 ? s2[c] : null;
        if (!u) throw new Error("Can't create object in new environment with empty symbol name");
        let k2 = new C(u), g2 = xe(new h(a));
        try {
          Jt(o, k2, g2);
        } finally {
          v(1);
        }
      }), super(new w(o));
    } finally {
      v(t);
    }
  }
  ls(e = false, t = true) {
    return z.wrap(l._R_lsInternal3(this.ptr, Number(e), Number(t))).toArray();
  }
  bind(e, t) {
    let s2 = new C(e), n = xe(new h(t));
    try {
      Jt(this, s2, n);
    } finally {
      v(1);
    }
  }
  names() {
    return this.ls(true, true);
  }
  frame() {
    return h.wrap(l._FRAME(this.ptr));
  }
  subset(e) {
    if (typeof e == "number") throw new Error("Object of type environment is not subsettable");
    return this.getDollar(e);
  }
  toObject({ depth: e = -1 } = {}) {
    let t = this.names();
    return Object.fromEntries([...Array(t.length).keys()].map((s2) => {
      let n = this.getDollar(t[s2]);
      return [t[s2], e < 0 ? n : n.toJs({ depth: e })];
    }));
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s2 = this.names(), n = [...Array(s2.length).keys()].map((o) => e.depth && t >= e.depth ? this.getDollar(s2[o]) : this.getDollar(s2[o]).toJs(e, t + 1));
    return { type: "environment", names: s2, values: n };
  }
};
var Q = class extends h {
  constructor(e, t, s2) {
    if (e instanceof w) return ne(e, t), super(e), this;
    let n = { n: 0 };
    try {
      let { names: o, values: a } = ue(e), c = l._Rf_allocVector(U[t], a.length);
      b(c, n), a.forEach(s2(c)), h.wrap(c).setNames(o), super(new w(c));
    } finally {
      v(n.n);
    }
  }
  get length() {
    return l._LENGTH(this.ptr);
  }
  get(e) {
    return super.get(e);
  }
  subset(e) {
    return super.subset(e);
  }
  getDollar() {
    throw new Error("$ operator is invalid for atomic vectors");
  }
  detectMissing() {
    let e = { n: 0 };
    try {
      let t = l._Rf_lang2(new C("is.na").ptr, this.ptr);
      b(t, e);
      let s2 = se.wrap(Ee(t, S.baseEnv));
      b(s2, e);
      let n = s2.toTypedArray();
      return Array.from(n).map((o) => !!o);
    } finally {
      v(e.n);
    }
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s2) => t ? null : e[s2]);
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false } = {}) {
    let s2 = this.entries(), n = s2.map(([o]) => o);
    if (!e && new Set(n).size !== n.length) throw new Error("Duplicate key when converting atomic vector without allowDuplicateKey enabled");
    if (!t && n.some((o) => !o)) throw new Error("Empty or null key when converting atomic vector without allowEmptyKey enabled");
    return Object.fromEntries(s2.filter((o, a) => s2.findIndex((c) => c[0] === o[0]) === a));
  }
  entries() {
    let e = this.toArray(), t = this.names();
    return e.map((s2, n) => [t ? t[n] : null, s2]);
  }
  toJs() {
    return { type: this.type(), names: this.names(), values: this.toArray() };
  }
};
var et;
var tt = class tt2 extends Q {
  constructor(e) {
    super(e, "logical", i(tt2, et));
  }
  getBoolean(e) {
    return this.get(e).toArray()[0];
  }
  toBoolean() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getBoolean(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS boolean");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._LOGICAL(this.ptr) / 4, l._LOGICAL(this.ptr) / 4 + this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s2) => t ? null : !!e[s2]);
  }
};
et = /* @__PURE__ */ new WeakMap(), p(tt, et, (e) => {
  let t = l._LOGICAL(e), s2 = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s2 : !!n, "i32");
  };
});
var se = tt;
var rt;
var st = class st2 extends Q {
  constructor(e) {
    super(e, "integer", i(st2, rt));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Int32Array(l.HEAP32.subarray(l._INTEGER(this.ptr) / 4, l._INTEGER(this.ptr) / 4 + this.length));
  }
};
rt = /* @__PURE__ */ new WeakMap(), p(st, rt, (e) => {
  let t = l._INTEGER(e), s2 = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s2 : Math.round(Number(n)), "i32");
  };
});
var Gt = st;
var nt;
var ot = class ot2 extends Q {
  constructor(e) {
    super(e, "double", i(ot2, nt));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._REAL(this.ptr) / 8, l._REAL(this.ptr) / 8 + this.length));
  }
};
nt = /* @__PURE__ */ new WeakMap(), p(ot, nt, (e) => {
  let t = l._REAL(e), s2 = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * o, n === null ? s2 : n, "double");
  };
});
var We = ot;
var at;
var it = class it2 extends Q {
  constructor(e) {
    super(e, "complex", i(it2, at));
  }
  getComplex(e) {
    return this.get(e).toArray()[0];
  }
  toComplex() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getComplex(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS object");
    return e;
  }
  toTypedArray() {
    return new Float64Array(l.HEAPF64.subarray(l._COMPLEX(this.ptr) / 8, l._COMPLEX(this.ptr) / 8 + 2 * this.length));
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s2) => t ? null : { re: e[2 * s2], im: e[2 * s2 + 1] });
  }
};
at = /* @__PURE__ */ new WeakMap(), p(it, at, (e) => {
  let t = l._COMPLEX(e), s2 = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * (2 * o), n === null ? s2 : n.re, "double"), l.setValue(t + 8 * (2 * o + 1), n === null ? s2 : n.im, "double");
  };
});
var Ke = it;
var lt;
var ct = class ct2 extends Q {
  constructor(e) {
    super(e, "character", i(ct2, lt));
  }
  getString(e) {
    return this.get(e).toArray()[0];
  }
  toString() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getString(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS string");
    return e;
  }
  toTypedArray() {
    return new Uint32Array(l.HEAPU32.subarray(l._STRING_PTR(this.ptr) / 4, l._STRING_PTR(this.ptr) / 4 + this.length));
  }
  toArray() {
    let e = l._vmaxget();
    try {
      return this.detectMissing().map((t, s2) => t ? null : l.UTF8ToString(l._Rf_translateCharUTF8(l._STRING_ELT(this.ptr, s2))));
    } finally {
      l._vmaxset(e);
    }
  }
};
lt = /* @__PURE__ */ new WeakMap(), p(ct, lt, (e) => (t, s2) => {
  t === null ? l._SET_STRING_ELT(e, s2, S.naString.ptr) : l._SET_STRING_ELT(e, s2, new Me(t).ptr);
});
var z = ct;
var ut;
var pt = class pt2 extends Q {
  constructor(e) {
    e instanceof ArrayBuffer && (e = new Uint8Array(e)), super(e, "raw", i(pt2, ut));
  }
  getNumber(e) {
    return this.get(e).toArray()[0];
  }
  toNumber() {
    if (this.length !== 1) throw new Error("Can't convert atomic vector of length > 1 to a scalar JS value");
    let e = this.getNumber(1);
    if (e === null) throw new Error("Can't convert missing value `NA` to a JS number");
    return e;
  }
  toTypedArray() {
    return new Uint8Array(l.HEAPU8.subarray(l._RAW(this.ptr), l._RAW(this.ptr) + this.length));
  }
};
ut = /* @__PURE__ */ new WeakMap(), p(pt, ut, (e) => {
  let t = l._RAW(e);
  return (s2, n) => {
    l.setValue(t + n, Number(s2), "i8");
  };
});
var Qe = pt;
function ue(r5) {
  return we(r5) ? r5 : Array.isArray(r5) || ArrayBuffer.isView(r5) ? { names: null, values: r5 } : r5 && typeof r5 == "object" && !te(r5) ? { names: Object.keys(r5), values: Object.values(r5) } : { names: null, values: [r5] };
}
function _r(r5) {
  let e = { object: h, null: Te, symbol: C, pairlist: Se, closure: le, environment: ve, call: K, special: le, builtin: le, string: Me, logical: se, integer: Gt, double: We, complex: Ke, character: z, list: _e, raw: Qe, function: le, dataframe: ke };
  return r5 in e ? e[r5] : h;
}
function Ye(r5) {
  return r5 instanceof h;
}
function kr(r5) {
  let e = ["logical", "integer", "double", "complex", "character"];
  return Ye(r5) && e.includes(r5.type()) || Ye(r5) && r5.isNa();
}
function Mr(r5) {
  return r5 === null || typeof r5 == "number" || typeof r5 == "boolean" || typeof r5 == "string" || te(r5);
}
var S;
function Wr(r5) {
  return typeof r5 == "object" && r5 !== null && !Array.isArray(r5) && !ArrayBuffer.isView(r5) && !te(r5) && !we(r5) && !(r5 instanceof Date) && !(r5 instanceof RegExp) && !(r5 instanceof Error) && !(r5 instanceof w) && Object.getPrototypeOf(r5) === Object.prototype;
}
var rs = be(Zr());
var gn = new TextEncoder();
var q;
var V;
var Ue;
var yr;
q = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakSet(), yr = function() {
  i(this, q).push(new Promise((e) => {
    i(this, V).push(e);
  }));
};
var fe;
var Ne;
fe = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap();
var ha = new TextDecoder("utf-8");
var ya = new Int32Array(new ArrayBuffer(4));
var ae;
ae = /* @__PURE__ */ new WeakMap();
E && (globalThis.CloseEvent = class extends Event {
  constructor(e, t = {}) {
    super(e, t), this.wasClean = t.wasClean || false, this.code = t.code || 0, this.reason = t.reason || "";
  }
});
E && (globalThis.Worker = ee("worker_threads").Worker);
var Re;
var Dt;
var as;
var Be;
Re = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakSet(), as = function(t) {
  E ? (t.on("message", (s2) => {
    i(this, Be).call(this, t, s2);
  }), t.on("error", (s2) => {
    console.error(s2), this.reject(new A("An error occurred initialising the webR SharedBufferChannel worker."));
  })) : (t.onmessage = (s2) => i(this, Be).call(this, t, s2.data), t.onerror = (s2) => {
    console.error(s2), this.reject(new A("An error occurred initialising the webR SharedBufferChannel worker."));
  });
}, Be = /* @__PURE__ */ new WeakMap();
E && (globalThis.Worker = ee("worker_threads").Worker);
var ge;
var At;
var is;
var Fe;
ge = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakSet(), is = function(t) {
  E ? (t.on("message", (s2) => {
    i(this, Fe).call(this, t, s2);
  }), t.on("error", (s2) => {
    console.error(s2), this.reject(new A("An error occurred initialising the webR PostMessageChannel worker."));
  })) : (t.onmessage = (s2) => i(this, Fe).call(this, t, s2.data), t.onerror = (s2) => {
    console.error(s2), this.reject(new A("An error occurred initialising the webR PostMessageChannel worker."));
  });
}, Fe = /* @__PURE__ */ new WeakMap();
var J = { Automatic: 0, SharedArrayBuffer: 1, PostMessage: 3 };
var cs = E ? __dirname + "/" : "https://webr.r-wasm.org/v0.5.5/";
var us = "https://repo.r-wasm.org";
var mr = "0.5.5";
var qe;
var Ve;
var Je;
var He;
var ze;
var Ot;
var Ct;
var It;
var Ut;
var Nt;
var jt;
var hs;
qe = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakSet(), hs = async function() {
  for (; ; ) {
    let e = await this.webR.read();
    switch (e.type) {
      case "stdout":
        i(this, qe).call(this, e.data);
        break;
      case "stderr":
        i(this, Ve).call(this, e.data);
        break;
      case "prompt":
        i(this, Je).call(this, e.data);
        break;
      case "canvas":
        e.data.event === "canvasImage" ? i(this, He).call(this, e.data.image) : e.data.event === "canvasNewPage" && i(this, ze).call(this);
        break;
      case "closed":
        return;
      default:
        console.warn(`Unhandled output type for webR Console: ${e.type}.`);
    }
  }
};
var Pn = { FONTCONFIG_PATH: "/etc/fonts", R_HOME: "/usr/lib/R", R_ENABLE_JIT: "0", ALL_PROXY: "socks5h://localhost:8580", WEBR: "1", WEBR_VERSION: mr };
var ys = { RArgs: [], REnv: Pn, baseUrl: cs, serviceWorkerUrl: "", repoUrl: us, homedir: "/home/web_user", interactive: true, channelType: J.Automatic, createLazyFilesystem: true };
var y;
var ie;
var Ge;
var Ft;
var fs;
y = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakSet(), fs = async function() {
  for (; ; ) {
    let e = await i(this, y).readSystem();
    switch (e.type) {
      case "setTimeoutWasm":
        setTimeout((t, s2) => {
          this.invokeWasmFunction(t, ...s2);
        }, e.data.delay, e.data.ptr, e.data.args);
        break;
      case "proxyWebSocket": {
        let t = e;
        i(this, ie).new(t.data.uuid, t.data.url, t.data.protocol);
        break;
      }
      case "sendWebSocket": {
        let t = e;
        i(this, ie).send(t.data.uuid, t.data.data);
        break;
      }
      case "closeWebSocket": {
        let t = e;
        i(this, ie).close(t.data.uuid, t.data.code, t.data.reason);
        break;
      }
      case "console.log":
        console.log(e.data);
        break;
      case "console.warn":
        console.warn(e.data);
        break;
      case "console.error":
        console.error(e.data);
        break;
      case "close":
        i(this, y).close();
        break;
      default:
        throw new D("Unknown system message type `" + e.type + "`");
    }
  }
};
var R;
var f;
var $e;
R = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap();

// src/messageporthttp.ts
async function makeRequest(scope, appName, clientPort, pyodide2) {
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect(scope, clientPort, asgiFunc);
}
async function connect(scope, clientPort, asgiFunc) {
  const fromClientQueue = new AwaitableQueue();
  clientPort.addEventListener("message", (event) => {
    if (event.data.type === "http.request") {
      fromClientQueue.enqueue({
        type: "http.request",
        body: event.data.body,
        more_body: event.data.more_body
      });
    }
  });
  clientPort.start();
  async function fromClient() {
    return fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "http.response.start") {
      clientPort.postMessage({
        type: event.type,
        status: event.status,
        headers: asgiHeadersToRecord(event.headers)
      });
    } else if (event.type === "http.response.body") {
      clientPort.postMessage({
        type: event.type,
        body: asgiBodyToArray(event.body),
        more_body: event.more_body
      });
    } else {
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  await asgiFunc(scope, fromClient, toClient);
}
function asgiHeadersToRecord(headers) {
  headers = headers.map(([key, val]) => {
    return [uint8ArrayToString(key), uint8ArrayToString(val)];
  });
  return Object.assign(
    {
      "cross-origin-embedder-policy": "credentialless",
      "cross-origin-resource-policy": "cross-origin"
    },
    Object.fromEntries(headers)
  );
}
function asgiBodyToArray(body) {
  return body;
}

// src/messageportwebsocket.ts
var MessagePortWebSocket = class extends EventTarget {
  constructor(port) {
    super();
    this.readyState = 0;
    this.addEventListener("open", (e) => {
      if (this.onopen) {
        this.onopen(e);
      }
    });
    this.addEventListener("message", (e) => {
      if (this.onmessage) {
        this.onmessage(e);
      }
    });
    this.addEventListener("error", (e) => {
      if (this.onerror) {
        this.onerror(e);
      }
    });
    this.addEventListener("close", (e) => {
      if (this.onclose) {
        this.onclose(e);
      }
    });
    this._port = port;
    port.addEventListener("message", this._onMessage.bind(this));
    port.start();
  }
  // Call on the server side of the connection, to tell the client that
  // the connection has been established.
  accept() {
    if (this.readyState !== 0) {
      return;
    }
    this.readyState = 1;
    this._port.postMessage({ type: "open" });
  }
  send(data) {
    if (this.readyState === 0) {
      throw new DOMException(
        "Can't send messages while WebSocket is in CONNECTING state",
        "InvalidStateError"
      );
    }
    if (this.readyState > 1) {
      return;
    }
    this._port.postMessage({ type: "message", value: { data } });
  }
  close(code, reason) {
    if (this.readyState > 1) {
      return;
    }
    this.readyState = 2;
    this._port.postMessage({ type: "close", value: { code, reason } });
    this.readyState = 3;
    this.dispatchEvent(new CloseEvent("close", { code, reason }));
  }
  _onMessage(e) {
    const event = e.data;
    switch (event.type) {
      case "open":
        if (this.readyState === 0) {
          this.readyState = 1;
          this.dispatchEvent(new Event("open"));
          return;
        }
        break;
      case "message":
        if (this.readyState === 1) {
          this.dispatchEvent(new MessageEvent("message", { ...event.value }));
          return;
        }
        break;
      case "close":
        if (this.readyState < 3) {
          this.readyState = 3;
          this.dispatchEvent(new CloseEvent("close", { ...event.value }));
          return;
        }
        break;
    }
    this._reportError(
      `Unexpected event '${event.type}' while in readyState ${this.readyState}`,
      1002
    );
  }
  _reportError(message, code) {
    this.dispatchEvent(new ErrorEvent("error", { message }));
    if (typeof code === "number") {
      this.close(code, message);
    }
  }
};

// src/messageportwebsocket-channel.ts
async function openChannel(path, appName, clientPort, pyodide2) {
  const conn = new MessagePortWebSocket(clientPort);
  const asgiFunc = pyodide2.runPython(
    `_shiny_app_registry["${appName}"].app.call_pyodide`
  );
  await connect2(path, conn, asgiFunc);
}
async function connect2(path, conn, asgiFunc) {
  const scope = {
    type: "websocket",
    asgi: {
      version: "3.0",
      spec_version: "2.1"
    },
    path,
    headers: []
  };
  const fromClientQueue = new AwaitableQueue();
  fromClientQueue.enqueue({ type: "websocket.connect" });
  async function fromClient() {
    return await fromClientQueue.dequeue();
  }
  async function toClient(event) {
    event = Object.fromEntries(event.toJs());
    if (event.type === "websocket.accept") {
      conn.accept();
    } else if (event.type === "websocket.send") {
      conn.send(event.text ?? event.bytes);
    } else if (event.type === "websocket.close") {
      conn.close(event.code, event.reason);
      fromClientQueue.enqueue({ type: "websocket.disconnect" });
    } else {
      conn.close(1002, "ASGI protocol error");
      throw new Error(`Unhandled ASGI event: ${event.type}`);
    }
  }
  conn.addEventListener("message", (e) => {
    const me2 = e;
    const event = { type: "websocket.receive" };
    if (typeof me2.data === "string") {
      event.text = me2.data;
    } else {
      event.bytes = me2.data;
    }
    fromClientQueue.enqueue(event);
  });
  conn.addEventListener("close", (e) => {
    const ce3 = e;
    fromClientQueue.enqueue({ type: "websocket.disconnect", code: ce3.code });
  });
  conn.addEventListener("error", (e) => {
    console.error(e);
  });
  await asgiFunc(scope, fromClient, toClient);
}

// src/postable-error.ts
function errorToPostableErrorObject(e) {
  const errObj = {
    message: "An unknown error occured",
    name: e.name
  };
  if (!(e instanceof Error)) {
    return errObj;
  }
  errObj.message = e.message;
  if (e.stack) {
    errObj.stack = e.stack;
  }
  return errObj;
}

// src/pyodide/pyodide.js
var Q2 = Object.defineProperty;
var s = (e, t) => Q2(e, "name", { value: t, configurable: true });
var R2 = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (t, o) => (typeof __require < "u" ? __require : t)[o] }) : e)(function(e) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function Z(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
s(Z, "_isNumber");
function E2(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
s(E2, "_capitalize");
function O(e) {
  return function() {
    return this[e];
  };
}
s(O, "_getter");
var w2 = ["isConstructor", "isEval", "isNative", "isToplevel"];
var N2 = ["columnNumber", "lineNumber"];
var _ = ["fileName", "functionName", "source"];
var ee2 = ["args"];
var te2 = ["evalOrigin"];
var P = w2.concat(N2, _, ee2, te2);
function p2(e) {
  if (e) for (var t = 0; t < P.length; t++) e[P[t]] !== void 0 && this["set" + E2(P[t])](e[P[t]]);
}
s(p2, "StackFrame");
p2.prototype = { getArgs: function() {
  return this.args;
}, setArgs: function(e) {
  if (Object.prototype.toString.call(e) !== "[object Array]") throw new TypeError("Args must be an Array");
  this.args = e;
}, getEvalOrigin: function() {
  return this.evalOrigin;
}, setEvalOrigin: function(e) {
  if (e instanceof p2) this.evalOrigin = e;
  else if (e instanceof Object) this.evalOrigin = new p2(e);
  else throw new TypeError("Eval Origin must be an Object or StackFrame");
}, toString: function() {
  var e = this.getFileName() || "", t = this.getLineNumber() || "", o = this.getColumnNumber() || "", r5 = this.getFunctionName() || "";
  return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + o + ")" : "[eval]:" + t + ":" + o : r5 ? r5 + " (" + e + ":" + t + ":" + o + ")" : e + ":" + t + ":" + o;
} };
p2.fromString = s(function(t) {
  var o = t.indexOf("("), r5 = t.lastIndexOf(")"), a = t.substring(0, o), n = t.substring(o + 1, r5).split(","), i2 = t.substring(r5 + 1);
  if (i2.indexOf("@") === 0) var c = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i2, ""), l2 = c[1], d = c[2], u = c[3];
  return new p2({ functionName: a, args: n || void 0, fileName: l2, lineNumber: d || void 0, columnNumber: u || void 0 });
}, "StackFrame$$fromString");
for (b2 = 0; b2 < w2.length; b2++) p2.prototype["get" + E2(w2[b2])] = O(w2[b2]), p2.prototype["set" + E2(w2[b2])] = /* @__PURE__ */ function(e) {
  return function(t) {
    this[e] = !!t;
  };
}(w2[b2]);
var b2;
for (v2 = 0; v2 < N2.length; v2++) p2.prototype["get" + E2(N2[v2])] = O(N2[v2]), p2.prototype["set" + E2(N2[v2])] = /* @__PURE__ */ function(e) {
  return function(t) {
    if (!Z(t)) throw new TypeError(e + " must be a Number");
    this[e] = Number(t);
  };
}(N2[v2]);
var v2;
for (h2 = 0; h2 < _.length; h2++) p2.prototype["get" + E2(_[h2])] = O(_[h2]), p2.prototype["set" + E2(_[h2])] = /* @__PURE__ */ function(e) {
  return function(t) {
    this[e] = String(t);
  };
}(_[h2]);
var h2;
var k = p2;
function ne2() {
  var e = /^\s*at .*(\S+:\d+|\(native\))/m, t = /^(eval@)?(\[native code])?$/;
  return { parse: s(function(r5) {
    if (r5.stack && r5.stack.match(e)) return this.parseV8OrIE(r5);
    if (r5.stack) return this.parseFFOrSafari(r5);
    throw new Error("Cannot parse given Error object");
  }, "ErrorStackParser$$parse"), extractLocation: s(function(r5) {
    if (r5.indexOf(":") === -1) return [r5];
    var a = /(.+?)(?::(\d+))?(?::(\d+))?$/, n = a.exec(r5.replace(/[()]/g, ""));
    return [n[1], n[2] || void 0, n[3] || void 0];
  }, "ErrorStackParser$$extractLocation"), parseV8OrIE: s(function(r5) {
    var a = r5.stack.split(`
`).filter(function(n) {
      return !!n.match(e);
    }, this);
    return a.map(function(n) {
      n.indexOf("(eval ") > -1 && (n = n.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
      var i2 = n.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""), c = i2.match(/ (\(.+\)$)/);
      i2 = c ? i2.replace(c[0], "") : i2;
      var l2 = this.extractLocation(c ? c[1] : i2), d = c && i2 || void 0, u = ["eval", "<anonymous>"].indexOf(l2[0]) > -1 ? void 0 : l2[0];
      return new k({ functionName: d, fileName: u, lineNumber: l2[1], columnNumber: l2[2], source: n });
    }, this);
  }, "ErrorStackParser$$parseV8OrIE"), parseFFOrSafari: s(function(r5) {
    var a = r5.stack.split(`
`).filter(function(n) {
      return !n.match(t);
    }, this);
    return a.map(function(n) {
      if (n.indexOf(" > eval") > -1 && (n = n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), n.indexOf("@") === -1 && n.indexOf(":") === -1) return new k({ functionName: n });
      var i2 = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = n.match(i2), l2 = c && c[1] ? c[1] : void 0, d = this.extractLocation(n.replace(i2, ""));
      return new k({ functionName: l2, fileName: d[0], lineNumber: d[1], columnNumber: d[2], source: n });
    }, this);
  }, "ErrorStackParser$$parseFFOrSafari") };
}
s(ne2, "ErrorStackParser");
var re3 = new ne2();
var M2 = re3;
var g = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !process.browser;
var A2 = g && typeof module < "u" && typeof module.exports < "u" && typeof R2 < "u" && typeof __dirname < "u";
var W = g && !A2;
var Ne2 = typeof globalThis.Bun < "u";
var ie2 = typeof Deno < "u";
var B = !g && !ie2;
var $ = B && typeof window == "object" && typeof document == "object" && typeof document.createElement == "function" && "sessionStorage" in window && typeof importScripts != "function";
var j = B && typeof importScripts == "function" && typeof self == "object";
var _e2 = typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari") > -1;
var z2;
var D2;
var V2;
var H;
var L;
async function T2() {
  if (!g || (z2 = (await import("node:url")).default, H = await import("node:fs"), L = await import("node:fs/promises"), V2 = (await import("node:vm")).default, D2 = await import("node:path"), U2 = D2.sep, typeof R2 < "u")) return;
  let e = H, t = await import("node:crypto"), o = await Promise.resolve().then(() => __toESM(require_browser())), r5 = await import("node:child_process"), a = { fs: e, crypto: t, ws: o, child_process: r5 };
  globalThis.require = function(n) {
    return a[n];
  };
}
s(T2, "initNodeModules");
function oe(e, t) {
  return D2.resolve(t || ".", e);
}
s(oe, "node_resolvePath");
function ae2(e, t) {
  return t === void 0 && (t = location), new URL(e, t).toString();
}
s(ae2, "browser_resolvePath");
var x;
g ? x = oe : x = ae2;
var U2;
g || (U2 = "/");
function se2(e, t) {
  return e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? { response: fetch(e) } : { binary: L.readFile(e).then((o) => new Uint8Array(o.buffer, o.byteOffset, o.byteLength)) };
}
s(se2, "node_getBinaryResponse");
function ce2(e, t) {
  let o = new URL(e, location);
  return { response: fetch(o, t ? { integrity: t } : {}) };
}
s(ce2, "browser_getBinaryResponse");
var F;
g ? F = se2 : F = ce2;
async function q2(e, t) {
  let { response: o, binary: r5 } = F(e, t);
  if (r5) return r5;
  let a = await o;
  if (!a.ok) throw new Error(`Failed to load '${e}': request failed.`);
  return new Uint8Array(await a.arrayBuffer());
}
s(q2, "loadBinaryFile");
var I;
if ($) I = s(async (e) => await import(e), "loadScript");
else if (j) I = s(async (e) => {
  try {
    globalThis.importScripts(e);
  } catch (t) {
    if (t instanceof TypeError) await import(e);
    else throw t;
  }
}, "loadScript");
else if (g) I = le2;
else throw new Error("Cannot determine runtime environment");
async function le2(e) {
  e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? V2.runInThisContext(await (await fetch(e)).text()) : await import(z2.pathToFileURL(e).href);
}
s(le2, "nodeLoadScript");
async function J2(e) {
  if (g) {
    await T2();
    let t = await L.readFile(e, { encoding: "utf8" });
    return JSON.parse(t);
  } else return await (await fetch(e)).json();
}
s(J2, "loadLockFile");
async function K2() {
  if (A2) return __dirname;
  let e;
  try {
    throw new Error();
  } catch (r5) {
    e = r5;
  }
  let t = M2.parse(e)[0].fileName;
  if (g && !t.startsWith("file://") && (t = `file://${t}`), W) {
    let r5 = await import("node:path");
    return (await import("node:url")).fileURLToPath(r5.dirname(t));
  }
  let o = t.lastIndexOf(U2);
  if (o === -1) throw new Error("Could not extract indexURL path from pyodide module location");
  return t.slice(0, o);
}
s(K2, "calculateDirname");
function Y(e) {
  let t = e.FS, o = e.FS.filesystems.MEMFS, r5 = e.PATH, a = { DIR_MODE: 16895, FILE_MODE: 33279, mount: function(n) {
    if (!n.opts.fileSystemHandle) throw new Error("opts.fileSystemHandle is required");
    return o.mount.apply(null, arguments);
  }, syncfs: async (n, i2, c) => {
    try {
      let l2 = a.getLocalSet(n), d = await a.getRemoteSet(n), u = i2 ? d : l2, m = i2 ? l2 : d;
      await a.reconcile(n, u, m), c(null);
    } catch (l2) {
      c(l2);
    }
  }, getLocalSet: (n) => {
    let i2 = /* @__PURE__ */ Object.create(null);
    function c(u) {
      return u !== "." && u !== "..";
    }
    s(c, "isRealDir");
    function l2(u) {
      return (m) => r5.join2(u, m);
    }
    s(l2, "toAbsolute");
    let d = t.readdir(n.mountpoint).filter(c).map(l2(n.mountpoint));
    for (; d.length; ) {
      let u = d.pop(), m = t.stat(u);
      t.isDir(m.mode) && d.push.apply(d, t.readdir(u).filter(c).map(l2(u))), i2[u] = { timestamp: m.mtime, mode: m.mode };
    }
    return { type: "local", entries: i2 };
  }, getRemoteSet: async (n) => {
    let i2 = /* @__PURE__ */ Object.create(null), c = await de(n.opts.fileSystemHandle);
    for (let [l2, d] of c) l2 !== "." && (i2[r5.join2(n.mountpoint, l2)] = { timestamp: d.kind === "file" ? new Date((await d.getFile()).lastModified) : /* @__PURE__ */ new Date(), mode: d.kind === "file" ? a.FILE_MODE : a.DIR_MODE });
    return { type: "remote", entries: i2, handles: c };
  }, loadLocalEntry: (n) => {
    let c = t.lookupPath(n).node, l2 = t.stat(n);
    if (t.isDir(l2.mode)) return { timestamp: l2.mtime, mode: l2.mode };
    if (t.isFile(l2.mode)) return c.contents = o.getFileDataAsTypedArray(c), { timestamp: l2.mtime, mode: l2.mode, contents: c.contents };
    throw new Error("node type not supported");
  }, storeLocalEntry: (n, i2) => {
    if (t.isDir(i2.mode)) t.mkdirTree(n, i2.mode);
    else if (t.isFile(i2.mode)) t.writeFile(n, i2.contents, { canOwn: true });
    else throw new Error("node type not supported");
    t.chmod(n, i2.mode), t.utime(n, i2.timestamp, i2.timestamp);
  }, removeLocalEntry: (n) => {
    var i2 = t.stat(n);
    t.isDir(i2.mode) ? t.rmdir(n) : t.isFile(i2.mode) && t.unlink(n);
  }, loadRemoteEntry: async (n) => {
    if (n.kind === "file") {
      let i2 = await n.getFile();
      return { contents: new Uint8Array(await i2.arrayBuffer()), mode: a.FILE_MODE, timestamp: new Date(i2.lastModified) };
    } else {
      if (n.kind === "directory") return { mode: a.DIR_MODE, timestamp: /* @__PURE__ */ new Date() };
      throw new Error("unknown kind: " + n.kind);
    }
  }, storeRemoteEntry: async (n, i2, c) => {
    let l2 = n.get(r5.dirname(i2)), d = t.isFile(c.mode) ? await l2.getFileHandle(r5.basename(i2), { create: true }) : await l2.getDirectoryHandle(r5.basename(i2), { create: true });
    if (d.kind === "file") {
      let u = await d.createWritable();
      await u.write(c.contents), await u.close();
    }
    n.set(i2, d);
  }, removeRemoteEntry: async (n, i2) => {
    await n.get(r5.dirname(i2)).removeEntry(r5.basename(i2)), n.delete(i2);
  }, reconcile: async (n, i2, c) => {
    let l2 = 0, d = [];
    Object.keys(i2.entries).forEach(function(f2) {
      let y2 = i2.entries[f2], S2 = c.entries[f2];
      (!S2 || t.isFile(y2.mode) && y2.timestamp.getTime() > S2.timestamp.getTime()) && (d.push(f2), l2++);
    }), d.sort();
    let u = [];
    if (Object.keys(c.entries).forEach(function(f2) {
      i2.entries[f2] || (u.push(f2), l2++);
    }), u.sort().reverse(), !l2) return;
    let m = i2.type === "remote" ? i2.handles : c.handles;
    for (let f2 of d) {
      let y2 = r5.normalize(f2.replace(n.mountpoint, "/")).substring(1);
      if (c.type === "local") {
        let S2 = m.get(y2), X = await a.loadRemoteEntry(S2);
        a.storeLocalEntry(f2, X);
      } else {
        let S2 = a.loadLocalEntry(f2);
        await a.storeRemoteEntry(m, y2, S2);
      }
    }
    for (let f2 of u) if (c.type === "local") a.removeLocalEntry(f2);
    else {
      let y2 = r5.normalize(f2.replace(n.mountpoint, "/")).substring(1);
      await a.removeRemoteEntry(m, y2);
    }
  } };
  e.FS.filesystems.NATIVEFS_ASYNC = a;
}
s(Y, "initializeNativeFS");
var de = s(async (e) => {
  let t = [];
  async function o(a) {
    for await (let n of a.values()) t.push(n), n.kind === "directory" && await o(n);
  }
  s(o, "collect"), await o(e);
  let r5 = /* @__PURE__ */ new Map();
  r5.set(".", e);
  for (let a of t) {
    let n = (await e.resolve(a)).join("/");
    r5.set(n, a);
  }
  return r5;
}, "getFsHandles");
function G(e) {
  let t = { noImageDecoding: true, noAudioDecoding: true, noWasmDecoding: false, preRun: ge2(e), quit(o, r5) {
    throw t.exited = { status: o, toThrow: r5 }, r5;
  }, print: e.stdout, printErr: e.stderr, thisProgram: e._sysExecutable, arguments: e.args, API: { config: e }, locateFile: (o) => e.indexURL + o, instantiateWasm: ye(e.indexURL) };
  return t;
}
s(G, "createSettings");
function ue2(e) {
  return function(t) {
    let o = "/";
    try {
      t.FS.mkdirTree(e);
    } catch (r5) {
      console.error(`Error occurred while making a home directory '${e}':`), console.error(r5), console.error(`Using '${o}' for a home directory instead`), e = o;
    }
    t.FS.chdir(e);
  };
}
s(ue2, "createHomeDirectory");
function fe2(e) {
  return function(t) {
    Object.assign(t.ENV, e);
  };
}
s(fe2, "setEnvironment");
function me(e) {
  return e ? [async (t) => {
    t.addRunDependency("fsInitHook");
    try {
      await e(t.FS, { sitePackages: t.API.sitePackages });
    } finally {
      t.removeRunDependency("fsInitHook");
    }
  }] : [];
}
s(me, "callFsInitHook");
function pe(e) {
  let t = q2(e);
  return async (o) => {
    let r5 = o._py_version_major(), a = o._py_version_minor();
    o.FS.mkdirTree("/lib"), o.API.sitePackages = `/lib/python${r5}.${a}/site-packages`, o.FS.mkdirTree(o.API.sitePackages), o.addRunDependency("install-stdlib");
    try {
      let n = await t;
      o.FS.writeFile(`/lib/python${r5}${a}.zip`, n);
    } catch (n) {
      console.error("Error occurred while installing the standard library:"), console.error(n);
    } finally {
      o.removeRunDependency("install-stdlib");
    }
  };
}
s(pe, "installStdlib");
function ge2(e) {
  let t;
  return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + "python_stdlib.zip", [...me(e.fsInit), pe(t), ue2(e.env.HOME), fe2(e.env), Y];
}
s(ge2, "getFileSystemInitializationFuncs");
function ye(e) {
  if (typeof WasmOffsetConverter < "u") return;
  let { binary: t, response: o } = F(e + "pyodide.asm.wasm");
  return function(r5, a) {
    return async function() {
      try {
        let n;
        o ? n = await WebAssembly.instantiateStreaming(o, r5) : n = await WebAssembly.instantiate(await t, r5);
        let { instance: i2, module: c } = n;
        a(i2, c);
      } catch (n) {
        console.warn("wasm instantiation failed!"), console.warn(n);
      }
    }(), {};
  };
}
s(ye, "getInstantiateWasmFunc");
var C2 = "0.27.7";
async function $e2(e = {}) {
  var u, m;
  await T2();
  let t = e.indexURL || await K2();
  t = x(t), t.endsWith("/") || (t += "/"), e.indexURL = t;
  let o = { fullStdLib: false, jsglobals: globalThis, stdin: globalThis.prompt ? globalThis.prompt : void 0, lockFileURL: t + "pyodide-lock.json", args: [], env: {}, packageCacheDir: t, packages: [], enableRunUntilComplete: true, checkAPIVersion: true, BUILD_ID: "e94377f5ce7dcf67e0417b69a0016733c2cfb6b4622ee8c490a6f17eb58e863b" }, r5 = Object.assign(o, e);
  (u = r5.env).HOME ?? (u.HOME = "/home/pyodide"), (m = r5.env).PYTHONINSPECT ?? (m.PYTHONINSPECT = "1");
  let a = G(r5), n = a.API;
  if (n.lockFilePromise = J2(r5.lockFileURL), typeof _createPyodideModule != "function") {
    let f2 = `${r5.indexURL}pyodide.asm.js`;
    await I(f2);
  }
  let i2;
  if (e._loadSnapshot) {
    let f2 = await e._loadSnapshot;
    ArrayBuffer.isView(f2) ? i2 = f2 : i2 = new Uint8Array(f2), a.noInitialRun = true, a.INITIAL_MEMORY = i2.length;
  }
  let c = await _createPyodideModule(a);
  if (a.exited) throw a.exited.toThrow;
  if (e.pyproxyToStringRepr && n.setPyProxyToStringMethod(true), n.version !== C2 && r5.checkAPIVersion) throw new Error(`Pyodide version does not match: '${C2}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);
  c.locateFile = (f2) => {
    throw new Error("Didn't expect to load any more file_packager files!");
  };
  let l2;
  i2 && (l2 = n.restoreSnapshot(i2));
  let d = n.finalizeBootstrap(l2, e._snapshotDeserializer);
  return n.sys.path.insert(0, ""), d.version.includes("dev") || n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d.version}/full/`), n._pyodide.set_excepthook(), await n.packageIndexReady, n.initializeStreams(r5.stdin, r5.stdout, r5.stderr), d;
}
s($e2, "loadPyodide");

// src/pyodide-proxy.ts
async function setupPythonEnv(pyodide2, callJS2) {
  const repr = pyodide2.globals.get("repr");
  pyodide2.globals.set("js_pyodide", pyodide2);
  const pyconsole = await pyodide2.runPythonAsync(`
  import pyodide.console
  import __main__
  pyodide.console.PyodideConsole(__main__.__dict__)
  `);
  const tabComplete = pyconsole.complete.copy();
  pyconsole.destroy();
  if (callJS2) {
    pyodide2.globals.set("callJS", callJS2);
  }
  const shortFormatLastTraceback = await pyodide2.runPythonAsync(`
  def _short_format_last_traceback() -> str:
      import sys
      import traceback
      e = sys.last_value
      found_marker = False
      nframes = 0
      for (frame, _) in traceback.walk_tb(e.__traceback__):
          if frame.f_code.co_filename in ("<console>", "<exec>"):
              found_marker = True
          if found_marker:
              nframes += 1
      return "".join(traceback.format_exception(type(e), e, e.__traceback__, -nframes))

  _short_format_last_traceback
  `);
  await pyodide2.runPythonAsync(`del _short_format_last_traceback`);
  return {
    repr,
    tabComplete,
    shortFormatLastTraceback
  };
}
function processReturnValue(value, returnResult = "none", pyodide2, repr) {
  const possibleReturnValues = {
    get value() {
      if (value instanceof pyodide2.ffi.PyProxy) {
        return value.toJs();
      } else {
        return value;
      }
    },
    get printed_value() {
      return repr(value);
    },
    get to_html() {
      let toHtml;
      try {
        toHtml = pyodide2.globals.get("_to_html");
      } catch (e) {
        console.error("Couldn't find _to_html function: ", e);
        toHtml = (x2) => ({
          type: "text",
          value: "Couldn't finding _to_html function."
        });
      }
      const val = toHtml(value).toJs({
        dict_converter: Object.fromEntries
      });
      return val;
    },
    get none() {
      return void 0;
    }
  };
  return possibleReturnValues[returnResult];
}

// src/pyodide-worker.ts
var pyodideStatus = "none";
var pyodide;
self.stdout_callback = function(s2) {
  self.postMessage({ type: "nonreply", subtype: "output", stdout: s2 });
};
self.stderr_callback = function(s2) {
  self.postMessage({ type: "nonreply", subtype: "output", stderr: s2 });
};
async function callJS(fnName, args) {
  self.postMessage({
    type: "nonreply",
    subtype: "callJS",
    fnName: fnName.toJs(),
    args: args.toJs()
  });
}
var pyUtils;
self.onmessage = async function(e) {
  const msg = e.data;
  if (msg.type === "openChannel") {
    const clientPort = e.ports[0];
    await openChannel(msg.path, msg.appName, clientPort, pyodide);
    return;
  } else if (msg.type === "makeRequest") {
    const clientPort = e.ports[0];
    await makeRequest(msg.scope, msg.appName, clientPort, pyodide);
    return;
  }
  const messagePort = e.ports[0];
  try {
    if (msg.type === "init") {
      if (pyodideStatus === "none") {
        pyodideStatus = "loading";
        pyodide = await $e2({
          ...msg.config,
          stdout: self.stdout_callback,
          stderr: self.stderr_callback
        });
        pyUtils = await setupPythonEnv(pyodide, callJS);
        pyodideStatus = "loaded";
      }
      messagePort.postMessage({ type: "reply", subtype: "done" });
    } else if (msg.type === "loadPackagesFromImports") {
      const result = await pyodide.loadPackagesFromImports(msg.code);
      messagePort.postMessage({
        type: "reply",
        subtype: "done",
        value: result
      });
    } else if (msg.type === "runPythonAsync") {
      await pyodide.loadPackagesFromImports(msg.code);
      const result = await pyodide.runPythonAsync(msg.code);
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (result instanceof pyodide.ffi.PyProxy) {
          result.destroy();
        }
      }
    } else if (msg.type === "tabComplete") {
      const completions = pyUtils.tabComplete(msg.code).toJs()[0];
      messagePort.postMessage({
        type: "reply",
        subtype: "tabCompletions",
        completions
      });
    } else if (msg.type === "callPyAsync") {
      const { fnName, args, kwargs } = msg;
      let fn = pyodide.globals.get(fnName[0]);
      for (const el of fnName.slice(1)) {
        fn = fn[el];
      }
      const resultMaybePromise = fn.callKwargs(...args, kwargs);
      const result = await Promise.resolve(resultMaybePromise);
      if (msg.printResult && result !== void 0) {
        self.stdout_callback(pyUtils.repr(result));
      }
      try {
        const processedResult = processReturnValue(
          result,
          msg.returnResult,
          pyodide,
          pyUtils.repr
        );
        messagePort.postMessage({
          type: "reply",
          subtype: "done",
          value: processedResult
        });
      } finally {
        if (result instanceof pyodide.ffi.PyProxy) {
          result.destroy();
        }
      }
    } else {
      messagePort.postMessage({
        type: "reply",
        subtype: "done",
        error: new Error(`Unknown message type: ${msg.toString()}`)
      });
    }
  } catch (e2) {
    if (e2 instanceof pyodide.ffi.PythonError) {
      e2.message = pyUtils.shortFormatLastTraceback();
    }
    messagePort.postMessage({
      type: "reply",
      subtype: "done",
      error: errorToPostableErrorObject(e2)
    });
  }
};
