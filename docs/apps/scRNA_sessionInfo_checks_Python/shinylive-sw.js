// Shinylive 0.10.8
// Copyright 2026 Posit, PBC
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/assets/shinylive-inject-socket.txt
var shinylive_inject_socket_default = '// src/messageportwebsocket.ts\nvar MessagePortWebSocket = class extends EventTarget {\n  constructor(port) {\n    super();\n    this.readyState = 0;\n    this.addEventListener("open", (e) => {\n      if (this.onopen) {\n        this.onopen(e);\n      }\n    });\n    this.addEventListener("message", (e) => {\n      if (this.onmessage) {\n        this.onmessage(e);\n      }\n    });\n    this.addEventListener("error", (e) => {\n      if (this.onerror) {\n        this.onerror(e);\n      }\n    });\n    this.addEventListener("close", (e) => {\n      if (this.onclose) {\n        this.onclose(e);\n      }\n    });\n    this._port = port;\n    port.addEventListener("message", this._onMessage.bind(this));\n    port.start();\n  }\n  // Call on the server side of the connection, to tell the client that\n  // the connection has been established.\n  accept() {\n    if (this.readyState !== 0) {\n      return;\n    }\n    this.readyState = 1;\n    this._port.postMessage({ type: "open" });\n  }\n  send(data) {\n    if (this.readyState === 0) {\n      throw new DOMException(\n        "Can\'t send messages while WebSocket is in CONNECTING state",\n        "InvalidStateError"\n      );\n    }\n    if (this.readyState > 1) {\n      return;\n    }\n    this._port.postMessage({ type: "message", value: { data } });\n  }\n  close(code, reason) {\n    if (this.readyState > 1) {\n      return;\n    }\n    this.readyState = 2;\n    this._port.postMessage({ type: "close", value: { code, reason } });\n    this.readyState = 3;\n    this.dispatchEvent(new CloseEvent("close", { code, reason }));\n  }\n  _onMessage(e) {\n    const event = e.data;\n    switch (event.type) {\n      case "open":\n        if (this.readyState === 0) {\n          this.readyState = 1;\n          this.dispatchEvent(new Event("open"));\n          return;\n        }\n        break;\n      case "message":\n        if (this.readyState === 1) {\n          this.dispatchEvent(new MessageEvent("message", { ...event.value }));\n          return;\n        }\n        break;\n      case "close":\n        if (this.readyState < 3) {\n          this.readyState = 3;\n          this.dispatchEvent(new CloseEvent("close", { ...event.value }));\n          return;\n        }\n        break;\n    }\n    this._reportError(\n      `Unexpected event \'${event.type}\' while in readyState ${this.readyState}`,\n      1002\n    );\n  }\n  _reportError(message, code) {\n    this.dispatchEvent(new ErrorEvent("error", { message }));\n    if (typeof code === "number") {\n      this.close(code, message);\n    }\n  }\n};\n\n// src/shinylive-inject-socket.ts\nwindow.Shiny.createSocket = function() {\n  const channel = new MessageChannel();\n  window.parent.postMessage(\n    {\n      type: "openChannel",\n      // Infer app name from path: "/foo/app_abc123/"" => "app_abc123"\n      appName: window.location.pathname.replace(\n        new RegExp(".*/([^/]+)/$"),\n        "$1"\n      ),\n      path: "/websocket/"\n    },\n    "*",\n    [channel.port2]\n  );\n  return new MessagePortWebSocket(channel.port1);\n};\n';

