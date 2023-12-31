(globalThis.webpackChunkchumbi_valley_react =
  globalThis.webpackChunkchumbi_valley_react || []).push([
  [170],
  {
    38170: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { Music: () => l, default: () => u });
      var n = r(85893),
        o = r(67294),
        a = r(33581),
        i = r(81540),
        _ = r.n(i),
        s = r(11209);
      const l = (0, a.Pi)(() => {
          const e = s.Z.Instance.isSoundActive.value,
            t = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              e
                ? t.current.audioEl.current.play()
                : t.current.audioEl.current.pause();
            }, [e]),
            (0, n.jsx)(_(), {
              ref: (e) => {
                t.current = e;
              },
              src: "https://whyp.it/tracks/embed?id=137071&token=3aaH7",
              autoPlay: !1,
              loop: !0,
              volume: 0.3,
            })
          );
        }),
        u = l;
    },
    94473: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => o });
      var n = r(97853);
      const o = (e, t) => Math.max(t.indexOf(n.mM.getValue(e)), 0);
    },
    88766: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      var n,
        o = r(73014),
        a = r(79588),
        i = r(97853),
        _ = r(94473);
      !(function (e) {
        (e.chumbi = "chumbi"), (e.eth = "eth");
      })(n || (n = {}));
      const s = [n.chumbi, n.eth],
        l = "marketplace-currency";
      class u {
        constructor() {
          (this.currencySelect = new o.SelectString(s, (0, _.B)(l, s))),
            (0, a.reaction)(
              () => this.currencySelect.selectedItem,
              (e) => {
                i.mM.setValue(l, e);
              }
            );
        }
      }
    },
    96522: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => _ });
      var n = r(70655),
        o = r(79588);
      const a = (0, r(51254).hu)("[Router]");
      var i;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Preloader = 1)] = "Preloader"),
          (e[(e.Default = 5)] = "Default");
      })(i || (i = {}));
      class _ {
        constructor() {
          (this._navigationState = null),
            (this._navigator = null),
            (this.navigation = null),
            (0, o.makeObservable)(this);
          const e = this;
          this.navigation = {
            back: () => {
              var e;
              null === (e = this._navigator) || void 0 === e || e.back();
            },
            forward: () => {
              var e;
              null === (e = this._navigator) || void 0 === e || e.forward();
            },
            push: (e, t) => {
              var r;
              null === (r = this._navigator) || void 0 === r || r.push(e, t);
            },
            replace: (e, t) => {
              var r;
              null === (r = this._navigator) || void 0 === r || r.replace(e, t);
            },
            get state() {
              return e._navigationState;
            },
          };
        }
        get mode() {
          return a.log({ initializing: !1 }), i.Default;
        }
        setNavigationState(e) {
          this._navigationState = e;
        }
        setNavigator(e) {
          this._navigator = e;
        }
      }
      (0, n.gn)(
        [o.observable.ref, (0, n.w6)("design:type", Object)],
        _.prototype,
        "_navigationState",
        void 0
      ),
        (0, n.gn)(
          [o.observable.ref, (0, n.w6)("design:type", Object)],
          _.prototype,
          "_navigator",
          void 0
        ),
        (0, n.gn)(
          [
            o.computed,
            (0, n.w6)("design:type", Number),
            (0, n.w6)("design:paramtypes", []),
          ],
          _.prototype,
          "mode",
          null
        ),
        (0, n.gn)(
          [
            o.action,
            (0, n.w6)("design:type", Function),
            (0, n.w6)("design:paramtypes", [Object]),
            (0, n.w6)("design:returntype", void 0),
          ],
          _.prototype,
          "setNavigationState",
          null
        ),
        (0, n.gn)(
          [
            o.action,
            (0, n.w6)("design:type", Function),
            (0, n.w6)("design:paramtypes", [Object]),
            (0, n.w6)("design:returntype", void 0),
          ],
          _.prototype,
          "setNavigator",
          null
        );
    },
    11209: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => c });
      var n = r(75382),
        o = r(97853),
        a = r(51170),
        i = r(79588),
        _ = r(25946),
        s = r(88766),
        l = r(96522);
      const u = "marketplace-logged-in";
      (0, i.configure)({ enforceActions: "never" });
      class c {
        constructor() {
          (this._isLoggedIn = new _.FlagModel(o.ZP.hasValue(u))),
            (this._disposer = new a.ku()),
            (this._router = new l.r()),
            (this.currency = (0, n.createLazy)(() => new s.Z())),
            (this._isSoundActive = new _.FlagModel(!1)),
            this._disposer.add(
              (0, i.reaction)(
                () => c.Instance.isLoggedIn.value,
                (e) => {
                  e ? o.ZP.setValue(u, "1") : o.ZP.removeValue(u);
                }
              )
            );
        }
        static get Instance() {
          return c._instance.value;
        }
        static Destroy() {
          c._instance.hasValue &&
            (c._instance.value.dispose(), c._instance.reset());
        }
        get isLoggedIn() {
          return this._isLoggedIn;
        }
        get Router() {
          return this._router;
        }
        get isSoundActive() {
          return this._isSoundActive;
        }
        get Currency() {
          return this.currency.value;
        }
        dispose() {
          this._disposer.dispose();
        }
      }
      c._instance = (0, n.createLazy)(() => new c());
    },
    81540: (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = (function (e) {
        var t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var o = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                r.d(
                  n,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 2))
        );
      })([
        function (e, t) {
          e.exports = __webpack_require__(45697);
        },
        function (e, t) {
          e.exports = __webpack_require__(67294);
        },
        function (
          module,
          __webpack_exports__,
          __nested_webpack_require_1058__
        ) {
          "use strict";
          __nested_webpack_require_1058__.r(__webpack_exports__),
            function (module) {
              var react__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_1058__(1),
                react__WEBPACK_IMPORTED_MODULE_0___default =
                  __nested_webpack_require_1058__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__
                  ),
                prop_types__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_1058__(0),
                prop_types__WEBPACK_IMPORTED_MODULE_1___default =
                  __nested_webpack_require_1058__.n(
                    prop_types__WEBPACK_IMPORTED_MODULE_1__
                  ),
                enterModule;
              function _typeof(e) {
                return (_typeof =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      })(e);
              }
              function _extends() {
                return (_extends =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  }).apply(this, arguments);
              }
              function _classCallCheck(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              function _createClass(e, t, r) {
                return (
                  t && _defineProperties(e.prototype, t),
                  r && _defineProperties(e, r),
                  e
                );
              }
              function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && _setPrototypeOf(e, t);
              }
              function _setPrototypeOf(e, t) {
                return (_setPrototypeOf =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function _createSuper(e) {
                return function () {
                  var t,
                    r = _getPrototypeOf(e);
                  if (_isNativeReflectConstruct()) {
                    var n = _getPrototypeOf(this).constructor;
                    t = Reflect.construct(r, arguments, n);
                  } else t = r.apply(this, arguments);
                  return _possibleConstructorReturn(this, t);
                };
              }
              function _possibleConstructorReturn(e, t) {
                return !t || ("object" !== _typeof(t) && "function" != typeof t)
                  ? _assertThisInitialized(e)
                  : t;
              }
              function _assertThisInitialized(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
              function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function _defineProperty(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                );
              }
              (enterModule =
                "undefined" != typeof reactHotLoaderGlobal
                  ? reactHotLoaderGlobal.enterModule
                  : void 0),
                enterModule && enterModule(module);
              var __signature__ =
                  "undefined" != typeof reactHotLoaderGlobal
                    ? reactHotLoaderGlobal.default.signature
                    : function (e) {
                        return e;
                      },
                ReactAudioPlayer = (function (_Component) {
                  _inherits(ReactAudioPlayer, _Component);
                  var _super = _createSuper(ReactAudioPlayer);
                  function ReactAudioPlayer() {
                    var e;
                    _classCallCheck(this, ReactAudioPlayer);
                    for (
                      var t = arguments.length, r = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      r[n] = arguments[n];
                    return (
                      _defineProperty(
                        _assertThisInitialized(
                          (e = _super.call.apply(_super, [this].concat(r)))
                        ),
                        "audioEl",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "listenTracker",
                        void 0
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onError",
                        function (t) {
                          var r, n;
                          return null === (r = (n = e.props).onError) ||
                            void 0 === r
                            ? void 0
                            : r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onCanPlay",
                        function (t) {
                          var r, n;
                          return null === (r = (n = e.props).onCanPlay) ||
                            void 0 === r
                            ? void 0
                            : r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onCanPlayThrough",
                        function (t) {
                          var r, n;
                          return null ===
                            (r = (n = e.props).onCanPlayThrough) || void 0 === r
                            ? void 0
                            : r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onPlay",
                        function (t) {
                          var r, n;
                          e.setListenTrack(),
                            null === (r = (n = e.props).onPlay) ||
                              void 0 === r ||
                              r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onAbort",
                        function (t) {
                          var r, n;
                          e.clearListenTrack(),
                            null === (r = (n = e.props).onAbort) ||
                              void 0 === r ||
                              r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onEnded",
                        function (t) {
                          var r, n;
                          e.clearListenTrack(),
                            null === (r = (n = e.props).onEnded) ||
                              void 0 === r ||
                              r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onPause",
                        function (t) {
                          var r, n;
                          e.clearListenTrack(),
                            null === (r = (n = e.props).onPause) ||
                              void 0 === r ||
                              r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onSeeked",
                        function (t) {
                          var r, n;
                          null === (r = (n = e.props).onSeeked) ||
                            void 0 === r ||
                            r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onLoadedMetadata",
                        function (t) {
                          var r, n;
                          null === (r = (n = e.props).onLoadedMetadata) ||
                            void 0 === r ||
                            r.call(n, t);
                        }
                      ),
                      _defineProperty(
                        _assertThisInitialized(e),
                        "onVolumeChanged",
                        function (t) {
                          var r, n;
                          null === (r = (n = e.props).onVolumeChanged) ||
                            void 0 === r ||
                            r.call(n, t);
                        }
                      ),
                      e
                    );
                  }
                  return (
                    _createClass(ReactAudioPlayer, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.audioEl.current;
                          e &&
                            (this.updateVolume(this.props.volume),
                            e.addEventListener("error", this.onError),
                            e.addEventListener("canplay", this.onCanPlay),
                            e.addEventListener(
                              "canplaythrough",
                              this.onCanPlayThrough
                            ),
                            e.addEventListener("play", this.onPlay),
                            e.addEventListener("abort", this.onAbort),
                            e.addEventListener("ended", this.onEnded),
                            e.addEventListener("pause", this.onPause),
                            e.addEventListener("seeked", this.onSeeked),
                            e.addEventListener(
                              "loadedmetadata",
                              this.onLoadedMetadata
                            ),
                            e.addEventListener(
                              "volumechange",
                              this.onVolumeChanged
                            ));
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var e = this.audioEl.current;
                          e &&
                            (e.removeEventListener("error", this.onError),
                            e.removeEventListener("canplay", this.onCanPlay),
                            e.removeEventListener(
                              "canplaythrough",
                              this.onCanPlayThrough
                            ),
                            e.removeEventListener("play", this.onPlay),
                            e.removeEventListener("abort", this.onAbort),
                            e.removeEventListener("ended", this.onEnded),
                            e.removeEventListener("pause", this.onPause),
                            e.removeEventListener("seeked", this.onSeeked),
                            e.removeEventListener(
                              "loadedmetadata",
                              this.onLoadedMetadata
                            ),
                            e.removeEventListener(
                              "volumechange",
                              this.onVolumeChanged
                            ));
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function (e) {
                          this.updateVolume(this.props.volume);
                        },
                      },
                      {
                        key: "setListenTrack",
                        value: function () {
                          var e = this;
                          if (!this.listenTracker) {
                            var t = this.props.listenInterval;
                            this.listenTracker = window.setInterval(
                              function () {
                                var t, r;
                                e.audioEl.current &&
                                  (null === (t = (r = e.props).onListen) ||
                                    void 0 === t ||
                                    t.call(r, e.audioEl.current.currentTime));
                              },
                              t
                            );
                          }
                        },
                      },
                      {
                        key: "updateVolume",
                        value: function (e) {
                          var t = this.audioEl.current;
                          null !== t &&
                            "number" == typeof e &&
                            e !== (null == t ? void 0 : t.volume) &&
                            (t.volume = e);
                        },
                      },
                      {
                        key: "clearListenTrack",
                        value: function () {
                          this.listenTracker &&
                            (clearInterval(this.listenTracker),
                            delete this.listenTracker);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e =
                              this.props.children ||
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                "Your browser does not support the ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "code",
                                  null,
                                  "audio"
                                ),
                                " element."
                              ),
                            t = !(!1 === this.props.controls),
                            r = this.props.title
                              ? this.props.title
                              : this.props.src,
                            n = {};
                          return (
                            this.props.controlsList &&
                              (n.controlsList = this.props.controlsList),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "audio",
                              _extends(
                                {
                                  autoPlay: this.props.autoPlay,
                                  className: "react-audio-player ".concat(
                                    this.props.className
                                  ),
                                  controls: t,
                                  crossOrigin: this.props.crossOrigin,
                                  id: this.props.id,
                                  loop: this.props.loop,
                                  muted: this.props.muted,
                                  preload: this.props.preload,
                                  ref: this.audioEl,
                                  src: this.props.src,
                                  style: this.props.style,
                                  title: r,
                                },
                                n
                              ),
                              e
                            )
                          );
                        },
                      },
                      {
                        key: "__reactstandin__regenerateByEval",
                        value: function __reactstandin__regenerateByEval(
                          key,
                          code
                        ) {
                          this[key] = eval(code);
                        },
                      },
                    ]),
                    ReactAudioPlayer
                  );
                })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
              _defineProperty(ReactAudioPlayer, "propTypes", void 0),
                _defineProperty(ReactAudioPlayer, "defaultProps", void 0),
                (ReactAudioPlayer.defaultProps = {
                  autoPlay: !1,
                  children: null,
                  className: "",
                  controls: !1,
                  controlsList: "",
                  id: "",
                  listenInterval: 1e4,
                  loop: !1,
                  muted: !1,
                  onAbort: function () {},
                  onCanPlay: function () {},
                  onCanPlayThrough: function () {},
                  onEnded: function () {},
                  onError: function () {},
                  onListen: function () {},
                  onPause: function () {},
                  onPlay: function () {},
                  onSeeked: function () {},
                  onVolumeChanged: function () {},
                  onLoadedMetadata: function () {},
                  preload: "metadata",
                  style: {},
                  title: "",
                  volume: 1,
                }),
                (ReactAudioPlayer.propTypes = {
                  autoPlay:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                  children:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
                  className:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  controls:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                  controlsList:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  crossOrigin:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  listenInterval:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                  loop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                  onAbort:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onCanPlay:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onCanPlayThrough:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onEnded:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onError:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onListen:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onLoadedMetadata:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onPause:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onPlay:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onSeeked:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  onVolumeChanged:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                  preload:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
                      "",
                      "none",
                      "metadata",
                      "auto",
                    ]),
                  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  style:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(
                      prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                    ),
                  title:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                  volume:
                    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                });
              var _default = ReactAudioPlayer,
                reactHotLoader,
                leaveModule;
              (__webpack_exports__.default = _default),
                (reactHotLoader =
                  "undefined" != typeof reactHotLoaderGlobal
                    ? reactHotLoaderGlobal.default
                    : void 0),
                reactHotLoader &&
                  (reactHotLoader.register(
                    ReactAudioPlayer,
                    "ReactAudioPlayer",
                    "/home/justin/Projects/react-audio-player/src/index.tsx"
                  ),
                  reactHotLoader.register(
                    _default,
                    "default",
                    "/home/justin/Projects/react-audio-player/src/index.tsx"
                  )),
                (leaveModule =
                  "undefined" != typeof reactHotLoaderGlobal
                    ? reactHotLoaderGlobal.leaveModule
                    : void 0),
                leaveModule && leaveModule(module);
            }.call(this, __nested_webpack_require_1058__(3)(module));
        },
        function (e, t) {
          e.exports = function (e) {
            if (!e.webpackPolyfill) {
              var t = Object.create(e);
              t.children || (t.children = []),
                Object.defineProperty(t, "loaded", {
                  enumerable: !0,
                  get: function () {
                    return t.l;
                  },
                }),
                Object.defineProperty(t, "id", {
                  enumerable: !0,
                  get: function () {
                    return t.i;
                  },
                }),
                Object.defineProperty(t, "exports", { enumerable: !0 }),
                (t.webpackPolyfill = 1);
            }
            return t;
          };
        },
      ]);
    },
  },
]);
//# sourceMappingURL=170.170.b53fff.js.map
