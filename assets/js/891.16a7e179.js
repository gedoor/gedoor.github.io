"use strict";
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 32891:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiscusWidget": () => (/* binding */ p)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, W = Symbol(), K = /* @__PURE__ */ new WeakMap();
class rt {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== W)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const dt = (i) => new rt(typeof i == "string" ? i : i + "", void 0, W), ut = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, r) => s + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1], i[0]);
  return new rt(e, i, W);
}, pt = (i, t) => {
  V ? i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const s = document.createElement("style"), n = window.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  });
}, q = V ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return dt(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;
const J = window.trustedTypes, $t = J ? J.emptyScript : "", F = window.reactiveElementPolyfillSupport, G = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? $t : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, ot = (i, t) => t !== i && (t == t || i == i), L = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: ot };
class A extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    (e = this.h) !== null && e !== void 0 || (this.h = []), this.h.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, s) => {
      const n = this._$Ep(s, e);
      n !== void 0 && (this._$Ev.set(n, s), t.push(n));
    }), t;
  }
  static createProperty(t, e = L) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(n) {
      const r = this[t];
      this[e] = n, this.requestUpdate(t, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || L;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const n of s)
        this.createProperty(n, e[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s)
        e.unshift(q(n));
    } else
      t !== void 0 && e.push(q(t));
    return e;
  }
  static _$Ep(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return pt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = L) {
    var n, r;
    const o = this.constructor._$Ep(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const c = ((r = (n = s.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== null && r !== void 0 ? r : G.toAttribute)(e, s.type);
      this._$El = t, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$El = null;
    }
  }
  _$AK(t, e) {
    var s, n;
    const r = this.constructor, o = r._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const c = r.getPropertyOptions(o), l = c.converter, h = (n = (s = l == null ? void 0 : l.fromAttribute) !== null && s !== void 0 ? s : typeof l == "function" ? l : null) !== null && n !== void 0 ? n : G.fromAttribute;
      this._$El = o, this[o] = h(e, c.type), this._$El = null;
    }
  }
  requestUpdate(t, e, s) {
    let n = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || ot)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, r) => this[r] = n), this._$Ei = void 0);
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
        var r;
        return (r = n.hostUpdate) === null || r === void 0 ? void 0 : r.call(n);
      }), this.update(s)) : this._$Ek();
    } catch (n) {
      throw e = !1, this._$Ek(), n;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
      var n;
      return (n = s.hostUpdated) === null || n === void 0 ? void 0 : n.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
A.finalized = !0, A.elementProperties = /* @__PURE__ */ new Map(), A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, F == null || F({ ReactiveElement: A }), ((k = globalThis.reactiveElementVersions) !== null && k !== void 0 ? k : globalThis.reactiveElementVersions = []).push("1.3.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const S = globalThis.trustedTypes, Q = S ? S.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, f = `lit$${(Math.random() + "").slice(9)}$`, lt = "?" + f, _t = `<${lt}>`, E = document, T = (i = "") => E.createComment(i), N = (i) => i === null || typeof i != "object" && typeof i != "function", ht = Array.isArray, vt = (i) => ht(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Z = /-->/g, X = />/g, m = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, et = /"/g, at = /^(?:script|style|textarea|title)$/i, gt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), ft = gt(1), b = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), mt = (i, t, e) => {
  var s, n;
  const r = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const c = (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0 ? n : null;
    r._$litPart$ = o = new I(t.insertBefore(T(), c), c, void 0, e != null ? e : {});
  }
  return o._$AI(i), o;
}, y = E.createTreeWalker(E, 129, null, !1), At = (i, t) => {
  const e = i.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : "", o = C;
  for (let l = 0; l < e; l++) {
    const h = i[l];
    let g, a, d = -1, v = 0;
    for (; v < h.length && (o.lastIndex = v, a = o.exec(h), a !== null); )
      v = o.lastIndex, o === C ? a[1] === "!--" ? o = Z : a[1] !== void 0 ? o = X : a[2] !== void 0 ? (at.test(a[2]) && (n = RegExp("</" + a[2], "g")), o = m) : a[3] !== void 0 && (o = m) : o === m ? a[0] === ">" ? (o = n != null ? n : C, d = -1) : a[1] === void 0 ? d = -2 : (d = o.lastIndex - a[2].length, g = a[1], o = a[3] === void 0 ? m : a[3] === '"' ? et : tt) : o === et || o === tt ? o = m : o === Z || o === X ? o = C : (o = m, n = void 0);
    const M = o === m && i[l + 1].startsWith("/>") ? " " : "";
    r += o === C ? h + _t : d >= 0 ? (s.push(g), h.slice(0, d) + "$lit$" + h.slice(d) + f + M) : h + f + (d === -2 ? (s.push(void 0), l) : M);
  }
  const c = r + (i[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(i) || !i.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [Q !== void 0 ? Q.createHTML(c) : c, s];
};
class O {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const c = t.length - 1, l = this.parts, [h, g] = At(t, e);
    if (this.el = O.createElement(h, s), y.currentNode = this.el.content, e === 2) {
      const a = this.el.content, d = a.firstChild;
      d.remove(), a.append(...d.childNodes);
    }
    for (; (n = y.nextNode()) !== null && l.length < c; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const a = [];
          for (const d of n.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(f)) {
              const v = g[o++];
              if (a.push(d), v !== void 0) {
                const M = n.getAttribute(v.toLowerCase() + "$lit$").split(f), R = /([.?@])?(.*)/.exec(v);
                l.push({ type: 1, index: r, name: R[2], strings: M, ctor: R[1] === "." ? St : R[1] === "?" ? bt : R[1] === "@" ? wt : H });
              } else
                l.push({ type: 6, index: r });
            }
          for (const d of a)
            n.removeAttribute(d);
        }
        if (at.test(n.tagName)) {
          const a = n.textContent.split(f), d = a.length - 1;
          if (d > 0) {
            n.textContent = S ? S.emptyScript : "";
            for (let v = 0; v < d; v++)
              n.append(a[v], T()), y.nextNode(), l.push({ type: 2, index: ++r });
            n.append(a[d], T());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === lt)
          l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = n.data.indexOf(f, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), a += f.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = E.createElement("template");
    return s.innerHTML = t, s;
  }
}
function w(i, t, e = i, s) {
  var n, r, o, c;
  if (t === b)
    return t;
  let l = s !== void 0 ? (n = e._$Cl) === null || n === void 0 ? void 0 : n[s] : e._$Cu;
  const h = N(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(i), l._$AT(i, e, s)), s !== void 0 ? ((o = (c = e)._$Cl) !== null && o !== void 0 ? o : c._$Cl = [])[s] = l : e._$Cu = l), l !== void 0 && (t = w(i, l._$AS(i, t.values), l, s)), t;
}
class yt {
  constructor(t, e) {
    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var e;
    const { el: { content: s }, parts: n } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : E).importNode(s, !0);
    y.currentNode = r;
    let o = y.nextNode(), c = 0, l = 0, h = n[0];
    for (; h !== void 0; ) {
      if (c === h.index) {
        let g;
        h.type === 2 ? g = new I(o, o.nextSibling, this, t) : h.type === 1 ? g = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (g = new Ct(o, this, t)), this.v.push(g), h = n[++l];
      }
      c !== (h == null ? void 0 : h.index) && (o = y.nextNode(), c++);
    }
    return r;
  }
  m(t) {
    let e = 0;
    for (const s of this.v)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class I {
  constructor(t, e, s, n) {
    var r;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$C_ = (r = n == null ? void 0 : n.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$C_;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = w(this, t, e), N(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== b && this.T(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.k(t) : vt(t) ? this.S(t) : this.T(t);
  }
  j(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  k(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.j(t));
  }
  T(t) {
    this._$AH !== u && N(this._$AH) ? this._$AA.nextSibling.data = t : this.k(E.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: s, _$litType$: n } = t, r = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = O.createElement(n.h, this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(s);
    else {
      const o = new yt(r, this), c = o.p(this.options);
      o.m(s), this.k(c), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = st.get(t.strings);
    return e === void 0 && st.set(t.strings, e = new O(t)), e;
  }
  S(t) {
    ht(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const r of t)
      n === e.length ? e.push(s = new I(this.j(T()), this.j(T()), this, this.options)) : s = e[n], s._$AI(r), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$C_ = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class H {
  constructor(t, e, s, n, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = w(this, t, e, 0), o = !N(t) || t !== this._$AH && t !== b, o && (this._$AH = t);
    else {
      const c = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = w(this, c[s + l], e, l), h === b && (h = this._$AH[l]), o || (o = !N(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h != null ? h : "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !n && this.P(t);
  }
  P(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class St extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  P(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Et = S ? S.emptyScript : "";
class bt extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  P(t) {
    t && t !== u ? this.element.setAttribute(this.name, Et) : this.element.removeAttribute(this.name);
  }
}
class wt extends H {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = w(this, t, e, 0)) !== null && s !== void 0 ? s : u) === b)
      return;
    const n = this._$AH, r = t === u && n !== u || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, o = t !== u && (n === u || r);
    r && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ct {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const it = window.litHtmlPolyfillSupport;
it == null || it(O, I), ((z = globalThis.litHtmlVersions) !== null && z !== void 0 ? z : globalThis.litHtmlVersions = []).push("2.2.7");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D, Y;
class U extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = mt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return b;
  }
}
U.finalized = !0, U._$litElement$ = !0, (D = globalThis.litElementHydrateSupport) === null || D === void 0 || D.call(globalThis, { LitElement: U });
const nt = globalThis.litElementPolyfillSupport;
nt == null || nt({ LitElement: U });
((Y = globalThis.litElementVersions) !== null && Y !== void 0 ? Y : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut = (i) => (t) => typeof t == "function" ? ((e, s) => (window.customElements.define(e, s), s))(i, t) : ((e, s) => {
  const { kind: n, elements: r } = s;
  return { kind: n, elements: r, finisher(o) {
    window.customElements.define(e, o);
  } };
})(i, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = (i, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, i);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, i);
} };
function _(i) {
  return (t, e) => e !== void 0 ? ((s, n, r) => {
    n.constructor.createProperty(r, s);
  })(i, t, e) : Pt(i, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j;
((j = window.HTMLSlotElement) === null || j === void 0 ? void 0 : j.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = (i) => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ot = (i) => (...t) => ({ _$litDirective$: i, values: t });
class It {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = (i, t) => {
  var e, s;
  const n = i._$AN;
  if (n === void 0)
    return !1;
  for (const r of n)
    (s = (e = r)._$AO) === null || s === void 0 || s.call(e, t, !1), P(r, t);
  return !0;
}, x = (i) => {
  let t, e;
  do {
    if ((t = i._$AM) === void 0)
      break;
    e = t._$AN, e.delete(i), i = t;
  } while ((e == null ? void 0 : e.size) === 0);
}, ct = (i) => {
  for (let t; t = i._$AM; i = t) {
    let e = t._$AN;
    if (e === void 0)
      t._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(i))
      break;
    e.add(i), xt(t);
  }
};
function Mt(i) {
  this._$AN !== void 0 ? (x(this), this._$AM = i, ct(this)) : this._$AM = i;
}
function Rt(i, t = !1, e = 0) {
  const s = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0)
    if (t)
      if (Array.isArray(s))
        for (let r = e; r < s.length; r++)
          P(s[r], !1), x(s[r]);
      else
        s != null && (P(s, !1), x(s));
    else
      P(this, i);
}
const xt = (i) => {
  var t, e, s, n;
  i.type == Nt.CHILD && ((t = (s = i)._$AP) !== null && t !== void 0 || (s._$AP = Rt), (e = (n = i)._$AQ) !== null && e !== void 0 || (n._$AQ = Mt));
};
class Ht extends It {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, e, s) {
    super._$AT(t, e, s), ct(this), this.isConnected = t._$AU;
  }
  _$AO(t, e = !0) {
    var s, n;
    t !== this.isConnected && (this.isConnected = t, t ? (s = this.reconnected) === null || s === void 0 || s.call(this) : (n = this.disconnected) === null || n === void 0 || n.call(this)), e && (P(this, t), x(this));
  }
  setValue(t) {
    if (Tt(this._$Ct))
      this._$Ct._$AI(t, this);
    else {
      const e = [...this._$Ct._$AH];
      e[this._$Ci] = t, this._$Ct._$AI(e, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt = () => new Lt();
class Lt {
}
const B = /* @__PURE__ */ new WeakMap(), zt = Ot(class extends Ht {
  render(i) {
    return u;
  }
  update(i, [t]) {
    var e;
    const s = t !== this.Y;
    return s && this.Y !== void 0 && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = t, this.dt = (e = i.options) === null || e === void 0 ? void 0 : e.host, this.rt(this.ct = i.element)), u;
  }
  rt(i) {
    var t;
    if (typeof this.Y == "function") {
      const e = (t = this.dt) !== null && t !== void 0 ? t : globalThis;
      let s = B.get(e);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), B.set(e, s)), s.get(this.Y) !== void 0 && this.Y.call(this.dt, void 0), s.set(this.Y, i), i !== void 0 && this.Y.call(this.dt, i);
    } else
      this.Y.value = i;
  }
  get lt() {
    var i, t, e;
    return typeof this.Y == "function" ? (t = B.get((i = this.dt) !== null && i !== void 0 ? i : globalThis)) === null || t === void 0 ? void 0 : t.get(this.Y) : (e = this.Y) === null || e === void 0 ? void 0 : e.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var Dt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, $ = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Yt(t, e) : t, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = (s ? o(t, e, n) : o(n)) || n);
  return s && n && Dt(t, e, n), n;
};
let p = class extends U {
  constructor() {
    super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = kt(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
  }
  get iframeRef() {
    return this._iframeRef.value;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("message", this.messageEventHandler);
  }
  _formatError(i) {
    return `[giscus] An error occurred. Error message: "${i}".`;
  }
  setupSession() {
    const i = location.href, t = new URL(i), e = localStorage.getItem(this.GISCUS_SESSION_KEY), s = t.searchParams.get("giscus") || "";
    if (s) {
      localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(s)), this.__session = s, t.searchParams.delete("giscus"), history.replaceState(void 0, document.title, t.toString());
      return;
    }
    if (e)
      try {
        this.__session = JSON.parse(e || "") || "";
      } catch (n) {
        this.__session = "", localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(
          `${this._formatError(n == null ? void 0 : n.message)} Session has been cleared.`
        );
      }
  }
  handleMessageEvent(i) {
    if (i.origin !== this.host)
      return;
    const { data: t } = i;
    if (!(typeof t == "object" && t.giscus) || (this.iframeRef && t.giscus.resizeHeight && (this.iframeRef.style.height = `${t.giscus.resizeHeight}px`), !t.giscus.error))
      return;
    const e = t.giscus.error;
    if (e.includes("Bad credentials") || e.includes("Invalid state value")) {
      if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", console.warn(`${this._formatError(e)} Session has been cleared.`), this.update(/* @__PURE__ */ new Map());
        return;
      }
      console.error(
        `${this._formatError(e)} No session is stored initially. ${this.ERROR_SUGGESTION}`
      );
    }
    if (e.includes("Discussion not found")) {
      console.warn(
        `[giscus] ${e}. A new discussion will be created if a comment/reaction is submitted.`
      );
      return;
    }
    console.error(`${this._formatError(e)} ${this.ERROR_SUGGESTION}`);
  }
  sendMessage(i) {
    var t, e;
    (e = (t = this.iframeRef) == null ? void 0 : t.contentWindow) == null || e.postMessage({ giscus: i }, this.host);
  }
  updateConfig() {
    const i = {
      setConfig: {
        repo: this.repo,
        repoId: this.repoId,
        category: this.category,
        categoryId: this.categoryId,
        term: this.getTerm(),
        number: +this.getNumber(),
        strict: this.strict === "1",
        reactionsEnabled: this.reactionsEnabled === "1",
        emitMetadata: this.emitMetadata === "1",
        inputPosition: this.inputPosition,
        theme: this.theme,
        lang: this.lang
      }
    };
    this.sendMessage(i);
  }
  requestUpdate(i, t, e) {
    if (!this.hasUpdated || i === "host") {
      super.requestUpdate(i, t, e);
      return;
    }
    this.updateConfig();
  }
  getMetaContent(i, t = !1) {
    const e = t ? `meta[property='og:${i}'],` : "", s = document.querySelector(
      e + `meta[name='${i}']`
    );
    return s ? s.content : "";
  }
  _getCleanedUrl() {
    const i = new URL(location.href);
    return i.searchParams.delete("giscus"), i;
  }
  getTerm() {
    switch (this.mapping) {
      case "url":
        return `${this._getCleanedUrl()}`;
      case "title":
        return document.title;
      case "og:title":
        return this.getMetaContent("title", !0);
      case "specific":
        return this.term || "";
      case "number":
        return "";
      case "pathname":
      default:
        return location.pathname.length < 2 ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "");
    }
  }
  getNumber() {
    return this.mapping === "number" && this.term || "";
  }
  getIframeSrc() {
    const i = this._getCleanedUrl().toString(), t = `${i}${this.id ? "#" + this.id : ""}`, e = this.getMetaContent("description", !0), s = this.getMetaContent("giscus:backlink") || i, n = {
      origin: t,
      session: this.__session,
      repo: this.repo,
      repoId: this.repoId || "",
      category: this.category || "",
      categoryId: this.categoryId || "",
      term: this.getTerm(),
      number: this.getNumber(),
      strict: this.strict,
      reactionsEnabled: this.reactionsEnabled,
      emitMetadata: this.emitMetadata,
      inputPosition: this.inputPosition,
      theme: this.theme,
      description: e,
      backLink: s
    }, r = this.lang ? `/${this.lang}` : "", o = new URLSearchParams(n);
    return `${this.host}${r}/widget?${o}`;
  }
  render() {
    return ft`
      <iframe
        title="Comments"
        scrolling="no"
        ${zt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        part="iframe"
      ></iframe>
    `;
  }
};
p.styles = ut`
    :host,
    iframe {
      width: 100%;
      border: none;
      color-scheme: normal;
      min-height: 150px;
    }
  `;
$([
  _({ reflect: !0 })
], p.prototype, "host", 2);
$([
  _({ reflect: !0 })
], p.prototype, "repo", 2);
$([
  _({ reflect: !0 })
], p.prototype, "repoId", 2);
$([
  _({ reflect: !0 })
], p.prototype, "category", 2);
$([
  _({ reflect: !0 })
], p.prototype, "categoryId", 2);
$([
  _({ reflect: !0 })
], p.prototype, "mapping", 2);
$([
  _({ reflect: !0 })
], p.prototype, "term", 2);
$([
  _({ reflect: !0 })
], p.prototype, "strict", 2);
$([
  _({ reflect: !0 })
], p.prototype, "reactionsEnabled", 2);
$([
  _({ reflect: !0 })
], p.prototype, "emitMetadata", 2);
$([
  _({ reflect: !0 })
], p.prototype, "inputPosition", 2);
$([
  _({ reflect: !0 })
], p.prototype, "theme", 2);
$([
  _({ reflect: !0 })
], p.prototype, "lang", 2);
$([
  _({ reflect: !0 })
], p.prototype, "loading", 2);
p = $([
  Ut("giscus-widget")
], p);



/***/ })

};
;