// src/utils.ts
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function dirname(path) {
  if (path === "/" || path === "") {
    return "";
  }
  return path.replace(/[/]?[^/]+[/]?$/, "");
}
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
var Es = (r5, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of bs(e)) !xs.call(r5, n) && n !== t && gr(r5, n, { get: () => e[n], enumerable: !(s = gs(e, n)) || s.enumerable });
  return r5;
};
var be = (r5, e, t) => (t = r5 != null ? Rs(ws(r5)) : {}, Es(e || !r5 || !r5.__esModule ? gr(t, "default", { value: r5, enumerable: true }) : t, r5));
var qt = (r5, e, t) => e.has(r5) || br("Cannot " + t);
var i = (r5, e, t) => (qt(r5, e, "read from private field"), t ? t.call(r5) : e.get(r5));
var p = (r5, e, t) => e.has(r5) ? br("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r5) : e.set(r5, t);
var M = (r5, e, t) => (qt(r5, e, "access private method"), t);
var De = T((I) => {
  "use strict";
  Object.defineProperty(I, "__esModule", { value: true });
  I.getUint64 = I.getInt64 = I.setInt64 = I.setUint64 = I.UINT32_MAX = void 0;
  I.UINT32_MAX = 4294967295;
  function ks(r5, e, t) {
    let s = t / 4294967296, n = t;
    r5.setUint32(e, s), r5.setUint32(e + 4, n);
  }
  I.setUint64 = ks;
  function Ms(r5, e, t) {
    let s = Math.floor(t / 4294967296), n = t;
    r5.setUint32(e, s), r5.setUint32(e + 4, n);
  }
  I.setInt64 = Ms;
  function Ws(r5, e) {
    let t = r5.getInt32(e), s = r5.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getInt64 = Ws;
  function Ds(r5, e) {
    let t = r5.getUint32(e), s = r5.getUint32(e + 4);
    return t * 4294967296 + s;
  }
  I.getUint64 = Ds;
});
var ft = T((_) => {
  "use strict";
  var $t, Xt, Kt;
  Object.defineProperty(_, "__esModule", { value: true });
  _.utf8DecodeTD = _.TEXT_DECODER_THRESHOLD = _.utf8DecodeJs = _.utf8EncodeTE = _.TEXT_ENCODER_THRESHOLD = _.utf8EncodeJs = _.utf8Count = void 0;
  var Ar = De(), yt = (typeof process > "u" || (($t = process == null ? void 0 : process.env) === null || $t === void 0 ? void 0 : $t.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
  function As(r5) {
    let e = r5.length, t = 0, s = 0;
    for (; s < e; ) {
      let n = r5.charCodeAt(s++);
      if ((n & 4294967168) === 0) {
        t++;
        continue;
      } else if ((n & 4294965248) === 0) t += 2;
      else {
        if (n >= 55296 && n <= 56319 && s < e) {
          let o = r5.charCodeAt(s);
          (o & 64512) === 56320 && (++s, n = ((n & 1023) << 10) + (o & 1023) + 65536);
        }
        (n & 4294901760) === 0 ? t += 3 : t += 4;
      }
    }
    return t;
  }
  _.utf8Count = As;
  function Os(r5, e, t) {
    let s = r5.length, n = t, o = 0;
    for (; o < s; ) {
      let a = r5.charCodeAt(o++);
      if ((a & 4294967168) === 0) {
        e[n++] = a;
        continue;
      } else if ((a & 4294965248) === 0) e[n++] = a >> 6 & 31 | 192;
      else {
        if (a >= 55296 && a <= 56319 && o < s) {
          let c = r5.charCodeAt(o);
          (c & 64512) === 56320 && (++o, a = ((a & 1023) << 10) + (c & 1023) + 65536);
        }
        (a & 4294901760) === 0 ? (e[n++] = a >> 12 & 15 | 224, e[n++] = a >> 6 & 63 | 128) : (e[n++] = a >> 18 & 7 | 240, e[n++] = a >> 12 & 63 | 128, e[n++] = a >> 6 & 63 | 128);
      }
      e[n++] = a & 63 | 128;
    }
  }
  _.utf8EncodeJs = Os;
  var Ae = yt ? new TextEncoder() : void 0;
  _.TEXT_ENCODER_THRESHOLD = yt ? typeof process < "u" && ((Xt = process == null ? void 0 : process.env) === null || Xt === void 0 ? void 0 : Xt.TEXT_ENCODING) !== "force" ? 200 : 0 : Ar.UINT32_MAX;
  function Cs(r5, e, t) {
    e.set(Ae.encode(r5), t);
  }
  function Is(r5, e, t) {
    Ae.encodeInto(r5, e.subarray(t));
  }
  _.utf8EncodeTE = Ae != null && Ae.encodeInto ? Is : Cs;
  var Us = 4096;
  function Ns(r5, e, t) {
    let s = e, n = s + t, o = [], a = "";
    for (; s < n; ) {
      let c = r5[s++];
      if ((c & 128) === 0) o.push(c);
      else if ((c & 224) === 192) {
        let u = r5[s++] & 63;
        o.push((c & 31) << 6 | u);
      } else if ((c & 240) === 224) {
        let u = r5[s++] & 63, k = r5[s++] & 63;
        o.push((c & 31) << 12 | u << 6 | k);
      } else if ((c & 248) === 240) {
        let u = r5[s++] & 63, k = r5[s++] & 63, g = r5[s++] & 63, H = (c & 7) << 18 | u << 12 | k << 6 | g;
        H > 65535 && (H -= 65536, o.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), o.push(H);
      } else o.push(c);
      o.length >= Us && (a += String.fromCharCode(...o), o.length = 0);
    }
    return o.length > 0 && (a += String.fromCharCode(...o)), a;
  }
  _.utf8DecodeJs = Ns;
  var js = yt ? new TextDecoder() : null;
  _.TEXT_DECODER_THRESHOLD = yt ? typeof process < "u" && ((Kt = process == null ? void 0 : process.env) === null || Kt === void 0 ? void 0 : Kt.TEXT_DECODER) !== "force" ? 200 : 0 : Ar.UINT32_MAX;
  function Bs(r5, e, t) {
    let s = r5.subarray(e, e + t);
    return js.decode(s);
  }
  _.utf8DecodeTD = Bs;
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
var er = T((P) => {
  "use strict";
  Object.defineProperty(P, "__esModule", { value: true });
  P.timestampExtension = P.decodeTimestampExtension = P.decodeTimestampToTimeSpec = P.encodeTimestampExtension = P.encodeDateToTimeSpec = P.encodeTimeSpecToTimestamp = P.EXT_TIMESTAMP = void 0;
  var Ls = gt(), Or = De();
  P.EXT_TIMESTAMP = -1;
  var Fs = 4294967296 - 1, qs = 17179869184 - 1;
  function Cr({ sec: r5, nsec: e }) {
    if (r5 >= 0 && e >= 0 && r5 <= qs) if (e === 0 && r5 <= Fs) {
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, r5), t;
    } else {
      let t = r5 / 4294967296, s = r5 & 4294967295, n = new Uint8Array(8), o = new DataView(n.buffer);
      return o.setUint32(0, e << 2 | t & 3), o.setUint32(4, s), n;
    }
    else {
      let t = new Uint8Array(12), s = new DataView(t.buffer);
      return s.setUint32(0, e), (0, Or.setInt64)(s, 4, r5), t;
    }
  }
  P.encodeTimeSpecToTimestamp = Cr;
  function Ir(r5) {
    let e = r5.getTime(), t = Math.floor(e / 1e3), s = (e - t * 1e3) * 1e6, n = Math.floor(s / 1e9);
    return { sec: t + n, nsec: s - n * 1e9 };
  }
  P.encodeDateToTimeSpec = Ir;
  function Ur(r5) {
    if (r5 instanceof Date) {
      let e = Ir(r5);
      return Cr(e);
    } else return null;
  }
  P.encodeTimestampExtension = Ur;
  function Nr(r5) {
    let e = new DataView(r5.buffer, r5.byteOffset, r5.byteLength);
    switch (r5.byteLength) {
      case 4:
        return { sec: e.getUint32(0), nsec: 0 };
      case 8: {
        let t = e.getUint32(0), s = e.getUint32(4), n = (t & 3) * 4294967296 + s, o = t >>> 2;
        return { sec: n, nsec: o };
      }
      case 12: {
        let t = (0, Or.getInt64)(e, 4), s = e.getUint32(0);
        return { sec: t, nsec: s };
      }
      default:
        throw new Ls.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${r5.length}`);
    }
  }
  P.decodeTimestampToTimeSpec = Nr;
  function jr(r5) {
    let e = Nr(r5);
    return new Date(e.sec * 1e3 + e.nsec / 1e6);
  }
  P.decodeTimestampExtension = jr;
  P.timestampExtension = { type: P.EXT_TIMESTAMP, encode: Ur, decode: jr };
});
var xt = T((wt) => {
  "use strict";
  Object.defineProperty(wt, "__esModule", { value: true });
  wt.ExtensionCodec = void 0;
  var bt = Yt(), Vs = er(), Oe = class {
    constructor() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(Vs.timestampExtension);
    }
    register({ type: e, encode: t, decode: s }) {
      if (e >= 0) this.encoders[e] = t, this.decoders[e] = s;
      else {
        let n = 1 + e;
        this.builtInEncoders[n] = t, this.builtInDecoders[n] = s;
      }
    }
    tryToEncode(e, t) {
      for (let s = 0; s < this.builtInEncoders.length; s++) {
        let n = this.builtInEncoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = -1 - s;
            return new bt.ExtData(a, o);
          }
        }
      }
      for (let s = 0; s < this.encoders.length; s++) {
        let n = this.encoders[s];
        if (n != null) {
          let o = n(e, t);
          if (o != null) {
            let a = s;
            return new bt.ExtData(a, o);
          }
        }
      }
      return e instanceof bt.ExtData ? e : null;
    }
    decode(e, t, s) {
      let n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      return n ? n(e, t, s) : new bt.ExtData(t, e);
    }
  };
  wt.ExtensionCodec = Oe;
  Oe.defaultCodec = new Oe();
});
var tr = T((de) => {
  "use strict";
  Object.defineProperty(de, "__esModule", { value: true });
  de.createDataView = de.ensureUint8Array = void 0;
  function Br(r5) {
    return r5 instanceof Uint8Array ? r5 : ArrayBuffer.isView(r5) ? new Uint8Array(r5.buffer, r5.byteOffset, r5.byteLength) : r5 instanceof ArrayBuffer ? new Uint8Array(r5) : Uint8Array.from(r5);
  }
  de.ensureUint8Array = Br;
  function Js(r5) {
    if (r5 instanceof ArrayBuffer) return new DataView(r5);
    let e = Br(r5);
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
  }
  de.createDataView = Js;
});
var sr = T((B) => {
  "use strict";
  Object.defineProperty(B, "__esModule", { value: true });
  B.Encoder = B.DEFAULT_INITIAL_BUFFER_SIZE = B.DEFAULT_MAX_DEPTH = void 0;
  var Ce = ft(), Hs = xt(), Lr = De(), zs = tr();
  B.DEFAULT_MAX_DEPTH = 100;
  B.DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var rr = class {
    constructor(e = Hs.ExtensionCodec.defaultCodec, t = void 0, s = B.DEFAULT_MAX_DEPTH, n = B.DEFAULT_INITIAL_BUFFER_SIZE, o = false, a = false, c = false, u = false) {
      this.extensionCodec = e, this.context = t, this.maxDepth = s, this.initialBufferSize = n, this.sortKeys = o, this.forceFloat32 = a, this.ignoreUndefined = c, this.forceIntegerToFloat = u, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
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
      let t = new ArrayBuffer(e), s = new Uint8Array(t), n = new DataView(t);
      s.set(this.bytes), this.view = n, this.bytes = s;
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
      let s = this.extensionCodec.tryToEncode(e, this.context);
      if (s != null) this.encodeExtension(s);
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
      let s = (0, zs.ensureUint8Array)(e);
      this.writeU8a(s);
    }
    encodeArray(e, t) {
      let s = e.length;
      if (s < 16) this.writeU8(144 + s);
      else if (s < 65536) this.writeU8(220), this.writeU16(s);
      else if (s < 4294967296) this.writeU8(221), this.writeU32(s);
      else throw new Error(`Too large array: ${s}`);
      for (let n of e) this.doEncode(n, t + 1);
    }
    countWithoutUndefined(e, t) {
      let s = 0;
      for (let n of t) e[n] !== void 0 && s++;
      return s;
    }
    encodeMap(e, t) {
      let s = Object.keys(e);
      this.sortKeys && s.sort();
      let n = this.ignoreUndefined ? this.countWithoutUndefined(e, s) : s.length;
      if (n < 16) this.writeU8(128 + n);
      else if (n < 65536) this.writeU8(222), this.writeU16(n);
      else if (n < 4294967296) this.writeU8(223), this.writeU32(n);
      else throw new Error(`Too large map object: ${n}`);
      for (let o of s) {
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
  B.Encoder = rr;
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
      for (let s = 0; s < this.maxKeyLength; s++) this.caches.push([]);
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, s) {
      let n = this.caches[s - 1];
      e: for (let o of n) {
        let a = o.bytes;
        for (let c = 0; c < s; c++) if (a[c] !== e[t + c]) continue e;
        return o.str;
      }
      return null;
    }
    store(e, t) {
      let s = this.caches[e.length - 1], n = { bytes: e, str: t };
      s.length >= this.maxLengthPerKey ? s[Math.random() * s.length | 0] = n : s.push(n);
    }
    decode(e, t, s) {
      let n = this.find(e, t, s);
      if (n != null) return this.hit++, n;
      this.miss++;
      let o = (0, Qs.utf8DecodeJs)(e, t, s), a = Uint8Array.prototype.slice.call(e, t, t + s);
      return this.store(a, o), o;
    }
  };
  Pt.CachedKeyDecoder = nr;
});
var Tt = T(($) => {
  "use strict";
  Object.defineProperty($, "__esModule", { value: true });
  $.Decoder = $.DataViewIndexOutOfBoundsError = void 0;
  var or = qr(), en = xt(), oe = De(), ar = ft(), ir = tr(), tn = Vr(), G = gt(), rn = (r5) => {
    let e = typeof r5;
    return e === "string" || e === "number";
  }, Ie = -1, cr = new DataView(new ArrayBuffer(0)), sn = new Uint8Array(cr.buffer);
  $.DataViewIndexOutOfBoundsError = (() => {
    try {
      cr.getInt8(0);
    } catch (r5) {
      return r5.constructor;
    }
    throw new Error("never reached");
  })();
  var Jr = new $.DataViewIndexOutOfBoundsError("Insufficient data"), nn = new tn.CachedKeyDecoder(), lr = class {
    constructor(e = en.ExtensionCodec.defaultCodec, t = void 0, s = oe.UINT32_MAX, n = oe.UINT32_MAX, o = oe.UINT32_MAX, a = oe.UINT32_MAX, c = oe.UINT32_MAX, u = nn) {
      this.extensionCodec = e, this.context = t, this.maxStrLength = s, this.maxBinLength = n, this.maxArrayLength = o, this.maxMapLength = a, this.maxExtLength = c, this.keyDecoder = u, this.totalPos = 0, this.pos = 0, this.view = cr, this.bytes = sn, this.headByte = Ie, this.stack = [];
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
        let t = this.bytes.subarray(this.pos), s = (0, ir.ensureUint8Array)(e), n = new Uint8Array(t.length + s.length);
        n.set(t), n.set(s, t.length), this.setBuffer(n);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      let { view: t, pos: s } = this;
      return new RangeError(`Extra ${t.byteLength - s} of ${t.byteLength} byte(s) found at buffer[${e}]`);
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
      let t = false, s;
      for await (let c of e) {
        if (t) throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(c);
        try {
          s = this.doDecodeSync(), t = true;
        } catch (u) {
          if (!(u instanceof $.DataViewIndexOutOfBoundsError)) throw u;
        }
        this.totalPos += this.pos;
      }
      if (t) {
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
        return s;
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
      let s = t, n = -1;
      for await (let o of e) {
        if (t && n === 0) throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(o), s && (n = this.readArraySize(), s = false, this.complete());
        try {
          for (; yield this.doDecodeSync(), --n !== 0; ) ;
        } catch (a) {
          if (!(a instanceof $.DataViewIndexOutOfBoundsError)) throw a;
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
        } else throw new G.DecodeError(`Unrecognized type byte: ${(0, or.prettyByte)(e)}`);
        this.complete();
        let s = this.stack;
        for (; s.length > 0; ) {
          let n = s[s.length - 1];
          if (n.type === 0) if (n.array[n.position] = t, n.position++, n.position === n.size) s.pop(), t = n.array;
          else continue e;
          else if (n.type === 1) {
            if (!rn(t)) throw new G.DecodeError("The type of key must be string or number but " + typeof t);
            if (t === "__proto__") throw new G.DecodeError("The key __proto__ is not allowed");
            n.key = t, n.type = 2;
            continue e;
          } else if (n.map[n.key] = t, n.readCount++, n.readCount === n.size) s.pop(), t = n.map;
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
          throw new G.DecodeError(`Unrecognized array type byte: ${(0, or.prettyByte)(e)}`);
        }
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) throw new G.DecodeError(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      this.stack.push({ type: 1, size: e, key: null, readCount: 0, map: {} });
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) throw new G.DecodeError(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      this.stack.push({ type: 0, size: e, array: new Array(e), position: 0 });
    }
    decodeUtf8String(e, t) {
      var s;
      if (e > this.maxStrLength) throw new G.DecodeError(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      if (this.bytes.byteLength < this.pos + t + e) throw Jr;
      let n = this.pos + t, o;
      return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(e)) ? o = this.keyDecoder.decode(this.bytes, n, e) : e > ar.TEXT_DECODER_THRESHOLD ? o = (0, ar.utf8DecodeTD)(this.bytes, n, e) : o = (0, ar.utf8DecodeJs)(this.bytes, n, e), this.pos += t + e, o;
    }
    stateIsMapKey() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1].type === 1 : false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength) throw new G.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      if (!this.hasRemaining(e + t)) throw Jr;
      let s = this.pos + t, n = this.bytes.subarray(s, s + e);
      return this.pos += t + e, n;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength) throw new G.DecodeError(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      let s = this.view.getInt8(this.pos + t), n = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(n, s, this.context);
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
      let e = (0, oe.getUint64)(this.view, this.pos);
      return this.pos += 8, e;
    }
    readI64() {
      let e = (0, oe.getInt64)(this.view, this.pos);
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
  $.Decoder = lr;
});
var ur = T((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: true });
  L.decodeMulti = L.decode = L.defaultDecodeOptions = void 0;
  var Hr = Tt();
  L.defaultDecodeOptions = {};
  function on(r5, e = L.defaultDecodeOptions) {
    return new Hr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(r5);
  }
  L.decode = on;
  function an(r5, e = L.defaultDecodeOptions) {
    return new Hr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeMulti(r5);
  }
  L.decodeMulti = an;
});
var $r = T((Y) => {
  "use strict";
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.ensureAsyncIterable = Y.asyncIterableFromStream = Y.isAsyncIterable = void 0;
  function zr(r5) {
    return r5[Symbol.asyncIterator] != null;
  }
  Y.isAsyncIterable = zr;
  function ln(r5) {
    if (r5 == null) throw new Error("Assertion Failure: value must not be null nor undefined");
  }
  async function* Gr(r5) {
    let e = r5.getReader();
    try {
      for (; ; ) {
        let { done: t, value: s } = await e.read();
        if (t) return;
        ln(s), yield s;
      }
    } finally {
      e.releaseLock();
    }
  }
  Y.asyncIterableFromStream = Gr;
  function cn(r5) {
    return zr(r5) ? r5 : Gr(r5);
  }
  Y.ensureAsyncIterable = cn;
});
var Kr = T((F) => {
  "use strict";
  Object.defineProperty(F, "__esModule", { value: true });
  F.decodeStream = F.decodeMultiStream = F.decodeArrayStream = F.decodeAsync = void 0;
  var pr = Tt(), dr = $r(), St = ur();
  async function un(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(t);
  }
  F.decodeAsync = un;
  function pn(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(t);
  }
  F.decodeArrayStream = pn;
  function Xr(r5, e = St.defaultDecodeOptions) {
    let t = (0, dr.ensureAsyncIterable)(r5);
    return new pr.Decoder(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(t);
  }
  F.decodeMultiStream = Xr;
  function dn(r5, e = St.defaultDecodeOptions) {
    return Xr(r5, e);
  }
  F.decodeStream = dn;
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
  let s = document.createElement("script");
  s.src = r5, s.onload = () => e(), s.onerror = t, document.head.appendChild(s);
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
  let t = {}, s = { n: 0 };
  try {
    let n = new ve(e);
    b(n, s), t.code = l.allocateUTF8(r5);
    let o = l._R_ParseEvalString(t.code, n.ptr);
    return h.wrap(o);
  } finally {
    wr(t), v(s.n);
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
  if (r5.every((s) => s && typeof s == "object" && !Ye(s) && !te(s))) {
    let s = r5, n = s.every((a) => Object.keys(a).filter((c) => !Object.keys(s[0]).includes(c)).length === 0 && Object.keys(s[0]).filter((c) => !Object.keys(a).includes(c)).length === 0), o = s.every((a) => Object.values(a).every((c) => Mr(c) || kr(c)));
    if (n && o) return ke.fromD3(s);
  }
  if (r5.every((s) => typeof s == "boolean" || s === null)) return new se(r5);
  if (r5.every((s) => typeof s == "number" || s === null)) return new We(r5);
  if (r5.every((s) => typeof s == "string" || s === null)) return new z(r5);
  try {
    let s = new K([new C("c"), ...r5]);
    return b(s, e), s.eval();
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
    return Object.keys(U).find((s) => U[s] === e);
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
    let s = l._TYPEOF(t), n = Object.keys(U)[Object.values(U).indexOf(s)];
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
    let t = { n: 0 }, s = new K([new C("class"), this]);
    b(s, t);
    try {
      return s.eval();
    } finally {
      v(t.n);
    }
  }
  setNames(t) {
    let s;
    if (t === null) s = S.null;
    else if (Array.isArray(t) && t.every((n) => typeof n == "string" || n === null)) s = new z(t);
    else throw new Error("Argument to setNames must be null or an Array of strings or null");
    return l._Rf_setAttrib(this.ptr, S.namesSymbol.ptr, s.ptr), this;
  }
  names() {
    let t = z.wrap(l._Rf_getAttrib(this.ptr, S.namesSymbol.ptr));
    return t.isNull() ? null : t.toArray();
  }
  includes(t) {
    let s = this.names();
    return s && s.includes(t);
  }
  toJs(t = { depth: 0 }, s = 1) {
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
    let s = xr(S.null);
    try {
      let n = (a, c) => {
        let u = a.get(c);
        return vr(u, s);
      }, o = t.reduce(n, this);
      return o.isNull() ? void 0 : o;
    } finally {
      Er(s);
    }
  }
  set(t, s) {
    let n = { n: 0 };
    try {
      let o = new re2(t);
      b(o, n);
      let a = new re2(s);
      b(a, n);
      let c = new C("[[<-"), u = l._Rf_lang4(c.ptr, this.ptr, o.ptr, a.ptr);
      return b(u, n), re2.wrap(Ee(u, S.baseEnv));
    } finally {
      v(n.n);
    }
  }
  static getMethods(t) {
    let s = /* @__PURE__ */ new Set(), n = t;
    do
      Object.getOwnPropertyNames(n).map((o) => s.add(o));
    while (n = Object.getPrototypeOf(n));
    return [...s.keys()].filter((o) => typeof t[o] == "function");
  }
};
ce = /* @__PURE__ */ new WeakSet(), Xe = function(t, s) {
  let n = { n: 0 };
  try {
    let o = new re(t);
    b(o, n);
    let a = l._Rf_lang3(s, this.ptr, o.ptr);
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
      let { names: s, values: n } = ue(e), o = r.wrap(l._Rf_allocList(n.length));
      b(o, t);
      for (let [a, c] = [0, o]; !c.isNull(); [a, c] = [a + 1, c.cdr()]) c.setcar(new h(n[a]));
      o.setNames(s), super(o);
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
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = -1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([a]) => a);
    if (!e && new Set(o).size !== o.length) throw new Error("Duplicate key when converting pairlist without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a)) throw new Error("Empty or null key when converting pairlist without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((u) => u[0] === a[0]) === c));
  }
  entries(e = { depth: 1 }) {
    let t = this.toJs(e);
    return t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = [], n = false, o = [];
    for (let c = this; !c.isNull(); c = c.cdr()) {
      let u = c.tag();
      u.isNull() ? s.push("") : (n = true, s.push(u.toString())), e.depth && t >= e.depth ? o.push(c.car()) : o.push(c.car().toJs(e, t + 1));
    }
    return { type: "pairlist", names: n ? s : null, values: o };
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
      let { values: s } = ue(e), n = s.map((a) => b(new h(a), t)), o = r2.wrap(l._Rf_allocVector(U.call, s.length));
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
      let s = z.wrap(Ee(t, S.baseEnv));
      return b(s, e), s.toString();
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
    let s = { n: 0 };
    try {
      let n = ue(e), o = l._Rf_allocVector(U.list, n.values.length);
      b(o, s), n.values.forEach((c, u) => {
        Wr(c) ? l._SET_VECTOR_ELT(o, u, new r3(c).ptr) : l._SET_VECTOR_ELT(o, u, new h(c).ptr);
      });
      let a = t || n.names;
      if (a && a.length !== n.values.length) throw new Error("Can't construct named `RList`. Supplied `names` must be the same length as the list.");
      h.wrap(o).setNames(a), super(new w(o));
    } finally {
      v(s.n);
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
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false, depth: s = -1 } = {}) {
    let n = this.entries({ depth: s }), o = n.map(([a]) => a);
    if (!e && new Set(o).size !== o.length) throw new Error("Duplicate key when converting list without allowDuplicateKey enabled");
    if (!t && o.some((a) => !a)) throw new Error("Empty or null key when converting list without allowEmptyKey enabled");
    return Object.fromEntries(n.filter((a, c) => n.findIndex((u) => u[0] === a[0]) === c));
  }
  toD3() {
    if (!this.isDataFrame()) throw new Error("Can't convert R list object to D3 format. Object must be of class 'data.frame'.");
    return this.entries().reduce((t, s) => (s[1].forEach((n, o) => t[o] = Object.assign(t[o] || {}, { [s[0]]: n })), t), []);
  }
  entries(e = { depth: -1 }) {
    let t = this.toJs(e);
    return this.isDataFrame() && e.depth < 0 && (t.values = t.values.map((s) => s.toArray())), t.values.map((s, n) => [t.names ? t.names[n] : null, s]);
  }
  toJs(e = { depth: 0 }, t = 1) {
    return { type: "list", names: this.names(), values: [...Array(this.length).keys()].map((s) => e.depth && t >= e.depth ? this.get(s + 1) : this.get(s + 1).toJs(e, t + 1)) };
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
    let { names: t, values: s } = ue(e), n = { n: 0 };
    try {
      let o = !!t && t.length > 0 && t.every((c) => c), a = s.length > 0 && s.every((c) => Array.isArray(c) || ArrayBuffer.isView(c) || c instanceof ArrayBuffer);
      if (o && a) {
        let c = s, u = c.every((g) => g.length === c[0].length), k = c.every((g) => Mr(g[0]) || kr(g[0]));
        if (u && k) {
          let g = new _e({ type: "list", names: t, values: c.map((ms) => Sr(ms)) });
          b(g, n);
          let H = new K([new C("as.data.frame"), g]);
          return b(H, n), new r4(H.eval());
        }
      }
    } finally {
      v(n.n);
    }
    throw new Error("Can't construct `data.frame`. Source object is not eligible.");
  }
  static fromD3(e) {
    return this.fromObject(Object.fromEntries(Object.keys(e[0]).map((t) => [t, e.map((s) => s[t])])));
  }
};
var le = class extends h {
  exec(...e) {
    let t = { n: 0 };
    try {
      let s = new K([this, ...e]);
      return b(s, t), s.eval();
    } finally {
      v(t.n);
    }
  }
  capture(e = {}, ...t) {
    let s = { n: 0 };
    try {
      let n = new K([this, ...t]);
      return b(n, s), n.capture(e);
    } finally {
      v(s.n);
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
      let { names: s, values: n } = ue(e), o = xe(l._R_NewEnv(S.globalEnv.ptr, 0, 0));
      ++t, n.forEach((a, c) => {
        let u = s ? s[c] : null;
        if (!u) throw new Error("Can't create object in new environment with empty symbol name");
        let k = new C(u), g = xe(new h(a));
        try {
          Jt(o, k, g);
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
    let s = new C(e), n = xe(new h(t));
    try {
      Jt(this, s, n);
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
    return Object.fromEntries([...Array(t.length).keys()].map((s) => {
      let n = this.getDollar(t[s]);
      return [t[s], e < 0 ? n : n.toJs({ depth: e })];
    }));
  }
  toJs(e = { depth: 0 }, t = 1) {
    let s = this.names(), n = [...Array(s.length).keys()].map((o) => e.depth && t >= e.depth ? this.getDollar(s[o]) : this.getDollar(s[o]).toJs(e, t + 1));
    return { type: "environment", names: s, values: n };
  }
};
var Q = class extends h {
  constructor(e, t, s) {
    if (e instanceof w) return ne(e, t), super(e), this;
    let n = { n: 0 };
    try {
      let { names: o, values: a } = ue(e), c = l._Rf_allocVector(U[t], a.length);
      b(c, n), a.forEach(s(c)), h.wrap(c).setNames(o), super(new w(c));
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
      let s = se.wrap(Ee(t, S.baseEnv));
      b(s, e);
      let n = s.toTypedArray();
      return Array.from(n).map((o) => !!o);
    } finally {
      v(e.n);
    }
  }
  toArray() {
    let e = this.toTypedArray();
    return this.detectMissing().map((t, s) => t ? null : e[s]);
  }
  toObject({ allowDuplicateKey: e = true, allowEmptyKey: t = false } = {}) {
    let s = this.entries(), n = s.map(([o]) => o);
    if (!e && new Set(n).size !== n.length) throw new Error("Duplicate key when converting atomic vector without allowDuplicateKey enabled");
    if (!t && n.some((o) => !o)) throw new Error("Empty or null key when converting atomic vector without allowEmptyKey enabled");
    return Object.fromEntries(s.filter((o, a) => s.findIndex((c) => c[0] === o[0]) === a));
  }
  entries() {
    let e = this.toArray(), t = this.names();
    return e.map((s, n) => [t ? t[n] : null, s]);
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
    return this.detectMissing().map((t, s) => t ? null : !!e[s]);
  }
};
et = /* @__PURE__ */ new WeakMap(), p(tt, et, (e) => {
  let t = l._LOGICAL(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : !!n, "i32");
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
  let t = l._INTEGER(e), s = l.getValue(l._R_NaInt, "i32");
  return (n, o) => {
    l.setValue(t + 4 * o, n === null ? s : Math.round(Number(n)), "i32");
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
  let t = l._REAL(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * o, n === null ? s : n, "double");
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
    return this.detectMissing().map((t, s) => t ? null : { re: e[2 * s], im: e[2 * s + 1] });
  }
};
at = /* @__PURE__ */ new WeakMap(), p(it, at, (e) => {
  let t = l._COMPLEX(e), s = l.getValue(l._R_NaReal, "double");
  return (n, o) => {
    l.setValue(t + 8 * (2 * o), n === null ? s : n.re, "double"), l.setValue(t + 8 * (2 * o + 1), n === null ? s : n.im, "double");
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
      return this.detectMissing().map((t, s) => t ? null : l.UTF8ToString(l._Rf_translateCharUTF8(l._STRING_ELT(this.ptr, s))));
    } finally {
      l._vmaxset(e);
    }
  }
};
lt = /* @__PURE__ */ new WeakMap(), p(ct, lt, (e) => (t, s) => {
  t === null ? l._SET_STRING_ELT(e, s, S.naString.ptr) : l._SET_STRING_ELT(e, s, new Me(t).ptr);
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
  return (s, n) => {
    l.setValue(t + n, Number(s), "i8");
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
  E ? (t.on("message", (s) => {
    i(this, Be).call(this, t, s);
  }), t.on("error", (s) => {
    console.error(s), this.reject(new A("An error occurred initialising the webR SharedBufferChannel worker."));
  })) : (t.onmessage = (s) => i(this, Be).call(this, t, s.data), t.onerror = (s) => {
    console.error(s), this.reject(new A("An error occurred initialising the webR SharedBufferChannel worker."));
  });
}, Be = /* @__PURE__ */ new WeakMap();
E && (globalThis.Worker = ee("worker_threads").Worker);
var ge;
var At;
var is;
var Fe;
ge = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakSet(), is = function(t) {
  E ? (t.on("message", (s) => {
    i(this, Fe).call(this, t, s);
  }), t.on("error", (s) => {
    console.error(s), this.reject(new A("An error occurred initialising the webR PostMessageChannel worker."));
  })) : (t.onmessage = (s) => i(this, Fe).call(this, t, s.data), t.onerror = (s) => {
    console.error(s), this.reject(new A("An error occurred initialising the webR PostMessageChannel worker."));
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
        setTimeout((t, s) => {
          this.invokeWasmFunction(t, ...s);
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
async function fetchASGI(client, resource, init, filter = (bodyChunk) => bodyChunk) {
  if (typeof resource === "string" || typeof init !== "undefined") {
    resource = new Request(resource, init);
  }
  const channel = new MessageChannel();
  const clientPort = channel.port1;
  client.postMessage(
    {
      type: "makeRequest",
      scope: reqToASGI(resource)
    },
    [channel.port2]
  );
  const blob = await resource.blob();
  if (!blob.size) {
    clientPort.postMessage({
      type: "http.request",
      more_body: false
    });
  } else {
    const reader = blob.stream().getReader();
    try {
      while (true) {
        const { value: theChunk, done } = await reader.read();
        clientPort.postMessage({
          type: "http.request",
          body: theChunk,
          more_body: !done
        });
        if (done) {
          break;
        }
      }
    } finally {
      reader.releaseLock();
    }
  }
  return new Promise((resolve) => {
    let streamController;
    const readableStream = new ReadableStream({
      start(controller) {
        streamController = controller;
      },
      cancel(reason) {
      }
    });
    let response;
    clientPort.addEventListener("message", (event) => {
      const msg = event.data;
      if (msg.type === "http.response.start") {
        response = asgiToRes(msg, readableStream);
        resolve(response);
      } else if (msg.type === "http.response.body") {
        if (msg.body) {
          streamController.enqueue(filter(msg.body, response));
        }
        if (!msg.more_body) {
          streamController.close();
          clientPort.close();
        }
      } else {
        throw new Error("Unexpected event type from clientPort: " + msg.type);
      }
    });
    clientPort.start();
  });
}
function headersToASGI(headers) {
  const result = [];
  for (const [key, value] of headers.entries()) {
    result.push([key, value]);
  }
  return result;
}
function reqToASGI(req) {
  const url = new URL(req.url);
  return {
    type: "http",
    asgi: {
      version: "3.0",
      spec_version: "2.1"
    },
    http_version: "1.1",
    method: req.method,
    scheme: url.protocol.replace(/:$/, ""),
    path: url.pathname,
    query_string: url.search.replace(/^\?/, ""),
    root_path: "",
    headers: headersToASGI(req.headers)
  };
}
function asgiToRes(res, body) {
  return new Response(body, {
    headers: res.headers,
    status: res.status
  });
}

// src/shinylive-sw.ts
var useCaching = false;
var cacheName = "::shinyliveServiceworker";
var version = "v10";
function addCoiHeaders(resp) {
  const headers = new Headers(resp.headers);
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  headers.set("Cross-Origin-Resource-Policy", "cross-origin");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers
  });
}
function addCorpHeader(resp) {
  const headers = new Headers(resp.headers);
  headers.set("Cross-Origin-Resource-Policy", "cross-origin");
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers
  });
}
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([self.skipWaiting(), caches.open(version + cacheName)])
  );
});
self.addEventListener("activate", function(event) {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
      const keys = await caches.keys();
      return Promise.all(
        keys.filter(function(key) {
          return key.indexOf(version + cacheName) !== 0;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })()
  );
});
self.addEventListener("fetch", function(event) {
  const request = event.request;
  const url = new URL(request.url);
  if (self.location.origin !== url.origin) return;
  if (url.pathname == "/esbuild") return;
  const base_path = dirname(self.location.pathname);
  if (url.pathname == `${base_path}/shinylive-inject-socket.js`) {
    event.respondWith(
      new Response(shinylive_inject_socket_default, {
        headers: { "Content-Type": "text/javascript" },
        status: 200
      })
    );
    return;
  }
  const coiRequested = url.searchParams.get("coi") === "1" || request.referrer.includes("coi=1");
  const appPathRegex = /.*\/(app_[^/]+\/)/;
  const m_appPath = appPathRegex.exec(url.pathname);
  if (m_appPath) {
    event.respondWith(
      (async () => {
        let pollCount = 5;
        while (!apps[m_appPath[1]]) {
          if (pollCount == 0) {
            return new Response(
              `Couldn't find parent page for ${url}. This may be because the Service Worker has updated. Try reloading the page.`,
              {
                status: 404
              }
            );
          }
          console.log("App URL not registered. Waiting 50ms.");
          await sleep(50);
          pollCount--;
        }
        url.pathname = url.pathname.replace(appPathRegex, "/");
        const isAppRoot = url.pathname === "/";
        const filter = isAppRoot ? injectSocketFilter : identityFilter;
        const blob = await request.blob();
        const resp = await fetchASGI(
          apps[m_appPath[1]],
          new Request(url.toString(), {
            method: request.method,
            headers: request.headers,
            body: request.method === "GET" || request.method === "HEAD" ? void 0 : blob,
            credentials: request.credentials,
            cache: request.cache,
            redirect: request.redirect,
            referrer: request.referrer
          }),
          void 0,
          filter
        );
        if (coiRequested) {
          return addCorpHeader(resp);
        } else {
          return resp;
        }
      })()
    );
    return;
  }
  if (request.method !== "GET") {
    return;
  }
  if (useCaching) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        try {
          const networkResponse = addCoiHeaders(await fetch(request));
          const baseUrl = self.location.origin + dirname(self.location.pathname);
          if (request.url.startsWith(baseUrl + "/shinylive/") || request.url === baseUrl + "/favicon.ico") {
            const cache = await caches.open(version + cacheName);
            await cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return new Response("Failed to find in cache, or fetch.", {
            status: 404
          });
        }
      })()
    );
    return;
  }
  if (coiRequested) {
    event.respondWith(
      (async () => {
        const resp = await fetch(request);
        return addCoiHeaders(resp);
      })()
    );
  }
});
var apps = {};
(async () => {
  const allClients = await self.clients.matchAll();
  for (const client of allClients) {
    client.postMessage({
      type: "serviceworkerStart"
    });
  }
})();
self.addEventListener("message", (event) => {
  const msg = event.data;
  if (msg.type === "configureProxyPath") {
    const path = msg.path;
    const port = event.ports[0];
    apps[path] = port;
  }
});
function identityFilter(bodyChunk, response) {
  return bodyChunk;
}
function injectSocketFilter(bodyChunk, response) {
  const contentType = response.headers.get("content-type");
  if (contentType && /^text\/html(;|$)/.test(contentType)) {
    const bodyChunkStr = uint8ArrayToString(bodyChunk);
    const base_path = dirname(self.location.pathname);
    const newStr = bodyChunkStr.replace(
      /<\/head>/,
      `<script src="${base_path}/shinylive-inject-socket.js" type="module"><\/script>
</head>`
    );
    const newChunk = Uint8Array.from(
      newStr.split("").map((s) => s.charCodeAt(0))
    );
    return newChunk;
  }
  return bodyChunk;
}
