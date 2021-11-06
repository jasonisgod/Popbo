(function(t) {
	function a(a) {
		for (var n, i, s = a[0], u = a[1], c = a[2], d = 0, p = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
		for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
		l && l(a);
		while (p.length) p.shift()();
		return r.push.apply(r, c || []), e()
	}

	function e() {
		for (var t, a = 0; a < r.length; a++) {
			for (var e = r[a], n = !0, s = 1; s < e.length; s++) {
				var u = e[s];
				0 !== o[u] && (n = !1)
			}
			n && (r.splice(a--, 1), t = i(i.s = e[0]))
		}
		return t
	}
	var n = {},
		o = {
			app: 0
		},
		r = [];

	function i(a) {
		if (n[a]) return n[a].exports;
		var e = n[a] = {
			i: a,
			l: !1,
			exports: {}
		};
		return t[a].call(e.exports, e, e.exports, i), e.l = !0, e.exports
	}
	i.m = t, i.c = n, i.d = function(t, a, e) {
		i.o(t, a) || Object.defineProperty(t, a, {
			enumerable: !0,
			get: e
		})
	}, i.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, a) {
		if (1 & a && (t = i(t)), 8 & a) return t;
		if (4 & a && "object" === typeof t && t && t.__esModule) return t;
		var e = Object.create(null);
		if (i.r(e), Object.defineProperty(e, "default", {
				enumerable: !0,
				value: t
			}), 2 & a && "string" != typeof t)
			for (var n in t) i.d(e, n, function(a) {
				return t[a]
			}.bind(null, n));
		return e
	}, i.n = function(t) {
		var a = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return i.d(a, "a", a), a
	}, i.o = function(t, a) {
		return Object.prototype.hasOwnProperty.call(t, a)
	}, i.p = "/";
	var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
		u = s.push.bind(s);
	s.push = a, s = s.slice();
	for (var c = 0; c < s.length; c++) a(s[c]);
	var l = u;
	r.push([0, "chunk-vendors"]), e()
})({
	0: function(t, a, e) {
		t.exports = e("56d7")
	},
	"034f": function(t, a, e) {
		"use strict";
		e("85ec")
	},
	"21af": function(t, a, e) {
		"use strict";
		e("7193")
	},
	4648: function(t, a, e) {
		"use strict";
		e("d863")
	},
	"56d7": function(t, a, e) {
		"use strict";
		e.r(a);
		e("e260"), e("e6cf"), e("cca6"), e("a79d");
		var n = e("2b0e"),
			o = function() {
				var t = this,
					a = t.$createElement,
					n = t._self._c || a;
				return n("div", {
					style: {display: 'none'},
					attrs: {
						id: "app"
					}
				}, [n("img", {
					staticClass: "title",
					attrs: {
						src: 'img/popcat.4158e1f3.svg', //e("6224"),
						alt: "POPCAT"
					}
				}), n("cat", {
					attrs: {
						open: t.open,
						counter: t.counter,
						bot: t.bot
					}
				}), n("leaderboard", {
					attrs: {
						accumulator: t.accumulator,
						location: t.location
					}
				}), n("share"), n("twitter-button")], 1)
			},
			r = [],
			i = (e("99af"), e("4de4"), e("4160"), e("ac1f"), e("38cf"), e("159b"), e("96cf"), e("1da1"));
		e("c975"), e("1276");

		function s(t) {
			for (var a = t + "=", e = decodeURIComponent(document.cookie), n = e.split(";"), o = 0; o < n.length; o++) {
				var r = n[o];
				while (" " === r.charAt(0)) r = r.substring(1);
				if (0 === r.indexOf(a)) return r.substring(a.length, r.length)
			}
			return ""
		}

		function u(t, a, e) {
			var n = new Date;
			n.setTime(n.getTime() + 24 * e * 60 * 60 * 1e3);
			var o = "expires=" + n.toUTCString();
			document.cookie = t + "=" + a + ";" + o + ";path=/"
		}
		var c = function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "cat-img",
					class: {
						p: !t.open, op: t.open, bot: t.bot
					}
				}, [e("transition", {
					attrs: {
						name: "pop-out",
						mode: "out-in"
					}
				}, [e("div", {
					key: t.displayCount,
					class: "counter rot-" + t.counterRotation
				}, [t._v(t._s(t.displayCount.toLocaleString("en")))])])], 1)
			},
			l = [],
			d = {
				props: ["open", "counter", "bot"],
				computed: {
					displayCount: function() {
						return this.counter //> 0 ? this.counter : ""
					}
				},
				data: function() {
					return {
						counterRotation: "c"
					}
				},
				watch: {
					counter: function() {
						var t = ["l", "r", "c", "ll", "rr"];
						this.counterRotation = t[Math.floor(Math.random() * t.length)]
					}
				},
				mounted: function() {
					var t = new Image;
					t.src = 'img/op.353767c3.png' //e("a7f9")
				}
			},
			p = d,
			h = (e("9bbd"), e("2877")),
			f = Object(h["a"])(p, c, l, !1, null, null, null),
			m = f.exports,
			v = function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("section", {
					class: "leaderboard " + (t.open ? "open" : ""),
					on: {
						pointerdown: function(t) {
							t.stopPropagation()
						}
					}
				}, [e("div", {
					staticClass: "bar",
					on: {
						pointerdown: function(a) {
							a.stopPropagation(), t.open = !t.open
						}
					}
				}, [e("h1", [t._v("🏆")]), e("div", {
					staticClass: "preview"
				}, [t.open || !t.leaderboard || !t.amInTopThree && t.location ? !t.open && t.leaderboard && !t.amInTopThree && t.location ? e("div", {
					staticClass: "top-three"
				}, [e("span", {
					staticClass: "top-entry"
				}, [e("span", {
					staticClass: "position"
				}, [t._v("#1")]), e("flag", {
					attrs: {
						code: t.topThree[0].Code
					}
				}), e("span", {
					staticClass: "count"
				}, [t._v(" " + t._s(t.shortNum(t.topThree[0].Pops)) + " ")])], 1), e("span", {
					staticClass: "ellipsis"
				}, [t._v("...")]), e("span", {
					staticClass: "top-entry mine"
				}, [e("flag", {
					attrs: {
						code: t.currentCountry.Code
					}
				}), e("span", {
					staticClass: "count"
				}, [e("AnimatedNumber", {
					attrs: {
						duration: 20,
						pop: !0,
						value: t.currentCountry.Pops
					}
				})], 1)], 1)]) : e("h2", [t._v("Leaderboard")]) : e("div", {
					staticClass: "top-three"
				}, t._l(t.topThree, (function(a, n) {
					return e("span", {
						key: a.Code,
						class: "top-entry " + (t.currentCountry.Code === a.Code ? "mine" : "")
					}, [e("span", {
						staticClass: "position"
					}, [t._v("#" + t._s(n + 1))]), e("flag", {
						attrs: {
							code: a.Code
						}
					}), e("span", {
						staticClass: "count"
					}, [t._v(" " + t._s(t.shortNum(a.Code == t.currentCountry.Code ? t.currentCountry.Pops : a.Pops)) + " ")])], 1)
				})), 0)]), e("button", {
					staticClass: "show"
				}, [e("svg", {
					attrs: {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "currentColor",
						viewBox: "0 0 16 16"
					}
				}, [e("path", {
					attrs: {
						"fill-rule": "evenodd",
						d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
					}
				})])])]), e("main", {
					ref: "mainGrow",
					style: "--max-height: " + t.mainHeight + "px"
				}, [e("div", {
					staticClass: "main-wrap"
				}, [t.leaderboard ? e("ol", {
					staticClass: "list"
				}, [e("li", [e("span", {
					staticClass: "position"
				}, [t._v("🌍")]), e("span", {
					staticClass: "country"
				}, [t._v("Worldwide")]), e("span", {
					staticClass: "count",
					attrs: {
						translate: "no"
					}
				}, [e("transition", {
					attrs: {
						name: "pop-delta",
						mode: "out-in"
					}
				}, [t.worldwide.pps > 0 ? e("span", {
					staticClass: "delta notranslate",
					attrs: {
						translate: "no"
					}
				}, [t._v(t._s(t.shortNum(t.worldwide.pps) + " PPS"))]) : t._e()]), e("AnimatedNumber", {
					attrs: {
						enabled: t.open,
						transition: !1,
						value: t.worldwide.pops,
						duration: t.smoothedInterval
					}
				})], 1)]), t._l(t.leaderboard, (function(a, n) {
					return e("li", {
						key: a.Code
					}, [e("span", {
						staticClass: "position"
					}, [t._v(t._s(t.getPlace(n + 1)))]), e("flag", {
						attrs: {
							code: a.Code
						}
					}), e("span", {
						class: "country " + (t.currentCountry.Code === a.Code ? "mine" : "")
					}, [t._v(t._s(a.Name))]), e("span", {
						staticClass: "count",
						attrs: {
							translate: "no"
						}
					}, [e("transition", {
						attrs: {
							name: "pop-delta",
							mode: "out-in"
						}
					}, [t.deltas[a.Code] ? e("span", {
						staticClass: "delta notranslate",
						attrs: {
							translate: "no"
						}
					}, [t._v(t._s(t.shortNum(t.deltas[a.Code]) + " PPS"))]) : t._e()]), e("AnimatedNumber", {
						attrs: {
							enabled: t.open,
							transition: !1,
							value: a.Pops,
							duration: t.smoothedInterval
						}
					})], 1)], 1)
				}))], 2) : e("p", [t._v("Loading...")]), e("div", {
					staticClass: "leaderboard-key"
				}, [t._v("PPS = Pops Per Second")]), e("div", {
					staticClass: "support-link"
				}, [e("a", {
					attrs: {
						href: "https://ko-fi.com/popcatclick",
						target: "blank"
					},
					on: {
						mouseenter: function(a) {
							return t.meow.play()
						}
					}
				}, [t._v("😸"), e("span", [t._v("Support Popcat.click")]), t._v("☕")])]), t._m(0), t._m(1)])])])
			},
			b = [function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "authors"
				}, [t._v("Made by "), e("a", {
					attrs: {
						href: "https://joshuarainbow.co.uk/"
					}
				}, [t._v("Josh")]), t._v(", "), e("a", {
					attrs: {
						href: "https://onfe.uk/"
					}
				}, [t._v("Ed")]), t._v(" & "), e("a", {
					attrs: {
						href: "https://freddyheppell.com/"
					}
				}, [t._v("Freddy")]), t._v(".")])
			}, function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "recaptcha-notice"
				}, [t._v(" This site is protected by reCAPTCHA and the Google "), e("a", {
					attrs: {
						href: "https://policies.google.com/privacy"
					}
				}, [t._v("Privacy Policy")]), t._v(" and "), e("a", {
					attrs: {
						href: "https://policies.google.com/terms"
					}
				}, [t._v("Terms of Service")]), t._v(" apply. ")])
			}],
			C = (e("13d5"), e("fb6a"), e("d3b7"), e("b85c")),
			g = function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return "NP" != t.code ? e("div", {
					class: "flag flag:" + t.code,
					attrs: {
						title: t.getLabel(t.code),
						"aria-label": t.getLabel(t.code)
					}
				}) : e("svg", {
					staticClass: "flag flag:NP",
					attrs: {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 16"
					}
				}, [e("defs"), e("defs", [e("filter", {
					attrs: {
						id: "a",
						width: "173%",
						height: "160%",
						x: "-36.5%",
						y: "-30%",
						filterUnits: "objectBoundingBox"
					}
				}, [e("feOffset", {
					attrs: {
						in: "SourceAlpha",
						result: "shadowOffsetOuter1"
					}
				}), e("feGaussianBlur", {
					attrs: {
						in: "shadowOffsetOuter1",
						result: "shadowBlurOuter1",
						stdDeviation: "1.6"
					}
				}), e("feColorMatrix", {
					attrs: {
						in: "shadowBlurOuter1",
						values: "0 0 0 0 0.423529412 0 0 0 0 0.458823529 0 0 0 0 0.490196078 0 0 0 0.5 0"
					}
				})], 1), e("path", {
					attrs: {
						id: "b",
						d: "M0 16V0l13.14 8.19H4.11l8.6 7.81z"
					}
				})]), e("g", {
					attrs: {
						fill: "none"
					}
				}, [e("path", {
					attrs: {
						d: "M0 0h24v16H0z"
					}
				}), e("use", {
					attrs: {
						fill: "#000",
						filter: "url(#a)",
						href: "#b"
					}
				}), e("use", {
					attrs: {
						fill: "#0052B4",
						href: "#b"
					}
				}), e("path", {
					attrs: {
						fill: "#D80027",
						d: "M11.47 7.71L.48.86v14.66h10.99l-8.6-7.81z"
					}
				}), e("g", {
					attrs: {
						fill: "#FFF"
					}
				}, [e("path", {
					attrs: {
						d: "M4.6 11.2l-.69-.31.36-.67-.74.15-.1-.75-.51.55-.52-.55-.1.75-.73-.15.36.67-.68.32.68.32-.36.66.74-.14.1.75.51-.55.52.55.1-.75.73.14-.36-.66.68-.32zm-.46-6.22l-.5-.23.26-.48-.54.1-.06-.54-.38.4-.38-.4-.06.54-.55-.1.27.48-.5.23 1.22.25 1.22-.25zM4.38 4.98a1.46 1.46 0 11-2.92 0"
					}
				})])])])
			},
			w = [],
			S = e("85fc"),
			y = {
				props: ["code"],
				methods: {
					getLabel: function(t) {
						var a = S[t] || t;
						return "Flag of ".concat(a)
					}
				}
			},
			_ = y,
			M = (e("cacc"), e("65df"), Object(h["a"])(_, g, w, !1, null, "8bb3fe7e", null)),
			P = M.exports,
			T = function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("span", {
					staticClass: "animated-number"
				}, [t.pop ? e("transition", {
					attrs: {
						name: "number-punch",
						mode: "out-in"
					}
				}, [e("span", {
					key: t.tweeningValue.toLocaleString("en"),
					staticClass: "anim"
				}, [t._v(" " + t._s(t.tweeningValue.toLocaleString("en")) + " ")])]) : e("span", [t._v(t._s(t.tweeningValue.toLocaleString("en")))])], 1)
			},
			I = [],
			A = (e("a9e3"), {
				props: {
					value: {
						type: Number,
						required: !0
					},
					duration: {
						type: Number,
						required: !1,
						default: 5e3
					},
					enabled: {
						type: Boolean,
						default: !0,
						required: !1
					},
					pop: {
						type: Boolean,
						default: !1,
						required: !1
					}
				},
				data: function() {
					return {
						tweeningValue: this.value
					}
				},
				watch: {
					value: function(t, a) {
						this.enabled && a < t && 0 !== a ? this.tween(a, t) : this.tweeningValue = t
					}
				},
				methods: {
					tween: function(t, a) {
						var e = this;

						function n() {
							if (a === e.value) {
								var r = (Date.now() - o) / e.duration;
								if (r >= 1 || !e.enabled) e.tweeningValue = a;
								else {
									var i = Math.round(t + (a - t) * r);
									i !== e.tweeningValue && (e.tweeningValue = i), requestAnimationFrame(n)
								}
							}
						}
						var o = Date.now();
						n()
					}
				}
			}),
			N = A,
			B = (e("d2b5"), Object(h["a"])(N, T, I, !1, null, "65cd9dae", null)),
			G = B.exports,
			E = e("cae7"),
			L = e.n(E),
			k = e("1e5c"),
			O = (e("4fad"), e("3835")),
			x = e("bc3a"),
			U = e.n(x);

		function R(t) {
			return new Promise((function(a, e) {
                var n = {"AD":133983,"AE":11775296,"AF":32521,"AG":49214,"AI":1493,"AL":30031911,"AM":270936830,"AO":19057,"AR":5864162,"AS":5116,"AT":27407041,"AU":116663870,"AW":37480,"AX":6229734,"AZ":6117711,"BA":266872199,"BB":161219,"BD":4443589,"BE":190254985,"BF":167462,"BG":225057733,"BH":1870372,"BI":842,"BJ":51683,"BM":94383,"BN":160606045,"BO":539314,"BQ":1035768,"BR":27455060,"BS":567361,"BT":147793,"BW":141182,"BY":24284098,"BZ":644671,"CA":74516075,"CC":4025,"CD":83574,"CG":22298,"CH":63859076,"CI":1125070,"CK":1953,"CL":8802038,"CM":71386,"CN":1002047187,"CO":4377140,"CR":1448633,"CU":13573,"CV":242975,"CW":546721,"CY":16991403,"CZ":1167097734,"DE":96747647,"DJ":3557,"DK":2296289734,"DO":763944,"DZ":11578887,"EC":1654637,"EE":156601711,"EG":10061277,"ER":312,"ES":21108433,"ET":338852,"FI":5571716749,"FJ":228990,"FM":97235,"FO":2457302,"FR":1565238649,"GA":906095,"GB":105820635,"GD":99473,"GE":4702001,"GF":165251,"GG":541450,"GH":264550,"GI":189723,"GL":3624948,"GM":10451,"GN":36115,"GP":923158,"GR":84340261,"GT":1160394,"GU":684317,"GY":158434,"HK":120750076243,"HN":384312,"HR":1443031130,"HT":19720,"HU":1763840676,"ID":2286838847,"IE":8980520,"IL":17091007,"IM":346560,"IN":18889129,"IQ":3438811,"IR":2574706,"IS":14699736,"IT":34251259,"JE":117202,"JM":216762,"JO":1322224,"JP":108083976226,"KE":468167,"KG":2060379,"KH":486386205,"KM":14697,"KN":27000,"KP":1,"KR":10402775376,"KW":1605909,"KY":7212,"KZ":87299328,"LA":1554029882,"LB":5396897,"LC":73878,"LI":86044,"LK":2267062,"LR":1346,"LS":8328,"LT":626048130,"LU":2991316,"LV":50544997,"LY":393356,"MA":13793585,"MC":363431,"MD":11138176,"ME":115359363,"MG":1072280,"MH":66666,"MK":638343017,"ML":150390,"MM":147786888,"MN":47177518,"MO":222793109,"MP":161825,"MQ":750123,"MR":106888,"MT":26173266,"MU":3052312,"MV":1805165,"MW":8634,"MX":21383851,"MY":20594940315,"MZ":92839,"NA":36562,"NC":2648102,"NE":1191,"NG":107420,"NI":204092,"NL":78869447,"NO":702421711,"NP":2855523,"NR":41,"NZ":23542360,"OM":1827997,"PA":1840544,"PE":3318887,"PF":2425360,"PG":222907,"PH":1051785163,"PK":5902444,"PL":2748467338,"PM":274119,"PR":1260714,"PS":711919,"PT":11477877,"PW":111789,"PY":1368140,"QA":2073775,"RE":5607840,"RO":379708383,"RS":1757311282,"RU":383928310,"RW":175877,"SA":5855156,"SB":200201,"SC":36455,"SD":310376,"SE":4207110756,"SG":452059732,"SI":57031062,"SK":494573712,"SM":94625,"SN":600827,"SO":156977,"SR":217908,"SS":61360,"ST":251,"SV":486633,"SX":60481,"SY":582544,"SZ":311663,"TC":6633,"TG":77400,"TH":105011836435,"TJ":53494,"TL":175189,"TM":16894,"TN":7185962,"TR":21881638,"TT":487594,"TW":107116239629,"TZ":50101,"UA":238082457,"UG":57711,"US":451441993,"UY":1093043,"UZ":3773397,"VA":2137,"VC":2956,"VE":355079,"VG":30001,"VI":44905,"VN":1107193025,"VU":3693,"WF":1547,"WS":354,"XK":16276575,"YE":27914,"YT":20003,"ZA":3584432,"ZM":41173,"ZW":332154}
					if (n.Countries) a(n.Countries);
					else if (n.GB || n.IE || n.US || n.JP) {
						for (var o = [], r = 0, i = Object.entries(n); r < i.length; r++) {
							var s = Object(O["a"])(i[r], 2),
								u = s[0],
								c = s[1],
								l = S[u];
							l && o.push({
								Name: l,
								Code: u,
								Pops: c
							})
						}
						a(o)
					} else e(new Error("Leaderboard API response does not match expected format."))
                /*
                U.a.get(t).then((function(t) {
					200 !== t.status && e(new Error(t.status));
					var n = t.data;
                    // ...
				})).catch((function(t) {
					e(t)
				}))
                */
			}))
		}
		var K = {
				load: R
			},
			F = {
				components: {
					Flag: P,
					AnimatedNumber: G
				},
				props: ["accumulator", "location"],
				data: function() {
					return {
						errored: !1,
						leaderboard: null,
						open: !1,
						worldwide: {
							pops: 0,
							pps: 0
						},
						deltas: {},
						mainHeight: 0,
						updated: Date.now(),
						smoothedInterval: 5e3,
						currentCountry: {},
						meow: null
					}
				},
				watch: {
					accumulator: function(t, a) {
						t < a || (this.currentCountry.Pops = this.currentCountry.Pops - a + t)
					},
					leaderboard: function(t, a) {
						var e = (Date.now() - this.updated) / 1e3,
							n = (Date.now() - this.updated + this.smoothedInterval) / 2;
						this.smoothedInterval = Math.max(n + 30, 5e3);
						var o = this.leaderboard.reduce((function(t, a) {
								return t + a.Pops
							}), 0),
							r = o - this.worldwide.pops;
						if (this.worldwide.pops = o, this.updated = Date.now(), a) {
							this.worldwide.pps = Math.round(r / e * 10) / 10, this.deltas = {};
							var i, s = {},
								u = Object(C["a"])(a);
							try {
								for (u.s(); !(i = u.n()).done;) {
									var c = i.value;
									s[c.Code] = c.Pops
								}
							} catch (f) {
								u.e(f)
							} finally {
								u.f()
							}
							var l, d = Object(C["a"])(t);
							try {
								for (d.s(); !(l = d.n()).done;) {
									var p = l.value;
									if (s[p.Code] && s[p.Code] < p.Pops) {
										var h = (p.Pops - s[p.Code]) / e;
										this.deltas[p.Code] = Math.round(10 * h) / 10
									}
								}
							} catch (f) {
								d.e(f)
							} finally {
								d.f()
							}
						} else this.worldwide.pps = 0
					},
					location: function() {
						this.updateCurrentCountry()
					}
				},
				computed: {
					topThree: function() {
						return this.leaderboard.slice(0, 3)
					},
					amInTopThree: function() {
						var t = this,
							a = !1;
						return this.topThree.forEach((function(e) {
							e.Code === t.currentCountry.Code && (a = !0)
						})), a
					}
				},
				created: function() {
					this.fetchLeaderboardData(), this.meow = new Audio("pops/meow.ogg") /* = new k["Howl"]({
						src: ["pops/meow.ogg", "pops/meow.mp3"],
						volume: .2
					})*/
				},
				mounted: function() {
					this.mainHeight = this.$refs.mainGrow.scrollHeight
				},
				methods: {
					fetchLeaderboardData: function() {
						var t = this;
						K.load("https://leaderboard.popcat.click").then((function(a) {
							t.leaderboard = a, t.leaderboard.sort((function(t, a) {
								return a.Pops - t.Pops
							})), t.updateCurrentCountry(), t.$nextTick((function() {
								t.mainHeight = t.$refs.mainGrow.scrollHeight
							}))
						})).catch((function(t) {})).finally((function() {
							setTimeout(t.fetchLeaderboardData, 5e3)
						}))
					},
					updateCurrentCountry: function() {
						var t = this;
						if ("" !== this.location && "?" !== this.location && this.leaderboard) {
							var a = this.leaderboard.filter((function(a) {
								return t.location === a.Code
							}))[0];
							a && (this.currentCountry = {
								Code: this.location,
								Pops: a.Pops
							})
						}
					},
					getPlace: function(t) {
						switch (t) {
							case 1:
								return "🥇";
							case 2:
								return "🥈";
							case 3:
								return "🥉";
							default:
								return t
						}
					},
					shortNum: function(t) {
						return L()(t)
					}
				}
			},
			D = F,
			H = (e("8eb1"), Object(h["a"])(D, v, b, !1, null, "0a2cb64d", null)),
			V = H.exports,
			j = function() {
                return this._e()
				/*var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return t.isShareEnabled ? e("svg", {
					attrs: {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 512 512"
					},
					on: {
						pointerdown: function(a) {
							return a.stopPropagation(), t.share(a)
						}
					}
				}, [e("path", {
					attrs: {
						d: "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
					}
				})]) : t._e()*/
			},
			z = [],
			Z = {
				computed: {
					isShareEnabled: function() {
						return navigator.share
					}
				},
				methods: {
					share: function() {
						navigator.share({
							url: "https://popcat.click/",
							text: "Wide-Mouthed Popping Cat",
							title: "Pop Cat"
						})
					}
				}
			},
			J = Z,
			W = (e("21af"), Object(h["a"])(J, j, z, !1, null, "22b901cb", null)),
			$ = W.exports,
			Y = function() {
                return this._e()
				/*var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("a", {
					attrs: {
						href: "https://twitter.com/PopCatClick"
					},
					on: {
						pointerdown: function(t) {
							t.stopPropagation()
						}
					}
				}, [e("svg", {
					attrs: {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 512 512"
					}
				}, [e("path", {
					attrs: {
						d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
					}
				})])])*/
			},
			q = [],
			X = {},
			Q = X,
			tt = (e("4648"), Object(h["a"])(Q, Y, q, !1, null, "84111686", null)),
			at = tt.exports,
			et = e("bc3a").default,
			nt = {
				name: "App",
				components: {
					Cat: m,
					Leaderboard: V,
					Share: $,
					TwitterButton: at
				},
				data: function() {
					return {
						open: !1,
						pop_sound_i: 0,
						counter: 0,
						accumulator: 0,
						//pop_sounds: ["pops/pop1", "pops/pop2", "pops/pop3", "pops/pop4"],
						//pop_howls: [],
                        pop_audios: [
                            new Audio('pops/pop1.ogg'),
                            new Audio('pops/pop2.ogg'),
                            new Audio('pops/pop3.ogg'),
                            new Audio('pops/pop4.ogg')],
						sequential_max_pops: 0,
						bot: !1,
						location: null,
						interval: !1,
						token: ""
					}
				},
				created: function() {
					var t = this;
					document.addEventListener("pointerup", this.p), document.addEventListener("keyup", this.p), document.addEventListener("pointerdown", this.op), document.addEventListener("keydown", this.op), this.counter = parseInt(s("pop_count"), 10), isNaN(this.counter) && (this.counter = 0), this.bot = s("bot")/*, this.pop_sounds.forEach((function(a, e) {
						t.pop_howls[e] = new k["Howl"]({
							src: ["".concat(a, ".ogg"), "".concat(a, ".mp3")]
						})
					}));*/
					var a = s("country");
					a ? this.location = a : this.cloudflareGeo()
				},
				methods: {
					p: function() {
						var t = this;
						setTimeout((function() {
							t.open = !1
						}), 25)
					},
					op: function(t) {
						var a = this;
						//var paused = this.pop_audios[0].paused && this.pop_audios[1].paused && this.pop_audios[2].paused && this.pop_audios[3].paused;
						
						this.open = !0
						this.pop_audios[this.pop_sound_i].play()
						 this.pop_sound_i = [0, 1, 2, 3].filter((function(t) {
							return t !== a.pop_sound_i
						}))[Math.floor(Math.random() * (this.pop_audios.length - 1))]
						this.counter++
						this.accumulator++
						u("pop_count", this.counter, 365)
						this.interval || (this.interval = !0, this.sendStats(), setInterval(this.sendStats, 3e4))
					
						// t.repeat || (this.open = !0, paused? this.pop_audios[this.pop_sound_i].play(): null, this.pop_sound_i = [0, 1, 2, 3].filter((function(t) {
						// 	return t !== a.pop_sound_i
						// }))[Math.floor(Math.random() * (this.pop_audios.length - 1))], this.counter++, this.accumulator++, u("pop_count", this.counter, 365), this.interval || (this.interval = !0, this.sendStats(), setInterval(this.sendStats, 3e4)))
					},
					cloudflareGeo: function() {
						var t = this;
						et.get("https://popcat.click/cdn-cgi/trace").then((function(a) {
							var e = /^loc=(.*)$/gm;
							t.location = e.exec(a.data)[1]
						}))
					},
					sendStats: function() {
						var t = this;
						return Object(i["a"])(regeneratorRuntime.mark((function a() {
							var e, n;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if (!t.bot) {
											a.next = 2;
											break
										}
										return a.abrupt("return");
									case 2:
										if (0 !== t.accumulator) {
											a.next = 4;
											break
										}
										return a.abrupt("return");
									case 4:
										return a.next = 6, t.$recaptchaLoaded();
									case 6:
										return a.next = 8, t.$recaptcha("pop");
									case 8:
										e = a.sent, n = "", t.token && (n = "&token=".concat(t.token)), et.post("".concat("https://stats.popcat.click/pop", "?pop_count=").concat(t.accumulator > 800 ? 800 : t.accumulator, "&captcha_token=").concat(e).concat(n)).then((function(a) {
											t.accumulator >= 800 ? (t.sequential_max_pops += 1, t.sequential_max_pops > 10 && (t.bot = !0, u("bot", !0, .5))) : (t.sequential_max_pops = 0, t.bot = !1), t.accumulator = 0, a.data && a.data.Location && a.data.Location.Code && (t.location = a.data.Location.Code, u("country", a.data.Location.Code, .5)), a.data.Token && (t.token = a.data.Token)
										})).catch((function(t) {}));
									case 12:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					}
				}
			},
			ot = nt,
			rt = (e("034f"), Object(h["a"])(ot, o, r, !1, null, null, null)),
			it = rt.exports,
			st = e("760d");
		n["a"].config.productionTip = !1, new n["a"]({
			render: function(t) {
				return t(it)
			}
		}).$mount("#app"), n["a"].use(st["VueReCaptcha"], {
			siteKey: "6Ledv1IaAAAAAKFJSR7VKPE8e-4kht4ZmLzencES",
			loaderOptions: {
				useRecaptchaNet: !0
			}
		}), console.log("Popping on over to ".concat("https://stats.popcat.click/pop", ".")), console.log("%cWARNING", "font-size:10em;color:red;"), console.log("%cThis is a browser feature intended for developers.\nDo NOT copy and paste something here if you do not understand it.\n\nYou can learn more at:\nhttps://en.wikipedia.org/wiki/Self-XSS", "font-size:2em")
	},
	"5b0c": function(t, a, e) {},
	6224: function(t, a, e) {
		t.exports = e.p + "img/popcat.4158e1f3.svg"
	},
	"65df": function(t, a, e) {
		"use strict";
		e("f93b")
	},
	7193: function(t, a, e) {},
	"85ec": function(t, a, e) {},
	"85fc": function(t) {
		t.exports = JSON.parse('{"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BQ":"BES Islands","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Democratic Republic of the Congo","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d\'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Vatican","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestine","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russia","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","QM":"United States","QO":"Outlying Oceania","ZZ":"Unknown or Invalid Territory","QU":"European Union","XA":"Canary Islands","XI":"Northern Ireland","XK":"Kosovo","XX":"Unknown","XZ":"International Waters","AC":"Ascension Island","CP":"Clipperton Island","DG":"Diego Garcia","EA":"Ceuta and Melilla","EU":"European Union","EZ":"Eurozone","FX":"Metropolitan France","IC":"Canary Islands","SU":"USSR","TA":"Tristan da Cunha","UK":"United Kingdom","UN":"United Nations","AN":"Netherlands Antilles","BU":"Burma","CS":"Serbia and Montenegro","NT":"Neutral Zone","SF":"Finland","TP":"East Timor","YU":"Yugoslavia","ZR":"Zaire"}')
	},
	"8eb1": function(t, a, e) {
		"use strict";
		e("5b0c")
	},
	"9bbd": function(t, a, e) {
		"use strict";
		e("dd2b")
	},
	a7f9: function(t, a, e) {
		t.exports = e.p + "img/op.353767c3.png"
	},
	d2b5: function(t, a, e) {
		"use strict";
		e("da72")
	},
	d863: function(t, a, e) {},
	da72: function(t, a, e) {},
	dd2b: function(t, a, e) {},
	f93b: function(t, a, e) {}
});
//# sourceMappingURL=app.e9a4bf97.js.map