module.exports = (function(e, t) {
  "use strict";
  var r = {};
  function __webpack_require__(t) {
    if (r[t]) {
      return r[t].exports;
    }
    var i = (r[t] = { i: t, l: false, exports: {} });
    e[t].call(i.exports, i, i.exports, __webpack_require__);
    i.l = true;
    return i.exports;
  }
  function startup() {
    return __webpack_require__(294);
  }
  t(__webpack_require__);
  return startup();
})(
  [
    ,
    function(e) {
      "use strict";
      e.exports = indentation;
      var t = "\t";
      var r = " ";
      var i = 1;
      var n = 4;
      function indentation(e) {
        var a = 0;
        var u = 0;
        var s = e.charAt(a);
        var o = {};
        var l;
        while (s === t || s === r) {
          l = s === t ? n : i;
          u += l;
          if (l > 1) {
            u = Math.floor(u / l) * l;
          }
          o[u] = a;
          s = e.charAt(++a);
        }
        return { indent: u, stops: o };
      }
    },
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        return e.indexOf("`", t);
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i(
        "remark-lint:unordered-list-marker-style",
        unorderedListMarkerStyle
      );
      var s = a.start;
      var o = { "-": true, "*": true, "+": true, null: true };
      function unorderedListMarkerStyle(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (o[r] !== true) {
          t.fail(
            "Invalid unordered list-item marker style `" +
              r +
              "`: use either `'-'`, `'*'`, or `'+'`"
          );
        }
        n(e, "list", visitor);
        function visitor(e) {
          var n = e.children;
          var a = e.ordered ? 0 : n.length;
          var o = -1;
          var l;
          var f;
          while (++o < a) {
            l = n[o];
            if (!u(l)) {
              f = i
                .slice(s(l).offset, s(l.children[0]).offset)
                .replace(/\[[x ]?]\s*$/i, "")
                .replace(/\s/g, "");
              if (r) {
                if (f !== r) {
                  t.message("Marker style should be `" + r + "`", l);
                }
              } else {
                r = f;
              }
            }
          }
        }
      }
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = factory;
      function factory(e) {
        var t = indices(String(e));
        return {
          toPosition: offsetToPositionFactory(t),
          toOffset: positionToOffsetFactory(t)
        };
      }
      function offsetToPositionFactory(e) {
        return offsetToPosition;
        function offsetToPosition(t) {
          var r = -1;
          var i = e.length;
          if (t < 0) {
            return {};
          }
          while (++r < i) {
            if (e[r] > t) {
              return {
                line: r + 1,
                column: t - (e[r - 1] || 0) + 1,
                offset: t
              };
            }
          }
          return {};
        }
      }
      function positionToOffsetFactory(e) {
        return positionToOffset;
        function positionToOffset(t) {
          var r = t && t.line;
          var i = t && t.column;
          if (!isNaN(r) && !isNaN(i) && r - 1 in e) {
            return (e[r - 2] || 0) + i - 1 || 0;
          }
          return -1;
        }
      }
      function indices(e) {
        var t = [];
        var r = e.indexOf("\n");
        while (r !== -1) {
          t.push(r + 1);
          r = e.indexOf("\n", r + 1);
        }
        t.push(e.length + 1);
        return t;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(526);
      var u = r(10);
      e.exports = i("remark-lint:no-inline-padding", noInlinePadding);
      function noInlinePadding(e, t) {
        n(e, ["emphasis", "strong", "delete", "image", "link"], visitor);
        function visitor(e) {
          var r;
          if (!a(e)) {
            r = u(e);
            if (r.charAt(0) === " " || r.charAt(r.length - 1) === " ") {
              t.message("Don’t pad `" + e.type + "` with inner spaces", e);
            }
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = toString;
      function toString(e) {
        return (
          valueOf(e) || (e.children && e.children.map(toString).join("")) || ""
        );
      }
      function valueOf(e) {
        return (e && e.value ? e.value : e.alt ? e.alt : e.title) || "";
      }
    },
    ,
    function(e) {
      "use strict";
      if (
        !process.version ||
        process.version.indexOf("v0.") === 0 ||
        (process.version.indexOf("v1.") === 0 &&
          process.version.indexOf("v1.8.") !== 0)
      ) {
        e.exports = { nextTick: nextTick };
      } else {
        e.exports = process;
      }
      function nextTick(e, t, r, i) {
        if (typeof e !== "function") {
          throw new TypeError('"callback" argument must be a function');
        }
        var n = arguments.length;
        var a, u;
        switch (n) {
          case 0:
          case 1:
            return process.nextTick(e);
          case 2:
            return process.nextTick(function afterTickOne() {
              e.call(null, t);
            });
          case 3:
            return process.nextTick(function afterTickTwo() {
              e.call(null, t, r);
            });
          case 4:
            return process.nextTick(function afterTickThree() {
              e.call(null, t, r, i);
            });
          default:
            a = new Array(n - 1);
            u = 0;
            while (u < a.length) {
              a[u++] = arguments[u];
            }
            return process.nextTick(function afterTick() {
              e.apply(null, a);
            });
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = wrappy;
      function wrappy(e, t) {
        if (e && t) return wrappy(e)(t);
        if (typeof e !== "function")
          throw new TypeError("need wrapper function");
        Object.keys(e).forEach(function(t) {
          wrapper[t] = e[t];
        });
        return wrapper;
        function wrapper() {
          var t = new Array(arguments.length);
          for (var r = 0; r < t.length; r++) {
            t[r] = arguments[r];
          }
          var i = e.apply(this, t);
          var n = t[t.length - 1];
          if (typeof i === "function" && i !== n) {
            Object.keys(n).forEach(function(e) {
              i[e] = n[e];
            });
          }
          return i;
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = function(e, r) {
        var i = [];
        for (var n = 0; n < e.length; n++) {
          var a = r(e[n], n);
          if (t(a)) i.push.apply(i, a);
          else i.push(a);
        }
        return i;
      };
      var t =
        Array.isArray ||
        function(e) {
          return Object.prototype.toString.call(e) === "[object Array]";
        };
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = hexadecimal;
      function hexadecimal(e) {
        var t = typeof e === "string" ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(431);
      function homedir() {
        var e = process.env;
        var t = e.HOME;
        var r = e.LOGNAME || e.USER || e.LNAME || e.USERNAME;
        if (process.platform === "win32") {
          return e.USERPROFILE || e.HOMEDRIVE + e.HOMEPATH || t || null;
        }
        if (process.platform === "darwin") {
          return t || (r ? "/Users/" + r : null);
        }
        if (process.platform === "linux") {
          return (
            t || (process.getuid() === 0 ? "/root" : r ? "/home/" + r : null)
          );
        }
        return t || null;
      }
      e.exports = typeof i.homedir === "function" ? i.homedir : homedir;
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(270);
      var u = r(704);
      var s = r(839);
      var o = r(526);
      e.exports = i(
        "remark-lint:no-heading-content-indent",
        noHeadingContentIndent
      );
      var l = s.start;
      var f = s.end;
      function noHeadingContentIndent(e, t) {
        var r = String(t);
        n(e, "heading", visitor);
        function visitor(e) {
          var i;
          var n;
          var s;
          var c;
          var h;
          var p;
          var v;
          var d;
          var D;
          var m;
          if (o(e)) {
            return;
          }
          i = e.depth;
          n = e.children;
          s = a(e, "atx");
          if (s === "atx" || s === "atx-closed") {
            h = l(e);
            d = h.offset;
            D = r.charAt(d);
            while (D && D !== "#") {
              D = r.charAt(++d);
            }
            if (!D) {
              return;
            }
            d = i + (d - h.offset);
            c = l(n[0]).column;
            if (!c) {
              return;
            }
            v = c - h.column - 1 - d;
            if (v) {
              m =
                (v > 0 ? "Remove" : "Add") +
                " " +
                Math.abs(v) +
                " " +
                u("space", v) +
                " before this heading’s content";
              t.message(m, l(n[0]));
            }
          }
          if (s === "atx-closed") {
            p = f(n[n.length - 1]);
            v = f(e).column - p.column - 1 - i;
            if (v) {
              m =
                "Remove " +
                v +
                " " +
                u("space", v) +
                " after this heading’s content";
              t.message(m, p);
            }
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(440);
      var a = r(901);
      var u = r(360);
      var s = r(315);
      e.exports = setOptions;
      var o = {
        entities: { true: true, false: true, numbers: true, escape: true },
        bullet: { "*": true, "-": true, "+": true },
        rule: { "-": true, _: true, "*": true },
        listItemIndent: { tab: true, mixed: true, 1: true },
        emphasis: { _: true, "*": true },
        strong: { _: true, "*": true },
        fence: { "`": true, "~": true }
      };
      var l = {
        boolean: validateBoolean,
        string: validateString,
        number: validateNumber,
        function: validateFunction
      };
      function setOptions(e) {
        var t = this;
        var r = t.options;
        var n;
        var s;
        if (e == null) {
          e = {};
        } else if (typeof e === "object") {
          e = i(e);
        } else {
          throw new Error("Invalid value `" + e + "` for setting `options`");
        }
        for (s in a) {
          l[typeof a[s]](e, s, r[s], o[s]);
        }
        n = e.ruleRepetition;
        if (n && n < 3) {
          raise(n, "options.ruleRepetition");
        }
        t.encode = encodeFactory(String(e.entities));
        t.escape = u(e);
        t.options = e;
        return t;
      }
      function validateBoolean(e, t, r) {
        var i = e[t];
        if (i == null) {
          i = r;
        }
        if (typeof i !== "boolean") {
          raise(i, "options." + t);
        }
        e[t] = i;
      }
      function validateNumber(e, t, r) {
        var i = e[t];
        if (i == null) {
          i = r;
        }
        if (isNaN(i)) {
          raise(i, "options." + t);
        }
        e[t] = i;
      }
      function validateString(e, t, r, i) {
        var n = e[t];
        if (n == null) {
          n = r;
        }
        n = String(n);
        if (!(n in i)) {
          raise(n, "options." + t);
        }
        e[t] = n;
      }
      function validateFunction(e, t, r) {
        var i = e[t];
        if (i == null) {
          i = r;
        }
        if (typeof i !== "function") {
          raise(i, "options." + t);
        }
        e[t] = i;
      }
      function encodeFactory(e) {
        var t = {};
        if (e === "false") {
          return s;
        }
        if (e === "true") {
          t.useNamedReferences = true;
        }
        if (e === "escape") {
          t.escapeOnly = true;
          t.useNamedReferences = true;
        }
        return wrapped;
        function wrapped(e) {
          return n(e, t);
        }
      }
      function raise(e, t) {
        throw new Error("Invalid value `" + e + "` for setting `" + t + "`");
      }
    },
    ,
    function(e, t) {
      t = e.exports = trim;
      function trim(e) {
        return e.replace(/^\s*|\s*$/g, "");
      }
      t.left = function(e) {
        return e.replace(/^\s*/, "");
      };
      t.right = function(e) {
        return e.replace(/\s*$/, "");
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(814);
      e.exports = thematic;
      var n = " ";
      function thematic() {
        var e = this.options;
        var t = i(e.rule, e.ruleRepetition);
        return e.ruleSpaces ? t.split("").join(n) : t;
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(315);
      e.exports = enter;
      function enter(e, t) {
        var r = e.encode;
        var n = e.escape;
        var a = e.enterLink();
        if (t.referenceType !== "shortcut" && t.referenceType !== "collapsed") {
          return a;
        }
        e.escape = i;
        e.encode = i;
        return exit;
        function exit() {
          e.encode = r;
          e.escape = n;
          a();
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(727);
      e.exports = new i({
        include: [r(234)],
        implicit: [r(633), r(843), r(981), r(702)]
      });
    },
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(814);
      var a = r(439);
      var u = r(1);
      var s = r(235);
      var o = r(724);
      e.exports = list;
      var l = "*";
      var f = "_";
      var c = "+";
      var h = "-";
      var p = ".";
      var v = " ";
      var d = "\n";
      var D = "\t";
      var m = ")";
      var g = "x";
      var E = 4;
      var A = /\n\n(?!\s*$)/;
      var C = /^\[([ \t]|x|X)][ \t]/;
      var y = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
      var w = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
      var x = /^( {1,4}|\t)?/gm;
      function list(e, t, r) {
        var n = this;
        var u = n.options.commonmark;
        var s = n.options.pedantic;
        var g = n.blockTokenizers;
        var A = n.interruptList;
        var C = 0;
        var y = t.length;
        var w = null;
        var x = 0;
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        var M;
        var L;
        var R;
        var j;
        var U;
        var N;
        var J;
        var z;
        var X;
        var G = false;
        var q;
        var W;
        var _;
        var V;
        while (C < y) {
          S = t.charAt(C);
          if (S === D) {
            x += E - (x % E);
          } else if (S === v) {
            x++;
          } else {
            break;
          }
          C++;
        }
        if (x >= E) {
          return;
        }
        S = t.charAt(C);
        if (S === l || S === c || S === h) {
          B = S;
          F = false;
        } else {
          F = true;
          b = "";
          while (C < y) {
            S = t.charAt(C);
            if (!a(S)) {
              break;
            }
            b += S;
            C++;
          }
          S = t.charAt(C);
          if (!b || !(S === p || (u && S === m))) {
            return;
          }
          w = parseInt(b, 10);
          B = S;
        }
        S = t.charAt(++C);
        if (S !== v && S !== D && (s || (S !== d && S !== ""))) {
          return;
        }
        if (r) {
          return true;
        }
        C = 0;
        j = [];
        U = [];
        N = [];
        while (C < y) {
          k = t.indexOf(d, C);
          O = C;
          P = false;
          V = false;
          if (k === -1) {
            k = y;
          }
          _ = C + E;
          x = 0;
          while (C < y) {
            S = t.charAt(C);
            if (S === D) {
              x += E - (x % E);
            } else if (S === v) {
              x++;
            } else {
              break;
            }
            C++;
          }
          if (x >= E) {
            V = true;
          }
          if (J && x >= J.indent) {
            V = true;
          }
          S = t.charAt(C);
          T = null;
          if (!V) {
            if (S === l || S === c || S === h) {
              T = S;
              C++;
              x++;
            } else {
              b = "";
              while (C < y) {
                S = t.charAt(C);
                if (!a(S)) {
                  break;
                }
                b += S;
                C++;
              }
              S = t.charAt(C);
              C++;
              if (b && (S === p || (u && S === m))) {
                T = S;
                x += b.length + 1;
              }
            }
            if (T) {
              S = t.charAt(C);
              if (S === D) {
                x += E - (x % E);
                C++;
              } else if (S === v) {
                _ = C + E;
                while (C < _) {
                  if (t.charAt(C) !== v) {
                    break;
                  }
                  C++;
                  x++;
                }
                if (C === _ && t.charAt(C) === v) {
                  C -= E - 1;
                  x -= E - 1;
                }
              } else if (S !== d && S !== "") {
                T = null;
              }
            }
          }
          if (T) {
            if (!s && B !== T) {
              break;
            }
            P = true;
          } else {
            if (!u && !V && t.charAt(O) === v) {
              V = true;
            } else if (u && J) {
              V = x >= J.indent || x > E;
            }
            P = false;
            C = O;
          }
          M = t.slice(O, k);
          I = O === C ? M : t.slice(C, k);
          if (T === l || T === f || T === h) {
            if (g.thematicBreak.call(n, e, M, true)) {
              break;
            }
          }
          L = R;
          R = !P && !i(I).length;
          if (V && J) {
            J.value = J.value.concat(N, M);
            U = U.concat(N, M);
            N = [];
          } else if (P) {
            if (N.length !== 0) {
              G = true;
              J.value.push("");
              J.trail = N.concat();
            }
            J = { value: [M], indent: x, trail: [] };
            j.push(J);
            U = U.concat(N, M);
            N = [];
          } else if (R) {
            if (L && !u) {
              break;
            }
            N.push(M);
          } else {
            if (L) {
              break;
            }
            if (o(A, g, n, [e, M, true])) {
              break;
            }
            J.value = J.value.concat(N, M);
            U = U.concat(N, M);
            N = [];
          }
          C = k + 1;
        }
        q = e(U.join(d)).reset({
          type: "list",
          ordered: F,
          start: w,
          spread: G,
          children: []
        });
        z = n.enterList();
        X = n.enterBlock();
        C = -1;
        y = j.length;
        while (++C < y) {
          J = j[C].value.join(d);
          W = e.now();
          e(J)(listItem(n, J, W), q);
          J = j[C].trail.join(d);
          if (C !== y - 1) {
            J += d;
          }
          e(J);
        }
        z();
        X();
        return q;
      }
      function listItem(e, t, r) {
        var i = e.offset;
        var n = e.options.pedantic ? pedanticListItem : normalListItem;
        var a = null;
        var u;
        var s;
        t = n.apply(null, arguments);
        if (e.options.gfm) {
          u = t.match(C);
          if (u) {
            s = u[0].length;
            a = u[1].toLowerCase() === g;
            i[r.line] += s;
            t = t.slice(s);
          }
        }
        return {
          type: "listItem",
          spread: A.test(t),
          checked: a,
          children: e.tokenizeBlock(t, r)
        };
      }
      function pedanticListItem(e, t, r) {
        var i = e.offset;
        var n = r.line;
        t = t.replace(w, replacer);
        n = r.line;
        return t.replace(x, replacer);
        function replacer(e) {
          i[n] = (i[n] || 0) + e.length;
          n++;
          return "";
        }
      }
      function normalListItem(e, t, r) {
        var i = e.offset;
        var a = r.line;
        var o;
        var l;
        var f;
        var c;
        var h;
        var p;
        var D;
        t = t.replace(y, replacer);
        c = t.split(d);
        h = s(t, u(o).indent).split(d);
        h[0] = f;
        i[a] = (i[a] || 0) + l.length;
        a++;
        p = 0;
        D = c.length;
        while (++p < D) {
          i[a] = (i[a] || 0) + c[p].length - h[p].length;
          a++;
        }
        return h.join(d);
        function replacer(e, t, r, i, a) {
          l = t + r + i;
          f = a;
          if (Number(r) < 10 && l.length % 2 === 1) {
            r = v + r;
          }
          o = t + n(v, r.length) + i;
          return o + f;
        }
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        return e.indexOf("<", t);
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = ccount;
      function ccount(e, t) {
        var r = 0;
        var i;
        e = String(e);
        if (typeof t !== "string" || t.length !== 1) {
          throw new Error("Expected character");
        }
        i = e.indexOf(t);
        while (i !== -1) {
          r++;
          i = e.indexOf(t, i + 1);
        }
        return r;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:no-table-indentation", noTableIndentation);
      var s = "Do not indent table rows";
      function noTableIndentation(e, t) {
        var r = String(t);
        n(e, "table", visitor);
        function visitor(e) {
          if (!u(e)) {
            e.children.forEach(each);
          }
          return n.SKIP;
        }
        function each(e) {
          var i = r.slice(a.start(e).offset, a.start(e.children[0]).offset);
          if (i.indexOf("|") > 1) {
            t.message(s, e);
          }
        }
      }
    },
    function(e) {
      e.exports = function isBuffer(e) {
        return (
          e != null &&
          e.constructor != null &&
          typeof e.constructor.isBuffer === "function" &&
          e.constructor.isBuffer(e)
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      e.exports = require("util");
    },
    function(e, t, r) {
      "use strict";
      var i = r(727);
      e.exports = i.DEFAULT = new i({
        include: [r(388)],
        explicit: [r(875), r(555), r(329)]
      });
    },
    function(e) {
      e.exports = require("fs");
    },
    function(e) {
      "use strict";
      e.exports = function(e) {
        if (typeof e !== "string") {
          throw new TypeError("Expected a string");
        }
        return !/[^0-9a-z\xDF-\xFF]/.test(e.toLowerCase());
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(7);
      e.exports = i("remark-lint:no-tabs", noTabs);
      var a = "Use spaces instead of hard-tabs";
      function noTabs(e, t) {
        var r = String(t);
        var i = n(t).toPosition;
        var u = r.indexOf("\t");
        while (u !== -1) {
          t.message(a, i(u));
          u = r.indexOf("\t", u + 1);
        }
      }
    },
    function(e) {
      function webpackEmptyContext(e) {
        var t = new Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      }
      webpackEmptyContext.keys = function() {
        return [];
      };
      webpackEmptyContext.resolve = webpackEmptyContext;
      e.exports = webpackEmptyContext;
      webpackEmptyContext.id = 73;
    },
    function(e, t, r) {
      "use strict";
      var i = r(864);
      var n = r(97);
      var a = r(503);
      var u = r(123);
      var s = r(340);
      var o = r(951);
      e.exports = unified().freeze();
      var l = [].slice;
      var f = {}.hasOwnProperty;
      var c = u()
        .use(pipelineParse)
        .use(pipelineRun)
        .use(pipelineStringify);
      function pipelineParse(e, t) {
        t.tree = e.parse(t.file);
      }
      function pipelineRun(e, t, r) {
        e.run(t.tree, t.file, done);
        function done(e, i, n) {
          if (e) {
            r(e);
          } else {
            t.tree = i;
            t.file = n;
            r();
          }
        }
      }
      function pipelineStringify(e, t) {
        t.file.contents = e.stringify(t.tree, t.file);
      }
      function unified() {
        var e = [];
        var t = u();
        var r = {};
        var h = false;
        var p = -1;
        processor.data = data;
        processor.freeze = freeze;
        processor.attachers = e;
        processor.use = use;
        processor.parse = parse;
        processor.stringify = stringify;
        processor.run = run;
        processor.runSync = runSync;
        processor.process = process;
        processor.processSync = processSync;
        return processor;
        function processor() {
          var t = unified();
          var n = e.length;
          var a = -1;
          while (++a < n) {
            t.use.apply(null, e[a]);
          }
          t.data(i(true, {}, r));
          return t;
        }
        function freeze() {
          var r;
          var i;
          var n;
          var a;
          if (h) {
            return processor;
          }
          while (++p < e.length) {
            r = e[p];
            i = r[0];
            n = r[1];
            a = null;
            if (n === false) {
              continue;
            }
            if (n === true) {
              r[1] = undefined;
            }
            a = i.apply(processor, r.slice(1));
            if (typeof a === "function") {
              t.use(a);
            }
          }
          h = true;
          p = Infinity;
          return processor;
        }
        function data(e, t) {
          if (s(e)) {
            if (arguments.length === 2) {
              assertUnfrozen("data", h);
              r[e] = t;
              return processor;
            }
            return (f.call(r, e) && r[e]) || null;
          }
          if (e) {
            assertUnfrozen("data", h);
            r = e;
            return processor;
          }
          return r;
        }
        function use(t) {
          var n;
          assertUnfrozen("use", h);
          if (t === null || t === undefined) {
          } else if (typeof t === "function") {
            addPlugin.apply(null, arguments);
          } else if (typeof t === "object") {
            if ("length" in t) {
              addList(t);
            } else {
              addPreset(t);
            }
          } else {
            throw new Error("Expected usable value, not `" + t + "`");
          }
          if (n) {
            r.settings = i(r.settings || {}, n);
          }
          return processor;
          function addPreset(e) {
            addList(e.plugins);
            if (e.settings) {
              n = i(n || {}, e.settings);
            }
          }
          function add(e) {
            if (typeof e === "function") {
              addPlugin(e);
            } else if (typeof e === "object") {
              if ("length" in e) {
                addPlugin.apply(null, e);
              } else {
                addPreset(e);
              }
            } else {
              throw new Error("Expected usable value, not `" + e + "`");
            }
          }
          function addList(e) {
            var t;
            var r;
            if (e === null || e === undefined) {
            } else if (typeof e === "object" && "length" in e) {
              t = e.length;
              r = -1;
              while (++r < t) {
                add(e[r]);
              }
            } else {
              throw new Error("Expected a list of plugins, not `" + e + "`");
            }
          }
          function addPlugin(t, r) {
            var n = find(t);
            if (n) {
              if (o(n[1]) && o(r)) {
                r = i(n[1], r);
              }
              n[1] = r;
            } else {
              e.push(l.call(arguments));
            }
          }
        }
        function find(t) {
          var r = e.length;
          var i = -1;
          var n;
          while (++i < r) {
            n = e[i];
            if (n[0] === t) {
              return n;
            }
          }
        }
        function parse(e) {
          var t = a(e);
          var r;
          freeze();
          r = processor.Parser;
          assertParser("parse", r);
          if (newable(r)) {
            return new r(String(t), t).parse();
          }
          return r(String(t), t);
        }
        function run(e, r, i) {
          assertNode(e);
          freeze();
          if (!i && typeof r === "function") {
            i = r;
            r = null;
          }
          if (!i) {
            return new Promise(executor);
          }
          executor(null, i);
          function executor(n, u) {
            t.run(e, a(r), done);
            function done(t, r, a) {
              r = r || e;
              if (t) {
                u(t);
              } else if (n) {
                n(r);
              } else {
                i(null, r, a);
              }
            }
          }
        }
        function runSync(e, t) {
          var r = false;
          var i;
          run(e, t, done);
          assertDone("runSync", "run", r);
          return i;
          function done(e, t) {
            r = true;
            n(e);
            i = t;
          }
        }
        function stringify(e, t) {
          var r = a(t);
          var i;
          freeze();
          i = processor.Compiler;
          assertCompiler("stringify", i);
          assertNode(e);
          if (newable(i)) {
            return new i(e, r).compile();
          }
          return i(e, r);
        }
        function process(e, t) {
          freeze();
          assertParser("process", processor.Parser);
          assertCompiler("process", processor.Compiler);
          if (!t) {
            return new Promise(executor);
          }
          executor(null, t);
          function executor(r, i) {
            var n = a(e);
            c.run(processor, { file: n }, done);
            function done(e) {
              if (e) {
                i(e);
              } else if (r) {
                r(n);
              } else {
                t(null, n);
              }
            }
          }
        }
        function processSync(e) {
          var t = false;
          var r;
          freeze();
          assertParser("processSync", processor.Parser);
          assertCompiler("processSync", processor.Compiler);
          r = a(e);
          process(r, done);
          assertDone("processSync", "process", t);
          return r;
          function done(e) {
            t = true;
            n(e);
          }
        }
      }
      function newable(e) {
        return typeof e === "function" && keys(e.prototype);
      }
      function keys(e) {
        var t;
        for (t in e) {
          return true;
        }
        return false;
      }
      function assertParser(e, t) {
        if (typeof t !== "function") {
          throw new Error("Cannot `" + e + "` without `Parser`");
        }
      }
      function assertCompiler(e, t) {
        if (typeof t !== "function") {
          throw new Error("Cannot `" + e + "` without `Compiler`");
        }
      }
      function assertUnfrozen(e, t) {
        if (t) {
          throw new Error(
            "Cannot invoke `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`."
          );
        }
      }
      function assertNode(e) {
        if (!e || !s(e.type)) {
          throw new Error("Expected node, got `" + e + "`");
        }
      }
      function assertDone(e, t, r) {
        if (!r) {
          throw new Error(
            "`" + e + "` finished async. Use `" + t + "` instead"
          );
        }
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = one;
      function one(e, t) {
        var r = this;
        var i = r.visitors;
        if (typeof i[e.type] !== "function") {
          r.file.fail(
            new Error(
              "Missing compiler for node of type `" + e.type + "`: `" + e + "`"
            ),
            e
          );
        }
        return i[e.type].call(r, e, t);
      }
    },
    function(e) {
      "use strict";
      var t = (function() {
        function defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) i.writable = true;
            Object.defineProperty(e, i.key, i);
          }
        }
        return function(e, t, r) {
          if (t) defineProperties(e.prototype, t);
          if (r) defineProperties(e, r);
          return e;
        };
      })();
      function _classCallCheck(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      e.exports = function() {
        return new s();
      };
      function make_array(e) {
        return Array.isArray(e) ? e : [e];
      }
      var r = /^\s+$/;
      var i = /^\\\!/;
      var n = /^\\#/;
      var a = "/";
      var u =
        typeof Symbol !== "undefined"
          ? Symbol.for("node-ignore")
          : "node-ignore";
      var s = (function() {
        function IgnoreBase() {
          _classCallCheck(this, IgnoreBase);
          this._rules = [];
          this[u] = true;
          this._initCache();
        }
        t(IgnoreBase, [
          {
            key: "_initCache",
            value: function _initCache() {
              this._cache = {};
            }
          },
          {
            key: "add",
            value: function add(e) {
              this._added = false;
              if (typeof e === "string") {
                e = e.split(/\r?\n/g);
              }
              make_array(e).forEach(this._addPattern, this);
              if (this._added) {
                this._initCache();
              }
              return this;
            }
          },
          {
            key: "addPattern",
            value: function addPattern(e) {
              return this.add(e);
            }
          },
          {
            key: "_addPattern",
            value: function _addPattern(e) {
              if (e && e[u]) {
                this._rules = this._rules.concat(e._rules);
                this._added = true;
                return;
              }
              if (this._checkPattern(e)) {
                var t = this._createRule(e);
                this._added = true;
                this._rules.push(t);
              }
            }
          },
          {
            key: "_checkPattern",
            value: function _checkPattern(e) {
              return (
                e && typeof e === "string" && !r.test(e) && e.indexOf("#") !== 0
              );
            }
          },
          {
            key: "filter",
            value: function filter(e) {
              var t = this;
              return make_array(e).filter(function(e) {
                return t._filter(e);
              });
            }
          },
          {
            key: "createFilter",
            value: function createFilter() {
              var e = this;
              return function(t) {
                return e._filter(t);
              };
            }
          },
          {
            key: "ignores",
            value: function ignores(e) {
              return !this._filter(e);
            }
          },
          {
            key: "_createRule",
            value: function _createRule(e) {
              var t = e;
              var r = false;
              if (e.indexOf("!") === 0) {
                r = true;
                e = e.substr(1);
              }
              e = e.replace(i, "!").replace(n, "#");
              var a = make_regex(e, r);
              return { origin: t, pattern: e, negative: r, regex: a };
            }
          },
          {
            key: "_filter",
            value: function _filter(e, t) {
              if (!e) {
                return false;
              }
              if (e in this._cache) {
                return this._cache[e];
              }
              if (!t) {
                t = e.split(a);
              }
              t.pop();
              return (this._cache[e] = t.length
                ? this._filter(t.join(a) + a, t) && this._test(e)
                : this._test(e));
            }
          },
          {
            key: "_test",
            value: function _test(e) {
              var t = 0;
              this._rules.forEach(function(r) {
                if (!(t ^ r.negative)) {
                  t = r.negative ^ r.regex.test(e);
                }
              });
              return !t;
            }
          }
        ]);
        return IgnoreBase;
      })();
      var o = [
        [
          /\\?\s+$/,
          function(e) {
            return e.indexOf("\\") === 0 ? " " : "";
          }
        ],
        [
          /\\\s/g,
          function() {
            return " ";
          }
        ],
        [
          /[\\\^$.|?*+()\[{]/g,
          function(e) {
            return "\\" + e;
          }
        ],
        [
          /^\//,
          function() {
            return "^";
          }
        ],
        [
          /\//g,
          function() {
            return "\\/";
          }
        ],
        [
          /^\^*\\\*\\\*\\\//,
          function() {
            return "^(?:.*\\/)?";
          }
        ]
      ];
      var l = [
        [
          /^(?=[^\^])/,
          function() {
            return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
          }
        ],
        [
          /\\\/\\\*\\\*(?=\\\/|$)/g,
          function(e, t, r) {
            return t + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+";
          }
        ],
        [
          /(^|[^\\]+)\\\*(?=.+)/g,
          function(e, t) {
            return t + "[^\\/]*";
          }
        ],
        [
          /(\^|\\\/)?\\\*$/,
          function(e, t) {
            return (t ? t + "[^/]+" : "[^/]*") + "(?=$|\\/$)";
          }
        ],
        [
          /\\\\\\/g,
          function() {
            return "\\";
          }
        ]
      ];
      var f = [].concat(
        o,
        [
          [
            /(?:[^*\/])$/,
            function(e) {
              return e + "(?=$|\\/)";
            }
          ]
        ],
        l
      );
      var c = [].concat(
        o,
        [
          [
            /(?:[^*])$/,
            function(e) {
              return e + "(?=$|\\/$)";
            }
          ]
        ],
        l
      );
      var h = {};
      function make_regex(e, t) {
        var r = h[e];
        if (r) {
          return r;
        }
        var i = t ? c : f;
        var n = i.reduce(function(t, r) {
          return t.replace(r[0], r[1].bind(e));
        }, e);
        return (h[e] = new RegExp(n, "i"));
      }
      if (
        typeof process !== "undefined" &&
        ((process.env && process.env.IGNORE_TEST_WIN32) ||
          process.platform === "win32")
      ) {
        var p = s.prototype._filter;
        var v = function make_posix(e) {
          return /^\\\\\?\\/.test(e) || /[^\x00-\x80]+/.test(e)
            ? e
            : e.replace(/\\/g, "/");
        };
        s.prototype._filter = function(e, t) {
          e = v(e);
          return p.call(this, e, t);
        };
      }
    },
    function(e, t, r) {
      "use strict";
      const i = r(589);
      const n = r(778);
      const a = r(66);
      const u = (e, t, r) => {
        if (typeof e !== "string") {
          throw new TypeError(
            `Expected \`fromDir\` to be of type \`string\`, got \`${typeof e}\``
          );
        }
        if (typeof t !== "string") {
          throw new TypeError(
            `Expected \`moduleId\` to be of type \`string\`, got \`${typeof t}\``
          );
        }
        try {
          e = a.realpathSync(e);
        } catch (t) {
          if (t.code === "ENOENT") {
            e = i.resolve(e);
          } else if (r) {
            return null;
          } else {
            throw t;
          }
        }
        const u = i.join(e, "noop.js");
        const s = () =>
          n._resolveFilename(t, {
            id: u,
            filename: u,
            paths: n._nodeModulePaths(e)
          });
        if (r) {
          try {
            return s();
          } catch (e) {
            return null;
          }
        }
        return s();
      };
      e.exports = (e, t) => u(e, t);
      e.exports.silent = (e, t) => u(e, t, true);
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:configure");
      var n = r(928);
      var a = r(623);
      var u = r(692);
      var s = r(876);
      e.exports = configure;
      function configure(e, t, r, o) {
        var l = e.configuration;
        var f = e.processor;
        if (n(t).fatal) {
          return o();
        }
        l.load(t.path, handleConfiguration);
        function handleConfiguration(e, t) {
          var n;
          var l;
          var c;
          var h;
          var p;
          var v;
          if (e) {
            return o(e);
          }
          i("Using settings `%j`", t.settings);
          f.data("settings", t.settings);
          n = t.plugins;
          h = n.length;
          p = -1;
          i("Using `%d` plugins", h);
          while (++p < h) {
            c = n[p][0];
            l = n[p][1];
            if (l === false) {
              continue;
            }
            if (l === null || (u(l) && s(l))) {
              l = undefined;
            }
            v = a(c) || "function";
            i("Using plug-in `%s`, with options `%j`", v, l);
            try {
              f.use(c, l, r);
            } catch (e) {
              return o(e);
            }
          }
          o();
        }
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        var r = e.indexOf("*", t);
        var i = e.indexOf("_", t);
        if (i === -1) {
          return r;
        }
        if (r === -1) {
          return i;
        }
        return i < r ? i : r;
      }
    },
    function(e, t, r) {
      var i = r(16);
      e.exports = i(once);
      e.exports.strict = i(onceStrict);
      once.proto = once(function() {
        Object.defineProperty(Function.prototype, "once", {
          value: function() {
            return once(this);
          },
          configurable: true
        });
        Object.defineProperty(Function.prototype, "onceStrict", {
          value: function() {
            return onceStrict(this);
          },
          configurable: true
        });
      });
      function once(e) {
        var t = function() {
          if (t.called) return t.value;
          t.called = true;
          return (t.value = e.apply(this, arguments));
        };
        t.called = false;
        return t;
      }
      function onceStrict(e) {
        var t = function() {
          if (t.called) throw new Error(t.onceError);
          t.called = true;
          return (t.value = e.apply(this, arguments));
        };
        var r = e.name || "Function wrapped with `once`";
        t.onceError = r + " shouldn't be called more than once";
        t.called = false;
        return t;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(260);
      var n = r(833);
      var a = r(658);
      var u = r(388);
      var s = r(65);
      var o = Object.prototype.hasOwnProperty;
      var l = 1;
      var f = 2;
      var c = 3;
      var h = 4;
      var p = 1;
      var v = 2;
      var d = 3;
      var D = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var m = /[\x85\u2028\u2029]/;
      var g = /[,\[\]\{\}]/;
      var E = /^(?:!|!!|![a-z\-]+!)$/i;
      var A = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
      function _class(e) {
        return Object.prototype.toString.call(e);
      }
      function is_EOL(e) {
        return e === 10 || e === 13;
      }
      function is_WHITE_SPACE(e) {
        return e === 9 || e === 32;
      }
      function is_WS_OR_EOL(e) {
        return e === 9 || e === 32 || e === 10 || e === 13;
      }
      function is_FLOW_INDICATOR(e) {
        return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
      }
      function fromHexCode(e) {
        var t;
        if (48 <= e && e <= 57) {
          return e - 48;
        }
        t = e | 32;
        if (97 <= t && t <= 102) {
          return t - 97 + 10;
        }
        return -1;
      }
      function escapedHexLen(e) {
        if (e === 120) {
          return 2;
        }
        if (e === 117) {
          return 4;
        }
        if (e === 85) {
          return 8;
        }
        return 0;
      }
      function fromDecimalCode(e) {
        if (48 <= e && e <= 57) {
          return e - 48;
        }
        return -1;
      }
      function simpleEscapeSequence(e) {
        return e === 48
          ? "\0"
          : e === 97
          ? ""
          : e === 98
          ? "\b"
          : e === 116
          ? "\t"
          : e === 9
          ? "\t"
          : e === 110
          ? "\n"
          : e === 118
          ? "\v"
          : e === 102
          ? "\f"
          : e === 114
          ? "\r"
          : e === 101
          ? ""
          : e === 32
          ? " "
          : e === 34
          ? '"'
          : e === 47
          ? "/"
          : e === 92
          ? "\\"
          : e === 78
          ? ""
          : e === 95
          ? " "
          : e === 76
          ? "\u2028"
          : e === 80
          ? "\u2029"
          : "";
      }
      function charFromCodepoint(e) {
        if (e <= 65535) {
          return String.fromCharCode(e);
        }
        return String.fromCharCode(
          ((e - 65536) >> 10) + 55296,
          ((e - 65536) & 1023) + 56320
        );
      }
      var C = new Array(256);
      var y = new Array(256);
      for (var w = 0; w < 256; w++) {
        C[w] = simpleEscapeSequence(w) ? 1 : 0;
        y[w] = simpleEscapeSequence(w);
      }
      function State(e, t) {
        this.input = e;
        this.filename = t["filename"] || null;
        this.schema = t["schema"] || s;
        this.onWarning = t["onWarning"] || null;
        this.legacy = t["legacy"] || false;
        this.json = t["json"] || false;
        this.listener = t["listener"] || null;
        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;
        this.length = e.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;
        this.documents = [];
      }
      function generateError(e, t) {
        return new n(
          t,
          new a(
            e.filename,
            e.input,
            e.position,
            e.line,
            e.position - e.lineStart
          )
        );
      }
      function throwError(e, t) {
        throw generateError(e, t);
      }
      function throwWarning(e, t) {
        if (e.onWarning) {
          e.onWarning.call(null, generateError(e, t));
        }
      }
      var x = {
        YAML: function handleYamlDirective(e, t, r) {
          var i, n, a;
          if (e.version !== null) {
            throwError(e, "duplication of %YAML directive");
          }
          if (r.length !== 1) {
            throwError(e, "YAML directive accepts exactly one argument");
          }
          i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
          if (i === null) {
            throwError(e, "ill-formed argument of the YAML directive");
          }
          n = parseInt(i[1], 10);
          a = parseInt(i[2], 10);
          if (n !== 1) {
            throwError(e, "unacceptable YAML version of the document");
          }
          e.version = r[0];
          e.checkLineBreaks = a < 2;
          if (a !== 1 && a !== 2) {
            throwWarning(e, "unsupported YAML version of the document");
          }
        },
        TAG: function handleTagDirective(e, t, r) {
          var i, n;
          if (r.length !== 2) {
            throwError(e, "TAG directive accepts exactly two arguments");
          }
          i = r[0];
          n = r[1];
          if (!E.test(i)) {
            throwError(
              e,
              "ill-formed tag handle (first argument) of the TAG directive"
            );
          }
          if (o.call(e.tagMap, i)) {
            throwError(
              e,
              'there is a previously declared suffix for "' + i + '" tag handle'
            );
          }
          if (!A.test(n)) {
            throwError(
              e,
              "ill-formed tag prefix (second argument) of the TAG directive"
            );
          }
          e.tagMap[i] = n;
        }
      };
      function captureSegment(e, t, r, i) {
        var n, a, u, s;
        if (t < r) {
          s = e.input.slice(t, r);
          if (i) {
            for (n = 0, a = s.length; n < a; n += 1) {
              u = s.charCodeAt(n);
              if (!(u === 9 || (32 <= u && u <= 1114111))) {
                throwError(e, "expected valid JSON character");
              }
            }
          } else if (D.test(s)) {
            throwError(e, "the stream contains non-printable characters");
          }
          e.result += s;
        }
      }
      function mergeMappings(e, t, r, n) {
        var a, u, s, l;
        if (!i.isObject(r)) {
          throwError(
            e,
            "cannot merge mappings; the provided source object is unacceptable"
          );
        }
        a = Object.keys(r);
        for (s = 0, l = a.length; s < l; s += 1) {
          u = a[s];
          if (!o.call(t, u)) {
            t[u] = r[u];
            n[u] = true;
          }
        }
      }
      function storeMappingPair(e, t, r, i, n, a, u, s) {
        var l, f;
        if (Array.isArray(n)) {
          n = Array.prototype.slice.call(n);
          for (l = 0, f = n.length; l < f; l += 1) {
            if (Array.isArray(n[l])) {
              throwError(e, "nested arrays are not supported inside keys");
            }
            if (typeof n === "object" && _class(n[l]) === "[object Object]") {
              n[l] = "[object Object]";
            }
          }
        }
        if (typeof n === "object" && _class(n) === "[object Object]") {
          n = "[object Object]";
        }
        n = String(n);
        if (t === null) {
          t = {};
        }
        if (i === "tag:yaml.org,2002:merge") {
          if (Array.isArray(a)) {
            for (l = 0, f = a.length; l < f; l += 1) {
              mergeMappings(e, t, a[l], r);
            }
          } else {
            mergeMappings(e, t, a, r);
          }
        } else {
          if (!e.json && !o.call(r, n) && o.call(t, n)) {
            e.line = u || e.line;
            e.position = s || e.position;
            throwError(e, "duplicated mapping key");
          }
          t[n] = a;
          delete r[n];
        }
        return t;
      }
      function readLineBreak(e) {
        var t;
        t = e.input.charCodeAt(e.position);
        if (t === 10) {
          e.position++;
        } else if (t === 13) {
          e.position++;
          if (e.input.charCodeAt(e.position) === 10) {
            e.position++;
          }
        } else {
          throwError(e, "a line break is expected");
        }
        e.line += 1;
        e.lineStart = e.position;
      }
      function skipSeparationSpace(e, t, r) {
        var i = 0,
          n = e.input.charCodeAt(e.position);
        while (n !== 0) {
          while (is_WHITE_SPACE(n)) {
            n = e.input.charCodeAt(++e.position);
          }
          if (t && n === 35) {
            do {
              n = e.input.charCodeAt(++e.position);
            } while (n !== 10 && n !== 13 && n !== 0);
          }
          if (is_EOL(n)) {
            readLineBreak(e);
            n = e.input.charCodeAt(e.position);
            i++;
            e.lineIndent = 0;
            while (n === 32) {
              e.lineIndent++;
              n = e.input.charCodeAt(++e.position);
            }
          } else {
            break;
          }
        }
        if (r !== -1 && i !== 0 && e.lineIndent < r) {
          throwWarning(e, "deficient indentation");
        }
        return i;
      }
      function testDocumentSeparator(e) {
        var t = e.position,
          r;
        r = e.input.charCodeAt(t);
        if (
          (r === 45 || r === 46) &&
          r === e.input.charCodeAt(t + 1) &&
          r === e.input.charCodeAt(t + 2)
        ) {
          t += 3;
          r = e.input.charCodeAt(t);
          if (r === 0 || is_WS_OR_EOL(r)) {
            return true;
          }
        }
        return false;
      }
      function writeFoldedLines(e, t) {
        if (t === 1) {
          e.result += " ";
        } else if (t > 1) {
          e.result += i.repeat("\n", t - 1);
        }
      }
      function readPlainScalar(e, t, r) {
        var i,
          n,
          a,
          u,
          s,
          o,
          l,
          f,
          c = e.kind,
          h = e.result,
          p;
        p = e.input.charCodeAt(e.position);
        if (
          is_WS_OR_EOL(p) ||
          is_FLOW_INDICATOR(p) ||
          p === 35 ||
          p === 38 ||
          p === 42 ||
          p === 33 ||
          p === 124 ||
          p === 62 ||
          p === 39 ||
          p === 34 ||
          p === 37 ||
          p === 64 ||
          p === 96
        ) {
          return false;
        }
        if (p === 63 || p === 45) {
          n = e.input.charCodeAt(e.position + 1);
          if (is_WS_OR_EOL(n) || (r && is_FLOW_INDICATOR(n))) {
            return false;
          }
        }
        e.kind = "scalar";
        e.result = "";
        a = u = e.position;
        s = false;
        while (p !== 0) {
          if (p === 58) {
            n = e.input.charCodeAt(e.position + 1);
            if (is_WS_OR_EOL(n) || (r && is_FLOW_INDICATOR(n))) {
              break;
            }
          } else if (p === 35) {
            i = e.input.charCodeAt(e.position - 1);
            if (is_WS_OR_EOL(i)) {
              break;
            }
          } else if (
            (e.position === e.lineStart && testDocumentSeparator(e)) ||
            (r && is_FLOW_INDICATOR(p))
          ) {
            break;
          } else if (is_EOL(p)) {
            o = e.line;
            l = e.lineStart;
            f = e.lineIndent;
            skipSeparationSpace(e, false, -1);
            if (e.lineIndent >= t) {
              s = true;
              p = e.input.charCodeAt(e.position);
              continue;
            } else {
              e.position = u;
              e.line = o;
              e.lineStart = l;
              e.lineIndent = f;
              break;
            }
          }
          if (s) {
            captureSegment(e, a, u, false);
            writeFoldedLines(e, e.line - o);
            a = u = e.position;
            s = false;
          }
          if (!is_WHITE_SPACE(p)) {
            u = e.position + 1;
          }
          p = e.input.charCodeAt(++e.position);
        }
        captureSegment(e, a, u, false);
        if (e.result) {
          return true;
        }
        e.kind = c;
        e.result = h;
        return false;
      }
      function readSingleQuotedScalar(e, t) {
        var r, i, n;
        r = e.input.charCodeAt(e.position);
        if (r !== 39) {
          return false;
        }
        e.kind = "scalar";
        e.result = "";
        e.position++;
        i = n = e.position;
        while ((r = e.input.charCodeAt(e.position)) !== 0) {
          if (r === 39) {
            captureSegment(e, i, e.position, true);
            r = e.input.charCodeAt(++e.position);
            if (r === 39) {
              i = e.position;
              e.position++;
              n = e.position;
            } else {
              return true;
            }
          } else if (is_EOL(r)) {
            captureSegment(e, i, n, true);
            writeFoldedLines(e, skipSeparationSpace(e, false, t));
            i = n = e.position;
          } else if (e.position === e.lineStart && testDocumentSeparator(e)) {
            throwError(
              e,
              "unexpected end of the document within a single quoted scalar"
            );
          } else {
            e.position++;
            n = e.position;
          }
        }
        throwError(
          e,
          "unexpected end of the stream within a single quoted scalar"
        );
      }
      function readDoubleQuotedScalar(e, t) {
        var r, i, n, a, u, s;
        s = e.input.charCodeAt(e.position);
        if (s !== 34) {
          return false;
        }
        e.kind = "scalar";
        e.result = "";
        e.position++;
        r = i = e.position;
        while ((s = e.input.charCodeAt(e.position)) !== 0) {
          if (s === 34) {
            captureSegment(e, r, e.position, true);
            e.position++;
            return true;
          } else if (s === 92) {
            captureSegment(e, r, e.position, true);
            s = e.input.charCodeAt(++e.position);
            if (is_EOL(s)) {
              skipSeparationSpace(e, false, t);
            } else if (s < 256 && C[s]) {
              e.result += y[s];
              e.position++;
            } else if ((u = escapedHexLen(s)) > 0) {
              n = u;
              a = 0;
              for (; n > 0; n--) {
                s = e.input.charCodeAt(++e.position);
                if ((u = fromHexCode(s)) >= 0) {
                  a = (a << 4) + u;
                } else {
                  throwError(e, "expected hexadecimal character");
                }
              }
              e.result += charFromCodepoint(a);
              e.position++;
            } else {
              throwError(e, "unknown escape sequence");
            }
            r = i = e.position;
          } else if (is_EOL(s)) {
            captureSegment(e, r, i, true);
            writeFoldedLines(e, skipSeparationSpace(e, false, t));
            r = i = e.position;
          } else if (e.position === e.lineStart && testDocumentSeparator(e)) {
            throwError(
              e,
              "unexpected end of the document within a double quoted scalar"
            );
          } else {
            e.position++;
            i = e.position;
          }
        }
        throwError(
          e,
          "unexpected end of the stream within a double quoted scalar"
        );
      }
      function readFlowCollection(e, t) {
        var r = true,
          i,
          n = e.tag,
          a,
          u = e.anchor,
          s,
          o,
          f,
          c,
          h,
          p = {},
          v,
          d,
          D,
          m;
        m = e.input.charCodeAt(e.position);
        if (m === 91) {
          o = 93;
          h = false;
          a = [];
        } else if (m === 123) {
          o = 125;
          h = true;
          a = {};
        } else {
          return false;
        }
        if (e.anchor !== null) {
          e.anchorMap[e.anchor] = a;
        }
        m = e.input.charCodeAt(++e.position);
        while (m !== 0) {
          skipSeparationSpace(e, true, t);
          m = e.input.charCodeAt(e.position);
          if (m === o) {
            e.position++;
            e.tag = n;
            e.anchor = u;
            e.kind = h ? "mapping" : "sequence";
            e.result = a;
            return true;
          } else if (!r) {
            throwError(e, "missed comma between flow collection entries");
          }
          d = v = D = null;
          f = c = false;
          if (m === 63) {
            s = e.input.charCodeAt(e.position + 1);
            if (is_WS_OR_EOL(s)) {
              f = c = true;
              e.position++;
              skipSeparationSpace(e, true, t);
            }
          }
          i = e.line;
          composeNode(e, t, l, false, true);
          d = e.tag;
          v = e.result;
          skipSeparationSpace(e, true, t);
          m = e.input.charCodeAt(e.position);
          if ((c || e.line === i) && m === 58) {
            f = true;
            m = e.input.charCodeAt(++e.position);
            skipSeparationSpace(e, true, t);
            composeNode(e, t, l, false, true);
            D = e.result;
          }
          if (h) {
            storeMappingPair(e, a, p, d, v, D);
          } else if (f) {
            a.push(storeMappingPair(e, null, p, d, v, D));
          } else {
            a.push(v);
          }
          skipSeparationSpace(e, true, t);
          m = e.input.charCodeAt(e.position);
          if (m === 44) {
            r = true;
            m = e.input.charCodeAt(++e.position);
          } else {
            r = false;
          }
        }
        throwError(e, "unexpected end of the stream within a flow collection");
      }
      function readBlockScalar(e, t) {
        var r,
          n,
          a = p,
          u = false,
          s = false,
          o = t,
          l = 0,
          f = false,
          c,
          h;
        h = e.input.charCodeAt(e.position);
        if (h === 124) {
          n = false;
        } else if (h === 62) {
          n = true;
        } else {
          return false;
        }
        e.kind = "scalar";
        e.result = "";
        while (h !== 0) {
          h = e.input.charCodeAt(++e.position);
          if (h === 43 || h === 45) {
            if (p === a) {
              a = h === 43 ? d : v;
            } else {
              throwError(e, "repeat of a chomping mode identifier");
            }
          } else if ((c = fromDecimalCode(h)) >= 0) {
            if (c === 0) {
              throwError(
                e,
                "bad explicit indentation width of a block scalar; it cannot be less than one"
              );
            } else if (!s) {
              o = t + c - 1;
              s = true;
            } else {
              throwError(e, "repeat of an indentation width identifier");
            }
          } else {
            break;
          }
        }
        if (is_WHITE_SPACE(h)) {
          do {
            h = e.input.charCodeAt(++e.position);
          } while (is_WHITE_SPACE(h));
          if (h === 35) {
            do {
              h = e.input.charCodeAt(++e.position);
            } while (!is_EOL(h) && h !== 0);
          }
        }
        while (h !== 0) {
          readLineBreak(e);
          e.lineIndent = 0;
          h = e.input.charCodeAt(e.position);
          while ((!s || e.lineIndent < o) && h === 32) {
            e.lineIndent++;
            h = e.input.charCodeAt(++e.position);
          }
          if (!s && e.lineIndent > o) {
            o = e.lineIndent;
          }
          if (is_EOL(h)) {
            l++;
            continue;
          }
          if (e.lineIndent < o) {
            if (a === d) {
              e.result += i.repeat("\n", u ? 1 + l : l);
            } else if (a === p) {
              if (u) {
                e.result += "\n";
              }
            }
            break;
          }
          if (n) {
            if (is_WHITE_SPACE(h)) {
              f = true;
              e.result += i.repeat("\n", u ? 1 + l : l);
            } else if (f) {
              f = false;
              e.result += i.repeat("\n", l + 1);
            } else if (l === 0) {
              if (u) {
                e.result += " ";
              }
            } else {
              e.result += i.repeat("\n", l);
            }
          } else {
            e.result += i.repeat("\n", u ? 1 + l : l);
          }
          u = true;
          s = true;
          l = 0;
          r = e.position;
          while (!is_EOL(h) && h !== 0) {
            h = e.input.charCodeAt(++e.position);
          }
          captureSegment(e, r, e.position, false);
        }
        return true;
      }
      function readBlockSequence(e, t) {
        var r,
          i = e.tag,
          n = e.anchor,
          a = [],
          u,
          s = false,
          o;
        if (e.anchor !== null) {
          e.anchorMap[e.anchor] = a;
        }
        o = e.input.charCodeAt(e.position);
        while (o !== 0) {
          if (o !== 45) {
            break;
          }
          u = e.input.charCodeAt(e.position + 1);
          if (!is_WS_OR_EOL(u)) {
            break;
          }
          s = true;
          e.position++;
          if (skipSeparationSpace(e, true, -1)) {
            if (e.lineIndent <= t) {
              a.push(null);
              o = e.input.charCodeAt(e.position);
              continue;
            }
          }
          r = e.line;
          composeNode(e, t, c, false, true);
          a.push(e.result);
          skipSeparationSpace(e, true, -1);
          o = e.input.charCodeAt(e.position);
          if ((e.line === r || e.lineIndent > t) && o !== 0) {
            throwError(e, "bad indentation of a sequence entry");
          } else if (e.lineIndent < t) {
            break;
          }
        }
        if (s) {
          e.tag = i;
          e.anchor = n;
          e.kind = "sequence";
          e.result = a;
          return true;
        }
        return false;
      }
      function readBlockMapping(e, t, r) {
        var i,
          n,
          a,
          u,
          s = e.tag,
          o = e.anchor,
          l = {},
          c = {},
          p = null,
          v = null,
          d = null,
          D = false,
          m = false,
          g;
        if (e.anchor !== null) {
          e.anchorMap[e.anchor] = l;
        }
        g = e.input.charCodeAt(e.position);
        while (g !== 0) {
          i = e.input.charCodeAt(e.position + 1);
          a = e.line;
          u = e.position;
          if ((g === 63 || g === 58) && is_WS_OR_EOL(i)) {
            if (g === 63) {
              if (D) {
                storeMappingPair(e, l, c, p, v, null);
                p = v = d = null;
              }
              m = true;
              D = true;
              n = true;
            } else if (D) {
              D = false;
              n = true;
            } else {
              throwError(
                e,
                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
              );
            }
            e.position += 1;
            g = i;
          } else if (composeNode(e, r, f, false, true)) {
            if (e.line === a) {
              g = e.input.charCodeAt(e.position);
              while (is_WHITE_SPACE(g)) {
                g = e.input.charCodeAt(++e.position);
              }
              if (g === 58) {
                g = e.input.charCodeAt(++e.position);
                if (!is_WS_OR_EOL(g)) {
                  throwError(
                    e,
                    "a whitespace character is expected after the key-value separator within a block mapping"
                  );
                }
                if (D) {
                  storeMappingPair(e, l, c, p, v, null);
                  p = v = d = null;
                }
                m = true;
                D = false;
                n = false;
                p = e.tag;
                v = e.result;
              } else if (m) {
                throwError(
                  e,
                  "can not read an implicit mapping pair; a colon is missed"
                );
              } else {
                e.tag = s;
                e.anchor = o;
                return true;
              }
            } else if (m) {
              throwError(
                e,
                "can not read a block mapping entry; a multiline key may not be an implicit key"
              );
            } else {
              e.tag = s;
              e.anchor = o;
              return true;
            }
          } else {
            break;
          }
          if (e.line === a || e.lineIndent > t) {
            if (composeNode(e, t, h, true, n)) {
              if (D) {
                v = e.result;
              } else {
                d = e.result;
              }
            }
            if (!D) {
              storeMappingPair(e, l, c, p, v, d, a, u);
              p = v = d = null;
            }
            skipSeparationSpace(e, true, -1);
            g = e.input.charCodeAt(e.position);
          }
          if (e.lineIndent > t && g !== 0) {
            throwError(e, "bad indentation of a mapping entry");
          } else if (e.lineIndent < t) {
            break;
          }
        }
        if (D) {
          storeMappingPair(e, l, c, p, v, null);
        }
        if (m) {
          e.tag = s;
          e.anchor = o;
          e.kind = "mapping";
          e.result = l;
        }
        return m;
      }
      function readTagProperty(e) {
        var t,
          r = false,
          i = false,
          n,
          a,
          u;
        u = e.input.charCodeAt(e.position);
        if (u !== 33) return false;
        if (e.tag !== null) {
          throwError(e, "duplication of a tag property");
        }
        u = e.input.charCodeAt(++e.position);
        if (u === 60) {
          r = true;
          u = e.input.charCodeAt(++e.position);
        } else if (u === 33) {
          i = true;
          n = "!!";
          u = e.input.charCodeAt(++e.position);
        } else {
          n = "!";
        }
        t = e.position;
        if (r) {
          do {
            u = e.input.charCodeAt(++e.position);
          } while (u !== 0 && u !== 62);
          if (e.position < e.length) {
            a = e.input.slice(t, e.position);
            u = e.input.charCodeAt(++e.position);
          } else {
            throwError(e, "unexpected end of the stream within a verbatim tag");
          }
        } else {
          while (u !== 0 && !is_WS_OR_EOL(u)) {
            if (u === 33) {
              if (!i) {
                n = e.input.slice(t - 1, e.position + 1);
                if (!E.test(n)) {
                  throwError(
                    e,
                    "named tag handle cannot contain such characters"
                  );
                }
                i = true;
                t = e.position + 1;
              } else {
                throwError(e, "tag suffix cannot contain exclamation marks");
              }
            }
            u = e.input.charCodeAt(++e.position);
          }
          a = e.input.slice(t, e.position);
          if (g.test(a)) {
            throwError(
              e,
              "tag suffix cannot contain flow indicator characters"
            );
          }
        }
        if (a && !A.test(a)) {
          throwError(e, "tag name cannot contain such characters: " + a);
        }
        if (r) {
          e.tag = a;
        } else if (o.call(e.tagMap, n)) {
          e.tag = e.tagMap[n] + a;
        } else if (n === "!") {
          e.tag = "!" + a;
        } else if (n === "!!") {
          e.tag = "tag:yaml.org,2002:" + a;
        } else {
          throwError(e, 'undeclared tag handle "' + n + '"');
        }
        return true;
      }
      function readAnchorProperty(e) {
        var t, r;
        r = e.input.charCodeAt(e.position);
        if (r !== 38) return false;
        if (e.anchor !== null) {
          throwError(e, "duplication of an anchor property");
        }
        r = e.input.charCodeAt(++e.position);
        t = e.position;
        while (r !== 0 && !is_WS_OR_EOL(r) && !is_FLOW_INDICATOR(r)) {
          r = e.input.charCodeAt(++e.position);
        }
        if (e.position === t) {
          throwError(
            e,
            "name of an anchor node must contain at least one character"
          );
        }
        e.anchor = e.input.slice(t, e.position);
        return true;
      }
      function readAlias(e) {
        var t, r, i;
        i = e.input.charCodeAt(e.position);
        if (i !== 42) return false;
        i = e.input.charCodeAt(++e.position);
        t = e.position;
        while (i !== 0 && !is_WS_OR_EOL(i) && !is_FLOW_INDICATOR(i)) {
          i = e.input.charCodeAt(++e.position);
        }
        if (e.position === t) {
          throwError(
            e,
            "name of an alias node must contain at least one character"
          );
        }
        r = e.input.slice(t, e.position);
        if (!e.anchorMap.hasOwnProperty(r)) {
          throwError(e, 'unidentified alias "' + r + '"');
        }
        e.result = e.anchorMap[r];
        skipSeparationSpace(e, true, -1);
        return true;
      }
      function composeNode(e, t, r, i, n) {
        var a,
          u,
          s,
          p = 1,
          v = false,
          d = false,
          D,
          m,
          g,
          E,
          A;
        if (e.listener !== null) {
          e.listener("open", e);
        }
        e.tag = null;
        e.anchor = null;
        e.kind = null;
        e.result = null;
        a = u = s = h === r || c === r;
        if (i) {
          if (skipSeparationSpace(e, true, -1)) {
            v = true;
            if (e.lineIndent > t) {
              p = 1;
            } else if (e.lineIndent === t) {
              p = 0;
            } else if (e.lineIndent < t) {
              p = -1;
            }
          }
        }
        if (p === 1) {
          while (readTagProperty(e) || readAnchorProperty(e)) {
            if (skipSeparationSpace(e, true, -1)) {
              v = true;
              s = a;
              if (e.lineIndent > t) {
                p = 1;
              } else if (e.lineIndent === t) {
                p = 0;
              } else if (e.lineIndent < t) {
                p = -1;
              }
            } else {
              s = false;
            }
          }
        }
        if (s) {
          s = v || n;
        }
        if (p === 1 || h === r) {
          if (l === r || f === r) {
            E = t;
          } else {
            E = t + 1;
          }
          A = e.position - e.lineStart;
          if (p === 1) {
            if (
              (s && (readBlockSequence(e, A) || readBlockMapping(e, A, E))) ||
              readFlowCollection(e, E)
            ) {
              d = true;
            } else {
              if (
                (u && readBlockScalar(e, E)) ||
                readSingleQuotedScalar(e, E) ||
                readDoubleQuotedScalar(e, E)
              ) {
                d = true;
              } else if (readAlias(e)) {
                d = true;
                if (e.tag !== null || e.anchor !== null) {
                  throwError(e, "alias node should not have any properties");
                }
              } else if (readPlainScalar(e, E, l === r)) {
                d = true;
                if (e.tag === null) {
                  e.tag = "?";
                }
              }
              if (e.anchor !== null) {
                e.anchorMap[e.anchor] = e.result;
              }
            }
          } else if (p === 0) {
            d = s && readBlockSequence(e, A);
          }
        }
        if (e.tag !== null && e.tag !== "!") {
          if (e.tag === "?") {
            for (D = 0, m = e.implicitTypes.length; D < m; D += 1) {
              g = e.implicitTypes[D];
              if (g.resolve(e.result)) {
                e.result = g.construct(e.result);
                e.tag = g.tag;
                if (e.anchor !== null) {
                  e.anchorMap[e.anchor] = e.result;
                }
                break;
              }
            }
          } else if (o.call(e.typeMap[e.kind || "fallback"], e.tag)) {
            g = e.typeMap[e.kind || "fallback"][e.tag];
            if (e.result !== null && g.kind !== e.kind) {
              throwError(
                e,
                "unacceptable node kind for !<" +
                  e.tag +
                  '> tag; it should be "' +
                  g.kind +
                  '", not "' +
                  e.kind +
                  '"'
              );
            }
            if (!g.resolve(e.result)) {
              throwError(
                e,
                "cannot resolve a node with !<" + e.tag + "> explicit tag"
              );
            } else {
              e.result = g.construct(e.result);
              if (e.anchor !== null) {
                e.anchorMap[e.anchor] = e.result;
              }
            }
          } else {
            throwError(e, "unknown tag !<" + e.tag + ">");
          }
        }
        if (e.listener !== null) {
          e.listener("close", e);
        }
        return e.tag !== null || e.anchor !== null || d;
      }
      function readDocument(e) {
        var t = e.position,
          r,
          i,
          n,
          a = false,
          u;
        e.version = null;
        e.checkLineBreaks = e.legacy;
        e.tagMap = {};
        e.anchorMap = {};
        while ((u = e.input.charCodeAt(e.position)) !== 0) {
          skipSeparationSpace(e, true, -1);
          u = e.input.charCodeAt(e.position);
          if (e.lineIndent > 0 || u !== 37) {
            break;
          }
          a = true;
          u = e.input.charCodeAt(++e.position);
          r = e.position;
          while (u !== 0 && !is_WS_OR_EOL(u)) {
            u = e.input.charCodeAt(++e.position);
          }
          i = e.input.slice(r, e.position);
          n = [];
          if (i.length < 1) {
            throwError(
              e,
              "directive name must not be less than one character in length"
            );
          }
          while (u !== 0) {
            while (is_WHITE_SPACE(u)) {
              u = e.input.charCodeAt(++e.position);
            }
            if (u === 35) {
              do {
                u = e.input.charCodeAt(++e.position);
              } while (u !== 0 && !is_EOL(u));
              break;
            }
            if (is_EOL(u)) break;
            r = e.position;
            while (u !== 0 && !is_WS_OR_EOL(u)) {
              u = e.input.charCodeAt(++e.position);
            }
            n.push(e.input.slice(r, e.position));
          }
          if (u !== 0) readLineBreak(e);
          if (o.call(x, i)) {
            x[i](e, i, n);
          } else {
            throwWarning(e, 'unknown document directive "' + i + '"');
          }
        }
        skipSeparationSpace(e, true, -1);
        if (
          e.lineIndent === 0 &&
          e.input.charCodeAt(e.position) === 45 &&
          e.input.charCodeAt(e.position + 1) === 45 &&
          e.input.charCodeAt(e.position + 2) === 45
        ) {
          e.position += 3;
          skipSeparationSpace(e, true, -1);
        } else if (a) {
          throwError(e, "directives end mark is expected");
        }
        composeNode(e, e.lineIndent - 1, h, false, true);
        skipSeparationSpace(e, true, -1);
        if (e.checkLineBreaks && m.test(e.input.slice(t, e.position))) {
          throwWarning(e, "non-ASCII line breaks are interpreted as content");
        }
        e.documents.push(e.result);
        if (e.position === e.lineStart && testDocumentSeparator(e)) {
          if (e.input.charCodeAt(e.position) === 46) {
            e.position += 3;
            skipSeparationSpace(e, true, -1);
          }
          return;
        }
        if (e.position < e.length - 1) {
          throwError(
            e,
            "end of the stream or a document separator is expected"
          );
        } else {
          return;
        }
      }
      function loadDocuments(e, t) {
        e = String(e);
        t = t || {};
        if (e.length !== 0) {
          if (
            e.charCodeAt(e.length - 1) !== 10 &&
            e.charCodeAt(e.length - 1) !== 13
          ) {
            e += "\n";
          }
          if (e.charCodeAt(0) === 65279) {
            e = e.slice(1);
          }
        }
        var r = new State(e, t);
        r.input += "\0";
        while (r.input.charCodeAt(r.position) === 32) {
          r.lineIndent += 1;
          r.position += 1;
        }
        while (r.position < r.length - 1) {
          readDocument(r);
        }
        return r.documents;
      }
      function loadAll(e, t, r) {
        var i = loadDocuments(e, r),
          n,
          a;
        if (typeof t !== "function") {
          return i;
        }
        for (n = 0, a = i.length; n < a; n += 1) {
          t(i[n]);
        }
      }
      function load(e, t) {
        var r = loadDocuments(e, t);
        if (r.length === 0) {
          return undefined;
        } else if (r.length === 1) {
          return r[0];
        }
        throw new n("expected a single document in the stream, but found more");
      }
      function safeLoadAll(e, t, r) {
        if (typeof t === "function") {
          loadAll(e, t, i.extend({ schema: u }, r));
        } else {
          return loadAll(e, i.extend({ schema: u }, r));
        }
      }
      function safeLoad(e, t) {
        return load(e, i.extend({ schema: u }, t));
      }
      e.exports.loadAll = loadAll;
      e.exports.load = load;
      e.exports.safeLoadAll = safeLoadAll;
      e.exports.safeLoad = safeLoad;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(27);
      var n = i();
      e.exports = function(e) {
        if (typeof e !== "string") {
          throw new TypeError("Expected a string");
        }
        return n ? e.replace(/^~($|\/|\\)/, n + "$1") : e;
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(851);
      var n = r(898);
      var a = r(359);
      var u = r(722);
      var s = r(345);
      var o = r(546);
      e.exports = options;
      var l = {
        unknown: handleUnknownArgument,
        default: {},
        alias: {},
        string: [],
        boolean: []
      };
      o.forEach(addEach);
      function options(e, t) {
        var r = t.extensions[0];
        var i = t.name;
        var n = toCamelCase(a(e, l));
        var u;
        var f;
        var c;
        o.forEach(function(e) {
          if (e.type === "string" && n[e.long] === "") {
            throw s("Missing value:%s", inspect(e).join(" "));
          }
        });
        f = extensions(n.ext);
        c = reporter(n.report);
        u = [
          inspectAll(o),
          "",
          "Examples:",
          "",
          "  # Process `input." + r + "`",
          "  $ " + i + " input." + r + " -o output." + r,
          "",
          "  # Pipe",
          "  $ " + i + " < input." + r + " > output." + r,
          "",
          "  # Rewrite all applicable files",
          "  $ " + i + " . -o"
        ].join("\n");
        return {
          helpMessage: u,
          cwd: t.cwd,
          processor: t.processor,
          help: n.help,
          version: n.version,
          files: n._,
          filePath: n.filePath,
          watch: n.watch,
          extensions: f.length === 0 ? t.extensions : f,
          output: n.output,
          out: n.stdout,
          tree: n.tree,
          treeIn: n.treeIn,
          treeOut: n.treeOut,
          inspect: n.inspect,
          rcName: t.rcName,
          packageField: t.packageField,
          rcPath: n.rcPath,
          detectConfig: n.config,
          settings: settings(n.setting),
          ignoreName: t.ignoreName,
          ignorePath: n.ignorePath,
          detectIgnore: n.ignore,
          pluginPrefix: t.pluginPrefix,
          plugins: plugins(n.use),
          reporter: c[0],
          reporterOptions: c[1],
          color: n.color,
          silent: n.silent,
          quiet: n.quiet,
          frail: n.frail
        };
      }
      function addEach(e) {
        var t = e.default;
        l.default[e.long] = t === undefined ? null : t;
        if (e.type in l) {
          l[e.type].push(e.long);
        }
        if (e.short) {
          l.alias[e.short] = e.long;
        }
      }
      function extensions(e) {
        return flatten(normalize(e).map(splitList));
      }
      function plugins(e) {
        var t = {};
        normalize(e)
          .map(splitOptions)
          .forEach(function(e) {
            t[e[0]] = e[1] ? parseConfig(e[1], {}) : null;
          });
        return t;
      }
      function reporter(e) {
        var t = normalize(e)
          .map(splitOptions)
          .map(function(e) {
            return [e[0], e[1] ? parseConfig(e[1], {}) : null];
          });
        return t[t.length - 1] || [];
      }
      function settings(e) {
        var t = {};
        normalize(e).forEach(function(e) {
          parseConfig(e, t);
        });
        return t;
      }
      function parseConfig(e, t) {
        var r;
        var i;
        try {
          e = toCamelCase(parseJSON(e));
        } catch (t) {
          i = t.message.replace(/at(?= position)/, "around");
          throw s("Cannot parse `%s` as JSON: %s", e, i);
        }
        for (r in e) {
          t[r] = e[r];
        }
        return t;
      }
      function handleUnknownArgument(e) {
        if (e.charAt(0) !== "-") {
          return;
        }
        if (e.charAt(1) === "-") {
          throw s("Unknown option `%s`, expected:\n%s", e, inspectAll(o));
        }
        e.slice(1)
          .split("")
          .forEach(each);
        function each(e) {
          var t = o.length;
          var r = -1;
          var i;
          while (++r < t) {
            i = o[r];
            if (i.short === e) {
              return;
            }
          }
          throw s(
            "Unknown short option `-%s`, expected:\n%s",
            e,
            inspectAll(o.filter(short))
          );
        }
        function short(e) {
          return e.short;
        }
      }
      function inspectAll(e) {
        return i(e.map(inspect));
      }
      function inspect(e) {
        var t = e.description;
        var r = e.long;
        if (e.default === true || e.truelike) {
          t += " (on by default)";
          r = "[no-]" + r;
        }
        return [
          "",
          e.short ? "-" + e.short : "",
          "--" + r + (e.value ? " " + e.value : ""),
          t
        ];
      }
      function normalize(e) {
        if (!e) {
          return [];
        }
        if (typeof e === "string") {
          return [e];
        }
        return flatten(e.map(normalize));
      }
      function flatten(e) {
        return [].concat.apply([], e);
      }
      function splitOptions(e) {
        return e.split("=");
      }
      function splitList(e) {
        return e.split(",");
      }
      function toCamelCase(e) {
        var t = {};
        var r;
        var i;
        for (i in e) {
          r = e[i];
          if (r && typeof r === "object" && !("length" in r)) {
            r = toCamelCase(r);
          }
          t[n(i)] = r;
        }
        return t;
      }
      function parseJSON(e) {
        return u.parse("{" + e + "}");
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(589);
      var a = r(347)("unified-engine:file-pipeline:file-system");
      e.exports = fileSystem;
      var u = i.writeFile;
      var s = n.resolve;
      function fileSystem(e, t, r, i) {
        var n;
        if (!e.output) {
          a("Ignoring writing to file-system");
          return i();
        }
        if (!t.data.unifiedEngineGiven) {
          a("Ignoring programmatically added file");
          return i();
        }
        n = t.path;
        if (!n) {
          a("Cannot write file without a `destinationPath`");
          return i(new Error("Cannot write file without an output path "));
        }
        n = s(e.cwd, n);
        a("Writing document to `%s`", n);
        t.stored = true;
        u(n, t.toString(), i);
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(727);
      e.exports = new i({ include: [r(43)] });
    },
    function(e, t, r) {
      "use strict";
      e.exports = r(583);
    },
    function(e) {
      "use strict";
      e.exports = bail;
      function bail(e) {
        if (e) {
          throw e;
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(12);
      var n =
        Object.keys ||
        function(e) {
          var t = [];
          for (var r in e) {
            t.push(r);
          }
          return t;
        };
      e.exports = Duplex;
      var a = r(683);
      a.inherits = r(780);
      var u = r(923);
      var s = r(574);
      a.inherits(Duplex, u);
      {
        var o = n(s.prototype);
        for (var l = 0; l < o.length; l++) {
          var f = o[l];
          if (!Duplex.prototype[f]) Duplex.prototype[f] = s.prototype[f];
        }
      }
      function Duplex(e) {
        if (!(this instanceof Duplex)) return new Duplex(e);
        u.call(this, e);
        s.call(this, e);
        if (e && e.readable === false) this.readable = false;
        if (e && e.writable === false) this.writable = false;
        this.allowHalfOpen = true;
        if (e && e.allowHalfOpen === false) this.allowHalfOpen = false;
        this.once("end", onend);
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function() {
          return this._writableState.highWaterMark;
        }
      });
      function onend() {
        if (this.allowHalfOpen || this._writableState.ended) return;
        i.nextTick(onEndNT, this);
      }
      function onEndNT(e) {
        e.end();
      }
      Object.defineProperty(Duplex.prototype, "destroyed", {
        get: function() {
          if (
            this._readableState === undefined ||
            this._writableState === undefined
          ) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function(e) {
          if (
            this._readableState === undefined ||
            this._writableState === undefined
          ) {
            return;
          }
          this._readableState.destroyed = e;
          this._writableState.destroyed = e;
        }
      });
      Duplex.prototype._destroy = function(e, t) {
        this.push(null);
        this.end();
        i.nextTick(t, e);
      };
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      const i = r(431);
      const n = r(834);
      const a = process.env;
      let u;
      if (n("no-color") || n("no-colors") || n("color=false")) {
        u = false;
      } else if (
        n("color") ||
        n("colors") ||
        n("color=true") ||
        n("color=always")
      ) {
        u = true;
      }
      if ("FORCE_COLOR" in a) {
        u = a.FORCE_COLOR.length === 0 || parseInt(a.FORCE_COLOR, 10) !== 0;
      }
      function translateLevel(e) {
        if (e === 0) {
          return false;
        }
        return { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function supportsColor(e) {
        if (u === false) {
          return 0;
        }
        if (n("color=16m") || n("color=full") || n("color=truecolor")) {
          return 3;
        }
        if (n("color=256")) {
          return 2;
        }
        if (e && !e.isTTY && u !== true) {
          return 0;
        }
        const t = u ? 1 : 0;
        if (process.platform === "win32") {
          const e = i.release().split(".");
          if (
            Number(process.versions.node.split(".")[0]) >= 8 &&
            Number(e[0]) >= 10 &&
            Number(e[2]) >= 10586
          ) {
            return Number(e[2]) >= 14931 ? 3 : 2;
          }
          return 1;
        }
        if ("CI" in a) {
          if (
            ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in a) ||
            a.CI_NAME === "codeship"
          ) {
            return 1;
          }
          return t;
        }
        if ("TEAMCITY_VERSION" in a) {
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a.TEAMCITY_VERSION)
            ? 1
            : 0;
        }
        if (a.COLORTERM === "truecolor") {
          return 3;
        }
        if ("TERM_PROGRAM" in a) {
          const e = parseInt((a.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (a.TERM_PROGRAM) {
            case "iTerm.app":
              return e >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        if (/-256(color)?$/i.test(a.TERM)) {
          return 2;
        }
        if (
          /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            a.TERM
          )
        ) {
          return 1;
        }
        if ("COLORTERM" in a) {
          return 1;
        }
        if (a.TERM === "dumb") {
          return t;
        }
        return t;
      }
      function getSupportLevel(e) {
        const t = supportsColor(e);
        return translateLevel(t);
      }
      e.exports = {
        supportsColor: getSupportLevel,
        stdout: getSupportLevel(process.stdout),
        stderr: getSupportLevel(process.stderr)
      };
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:queue");
      var n = r(928);
      e.exports = queue;
      function queue(e, t, r, a) {
        var u = t.history[0];
        var s = r.complete;
        var o = true;
        if (!s) {
          s = {};
          r.complete = s;
        }
        i("Queueing `%s`", u);
        s[u] = a;
        r.valueOf().forEach(each);
        if (!o) {
          i("Not flushing: some files cannot be flushed");
          return;
        }
        r.complete = {};
        r.pipeline.run(r, done);
        function each(e) {
          var t = e.history[0];
          if (n(e).fatal) {
            return;
          }
          if (typeof s[t] === "function") {
            i("`%s` can be flushed", t);
          } else {
            i("Interupting flush: `%s` is not finished", t);
            o = false;
          }
        }
        function done(e) {
          i("Flushing: all files can be flushed");
          for (u in s) {
            s[u](e);
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(426);
      e.exports = definition;
      definition.notInList = true;
      definition.notInBlock = true;
      var a = '"';
      var u = "'";
      var s = "\\";
      var o = "\n";
      var l = "\t";
      var f = " ";
      var c = "[";
      var h = "]";
      var p = "(";
      var v = ")";
      var d = ":";
      var D = "<";
      var m = ">";
      function definition(e, t, r) {
        var i = this;
        var m = i.options.commonmark;
        var g = 0;
        var E = t.length;
        var A = "";
        var C;
        var y;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        while (g < E) {
          x = t.charAt(g);
          if (x !== f && x !== l) {
            break;
          }
          A += x;
          g++;
        }
        x = t.charAt(g);
        if (x !== c) {
          return;
        }
        g++;
        A += x;
        w = "";
        while (g < E) {
          x = t.charAt(g);
          if (x === h) {
            break;
          } else if (x === s) {
            w += x;
            g++;
            x = t.charAt(g);
          }
          w += x;
          g++;
        }
        if (!w || t.charAt(g) !== h || t.charAt(g + 1) !== d) {
          return;
        }
        F = w;
        A += w + h + d;
        g = A.length;
        w = "";
        while (g < E) {
          x = t.charAt(g);
          if (x !== l && x !== f && x !== o) {
            break;
          }
          A += x;
          g++;
        }
        x = t.charAt(g);
        w = "";
        C = A;
        if (x === D) {
          g++;
          while (g < E) {
            x = t.charAt(g);
            if (!isEnclosedURLCharacter(x)) {
              break;
            }
            w += x;
            g++;
          }
          x = t.charAt(g);
          if (x === isEnclosedURLCharacter.delimiter) {
            A += D + w + x;
            g++;
          } else {
            if (m) {
              return;
            }
            g -= w.length + 1;
            w = "";
          }
        }
        if (!w) {
          while (g < E) {
            x = t.charAt(g);
            if (!isUnclosedURLCharacter(x)) {
              break;
            }
            w += x;
            g++;
          }
          A += w;
        }
        if (!w) {
          return;
        }
        S = w;
        w = "";
        while (g < E) {
          x = t.charAt(g);
          if (x !== l && x !== f && x !== o) {
            break;
          }
          w += x;
          g++;
        }
        x = t.charAt(g);
        b = null;
        if (x === a) {
          b = a;
        } else if (x === u) {
          b = u;
        } else if (x === p) {
          b = v;
        }
        if (!b) {
          w = "";
          g = A.length;
        } else if (w) {
          A += w + x;
          g = A.length;
          w = "";
          while (g < E) {
            x = t.charAt(g);
            if (x === b) {
              break;
            }
            if (x === o) {
              g++;
              x = t.charAt(g);
              if (x === o || x === b) {
                return;
              }
              w += o;
            }
            w += x;
            g++;
          }
          x = t.charAt(g);
          if (x !== b) {
            return;
          }
          y = A;
          A += w + x;
          g++;
          B = w;
          w = "";
        } else {
          return;
        }
        while (g < E) {
          x = t.charAt(g);
          if (x !== l && x !== f) {
            break;
          }
          A += x;
          g++;
        }
        x = t.charAt(g);
        if (!x || x === o) {
          if (r) {
            return true;
          }
          C = e(C).test().end;
          S = i.decode.raw(i.unescape(S), C, { nonTerminated: false });
          if (B) {
            y = e(y).test().end;
            B = i.decode.raw(i.unescape(B), y);
          }
          return e(A)({
            type: "definition",
            identifier: n(F),
            label: F,
            title: B || null,
            url: S
          });
        }
      }
      function isEnclosedURLCharacter(e) {
        return e !== m && e !== c && e !== h;
      }
      isEnclosedURLCharacter.delimiter = m;
      function isUnclosedURLCharacter(e) {
        return e !== c && e !== h && !i(e);
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:strong-marker", strongMarker);
      var s = { "*": true, _: true, null: true };
      function strongMarker(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (s[r] !== true) {
          t.fail(
            "Invalid strong marker `" +
              r +
              "`: use either `'consistent'`, `'*'`, or `'_'`"
          );
        }
        n(e, "strong", visitor);
        function visitor(e) {
          var n = i.charAt(a.start(e).offset);
          if (!u(e)) {
            if (r) {
              if (n !== r) {
                t.message("Strong should use `" + r + "` as a marker", e);
              }
            } else {
              r = n;
            }
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = escapes;
      var t = [
        "\\",
        "`",
        "*",
        "{",
        "}",
        "[",
        "]",
        "(",
        ")",
        "#",
        "+",
        "-",
        ".",
        "!",
        "_",
        ">"
      ];
      var r = t.concat(["~", "|"]);
      var i = r.concat([
        "\n",
        '"',
        "$",
        "%",
        "&",
        "'",
        ",",
        "/",
        ":",
        ";",
        "<",
        "=",
        "?",
        "@",
        "^"
      ]);
      escapes.default = t;
      escapes.gfm = r;
      escapes.commonmark = i;
      function escapes(e) {
        var n = e || {};
        if (n.commonmark) {
          return i;
        }
        return n.gfm ? r : t;
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        return e.indexOf("~~", t);
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(7);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i(
        "remark-lint:checkbox-character-style",
        checkboxCharacterStyle
      );
      var o = u.start;
      var l = u.end;
      var f = { x: true, X: true };
      var c = { " ": true, "\t": true };
      var h = { true: "checked", false: "unchecked" };
      function checkboxCharacterStyle(e, t, r) {
        var i = String(t);
        var u = n(t);
        r = typeof r === "object" ? r : {};
        if (r.unchecked && c[r.unchecked] !== true) {
          t.fail(
            "Invalid unchecked checkbox marker `" +
              r.unchecked +
              "`: use either `'\\t'`, or `' '`"
          );
        }
        if (r.checked && f[r.checked] !== true) {
          t.fail(
            "Invalid checked checkbox marker `" +
              r.checked +
              "`: use either `'x'`, or `'X'`"
          );
        }
        a(e, "listItem", visitor);
        function visitor(e) {
          var n;
          var a;
          var f;
          var c;
          var p;
          var v;
          var d;
          if (typeof e.checked !== "boolean" || s(e)) {
            return;
          }
          n = h[e.checked];
          a = o(e).offset;
          f = (e.children.length === 0 ? l(e) : o(e.children[0])).offset;
          c = i
            .slice(a, f)
            .trimRight()
            .slice(0, -1);
          v = c.charAt(c.length - 1);
          p = r[n];
          if (p) {
            if (v !== p) {
              d =
                n.charAt(0).toUpperCase() +
                n.slice(1) +
                " checkboxes should use `" +
                p +
                "` as a marker";
              t.message(d, {
                start: u.toPosition(a + c.length - 1),
                end: u.toPosition(a + c.length)
              });
            }
          } else {
            r[n] = v;
          }
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = wordCharacter;
      var t = String.fromCharCode;
      var r = /\w/;
      function wordCharacter(e) {
        return r.test(typeof e === "number" ? t(e) : e.charAt(0));
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(526);
      e.exports = i(
        "remark-lint:no-shortcut-reference-image",
        noShortcutReferenceImage
      );
      var u = "Use the trailing [] on reference images";
      function noShortcutReferenceImage(e, t) {
        n(e, "imageReference", visitor);
        function visitor(e) {
          if (!a(e) && e.referenceType === "shortcut") {
            t.message(u, e);
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(335);
      e.exports = trough;
      trough.wrap = i;
      var n = [].slice;
      function trough() {
        var e = [];
        var t = {};
        t.run = run;
        t.use = use;
        return t;
        function run() {
          var t = -1;
          var r = n.call(arguments, 0, -1);
          var a = arguments[arguments.length - 1];
          if (typeof a !== "function") {
            throw new Error("Expected function as last argument, not " + a);
          }
          next.apply(null, [null].concat(r));
          function next(u) {
            var s = e[++t];
            var o = n.call(arguments, 0);
            var l = o.slice(1);
            var f = r.length;
            var c = -1;
            if (u) {
              a(u);
              return;
            }
            while (++c < f) {
              if (l[c] === null || l[c] === undefined) {
                l[c] = r[c];
              }
            }
            r = l;
            if (s) {
              i(s, next).apply(null, r);
            } else {
              a.apply(null, [null].concat(r));
            }
          }
        }
        function use(r) {
          if (typeof r !== "function") {
            throw new Error("Expected `fn` to be a function, not " + r);
          }
          e.push(r);
          return t;
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(74);
      var n = r(368);
      var a = r(192);
      e.exports = i()
        .use(n)
        .use(a)
        .freeze();
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(7);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i(
        "remark-lint:no-blockquote-without-marker",
        noBlockquoteWithoutMarker
      );
      var o = "Missing marker in blockquote";
      function noBlockquoteWithoutMarker(e, t) {
        var r = String(t);
        var i = n(t);
        var l = r.length;
        a(e, "blockquote", visitor);
        function visitor(e) {
          var n = e.position && e.position.indent;
          var a;
          var f;
          var c;
          var h;
          var p;
          var v;
          var d;
          if (s(e) || !n || n.length === 0) {
            return;
          }
          a = u.start(e).line;
          f = n.length;
          c = -1;
          while (++c < f) {
            h = a + c + 1;
            d = { line: h, column: n[c] };
            p = i.toOffset(d) - 1;
            while (++p < l) {
              v = r.charAt(p);
              if (v === ">") {
                break;
              }
              if (v !== " " && v !== "\t") {
                t.message(o, d);
                break;
              }
            }
          }
        }
      }
    },
    ,
    function(e, t, r) {
      e.exports = realpath;
      realpath.realpath = realpath;
      realpath.sync = realpathSync;
      realpath.realpathSync = realpathSync;
      realpath.monkeypatch = monkeypatch;
      realpath.unmonkeypatch = unmonkeypatch;
      var i = r(66);
      var n = i.realpath;
      var a = i.realpathSync;
      var u = process.version;
      var s = /^v[0-5]\./.test(u);
      var o = r(544);
      function newError(e) {
        return (
          e &&
          e.syscall === "realpath" &&
          (e.code === "ELOOP" ||
            e.code === "ENOMEM" ||
            e.code === "ENAMETOOLONG")
        );
      }
      function realpath(e, t, r) {
        if (s) {
          return n(e, t, r);
        }
        if (typeof t === "function") {
          r = t;
          t = null;
        }
        n(e, t, function(i, n) {
          if (newError(i)) {
            o.realpath(e, t, r);
          } else {
            r(i, n);
          }
        });
      }
      function realpathSync(e, t) {
        if (s) {
          return a(e, t);
        }
        try {
          return a(e, t);
        } catch (r) {
          if (newError(r)) {
            return o.realpathSync(e, t);
          } else {
            throw r;
          }
        }
      }
      function monkeypatch() {
        i.realpath = realpath;
        i.realpathSync = realpathSync;
      }
      function unmonkeypatch() {
        i.realpath = n;
        i.realpathSync = a;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      var t = {}.hasOwnProperty;
      e.exports = stringify;
      function stringify(e) {
        if (!e || typeof e !== "object") {
          return "";
        }
        if (t.call(e, "position") || t.call(e, "type")) {
          return position(e.position);
        }
        if (t.call(e, "start") || t.call(e, "end")) {
          return position(e);
        }
        if (t.call(e, "line") || t.call(e, "column")) {
          return point(e);
        }
        return "";
      }
      function point(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return index(e.line) + ":" + index(e.column);
      }
      function position(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return point(e.start) + "-" + point(e.end);
      }
      function index(e) {
        return e && typeof e === "number" ? e : 1;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:fenced-code-flag", fencedCodeFlag);
      var s = a.start;
      var o = a.end;
      var l = /^ {0,3}([~`])\1{2,}/;
      var f = "Invalid code-language flag";
      var c = "Missing code-language flag";
      function fencedCodeFlag(e, t, r) {
        var i = String(t);
        var a = false;
        var h = [];
        if (typeof r === "object" && !("length" in r)) {
          a = Boolean(r.allowEmpty);
          r = r.flags;
        }
        if (typeof r === "object" && "length" in r) {
          h = String(r).split(",");
        }
        n(e, "code", visitor);
        function visitor(e) {
          var r;
          if (!u(e)) {
            if (e.lang) {
              if (h.length !== 0 && h.indexOf(e.lang) === -1) {
                t.message(f, e);
              }
            } else {
              r = i.slice(s(e).offset, o(e).offset);
              if (!a && l.test(r)) {
                t.message(c, e);
              }
            }
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = alphabetical;
      function alphabetical(e) {
        var t = typeof e === "string" ? e.charCodeAt(0) : e;
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
    },
    function(e) {
      "use strict";
      e.exports = locate;
      var t = ["https://", "http://", "mailto:"];
      function locate(e, r) {
        var i = t.length;
        var n = -1;
        var a = -1;
        var u;
        if (!this.options.gfm) {
          return -1;
        }
        while (++n < i) {
          u = e.indexOf(t[n], r);
          if (u !== -1 && (u < a || a === -1)) {
            a = u;
          }
        }
        return a;
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(123);
      var n = r(594);
      var a = r(80);
      var u = r(293);
      var s = r(673);
      var o = r(104);
      var l = r(653);
      var f = r(586);
      var c = r(637);
      var h = r(92);
      e.exports = i()
        .use(
          chunk(
            i()
              .use(n)
              .use(a)
              .use(u)
              .use(s)
          )
        )
        .use(chunk(i().use(o)))
        .use(
          chunk(
            i()
              .use(l)
              .use(f)
              .use(c)
              .use(h)
          )
        );
      function chunk(e) {
        return run;
        function run(t, r, i, n) {
          e.run(t, r, i, one);
          function one(e) {
            var t = r.messages;
            var i;
            if (e) {
              i = t.indexOf(e);
              if (i === -1) {
                e = r.message(e);
                i = t.length - 1;
              }
              t[i].fatal = true;
            }
            n();
          }
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = function(e, t, r) {
        var i = [];
        var n = e.length;
        if (0 === n) return i;
        var a = t < 0 ? Math.max(0, t + n) : t || 0;
        if (r !== undefined) {
          n = r < 0 ? r + n : r;
        }
        while (n-- > a) {
          i[n - a] = e[n];
        }
        return i;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      var n = Object.prototype.hasOwnProperty;
      var a = Object.prototype.toString;
      function resolveYamlOmap(e) {
        if (e === null) return true;
        var t = [],
          r,
          i,
          u,
          s,
          o,
          l = e;
        for (r = 0, i = l.length; r < i; r += 1) {
          u = l[r];
          o = false;
          if (a.call(u) !== "[object Object]") return false;
          for (s in u) {
            if (n.call(u, s)) {
              if (!o) o = true;
              else return false;
            }
          }
          if (!o) return false;
          if (t.indexOf(s) === -1) t.push(s);
          else return false;
        }
        return true;
      }
      function constructYamlOmap(e) {
        return e !== null ? e : [];
      }
      e.exports = new i("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: resolveYamlOmap,
        construct: constructYamlOmap
      });
    },
    function(e) {
      "use strict";
      e.exports = factory;
      function factory(e) {
        return tokenize;
        function tokenize(t, r) {
          var i = this;
          var n = i.offset;
          var a = [];
          var u = i[e + "Methods"];
          var s = i[e + "Tokenizers"];
          var o = r.line;
          var l = r.column;
          var f;
          var c;
          var h;
          var p;
          var v;
          var d;
          if (!t) {
            return a;
          }
          eat.now = now;
          eat.file = i.file;
          updatePosition("");
          while (t) {
            f = -1;
            c = u.length;
            v = false;
            while (++f < c) {
              p = u[f];
              h = s[p];
              if (
                h &&
                (!h.onlyAtStart || i.atStart) &&
                (!h.notInList || !i.inList) &&
                (!h.notInBlock || !i.inBlock) &&
                (!h.notInLink || !i.inLink)
              ) {
                d = t.length;
                h.apply(i, [eat, t]);
                v = d !== t.length;
                if (v) {
                  break;
                }
              }
            }
            if (!v) {
              i.file.fail(new Error("Infinite loop"), eat.now());
            }
          }
          i.eof = now();
          return a;
          function updatePosition(e) {
            var t = -1;
            var r = e.indexOf("\n");
            while (r !== -1) {
              o++;
              t = r;
              r = e.indexOf("\n", r + 1);
            }
            if (t === -1) {
              l += e.length;
            } else {
              l = e.length - t;
            }
            if (o in n) {
              if (t !== -1) {
                l += n[o];
              } else if (l <= n[o]) {
                l = n[o] + 1;
              }
            }
          }
          function getOffset() {
            var e = [];
            var t = o + 1;
            return function() {
              var r = o + 1;
              while (t < r) {
                e.push((n[t] || 0) + 1);
                t++;
              }
              return e;
            };
          }
          function now() {
            var e = { line: o, column: l };
            e.offset = i.toOffset(e);
            return e;
          }
          function Position(e) {
            this.start = e;
            this.end = now();
          }
          function validateEat(e) {
            if (t.substring(0, e.length) !== e) {
              i.file.fail(
                new Error(
                  "Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"
                ),
                now()
              );
            }
          }
          function position() {
            var e = now();
            return update;
            function update(t, r) {
              var i = t.position;
              var a = i ? i.start : e;
              var u = [];
              var s = i && i.end.line;
              var o = e.line;
              t.position = new Position(a);
              if (i && r && i.indent) {
                u = i.indent;
                if (s < o) {
                  while (++s < o) {
                    u.push((n[s] || 0) + 1);
                  }
                  u.push(e.column);
                }
                r = u.concat(r);
              }
              t.position.indent = r || [];
              return t;
            }
          }
          function add(e, t) {
            var r = t ? t.children : a;
            var n = r[r.length - 1];
            var u;
            if (
              n &&
              e.type === n.type &&
              (e.type === "text" || e.type === "blockquote") &&
              mergeable(n) &&
              mergeable(e)
            ) {
              u = e.type === "text" ? mergeText : mergeBlockquote;
              e = u.call(i, n, e);
            }
            if (e !== n) {
              r.push(e);
            }
            if (i.atStart && a.length !== 0) {
              i.exitStart();
            }
            return e;
          }
          function eat(e) {
            var r = getOffset();
            var i = position();
            var n = now();
            validateEat(e);
            apply.reset = reset;
            reset.test = test;
            apply.test = test;
            t = t.substring(e.length);
            updatePosition(e);
            r = r();
            return apply;
            function apply(e, t) {
              return i(add(i(e), t), r);
            }
            function reset() {
              var r = apply.apply(null, arguments);
              o = n.line;
              l = n.column;
              t = e + t;
              return r;
            }
            function test() {
              var r = i({});
              o = n.line;
              l = n.column;
              t = e + t;
              return r.position;
            }
          }
        }
      }
      function mergeable(e) {
        var t;
        var r;
        if (e.type !== "text" || !e.position) {
          return true;
        }
        t = e.position.start;
        r = e.position.end;
        return t.line !== r.line || r.column - t.column === e.value.length;
      }
      function mergeText(e, t) {
        e.value += t.value;
        return e;
      }
      function mergeBlockquote(e, t) {
        if (this.options.commonmark) {
          return t;
        }
        e.children = e.children.concat(t.children);
        return e;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(597);
      var a = r(589);
      var u = r(432);
      var s = (t.parse = function(e) {
        if (/^\s*{/.test(e)) return JSON.parse(u(e));
        return n.parse(e);
      });
      var o = (t.file = function() {
        var e = [].slice.call(arguments).filter(function(e) {
          return e != null;
        });
        for (var t in e) if ("string" !== typeof e[t]) return;
        var r = a.join.apply(null, e);
        var n;
        try {
          return i.readFileSync(r, "utf-8");
        } catch (e) {
          return;
        }
      });
      var l = (t.json = function() {
        var e = o.apply(null, arguments);
        return e ? s(e) : null;
      });
      var f = (t.env = function(e, t) {
        t = t || process.env;
        var r = {};
        var i = e.length;
        for (var n in t) {
          if (n.toLowerCase().indexOf(e.toLowerCase()) === 0) {
            var a = n.substring(i).split("__");
            var u;
            while ((u = a.indexOf("")) > -1) {
              a.splice(u, 1);
            }
            var s = r;
            a.forEach(function _buildSubObj(e, r) {
              if (!e || typeof s !== "object") return;
              if (r === a.length - 1) s[e] = t[n];
              if (s[e] === undefined) s[e] = {};
              s = s[e];
            });
          }
        }
        return r;
      });
      var c = (t.find = function() {
        var e = a.join.apply(null, [].slice.call(arguments));
        function find(e, t) {
          var r = a.join(e, t);
          try {
            i.statSync(r);
            return r;
          } catch (r) {
            if (a.dirname(e) !== e) return find(a.dirname(e), t);
          }
        }
        return find(process.cwd(), e);
      });
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      const i = r(202);
      const n = r(751);
      const a = i("JSONError", { fileName: i.append("in %s") });
      e.exports = (e, t, r) => {
        if (typeof t === "string") {
          r = t;
          t = null;
        }
        try {
          try {
            return JSON.parse(e, t);
          } catch (r) {
            n(e, t);
            throw r;
          }
        } catch (e) {
          e.message = e.message.replace(/\n/g, "");
          const t = new a(e);
          if (r) {
            t.fileName = r;
          }
          throw t;
        }
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:maximum-line-length", maximumLineLength);
      var s = a.start;
      var o = a.end;
      function maximumLineLength(e, t, r) {
        var i = typeof r === "number" && !isNaN(r) ? r : 80;
        var a = String(t);
        var l = a.split(/\r?\n/);
        var f = l.length;
        var c = -1;
        var h;
        n(e, ["heading", "table", "code", "definition", "html", "jsx"], ignore);
        n(e, ["link", "image", "inlineCode"], inline);
        while (++c < f) {
          h = l[c].length;
          if (h > i) {
            t.message("Line must be at most " + i + " characters", {
              line: c + 1,
              column: h + 1
            });
          }
        }
        function inline(e, t, r) {
          var n = r.children[t + 1];
          var a;
          var l;
          if (u(e)) {
            return;
          }
          a = s(e);
          l = o(e);
          if (a.column > i || l.column < i) {
            return;
          }
          if (
            n &&
            s(n).line === a.line &&
            (!n.value || /^(.+?[ \t].+?)/.test(n.value))
          ) {
            return;
          }
          whitelist(a.line - 1, l.line);
        }
        function ignore(e) {
          if (!u(e)) {
            whitelist(s(e).line - 1, o(e).line);
          }
        }
        function whitelist(e, t) {
          while (e < t) {
            l[e++] = "";
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(704);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      var o = r(10);
      e.exports = i(
        "remark-lint:blockquote-indentation",
        blockquoteIndentation
      );
      function blockquoteIndentation(e, t, r) {
        r = typeof r === "number" && !isNaN(r) ? r : null;
        a(e, "blockquote", visitor);
        function visitor(e) {
          var i;
          var a;
          if (s(e) || e.children.length === 0) {
            return;
          }
          if (r) {
            i = r - check(e);
            if (i !== 0) {
              a =
                (i > 0 ? "Add" : "Remove") +
                " " +
                Math.abs(i) +
                " " +
                n("space", i) +
                " between blockquote and content";
              t.message(a, u.start(e.children[0]));
            }
          } else {
            r = check(e);
          }
        }
      }
      function check(e) {
        var t = e.children[0];
        var r = u.start(t).column - u.start(e).column;
        var i = o(t).match(/^ +/);
        if (i) {
          r += i[0].length;
        }
        return r;
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = whitespace;
      var t = String.fromCharCode;
      var r = /\s/;
      function whitespace(e) {
        return r.test(typeof e === "number" ? t(e) : e.charAt(0));
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(814);
      var n = "\n";
      var a = " ";
      var u = ":";
      var s = "[";
      var o = "]";
      var l = "^";
      var f = 4;
      var c = n + n;
      var h = i(a, f);
      e.exports = footnoteDefinition;
      function footnoteDefinition(e) {
        var t = this.all(e).join(c + h);
        return s + l + (e.label || e.identifier) + o + u + a + t;
      }
    },
    function(e) {
      "use strict";
      e.exports = collapse;
      function collapse(e) {
        return String(e).replace(/\s+/g, " ");
      }
    },
    function(e) {
      "use strict";
      e.exports = label;
      var t = "[";
      var r = "]";
      var i = "shortcut";
      var n = "collapsed";
      function label(e) {
        var a = e.referenceType;
        if (a === i) {
          return "";
        }
        return t + (a === n ? "" : e.label || e.identifier) + r;
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(814);
      var n = r(705);
      e.exports = listItem;
      var a = "\n";
      var u = " ";
      var s = "[";
      var o = "]";
      var l = "x";
      var f = Math.ceil;
      var c = a + a;
      var h = 4;
      function listItem(e, t, r, p) {
        var v = this;
        var d = v.options.listItemIndent;
        var D = p || v.options.bullet;
        var m = e.spread == null ? true : e.spread;
        var g = e.checked;
        var E = e.children;
        var A = E.length;
        var C = [];
        var y = -1;
        var w;
        var x;
        var b;
        while (++y < A) {
          C[y] = v.visit(E[y], e);
        }
        w = C.join(m ? c : a);
        if (typeof g === "boolean") {
          w = s + (g ? l : u) + o + u + w;
        }
        if (d === "1" || (d === "mixed" && w.indexOf(a) === -1)) {
          x = D.length + 1;
          b = u;
        } else {
          x = f((D.length + 1) / h) * h;
          b = i(u, x - D.length);
        }
        return w ? D + b + n(w, x / h).slice(x) : D;
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      var t = {}.hasOwnProperty;
      e.exports = stringify;
      function stringify(e) {
        if (!e || typeof e !== "object") {
          return null;
        }
        if (t.call(e, "position") || t.call(e, "type")) {
          return position(e.position);
        }
        if (t.call(e, "start") || t.call(e, "end")) {
          return position(e);
        }
        if (t.call(e, "line") || t.call(e, "column")) {
          return point(e);
        }
        return null;
      }
      function point(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return index(e.line) + ":" + index(e.column);
      }
      function position(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return point(e.start) + "-" + point(e.end);
      }
      function index(e) {
        return e && typeof e === "number" ? e : 1;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(902);
      var n = r(171);
      var a = r(139);
      e.exports = url;
      url.locator = a;
      url.notInLink = true;
      var u = '"';
      var s = "'";
      var o = "(";
      var l = ")";
      var f = ",";
      var c = ".";
      var h = ":";
      var p = ";";
      var v = "<";
      var d = "@";
      var D = "[";
      var m = "]";
      var g = "http://";
      var E = "https://";
      var A = "mailto:";
      var C = [g, E, A];
      var y = C.length;
      function url(e, t, r) {
        var a = this;
        var g;
        var E;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        if (!a.options.gfm) {
          return;
        }
        g = "";
        x = -1;
        while (++x < y) {
          F = C[x];
          S = t.slice(0, F.length);
          if (S.toLowerCase() === F) {
            g = S;
            break;
          }
        }
        if (!g) {
          return;
        }
        x = g.length;
        B = t.length;
        k = "";
        O = 0;
        while (x < B) {
          w = t.charAt(x);
          if (n(w) || w === v) {
            break;
          }
          if (
            w === c ||
            w === f ||
            w === h ||
            w === p ||
            w === u ||
            w === s ||
            w === l ||
            w === m
          ) {
            P = t.charAt(x + 1);
            if (!P || n(P)) {
              break;
            }
          }
          if (w === o || w === D) {
            O++;
          }
          if (w === l || w === m) {
            O--;
            if (O < 0) {
              break;
            }
          }
          k += w;
          x++;
        }
        if (!k) {
          return;
        }
        g += k;
        E = g;
        if (F === A) {
          b = k.indexOf(d);
          if (b === -1 || b === B - 1) {
            return;
          }
          E = E.substr(A.length);
        }
        if (r) {
          return true;
        }
        I = a.enterLink();
        T = a.inlineTokenizers;
        a.inlineTokenizers = { text: T.text };
        E = a.tokenizeInline(E, e.now());
        a.inlineTokenizers = T;
        I();
        return e(g)({
          type: "link",
          title: null,
          url: i(g, { nonTerminated: false }),
          children: E
        });
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(897);
      var n = r(336);
      var a = r(444);
      e.exports = stringify;
      stringify.Compiler = a;
      function stringify(e) {
        var t = i(a);
        t.prototype.options = n(t.prototype.options, this.data("settings"), e);
        this.Compiler = t;
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      e.exports = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Acirc: "Â",
        Agrave: "À",
        Aring: "Å",
        Atilde: "Ã",
        Auml: "Ä",
        COPY: "©",
        Ccedil: "Ç",
        ETH: "Ð",
        Eacute: "É",
        Ecirc: "Ê",
        Egrave: "È",
        Euml: "Ë",
        GT: ">",
        Iacute: "Í",
        Icirc: "Î",
        Igrave: "Ì",
        Iuml: "Ï",
        LT: "<",
        Ntilde: "Ñ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ograve: "Ò",
        Oslash: "Ø",
        Otilde: "Õ",
        Ouml: "Ö",
        QUOT: '"',
        REG: "®",
        THORN: "Þ",
        Uacute: "Ú",
        Ucirc: "Û",
        Ugrave: "Ù",
        Uuml: "Ü",
        Yacute: "Ý",
        aacute: "á",
        acirc: "â",
        acute: "´",
        aelig: "æ",
        agrave: "à",
        amp: "&",
        aring: "å",
        atilde: "ã",
        auml: "ä",
        brvbar: "¦",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        ecirc: "ê",
        egrave: "è",
        eth: "ð",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        iacute: "í",
        icirc: "î",
        iexcl: "¡",
        igrave: "ì",
        iquest: "¿",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        oacute: "ó",
        ocirc: "ô",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        otilde: "õ",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        raquo: "»",
        reg: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        times: "×",
        uacute: "ú",
        ucirc: "û",
        ugrave: "ù",
        uml: "¨",
        uuml: "ü",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ"
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(64);
      var n = r(753);
      var a = function errorEx(e, t) {
        if (!e || e.constructor !== String) {
          t = e || {};
          e = Error.name;
        }
        var r = function ErrorEXError(i) {
          if (!this) {
            return new ErrorEXError(i);
          }
          i = i instanceof Error ? i.message : i || this.message;
          Error.call(this, i);
          Error.captureStackTrace(this, r);
          this.name = e;
          Object.defineProperty(this, "message", {
            configurable: true,
            enumerable: false,
            get: function() {
              var e = i.split(/\r?\n/g);
              for (var r in t) {
                if (!t.hasOwnProperty(r)) {
                  continue;
                }
                var a = t[r];
                if ("message" in a) {
                  e = a.message(this[r], e) || e;
                  if (!n(e)) {
                    e = [e];
                  }
                }
              }
              return e.join("\n");
            },
            set: function(e) {
              i = e;
            }
          });
          var a = null;
          var u = Object.getOwnPropertyDescriptor(this, "stack");
          var s = u.get;
          var o = u.value;
          delete u.value;
          delete u.writable;
          u.set = function(e) {
            a = e;
          };
          u.get = function() {
            var e = (a || (s ? s.call(this) : o)).split(/\r?\n+/g);
            if (!a) {
              e[0] = this.name + ": " + this.message;
            }
            var r = 1;
            for (var i in t) {
              if (!t.hasOwnProperty(i)) {
                continue;
              }
              var n = t[i];
              if ("line" in n) {
                var u = n.line(this[i]);
                if (u) {
                  e.splice(r++, 0, "    " + u);
                }
              }
              if ("stack" in n) {
                n.stack(this[i], e);
              }
            }
            return e.join("\n");
          };
          Object.defineProperty(this, "stack", u);
        };
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(r.prototype, Error.prototype);
          Object.setPrototypeOf(r, Error);
        } else {
          i.inherits(r, Error);
        }
        return r;
      };
      a.append = function(e, t) {
        return {
          message: function(r, i) {
            r = r || t;
            if (r) {
              i[0] += " " + e.replace("%s", r.toString());
            }
            return i;
          }
        };
      };
      a.line = function(e, t) {
        return {
          line: function(r) {
            r = r || t;
            if (r) {
              return e.replace("%s", r.toString());
            }
            return null;
          }
        };
      };
      e.exports = a;
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      e.exports = new i("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(e) {
          return e !== null ? e : [];
        }
      });
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(589);
      function replaceExt(e, t) {
        if (typeof e !== "string") {
          return e;
        }
        if (e.length === 0) {
          return e;
        }
        var r = i.basename(e, i.extname(e)) + t;
        return i.join(i.dirname(e), r);
      }
      e.exports = replaceExt;
    },
    function(e, t, r) {
      "use strict";
      var i = r(833);
      var n = [
        "kind",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "defaultStyle",
        "styleAliases"
      ];
      var a = ["scalar", "sequence", "mapping"];
      function compileStyleAliases(e) {
        var t = {};
        if (e !== null) {
          Object.keys(e).forEach(function(r) {
            e[r].forEach(function(e) {
              t[String(e)] = r;
            });
          });
        }
        return t;
      }
      function Type(e, t) {
        t = t || {};
        Object.keys(t).forEach(function(t) {
          if (n.indexOf(t) === -1) {
            throw new i(
              'Unknown option "' +
                t +
                '" is met in definition of "' +
                e +
                '" YAML type.'
            );
          }
        });
        this.tag = e;
        this.kind = t["kind"] || null;
        this.resolve =
          t["resolve"] ||
          function() {
            return true;
          };
        this.construct =
          t["construct"] ||
          function(e) {
            return e;
          };
        this.instanceOf = t["instanceOf"] || null;
        this.predicate = t["predicate"] || null;
        this.represent = t["represent"] || null;
        this.defaultStyle = t["defaultStyle"] || null;
        this.styleAliases = compileStyleAliases(t["styleAliases"] || null);
        if (a.indexOf(this.kind) === -1) {
          throw new i(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              e +
              '" YAML type.'
          );
        }
      }
      e.exports = Type;
    },
    function(e, t, r) {
      "use strict";
      var i = r(876);
      var n = true;
      try {
        n = "inspect" in r(64);
      } catch (e) {
        n = false;
      }
      e.exports = n ? inspect : noColor;
      inspect.color = inspect;
      noColor.color = inspect;
      inspect.noColor = noColor;
      noColor.noColor = noColor;
      var a = ansiColor(2, 22);
      var u = ansiColor(33, 39);
      var s = ansiColor(32, 39);
      var o = new RegExp(
        "(?:" +
          "(?:\\u001b\\[)|" +
          "\\u009b" +
          ")" +
          "(?:" +
          "(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m]" +
          ")|" +
          "\\u001b[A-M]",
        "g"
      );
      var l = ["type", "value", "children", "position"];
      function noColor(e, t) {
        return stripColor(inspect(e, t));
      }
      function inspect(e, t) {
        var r;
        var i;
        var n;
        var a;
        if (e && Boolean(e.length) && typeof e !== "string") {
          a = e.length;
          n = -1;
          r = [];
          while (++n < a) {
            r[n] = inspect(e[n]);
          }
          return r.join("\n");
        }
        if (!e || !e.type) {
          return String(e);
        }
        r = [formatNode(e)];
        i = e.children;
        a = i && i.length;
        n = -1;
        if (!a) {
          return r[0];
        }
        if (!t || typeof t === "number") {
          t = "";
        }
        while (++n < a) {
          e = i[n];
          if (n === a - 1) {
            r.push(formatNesting(t + "└─ ") + inspect(e, t + "   "));
          } else {
            r.push(formatNesting(t + "├─ ") + inspect(e, t + "│  "));
          }
        }
        return r.join("\n");
      }
      function formatNesting(e) {
        return a(e);
      }
      function compile(e) {
        var t = [];
        if (!e) {
          return null;
        }
        t = [[e.line || 1, e.column || 1].join(":")];
        if ("offset" in e) {
          t.push(String(e.offset || 0));
        }
        return t;
      }
      function stringify(e, t) {
        var r = [];
        var i = [];
        var n = [];
        add(e);
        add(t);
        if (i.length !== 0) {
          r.push(i.join("-"));
        }
        if (n.length !== 0) {
          r.push(n.join("-"));
        }
        return r.join(", ");
        function add(e) {
          var t = compile(e);
          if (t) {
            i.push(t[0]);
            if (t[1]) {
              n.push(t[1]);
            }
          }
        }
      }
      function formatNode(e) {
        var t = e.type;
        var r = e.position || {};
        var n = stringify(r.start, r.end);
        var o;
        var f = [];
        var c;
        if (e.children) {
          t += a("[") + u(e.children.length) + a("]");
        } else if (typeof e.value === "string") {
          t += a(": ") + s(JSON.stringify(e.value));
        }
        if (n) {
          t += " (" + n + ")";
        }
        for (o in e) {
          c = e[o];
          if (
            l.indexOf(o) !== -1 ||
            c === null ||
            c === undefined ||
            (typeof c === "object" && i(c))
          ) {
            continue;
          }
          f.push("[" + o + "=" + JSON.stringify(c) + "]");
        }
        if (f.length !== 0) {
          t += " " + f.join("");
        }
        return t;
      }
      function stripColor(e) {
        return e.replace(o, "");
      }
      function ansiColor(e, t) {
        return color;
        function color(r) {
          return "[" + e + "m" + r + "[" + t + "m";
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(587).openCloseTag;
      e.exports = blockHtml;
      var n = "\t";
      var a = " ";
      var u = "\n";
      var s = "<";
      var o = /^<(script|pre|style)(?=(\s|>|$))/i;
      var l = /<\/(script|pre|style)>/i;
      var f = /^<!--/;
      var c = /-->/;
      var h = /^<\?/;
      var p = /\?>/;
      var v = /^<![A-Za-z]/;
      var d = />/;
      var D = /^<!\[CDATA\[/;
      var m = /\]\]>/;
      var g = /^$/;
      var E = new RegExp(i.source + "\\s*$");
      function blockHtml(e, t, r) {
        var i = this;
        var A = i.options.blocks.join("|");
        var C = new RegExp("^</?(" + A + ")(?=(\\s|/?>|$))", "i");
        var y = t.length;
        var w = 0;
        var x;
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P = [
          [o, l, true],
          [f, c, true],
          [h, p, true],
          [v, d, true],
          [D, m, true],
          [C, g, true],
          [E, g, false]
        ];
        while (w < y) {
          S = t.charAt(w);
          if (S !== n && S !== a) {
            break;
          }
          w++;
        }
        if (t.charAt(w) !== s) {
          return;
        }
        x = t.indexOf(u, w + 1);
        x = x === -1 ? y : x;
        b = t.slice(w, x);
        F = -1;
        B = P.length;
        while (++F < B) {
          if (P[F][0].test(b)) {
            k = P[F];
            break;
          }
        }
        if (!k) {
          return;
        }
        if (r) {
          return k[2];
        }
        w = x;
        if (!k[1].test(b)) {
          while (w < y) {
            x = t.indexOf(u, w + 1);
            x = x === -1 ? y : x;
            b = t.slice(w + 1, x);
            if (k[1].test(b)) {
              if (b) {
                w = x;
              }
              break;
            }
            w = x;
          }
        }
        O = t.slice(0, w);
        return e(O)({ type: "html", value: O });
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      var s = r(10);
      e.exports = i(
        "remark-lint:no-auto-link-without-protocol",
        noAutoLinkWithoutProtocol
      );
      var o = a.start;
      var l = a.end;
      var f = /^[a-z][a-z+.-]+:\/?/i;
      var c = "All automatic links must start with a protocol";
      function noAutoLinkWithoutProtocol(e, t) {
        n(e, "link", visitor);
        function visitor(e) {
          var r;
          if (!u(e)) {
            r = e.children;
            if (
              o(e).column === o(r[0]).column - 1 &&
              l(e).column === l(r[r.length - 1]).column + 1 &&
              !f.test(s(e))
            ) {
              t.message(c, e);
            }
          }
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(2);
      e.exports = inlineCode;
      inlineCode.locator = n;
      var a = "`";
      function inlineCode(e, t, r) {
        var n = t.length;
        var u = 0;
        var s = "";
        var o = "";
        var l;
        var f;
        var c;
        var h;
        var p;
        var v;
        var d;
        var D;
        while (u < n) {
          if (t.charAt(u) !== a) {
            break;
          }
          s += a;
          u++;
        }
        if (!s) {
          return;
        }
        p = s;
        h = u;
        s = "";
        D = t.charAt(u);
        c = 0;
        while (u < n) {
          v = D;
          D = t.charAt(u + 1);
          if (v === a) {
            c++;
            o += v;
          } else {
            c = 0;
            s += v;
          }
          if (c && D !== a) {
            if (c === h) {
              p += s + o;
              d = true;
              break;
            }
            s += o;
            o = "";
          }
          u++;
        }
        if (!d) {
          if (h % 2 !== 0) {
            return;
          }
          s = "";
        }
        if (r) {
          return true;
        }
        l = "";
        f = "";
        n = s.length;
        u = -1;
        while (++u < n) {
          v = s.charAt(u);
          if (i(v)) {
            f += v;
            continue;
          }
          if (f) {
            if (l) {
              l += f;
            }
            f = "";
          }
          l += v;
        }
        return e(p)({ type: "inlineCode", value: l });
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(727);
      e.exports = new i({ explicit: [r(338), r(207), r(237)] });
    },
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(814);
      var a = r(1);
      e.exports = indentation;
      var u = "\t";
      var s = "\n";
      var o = " ";
      var l = "!";
      function indentation(e, t) {
        var r = e.split(s);
        var f = r.length + 1;
        var c = Infinity;
        var h = [];
        var p;
        var v;
        var d;
        var D;
        r.unshift(n(o, t) + l);
        while (f--) {
          v = a(r[f]);
          h[f] = v.stops;
          if (i(r[f]).length === 0) {
            continue;
          }
          if (v.indent) {
            if (v.indent > 0 && v.indent < c) {
              c = v.indent;
            }
          } else {
            c = Infinity;
            break;
          }
        }
        if (c !== Infinity) {
          f = r.length;
          while (f--) {
            d = h[f];
            p = c;
            while (p && !(p in d)) {
              p--;
            }
            if (i(r[f]).length !== 0 && c && p !== c) {
              D = u;
            } else {
              D = "";
            }
            r[f] = D + r[f].slice(p in d ? d[p] + 1 : 0);
          }
        }
        r.shift();
        return r.join(s);
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      e.exports = new i("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(e) {
          return e !== null ? e : {};
        }
      });
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(688).PassThrough;
      var n = r(928);
      var a = r(848);
      e.exports = run;
      function run(e, t) {
        var r = {};
        var u = new i();
        var s;
        var o;
        var l;
        var f;
        var c;
        try {
          u = process.stdin;
        } catch (e) {}
        if (!t) {
          throw new Error("Missing `callback`");
        }
        if (!e || !e.processor) {
          return next(new Error("Missing `processor`"));
        }
        r.processor = e.processor;
        r.cwd = e.cwd || process.cwd();
        r.files = e.files || [];
        r.extensions = (e.extensions || []).map(extension);
        r.filePath = e.filePath || null;
        r.streamIn = e.streamIn || u;
        r.streamOut = e.streamOut || process.stdout;
        r.streamError = e.streamError || process.stderr;
        r.alwaysStringify = e.alwaysStringify;
        r.output = e.output;
        r.out = e.out;
        if (r.output === null || r.output === undefined) {
          r.output = undefined;
        }
        if (r.output && r.out) {
          return next(new Error("Cannot accept both `output` and `out`"));
        }
        s = e.tree || false;
        r.treeIn = e.treeIn;
        r.treeOut = e.treeOut;
        r.inspect = e.inspect;
        if (r.treeIn === null || r.treeIn === undefined) {
          r.treeIn = s;
        }
        if (r.treeOut === null || r.treeOut === undefined) {
          r.treeOut = s;
        }
        o = e.detectConfig;
        l = Boolean(e.rcName || e.packageField);
        if (o && !l) {
          return next(
            new Error("Missing `rcName` or `packageField` with `detectConfig`")
          );
        }
        r.detectConfig = o === null || o === undefined ? l : o;
        r.rcName = e.rcName || null;
        r.rcPath = e.rcPath || null;
        r.packageField = e.packageField || null;
        r.settings = e.settings || {};
        r.configTransform = e.configTransform;
        r.defaultConfig = e.defaultConfig;
        f = e.detectIgnore;
        c = Boolean(e.ignoreName);
        r.detectIgnore = f === null || f === undefined ? c : f;
        r.ignoreName = e.ignoreName || null;
        r.ignorePath = e.ignorePath || null;
        r.silentlyIgnore = Boolean(e.silentlyIgnore);
        if (f && !c) {
          return next(new Error("Missing `ignoreName` with `detectIgnore`"));
        }
        r.pluginPrefix = e.pluginPrefix || null;
        r.plugins = e.plugins || {};
        r.reporter = e.reporter || null;
        r.reporterOptions = e.reporterOptions || null;
        r.color = e.color || false;
        r.silent = e.silent || false;
        r.quiet = e.quiet || false;
        r.frail = e.frail || false;
        a.run({ files: e.files || [] }, r, next);
        function next(e, i) {
          var a = n((i || {}).files);
          var u = Boolean(r.frail ? a.fatal || a.warn : a.fatal);
          if (e) {
            t(e);
          } else {
            t(null, u ? 1 : 0, i);
          }
        }
      }
      function extension(e) {
        return e.charAt(0) === "." ? e : "." + e;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(724);
      e.exports = blockquote;
      var a = "\n";
      var u = "\t";
      var s = " ";
      var o = ">";
      function blockquote(e, t, r) {
        var l = this;
        var f = l.offset;
        var c = l.blockTokenizers;
        var h = l.interruptBlockquote;
        var p = e.now();
        var v = p.line;
        var d = t.length;
        var D = [];
        var m = [];
        var g = [];
        var E;
        var A = 0;
        var C;
        var y;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        while (A < d) {
          C = t.charAt(A);
          if (C !== s && C !== u) {
            break;
          }
          A++;
        }
        if (t.charAt(A) !== o) {
          return;
        }
        if (r) {
          return true;
        }
        A = 0;
        while (A < d) {
          w = t.indexOf(a, A);
          F = A;
          S = false;
          if (w === -1) {
            w = d;
          }
          while (A < d) {
            C = t.charAt(A);
            if (C !== s && C !== u) {
              break;
            }
            A++;
          }
          if (t.charAt(A) === o) {
            A++;
            S = true;
            if (t.charAt(A) === s) {
              A++;
            }
          } else {
            A = F;
          }
          x = t.slice(A, w);
          if (!S && !i(x)) {
            A = F;
            break;
          }
          if (!S) {
            y = t.slice(A);
            if (n(h, c, l, [e, y, true])) {
              break;
            }
          }
          b = F === A ? x : t.slice(F, w);
          g.push(A - F);
          D.push(b);
          m.push(x);
          A = w + 1;
        }
        A = -1;
        d = g.length;
        E = e(D.join(a));
        while (++A < d) {
          f[v] = (f[v] || 0) + g[A];
          v++;
        }
        B = l.enterBlock();
        m = l.tokenizeBlock(m.join(a), p);
        B();
        return E({ type: "blockquote", children: m });
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      function isNothing(e) {
        return typeof e === "undefined" || e === null;
      }
      function isObject(e) {
        return typeof e === "object" && e !== null;
      }
      function toArray(e) {
        if (Array.isArray(e)) return e;
        else if (isNothing(e)) return [];
        return [e];
      }
      function extend(e, t) {
        var r, i, n, a;
        if (t) {
          a = Object.keys(t);
          for (r = 0, i = a.length; r < i; r += 1) {
            n = a[r];
            e[n] = t[n];
          }
        }
        return e;
      }
      function repeat(e, t) {
        var r = "",
          i;
        for (i = 0; i < t; i += 1) {
          r += e;
        }
        return r;
      }
      function isNegativeZero(e) {
        return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
      }
      e.exports.isNothing = isNothing;
      e.exports.isObject = isObject;
      e.exports.toArray = toArray;
      e.exports.repeat = repeat;
      e.exports.isNegativeZero = isNegativeZero;
      e.exports.extend = extend;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(814);
      e.exports = heading;
      var n = "\n";
      var a = " ";
      var u = "#";
      var s = "-";
      var o = "=";
      function heading(e) {
        var t = this;
        var r = e.depth;
        var l = t.options.setext;
        var f = t.options.closeAtx;
        var c = t.all(e).join("");
        var h;
        if (l && r < 3) {
          return c + n + i(r === 1 ? o : s, c.length);
        }
        h = i(u, e.depth);
        return h + a + c + (f ? a + h : "");
      }
    },
    function(e) {
      "use strict";
      e.exports = style;
      function style(e, t) {
        var r = e.children[e.children.length - 1];
        var i = e.depth;
        var n = e && e.position && e.position.end;
        var a = r && r.position && r.position.end;
        if (!n) {
          return null;
        }
        if (!r) {
          if (n.column - 1 <= i * 2) {
            return consolidate(i, t);
          }
          return "atx-closed";
        }
        if (a.line + 1 === n.line) {
          return "setext";
        }
        if (a.column + i < n.column) {
          return "atx-closed";
        }
        return consolidate(i, t);
      }
      function consolidate(e, t) {
        return e < 3 ? "atx" : t === "atx" || t === "setext" ? t : null;
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839).start;
      var u = r(526);
      var s = r(276);
      e.exports = i(
        "remark-lint:no-multiple-toplevel-headings",
        noMultipleToplevelHeadings
      );
      function noMultipleToplevelHeadings(e, t, r) {
        var i = r ? r : 1;
        var o;
        n(e, "heading", visitor);
        function visitor(e) {
          if (!u(e) && e.depth === i) {
            if (o) {
              t.message("Don’t use multiple top level headings (" + o + ")", e);
            } else {
              o = s(a(e));
            }
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(318);
      e.exports = compile;
      function compile() {
        return this.visit(i(this.tree, this.options.commonmark));
      }
    },
    ,
    function(e) {
      "use strict";
      var t = {}.hasOwnProperty;
      e.exports = stringify;
      function stringify(e) {
        if (!e || typeof e !== "object") {
          return "";
        }
        if (t.call(e, "position") || t.call(e, "type")) {
          return position(e.position);
        }
        if (t.call(e, "start") || t.call(e, "end")) {
          return position(e);
        }
        if (t.call(e, "line") || t.call(e, "column")) {
          return point(e);
        }
        return "";
      }
      function point(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return index(e.line) + ":" + index(e.column);
      }
      function position(e) {
        if (!e || typeof e !== "object") {
          e = {};
        }
        return point(e.start) + "-" + point(e.end);
      }
      function index(e) {
        return e && typeof e === "number" ? e : 1;
      }
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = atxHeading;
      var t = "\n";
      var r = "\t";
      var i = " ";
      var n = "#";
      var a = 6;
      function atxHeading(e, u, s) {
        var o = this;
        var l = o.options.pedantic;
        var f = u.length + 1;
        var c = -1;
        var h = e.now();
        var p = "";
        var v = "";
        var d;
        var D;
        var m;
        while (++c < f) {
          d = u.charAt(c);
          if (d !== i && d !== r) {
            c--;
            break;
          }
          p += d;
        }
        m = 0;
        while (++c <= f) {
          d = u.charAt(c);
          if (d !== n) {
            c--;
            break;
          }
          p += d;
          m++;
        }
        if (m > a) {
          return;
        }
        if (!m || (!l && u.charAt(c + 1) === n)) {
          return;
        }
        f = u.length + 1;
        D = "";
        while (++c < f) {
          d = u.charAt(c);
          if (d !== i && d !== r) {
            c--;
            break;
          }
          D += d;
        }
        if (!l && D.length === 0 && d && d !== t) {
          return;
        }
        if (s) {
          return true;
        }
        p += D;
        D = "";
        v = "";
        while (++c < f) {
          d = u.charAt(c);
          if (!d || d === t) {
            break;
          }
          if (d !== i && d !== r && d !== n) {
            v += D + d;
            D = "";
            continue;
          }
          while (d === i || d === r) {
            D += d;
            d = u.charAt(++c);
          }
          if (!l && v && !D && d === n) {
            v += d;
            continue;
          }
          while (d === n) {
            D += d;
            d = u.charAt(++c);
          }
          while (d === i || d === r) {
            D += d;
            d = u.charAt(++c);
          }
          c--;
        }
        h.column += p.length;
        h.offset += p.length;
        p += v + D;
        return e(p)({
          type: "heading",
          depth: m,
          children: o.tokenizeInline(v, h)
        });
      }
    },
    ,
    function(e) {
      "use strict";
      function isSpecificValue(e) {
        return e instanceof Buffer || e instanceof Date || e instanceof RegExp
          ? true
          : false;
      }
      function cloneSpecificValue(e) {
        if (e instanceof Buffer) {
          var t = Buffer.alloc ? Buffer.alloc(e.length) : new Buffer(e.length);
          e.copy(t);
          return t;
        } else if (e instanceof Date) {
          return new Date(e.getTime());
        } else if (e instanceof RegExp) {
          return new RegExp(e);
        } else {
          throw new Error("Unexpected situation");
        }
      }
      function deepCloneArray(e) {
        var r = [];
        e.forEach(function(e, i) {
          if (typeof e === "object" && e !== null) {
            if (Array.isArray(e)) {
              r[i] = deepCloneArray(e);
            } else if (isSpecificValue(e)) {
              r[i] = cloneSpecificValue(e);
            } else {
              r[i] = t({}, e);
            }
          } else {
            r[i] = e;
          }
        });
        return r;
      }
      function safeGetProperty(e, t) {
        return t === "__proto__" ? undefined : e[t];
      }
      var t = (e.exports = function() {
        if (arguments.length < 1 || typeof arguments[0] !== "object") {
          return false;
        }
        if (arguments.length < 2) {
          return arguments[0];
        }
        var e = arguments[0];
        var r = Array.prototype.slice.call(arguments, 1);
        var i, n, a;
        r.forEach(function(r) {
          if (typeof r !== "object" || r === null || Array.isArray(r)) {
            return;
          }
          Object.keys(r).forEach(function(a) {
            n = safeGetProperty(e, a);
            i = safeGetProperty(r, a);
            if (i === e) {
              return;
            } else if (typeof i !== "object" || i === null) {
              e[a] = i;
              return;
            } else if (Array.isArray(i)) {
              e[a] = deepCloneArray(i);
              return;
            } else if (isSpecificValue(i)) {
              e[a] = cloneSpecificValue(i);
              return;
            } else if (
              typeof n !== "object" ||
              n === null ||
              Array.isArray(n)
            ) {
              e[a] = t({}, i);
              return;
            } else {
              e[a] = t(n, i);
              return;
            }
          });
        });
        return e;
      });
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(312);
      var n = r(513);
      e.exports = definition;
      var a = " ";
      var u = ":";
      var s = "[";
      var o = "]";
      function definition(e) {
        var t = i(e.url);
        if (e.title) {
          t += a + n(e.title);
        }
        return s + (e.label || e.identifier) + o + u + a + t;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(526);
      e.exports = i("remark-lint:first-heading-level", firstHeadingLevel);
      var u = /<h([1-6])/;
      function firstHeadingLevel(e, t, r) {
        var i = r && r !== true ? r : 1;
        n(e, visitor);
        function visitor(e) {
          var r;
          if (!a(e)) {
            if (e.type === "heading") {
              r = e.depth;
            } else if (e.type === "html") {
              r = infer(e);
            }
            if (r !== undefined) {
              if (r !== i) {
                t.message("First heading level should be `" + i + "`", e);
              }
              return n.EXIT;
            }
          }
        }
      }
      function infer(e) {
        var t = e.value.match(u);
        return t ? Number(t[1]) : undefined;
      }
    },
    function(e, t, r) {
      var i = r(688);
      if (process.env.READABLE_STREAM === "disable" && i) {
        e.exports = i;
        t = e.exports = i.Readable;
        t.Readable = i.Readable;
        t.Writable = i.Writable;
        t.Duplex = i.Duplex;
        t.Transform = i.Transform;
        t.PassThrough = i.PassThrough;
        t.Stream = i;
      } else {
        t = e.exports = r(923);
        t.Stream = i || t;
        t.Readable = t;
        t.Writable = r(574);
        t.Duplex = r(98);
        t.Transform = r(955);
        t.PassThrough = r(502);
      }
    },
    ,
    function(e, t, r) {
      const i = r(604);
      let n;
      let a;
      let u;
      let s;
      let o;
      let l;
      let f;
      let c;
      let h;
      e.exports = function parse(e, t) {
        n = String(e);
        a = "start";
        u = [];
        s = 0;
        o = 1;
        l = 0;
        f = undefined;
        c = undefined;
        h = undefined;
        do {
          f = lex();
          E[a]();
        } while (f.type !== "eof");
        if (typeof t === "function") {
          return internalize({ "": h }, "", t);
        }
        return h;
      };
      function internalize(e, t, r) {
        const i = e[t];
        if (i != null && typeof i === "object") {
          for (const e in i) {
            const t = internalize(i, e, r);
            if (t === undefined) {
              delete i[e];
            } else {
              i[e] = t;
            }
          }
        }
        return r.call(e, t, i);
      }
      let p;
      let v;
      let d;
      let D;
      let m;
      function lex() {
        p = "default";
        v = "";
        d = false;
        D = 1;
        for (;;) {
          m = peek();
          const e = g[p]();
          if (e) {
            return e;
          }
        }
      }
      function peek() {
        if (n[s]) {
          return String.fromCodePoint(n.codePointAt(s));
        }
      }
      function read() {
        const e = peek();
        if (e === "\n") {
          o++;
          l = 0;
        } else if (e) {
          l += e.length;
        } else {
          l++;
        }
        if (e) {
          s += e.length;
        }
        return e;
      }
      const g = {
        default() {
          switch (m) {
            case "\t":
            case "\v":
            case "\f":
            case " ":
            case " ":
            case "\ufeff":
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              read();
              return;
            case "/":
              read();
              p = "comment";
              return;
            case undefined:
              read();
              return newToken("eof");
          }
          if (i.isSpaceSeparator(m)) {
            read();
            return;
          }
          return g[a]();
        },
        comment() {
          switch (m) {
            case "*":
              read();
              p = "multiLineComment";
              return;
            case "/":
              read();
              p = "singleLineComment";
              return;
          }
          throw invalidChar(read());
        },
        multiLineComment() {
          switch (m) {
            case "*":
              read();
              p = "multiLineCommentAsterisk";
              return;
            case undefined:
              throw invalidChar(read());
          }
          read();
        },
        multiLineCommentAsterisk() {
          switch (m) {
            case "*":
              read();
              return;
            case "/":
              read();
              p = "default";
              return;
            case undefined:
              throw invalidChar(read());
          }
          read();
          p = "multiLineComment";
        },
        singleLineComment() {
          switch (m) {
            case "\n":
            case "\r":
            case "\u2028":
            case "\u2029":
              read();
              p = "default";
              return;
            case undefined:
              read();
              return newToken("eof");
          }
          read();
        },
        value() {
          switch (m) {
            case "{":
            case "[":
              return newToken("punctuator", read());
            case "n":
              read();
              literal("ull");
              return newToken("null", null);
            case "t":
              read();
              literal("rue");
              return newToken("boolean", true);
            case "f":
              read();
              literal("alse");
              return newToken("boolean", false);
            case "-":
            case "+":
              if (read() === "-") {
                D = -1;
              }
              p = "sign";
              return;
            case ".":
              v = read();
              p = "decimalPointLeading";
              return;
            case "0":
              v = read();
              p = "zero";
              return;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              v = read();
              p = "decimalInteger";
              return;
            case "I":
              read();
              literal("nfinity");
              return newToken("numeric", Infinity);
            case "N":
              read();
              literal("aN");
              return newToken("numeric", NaN);
            case '"':
            case "'":
              d = read() === '"';
              v = "";
              p = "string";
              return;
          }
          throw invalidChar(read());
        },
        identifierNameStartEscape() {
          if (m !== "u") {
            throw invalidChar(read());
          }
          read();
          const e = unicodeEscape();
          switch (e) {
            case "$":
            case "_":
              break;
            default:
              if (!i.isIdStartChar(e)) {
                throw invalidIdentifier();
              }
              break;
          }
          v += e;
          p = "identifierName";
        },
        identifierName() {
          switch (m) {
            case "$":
            case "_":
            case "‌":
            case "‍":
              v += read();
              return;
            case "\\":
              read();
              p = "identifierNameEscape";
              return;
          }
          if (i.isIdContinueChar(m)) {
            v += read();
            return;
          }
          return newToken("identifier", v);
        },
        identifierNameEscape() {
          if (m !== "u") {
            throw invalidChar(read());
          }
          read();
          const e = unicodeEscape();
          switch (e) {
            case "$":
            case "_":
            case "‌":
            case "‍":
              break;
            default:
              if (!i.isIdContinueChar(e)) {
                throw invalidIdentifier();
              }
              break;
          }
          v += e;
          p = "identifierName";
        },
        sign() {
          switch (m) {
            case ".":
              v = read();
              p = "decimalPointLeading";
              return;
            case "0":
              v = read();
              p = "zero";
              return;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              v = read();
              p = "decimalInteger";
              return;
            case "I":
              read();
              literal("nfinity");
              return newToken("numeric", D * Infinity);
            case "N":
              read();
              literal("aN");
              return newToken("numeric", NaN);
          }
          throw invalidChar(read());
        },
        zero() {
          switch (m) {
            case ".":
              v += read();
              p = "decimalPoint";
              return;
            case "e":
            case "E":
              v += read();
              p = "decimalExponent";
              return;
            case "x":
            case "X":
              v += read();
              p = "hexadecimal";
              return;
          }
          return newToken("numeric", D * 0);
        },
        decimalInteger() {
          switch (m) {
            case ".":
              v += read();
              p = "decimalPoint";
              return;
            case "e":
            case "E":
              v += read();
              p = "decimalExponent";
              return;
          }
          if (i.isDigit(m)) {
            v += read();
            return;
          }
          return newToken("numeric", D * Number(v));
        },
        decimalPointLeading() {
          if (i.isDigit(m)) {
            v += read();
            p = "decimalFraction";
            return;
          }
          throw invalidChar(read());
        },
        decimalPoint() {
          switch (m) {
            case "e":
            case "E":
              v += read();
              p = "decimalExponent";
              return;
          }
          if (i.isDigit(m)) {
            v += read();
            p = "decimalFraction";
            return;
          }
          return newToken("numeric", D * Number(v));
        },
        decimalFraction() {
          switch (m) {
            case "e":
            case "E":
              v += read();
              p = "decimalExponent";
              return;
          }
          if (i.isDigit(m)) {
            v += read();
            return;
          }
          return newToken("numeric", D * Number(v));
        },
        decimalExponent() {
          switch (m) {
            case "+":
            case "-":
              v += read();
              p = "decimalExponentSign";
              return;
          }
          if (i.isDigit(m)) {
            v += read();
            p = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentSign() {
          if (i.isDigit(m)) {
            v += read();
            p = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentInteger() {
          if (i.isDigit(m)) {
            v += read();
            return;
          }
          return newToken("numeric", D * Number(v));
        },
        hexadecimal() {
          if (i.isHexDigit(m)) {
            v += read();
            p = "hexadecimalInteger";
            return;
          }
          throw invalidChar(read());
        },
        hexadecimalInteger() {
          if (i.isHexDigit(m)) {
            v += read();
            return;
          }
          return newToken("numeric", D * Number(v));
        },
        string() {
          switch (m) {
            case "\\":
              read();
              v += escape();
              return;
            case '"':
              if (d) {
                read();
                return newToken("string", v);
              }
              v += read();
              return;
            case "'":
              if (!d) {
                read();
                return newToken("string", v);
              }
              v += read();
              return;
            case "\n":
            case "\r":
              throw invalidChar(read());
            case "\u2028":
            case "\u2029":
              separatorChar(m);
              break;
            case undefined:
              throw invalidChar(read());
          }
          v += read();
        },
        start() {
          switch (m) {
            case "{":
            case "[":
              return newToken("punctuator", read());
          }
          p = "value";
        },
        beforePropertyName() {
          switch (m) {
            case "$":
            case "_":
              v = read();
              p = "identifierName";
              return;
            case "\\":
              read();
              p = "identifierNameStartEscape";
              return;
            case "}":
              return newToken("punctuator", read());
            case '"':
            case "'":
              d = read() === '"';
              p = "string";
              return;
          }
          if (i.isIdStartChar(m)) {
            v += read();
            p = "identifierName";
            return;
          }
          throw invalidChar(read());
        },
        afterPropertyName() {
          if (m === ":") {
            return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforePropertyValue() {
          p = "value";
        },
        afterPropertyValue() {
          switch (m) {
            case ",":
            case "}":
              return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforeArrayValue() {
          if (m === "]") {
            return newToken("punctuator", read());
          }
          p = "value";
        },
        afterArrayValue() {
          switch (m) {
            case ",":
            case "]":
              return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        end() {
          throw invalidChar(read());
        }
      };
      function newToken(e, t) {
        return { type: e, value: t, line: o, column: l };
      }
      function literal(e) {
        for (const t of e) {
          const e = peek();
          if (e !== t) {
            throw invalidChar(read());
          }
          read();
        }
      }
      function escape() {
        const e = peek();
        switch (e) {
          case "b":
            read();
            return "\b";
          case "f":
            read();
            return "\f";
          case "n":
            read();
            return "\n";
          case "r":
            read();
            return "\r";
          case "t":
            read();
            return "\t";
          case "v":
            read();
            return "\v";
          case "0":
            read();
            if (i.isDigit(peek())) {
              throw invalidChar(read());
            }
            return "\0";
          case "x":
            read();
            return hexEscape();
          case "u":
            read();
            return unicodeEscape();
          case "\n":
          case "\u2028":
          case "\u2029":
            read();
            return "";
          case "\r":
            read();
            if (peek() === "\n") {
              read();
            }
            return "";
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            throw invalidChar(read());
          case undefined:
            throw invalidChar(read());
        }
        return read();
      }
      function hexEscape() {
        let e = "";
        let t = peek();
        if (!i.isHexDigit(t)) {
          throw invalidChar(read());
        }
        e += read();
        t = peek();
        if (!i.isHexDigit(t)) {
          throw invalidChar(read());
        }
        e += read();
        return String.fromCodePoint(parseInt(e, 16));
      }
      function unicodeEscape() {
        let e = "";
        let t = 4;
        while (t-- > 0) {
          const t = peek();
          if (!i.isHexDigit(t)) {
            throw invalidChar(read());
          }
          e += read();
        }
        return String.fromCodePoint(parseInt(e, 16));
      }
      const E = {
        start() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforePropertyName() {
          switch (f.type) {
            case "identifier":
            case "string":
              c = f.value;
              a = "afterPropertyName";
              return;
            case "punctuator":
              pop();
              return;
            case "eof":
              throw invalidEOF();
          }
        },
        afterPropertyName() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          a = "beforePropertyValue";
        },
        beforePropertyValue() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforeArrayValue() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          if (f.type === "punctuator" && f.value === "]") {
            pop();
            return;
          }
          push();
        },
        afterPropertyValue() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          switch (f.value) {
            case ",":
              a = "beforePropertyName";
              return;
            case "}":
              pop();
          }
        },
        afterArrayValue() {
          if (f.type === "eof") {
            throw invalidEOF();
          }
          switch (f.value) {
            case ",":
              a = "beforeArrayValue";
              return;
            case "]":
              pop();
          }
        },
        end() {}
      };
      function push() {
        let e;
        switch (f.type) {
          case "punctuator":
            switch (f.value) {
              case "{":
                e = {};
                break;
              case "[":
                e = [];
                break;
            }
            break;
          case "null":
          case "boolean":
          case "numeric":
          case "string":
            e = f.value;
            break;
        }
        if (h === undefined) {
          h = e;
        } else {
          const t = u[u.length - 1];
          if (Array.isArray(t)) {
            t.push(e);
          } else {
            t[c] = e;
          }
        }
        if (e !== null && typeof e === "object") {
          u.push(e);
          if (Array.isArray(e)) {
            a = "beforeArrayValue";
          } else {
            a = "beforePropertyName";
          }
        } else {
          const e = u[u.length - 1];
          if (e == null) {
            a = "end";
          } else if (Array.isArray(e)) {
            a = "afterArrayValue";
          } else {
            a = "afterPropertyValue";
          }
        }
      }
      function pop() {
        u.pop();
        const e = u[u.length - 1];
        if (e == null) {
          a = "end";
        } else if (Array.isArray(e)) {
          a = "afterArrayValue";
        } else {
          a = "afterPropertyValue";
        }
      }
      function invalidChar(e) {
        if (e === undefined) {
          return syntaxError(`JSON5: invalid end of input at ${o}:${l}`);
        }
        return syntaxError(
          `JSON5: invalid character '${formatChar(e)}' at ${o}:${l}`
        );
      }
      function invalidEOF() {
        return syntaxError(`JSON5: invalid end of input at ${o}:${l}`);
      }
      function invalidIdentifier() {
        l -= 5;
        return syntaxError(`JSON5: invalid identifier character at ${o}:${l}`);
      }
      function separatorChar(e) {
        console.warn(
          `JSON5: '${formatChar(
            e
          )}' in strings is not valid ECMAScript; consider escaping`
        );
      }
      function formatChar(e) {
        const t = {
          "'": "\\'",
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\v",
          "\0": "\\0",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        if (t[e]) {
          return t[e];
        }
        if (e < " ") {
          const t = e.charCodeAt(0).toString(16);
          return "\\x" + ("00" + t).substring(t.length);
        }
        return e;
      }
      function syntaxError(e) {
        const t = new SyntaxError(e);
        t.lineNumber = o;
        t.columnNumber = l;
        return t;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(589);
      var a = r(345);
      var u = r(347)("unified-engine:find-up");
      var s = r(692);
      e.exports = FindUp;
      var o = i.readFile;
      var l = n.resolve;
      var f = n.relative;
      var c = n.join;
      var h = n.dirname;
      FindUp.prototype.load = load;
      function FindUp(e) {
        var t = this;
        var r = e.filePath;
        t.cache = {};
        t.cwd = e.cwd;
        t.detect = e.detect;
        t.names = e.names;
        t.create = e.create;
        if (r) {
          t.givenFilePath = l(e.cwd, r);
        }
      }
      function load(e, t) {
        var r = this;
        var i = r.cache;
        var n = r.givenFilePath;
        var p = r.givenFile;
        var v = r.names;
        var d = r.create;
        var D = r.cwd;
        var m;
        if (n) {
          if (p) {
            apply(t, p);
          } else {
            p = [t];
            r.givenFile = p;
            u("Checking given file `%s`", n);
            o(n, loadGiven);
          }
          return;
        }
        if (!r.detect) {
          return t();
        }
        e = l(D, e);
        m = h(e);
        if (m in i) {
          apply(t, i[m]);
        } else {
          i[m] = [t];
          find(m);
        }
        function loadGiven(e, t) {
          var i = r.givenFile;
          var s;
          if (e) {
            s = a("Cannot read given file `%s`\n%s", f(D, n), e.stack);
            s.code = "ENOENT";
            s.path = e.path;
            s.syscall = e.syscall;
          } else {
            try {
              s = d(t, n);
              u("Read given file `%s`", n);
            } catch (e) {
              s = a("Cannot parse given file `%s`\n%s", f(D, n), e.stack);
              u(e.message);
            }
          }
          p = s;
          r.givenFile = s;
          applyAll(i, s);
        }
        function find(t) {
          var r = -1;
          var n = v.length;
          next();
          function next() {
            var a;
            if (++r < n) {
              o(c(t, v[r]), done);
            } else {
              a = h(t);
              if (t === a) {
                u("No files found for `%s`", e);
                found();
              } else if (a in i) {
                apply(found, i[a]);
              } else {
                i[a] = [found];
                find(a);
              }
            }
          }
          function done(e, i) {
            var n = v[r];
            var s = c(t, n);
            var o;
            if (e) {
              if (e.code === "ENOENT") {
                return next();
              }
              e = a("Cannot read file `%s`\n%s", f(D, s), e.message);
              u(e.message);
              return found(e);
            }
            try {
              o = d(i, s);
            } catch (e) {
              return found(a("Cannot parse file `%s`\n%s", f(D, s), e.message));
            }
            if (o) {
              u("Read file `%s`", s);
              found(null, o);
            } else {
              next();
            }
          }
          function found(e, r) {
            var n = i[t];
            i[t] = e || r;
            applyAll(n, e || r);
          }
        }
        function applyAll(e, t) {
          var r = e.length;
          while (r--) {
            apply(e[r], t);
          }
        }
        function apply(e, t) {
          if (s(t) && typeof t[0] === "function") {
            t.push(e);
          } else if (t instanceof Error) {
            e(t);
          } else {
            e(null, t);
          }
        }
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:parse");
      var n = r(928);
      var a = r(163);
      e.exports = parse;
      function parse(e, t) {
        var r;
        if (n(t).fatal) {
          return;
        }
        if (e.treeIn) {
          i("Not parsing already parsed document");
          try {
            e.tree = a(t.toString());
          } catch (e) {
            r = t.message(new Error("Cannot read file as JSON\n" + e.message));
            r.fatal = true;
          }
          if (t.path) {
            t.extname = e.extensions[0];
          }
          t.contents = "";
          return;
        }
        i("Parsing `%s`", t.path);
        e.tree = e.processor.parse(t);
        i("Parsed document");
      }
    },
    function(e, t, r) {
      "use strict";
      const i = r(243);
      const n = r(91);
      const a = r(619);
      const u = r(126);
      const s = r(484);
      const o = r(818);
      const { plugins: l } = r(615);
      const f = {
        processor: u,
        name: s.name,
        description: o.description,
        version: [s.name + ": " + s.version, o.name + ": " + o.version].join(
          ", "
        ),
        ignoreName: "." + s.name + "ignore",
        extensions: a
      };
      const c = n(process.argv.slice(2), f);
      c.detectConfig = false;
      c.plugins = l;
      i(c, (e, t) => {
        if (e) console.error(e);
        process.exit(t);
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:code-block-style", codeBlockStyle);
      var s = a.start;
      var o = a.end;
      var l = { null: true, fenced: true, indented: true };
      function codeBlockStyle(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (l[r] !== true) {
          t.fail(
            "Invalid code block style `" +
              r +
              "`: use either `'consistent'`, `'fenced'`, or `'indented'`"
          );
        }
        n(e, "code", visitor);
        function visitor(e) {
          var i = check(e);
          if (i) {
            if (!r) {
              r = i;
            } else if (r !== i) {
              t.message("Code blocks should be " + r, e);
            }
          }
        }
        function check(e) {
          var t = s(e).offset;
          var r = o(e).offset;
          if (u(e)) {
            return null;
          }
          return e.lang || /^\s*([~`])\1{2,}/.test(i.slice(t, r))
            ? "fenced"
            : "indented";
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(589);
      var n = r(77);
      var a = r(289);
      e.exports = Ignore;
      Ignore.prototype.check = check;
      var u = i.dirname;
      var s = i.relative;
      var o = i.resolve;
      function Ignore(e) {
        this.cwd = e.cwd;
        this.findUp = new a({
          filePath: e.ignorePath,
          cwd: e.cwd,
          detect: e.detectIgnore,
          names: e.ignoreName ? [e.ignoreName] : [],
          create: create
        });
      }
      function check(e, t) {
        var r = this;
        r.findUp.load(e, done);
        function done(i, n) {
          var a;
          if (i) {
            t(i);
          } else if (n) {
            a = s(n.filePath, o(r.cwd, e));
            t(null, a ? n.ignores(a) : false);
          } else {
            t(null, false);
          }
        }
      }
      function create(e, t) {
        var r = n().add(String(e));
        r.filePath = u(t);
        return r;
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = {
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        times: "×",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        divide: "÷",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        fnof: "ƒ",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        bull: "•",
        hellip: "…",
        prime: "′",
        Prime: "″",
        oline: "‾",
        frasl: "⁄",
        weierp: "℘",
        image: "ℑ",
        real: "ℜ",
        trade: "™",
        alefsym: "ℵ",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lArr: "⇐",
        uArr: "⇑",
        rArr: "⇒",
        dArr: "⇓",
        hArr: "⇔",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        lang: "〈",
        rang: "〉",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦",
        quot: '"',
        amp: "&",
        lt: "<",
        gt: ">",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        circ: "ˆ",
        tilde: "˜",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        permil: "‰",
        lsaquo: "‹",
        rsaquo: "›",
        euro: "€"
      };
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(54);
      e.exports = enclose;
      var n = "(";
      var a = ")";
      var u = "<";
      var s = ">";
      var o = /\s/;
      function enclose(e, t) {
        if (t || e.length === 0 || o.test(e) || i(e, n) !== i(e, a)) {
          return u + e + s;
        }
        return e;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:table-pipes", tablePipes);
      var s = a.start;
      var o = a.end;
      var l = "Missing initial pipe in table fence";
      var f = "Missing final pipe in table fence";
      function tablePipes(e, t) {
        var r = String(t);
        n(e, "table", visitor);
        function visitor(e) {
          var i = e.children;
          var n = i.length;
          var a = -1;
          var c;
          var h;
          var p;
          var v;
          var d;
          var D;
          while (++a < n) {
            c = i[a];
            if (!u(c)) {
              h = c.children;
              p = h[0];
              v = h[h.length - 1];
              d = r.slice(s(c).offset, s(p).offset);
              D = r.slice(o(v).offset, o(c).offset);
              if (d.indexOf("|") === -1) {
                t.message(l, s(c));
              }
              if (D.indexOf("|") === -1) {
                t.message(f, o(c));
              }
            }
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = identity;
      function identity(e) {
        return e;
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(682);
      e.exports = compact;
      function compact(e, t) {
        i(e, visitor);
        return e;
        function visitor(e, r, i) {
          var n = i ? i.children : [];
          var a = r && n[r - 1];
          if (a && e.type === a.type && mergeable(a, t) && mergeable(e, t)) {
            if (e.value) {
              a.value += e.value;
            }
            if (e.children) {
              a.children = a.children.concat(e.children);
            }
            n.splice(r, 1);
            if (a.position && e.position) {
              a.position.end = e.position.end;
            }
            return r;
          }
        }
      }
      function mergeable(e, t) {
        var r;
        var i;
        if (e.type === "text") {
          if (!e.position) {
            return true;
          }
          r = e.position.start;
          i = e.position.end;
          return r.line !== i.line || i.column - r.column === e.value.length;
        }
        return t && e.type === "blockquote";
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(589);
      var n = r(210);
      var a = r(56);
      e.exports = VFile;
      var u = {}.hasOwnProperty;
      var s = VFile.prototype;
      s.toString = toString;
      var o = ["history", "path", "basename", "stem", "extname", "dirname"];
      function VFile(e) {
        var t;
        var r;
        var i;
        if (!e) {
          e = {};
        } else if (typeof e === "string" || a(e)) {
          e = { contents: e };
        } else if ("message" in e && "messages" in e) {
          return e;
        }
        if (!(this instanceof VFile)) {
          return new VFile(e);
        }
        this.data = {};
        this.messages = [];
        this.history = [];
        this.cwd = process.cwd();
        r = -1;
        i = o.length;
        while (++r < i) {
          t = o[r];
          if (u.call(e, t)) {
            this[t] = e[t];
          }
        }
        for (t in e) {
          if (o.indexOf(t) === -1) {
            this[t] = e[t];
          }
        }
      }
      Object.defineProperty(s, "path", {
        get: function() {
          return this.history[this.history.length - 1];
        },
        set: function(e) {
          assertNonEmpty(e, "path");
          if (e !== this.path) {
            this.history.push(e);
          }
        }
      });
      Object.defineProperty(s, "dirname", {
        get: function() {
          return typeof this.path === "string"
            ? i.dirname(this.path)
            : undefined;
        },
        set: function(e) {
          assertPath(this.path, "dirname");
          this.path = i.join(e || "", this.basename);
        }
      });
      Object.defineProperty(s, "basename", {
        get: function() {
          return typeof this.path === "string"
            ? i.basename(this.path)
            : undefined;
        },
        set: function(e) {
          assertNonEmpty(e, "basename");
          assertPart(e, "basename");
          this.path = i.join(this.dirname || "", e);
        }
      });
      Object.defineProperty(s, "extname", {
        get: function() {
          return typeof this.path === "string"
            ? i.extname(this.path)
            : undefined;
        },
        set: function(e) {
          var t = e || "";
          assertPart(t, "extname");
          assertPath(this.path, "extname");
          if (t) {
            if (t.charAt(0) !== ".") {
              throw new Error("`extname` must start with `.`");
            }
            if (t.indexOf(".", 1) !== -1) {
              throw new Error("`extname` cannot contain multiple dots");
            }
          }
          this.path = n(this.path, t);
        }
      });
      Object.defineProperty(s, "stem", {
        get: function() {
          return typeof this.path === "string"
            ? i.basename(this.path, this.extname)
            : undefined;
        },
        set: function(e) {
          assertNonEmpty(e, "stem");
          assertPart(e, "stem");
          this.path = i.join(this.dirname || "", e + (this.extname || ""));
        }
      });
      function toString(e) {
        var t = this.contents || "";
        return a(t) ? t.toString(e) : String(t);
      }
      function assertPart(e, t) {
        if (e.indexOf(i.sep) !== -1) {
          throw new Error(
            "`" + t + "` cannot be a path: did not expect `" + i.sep + "`"
          );
        }
      }
      function assertNonEmpty(e, t) {
        if (!e) {
          throw new Error("`" + t + "` cannot be empty");
        }
      }
      function assertPath(e, t) {
        if (!e) {
          throw new Error("Setting `" + t + "` requires `path` to be set too");
        }
      }
    },
    ,
    ,
    function(e) {
      (function() {
        var t;
        if (true) {
          t = e.exports = format;
        } else {
        }
        t.format = format;
        t.vsprintf = vsprintf;
        if (
          typeof console !== "undefined" &&
          typeof console.log === "function"
        ) {
          t.printf = printf;
        }
        function printf() {
          console.log(format.apply(null, arguments));
        }
        function vsprintf(e, t) {
          return format.apply(null, [e].concat(t));
        }
        function format(e) {
          var t = 1,
            r = [].slice.call(arguments),
            i = 0,
            n = e.length,
            a = "",
            u,
            s = false,
            o,
            l,
            f = false,
            c,
            h = function() {
              return r[t++];
            },
            p = function() {
              var t = "";
              while (/\d/.test(e[i])) {
                t += e[i++];
                u = e[i];
              }
              return t.length > 0 ? parseInt(t) : null;
            };
          for (; i < n; ++i) {
            u = e[i];
            if (s) {
              s = false;
              if (u == ".") {
                f = false;
                u = e[++i];
              } else if (u == "0" && e[i + 1] == ".") {
                f = true;
                i += 2;
                u = e[i];
              } else {
                f = true;
              }
              c = p();
              switch (u) {
                case "b":
                  a += parseInt(h(), 10).toString(2);
                  break;
                case "c":
                  o = h();
                  if (typeof o === "string" || o instanceof String) a += o;
                  else a += String.fromCharCode(parseInt(o, 10));
                  break;
                case "d":
                  a += parseInt(h(), 10);
                  break;
                case "f":
                  l = String(parseFloat(h()).toFixed(c || 6));
                  a += f ? l : l.replace(/^0/, "");
                  break;
                case "j":
                  a += JSON.stringify(h());
                  break;
                case "o":
                  a += "0" + parseInt(h(), 10).toString(8);
                  break;
                case "s":
                  a += h();
                  break;
                case "x":
                  a += "0x" + parseInt(h(), 10).toString(16);
                  break;
                case "X":
                  a +=
                    "0x" +
                    parseInt(h(), 10)
                      .toString(16)
                      .toUpperCase();
                  break;
                default:
                  a += u;
                  break;
              }
            } else if (u === "%") {
              s = true;
            } else {
              a += u;
            }
          }
          return a;
        }
      })();
    },
    ,
    ,
    ,
    function(e, t, r) {
      e.exports = glob;
      var i = r(66);
      var n = r(129);
      var a = r(620);
      var u = a.Minimatch;
      var s = r(780);
      var o = r(485).EventEmitter;
      var l = r(589);
      var f = r(393);
      var c = r(969);
      var h = r(487);
      var p = r(922);
      var v = p.alphasort;
      var d = p.alphasorti;
      var D = p.setopts;
      var m = p.ownProp;
      var g = r(408);
      var E = r(64);
      var A = p.childrenIgnored;
      var C = p.isIgnored;
      var y = r(83);
      function glob(e, t, r) {
        if (typeof t === "function") (r = t), (t = {});
        if (!t) t = {};
        if (t.sync) {
          if (r) throw new TypeError("callback provided to sync glob");
          return h(e, t);
        }
        return new Glob(e, t, r);
      }
      glob.sync = h;
      var w = (glob.GlobSync = h.GlobSync);
      glob.glob = glob;
      function extend(e, t) {
        if (t === null || typeof t !== "object") {
          return e;
        }
        var r = Object.keys(t);
        var i = r.length;
        while (i--) {
          e[r[i]] = t[r[i]];
        }
        return e;
      }
      glob.hasMagic = function(e, t) {
        var r = extend({}, t);
        r.noprocess = true;
        var i = new Glob(e, r);
        var n = i.minimatch.set;
        if (!e) return false;
        if (n.length > 1) return true;
        for (var a = 0; a < n[0].length; a++) {
          if (typeof n[0][a] !== "string") return true;
        }
        return false;
      };
      glob.Glob = Glob;
      s(Glob, o);
      function Glob(e, t, r) {
        if (typeof t === "function") {
          r = t;
          t = null;
        }
        if (t && t.sync) {
          if (r) throw new TypeError("callback provided to sync glob");
          return new w(e, t);
        }
        if (!(this instanceof Glob)) return new Glob(e, t, r);
        D(this, e, t);
        this._didRealPath = false;
        var i = this.minimatch.set.length;
        this.matches = new Array(i);
        if (typeof r === "function") {
          r = y(r);
          this.on("error", r);
          this.on("end", function(e) {
            r(null, e);
          });
        }
        var n = this;
        this._processing = 0;
        this._emitQueue = [];
        this._processQueue = [];
        this.paused = false;
        if (this.noprocess) return this;
        if (i === 0) return done();
        var a = true;
        for (var u = 0; u < i; u++) {
          this._process(this.minimatch.set[u], u, false, done);
        }
        a = false;
        function done() {
          --n._processing;
          if (n._processing <= 0) {
            if (a) {
              process.nextTick(function() {
                n._finish();
              });
            } else {
              n._finish();
            }
          }
        }
      }
      Glob.prototype._finish = function() {
        f(this instanceof Glob);
        if (this.aborted) return;
        if (this.realpath && !this._didRealpath) return this._realpath();
        p.finish(this);
        this.emit("end", this.found);
      };
      Glob.prototype._realpath = function() {
        if (this._didRealpath) return;
        this._didRealpath = true;
        var e = this.matches.length;
        if (e === 0) return this._finish();
        var t = this;
        for (var r = 0; r < this.matches.length; r++)
          this._realpathSet(r, next);
        function next() {
          if (--e === 0) t._finish();
        }
      };
      Glob.prototype._realpathSet = function(e, t) {
        var r = this.matches[e];
        if (!r) return t();
        var i = Object.keys(r);
        var a = this;
        var u = i.length;
        if (u === 0) return t();
        var s = (this.matches[e] = Object.create(null));
        i.forEach(function(r, i) {
          r = a._makeAbs(r);
          n.realpath(r, a.realpathCache, function(i, n) {
            if (!i) s[n] = true;
            else if (i.syscall === "stat") s[r] = true;
            else a.emit("error", i);
            if (--u === 0) {
              a.matches[e] = s;
              t();
            }
          });
        });
      };
      Glob.prototype._mark = function(e) {
        return p.mark(this, e);
      };
      Glob.prototype._makeAbs = function(e) {
        return p.makeAbs(this, e);
      };
      Glob.prototype.abort = function() {
        this.aborted = true;
        this.emit("abort");
      };
      Glob.prototype.pause = function() {
        if (!this.paused) {
          this.paused = true;
          this.emit("pause");
        }
      };
      Glob.prototype.resume = function() {
        if (this.paused) {
          this.emit("resume");
          this.paused = false;
          if (this._emitQueue.length) {
            var e = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              this._emitMatch(r[0], r[1]);
            }
          }
          if (this._processQueue.length) {
            var i = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for (var t = 0; t < i.length; t++) {
              var n = i[t];
              this._processing--;
              this._process(n[0], n[1], n[2], n[3]);
            }
          }
        }
      };
      Glob.prototype._process = function(e, t, r, i) {
        f(this instanceof Glob);
        f(typeof i === "function");
        if (this.aborted) return;
        this._processing++;
        if (this.paused) {
          this._processQueue.push([e, t, r, i]);
          return;
        }
        var n = 0;
        while (typeof e[n] === "string") {
          n++;
        }
        var u;
        switch (n) {
          case e.length:
            this._processSimple(e.join("/"), t, i);
            return;
          case 0:
            u = null;
            break;
          default:
            u = e.slice(0, n).join("/");
            break;
        }
        var s = e.slice(n);
        var o;
        if (u === null) o = ".";
        else if (c(u) || c(e.join("/"))) {
          if (!u || !c(u)) u = "/" + u;
          o = u;
        } else o = u;
        var l = this._makeAbs(o);
        if (A(this, o)) return i();
        var h = s[0] === a.GLOBSTAR;
        if (h) this._processGlobStar(u, o, l, s, t, r, i);
        else this._processReaddir(u, o, l, s, t, r, i);
      };
      Glob.prototype._processReaddir = function(e, t, r, i, n, a, u) {
        var s = this;
        this._readdir(r, a, function(o, l) {
          return s._processReaddir2(e, t, r, i, n, a, l, u);
        });
      };
      Glob.prototype._processReaddir2 = function(e, t, r, i, n, a, u, s) {
        if (!u) return s();
        var o = i[0];
        var f = !!this.minimatch.negate;
        var c = o._glob;
        var h = this.dot || c.charAt(0) === ".";
        var p = [];
        for (var v = 0; v < u.length; v++) {
          var d = u[v];
          if (d.charAt(0) !== "." || h) {
            var D;
            if (f && !e) {
              D = !d.match(o);
            } else {
              D = d.match(o);
            }
            if (D) p.push(d);
          }
        }
        var m = p.length;
        if (m === 0) return s();
        if (i.length === 1 && !this.mark && !this.stat) {
          if (!this.matches[n]) this.matches[n] = Object.create(null);
          for (var v = 0; v < m; v++) {
            var d = p[v];
            if (e) {
              if (e !== "/") d = e + "/" + d;
              else d = e + d;
            }
            if (d.charAt(0) === "/" && !this.nomount) {
              d = l.join(this.root, d);
            }
            this._emitMatch(n, d);
          }
          return s();
        }
        i.shift();
        for (var v = 0; v < m; v++) {
          var d = p[v];
          var g;
          if (e) {
            if (e !== "/") d = e + "/" + d;
            else d = e + d;
          }
          this._process([d].concat(i), n, a, s);
        }
        s();
      };
      Glob.prototype._emitMatch = function(e, t) {
        if (this.aborted) return;
        if (C(this, t)) return;
        if (this.paused) {
          this._emitQueue.push([e, t]);
          return;
        }
        var r = c(t) ? t : this._makeAbs(t);
        if (this.mark) t = this._mark(t);
        if (this.absolute) t = r;
        if (this.matches[e][t]) return;
        if (this.nodir) {
          var i = this.cache[r];
          if (i === "DIR" || Array.isArray(i)) return;
        }
        this.matches[e][t] = true;
        var n = this.statCache[r];
        if (n) this.emit("stat", t, n);
        this.emit("match", t);
      };
      Glob.prototype._readdirInGlobStar = function(e, t) {
        if (this.aborted) return;
        if (this.follow) return this._readdir(e, false, t);
        var r = "lstat\0" + e;
        var n = this;
        var a = g(r, lstatcb_);
        if (a) i.lstat(e, a);
        function lstatcb_(r, i) {
          if (r && r.code === "ENOENT") return t();
          var a = i && i.isSymbolicLink();
          n.symlinks[e] = a;
          if (!a && i && !i.isDirectory()) {
            n.cache[e] = "FILE";
            t();
          } else n._readdir(e, false, t);
        }
      };
      Glob.prototype._readdir = function(e, t, r) {
        if (this.aborted) return;
        r = g("readdir\0" + e + "\0" + t, r);
        if (!r) return;
        if (t && !m(this.symlinks, e)) return this._readdirInGlobStar(e, r);
        if (m(this.cache, e)) {
          var n = this.cache[e];
          if (!n || n === "FILE") return r();
          if (Array.isArray(n)) return r(null, n);
        }
        var a = this;
        i.readdir(e, readdirCb(this, e, r));
      };
      function readdirCb(e, t, r) {
        return function(i, n) {
          if (i) e._readdirError(t, i, r);
          else e._readdirEntries(t, n, r);
        };
      }
      Glob.prototype._readdirEntries = function(e, t, r) {
        if (this.aborted) return;
        if (!this.mark && !this.stat) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            if (e === "/") n = e + n;
            else n = e + "/" + n;
            this.cache[n] = true;
          }
        }
        this.cache[e] = t;
        return r(null, t);
      };
      Glob.prototype._readdirError = function(e, t, r) {
        if (this.aborted) return;
        switch (t.code) {
          case "ENOTSUP":
          case "ENOTDIR":
            var i = this._makeAbs(e);
            this.cache[i] = "FILE";
            if (i === this.cwdAbs) {
              var n = new Error(t.code + " invalid cwd " + this.cwd);
              n.path = this.cwd;
              n.code = t.code;
              this.emit("error", n);
              this.abort();
            }
            break;
          case "ENOENT":
          case "ELOOP":
          case "ENAMETOOLONG":
          case "UNKNOWN":
            this.cache[this._makeAbs(e)] = false;
            break;
          default:
            this.cache[this._makeAbs(e)] = false;
            if (this.strict) {
              this.emit("error", t);
              this.abort();
            }
            if (!this.silent) console.error("glob error", t);
            break;
        }
        return r();
      };
      Glob.prototype._processGlobStar = function(e, t, r, i, n, a, u) {
        var s = this;
        this._readdir(r, a, function(o, l) {
          s._processGlobStar2(e, t, r, i, n, a, l, u);
        });
      };
      Glob.prototype._processGlobStar2 = function(e, t, r, i, n, a, u, s) {
        if (!u) return s();
        var o = i.slice(1);
        var l = e ? [e] : [];
        var f = l.concat(o);
        this._process(f, n, false, s);
        var c = this.symlinks[r];
        var h = u.length;
        if (c && a) return s();
        for (var p = 0; p < h; p++) {
          var v = u[p];
          if (v.charAt(0) === "." && !this.dot) continue;
          var d = l.concat(u[p], o);
          this._process(d, n, true, s);
          var D = l.concat(u[p], i);
          this._process(D, n, true, s);
        }
        s();
      };
      Glob.prototype._processSimple = function(e, t, r) {
        var i = this;
        this._stat(e, function(n, a) {
          i._processSimple2(e, t, n, a, r);
        });
      };
      Glob.prototype._processSimple2 = function(e, t, r, i, n) {
        if (!this.matches[t]) this.matches[t] = Object.create(null);
        if (!i) return n();
        if (e && c(e) && !this.nomount) {
          var a = /[\/\\]$/.test(e);
          if (e.charAt(0) === "/") {
            e = l.join(this.root, e);
          } else {
            e = l.resolve(this.root, e);
            if (a) e += "/";
          }
        }
        if (process.platform === "win32") e = e.replace(/\\/g, "/");
        this._emitMatch(t, e);
        n();
      };
      Glob.prototype._stat = function(e, t) {
        var r = this._makeAbs(e);
        var n = e.slice(-1) === "/";
        if (e.length > this.maxLength) return t();
        if (!this.stat && m(this.cache, r)) {
          var a = this.cache[r];
          if (Array.isArray(a)) a = "DIR";
          if (!n || a === "DIR") return t(null, a);
          if (n && a === "FILE") return t();
        }
        var u;
        var s = this.statCache[r];
        if (s !== undefined) {
          if (s === false) return t(null, s);
          else {
            var o = s.isDirectory() ? "DIR" : "FILE";
            if (n && o === "FILE") return t();
            else return t(null, o, s);
          }
        }
        var l = this;
        var f = g("stat\0" + r, lstatcb_);
        if (f) i.lstat(r, f);
        function lstatcb_(n, a) {
          if (a && a.isSymbolicLink()) {
            return i.stat(r, function(i, n) {
              if (i) l._stat2(e, r, null, a, t);
              else l._stat2(e, r, i, n, t);
            });
          } else {
            l._stat2(e, r, n, a, t);
          }
        }
      };
      Glob.prototype._stat2 = function(e, t, r, i, n) {
        if (r && (r.code === "ENOENT" || r.code === "ENOTDIR")) {
          this.statCache[t] = false;
          return n();
        }
        var a = e.slice(-1) === "/";
        this.statCache[t] = i;
        if (t.slice(-1) === "/" && i && !i.isDirectory())
          return n(null, false, i);
        var u = true;
        if (i) u = i.isDirectory() ? "DIR" : "FILE";
        this.cache[t] = this.cache[t] || u;
        if (a && u === "FILE") return n();
        return n(null, u, i);
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(439);
      var a = r(934);
      var u = r(724);
      e.exports = paragraph;
      var s = "\t";
      var o = "\n";
      var l = " ";
      var f = 4;
      function paragraph(e, t, r) {
        var c = this;
        var h = c.options;
        var p = h.commonmark;
        var v = h.gfm;
        var d = c.blockTokenizers;
        var D = c.interruptParagraph;
        var m = t.indexOf(o);
        var g = t.length;
        var E;
        var A;
        var C;
        var y;
        var w;
        while (m < g) {
          if (m === -1) {
            m = g;
            break;
          }
          if (t.charAt(m + 1) === o) {
            break;
          }
          if (p) {
            y = 0;
            E = m + 1;
            while (E < g) {
              C = t.charAt(E);
              if (C === s) {
                y = f;
                break;
              } else if (C === l) {
                y++;
              } else {
                break;
              }
              E++;
            }
            if (y >= f && C !== o) {
              m = t.indexOf(o, m + 1);
              continue;
            }
          }
          A = t.slice(m + 1);
          if (u(D, d, c, [e, A, true])) {
            break;
          }
          if (
            d.list.call(c, e, A, true) &&
            (c.inList || p || (v && !n(i.left(A).charAt(0))))
          ) {
            break;
          }
          E = m;
          m = t.indexOf(o, m + 1);
          if (m !== -1 && i(t.slice(E, m)) === "") {
            m = E;
            break;
          }
        }
        A = t.slice(0, m);
        if (i(A) === "") {
          e(A);
          return null;
        }
        if (r) {
          return true;
        }
        w = e.now();
        A = a(A);
        return e(A)({ type: "paragraph", children: c.tokenizeInline(A, w) });
      }
    },
    function(e, t, r) {
      "use strict";
      var i;
      var n;
      try {
        var a = i;
        n = r(644);
      } catch (e) {
        if (typeof window !== "undefined") n = window.esprima;
      }
      var u = r(211);
      function resolveJavascriptFunction(e) {
        if (e === null) return false;
        try {
          var t = "(" + e + ")",
            r = n.parse(t, { range: true });
          if (
            r.type !== "Program" ||
            r.body.length !== 1 ||
            r.body[0].type !== "ExpressionStatement" ||
            (r.body[0].expression.type !== "ArrowFunctionExpression" &&
              r.body[0].expression.type !== "FunctionExpression")
          ) {
            return false;
          }
          return true;
        } catch (e) {
          return false;
        }
      }
      function constructJavascriptFunction(e) {
        var t = "(" + e + ")",
          r = n.parse(t, { range: true }),
          i = [],
          a;
        if (
          r.type !== "Program" ||
          r.body.length !== 1 ||
          r.body[0].type !== "ExpressionStatement" ||
          (r.body[0].expression.type !== "ArrowFunctionExpression" &&
            r.body[0].expression.type !== "FunctionExpression")
        ) {
          throw new Error("Failed to resolve function");
        }
        r.body[0].expression.params.forEach(function(e) {
          i.push(e.name);
        });
        a = r.body[0].expression.body.range;
        if (r.body[0].expression.body.type === "BlockStatement") {
          return new Function(i, t.slice(a[0] + 1, a[1] - 1));
        }
        return new Function(i, "return " + t.slice(a[0], a[1]));
      }
      function representJavascriptFunction(e) {
        return e.toString();
      }
      function isFunction(e) {
        return Object.prototype.toString.call(e) === "[object Function]";
      }
      e.exports = new u("tag:yaml.org,2002:js/function", {
        kind: "scalar",
        resolve: resolveJavascriptFunction,
        construct: constructJavascriptFunction,
        predicate: isFunction,
        represent: representJavascriptFunction
      });
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(984);
      var a = r(426);
      e.exports = reference;
      reference.locator = n;
      var u = "link";
      var s = "image";
      var o = "footnote";
      var l = "shortcut";
      var f = "collapsed";
      var c = "full";
      var h = " ";
      var p = "!";
      var v = "[";
      var d = "\\";
      var D = "]";
      var m = "^";
      function reference(e, t, r) {
        var n = this;
        var g = n.options.commonmark;
        var E = t.charAt(0);
        var A = 0;
        var C = t.length;
        var y = "";
        var w = "";
        var x = u;
        var b = l;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        if (E === p) {
          x = s;
          w = E;
          E = t.charAt(++A);
        }
        if (E !== v) {
          return;
        }
        A++;
        w += E;
        P = "";
        if (n.options.footnotes && t.charAt(A) === m) {
          if (x === s) {
            return;
          }
          w += m;
          A++;
          x = o;
        }
        I = 0;
        while (A < C) {
          E = t.charAt(A);
          if (E === v) {
            T = true;
            I++;
          } else if (E === D) {
            if (!I) {
              break;
            }
            I--;
          }
          if (E === d) {
            P += d;
            E = t.charAt(++A);
          }
          P += E;
          A++;
        }
        y = P;
        F = P;
        E = t.charAt(A);
        if (E !== D) {
          return;
        }
        A++;
        y += E;
        P = "";
        if (!g) {
          while (A < C) {
            E = t.charAt(A);
            if (!i(E)) {
              break;
            }
            P += E;
            A++;
          }
        }
        E = t.charAt(A);
        if (x !== o && E === v) {
          S = "";
          P += E;
          A++;
          while (A < C) {
            E = t.charAt(A);
            if (E === v || E === D) {
              break;
            }
            if (E === d) {
              S += d;
              E = t.charAt(++A);
            }
            S += E;
            A++;
          }
          E = t.charAt(A);
          if (E === D) {
            b = S ? c : f;
            P += S + E;
            A++;
          } else {
            S = "";
          }
          y += P;
          P = "";
        } else {
          if (!F) {
            return;
          }
          S = F;
        }
        if (b !== c && T) {
          return;
        }
        y = w + y;
        if (x === u && n.inLink) {
          return null;
        }
        if (r) {
          return true;
        }
        if (x === o && F.indexOf(h) !== -1) {
          return e(y)({ type: o, children: this.tokenizeInline(F, e.now()) });
        }
        B = e.now();
        B.column += w.length;
        B.offset += w.length;
        S = b === c ? S : F;
        k = { type: x + "Reference", identifier: a(S), label: S };
        if (x === u || x === s) {
          k.referenceType = b;
        }
        if (x === u) {
          O = n.enterLink();
          k.children = n.tokenizeInline(F, B);
          O();
        } else if (x === s) {
          k.alt = n.decode.raw(n.unescape(F), B) || null;
        }
        return e(y)(k);
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(101).stderr.hasBasic;
      var n = r(684);
      var a = r(186);
      var u = r(814);
      var s = r(928);
      var o = r(650);
      e.exports = reporter;
      var l = process.platform === "win32";
      var f = l ? { error: "×", warning: "‼" } : { error: "✖", warning: "⚠" };
      var c = /\s*$/;
      var h = "<stdin>";
      var p = { open: "", close: "" };
      var v = {
        underline: { open: "[4m", close: "[24m" },
        red: { open: "[31m", close: "[39m" },
        yellow: { open: "[33m", close: "[39m" },
        green: { open: "[32m", close: "[39m" }
      };
      var d = { underline: p, red: p, yellow: p, green: p };
      var D = {
        true: "error",
        false: "warning",
        null: "info",
        undefined: "info"
      };
      function reporter(e, t) {
        var r = t || {};
        var i;
        if (!e) {
          return "";
        }
        if ("name" in e && "message" in e) {
          return String(e.stack || e);
        }
        if (!("length" in e)) {
          i = true;
          e = [e];
        }
        return compile(parse(filter(e, r), r), i, r);
      }
      function filter(e, t) {
        var r = [];
        var i = e.length;
        var n = -1;
        var a;
        if (!t.quiet && !t.silent) {
          return e.concat();
        }
        while (++n < i) {
          a = e[n];
          if (applicable(a, t).length !== 0) {
            r.push(a);
          }
        }
        return r;
      }
      function parse(e, t) {
        var r = e.length;
        var i = -1;
        var n = [];
        var u = [];
        var l = 0;
        var f = 0;
        var c = 0;
        var p = 0;
        var v;
        var d;
        var m;
        var g;
        var E;
        var A;
        var C;
        var y;
        var w;
        var x;
        var b;
        while (++i < r) {
          v = e[i];
          d = current(v);
          m = v.history[0] || d;
          g = o({ messages: applicable(v, t) }).messages;
          if (n.length !== 0 && n[n.length - 1].type !== "header") {
            n.push({ type: "separator" });
          }
          n.push({
            type: "header",
            origin: m,
            destination: d,
            name: m || t.defaultName || h,
            stored: Boolean(v.stored),
            moved: Boolean(v.stored && d !== m),
            stats: s(g)
          });
          E = -1;
          A = g.length;
          while (++E < A) {
            C = g[E];
            b = C.ruleId || "";
            w = C.stack || C.message;
            y = C.location;
            y = a(y.end.line && y.end.column ? y : y.start);
            if (t.verbose && C.note) {
              w += "\n" + C.note;
            }
            x = D[C.fatal];
            n.push({
              location: y,
              label: x,
              reason: w,
              ruleId: b,
              source: C.source
            });
            l = Math.max(realLength(y), l);
            f = Math.max(realLength(x), f);
            c = Math.max(realLength(w), c);
            p = Math.max(realLength(b), p);
          }
          u = u.concat(g);
        }
        return {
          rows: n,
          statistics: s(u),
          location: l,
          label: f,
          reason: c,
          ruleId: p
        };
      }
      function compile(e, t, r) {
        var n = r.color;
        var a = e.statistics;
        var u = e.rows;
        var s = u.length;
        var o = -1;
        var l = [];
        var h;
        var p;
        var m;
        var g;
        var E;
        var A;
        var C;
        if (n === null || n === undefined) {
          n = i;
        }
        m = n ? v : d;
        while (++o < s) {
          h = u[o];
          if (h.type === "separator") {
            l.push("");
          } else if (h.type === "header") {
            if (t && !r.defaultName && !h.origin) {
              p = "";
            } else {
              g = m[h.stats.fatal ? "red" : h.stats.total ? "yellow" : "green"];
              p =
                m.underline.open +
                g.open +
                h.name +
                g.close +
                m.underline.close;
              p += h.moved ? " > " + h.destination : "";
            }
            if (!h.stats.total) {
              p += p ? ": " : "";
              if (h.stored) {
                p += m.yellow.open + "written" + m.yellow.close;
              } else {
                p += "no issues found";
              }
            }
            if (p) {
              l.push(p);
            }
          } else {
            g = m[h.label === "error" ? "red" : "yellow"];
            E = h.reason;
            A = "";
            C = E.indexOf("\n");
            if (C !== -1) {
              A = E.slice(C);
              E = E.slice(0, C);
            }
            l.push(
              [
                "",
                padLeft(h.location, e.location),
                padRight(g.open + h.label + g.close, e.label),
                padRight(E, e.reason),
                padRight(h.ruleId, e.ruleId),
                h.source || ""
              ]
                .join("  ")
                .replace(c, "") + A
            );
          }
        }
        if (a.fatal || a.warn) {
          p = [];
          if (a.fatal) {
            p.push(
              [
                m.red.open + f.error + m.red.close,
                a.fatal,
                plural(D.true, a.fatal)
              ].join(" ")
            );
          }
          if (a.warn) {
            p.push(
              [
                m.yellow.open + f.warning + m.yellow.close,
                a.warn,
                plural(D.false, a.warn)
              ].join(" ")
            );
          }
          p = p.join(", ");
          if (a.total !== a.fatal && a.total !== a.warn) {
            p = a.total + " messages (" + p + ")";
          }
          l.push("", p);
        }
        return l.join("\n");
      }
      function applicable(e, t) {
        var r = e.messages;
        var i = r.length;
        var n = -1;
        var a = [];
        if (t.silent) {
          while (++n < i) {
            if (r[n].fatal) {
              a.push(r[n]);
            }
          }
        } else {
          a = r.concat();
        }
        return a;
      }
      function realLength(e) {
        var t = e.indexOf("\n");
        return n(t === -1 ? e : e.slice(0, t));
      }
      function padLeft(e, t) {
        return u(" ", t - realLength(e)) + e;
      }
      function padRight(e, t) {
        return e + u(" ", t - realLength(e));
      }
      function current(e) {
        if (e.filePath) {
          return e.filePath();
        }
        return e.path;
      }
      function plural(e, t) {
        return t === 1 ? e : e + "s";
      }
    },
    function(e, t, r) {
      "use strict";
      var i;
      var n;
      try {
        var a = i;
        n = r(942).Buffer;
      } catch (e) {}
      var u = r(211);
      var s =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      function resolveYamlBinary(e) {
        if (e === null) return false;
        var t,
          r,
          i = 0,
          n = e.length,
          a = s;
        for (r = 0; r < n; r++) {
          t = a.indexOf(e.charAt(r));
          if (t > 64) continue;
          if (t < 0) return false;
          i += 6;
        }
        return i % 8 === 0;
      }
      function constructYamlBinary(e) {
        var t,
          r,
          i = e.replace(/[\r\n=]/g, ""),
          a = i.length,
          u = s,
          o = 0,
          l = [];
        for (t = 0; t < a; t++) {
          if (t % 4 === 0 && t) {
            l.push((o >> 16) & 255);
            l.push((o >> 8) & 255);
            l.push(o & 255);
          }
          o = (o << 6) | u.indexOf(i.charAt(t));
        }
        r = (a % 4) * 6;
        if (r === 0) {
          l.push((o >> 16) & 255);
          l.push((o >> 8) & 255);
          l.push(o & 255);
        } else if (r === 18) {
          l.push((o >> 10) & 255);
          l.push((o >> 2) & 255);
        } else if (r === 12) {
          l.push((o >> 4) & 255);
        }
        if (n) {
          return n.from ? n.from(l) : new n(l);
        }
        return l;
      }
      function representYamlBinary(e) {
        var t = "",
          r = 0,
          i,
          n,
          a = e.length,
          u = s;
        for (i = 0; i < a; i++) {
          if (i % 3 === 0 && i) {
            t += u[(r >> 18) & 63];
            t += u[(r >> 12) & 63];
            t += u[(r >> 6) & 63];
            t += u[r & 63];
          }
          r = (r << 8) + e[i];
        }
        n = a % 3;
        if (n === 0) {
          t += u[(r >> 18) & 63];
          t += u[(r >> 12) & 63];
          t += u[(r >> 6) & 63];
          t += u[r & 63];
        } else if (n === 2) {
          t += u[(r >> 10) & 63];
          t += u[(r >> 4) & 63];
          t += u[(r << 2) & 63];
          t += u[64];
        } else if (n === 1) {
          t += u[(r >> 2) & 63];
          t += u[(r << 4) & 63];
          t += u[64];
          t += u[64];
        }
        return t;
      }
      function isBinary(e) {
        return n && n.isBuffer(e);
      }
      e.exports = new u("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary
      });
    },
    function(e) {
      "use strict";
      var t = [].slice;
      e.exports = wrap;
      function wrap(e, r) {
        var i;
        return wrapped;
        function wrapped() {
          var r = t.call(arguments, 0);
          var n = e.length > r.length;
          var a;
          if (n) {
            r.push(done);
          }
          try {
            a = e.apply(null, r);
          } catch (e) {
            if (n && i) {
              throw e;
            }
            return done(e);
          }
          if (!n) {
            if (a && typeof a.then === "function") {
              a.then(then, done);
            } else if (a instanceof Error) {
              done(a);
            } else {
              then(a);
            }
          }
        }
        function done() {
          if (!i) {
            i = true;
            r.apply(null, arguments);
          }
        }
        function then(e) {
          done(null, e);
        }
      }
    },
    function(e) {
      e.exports = extend;
      var t = Object.prototype.hasOwnProperty;
      function extend() {
        var e = {};
        for (var r = 0; r < arguments.length; r++) {
          var i = arguments[r];
          for (var n in i) {
            if (t.call(i, n)) {
              e[n] = i[n];
            }
          }
        }
        return e;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      e.exports = new i("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(e) {
          return e !== null ? e : "";
        }
      });
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:final-definition", finalDefinition);
      var s = a.start;
      function finalDefinition(e, t) {
        var r = null;
        n(e, visitor, true);
        function visitor(e) {
          var i = s(e).line;
          if (e.type === "root" || u(e)) {
            return;
          }
          if (e.type === "definition") {
            if (r !== null && r > i) {
              t.message(
                "Move definitions to the end of the file (after the node at line `" +
                  r +
                  "`)",
                e
              );
            }
          } else if (r === null) {
            r = i;
          }
        }
      }
    },
    function(e) {
      var t = Object.prototype.toString;
      e.exports = isString;
      function isString(e) {
        return t.call(e) === "[object String]";
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(874);
      e.exports = configure;
      function configure(e, t) {
        e.configuration = new i(t);
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(323);
      var n = create(Error);
      e.exports = n;
      n.eval = create(EvalError);
      n.range = create(RangeError);
      n.reference = create(ReferenceError);
      n.syntax = create(SyntaxError);
      n.type = create(TypeError);
      n.uri = create(URIError);
      n.create = create;
      function create(e) {
        FormattedError.displayName = e.displayName || e.name;
        return FormattedError;
        function FormattedError(t) {
          if (t) {
            t = i.apply(null, arguments);
          }
          return new e(t);
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      if (
        typeof process === "undefined" ||
        process.type === "renderer" ||
        process.browser === true ||
        process.__nwjs
      ) {
        e.exports = r(470);
      } else {
        e.exports = r(970);
      }
    },
    function(e, t, r) {
      var i = r(20);
      var n = r(491);
      e.exports = expandTop;
      var a = "\0SLASH" + Math.random() + "\0";
      var u = "\0OPEN" + Math.random() + "\0";
      var s = "\0CLOSE" + Math.random() + "\0";
      var o = "\0COMMA" + Math.random() + "\0";
      var l = "\0PERIOD" + Math.random() + "\0";
      function numeric(e) {
        return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
      }
      function escapeBraces(e) {
        return e
          .split("\\\\")
          .join(a)
          .split("\\{")
          .join(u)
          .split("\\}")
          .join(s)
          .split("\\,")
          .join(o)
          .split("\\.")
          .join(l);
      }
      function unescapeBraces(e) {
        return e
          .split(a)
          .join("\\")
          .split(u)
          .join("{")
          .split(s)
          .join("}")
          .split(o)
          .join(",")
          .split(l)
          .join(".");
      }
      function parseCommaParts(e) {
        if (!e) return [""];
        var t = [];
        var r = n("{", "}", e);
        if (!r) return e.split(",");
        var i = r.pre;
        var a = r.body;
        var u = r.post;
        var s = i.split(",");
        s[s.length - 1] += "{" + a + "}";
        var o = parseCommaParts(u);
        if (u.length) {
          s[s.length - 1] += o.shift();
          s.push.apply(s, o);
        }
        t.push.apply(t, s);
        return t;
      }
      function expandTop(e) {
        if (!e) return [];
        if (e.substr(0, 2) === "{}") {
          e = "\\{\\}" + e.substr(2);
        }
        return expand(escapeBraces(e), true).map(unescapeBraces);
      }
      function identity(e) {
        return e;
      }
      function embrace(e) {
        return "{" + e + "}";
      }
      function isPadded(e) {
        return /^-?0\d/.test(e);
      }
      function lte(e, t) {
        return e <= t;
      }
      function gte(e, t) {
        return e >= t;
      }
      function expand(e, t) {
        var r = [];
        var a = n("{", "}", e);
        if (!a || /\$$/.test(a.pre)) return [e];
        var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body);
        var o = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body);
        var l = u || o;
        var f = a.body.indexOf(",") >= 0;
        if (!l && !f) {
          if (a.post.match(/,.*\}/)) {
            e = a.pre + "{" + a.body + s + a.post;
            return expand(e);
          }
          return [e];
        }
        var c;
        if (l) {
          c = a.body.split(/\.\./);
        } else {
          c = parseCommaParts(a.body);
          if (c.length === 1) {
            c = expand(c[0], false).map(embrace);
            if (c.length === 1) {
              var h = a.post.length ? expand(a.post, false) : [""];
              return h.map(function(e) {
                return a.pre + c[0] + e;
              });
            }
          }
        }
        var p = a.pre;
        var h = a.post.length ? expand(a.post, false) : [""];
        var v;
        if (l) {
          var d = numeric(c[0]);
          var D = numeric(c[1]);
          var m = Math.max(c[0].length, c[1].length);
          var g = c.length == 3 ? Math.abs(numeric(c[2])) : 1;
          var E = lte;
          var A = D < d;
          if (A) {
            g *= -1;
            E = gte;
          }
          var C = c.some(isPadded);
          v = [];
          for (var y = d; E(y, D); y += g) {
            var w;
            if (o) {
              w = String.fromCharCode(y);
              if (w === "\\") w = "";
            } else {
              w = String(y);
              if (C) {
                var x = m - w.length;
                if (x > 0) {
                  var b = new Array(x + 1).join("0");
                  if (y < 0) w = "-" + b + w.slice(1);
                  else w = b + w;
                }
              }
            }
            v.push(w);
          }
        } else {
          v = i(c, function(e) {
            return expand(e, false);
          });
        }
        for (var F = 0; F < v.length; F++) {
          for (var S = 0; S < h.length; S++) {
            var B = p + v[F] + h[S];
            if (!t || l || B) r.push(B);
          }
        }
        return r;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(945).Buffer;
      var n =
        i.isEncoding ||
        function(e) {
          e = "" + e;
          switch (e && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
      function _normalizeEncoding(e) {
        if (!e) return "utf8";
        var t;
        while (true) {
          switch (e) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return e;
            default:
              if (t) return;
              e = ("" + e).toLowerCase();
              t = true;
          }
        }
      }
      function normalizeEncoding(e) {
        var t = _normalizeEncoding(e);
        if (typeof t !== "string" && (i.isEncoding === n || !n(e)))
          throw new Error("Unknown encoding: " + e);
        return t || e;
      }
      t.StringDecoder = StringDecoder;
      function StringDecoder(e) {
        this.encoding = normalizeEncoding(e);
        var t;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            t = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            t = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            t = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = i.allocUnsafe(t);
      }
      StringDecoder.prototype.write = function(e) {
        if (e.length === 0) return "";
        var t;
        var r;
        if (this.lastNeed) {
          t = this.fillLast(e);
          if (t === undefined) return "";
          r = this.lastNeed;
          this.lastNeed = 0;
        } else {
          r = 0;
        }
        if (r < e.length) return t ? t + this.text(e, r) : this.text(e, r);
        return t || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(e) {
        if (this.lastNeed <= e.length) {
          e.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          );
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
        this.lastNeed -= e.length;
      };
      function utf8CheckByte(e) {
        if (e <= 127) return 0;
        else if (e >> 5 === 6) return 2;
        else if (e >> 4 === 14) return 3;
        else if (e >> 3 === 30) return 4;
        return e >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(e, t, r) {
        var i = t.length - 1;
        if (i < r) return 0;
        var n = utf8CheckByte(t[i]);
        if (n >= 0) {
          if (n > 0) e.lastNeed = n - 1;
          return n;
        }
        if (--i < r || n === -2) return 0;
        n = utf8CheckByte(t[i]);
        if (n >= 0) {
          if (n > 0) e.lastNeed = n - 2;
          return n;
        }
        if (--i < r || n === -2) return 0;
        n = utf8CheckByte(t[i]);
        if (n >= 0) {
          if (n > 0) {
            if (n === 2) n = 0;
            else e.lastNeed = n - 3;
          }
          return n;
        }
        return 0;
      }
      function utf8CheckExtraBytes(e, t, r) {
        if ((t[0] & 192) !== 128) {
          e.lastNeed = 0;
          return "�";
        }
        if (e.lastNeed > 1 && t.length > 1) {
          if ((t[1] & 192) !== 128) {
            e.lastNeed = 1;
            return "�";
          }
          if (e.lastNeed > 2 && t.length > 2) {
            if ((t[2] & 192) !== 128) {
              e.lastNeed = 2;
              return "�";
            }
          }
        }
      }
      function utf8FillLast(e) {
        var t = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, e, t);
        if (r !== undefined) return r;
        if (this.lastNeed <= e.length) {
          e.copy(this.lastChar, t, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        e.copy(this.lastChar, t, 0, e.length);
        this.lastNeed -= e.length;
      }
      function utf8Text(e, t) {
        var r = utf8CheckIncomplete(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = r;
        var i = e.length - (r - this.lastNeed);
        e.copy(this.lastChar, 0, i);
        return e.toString("utf8", t, i);
      }
      function utf8End(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) return t + "�";
        return t;
      }
      function utf16Text(e, t) {
        if ((e.length - t) % 2 === 0) {
          var r = e.toString("utf16le", t);
          if (r) {
            var i = r.charCodeAt(r.length - 1);
            if (i >= 55296 && i <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = e[e.length - 2];
              this.lastChar[1] = e[e.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = e[e.length - 1];
        return e.toString("utf16le", t, e.length - 1);
      }
      function utf16End(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, r);
        }
        return t;
      }
      function base64Text(e, t) {
        var r = (e.length - t) % 3;
        if (r === 0) return e.toString("base64", t);
        this.lastNeed = 3 - r;
        this.lastTotal = 3;
        if (r === 1) {
          this.lastChar[0] = e[e.length - 1];
        } else {
          this.lastChar[0] = e[e.length - 2];
          this.lastChar[1] = e[e.length - 1];
        }
        return e.toString("base64", t, e.length - r);
      }
      function base64End(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed)
          return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return t;
      }
      function simpleWrite(e) {
        return e.toString(this.encoding);
      }
      function simpleEnd(e) {
        return e && e.length ? this.write(e) : "";
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(186);
      e.exports = VMessage;
      function VMessagePrototype() {}
      VMessagePrototype.prototype = Error.prototype;
      VMessage.prototype = new VMessagePrototype();
      var n = VMessage.prototype;
      n.file = "";
      n.name = "";
      n.reason = "";
      n.message = "";
      n.stack = "";
      n.fatal = null;
      n.column = null;
      n.line = null;
      function VMessage(e, t, r) {
        var n;
        var a;
        var u;
        if (typeof t === "string") {
          r = t;
          t = null;
        }
        n = parseOrigin(r);
        a = i(t) || "1:1";
        u = {
          start: { line: null, column: null },
          end: { line: null, column: null }
        };
        if (t && t.position) {
          t = t.position;
        }
        if (t) {
          if (t.start) {
            u = t;
            t = t.start;
          } else {
            u.start = t;
          }
        }
        if (e.stack) {
          this.stack = e.stack;
          e = e.message;
        }
        this.message = e;
        this.name = a;
        this.reason = e;
        this.line = t ? t.line : null;
        this.column = t ? t.column : null;
        this.location = u;
        this.source = n[0];
        this.ruleId = n[1];
      }
      function parseOrigin(e) {
        var t = [null, null];
        var r;
        if (typeof e === "string") {
          r = e.indexOf(":");
          if (r === -1) {
            t[1] = e;
          } else {
            t[0] = e.slice(0, r);
            t[1] = e.slice(r + 1);
          }
        }
        return t;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(902);
      var a = r(49);
      e.exports = autoLink;
      autoLink.locator = a;
      autoLink.notInLink = true;
      var u = "<";
      var s = ">";
      var o = "@";
      var l = "/";
      var f = "mailto:";
      var c = f.length;
      function autoLink(e, t, r) {
        var a = this;
        var h = "";
        var p = t.length;
        var v = 0;
        var d = "";
        var D = false;
        var m = "";
        var g;
        var E;
        var A;
        var C;
        var y;
        if (t.charAt(0) !== u) {
          return;
        }
        v++;
        h = u;
        while (v < p) {
          g = t.charAt(v);
          if (
            i(g) ||
            g === s ||
            g === o ||
            (g === ":" && t.charAt(v + 1) === l)
          ) {
            break;
          }
          d += g;
          v++;
        }
        if (!d) {
          return;
        }
        m += d;
        d = "";
        g = t.charAt(v);
        m += g;
        v++;
        if (g === o) {
          D = true;
        } else {
          if (g !== ":" || t.charAt(v + 1) !== l) {
            return;
          }
          m += l;
          v++;
        }
        while (v < p) {
          g = t.charAt(v);
          if (i(g) || g === s) {
            break;
          }
          d += g;
          v++;
        }
        g = t.charAt(v);
        if (!d || g !== s) {
          return;
        }
        if (r) {
          return true;
        }
        m += d;
        A = m;
        h += m + g;
        E = e.now();
        E.column++;
        E.offset++;
        if (D) {
          if (m.slice(0, c).toLowerCase() === f) {
            A = A.substr(c);
            E.column += c;
            E.offset += c;
          } else {
            m = f + m;
          }
        }
        C = a.inlineTokenizers;
        a.inlineTokenizers = { text: C.text };
        y = a.enterLink();
        A = a.tokenizeInline(A, E);
        a.inlineTokenizers = C;
        y();
        return e(h)({
          type: "link",
          title: null,
          url: n(m, { nonTerminated: false }),
          children: A
        });
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = function(e, t) {
        if (!t) t = {};
        var r = { bools: {}, strings: {}, unknownFn: null };
        if (typeof t["unknown"] === "function") {
          r.unknownFn = t["unknown"];
        }
        if (typeof t["boolean"] === "boolean" && t["boolean"]) {
          r.allBools = true;
        } else {
          []
            .concat(t["boolean"])
            .filter(Boolean)
            .forEach(function(e) {
              r.bools[e] = true;
            });
        }
        var i = {};
        Object.keys(t.alias || {}).forEach(function(e) {
          i[e] = [].concat(t.alias[e]);
          i[e].forEach(function(t) {
            i[t] = [e].concat(
              i[e].filter(function(e) {
                return t !== e;
              })
            );
          });
        });
        []
          .concat(t.string)
          .filter(Boolean)
          .forEach(function(e) {
            r.strings[e] = true;
            if (i[e]) {
              r.strings[i[e]] = true;
            }
          });
        var n = t["default"] || {};
        var a = { _: [] };
        Object.keys(r.bools).forEach(function(e) {
          setArg(e, n[e] === undefined ? false : n[e]);
        });
        var u = [];
        if (e.indexOf("--") !== -1) {
          u = e.slice(e.indexOf("--") + 1);
          e = e.slice(0, e.indexOf("--"));
        }
        function argDefined(e, t) {
          return (
            (r.allBools && /^--[^=]+$/.test(t)) ||
            r.strings[e] ||
            r.bools[e] ||
            i[e]
          );
        }
        function setArg(e, t, n) {
          if (n && r.unknownFn && !argDefined(e, n)) {
            if (r.unknownFn(n) === false) return;
          }
          var u = !r.strings[e] && isNumber(t) ? Number(t) : t;
          setKey(a, e.split("."), u);
          (i[e] || []).forEach(function(e) {
            setKey(a, e.split("."), u);
          });
        }
        function setKey(e, t, i) {
          var n = e;
          t.slice(0, -1).forEach(function(e) {
            if (n[e] === undefined) n[e] = {};
            n = n[e];
          });
          var a = t[t.length - 1];
          if (n[a] === undefined || r.bools[a] || typeof n[a] === "boolean") {
            n[a] = i;
          } else if (Array.isArray(n[a])) {
            n[a].push(i);
          } else {
            n[a] = [n[a], i];
          }
        }
        function aliasIsBoolean(e) {
          return i[e].some(function(e) {
            return r.bools[e];
          });
        }
        for (var s = 0; s < e.length; s++) {
          var o = e[s];
          if (/^--.+=/.test(o)) {
            var l = o.match(/^--([^=]+)=([\s\S]*)$/);
            var f = l[1];
            var c = l[2];
            if (r.bools[f]) {
              c = c !== "false";
            }
            setArg(f, c, o);
          } else if (/^--no-.+/.test(o)) {
            var f = o.match(/^--no-(.+)/)[1];
            setArg(f, false, o);
          } else if (/^--.+/.test(o)) {
            var f = o.match(/^--(.+)/)[1];
            var h = e[s + 1];
            if (
              h !== undefined &&
              !/^-/.test(h) &&
              !r.bools[f] &&
              !r.allBools &&
              (i[f] ? !aliasIsBoolean(f) : true)
            ) {
              setArg(f, h, o);
              s++;
            } else if (/^(true|false)$/.test(h)) {
              setArg(f, h === "true", o);
              s++;
            } else {
              setArg(f, r.strings[f] ? "" : true, o);
            }
          } else if (/^-[^-]+/.test(o)) {
            var p = o.slice(1, -1).split("");
            var v = false;
            for (var d = 0; d < p.length; d++) {
              var h = o.slice(d + 2);
              if (h === "-") {
                setArg(p[d], h, o);
                continue;
              }
              if (/[A-Za-z]/.test(p[d]) && /=/.test(h)) {
                setArg(p[d], h.split("=")[1], o);
                v = true;
                break;
              }
              if (/[A-Za-z]/.test(p[d]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(h)) {
                setArg(p[d], h, o);
                v = true;
                break;
              }
              if (p[d + 1] && p[d + 1].match(/\W/)) {
                setArg(p[d], o.slice(d + 2), o);
                v = true;
                break;
              } else {
                setArg(p[d], r.strings[p[d]] ? "" : true, o);
              }
            }
            var f = o.slice(-1)[0];
            if (!v && f !== "-") {
              if (
                e[s + 1] &&
                !/^(-|--)[^-]/.test(e[s + 1]) &&
                !r.bools[f] &&
                (i[f] ? !aliasIsBoolean(f) : true)
              ) {
                setArg(f, e[s + 1], o);
                s++;
              } else if (e[s + 1] && /true|false/.test(e[s + 1])) {
                setArg(f, e[s + 1] === "true", o);
                s++;
              } else {
                setArg(f, r.strings[f] ? "" : true, o);
              }
            }
          } else {
            if (!r.unknownFn || r.unknownFn(o) !== false) {
              a._.push(r.strings["_"] || !isNumber(o) ? o : Number(o));
            }
            if (t.stopEarly) {
              a._.push.apply(a._, e.slice(s + 1));
              break;
            }
          }
        }
        Object.keys(n).forEach(function(e) {
          if (!hasKey(a, e.split("."))) {
            setKey(a, e.split("."), n[e]);
            (i[e] || []).forEach(function(t) {
              setKey(a, t.split("."), n[e]);
            });
          }
        });
        if (t["--"]) {
          a["--"] = new Array();
          u.forEach(function(e) {
            a["--"].push(e);
          });
        } else {
          u.forEach(function(e) {
            a._.push(e);
          });
        }
        return a;
      };
      function hasKey(e, t) {
        var r = e;
        t.slice(0, -1).forEach(function(e) {
          r = r[e] || {};
        });
        var i = t[t.length - 1];
        return i in r;
      }
      function isNumber(e) {
        if (typeof e === "number") return true;
        if (/^0x[0-9a-f]+$/i.test(e)) return true;
        return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e);
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(439);
      var n = r(67);
      var a = r(171);
      var u = r(109);
      var s = r(537);
      e.exports = factory;
      var o = "\t";
      var l = "\n";
      var f = " ";
      var c = "#";
      var h = "&";
      var p = "(";
      var v = ")";
      var d = "*";
      var D = "+";
      var m = "-";
      var g = ".";
      var E = ":";
      var A = "<";
      var C = ">";
      var y = "[";
      var w = "\\";
      var x = "]";
      var b = "_";
      var F = "`";
      var S = "|";
      var B = "~";
      var k = "!";
      var O = {
        "<": "&lt;",
        ":": "&#x3A;",
        "&": "&amp;",
        "|": "&#x7C;",
        "~": "&#x7E;"
      };
      var P = "shortcut";
      var T = "mailto";
      var I = "https";
      var M = "http";
      var L = /\n\s*$/;
      function factory(e) {
        return escape;
        function escape(t, r, T) {
          var I = this;
          var M = e.gfm;
          var R = e.commonmark;
          var j = e.pedantic;
          var U = R ? [g, v] : [g];
          var N = T && T.children;
          var J = N && N.indexOf(r);
          var z = N && N[J - 1];
          var X = N && N[J + 1];
          var G = t.length;
          var q = u(e);
          var W = -1;
          var _ = [];
          var V = _;
          var Y;
          var H;
          var $;
          var Z;
          var Q;
          var K;
          if (z) {
            Y = text(z) && L.test(z.value);
          } else {
            Y = !T || T.type === "root" || T.type === "paragraph";
          }
          while (++W < G) {
            H = t.charAt(W);
            K = false;
            if (H === "\n") {
              Y = true;
            } else if (
              H === w ||
              H === F ||
              H === d ||
              (H === k && t.charAt(W + 1) === y) ||
              H === y ||
              H === A ||
              (H === h && s(t.slice(W)) > 0) ||
              (H === x && I.inLink) ||
              (M && H === B && t.charAt(W + 1) === B) ||
              (M && H === S && (I.inTable || alignment(t, W))) ||
              (H === b &&
                W > 0 &&
                W < G - 1 &&
                (j || !n(t.charAt(W - 1)) || !n(t.charAt(W + 1)))) ||
              (M && !I.inLink && H === E && protocol(_.join("")))
            ) {
              K = true;
            } else if (Y) {
              if (H === C || H === c || H === d || H === m || H === D) {
                K = true;
              } else if (i(H)) {
                Q = W + 1;
                while (Q < G) {
                  if (!i(t.charAt(Q))) {
                    break;
                  }
                  Q++;
                }
                if (U.indexOf(t.charAt(Q)) !== -1) {
                  X = t.charAt(Q + 1);
                  if (!X || X === f || X === o || X === l) {
                    _.push(t.slice(W, Q));
                    W = Q;
                    H = t.charAt(W);
                    K = true;
                  }
                }
              }
            }
            if (Y && !a(H)) {
              Y = false;
            }
            _.push(K ? one(H) : H);
          }
          if (N && text(r)) {
            if (z && z.referenceType === P) {
              W = -1;
              G = V.length;
              while (++W < G) {
                H = V[W];
                if (H === f || H === o) {
                  continue;
                }
                if (H === p || H === E) {
                  V[W] = one(H);
                }
                break;
              }
              if (text(X) && W === G && X.value.charAt(0) === p) {
                V.push(w);
              }
            }
            if (
              M &&
              !I.inLink &&
              text(z) &&
              t.charAt(0) === E &&
              protocol(z.value.slice(-6))
            ) {
              V[0] = one(E);
            }
            if (text(X) && t.charAt(G - 1) === h && s(h + X.value) !== 0) {
              V[V.length - 1] = one(h);
            }
            if (X && X.type === "link" && t.charAt(G - 1) === k) {
              V[V.length - 1] = one(k);
            }
            if (
              M &&
              text(X) &&
              t.charAt(G - 1) === B &&
              X.value.charAt(0) === B
            ) {
              V.splice(V.length - 1, 0, w);
            }
            $ = text(z) && n(z.value.slice(-1));
            Z = text(X) && n(X.value.charAt(0));
            if (G === 1) {
              if (t === b && (j || !$ || !Z)) {
                V.unshift(w);
              }
            } else {
              if (t.charAt(0) === b && (j || !$ || !n(t.charAt(1)))) {
                V.unshift(w);
              }
              if (t.charAt(G - 1) === b && (j || !Z || !n(t.charAt(G - 2)))) {
                V.splice(V.length - 1, 0, w);
              }
            }
          }
          return V.join("");
          function one(e) {
            return q.indexOf(e) === -1 ? O[e] : w + e;
          }
        }
      }
      function alignment(e, t) {
        var r = e.lastIndexOf(l, t);
        var i = e.indexOf(l, t);
        var n;
        i = i === -1 ? e.length : i;
        while (++r < i) {
          n = e.charAt(r);
          if (n !== E && n !== m && n !== f && n !== S) {
            return false;
          }
        }
        return true;
      }
      function text(e) {
        return e && e.type === "text";
      }
      function protocol(e) {
        var t = e.slice(-6).toLowerCase();
        return t === T || t.slice(-5) === I || t.slice(-4) === M;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(485);
      var n = r(64).inherits;
      var a = r(123);
      var u = r(96);
      var s = r(340);
      e.exports = FileSet;
      function FileSet() {
        var e = this;
        e.files = [];
        e.origins = [];
        e.expected = 0;
        e.actual = 0;
        e.pipeline = a();
        e.plugins = [];
        i.init.call(e);
        e.on("one", one.bind(e));
      }
      n(FileSet, i.EventEmitter);
      FileSet.prototype.valueOf = valueOf;
      FileSet.prototype.use = use;
      FileSet.prototype.add = add;
      function valueOf() {
        return this.files;
      }
      function use(e) {
        var t = this;
        var r = t.pipeline;
        var i = false;
        if (e && e.pluginId) {
          i = t.plugins.some(matches);
        }
        if (!i && t.plugins.indexOf(e) !== -1) {
          i = true;
        }
        if (!i) {
          t.plugins.push(e);
          r.use(e);
        }
        return t;
        function matches(t) {
          return t.pluginId === e.pluginId;
        }
      }
      function add(e) {
        var t = this;
        var r;
        if (s(e)) {
          e = u(e);
        }
        r = e.history[0];
        if (t.origins.indexOf(r) !== -1) {
          return t;
        }
        t.origins.push(r);
        t.valueOf().push(e);
        t.expected++;
        setImmediate(add);
        return t;
        function add() {
          t.emit("add", e);
        }
      }
      function one() {
        var e = this;
        e.actual++;
        if (e.actual >= e.expected) {
          e.emit("done");
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(897);
      var n = r(336);
      var a = r(860);
      e.exports = parse;
      parse.Parser = a;
      function parse(e) {
        var t = this.data("settings");
        var r = i(a);
        r.prototype.options = n(r.prototype.options, t, e);
        this.Parser = r;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(176);
      e.exports = imageReference;
      var n = "[";
      var a = "]";
      var u = "!";
      function imageReference(e) {
        return u + n + (this.encode(e.alt, e) || "") + a + i(e);
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i(
        "remark-lint:no-file-name-consecutive-dashes",
        noFileNameConsecutiveDashes
      );
      var n = "Do not use consecutive dashes in a file name";
      function noFileNameConsecutiveDashes(e, t) {
        if (t.stem && /-{2,}/.test(t.stem)) {
          t.message(n);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:fenced-code-marker", fencedCodeMarker);
      var s = { "`": true, "~": true, null: true };
      function fencedCodeMarker(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (s[r] !== true) {
          t.fail(
            "Invalid fenced code marker `" +
              r +
              "`: use either `'consistent'`, `` '`' ``, or `'~'`"
          );
        }
        n(e, "code", visitor);
        function visitor(e) {
          var n;
          if (!u(e)) {
            n = i
              .substr(a.start(e).offset, 4)
              .trimLeft()
              .charAt(0);
            if (s[n] === true) {
              if (r) {
                if (n !== r) {
                  t.message("Fenced code should use " + r + " as a marker", e);
                }
              } else {
                r = n;
              }
            }
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(727);
      e.exports = new i({
        include: [r(95)],
        implicit: [r(788), r(900)],
        explicit: [r(334), r(157), r(697), r(713)]
      });
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = thematicBreak;
      var t = "\t";
      var r = "\n";
      var i = " ";
      var n = "*";
      var a = "-";
      var u = "_";
      var s = 3;
      function thematicBreak(e, o, l) {
        var f = -1;
        var c = o.length + 1;
        var h = "";
        var p;
        var v;
        var d;
        var D;
        while (++f < c) {
          p = o.charAt(f);
          if (p !== t && p !== i) {
            break;
          }
          h += p;
        }
        if (p !== n && p !== a && p !== u) {
          return;
        }
        v = p;
        h += p;
        d = 1;
        D = "";
        while (++f < c) {
          p = o.charAt(f);
          if (p === v) {
            d++;
            h += D + v;
            D = "";
          } else if (p === i) {
            D += p;
          } else if (d >= s && (!p || p === r)) {
            h += D;
            if (l) {
              return true;
            }
            return e(h)({ type: "thematicBreak" });
          } else {
            return;
          }
        }
      }
    },
    ,
    function(e) {
      e.exports = require("assert");
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(774);
      var n = r(176);
      e.exports = linkReference;
      var a = "[";
      var u = "]";
      var s = "shortcut";
      var o = "collapsed";
      function linkReference(e) {
        var t = this;
        var r = e.referenceType;
        var l = t.enterLinkReference(t, e);
        var f = t.all(e).join("");
        l();
        if (r === s || r === o) {
          f = i(f, e.label || e.identifier);
        }
        return a + f + u + n(e);
      }
    },
    function(e) {
      "use strict";
      e.exports = lineBreak;
      var t = "\\";
      var r = "\n";
      var i = " ";
      var n = t + r;
      var a = i + i + r;
      function lineBreak() {
        return this.options.commonmark ? n : a;
      }
    },
    function(e, t, r) {
      "use strict";
      function _classCallCheck(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var i = r(945).Buffer;
      var n = r(64);
      function copyBuffer(e, t, r) {
        e.copy(t, r);
      }
      e.exports = (function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        BufferList.prototype.push = function push(e) {
          var t = { data: e, next: null };
          if (this.length > 0) this.tail.next = t;
          else this.head = t;
          this.tail = t;
          ++this.length;
        };
        BufferList.prototype.unshift = function unshift(e) {
          var t = { data: e, next: this.head };
          if (this.length === 0) this.tail = t;
          this.head = t;
          ++this.length;
        };
        BufferList.prototype.shift = function shift() {
          if (this.length === 0) return;
          var e = this.head.data;
          if (this.length === 1) this.head = this.tail = null;
          else this.head = this.head.next;
          --this.length;
          return e;
        };
        BufferList.prototype.clear = function clear() {
          this.head = this.tail = null;
          this.length = 0;
        };
        BufferList.prototype.join = function join(e) {
          if (this.length === 0) return "";
          var t = this.head;
          var r = "" + t.data;
          while ((t = t.next)) {
            r += e + t.data;
          }
          return r;
        };
        BufferList.prototype.concat = function concat(e) {
          if (this.length === 0) return i.alloc(0);
          if (this.length === 1) return this.head.data;
          var t = i.allocUnsafe(e >>> 0);
          var r = this.head;
          var n = 0;
          while (r) {
            copyBuffer(r.data, t, n);
            n += r.data.length;
            r = r.next;
          }
          return t;
        };
        return BufferList;
      })();
      if (n && n.inspect && n.inspect.custom) {
        e.exports.prototype[n.inspect.custom] = function() {
          var e = n.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        };
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(109);
      var a = r(694);
      e.exports = setOptions;
      function setOptions(e) {
        var t = this;
        var r = t.options;
        var u;
        var s;
        if (e == null) {
          e = {};
        } else if (typeof e === "object") {
          e = i(e);
        } else {
          throw new Error("Invalid value `" + e + "` for setting `options`");
        }
        for (u in a) {
          s = e[u];
          if (s == null) {
            s = r[u];
          }
          if (
            (u !== "blocks" && typeof s !== "boolean") ||
            (u === "blocks" && typeof s !== "object")
          ) {
            throw new Error(
              "Invalid value `" + s + "` for setting `options." + u + "`"
            );
          }
          e[u] = s;
        }
        t.options = e;
        t.escape = n(e);
        return t;
      }
    },
    ,
    function(e) {
      var t = Array.prototype.slice;
      e.exports = co;
      function co(e) {
        var r = isGeneratorFunction(e);
        return function(i) {
          var n = this;
          var a = e;
          if (r) {
            var u = t.call(arguments),
              s = u.length;
            var o = s && "function" == typeof u[s - 1];
            i = o ? u.pop() : error;
            a = e.apply(this, u);
          } else {
            i = i || error;
          }
          next();
          function exit(e, t) {
            setImmediate(function() {
              i.call(n, e, t);
            });
          }
          function next(e, r) {
            var i;
            if (arguments.length > 2) r = t.call(arguments, 1);
            if (e) {
              try {
                i = a.throw(e);
              } catch (e) {
                return exit(e);
              }
            }
            if (!e) {
              try {
                i = a.next(r);
              } catch (e) {
                return exit(e);
              }
            }
            if (i.done) return exit(null, i.value);
            i.value = toThunk(i.value, n);
            if ("function" == typeof i.value) {
              var u = false;
              try {
                i.value.call(n, function() {
                  if (u) return;
                  u = true;
                  next.apply(n, arguments);
                });
              } catch (e) {
                setImmediate(function() {
                  if (u) return;
                  u = true;
                  next(e);
                });
              }
              return;
            }
            next(
              new TypeError(
                "You may only yield a function, promise, generator, array, or object, " +
                  'but the following was passed: "' +
                  String(i.value) +
                  '"'
              )
            );
          }
        };
      }
      function toThunk(e, t) {
        if (isGeneratorFunction(e)) {
          return co(e.call(t));
        }
        if (isGenerator(e)) {
          return co(e);
        }
        if (isPromise(e)) {
          return promiseToThunk(e);
        }
        if ("function" == typeof e) {
          return e;
        }
        if (isObject(e) || Array.isArray(e)) {
          return objectToThunk.call(t, e);
        }
        return e;
      }
      function objectToThunk(e) {
        var t = this;
        var r = Array.isArray(e);
        return function(i) {
          var n = Object.keys(e);
          var a = n.length;
          var u = r ? new Array(a) : new e.constructor();
          var s;
          if (!a) {
            setImmediate(function() {
              i(null, u);
            });
            return;
          }
          if (!r) {
            for (var o = 0; o < a; o++) {
              u[n[o]] = undefined;
            }
          }
          for (var o = 0; o < n.length; o++) {
            run(e[n[o]], n[o]);
          }
          function run(e, r) {
            if (s) return;
            try {
              e = toThunk(e, t);
              if ("function" != typeof e) {
                u[r] = e;
                return --a || i(null, u);
              }
              e.call(t, function(e, t) {
                if (s) return;
                if (e) {
                  s = true;
                  return i(e);
                }
                u[r] = t;
                --a || i(null, u);
              });
            } catch (e) {
              s = true;
              i(e);
            }
          }
        };
      }
      function promiseToThunk(e) {
        return function(t) {
          e.then(function(e) {
            t(null, e);
          }, t);
        };
      }
      function isPromise(e) {
        return e && "function" == typeof e.then;
      }
      function isGenerator(e) {
        return e && "function" == typeof e.next && "function" == typeof e.throw;
      }
      function isGeneratorFunction(e) {
        return e && e.constructor && "GeneratorFunction" == e.constructor.name;
      }
      function isObject(e) {
        return e && Object == e.constructor;
      }
      function error(e) {
        if (!e) return;
        setImmediate(function() {
          throw e;
        });
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-set-pipeline:stdin");
      var n = r(96);
      var a = r(737);
      e.exports = stdin;
      function stdin(e, t, r) {
        var u = t.streamIn;
        var s;
        if (t.files && t.files.length !== 0) {
          i("Ignoring `streamIn`");
          if (t.filePath) {
            s = new Error(
              "Do not pass both `--file-path` and real files.\nDid you mean to pass stdin instead of files?"
            );
          }
          r(s);
          return;
        }
        if (u.isTTY) {
          i("Cannot read from `tty` stream");
          r(new Error("No input"));
          return;
        }
        i("Reading from `streamIn`");
        u.pipe(a({ encoding: "string" }, read));
        function read(a) {
          var u = n(t.filePath || undefined);
          i("Read from `streamIn`");
          u.cwd = t.cwd;
          u.contents = a;
          u.data.unifiedEngineGiven = true;
          u.data.unifiedEngineStreamIn = true;
          e.files = [u];
          t.out = t.out === null || t.out === undefined ? true : t.out;
          r();
        }
      }
    },
    ,
    function(e, t, r) {
      var i = r(16);
      var n = Object.create(null);
      var a = r(83);
      e.exports = i(inflight);
      function inflight(e, t) {
        if (n[e]) {
          n[e].push(t);
          return null;
        } else {
          n[e] = [t];
          return makeres(e);
        }
      }
      function makeres(e) {
        return a(function RES() {
          var t = n[e];
          var r = t.length;
          var i = slice(arguments);
          try {
            for (var a = 0; a < r; a++) {
              t[a].apply(null, i);
            }
          } finally {
            if (t.length > r) {
              t.splice(0, r);
              process.nextTick(function() {
                RES.apply(null, i);
              });
            } else {
              delete n[e];
            }
          }
        });
      }
      function slice(e) {
        var t = e.length;
        var r = [];
        for (var i = 0; i < t; i++) r[i] = e[i];
        return r;
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = root;
      var t = "\n";
      function root(e) {
        return this.block(e) + t;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(7);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i(
        "remark-lint:checkbox-content-indent",
        checkboxContentIndent
      );
      var o = u.start;
      var l = u.end;
      var f = "Checkboxes should be followed by a single character";
      function checkboxContentIndent(e, t) {
        var r = String(t);
        var i = n(t);
        a(e, "listItem", visitor);
        function visitor(e) {
          var n;
          var a;
          var u;
          if (typeof e.checked !== "boolean" || s(e)) {
            return;
          }
          n = o(e).offset;
          a = (e.children.length === 0 ? l(e) : o(e.children[0])).offset;
          while (/[^\S\n]/.test(r.charAt(a))) {
            a++;
          }
          u = r.slice(n, a);
          u = u.slice(u.indexOf("]") + 1);
          if (u.length !== 1) {
            t.message(f, {
              start: i.toPosition(a - u.length + 1),
              end: i.toPosition(a)
            });
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(175);
      e.exports = normalize;
      function normalize(e) {
        return i(e).toLowerCase();
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = html;
      function html(e) {
        return e.value;
      }
    },
    ,
    ,
    function(e) {
      e.exports = require("os");
    },
    function(e) {
      "use strict";
      var t = 1;
      var r = 2;
      function stripWithoutWhitespace() {
        return "";
      }
      function stripWithWhitespace(e, t, r) {
        return e.slice(t, r).replace(/\S/g, " ");
      }
      e.exports = function(e, i) {
        i = i || {};
        var n;
        var a;
        var u = false;
        var s = false;
        var o = 0;
        var l = "";
        var f =
          i.whitespace === false ? stripWithoutWhitespace : stripWithWhitespace;
        for (var c = 0; c < e.length; c++) {
          n = e[c];
          a = e[c + 1];
          if (!s && n === '"') {
            var h = e[c - 1] === "\\" && e[c - 2] !== "\\";
            if (!h) {
              u = !u;
            }
          }
          if (u) {
            continue;
          }
          if (!s && n + a === "//") {
            l += e.slice(o, c);
            o = c;
            s = t;
            c++;
          } else if (s === t && n + a === "\r\n") {
            c++;
            s = false;
            l += f(e, o, c);
            o = c;
            continue;
          } else if (s === t && n === "\n") {
            s = false;
            l += f(e, o, c);
            o = c;
          } else if (!s && n + a === "/*") {
            l += e.slice(o, c);
            o = c;
            s = r;
            c++;
            continue;
          } else if (s === r && n + a === "*/") {
            c++;
            s = false;
            l += f(e, o, c + 1);
            o = c + 1;
            continue;
          }
        }
        return l + (s ? f(e.substr(o)) : e.substr(o));
      };
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:table-cell-padding", tableCellPadding);
      var s = a.start;
      var o = a.end;
      var l = { null: true, padded: true, compact: true };
      function tableCellPadding(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (l[r] !== true) {
          t.fail("Invalid table-cell-padding style `" + r + "`");
        }
        n(e, "table", visitor);
        function visitor(e) {
          var t = e.children;
          var a = new Array(e.align.length);
          var l = u(e) ? -1 : t.length;
          var f = -1;
          var c = [];
          var h;
          var p;
          var v;
          var d;
          var D;
          var m;
          var g;
          var E;
          var A;
          var C;
          var y;
          while (++f < l) {
            p = t[f];
            v = p.children;
            D = v.length;
            d = -2;
            g = null;
            y = undefined;
            while (++d < D) {
              m = g;
              g = v[d + 1];
              E = i.slice(
                m ? o(m).offset : s(p).offset,
                g ? s(g).offset : o(p).offset
              );
              A = E.indexOf("|");
              if (m && m.children.length !== 0 && y !== undefined) {
                c.push({ node: m, start: y, end: A, index: d });
                a[d] = Math.max(a[d] || 0, size(m));
              } else {
                y = undefined;
              }
              if (g && g.children.length !== 0) {
                y = E.length - A - 1;
              } else {
                y = undefined;
              }
            }
          }
          if (r) {
            h = r === "padded" ? 1 : 0;
          } else {
            h = c[0] && (!c[0].start || !c[0].end) ? 0 : 1;
          }
          f = -1;
          l = c.length;
          while (++f < l) {
            C = c[f];
            checkSide("start", C, h, a);
            checkSide("end", C, h, a);
          }
          return n.SKIP;
        }
        function checkSide(e, r, i, n) {
          var a = r.node;
          var u = r[e];
          var s = r.index;
          var o;
          if (u === undefined || u === i) {
            return;
          }
          o = "Cell should be ";
          if (i === 0) {
            o += "compact";
            if (size(a) < n[s]) {
              return;
            }
          } else {
            o += "padded";
            if (u > i) {
              o += " with 1 space, not " + u;
              if (size(a) < n[s]) {
                return;
              }
            }
          }
          t.message(o, a.position[e]);
        }
      }
      function size(e) {
        return o(e).offset - s(e).offset;
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = decimal;
      function decimal(e) {
        var t = typeof e === "string" ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(308);
      var n = r(197);
      var a = r(25);
      var u = r(908);
      var s = r(617);
      e.exports = encode;
      encode.escape = escape;
      var o = {}.hasOwnProperty;
      var l = ['"', "'", "<", ">", "&", "`"];
      var f = construct();
      var c = toExpression(l);
      var h = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var p = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
      function encode(e, t) {
        var r = t || {};
        var i = r.subset;
        var n = i ? toExpression(i) : c;
        var a = r.escapeOnly;
        var u = r.omitOptionalSemicolons;
        e = e.replace(n, function(e, t, i) {
          return one(e, i.charAt(t + 1), r);
        });
        if (i || a) {
          return e;
        }
        return e.replace(h, replaceSurrogatePair).replace(p, replaceBmp);
        function replaceSurrogatePair(e, t, r) {
          return toHexReference(
            (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536,
            r.charAt(t + 2),
            u
          );
        }
        function replaceBmp(e, t, i) {
          return one(e, i.charAt(t + 1), r);
        }
      }
      function escape(e) {
        return encode(e, { escapeOnly: true, useNamedReferences: true });
      }
      function one(e, t, r) {
        var i = r.useShortestReferences;
        var n = r.omitOptionalSemicolons;
        var a;
        var u;
        if ((i || r.useNamedReferences) && o.call(f, e)) {
          a = toNamed(f[e], t, n, r.attribute);
        }
        if (i || !a) {
          u = toHexReference(e.charCodeAt(0), t, n);
        }
        if (a && (!i || a.length < u.length)) {
          return a;
        }
        return u;
      }
      function toNamed(e, t, r, i) {
        var a = "&" + e;
        if (
          r &&
          o.call(n, e) &&
          s.indexOf(e) === -1 &&
          (!i || (t && t !== "=" && !u(t)))
        ) {
          return a;
        }
        return a + ";";
      }
      function toHexReference(e, t, r) {
        var i = "&#x" + e.toString(16).toUpperCase();
        return r && t && !a(t) ? i : i + ";";
      }
      function toExpression(e) {
        return new RegExp("[" + e.join("") + "]", "g");
      }
      function construct() {
        var e = {};
        var t;
        for (t in i) {
          e[i[t]] = t;
        }
        return e;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(514);
      e.exports = Compiler;
      function Compiler(e, t) {
        this.inLink = false;
        this.inTable = false;
        this.tree = e;
        this.file = t;
        this.options = i(this.options);
        this.setOptions({});
      }
      var a = Compiler.prototype;
      a.enterLink = n("inLink", false);
      a.enterTable = n("inTable", false);
      a.enterLinkReference = r(42);
      a.options = r(901);
      a.setOptions = r(34);
      a.compile = r(274);
      a.visit = r(76);
      a.all = r(872);
      a.block = r(781);
      a.visitOrderedItems = r(579);
      a.visitUnorderedItems = r(823);
      a.visitors = {
        root: r(413),
        text: r(812),
        heading: r(269),
        paragraph: r(763),
        blockquote: r(840),
        list: r(998),
        listItem: r(181),
        inlineCode: r(965),
        code: r(540),
        html: r(428),
        thematicBreak: r(37),
        strong: r(730),
        emphasis: r(738),
        break: r(401),
        delete: r(756),
        link: r(629),
        linkReference: r(400),
        imageReference: r(374),
        definition: r(283),
        image: r(859),
        footnote: r(938),
        footnoteReference: r(749),
        footnoteDefinition: r(174),
        table: r(515),
        tableCell: r(960)
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(138);
      var n = r(49);
      var a = r(587).tag;
      e.exports = inlineHTML;
      inlineHTML.locator = n;
      var u = "<";
      var s = "?";
      var o = "!";
      var l = "/";
      var f = /^<a /i;
      var c = /^<\/a>/i;
      function inlineHTML(e, t, r) {
        var n = this;
        var h = t.length;
        var p;
        var v;
        if (t.charAt(0) !== u || h < 3) {
          return;
        }
        p = t.charAt(1);
        if (!i(p) && p !== s && p !== o && p !== l) {
          return;
        }
        v = t.match(a);
        if (!v) {
          return;
        }
        if (r) {
          return true;
        }
        v = v[0];
        if (!n.inLink && f.test(v)) {
          n.inLink = true;
        } else if (n.inLink && c.test(v)) {
          n.inLink = false;
        }
        return e(v)({ type: "html", value: v });
      }
    },
    function(e) {
      e.exports = [
        "md",
        "markdown",
        "mdown",
        "mkdn",
        "mkd",
        "mdwn",
        "mkdown",
        "ron"
      ];
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i("remark-lint:file-extension", fileExtension);
      function fileExtension(e, t, r) {
        var i = t.extname;
        r = typeof r === "string" ? r : "md";
        if (i && i.slice(1) !== r) {
          t.message("Invalid extension: use `" + r + "`");
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = factory;
      var t = "\\";
      function factory(e, r) {
        return unescape;
        function unescape(i) {
          var n = 0;
          var a = i.indexOf(t);
          var u = e[r];
          var s = [];
          var o;
          while (a !== -1) {
            s.push(i.slice(n, a));
            n = a + 1;
            o = i.charAt(n);
            if (!o || u.indexOf(o) === -1) {
              s.push(t);
            }
            a = i.indexOf(t, n + 1);
          }
          s.push(i.slice(n));
          return s.join("");
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      const i = r(495);
      const n = r(682);
      e.exports = i("remark-lint:prohibited-strings", prohibitedStrings);
      function testProhibited(e, t) {
        const r = new RegExp(`(\\.|@[a-z0-9/-]*)?(${e.no})(\\.\\w)?`, "g");
        let i = null;
        while ((i = r.exec(t))) {
          if (!i[1] && !i[3]) {
            return i[2];
          }
        }
        return false;
      }
      function prohibitedStrings(e, t, r) {
        n(e, "text", checkText);
        function checkText(e) {
          const i = e.value;
          r.forEach(r => {
            const n = testProhibited(r, i);
            if (n) {
              t.message(`Use "${r.yes}" instead of "${n}"`, e);
            }
          });
        }
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = hidden;
      function hidden(e) {
        if (typeof e !== "string") {
          throw new Error("Expected string");
        }
        return e.charAt(0) === ".";
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(426);
      e.exports = footnoteDefinition;
      footnoteDefinition.notInList = true;
      footnoteDefinition.notInBlock = true;
      var a = "\\";
      var u = "\n";
      var s = "\t";
      var o = " ";
      var l = "[";
      var f = "]";
      var c = "^";
      var h = ":";
      var p = /^( {4}|\t)?/gm;
      function footnoteDefinition(e, t, r) {
        var v = this;
        var d = v.offset;
        var D;
        var m;
        var g;
        var E;
        var A;
        var C;
        var y;
        var w;
        var x;
        var b;
        var F;
        var S;
        if (!v.options.footnotes) {
          return;
        }
        D = 0;
        m = t.length;
        g = "";
        E = e.now();
        A = E.line;
        while (D < m) {
          x = t.charAt(D);
          if (!i(x)) {
            break;
          }
          g += x;
          D++;
        }
        if (t.charAt(D) !== l || t.charAt(D + 1) !== c) {
          return;
        }
        g += l + c;
        D = g.length;
        y = "";
        while (D < m) {
          x = t.charAt(D);
          if (x === f) {
            break;
          } else if (x === a) {
            y += x;
            D++;
            x = t.charAt(D);
          }
          y += x;
          D++;
        }
        if (!y || t.charAt(D) !== f || t.charAt(D + 1) !== h) {
          return;
        }
        if (r) {
          return true;
        }
        b = y;
        g += y + f + h;
        D = g.length;
        while (D < m) {
          x = t.charAt(D);
          if (x !== s && x !== o) {
            break;
          }
          g += x;
          D++;
        }
        E.column += g.length;
        E.offset += g.length;
        y = "";
        C = "";
        w = "";
        while (D < m) {
          x = t.charAt(D);
          if (x === u) {
            w = x;
            D++;
            while (D < m) {
              x = t.charAt(D);
              if (x !== u) {
                break;
              }
              w += x;
              D++;
            }
            y += w;
            w = "";
            while (D < m) {
              x = t.charAt(D);
              if (x !== o) {
                break;
              }
              w += x;
              D++;
            }
            if (w.length === 0) {
              break;
            }
            y += w;
          }
          if (y) {
            C += y;
            y = "";
          }
          C += x;
          D++;
        }
        g += C;
        C = C.replace(p, function(e) {
          d[A] = (d[A] || 0) + e.length;
          A++;
          return "";
        });
        F = e(g);
        S = v.enterBlock();
        C = v.tokenizeBlock(C, E);
        S();
        return F({
          type: "footnoteDefinition",
          identifier: n(b),
          label: b,
          children: C
        });
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:rule-style", ruleStyle);
      var s = a.start;
      var o = a.end;
      function ruleStyle(e, t, r) {
        var i = String(t);
        r = typeof r === "string" && r !== "consistent" ? r : null;
        if (r !== null && /[^-_* ]/.test(r)) {
          t.fail(
            "Invalid preferred rule-style: provide a valid markdown rule, or `'consistent'`"
          );
        }
        n(e, "thematicBreak", visitor);
        function visitor(e) {
          var n = s(e).offset;
          var a = o(e).offset;
          var l;
          if (!u(e)) {
            l = i.slice(n, a);
            if (r) {
              if (l !== r) {
                t.message("Rules should use `" + r + "`", e);
              }
            } else {
              r = l;
            }
          }
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      function _typeof(e) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(e) {
            return typeof e;
          };
        } else {
          _typeof = function _typeof(e) {
            return e &&
              typeof Symbol === "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
        }
        return _typeof(e);
      }
      t.log = log;
      t.formatArgs = formatArgs;
      t.save = save;
      t.load = load;
      t.useColors = useColors;
      t.storage = localstorage();
      t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (
          typeof window !== "undefined" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
        ) {
          return true;
        }
        if (
          typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ) {
          return false;
        }
        return (
          (typeof document !== "undefined" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window !== "undefined" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }
      function formatArgs(t) {
        t[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          t[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          e.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        var r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        var i = 0;
        var n = 0;
        t[0].replace(/%[a-zA-Z%]/g, function(e) {
          if (e === "%%") {
            return;
          }
          i++;
          if (e === "%c") {
            n = i;
          }
        });
        t.splice(n, 0, r);
      }
      function log() {
        var e;
        return (
          (typeof console === "undefined" ? "undefined" : _typeof(console)) ===
            "object" &&
          console.log &&
          (e = console).log.apply(e, arguments)
        );
      }
      function save(e) {
        try {
          if (e) {
            t.storage.setItem("debug", e);
          } else {
            t.storage.removeItem("debug");
          }
        } catch (e) {}
      }
      function load() {
        var e;
        try {
          e = t.storage.getItem("debug");
        } catch (e) {}
        if (!e && typeof process !== "undefined" && "env" in process) {
          e = process.env.DEBUG;
        }
        return e;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (e) {}
      }
      e.exports = r(772)(t);
      var i = e.exports.formatters;
      i.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    },
    ,
    ,
    ,
    function(e, t, r) {
      var i = r(159);
      var n = r(589).join;
      var a = r(281);
      var u = "/etc";
      var s = process.platform === "win32";
      var o = s ? process.env.USERPROFILE : process.env.HOME;
      e.exports = function(e, t, l, f) {
        if ("string" !== typeof e)
          throw new Error("rc(name): name *must* be string");
        if (!l) l = r(359)(process.argv.slice(2));
        t = ("string" === typeof t ? i.json(t) : t) || {};
        f = f || i.parse;
        var c = i.env(e + "_");
        var h = [t];
        var p = [];
        function addConfigFile(e) {
          if (p.indexOf(e) >= 0) return;
          var t = i.file(e);
          if (t) {
            h.push(f(t));
            p.push(e);
          }
        }
        if (!s) [n(u, e, "config"), n(u, e + "rc")].forEach(addConfigFile);
        if (o)
          [
            n(o, ".config", e, "config"),
            n(o, ".config", e),
            n(o, "." + e, "config"),
            n(o, "." + e + "rc")
          ].forEach(addConfigFile);
        addConfigFile(i.find("." + e + "rc"));
        if (c.config) addConfigFile(c.config);
        if (l.config) addConfigFile(l.config);
        return a.apply(
          null,
          h.concat([
            c,
            l,
            p.length ? { configs: p, config: p[p.length - 1] } : undefined
          ])
        );
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      e.exports = {
        name: "remark",
        version: "10.0.1",
        description: "Markdown processor powered by plugins",
        license: "MIT",
        keywords: [
          "markdown",
          "abstract",
          "syntax",
          "tree",
          "ast",
          "parse",
          "stringify",
          "process"
        ],
        homepage: "https://remark.js.org",
        repository:
          "https://github.com/remarkjs/remark/tree/master/packages/remark",
        bugs: "https://github.com/remarkjs/remark/issues",
        author: "Titus Wormer <tituswormer@gmail.com> (https://wooorm.com)",
        contributors: [
          "Titus Wormer <tituswormer@gmail.com> (https://wooorm.com)"
        ],
        files: ["index.js"],
        dependencies: {
          "remark-parse": "^6.0.0",
          "remark-stringify": "^6.0.0",
          unified: "^7.0.0"
        },
        devDependencies: { tape: "^4.9.1" },
        scripts: { test: "tape test.js" },
        xo: false,
        _resolved: "https://registry.npmjs.org/remark/-/remark-10.0.1.tgz",
        _integrity:
          "sha512-E6lMuoLIy2TyiokHprMjcWNJ5UxfGQjaMSMhV+f4idM625UjjK4j798+gPs5mfjzDE6vL0oFKVeZM6gZVSVrzQ==",
        _from: "remark@10.0.1"
      };
    },
    function(e) {
      e.exports = require("events");
    },
    ,
    function(e, t, r) {
      e.exports = globSync;
      globSync.GlobSync = GlobSync;
      var i = r(66);
      var n = r(129);
      var a = r(620);
      var u = a.Minimatch;
      var s = r(327).Glob;
      var o = r(64);
      var l = r(589);
      var f = r(393);
      var c = r(969);
      var h = r(922);
      var p = h.alphasort;
      var v = h.alphasorti;
      var d = h.setopts;
      var D = h.ownProp;
      var m = h.childrenIgnored;
      var g = h.isIgnored;
      function globSync(e, t) {
        if (typeof t === "function" || arguments.length === 3)
          throw new TypeError(
            "callback provided to sync glob\n" +
              "See: https://github.com/isaacs/node-glob/issues/167"
          );
        return new GlobSync(e, t).found;
      }
      function GlobSync(e, t) {
        if (!e) throw new Error("must provide pattern");
        if (typeof t === "function" || arguments.length === 3)
          throw new TypeError(
            "callback provided to sync glob\n" +
              "See: https://github.com/isaacs/node-glob/issues/167"
          );
        if (!(this instanceof GlobSync)) return new GlobSync(e, t);
        d(this, e, t);
        if (this.noprocess) return this;
        var r = this.minimatch.set.length;
        this.matches = new Array(r);
        for (var i = 0; i < r; i++) {
          this._process(this.minimatch.set[i], i, false);
        }
        this._finish();
      }
      GlobSync.prototype._finish = function() {
        f(this instanceof GlobSync);
        if (this.realpath) {
          var e = this;
          this.matches.forEach(function(t, r) {
            var i = (e.matches[r] = Object.create(null));
            for (var a in t) {
              try {
                a = e._makeAbs(a);
                var u = n.realpathSync(a, e.realpathCache);
                i[u] = true;
              } catch (t) {
                if (t.syscall === "stat") i[e._makeAbs(a)] = true;
                else throw t;
              }
            }
          });
        }
        h.finish(this);
      };
      GlobSync.prototype._process = function(e, t, r) {
        f(this instanceof GlobSync);
        var i = 0;
        while (typeof e[i] === "string") {
          i++;
        }
        var n;
        switch (i) {
          case e.length:
            this._processSimple(e.join("/"), t);
            return;
          case 0:
            n = null;
            break;
          default:
            n = e.slice(0, i).join("/");
            break;
        }
        var u = e.slice(i);
        var s;
        if (n === null) s = ".";
        else if (c(n) || c(e.join("/"))) {
          if (!n || !c(n)) n = "/" + n;
          s = n;
        } else s = n;
        var o = this._makeAbs(s);
        if (m(this, s)) return;
        var l = u[0] === a.GLOBSTAR;
        if (l) this._processGlobStar(n, s, o, u, t, r);
        else this._processReaddir(n, s, o, u, t, r);
      };
      GlobSync.prototype._processReaddir = function(e, t, r, i, n, a) {
        var u = this._readdir(r, a);
        if (!u) return;
        var s = i[0];
        var o = !!this.minimatch.negate;
        var f = s._glob;
        var c = this.dot || f.charAt(0) === ".";
        var h = [];
        for (var p = 0; p < u.length; p++) {
          var v = u[p];
          if (v.charAt(0) !== "." || c) {
            var d;
            if (o && !e) {
              d = !v.match(s);
            } else {
              d = v.match(s);
            }
            if (d) h.push(v);
          }
        }
        var D = h.length;
        if (D === 0) return;
        if (i.length === 1 && !this.mark && !this.stat) {
          if (!this.matches[n]) this.matches[n] = Object.create(null);
          for (var p = 0; p < D; p++) {
            var v = h[p];
            if (e) {
              if (e.slice(-1) !== "/") v = e + "/" + v;
              else v = e + v;
            }
            if (v.charAt(0) === "/" && !this.nomount) {
              v = l.join(this.root, v);
            }
            this._emitMatch(n, v);
          }
          return;
        }
        i.shift();
        for (var p = 0; p < D; p++) {
          var v = h[p];
          var m;
          if (e) m = [e, v];
          else m = [v];
          this._process(m.concat(i), n, a);
        }
      };
      GlobSync.prototype._emitMatch = function(e, t) {
        if (g(this, t)) return;
        var r = this._makeAbs(t);
        if (this.mark) t = this._mark(t);
        if (this.absolute) {
          t = r;
        }
        if (this.matches[e][t]) return;
        if (this.nodir) {
          var i = this.cache[r];
          if (i === "DIR" || Array.isArray(i)) return;
        }
        this.matches[e][t] = true;
        if (this.stat) this._stat(t);
      };
      GlobSync.prototype._readdirInGlobStar = function(e) {
        if (this.follow) return this._readdir(e, false);
        var t;
        var r;
        var n;
        try {
          r = i.lstatSync(e);
        } catch (e) {
          if (e.code === "ENOENT") {
            return null;
          }
        }
        var a = r && r.isSymbolicLink();
        this.symlinks[e] = a;
        if (!a && r && !r.isDirectory()) this.cache[e] = "FILE";
        else t = this._readdir(e, false);
        return t;
      };
      GlobSync.prototype._readdir = function(e, t) {
        var r;
        if (t && !D(this.symlinks, e)) return this._readdirInGlobStar(e);
        if (D(this.cache, e)) {
          var n = this.cache[e];
          if (!n || n === "FILE") return null;
          if (Array.isArray(n)) return n;
        }
        try {
          return this._readdirEntries(e, i.readdirSync(e));
        } catch (t) {
          this._readdirError(e, t);
          return null;
        }
      };
      GlobSync.prototype._readdirEntries = function(e, t) {
        if (!this.mark && !this.stat) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (e === "/") i = e + i;
            else i = e + "/" + i;
            this.cache[i] = true;
          }
        }
        this.cache[e] = t;
        return t;
      };
      GlobSync.prototype._readdirError = function(e, t) {
        switch (t.code) {
          case "ENOTSUP":
          case "ENOTDIR":
            var r = this._makeAbs(e);
            this.cache[r] = "FILE";
            if (r === this.cwdAbs) {
              var i = new Error(t.code + " invalid cwd " + this.cwd);
              i.path = this.cwd;
              i.code = t.code;
              throw i;
            }
            break;
          case "ENOENT":
          case "ELOOP":
          case "ENAMETOOLONG":
          case "UNKNOWN":
            this.cache[this._makeAbs(e)] = false;
            break;
          default:
            this.cache[this._makeAbs(e)] = false;
            if (this.strict) throw t;
            if (!this.silent) console.error("glob error", t);
            break;
        }
      };
      GlobSync.prototype._processGlobStar = function(e, t, r, i, n, a) {
        var u = this._readdir(r, a);
        if (!u) return;
        var s = i.slice(1);
        var o = e ? [e] : [];
        var l = o.concat(s);
        this._process(l, n, false);
        var f = u.length;
        var c = this.symlinks[r];
        if (c && a) return;
        for (var h = 0; h < f; h++) {
          var p = u[h];
          if (p.charAt(0) === "." && !this.dot) continue;
          var v = o.concat(u[h], s);
          this._process(v, n, true);
          var d = o.concat(u[h], i);
          this._process(d, n, true);
        }
      };
      GlobSync.prototype._processSimple = function(e, t) {
        var r = this._stat(e);
        if (!this.matches[t]) this.matches[t] = Object.create(null);
        if (!r) return;
        if (e && c(e) && !this.nomount) {
          var i = /[\/\\]$/.test(e);
          if (e.charAt(0) === "/") {
            e = l.join(this.root, e);
          } else {
            e = l.resolve(this.root, e);
            if (i) e += "/";
          }
        }
        if (process.platform === "win32") e = e.replace(/\\/g, "/");
        this._emitMatch(t, e);
      };
      GlobSync.prototype._stat = function(e) {
        var t = this._makeAbs(e);
        var r = e.slice(-1) === "/";
        if (e.length > this.maxLength) return false;
        if (!this.stat && D(this.cache, t)) {
          var n = this.cache[t];
          if (Array.isArray(n)) n = "DIR";
          if (!r || n === "DIR") return n;
          if (r && n === "FILE") return false;
        }
        var a;
        var u = this.statCache[t];
        if (!u) {
          var s;
          try {
            s = i.lstatSync(t);
          } catch (e) {
            if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) {
              this.statCache[t] = false;
              return false;
            }
          }
          if (s && s.isSymbolicLink()) {
            try {
              u = i.statSync(t);
            } catch (e) {
              u = s;
            }
          } else {
            u = s;
          }
        }
        this.statCache[t] = u;
        var n = true;
        if (u) n = u.isDirectory() ? "DIR" : "FILE";
        this.cache[t] = this.cache[t] || n;
        if (r && n === "FILE") return false;
        return n;
      };
      GlobSync.prototype._mark = function(e) {
        return h.mark(this, e);
      };
      GlobSync.prototype._makeAbs = function(e) {
        return h.makeAbs(this, e);
      };
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = balanced;
      function balanced(e, t, r) {
        if (e instanceof RegExp) e = maybeMatch(e, r);
        if (t instanceof RegExp) t = maybeMatch(t, r);
        var i = range(e, t, r);
        return (
          i && {
            start: i[0],
            end: i[1],
            pre: r.slice(0, i[0]),
            body: r.slice(i[0] + e.length, i[1]),
            post: r.slice(i[1] + t.length)
          }
        );
      }
      function maybeMatch(e, t) {
        var r = t.match(e);
        return r ? r[0] : null;
      }
      balanced.range = range;
      function range(e, t, r) {
        var i, n, a, u, s;
        var o = r.indexOf(e);
        var l = r.indexOf(t, o + 1);
        var f = o;
        if (o >= 0 && l > 0) {
          i = [];
          a = r.length;
          while (f >= 0 && !s) {
            if (f == o) {
              i.push(f);
              o = r.indexOf(e, f + 1);
            } else if (i.length == 1) {
              s = [i.pop(), l];
            } else {
              n = i.pop();
              if (n < a) {
                a = n;
                u = l;
              }
              l = r.indexOf(t, f + 1);
            }
            f = o < l && o >= 0 ? o : l;
          }
          if (i.length) {
            s = [a, u];
          }
        }
        return s;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(659);
      e.exports = factory;
      function factory(e, t) {
        var r = e.split(":");
        var n = r[0];
        var a = r[1];
        var u = i(t);
        if (!a) {
          a = n;
          n = null;
        }
        attacher.displayName = e;
        return attacher;
        function attacher(e) {
          var t = coerce(a, e);
          var r = t[0];
          var i = t[1];
          var s = r === 2;
          return r ? transformer : undefined;
          function transformer(e, t, r) {
            var o = t.messages.length;
            u(e, t, i, done);
            function done(e) {
              var i = t.messages;
              var u;
              if (e && i.indexOf(e) === -1) {
                try {
                  t.fail(e);
                } catch (e) {}
              }
              while (o < i.length) {
                u = i[o];
                u.ruleId = a;
                u.source = n;
                u.fatal = s;
                o++;
              }
              r();
            }
          }
        }
      }
      function coerce(e, t) {
        var r = 1;
        var i;
        var n;
        if (typeof t === "boolean") {
          i = [t];
        } else if (t == null) {
          i = [r];
        } else if (
          typeof t === "object" &&
          (typeof t[0] === "number" ||
            typeof t[0] === "boolean" ||
            typeof t[0] === "string")
        ) {
          i = t.concat();
        } else {
          i = [1, t];
        }
        n = i[0];
        if (typeof n === "boolean") {
          n = n ? 1 : 0;
        } else if (typeof n === "string") {
          if (n === "off") {
            n = 0;
          } else if (n === "on" || n === "warn") {
            n = 1;
          } else if (n === "error") {
            n = 2;
          } else {
            n = 1;
            i = [n, i];
          }
        }
        if (n < 0 || n > 2) {
          throw new Error(
            "Invalid severity `" +
              n +
              "` for `" +
              e +
              "`, " +
              "expected 0, 1, or 2"
          );
        }
        i[0] = n;
        return i;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      e.exports = PassThrough;
      var i = r(955);
      var n = r(683);
      n.inherits = r(780);
      n.inherits(PassThrough, i);
      function PassThrough(e) {
        if (!(this instanceof PassThrough)) return new PassThrough(e);
        i.call(this, e);
      }
      PassThrough.prototype._transform = function(e, t, r) {
        r(null, e);
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(353);
      var n = r(320);
      e.exports = n;
      var a = n.prototype;
      a.message = message;
      a.info = info;
      a.fail = fail;
      a.warn = message;
      function message(e, t, r) {
        var n = this.path;
        var a = new i(e, t, r);
        if (n) {
          a.name = n + ":" + a.name;
          a.file = n;
        }
        a.fatal = false;
        this.messages.push(a);
        return a;
      }
      function fail() {
        var e = this.message.apply(this, arguments);
        e.fatal = true;
        throw e;
      }
      function info() {
        var e = this.message.apply(this, arguments);
        e.fatal = null;
        return e;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      e.exports = r(64).deprecate;
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        var r = e.indexOf("**", t);
        var i = e.indexOf("__", t);
        if (i === -1) {
          return r;
        }
        if (r === -1) {
          return i;
        }
        return i < r ? i : r;
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = enclose;
      var t = '"';
      var r = "'";
      function enclose(e) {
        var i = e.indexOf(t) === -1 ? t : r;
        return i + e + i;
      }
    },
    function(e) {
      "use strict";
      e.exports = factory;
      function factory(e, t, r) {
        return enter;
        function enter() {
          var i = r || this;
          var n = i[e];
          i[e] = !t;
          return exit;
          function exit() {
            i[e] = n;
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(564);
      e.exports = table;
      var n = " ";
      var a = "|";
      function table(e) {
        var t = this;
        var r = t.options;
        var u = r.looseTable;
        var s = r.spacedTable;
        var o = r.paddedTable;
        var l = r.stringLength;
        var f = e.children;
        var c = f.length;
        var h = t.enterTable();
        var p = [];
        var v;
        var d;
        while (c--) {
          p[c] = t.all(f[c]);
        }
        h();
        if (u) {
          v = "";
          d = "";
        } else if (s) {
          v = a + n;
          d = n + a;
        } else {
          v = a;
          d = a;
        }
        return i(p, {
          align: e.align,
          pad: o,
          start: v,
          end: d,
          stringLength: l,
          delimiter: s ? n + a + n : a
        });
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      e.exports = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ"
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i("remark-lint:no-trailing-spaces", noTrailingSpaces);
      function noTrailingSpaces(e, t) {
        var r = t.toString().split(/\r?\n/);
        for (var i = 0; i < r.length; i++) {
          var n = r[i];
          var a = i + 1;
          if (/\s$/.test(n)) {
            t.message("Remove trailing whitespace", {
              position: {
                start: { line: a, column: n.length + 1 },
                end: { line: a }
              }
            });
          }
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = generated;
      function generated(e) {
        var t = optional(optional(e).position);
        var r = optional(t.start);
        var i = optional(t.end);
        return !r.line || !r.column || !i.line || !i.column;
      }
      function optional(e) {
        return e && typeof e === "object" ? e : {};
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(260);
      var n = r(833);
      var a = r(65);
      var u = r(388);
      var s = Object.prototype.toString;
      var o = Object.prototype.hasOwnProperty;
      var l = 9;
      var f = 10;
      var c = 32;
      var h = 33;
      var p = 34;
      var v = 35;
      var d = 37;
      var D = 38;
      var m = 39;
      var g = 42;
      var E = 44;
      var A = 45;
      var C = 58;
      var y = 62;
      var w = 63;
      var x = 64;
      var b = 91;
      var F = 93;
      var S = 96;
      var B = 123;
      var k = 124;
      var O = 125;
      var P = {};
      P[0] = "\\0";
      P[7] = "\\a";
      P[8] = "\\b";
      P[9] = "\\t";
      P[10] = "\\n";
      P[11] = "\\v";
      P[12] = "\\f";
      P[13] = "\\r";
      P[27] = "\\e";
      P[34] = '\\"';
      P[92] = "\\\\";
      P[133] = "\\N";
      P[160] = "\\_";
      P[8232] = "\\L";
      P[8233] = "\\P";
      var T = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF"
      ];
      function compileStyleMap(e, t) {
        var r, i, n, a, u, s, l;
        if (t === null) return {};
        r = {};
        i = Object.keys(t);
        for (n = 0, a = i.length; n < a; n += 1) {
          u = i[n];
          s = String(t[u]);
          if (u.slice(0, 2) === "!!") {
            u = "tag:yaml.org,2002:" + u.slice(2);
          }
          l = e.compiledTypeMap["fallback"][u];
          if (l && o.call(l.styleAliases, s)) {
            s = l.styleAliases[s];
          }
          r[u] = s;
        }
        return r;
      }
      function encodeHex(e) {
        var t, r, a;
        t = e.toString(16).toUpperCase();
        if (e <= 255) {
          r = "x";
          a = 2;
        } else if (e <= 65535) {
          r = "u";
          a = 4;
        } else if (e <= 4294967295) {
          r = "U";
          a = 8;
        } else {
          throw new n(
            "code point within a string may not be greater than 0xFFFFFFFF"
          );
        }
        return "\\" + r + i.repeat("0", a - t.length) + t;
      }
      function State(e) {
        this.schema = e["schema"] || a;
        this.indent = Math.max(1, e["indent"] || 2);
        this.noArrayIndent = e["noArrayIndent"] || false;
        this.skipInvalid = e["skipInvalid"] || false;
        this.flowLevel = i.isNothing(e["flowLevel"]) ? -1 : e["flowLevel"];
        this.styleMap = compileStyleMap(this.schema, e["styles"] || null);
        this.sortKeys = e["sortKeys"] || false;
        this.lineWidth = e["lineWidth"] || 80;
        this.noRefs = e["noRefs"] || false;
        this.noCompatMode = e["noCompatMode"] || false;
        this.condenseFlow = e["condenseFlow"] || false;
        this.implicitTypes = this.schema.compiledImplicit;
        this.explicitTypes = this.schema.compiledExplicit;
        this.tag = null;
        this.result = "";
        this.duplicates = [];
        this.usedDuplicates = null;
      }
      function indentString(e, t) {
        var r = i.repeat(" ", t),
          n = 0,
          a = -1,
          u = "",
          s,
          o = e.length;
        while (n < o) {
          a = e.indexOf("\n", n);
          if (a === -1) {
            s = e.slice(n);
            n = o;
          } else {
            s = e.slice(n, a + 1);
            n = a + 1;
          }
          if (s.length && s !== "\n") u += r;
          u += s;
        }
        return u;
      }
      function generateNextLine(e, t) {
        return "\n" + i.repeat(" ", e.indent * t);
      }
      function testImplicitResolving(e, t) {
        var r, i, n;
        for (r = 0, i = e.implicitTypes.length; r < i; r += 1) {
          n = e.implicitTypes[r];
          if (n.resolve(t)) {
            return true;
          }
        }
        return false;
      }
      function isWhitespace(e) {
        return e === c || e === l;
      }
      function isPrintable(e) {
        return (
          (32 <= e && e <= 126) ||
          (161 <= e && e <= 55295 && e !== 8232 && e !== 8233) ||
          (57344 <= e && e <= 65533 && e !== 65279) ||
          (65536 <= e && e <= 1114111)
        );
      }
      function isPlainSafe(e) {
        return (
          isPrintable(e) &&
          e !== 65279 &&
          e !== E &&
          e !== b &&
          e !== F &&
          e !== B &&
          e !== O &&
          e !== C &&
          e !== v
        );
      }
      function isPlainSafeFirst(e) {
        return (
          isPrintable(e) &&
          e !== 65279 &&
          !isWhitespace(e) &&
          e !== A &&
          e !== w &&
          e !== C &&
          e !== E &&
          e !== b &&
          e !== F &&
          e !== B &&
          e !== O &&
          e !== v &&
          e !== D &&
          e !== g &&
          e !== h &&
          e !== k &&
          e !== y &&
          e !== m &&
          e !== p &&
          e !== d &&
          e !== x &&
          e !== S
        );
      }
      function needIndentIndicator(e) {
        var t = /^\n* /;
        return t.test(e);
      }
      var I = 1,
        M = 2,
        L = 3,
        R = 4,
        j = 5;
      function chooseScalarStyle(e, t, r, i, n) {
        var a;
        var u;
        var s = false;
        var o = false;
        var l = i !== -1;
        var c = -1;
        var h =
          isPlainSafeFirst(e.charCodeAt(0)) &&
          !isWhitespace(e.charCodeAt(e.length - 1));
        if (t) {
          for (a = 0; a < e.length; a++) {
            u = e.charCodeAt(a);
            if (!isPrintable(u)) {
              return j;
            }
            h = h && isPlainSafe(u);
          }
        } else {
          for (a = 0; a < e.length; a++) {
            u = e.charCodeAt(a);
            if (u === f) {
              s = true;
              if (l) {
                o = o || (a - c - 1 > i && e[c + 1] !== " ");
                c = a;
              }
            } else if (!isPrintable(u)) {
              return j;
            }
            h = h && isPlainSafe(u);
          }
          o = o || (l && (a - c - 1 > i && e[c + 1] !== " "));
        }
        if (!s && !o) {
          return h && !n(e) ? I : M;
        }
        if (r > 9 && needIndentIndicator(e)) {
          return j;
        }
        return o ? R : L;
      }
      function writeScalar(e, t, r, i) {
        e.dump = (function() {
          if (t.length === 0) {
            return "''";
          }
          if (!e.noCompatMode && T.indexOf(t) !== -1) {
            return "'" + t + "'";
          }
          var a = e.indent * Math.max(1, r);
          var u =
            e.lineWidth === -1
              ? -1
              : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a);
          var s = i || (e.flowLevel > -1 && r >= e.flowLevel);
          function testAmbiguity(t) {
            return testImplicitResolving(e, t);
          }
          switch (chooseScalarStyle(t, s, e.indent, u, testAmbiguity)) {
            case I:
              return t;
            case M:
              return "'" + t.replace(/'/g, "''") + "'";
            case L:
              return (
                "|" +
                blockHeader(t, e.indent) +
                dropEndingNewline(indentString(t, a))
              );
            case R:
              return (
                ">" +
                blockHeader(t, e.indent) +
                dropEndingNewline(indentString(foldString(t, u), a))
              );
            case j:
              return '"' + escapeString(t, u) + '"';
            default:
              throw new n("impossible error: invalid scalar style");
          }
        })();
      }
      function blockHeader(e, t) {
        var r = needIndentIndicator(e) ? String(t) : "";
        var i = e[e.length - 1] === "\n";
        var n = i && (e[e.length - 2] === "\n" || e === "\n");
        var a = n ? "+" : i ? "" : "-";
        return r + a + "\n";
      }
      function dropEndingNewline(e) {
        return e[e.length - 1] === "\n" ? e.slice(0, -1) : e;
      }
      function foldString(e, t) {
        var r = /(\n+)([^\n]*)/g;
        var i = (function() {
          var i = e.indexOf("\n");
          i = i !== -1 ? i : e.length;
          r.lastIndex = i;
          return foldLine(e.slice(0, i), t);
        })();
        var n = e[0] === "\n" || e[0] === " ";
        var a;
        var u;
        while ((u = r.exec(e))) {
          var s = u[1],
            o = u[2];
          a = o[0] === " ";
          i += s + (!n && !a && o !== "" ? "\n" : "") + foldLine(o, t);
          n = a;
        }
        return i;
      }
      function foldLine(e, t) {
        if (e === "" || e[0] === " ") return e;
        var r = / [^ ]/g;
        var i;
        var n = 0,
          a,
          u = 0,
          s = 0;
        var o = "";
        while ((i = r.exec(e))) {
          s = i.index;
          if (s - n > t) {
            a = u > n ? u : s;
            o += "\n" + e.slice(n, a);
            n = a + 1;
          }
          u = s;
        }
        o += "\n";
        if (e.length - n > t && u > n) {
          o += e.slice(n, u) + "\n" + e.slice(u + 1);
        } else {
          o += e.slice(n);
        }
        return o.slice(1);
      }
      function escapeString(e) {
        var t = "";
        var r, i;
        var n;
        for (var a = 0; a < e.length; a++) {
          r = e.charCodeAt(a);
          if (r >= 55296 && r <= 56319) {
            i = e.charCodeAt(a + 1);
            if (i >= 56320 && i <= 57343) {
              t += encodeHex((r - 55296) * 1024 + i - 56320 + 65536);
              a++;
              continue;
            }
          }
          n = P[r];
          t += !n && isPrintable(r) ? e[a] : n || encodeHex(r);
        }
        return t;
      }
      function writeFlowSequence(e, t, r) {
        var i = "",
          n = e.tag,
          a,
          u;
        for (a = 0, u = r.length; a < u; a += 1) {
          if (writeNode(e, t, r[a], false, false)) {
            if (a !== 0) i += "," + (!e.condenseFlow ? " " : "");
            i += e.dump;
          }
        }
        e.tag = n;
        e.dump = "[" + i + "]";
      }
      function writeBlockSequence(e, t, r, i) {
        var n = "",
          a = e.tag,
          u,
          s;
        for (u = 0, s = r.length; u < s; u += 1) {
          if (writeNode(e, t + 1, r[u], true, true)) {
            if (!i || u !== 0) {
              n += generateNextLine(e, t);
            }
            if (e.dump && f === e.dump.charCodeAt(0)) {
              n += "-";
            } else {
              n += "- ";
            }
            n += e.dump;
          }
        }
        e.tag = a;
        e.dump = n || "[]";
      }
      function writeFlowMapping(e, t, r) {
        var i = "",
          n = e.tag,
          a = Object.keys(r),
          u,
          s,
          o,
          l,
          f;
        for (u = 0, s = a.length; u < s; u += 1) {
          f = e.condenseFlow ? '"' : "";
          if (u !== 0) f += ", ";
          o = a[u];
          l = r[o];
          if (!writeNode(e, t, o, false, false)) {
            continue;
          }
          if (e.dump.length > 1024) f += "? ";
          f +=
            e.dump +
            (e.condenseFlow ? '"' : "") +
            ":" +
            (e.condenseFlow ? "" : " ");
          if (!writeNode(e, t, l, false, false)) {
            continue;
          }
          f += e.dump;
          i += f;
        }
        e.tag = n;
        e.dump = "{" + i + "}";
      }
      function writeBlockMapping(e, t, r, i) {
        var a = "",
          u = e.tag,
          s = Object.keys(r),
          o,
          l,
          c,
          h,
          p,
          v;
        if (e.sortKeys === true) {
          s.sort();
        } else if (typeof e.sortKeys === "function") {
          s.sort(e.sortKeys);
        } else if (e.sortKeys) {
          throw new n("sortKeys must be a boolean or a function");
        }
        for (o = 0, l = s.length; o < l; o += 1) {
          v = "";
          if (!i || o !== 0) {
            v += generateNextLine(e, t);
          }
          c = s[o];
          h = r[c];
          if (!writeNode(e, t + 1, c, true, true, true)) {
            continue;
          }
          p =
            (e.tag !== null && e.tag !== "?") ||
            (e.dump && e.dump.length > 1024);
          if (p) {
            if (e.dump && f === e.dump.charCodeAt(0)) {
              v += "?";
            } else {
              v += "? ";
            }
          }
          v += e.dump;
          if (p) {
            v += generateNextLine(e, t);
          }
          if (!writeNode(e, t + 1, h, true, p)) {
            continue;
          }
          if (e.dump && f === e.dump.charCodeAt(0)) {
            v += ":";
          } else {
            v += ": ";
          }
          v += e.dump;
          a += v;
        }
        e.tag = u;
        e.dump = a || "{}";
      }
      function detectType(e, t, r) {
        var i, a, u, l, f, c;
        a = r ? e.explicitTypes : e.implicitTypes;
        for (u = 0, l = a.length; u < l; u += 1) {
          f = a[u];
          if (
            (f.instanceOf || f.predicate) &&
            (!f.instanceOf ||
              (typeof t === "object" && t instanceof f.instanceOf)) &&
            (!f.predicate || f.predicate(t))
          ) {
            e.tag = r ? f.tag : "?";
            if (f.represent) {
              c = e.styleMap[f.tag] || f.defaultStyle;
              if (s.call(f.represent) === "[object Function]") {
                i = f.represent(t, c);
              } else if (o.call(f.represent, c)) {
                i = f.represent[c](t, c);
              } else {
                throw new n(
                  "!<" + f.tag + '> tag resolver accepts not "' + c + '" style'
                );
              }
              e.dump = i;
            }
            return true;
          }
        }
        return false;
      }
      function writeNode(e, t, r, i, a, u) {
        e.tag = null;
        e.dump = r;
        if (!detectType(e, r, false)) {
          detectType(e, r, true);
        }
        var o = s.call(e.dump);
        if (i) {
          i = e.flowLevel < 0 || e.flowLevel > t;
        }
        var l = o === "[object Object]" || o === "[object Array]",
          f,
          c;
        if (l) {
          f = e.duplicates.indexOf(r);
          c = f !== -1;
        }
        if (
          (e.tag !== null && e.tag !== "?") ||
          c ||
          (e.indent !== 2 && t > 0)
        ) {
          a = false;
        }
        if (c && e.usedDuplicates[f]) {
          e.dump = "*ref_" + f;
        } else {
          if (l && c && !e.usedDuplicates[f]) {
            e.usedDuplicates[f] = true;
          }
          if (o === "[object Object]") {
            if (i && Object.keys(e.dump).length !== 0) {
              writeBlockMapping(e, t, e.dump, a);
              if (c) {
                e.dump = "&ref_" + f + e.dump;
              }
            } else {
              writeFlowMapping(e, t, e.dump);
              if (c) {
                e.dump = "&ref_" + f + " " + e.dump;
              }
            }
          } else if (o === "[object Array]") {
            var h = e.noArrayIndent && t > 0 ? t - 1 : t;
            if (i && e.dump.length !== 0) {
              writeBlockSequence(e, h, e.dump, a);
              if (c) {
                e.dump = "&ref_" + f + e.dump;
              }
            } else {
              writeFlowSequence(e, h, e.dump);
              if (c) {
                e.dump = "&ref_" + f + " " + e.dump;
              }
            }
          } else if (o === "[object String]") {
            if (e.tag !== "?") {
              writeScalar(e, e.dump, t, u);
            }
          } else {
            if (e.skipInvalid) return false;
            throw new n("unacceptable kind of an object to dump " + o);
          }
          if (e.tag !== null && e.tag !== "?") {
            e.dump = "!<" + e.tag + "> " + e.dump;
          }
        }
        return true;
      }
      function getDuplicateReferences(e, t) {
        var r = [],
          i = [],
          n,
          a;
        inspectNode(e, r, i);
        for (n = 0, a = i.length; n < a; n += 1) {
          t.duplicates.push(r[i[n]]);
        }
        t.usedDuplicates = new Array(a);
      }
      function inspectNode(e, t, r) {
        var i, n, a;
        if (e !== null && typeof e === "object") {
          n = t.indexOf(e);
          if (n !== -1) {
            if (r.indexOf(n) === -1) {
              r.push(n);
            }
          } else {
            t.push(e);
            if (Array.isArray(e)) {
              for (n = 0, a = e.length; n < a; n += 1) {
                inspectNode(e[n], t, r);
              }
            } else {
              i = Object.keys(e);
              for (n = 0, a = i.length; n < a; n += 1) {
                inspectNode(e[i[n]], t, r);
              }
            }
          }
        }
      }
      function dump(e, t) {
        t = t || {};
        var r = new State(t);
        if (!r.noRefs) getDuplicateReferences(e, r);
        if (writeNode(r, 0, e, true, true)) return r.dump + "\n";
        return "";
      }
      function safeDump(e, t) {
        return dump(e, i.extend({ schema: u }, t));
      }
      e.exports.dump = dump;
      e.exports.safeDump = safeDump;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(902);
      e.exports = length;
      var n = "&";
      function length(e) {
        var t;
        if (e.charAt(0) !== n) {
          return 0;
        }
        t = e.split(n, 2).join(n);
        return t.length - i(t).length;
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(636);
      var n = r(814);
      var a = r(705);
      e.exports = code;
      var u = "\n";
      var s = " ";
      function code(e, t) {
        var r = this;
        var o = e.value;
        var l = r.options;
        var f = l.fence;
        var c = e.lang || "";
        var h;
        if (c && e.meta) {
          c += s + e.meta;
        }
        c = r.encode(r.escape(c, e));
        if (!c && !l.fences && o) {
          if (
            t &&
            t.type === "listItem" &&
            l.listItemIndent !== "tab" &&
            l.pedantic
          ) {
            r.file.fail(
              "Cannot indent code properly. See https://git.io/fxKR8",
              e.position
            );
          }
          return a(o, 1);
        }
        h = n(f, Math.max(i(o, f) + 1, 3));
        return h + c + u + o + u + h;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      var i = r(589);
      var n = process.platform === "win32";
      var a = r(66);
      var u = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
      function rethrow() {
        var e;
        if (u) {
          var t = new Error();
          e = debugCallback;
        } else e = missingCallback;
        return e;
        function debugCallback(e) {
          if (e) {
            t.message = e.message;
            e = t;
            missingCallback(e);
          }
        }
        function missingCallback(e) {
          if (e) {
            if (process.throwDeprecation) throw e;
            else if (!process.noDeprecation) {
              var t = "fs: missing callback " + (e.stack || e.message);
              if (process.traceDeprecation) console.trace(t);
              else console.error(t);
            }
          }
        }
      }
      function maybeCallback(e) {
        return typeof e === "function" ? e : rethrow();
      }
      var s = i.normalize;
      if (n) {
        var o = /(.*?)(?:[\/\\]+|$)/g;
      } else {
        var o = /(.*?)(?:[\/]+|$)/g;
      }
      if (n) {
        var l = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
      } else {
        var l = /^[\/]*/;
      }
      t.realpathSync = function realpathSync(e, t) {
        e = i.resolve(e);
        if (t && Object.prototype.hasOwnProperty.call(t, e)) {
          return t[e];
        }
        var r = e,
          u = {},
          s = {};
        var f;
        var c;
        var h;
        var p;
        start();
        function start() {
          var t = l.exec(e);
          f = t[0].length;
          c = t[0];
          h = t[0];
          p = "";
          if (n && !s[h]) {
            a.lstatSync(h);
            s[h] = true;
          }
        }
        while (f < e.length) {
          o.lastIndex = f;
          var v = o.exec(e);
          p = c;
          c += v[0];
          h = p + v[1];
          f = o.lastIndex;
          if (s[h] || (t && t[h] === h)) {
            continue;
          }
          var d;
          if (t && Object.prototype.hasOwnProperty.call(t, h)) {
            d = t[h];
          } else {
            var D = a.lstatSync(h);
            if (!D.isSymbolicLink()) {
              s[h] = true;
              if (t) t[h] = h;
              continue;
            }
            var m = null;
            if (!n) {
              var g = D.dev.toString(32) + ":" + D.ino.toString(32);
              if (u.hasOwnProperty(g)) {
                m = u[g];
              }
            }
            if (m === null) {
              a.statSync(h);
              m = a.readlinkSync(h);
            }
            d = i.resolve(p, m);
            if (t) t[h] = d;
            if (!n) u[g] = m;
          }
          e = i.resolve(d, e.slice(f));
          start();
        }
        if (t) t[r] = e;
        return e;
      };
      t.realpath = function realpath(e, t, r) {
        if (typeof r !== "function") {
          r = maybeCallback(t);
          t = null;
        }
        e = i.resolve(e);
        if (t && Object.prototype.hasOwnProperty.call(t, e)) {
          return process.nextTick(r.bind(null, null, t[e]));
        }
        var u = e,
          s = {},
          f = {};
        var c;
        var h;
        var p;
        var v;
        start();
        function start() {
          var t = l.exec(e);
          c = t[0].length;
          h = t[0];
          p = t[0];
          v = "";
          if (n && !f[p]) {
            a.lstat(p, function(e) {
              if (e) return r(e);
              f[p] = true;
              LOOP();
            });
          } else {
            process.nextTick(LOOP);
          }
        }
        function LOOP() {
          if (c >= e.length) {
            if (t) t[u] = e;
            return r(null, e);
          }
          o.lastIndex = c;
          var i = o.exec(e);
          v = h;
          h += i[0];
          p = v + i[1];
          c = o.lastIndex;
          if (f[p] || (t && t[p] === p)) {
            return process.nextTick(LOOP);
          }
          if (t && Object.prototype.hasOwnProperty.call(t, p)) {
            return gotResolvedLink(t[p]);
          }
          return a.lstat(p, gotStat);
        }
        function gotStat(e, i) {
          if (e) return r(e);
          if (!i.isSymbolicLink()) {
            f[p] = true;
            if (t) t[p] = p;
            return process.nextTick(LOOP);
          }
          if (!n) {
            var u = i.dev.toString(32) + ":" + i.ino.toString(32);
            if (s.hasOwnProperty(u)) {
              return gotTarget(null, s[u], p);
            }
          }
          a.stat(p, function(e) {
            if (e) return r(e);
            a.readlink(p, function(e, t) {
              if (!n) s[u] = t;
              gotTarget(e, t);
            });
          });
        }
        function gotTarget(e, n, a) {
          if (e) return r(e);
          var u = i.resolve(v, n);
          if (t) t[a] = u;
          gotResolvedLink(u);
        }
        function gotResolvedLink(t) {
          e = i.resolve(t, e.slice(c));
          start();
        }
      };
    },
    ,
    function(e) {
      e.exports = [
        {
          long: "help",
          description: "output usage information",
          short: "h",
          type: "boolean",
          default: false
        },
        {
          long: "version",
          description: "output version number",
          short: "v",
          type: "boolean",
          default: false
        },
        {
          long: "output",
          description: "specify output location",
          short: "o",
          value: "[path]"
        },
        {
          long: "rc-path",
          description: "specify configuration file",
          short: "r",
          type: "string",
          value: "<path>"
        },
        {
          long: "ignore-path",
          description: "specify ignore file",
          short: "i",
          type: "string",
          value: "<path>"
        },
        {
          long: "setting",
          description: "specify settings",
          short: "s",
          type: "string",
          value: "<settings>"
        },
        {
          long: "ext",
          description: "specify extensions",
          short: "e",
          type: "string",
          value: "<extensions>"
        },
        {
          long: "use",
          description: "use plugins",
          short: "u",
          type: "string",
          value: "<plugins>"
        },
        {
          long: "watch",
          description: "watch for changes and reprocess",
          short: "w",
          type: "boolean",
          default: false
        },
        {
          long: "quiet",
          description: "output only warnings and errors",
          short: "q",
          type: "boolean",
          default: false
        },
        {
          long: "silent",
          description: "output only errors",
          short: "S",
          type: "boolean",
          default: false
        },
        {
          long: "frail",
          description: "exit with 1 on warnings",
          short: "f",
          type: "boolean",
          default: false
        },
        {
          long: "tree",
          description: "specify input and output as syntax tree",
          short: "t",
          type: "boolean",
          default: false
        },
        {
          long: "report",
          description: "specify reporter",
          type: "string",
          value: "<reporter>"
        },
        {
          long: "file-path",
          description: "specify path to process as",
          type: "string",
          value: "<path>"
        },
        {
          long: "tree-in",
          description: "specify input as syntax tree",
          type: "boolean"
        },
        {
          long: "tree-out",
          description: "output syntax tree",
          type: "boolean"
        },
        {
          long: "inspect",
          description: "output formatted syntax tree",
          type: "boolean"
        },
        {
          long: "stdout",
          description: "specify writing to stdout",
          type: "boolean",
          truelike: true
        },
        {
          long: "color",
          description: "specify color in report",
          type: "boolean",
          default: true
        },
        {
          long: "config",
          description: "search for configuration files",
          type: "boolean",
          default: true
        },
        {
          long: "ignore",
          description: "search for ignore files",
          type: "boolean",
          default: true
        }
      ];
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:hard-break-spaces", hardBreakSpaces);
      var s = "Use two spaces for hard line breaks";
      function hardBreakSpaces(e, t) {
        var r = String(t);
        n(e, "break", visitor);
        function visitor(e) {
          var i;
          if (!u(e)) {
            i = r
              .slice(a.start(e).offset, a.end(e).offset)
              .split("\n", 1)[0]
              .replace(/\r$/, "");
            if (i.length > 2) {
              t.message(s, e);
            }
          }
        }
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      e.exports = table;
      var n = "\t";
      var a = "\n";
      var u = " ";
      var s = "-";
      var o = ":";
      var l = "\\";
      var f = "`";
      var c = "|";
      var h = 1;
      var p = 2;
      var v = "left";
      var d = "center";
      var D = "right";
      function table(e, t, r) {
        var m = this;
        var g;
        var E;
        var A;
        var C;
        var y;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        var M;
        var L;
        var R;
        var j;
        var U;
        var N;
        var J;
        var z;
        if (!m.options.gfm) {
          return;
        }
        g = 0;
        L = 0;
        w = t.length + 1;
        x = [];
        while (g < w) {
          N = t.indexOf(a, g);
          J = t.indexOf(c, g + 1);
          if (N === -1) {
            N = t.length;
          }
          if (J === -1 || J > N) {
            if (L < p) {
              return;
            }
            break;
          }
          x.push(t.slice(g, N));
          L++;
          g = N + 1;
        }
        C = x.join(a);
        E = x.splice(1, 1)[0] || [];
        g = 0;
        w = E.length;
        L--;
        A = false;
        B = [];
        while (g < w) {
          F = E.charAt(g);
          if (F === c) {
            S = null;
            if (A === false) {
              if (z === false) {
                return;
              }
            } else {
              B.push(A);
              A = false;
            }
            z = false;
          } else if (F === s) {
            S = true;
            A = A || null;
          } else if (F === o) {
            if (A === v) {
              A = d;
            } else if (S && A === null) {
              A = D;
            } else {
              A = v;
            }
          } else if (!i(F)) {
            return;
          }
          g++;
        }
        if (A !== false) {
          B.push(A);
        }
        if (B.length < h) {
          return;
        }
        if (r) {
          return true;
        }
        M = -1;
        j = [];
        U = e(C).reset({ type: "table", align: B, children: j });
        while (++M < L) {
          R = x[M];
          y = { type: "tableRow", children: [] };
          if (M) {
            e(a);
          }
          e(R).reset(y, U);
          w = R.length + 1;
          g = 0;
          b = "";
          k = "";
          O = true;
          P = null;
          T = null;
          while (g < w) {
            F = R.charAt(g);
            if (F === n || F === u) {
              if (k) {
                b += F;
              } else {
                e(F);
              }
              g++;
              continue;
            }
            if (F === "" || F === c) {
              if (O) {
                e(F);
              } else {
                if (F && T) {
                  b += F;
                  g++;
                  continue;
                }
                if ((k || F) && !O) {
                  C = k;
                  if (b.length > 1) {
                    if (F) {
                      C += b.slice(0, b.length - 1);
                      b = b.charAt(b.length - 1);
                    } else {
                      C += b;
                      b = "";
                    }
                  }
                  I = e.now();
                  e(C)(
                    { type: "tableCell", children: m.tokenizeInline(k, I) },
                    y
                  );
                }
                e(b + F);
                b = "";
                k = "";
              }
            } else {
              if (b) {
                k += b;
                b = "";
              }
              k += F;
              if (F === l && g !== w - 2) {
                k += R.charAt(g + 1);
                g++;
              }
              if (F === f) {
                P = 1;
                while (R.charAt(g + 1) === F) {
                  k += F;
                  g++;
                  P++;
                }
                if (!T) {
                  T = P;
                } else if (P >= T) {
                  T = 0;
                }
              }
            }
            O = false;
            g++;
          }
          if (!M) {
            e(a + E);
          }
        }
        return U;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(211);
      function resolveJavascriptRegExp(e) {
        if (e === null) return false;
        if (e.length === 0) return false;
        var t = e,
          r = /\/([gim]*)$/.exec(e),
          i = "";
        if (t[0] === "/") {
          if (r) i = r[1];
          if (i.length > 3) return false;
          if (t[t.length - i.length - 1] !== "/") return false;
        }
        return true;
      }
      function constructJavascriptRegExp(e) {
        var t = e,
          r = /\/([gim]*)$/.exec(e),
          i = "";
        if (t[0] === "/") {
          if (r) i = r[1];
          t = t.slice(1, t.length - i.length - 1);
        }
        return new RegExp(t, i);
      }
      function representJavascriptRegExp(e) {
        var t = "/" + e.source + "/";
        if (e.global) t += "g";
        if (e.multiline) t += "m";
        if (e.ignoreCase) t += "i";
        return t;
      }
      function isRegExp(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]";
      }
      e.exports = new i("tag:yaml.org,2002:js/regexp", {
        kind: "scalar",
        resolve: resolveJavascriptRegExp,
        construct: constructJavascriptRegExp,
        predicate: isRegExp,
        represent: representJavascriptRegExp
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = markdownTable;
      var t = /\./;
      var r = /\.[^.]*$/;
      var i = "l";
      var n = "r";
      var a = "c";
      var u = ".";
      var s = "";
      var o = [i, n, a, u, s];
      var l = 3;
      var f = ":";
      var c = "-";
      var h = "|";
      var p = " ";
      var v = "\n";
      function markdownTable(e, r) {
        var d = r || {};
        var D = d.delimiter;
        var m = d.start;
        var g = d.end;
        var E = d.align;
        var A = d.stringLength || lengthNoop;
        var C = 0;
        var y = -1;
        var w = e.length;
        var x = [];
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        var M;
        var L;
        var R;
        E = E ? E.concat() : [];
        if (D === null || D === undefined) {
          D = p + h + p;
        }
        if (m === null || m === undefined) {
          m = h + p;
        }
        if (g === null || g === undefined) {
          g = p + h;
        }
        while (++y < w) {
          B = e[y];
          O = -1;
          if (B.length > C) {
            C = B.length;
          }
          while (++O < C) {
            P = B[O] ? dotindex(B[O]) : null;
            if (!x[O]) {
              x[O] = l;
            }
            if (P > x[O]) {
              x[O] = P;
            }
          }
        }
        if (typeof E === "string") {
          E = pad(C, E).split("");
        }
        O = -1;
        while (++O < C) {
          b = E[O];
          if (typeof b === "string") {
            b = b.charAt(0).toLowerCase();
          }
          if (o.indexOf(b) === -1) {
            b = s;
          }
          E[O] = b;
        }
        y = -1;
        S = [];
        while (++y < w) {
          B = e[y];
          O = -1;
          k = [];
          while (++O < C) {
            I = B[O];
            I = stringify(I);
            if (E[O] === u) {
              P = dotindex(I);
              T = x[O] + (t.test(I) ? 0 : 1) - (A(I) - P);
              k[O] = I + pad(T - 1);
            } else {
              k[O] = I;
            }
          }
          S[y] = k;
        }
        x = [];
        y = -1;
        while (++y < w) {
          k = S[y];
          O = -1;
          while (++O < C) {
            I = k[O];
            if (!x[O]) {
              x[O] = l;
            }
            T = A(I);
            if (T > x[O]) {
              x[O] = T;
            }
          }
        }
        y = -1;
        while (++y < w) {
          k = S[y];
          O = -1;
          if (d.pad !== false) {
            while (++O < C) {
              I = k[O];
              P = x[O] - (A(I) || 0);
              M = pad(P);
              if (E[O] === n || E[O] === u) {
                I = M + I;
              } else if (E[O] === a) {
                P /= 2;
                if (P % 1 === 0) {
                  L = P;
                  R = P;
                } else {
                  L = P + 0.5;
                  R = P - 0.5;
                }
                I = pad(L) + I + pad(R);
              } else {
                I += M;
              }
              k[O] = I;
            }
          }
          S[y] = k.join(D);
        }
        if (d.rule !== false) {
          O = -1;
          F = [];
          while (++O < C) {
            if (d.pad === false) {
              I = e[0][O];
              M = A(stringify(I));
              M = M > l ? M : l;
            } else {
              M = x[O];
            }
            b = E[O];
            I = b === n || b === s ? c : f;
            I += pad(M - 2, c);
            I += b !== i && b !== s ? f : c;
            F[O] = I;
          }
          S.splice(1, 0, F.join(D));
        }
        return m + S.join(g + v + m) + g;
      }
      function stringify(e) {
        return e === null || e === undefined ? "" : String(e);
      }
      function lengthNoop(e) {
        return String(e).length;
      }
      function pad(e, t) {
        return new Array(e + 1).join(t || p);
      }
      function dotindex(e) {
        var t = r.exec(e);
        return t ? t.index + 1 : e.length;
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      e.exports = r(688);
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(12);
      e.exports = Writable;
      function WriteReq(e, t, r) {
        this.chunk = e;
        this.encoding = t;
        this.callback = r;
        this.next = null;
      }
      function CorkedRequest(e) {
        var t = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(t, e);
        };
      }
      var n =
        !process.browser &&
        ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1
          ? setImmediate
          : i.nextTick;
      var a;
      Writable.WritableState = WritableState;
      var u = r(683);
      u.inherits = r(780);
      var s = { deprecate: r(507) };
      var o = r(569);
      var l = r(945).Buffer;
      var f = global.Uint8Array || function() {};
      function _uint8ArrayToBuffer(e) {
        return l.from(e);
      }
      function _isUint8Array(e) {
        return l.isBuffer(e) || e instanceof f;
      }
      var c = r(972);
      u.inherits(Writable, o);
      function nop() {}
      function WritableState(e, t) {
        a = a || r(98);
        e = e || {};
        var i = t instanceof a;
        this.objectMode = !!e.objectMode;
        if (i) this.objectMode = this.objectMode || !!e.writableObjectMode;
        var n = e.highWaterMark;
        var u = e.writableHighWaterMark;
        var s = this.objectMode ? 16 : 16 * 1024;
        if (n || n === 0) this.highWaterMark = n;
        else if (i && (u || u === 0)) this.highWaterMark = u;
        else this.highWaterMark = s;
        this.highWaterMark = Math.floor(this.highWaterMark);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var o = e.decodeStrings === false;
        this.decodeStrings = !o;
        this.defaultEncoding = e.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(e) {
          onwrite(t, e);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var e = this.bufferedRequest;
        var t = [];
        while (e) {
          t.push(e);
          e = e.next;
        }
        return t;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: s.deprecate(
              function() {
                return this.getBuffer();
              },
              "_writableState.buffer is deprecated. Use _writableState.getBuffer " +
                "instead.",
              "DEP0003"
            )
          });
        } catch (e) {}
      })();
      var h;
      if (
        typeof Symbol === "function" &&
        Symbol.hasInstance &&
        typeof Function.prototype[Symbol.hasInstance] === "function"
      ) {
        h = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function(e) {
            if (h.call(this, e)) return true;
            if (this !== Writable) return false;
            return e && e._writableState instanceof WritableState;
          }
        });
      } else {
        h = function(e) {
          return e instanceof this;
        };
      }
      function Writable(e) {
        a = a || r(98);
        if (!h.call(Writable, this) && !(this instanceof a)) {
          return new Writable(e);
        }
        this._writableState = new WritableState(e, this);
        this.writable = true;
        if (e) {
          if (typeof e.write === "function") this._write = e.write;
          if (typeof e.writev === "function") this._writev = e.writev;
          if (typeof e.destroy === "function") this._destroy = e.destroy;
          if (typeof e.final === "function") this._final = e.final;
        }
        o.call(this);
      }
      Writable.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"));
      };
      function writeAfterEnd(e, t) {
        var r = new Error("write after end");
        e.emit("error", r);
        i.nextTick(t, r);
      }
      function validChunk(e, t, r, n) {
        var a = true;
        var u = false;
        if (r === null) {
          u = new TypeError("May not write null values to stream");
        } else if (typeof r !== "string" && r !== undefined && !t.objectMode) {
          u = new TypeError("Invalid non-string/buffer chunk");
        }
        if (u) {
          e.emit("error", u);
          i.nextTick(n, u);
          a = false;
        }
        return a;
      }
      Writable.prototype.write = function(e, t, r) {
        var i = this._writableState;
        var n = false;
        var a = !i.objectMode && _isUint8Array(e);
        if (a && !l.isBuffer(e)) {
          e = _uint8ArrayToBuffer(e);
        }
        if (typeof t === "function") {
          r = t;
          t = null;
        }
        if (a) t = "buffer";
        else if (!t) t = i.defaultEncoding;
        if (typeof r !== "function") r = nop;
        if (i.ended) writeAfterEnd(this, r);
        else if (a || validChunk(this, i, e, r)) {
          i.pendingcb++;
          n = writeOrBuffer(this, i, a, e, t, r);
        }
        return n;
      };
      Writable.prototype.cork = function() {
        var e = this._writableState;
        e.corked++;
      };
      Writable.prototype.uncork = function() {
        var e = this._writableState;
        if (e.corked) {
          e.corked--;
          if (
            !e.writing &&
            !e.corked &&
            !e.finished &&
            !e.bufferProcessing &&
            e.bufferedRequest
          )
            clearBuffer(this, e);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(e) {
        if (typeof e === "string") e = e.toLowerCase();
        if (
          !(
            [
              "hex",
              "utf8",
              "utf-8",
              "ascii",
              "binary",
              "base64",
              "ucs2",
              "ucs-2",
              "utf16le",
              "utf-16le",
              "raw"
            ].indexOf((e + "").toLowerCase()) > -1
          )
        )
          throw new TypeError("Unknown encoding: " + e);
        this._writableState.defaultEncoding = e;
        return this;
      };
      function decodeChunk(e, t, r) {
        if (
          !e.objectMode &&
          e.decodeStrings !== false &&
          typeof t === "string"
        ) {
          t = l.from(t, r);
        }
        return t;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(e, t, r, i, n, a) {
        if (!r) {
          var u = decodeChunk(t, i, n);
          if (i !== u) {
            r = true;
            n = "buffer";
            i = u;
          }
        }
        var s = t.objectMode ? 1 : i.length;
        t.length += s;
        var o = t.length < t.highWaterMark;
        if (!o) t.needDrain = true;
        if (t.writing || t.corked) {
          var l = t.lastBufferedRequest;
          t.lastBufferedRequest = {
            chunk: i,
            encoding: n,
            isBuf: r,
            callback: a,
            next: null
          };
          if (l) {
            l.next = t.lastBufferedRequest;
          } else {
            t.bufferedRequest = t.lastBufferedRequest;
          }
          t.bufferedRequestCount += 1;
        } else {
          doWrite(e, t, false, s, i, n, a);
        }
        return o;
      }
      function doWrite(e, t, r, i, n, a, u) {
        t.writelen = i;
        t.writecb = u;
        t.writing = true;
        t.sync = true;
        if (r) e._writev(n, t.onwrite);
        else e._write(n, a, t.onwrite);
        t.sync = false;
      }
      function onwriteError(e, t, r, n, a) {
        --t.pendingcb;
        if (r) {
          i.nextTick(a, n);
          i.nextTick(finishMaybe, e, t);
          e._writableState.errorEmitted = true;
          e.emit("error", n);
        } else {
          a(n);
          e._writableState.errorEmitted = true;
          e.emit("error", n);
          finishMaybe(e, t);
        }
      }
      function onwriteStateUpdate(e) {
        e.writing = false;
        e.writecb = null;
        e.length -= e.writelen;
        e.writelen = 0;
      }
      function onwrite(e, t) {
        var r = e._writableState;
        var i = r.sync;
        var a = r.writecb;
        onwriteStateUpdate(r);
        if (t) onwriteError(e, r, i, t, a);
        else {
          var u = needFinish(r);
          if (!u && !r.corked && !r.bufferProcessing && r.bufferedRequest) {
            clearBuffer(e, r);
          }
          if (i) {
            n(afterWrite, e, r, u, a);
          } else {
            afterWrite(e, r, u, a);
          }
        }
      }
      function afterWrite(e, t, r, i) {
        if (!r) onwriteDrain(e, t);
        t.pendingcb--;
        i();
        finishMaybe(e, t);
      }
      function onwriteDrain(e, t) {
        if (t.length === 0 && t.needDrain) {
          t.needDrain = false;
          e.emit("drain");
        }
      }
      function clearBuffer(e, t) {
        t.bufferProcessing = true;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var i = t.bufferedRequestCount;
          var n = new Array(i);
          var a = t.corkedRequestsFree;
          a.entry = r;
          var u = 0;
          var s = true;
          while (r) {
            n[u] = r;
            if (!r.isBuf) s = false;
            r = r.next;
            u += 1;
          }
          n.allBuffers = s;
          doWrite(e, t, true, t.length, n, "", a.finish);
          t.pendingcb++;
          t.lastBufferedRequest = null;
          if (a.next) {
            t.corkedRequestsFree = a.next;
            a.next = null;
          } else {
            t.corkedRequestsFree = new CorkedRequest(t);
          }
          t.bufferedRequestCount = 0;
        } else {
          while (r) {
            var o = r.chunk;
            var l = r.encoding;
            var f = r.callback;
            var c = t.objectMode ? 1 : o.length;
            doWrite(e, t, false, c, o, l, f);
            r = r.next;
            t.bufferedRequestCount--;
            if (t.writing) {
              break;
            }
          }
          if (r === null) t.lastBufferedRequest = null;
        }
        t.bufferedRequest = r;
        t.bufferProcessing = false;
      }
      Writable.prototype._write = function(e, t, r) {
        r(new Error("_write() is not implemented"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(e, t, r) {
        var i = this._writableState;
        if (typeof e === "function") {
          r = e;
          e = null;
          t = null;
        } else if (typeof t === "function") {
          r = t;
          t = null;
        }
        if (e !== null && e !== undefined) this.write(e, t);
        if (i.corked) {
          i.corked = 1;
          this.uncork();
        }
        if (!i.ending && !i.finished) endWritable(this, i, r);
      };
      function needFinish(e) {
        return (
          e.ending &&
          e.length === 0 &&
          e.bufferedRequest === null &&
          !e.finished &&
          !e.writing
        );
      }
      function callFinal(e, t) {
        e._final(function(r) {
          t.pendingcb--;
          if (r) {
            e.emit("error", r);
          }
          t.prefinished = true;
          e.emit("prefinish");
          finishMaybe(e, t);
        });
      }
      function prefinish(e, t) {
        if (!t.prefinished && !t.finalCalled) {
          if (typeof e._final === "function") {
            t.pendingcb++;
            t.finalCalled = true;
            i.nextTick(callFinal, e, t);
          } else {
            t.prefinished = true;
            e.emit("prefinish");
          }
        }
      }
      function finishMaybe(e, t) {
        var r = needFinish(t);
        if (r) {
          prefinish(e, t);
          if (t.pendingcb === 0) {
            t.finished = true;
            e.emit("finish");
          }
        }
        return r;
      }
      function endWritable(e, t, r) {
        t.ending = true;
        finishMaybe(e, t);
        if (r) {
          if (t.finished) i.nextTick(r);
          else e.once("finish", r);
        }
        t.ended = true;
        e.writable = false;
      }
      function onCorkedFinish(e, t, r) {
        var i = e.entry;
        e.entry = null;
        while (i) {
          var n = i.callback;
          t.pendingcb--;
          n(r);
          i = i.next;
        }
        if (t.corkedRequestsFree) {
          t.corkedRequestsFree.next = e;
        } else {
          t.corkedRequestsFree = e;
        }
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        get: function() {
          if (this._writableState === undefined) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function(e) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = e;
        }
      });
      Writable.prototype.destroy = c.destroy;
      Writable.prototype._undestroy = c.undestroy;
      Writable.prototype._destroy = function(e, t) {
        this.end();
        t(e);
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(984);
      e.exports = link;
      link.locator = n;
      var a = "\n";
      var u = "!";
      var s = '"';
      var o = "'";
      var l = "(";
      var f = ")";
      var c = "<";
      var h = ">";
      var p = "[";
      var v = "\\";
      var d = "]";
      var D = "`";
      function link(e, t, r) {
        var n = this;
        var m = "";
        var g = 0;
        var E = t.charAt(0);
        var A = n.options.pedantic;
        var C = n.options.commonmark;
        var y = n.options.gfm;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        var k;
        var O;
        var P;
        var T;
        var I;
        var M;
        var L;
        var R;
        var j;
        var U;
        var N;
        var J;
        if (E === u) {
          O = true;
          m = E;
          E = t.charAt(++g);
        }
        if (E !== p) {
          return;
        }
        if (!O && n.inLink) {
          return;
        }
        m += E;
        R = "";
        g++;
        I = t.length;
        U = e.now();
        L = 0;
        U.column += g;
        U.offset += g;
        while (g < I) {
          E = t.charAt(g);
          B = E;
          if (E === D) {
            x = 1;
            while (t.charAt(g + 1) === D) {
              B += E;
              g++;
              x++;
            }
            if (!b) {
              b = x;
            } else if (x >= b) {
              b = 0;
            }
          } else if (E === v) {
            g++;
            B += t.charAt(g);
          } else if ((!b || y) && E === p) {
            L++;
          } else if ((!b || y) && E === d) {
            if (L) {
              L--;
            } else {
              if (!A) {
                while (g < I) {
                  E = t.charAt(g + 1);
                  if (!i(E)) {
                    break;
                  }
                  B += E;
                  g++;
                }
              }
              if (t.charAt(g + 1) !== l) {
                return;
              }
              B += l;
              w = true;
              g++;
              break;
            }
          }
          R += B;
          B = "";
          g++;
        }
        if (!w) {
          return;
        }
        P = R;
        m += R + B;
        g++;
        while (g < I) {
          E = t.charAt(g);
          if (!i(E)) {
            break;
          }
          m += E;
          g++;
        }
        E = t.charAt(g);
        R = "";
        F = m;
        if (E === c) {
          g++;
          F += c;
          while (g < I) {
            E = t.charAt(g);
            if (E === h) {
              break;
            }
            if (C && E === a) {
              return;
            }
            R += E;
            g++;
          }
          if (t.charAt(g) !== h) {
            return;
          }
          m += c + R + h;
          j = R;
          g++;
        } else {
          E = null;
          B = "";
          while (g < I) {
            E = t.charAt(g);
            if (B && (E === s || E === o || (C && E === l))) {
              break;
            }
            if (i(E)) {
              if (!A) {
                break;
              }
              B += E;
            } else {
              if (E === l) {
                L++;
              } else if (E === f) {
                if (L === 0) {
                  break;
                }
                L--;
              }
              R += B;
              B = "";
              if (E === v) {
                R += v;
                E = t.charAt(++g);
              }
              R += E;
            }
            g++;
          }
          m += R;
          j = R;
          g = m.length;
        }
        R = "";
        while (g < I) {
          E = t.charAt(g);
          if (!i(E)) {
            break;
          }
          R += E;
          g++;
        }
        E = t.charAt(g);
        m += R;
        if (R && (E === s || E === o || (C && E === l))) {
          g++;
          m += E;
          R = "";
          T = E === l ? f : E;
          S = m;
          if (C) {
            while (g < I) {
              E = t.charAt(g);
              if (E === T) {
                break;
              }
              if (E === v) {
                R += v;
                E = t.charAt(++g);
              }
              g++;
              R += E;
            }
            E = t.charAt(g);
            if (E !== T) {
              return;
            }
            M = R;
            m += R + E;
            g++;
            while (g < I) {
              E = t.charAt(g);
              if (!i(E)) {
                break;
              }
              m += E;
              g++;
            }
          } else {
            B = "";
            while (g < I) {
              E = t.charAt(g);
              if (E === T) {
                if (k) {
                  R += T + B;
                  B = "";
                }
                k = true;
              } else if (!k) {
                R += E;
              } else if (E === f) {
                m += R + T + B;
                M = R;
                break;
              } else if (i(E)) {
                B += E;
              } else {
                R += T + B + E;
                B = "";
                k = false;
              }
              g++;
            }
          }
        }
        if (t.charAt(g) !== f) {
          return;
        }
        if (r) {
          return true;
        }
        m += f;
        j = n.decode.raw(n.unescape(j), e(F).test().end, {
          nonTerminated: false
        });
        if (M) {
          S = e(S).test().end;
          M = n.decode.raw(n.unescape(M), S);
        }
        J = { type: O ? "image" : "link", title: M || null, url: j };
        if (O) {
          J.alt = n.decode.raw(n.unescape(P), U) || null;
        } else {
          N = n.enterLink();
          J.children = n.tokenizeInline(P, U);
          N();
        }
        return e(m)(J);
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(7);
      var a = r(682);
      var u = { enable: true, disable: true, ignore: true };
      e.exports = messageControl;
      function messageControl(e) {
        var t = e && e.name;
        var r = e && e.marker;
        var i = e && e.test;
        var s;
        var o;
        var l;
        var f;
        var c;
        if (!t) {
          throw new Error("Expected `name` in `options`, got `" + t + "`");
        }
        if (!r) {
          throw new Error("Expected `name` in `options`, got `" + t + "`");
        }
        if (!i) {
          throw new Error("Expected `test` in `options`, got `" + i + "`");
        }
        o = e.known;
        l = e.reset;
        f = e.enable || [];
        c = e.disable || [];
        s = e.source;
        if (!s) {
          s = [t];
        } else if (typeof s === "string") {
          s = [s];
        }
        return transformer;
        function transformer(t, h) {
          var p = n(h).toOffset;
          var v = !l;
          var d = detectGaps(t, h);
          var D = {};
          var m = [];
          a(t, i, visitor);
          h.messages = h.messages.filter(filter);
          function visitor(t, i, n) {
            var a = r(t);
            var s;
            var o;
            var f;
            var c;
            var p;
            var v;
            var d;
            var D;
            if (!a || a.name !== e.name) {
              return;
            }
            s = a.attributes.split(/\s/g);
            f = s.shift();
            v = n.children[i + 1];
            d = a.node.position && a.node.position.start;
            D = v && v.position && v.position.end;
            if (!f || !u[f] === true) {
              h.fail(
                "Unknown keyword `" +
                  f +
                  "`: expected " +
                  "`'enable'`, `'disable'`, or `'ignore'`",
                a.node
              );
            }
            p = s.length;
            c = -1;
            while (++c < p) {
              o = s[c];
              if (isKnown(o, f, a.node)) {
                toggle(d, f === "enable", o);
                if (f === "ignore") {
                  toggle(D, true, o);
                }
              }
            }
            if (!p) {
              if (f === "ignore") {
                toggle(d, false);
                toggle(D, true);
              } else {
                toggle(d, f === "enable");
                l = f !== "enable";
              }
            }
          }
          function filter(e) {
            var t = d.length;
            var r = e.ruleId;
            var i = D[r];
            var n;
            if (!e.source || s.indexOf(e.source) === -1) {
              return true;
            }
            if (!e.line) {
              e.line = 1;
            }
            if (!e.column) {
              e.column = 1;
            }
            n = p(e);
            while (t--) {
              if (d[t].start <= n && d[t].end > n) {
                return false;
              }
            }
            return check(e, i, r) && check(e, m);
          }
          function isKnown(e, t, r) {
            var i = o ? o.indexOf(e) !== -1 : true;
            if (!i) {
              h.warn("Unknown rule: cannot " + t + " `'" + e + "'`", r);
            }
            return i;
          }
          function getState(e) {
            var t = e ? D[e] : m;
            if (t && t.length !== 0) {
              return t[t.length - 1].state;
            }
            if (!e) {
              return !l;
            }
            if (l) {
              return f.indexOf(e) !== -1;
            }
            return c.indexOf(e) === -1;
          }
          function toggle(e, t, r) {
            var i = r ? D[r] : m;
            var n;
            var a;
            if (!i) {
              i = [];
              D[r] = i;
            }
            a = getState(r);
            n = t;
            if (n !== a) {
              i.push({ state: n, position: e });
            }
            if (!r) {
              for (r in D) {
                toggle(e, t, r);
              }
            }
          }
          function check(e, t, r) {
            var i = t && t.length;
            var n = -1;
            var a;
            while (--i > n) {
              a = t[i];
              if (!a.position || !a.position.line || !a.position.column) {
                continue;
              }
              if (
                a.position.line < e.line ||
                (a.position.line === e.line && a.position.column < e.column)
              ) {
                return a.state === true;
              }
            }
            if (!r) {
              return v || l;
            }
            return l ? f.indexOf(r) !== -1 : c.indexOf(r) === -1;
          }
        }
      }
      function detectGaps(e, t) {
        var r = e.children[e.children.length - 1];
        var n = 0;
        var u = false;
        var s = [];
        a(e, one);
        if (
          r &&
          r.position &&
          r.position.end &&
          n === r.position.end.offset &&
          i(t.toString().slice(n)) !== ""
        ) {
          update();
          update(
            e && e.position && e.position.end && e.position.end.offset - 1
          );
        }
        return s;
        function one(e) {
          var t = e.position;
          update(t && t.start && t.start.offset);
          if (!e.children) {
            update(t && t.end && t.end.offset);
          }
        }
        function update(e) {
          if (e === null || e === undefined) {
            u = true;
            return;
          }
          if (n >= e) {
            return;
          }
          if (u) {
            s.push({ start: n, end: e });
            u = false;
          }
          n = e;
        }
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = orderedItems;
      var t = "\n";
      var r = ".";
      var i = t + t;
      function orderedItems(e) {
        var n = this;
        var a = n.visitors.listItem;
        var u = n.options.incrementListMarker;
        var s = [];
        var o = e.start;
        var l = e.children;
        var f = l.length;
        var c = -1;
        var h;
        o = o == null ? 1 : o;
        while (++c < f) {
          h = (u ? o + c : o) + r;
          s[c] = a.call(n, l[c], e, c, h);
        }
        return s.join(e.spread ? i : t);
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(640);
      e.exports = n;
      n.read = read;
      n.readSync = readSync;
      n.write = write;
      n.writeSync = writeSync;
      function read(e, t, r) {
        var a = n(e);
        if (!r && typeof t === "function") {
          r = t;
          t = null;
        }
        if (!r) {
          return new Promise(executor);
        }
        executor(null, r);
        function executor(e, n) {
          i.readFile(a.path, t, done);
          function done(t, i) {
            if (t) {
              n(t);
            } else {
              a.contents = i;
              if (e) {
                e(a);
              } else {
                r(null, a);
              }
            }
          }
        }
      }
      function readSync(e, t) {
        var r = n(e);
        r.contents = i.readFileSync(r.path, t);
        return r;
      }
      function write(e, t, r) {
        var a = n(e);
        if (!r && typeof t === "function") {
          r = t;
          t = undefined;
        }
        if (!r) {
          return new Promise(executor);
        }
        executor(null, r);
        function executor(e, n) {
          i.writeFile(a.path, a.contents || "", t, done);
          function done(t) {
            if (t) {
              n(t);
            } else if (e) {
              e();
            } else {
              r();
            }
          }
        }
      }
      function writeSync(e, t) {
        var r = n(e);
        i.writeFileSync(r.path, r.contents || "", t);
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(589);
      var a = r(347)("unified-engine:file-pipeline:copy");
      var u = r(340);
      e.exports = copy;
      var s = i.stat;
      var o = n.dirname;
      var l = n.resolve;
      var f = n.relative;
      function copy(e, t, r, i) {
        var c = e.output;
        var h = r.expected > 1;
        var p = c;
        var v = t.path;
        if (!u(p)) {
          a("Not copying");
          return i();
        }
        p = l(e.cwd, p);
        a("Copying `%s`", v);
        s(p, onstatfile);
        function onstatfile(e, t) {
          if (e) {
            if (e.code !== "ENOENT" || c.charAt(c.length - 1) === n.sep) {
              return i(
                new Error("Cannot read output directory. Error:\n" + e.message)
              );
            }
            s(o(p), onstatparent);
          } else {
            done(t.isDirectory());
          }
        }
        function onstatparent(e) {
          if (e) {
            i(new Error("Cannot read parent directory. Error:\n" + e.message));
          } else {
            done(false);
          }
        }
        function done(e) {
          if (!e && h) {
            return i(
              new Error("Cannot write multiple files to single output: " + p)
            );
          }
          t[e ? "dirname" : "path"] = f(t.cwd, p);
          a("Copying document from %s to %s", v, t.path);
          i();
        }
      }
    },
    function(e, t) {
      "use strict";
      var r = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
      var i = "[^\"'=<>`\\u0000-\\u0020]+";
      var n = "'[^']*'";
      var a = '"[^"]*"';
      var u = "(?:" + i + "|" + n + "|" + a + ")";
      var s = "(?:\\s+" + r + "(?:\\s*=\\s*" + u + ")?)";
      var o = "<[A-Za-z][A-Za-z0-9\\-]*" + s + "*\\s*\\/?>";
      var l = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
      var f = "\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e";
      var c = "<[?].*?[?]>";
      var h = "<![A-Za-z]+\\s+[^>]*>";
      var p = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
      t.openCloseTag = new RegExp("^(?:" + o + "|" + l + ")");
      t.tag = new RegExp(
        "^(?:" + o + "|" + l + "|" + f + "|" + c + "|" + h + "|" + p + ")"
      );
    },
    ,
    function(e) {
      e.exports = require("path");
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(171);
      var a = r(511);
      e.exports = strong;
      strong.locator = a;
      var u = "\\";
      var s = "*";
      var o = "_";
      function strong(e, t, r) {
        var a = this;
        var l = 0;
        var f = t.charAt(l);
        var c;
        var h;
        var p;
        var v;
        var d;
        var D;
        var m;
        if ((f !== s && f !== o) || t.charAt(++l) !== f) {
          return;
        }
        h = a.options.pedantic;
        p = f;
        d = p + p;
        D = t.length;
        l++;
        v = "";
        f = "";
        if (h && n(t.charAt(l))) {
          return;
        }
        while (l < D) {
          m = f;
          f = t.charAt(l);
          if (f === p && t.charAt(l + 1) === p && (!h || !n(m))) {
            f = t.charAt(l + 2);
            if (f !== p) {
              if (!i(v)) {
                return;
              }
              if (r) {
                return true;
              }
              c = e.now();
              c.column += 2;
              c.offset += 2;
              return e(d + v + d)({
                type: "strong",
                children: a.tokenizeInline(v, c)
              });
            }
          }
          if (!h && f === u) {
            v += f;
            f = t.charAt(++l);
          }
          v += f;
          l++;
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(589);
      var a = r(347)("unified-engine:file-pipeline:read");
      var u = r(928);
      e.exports = read;
      var s = n.resolve;
      var o = i.readFile;
      function read(e, t, r, i) {
        var n = t.path;
        if (t.contents || t.data.unifiedEngineStreamIn) {
          a("Not reading file `%s` with contents", n);
          i();
        } else if (u(t).fatal) {
          a("Not reading failed file `%s`", n);
          i();
        } else {
          n = s(e.cwd, n);
          a("Reading `%s` in `%s`", n, "utf8");
          o(n, "utf8", onread);
        }
        function onread(e, r) {
          a("Read `%s` (err: %s)", n, e);
          t.contents = r || "";
          i(e);
        }
      }
    },
    ,
    function(e) {
      var t = 1e3;
      var r = t * 60;
      var i = r * 60;
      var n = i * 24;
      var a = n * 7;
      var u = n * 365.25;
      e.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0) {
          return parse(e);
        } else if (r === "number" && isNaN(e) === false) {
          return t.long ? fmtLong(e) : fmtShort(e);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
      function parse(e) {
        e = String(e);
        if (e.length > 100) {
          return;
        }
        var s = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e
        );
        if (!s) {
          return;
        }
        var o = parseFloat(s[1]);
        var l = (s[2] || "ms").toLowerCase();
        switch (l) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return o * u;
          case "weeks":
          case "week":
          case "w":
            return o * a;
          case "days":
          case "day":
          case "d":
            return o * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return o * i;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return o * r;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return o * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return o;
          default:
            return undefined;
        }
      }
      function fmtShort(e) {
        var a = Math.abs(e);
        if (a >= n) {
          return Math.round(e / n) + "d";
        }
        if (a >= i) {
          return Math.round(e / i) + "h";
        }
        if (a >= r) {
          return Math.round(e / r) + "m";
        }
        if (a >= t) {
          return Math.round(e / t) + "s";
        }
        return e + "ms";
      }
      function fmtLong(e) {
        var a = Math.abs(e);
        if (a >= n) {
          return plural(e, a, n, "day");
        }
        if (a >= i) {
          return plural(e, a, i, "hour");
        }
        if (a >= r) {
          return plural(e, a, r, "minute");
        }
        if (a >= t) {
          return plural(e, a, t, "second");
        }
        return e + " ms";
      }
      function plural(e, t, r, i) {
        var n = t >= r * 1.5;
        return Math.round(e / r) + " " + i + (n ? "s" : "");
      }
    },
    function(e, t) {
      t.parse = t.decode = decode;
      t.stringify = t.encode = encode;
      t.safe = safe;
      t.unsafe = unsafe;
      var r =
        typeof process !== "undefined" && process.platform === "win32"
          ? "\r\n"
          : "\n";
      function encode(e, t) {
        var i = [];
        var n = "";
        if (typeof t === "string") {
          t = { section: t, whitespace: false };
        } else {
          t = t || {};
          t.whitespace = t.whitespace === true;
        }
        var a = t.whitespace ? " = " : "=";
        Object.keys(e).forEach(function(t, u, s) {
          var o = e[t];
          if (o && Array.isArray(o)) {
            o.forEach(function(e) {
              n += safe(t + "[]") + a + safe(e) + "\n";
            });
          } else if (o && typeof o === "object") {
            i.push(t);
          } else {
            n += safe(t) + a + safe(o) + r;
          }
        });
        if (t.section && n.length) {
          n = "[" + safe(t.section) + "]" + r + n;
        }
        i.forEach(function(i, a, u) {
          var s = dotSplit(i).join("\\.");
          var o = (t.section ? t.section + "." : "") + s;
          var l = encode(e[i], { section: o, whitespace: t.whitespace });
          if (n.length && l.length) {
            n += r;
          }
          n += l;
        });
        return n;
      }
      function dotSplit(e) {
        return e
          .replace(/\1/g, "LITERAL\\1LITERAL")
          .replace(/\\\./g, "")
          .split(/\./)
          .map(function(e) {
            return e
              .replace(/\1/g, "\\.")
              .replace(/\2LITERAL\\1LITERAL\2/g, "");
          });
      }
      function decode(e) {
        var t = {};
        var r = t;
        var i = null;
        var n = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
        var a = e.split(/[\r\n]+/g);
        a.forEach(function(e, a, u) {
          if (!e || e.match(/^\s*[;#]/)) return;
          var s = e.match(n);
          if (!s) return;
          if (s[1] !== undefined) {
            i = unsafe(s[1]);
            r = t[i] = t[i] || {};
            return;
          }
          var o = unsafe(s[2]);
          var l = s[3] ? unsafe(s[4]) : true;
          switch (l) {
            case "true":
            case "false":
            case "null":
              l = JSON.parse(l);
          }
          if (o.length > 2 && o.slice(-2) === "[]") {
            o = o.substring(0, o.length - 2);
            if (!r[o]) {
              r[o] = [];
            } else if (!Array.isArray(r[o])) {
              r[o] = [r[o]];
            }
          }
          if (Array.isArray(r[o])) {
            r[o].push(l);
          } else {
            r[o] = l;
          }
        });
        Object.keys(t)
          .filter(function(e, r, i) {
            if (!t[e] || typeof t[e] !== "object" || Array.isArray(t[e])) {
              return false;
            }
            var n = dotSplit(e);
            var a = t;
            var u = n.pop();
            var s = u.replace(/\\\./g, ".");
            n.forEach(function(e, t, r) {
              if (!a[e] || typeof a[e] !== "object") a[e] = {};
              a = a[e];
            });
            if (a === t && s === u) {
              return false;
            }
            a[s] = t[e];
            return true;
          })
          .forEach(function(e, r, i) {
            delete t[e];
          });
        return t;
      }
      function isQuoted(e) {
        return (
          (e.charAt(0) === '"' && e.slice(-1) === '"') ||
          (e.charAt(0) === "'" && e.slice(-1) === "'")
        );
      }
      function safe(e) {
        return typeof e !== "string" ||
          e.match(/[=\r\n]/) ||
          e.match(/^\[/) ||
          (e.length > 1 && isQuoted(e)) ||
          e !== e.trim()
          ? JSON.stringify(e)
          : e.replace(/;/g, "\\;").replace(/#/g, "\\#");
      }
      function unsafe(e, t) {
        e = (e || "").trim();
        if (isQuoted(e)) {
          if (e.charAt(0) === "'") {
            e = e.substr(1, e.length - 2);
          }
          try {
            e = JSON.parse(e);
          } catch (e) {}
        } else {
          var r = false;
          var i = "";
          for (var n = 0, a = e.length; n < a; n++) {
            var u = e.charAt(n);
            if (r) {
              if ("\\;#".indexOf(u) !== -1) {
                i += u;
              } else {
                i += "\\" + u;
              }
              r = false;
            } else if (";#".indexOf(u) !== -1) {
              break;
            } else if (u === "\\") {
              r = true;
            } else {
              i += u;
            }
          }
          if (r) {
            i += "\\";
          }
          return i.trim();
        }
        return e;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      const i = r(858);
      e.exports = {
        isSpaceSeparator(e) {
          return i.Space_Separator.test(e);
        },
        isIdStartChar(e) {
          return (
            (e >= "a" && e <= "z") ||
            (e >= "A" && e <= "Z") ||
            e === "$" ||
            e === "_" ||
            i.ID_Start.test(e)
          );
        },
        isIdContinueChar(e) {
          return (
            (e >= "a" && e <= "z") ||
            (e >= "A" && e <= "Z") ||
            (e >= "0" && e <= "9") ||
            e === "$" ||
            e === "_" ||
            e === "‌" ||
            e === "‍" ||
            i.ID_Continue.test(e)
          );
        },
        isDigit(e) {
          return /[0-9]/.test(e);
        },
        isHexDigit(e) {
          return /[0-9A-Fa-f]/.test(e);
        }
      };
    },
    ,
    function(e) {
      "use strict";
      e.exports = e => {
        if (Number.isNaN(e)) {
          return false;
        }
        if (
          e >= 4352 &&
          (e <= 4447 ||
            e === 9001 ||
            e === 9002 ||
            (11904 <= e && e <= 12871 && e !== 12351) ||
            (12880 <= e && e <= 19903) ||
            (19968 <= e && e <= 42182) ||
            (43360 <= e && e <= 43388) ||
            (44032 <= e && e <= 55203) ||
            (63744 <= e && e <= 64255) ||
            (65040 <= e && e <= 65049) ||
            (65072 <= e && e <= 65131) ||
            (65281 <= e && e <= 65376) ||
            (65504 <= e && e <= 65510) ||
            (110592 <= e && e <= 110593) ||
            (127488 <= e && e <= 127569) ||
            (131072 <= e && e <= 262141))
        ) {
          return true;
        }
        return false;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      e.exports.plugins = [
        r(777),
        [r(166), 2],
        [r(112), { checked: "x", unchecked: " " }],
        r(424),
        [r(301), "fenced"],
        r(896),
        r(137),
        [r(386), "`"],
        [r(451), "md"],
        [r(284), 1],
        r(339),
        r(767),
        r(550),
        r(550),
        [r(675), "atx"],
        [r(890), "space"],
        r(164),
        r(223),
        r(127),
        r(846),
        r(816),
        r(667),
        r(380),
        r(911),
        r(33),
        r(758),
        r(9),
        r(273),
        r(926),
        r(121),
        r(55),
        r(72),
        r(522),
        r(842),
        [
          r(455),
          [
            { no: "End-Of-Life", yes: "End-of-Life" },
            { no: "End-of-life", yes: "End-of-Life" },
            { no: "Github", yes: "GitHub" },
            { no: "Javascript", yes: "JavaScript" },
            { no: "Node.JS", yes: "Node.js" },
            { no: "Note that", yes: "<nothing>" },
            { no: "note that", yes: "<nothing>" },
            { no: "Rfc", yes: "RFC" },
            { no: "[Rr][Ff][Cc]\\d+", yes: "RFC <number>" },
            { no: "rfc", yes: "RFC" },
            { no: "UNIX", yes: "Unix" },
            { no: "unix", yes: "Unix" },
            { no: "v8", yes: "V8" }
          ]
        ],
        r(467),
        [r(108), "*"],
        [r(435), "padded"],
        r(314),
        [r(4), "*"]
      ];
    },
    ,
    function(e) {
      e.exports = [
        "cent",
        "copy",
        "divide",
        "gt",
        "lt",
        "not",
        "para",
        "times"
      ];
    },
    ,
    function(e, t, r) {
      "use strict";
      e.exports = r(447);
    },
    function(e, t, r) {
      e.exports = minimatch;
      minimatch.Minimatch = Minimatch;
      var i = { sep: "/" };
      try {
        i = r(589);
      } catch (e) {}
      var n = (minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {});
      var a = r(348);
      var u = {
        "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
        "?": { open: "(?:", close: ")?" },
        "+": { open: "(?:", close: ")+" },
        "*": { open: "(?:", close: ")*" },
        "@": { open: "(?:", close: ")" }
      };
      var s = "[^/]";
      var o = s + "*?";
      var l = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
      var f = "(?:(?!(?:\\/|^)\\.).)*?";
      var c = charSet("().*{}+?[]^$\\!");
      function charSet(e) {
        return e.split("").reduce(function(e, t) {
          e[t] = true;
          return e;
        }, {});
      }
      var h = /\/+/;
      minimatch.filter = filter;
      function filter(e, t) {
        t = t || {};
        return function(r, i, n) {
          return minimatch(r, e, t);
        };
      }
      function ext(e, t) {
        e = e || {};
        t = t || {};
        var r = {};
        Object.keys(t).forEach(function(e) {
          r[e] = t[e];
        });
        Object.keys(e).forEach(function(t) {
          r[t] = e[t];
        });
        return r;
      }
      minimatch.defaults = function(e) {
        if (!e || !Object.keys(e).length) return minimatch;
        var t = minimatch;
        var r = function minimatch(r, i, n) {
          return t.minimatch(r, i, ext(e, n));
        };
        r.Minimatch = function Minimatch(r, i) {
          return new t.Minimatch(r, ext(e, i));
        };
        return r;
      };
      Minimatch.defaults = function(e) {
        if (!e || !Object.keys(e).length) return Minimatch;
        return minimatch.defaults(e).Minimatch;
      };
      function minimatch(e, t, r) {
        if (typeof t !== "string") {
          throw new TypeError("glob pattern string required");
        }
        if (!r) r = {};
        if (!r.nocomment && t.charAt(0) === "#") {
          return false;
        }
        if (t.trim() === "") return e === "";
        return new Minimatch(t, r).match(e);
      }
      function Minimatch(e, t) {
        if (!(this instanceof Minimatch)) {
          return new Minimatch(e, t);
        }
        if (typeof e !== "string") {
          throw new TypeError("glob pattern string required");
        }
        if (!t) t = {};
        e = e.trim();
        if (i.sep !== "/") {
          e = e.split(i.sep).join("/");
        }
        this.options = t;
        this.set = [];
        this.pattern = e;
        this.regexp = null;
        this.negate = false;
        this.comment = false;
        this.empty = false;
        this.make();
      }
      Minimatch.prototype.debug = function() {};
      Minimatch.prototype.make = make;
      function make() {
        if (this._made) return;
        var e = this.pattern;
        var t = this.options;
        if (!t.nocomment && e.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!e) {
          this.empty = true;
          return;
        }
        this.parseNegate();
        var r = (this.globSet = this.braceExpand());
        if (t.debug) this.debug = console.error;
        this.debug(this.pattern, r);
        r = this.globParts = r.map(function(e) {
          return e.split(h);
        });
        this.debug(this.pattern, r);
        r = r.map(function(e, t, r) {
          return e.map(this.parse, this);
        }, this);
        this.debug(this.pattern, r);
        r = r.filter(function(e) {
          return e.indexOf(false) === -1;
        });
        this.debug(this.pattern, r);
        this.set = r;
      }
      Minimatch.prototype.parseNegate = parseNegate;
      function parseNegate() {
        var e = this.pattern;
        var t = false;
        var r = this.options;
        var i = 0;
        if (r.nonegate) return;
        for (var n = 0, a = e.length; n < a && e.charAt(n) === "!"; n++) {
          t = !t;
          i++;
        }
        if (i) this.pattern = e.substr(i);
        this.negate = t;
      }
      minimatch.braceExpand = function(e, t) {
        return braceExpand(e, t);
      };
      Minimatch.prototype.braceExpand = braceExpand;
      function braceExpand(e, t) {
        if (!t) {
          if (this instanceof Minimatch) {
            t = this.options;
          } else {
            t = {};
          }
        }
        e = typeof e === "undefined" ? this.pattern : e;
        if (typeof e === "undefined") {
          throw new TypeError("undefined pattern");
        }
        if (t.nobrace || !e.match(/\{.*\}/)) {
          return [e];
        }
        return a(e);
      }
      Minimatch.prototype.parse = parse;
      var p = {};
      function parse(e, t) {
        if (e.length > 1024 * 64) {
          throw new TypeError("pattern is too long");
        }
        var r = this.options;
        if (!r.noglobstar && e === "**") return n;
        if (e === "") return "";
        var i = "";
        var a = !!r.nocase;
        var l = false;
        var f = [];
        var h = [];
        var v;
        var d = false;
        var D = -1;
        var m = -1;
        var g =
          e.charAt(0) === "."
            ? ""
            : r.dot
            ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))"
            : "(?!\\.)";
        var E = this;
        function clearStateChar() {
          if (v) {
            switch (v) {
              case "*":
                i += o;
                a = true;
                break;
              case "?":
                i += s;
                a = true;
                break;
              default:
                i += "\\" + v;
                break;
            }
            E.debug("clearStateChar %j %j", v, i);
            v = false;
          }
        }
        for (var A = 0, C = e.length, y; A < C && (y = e.charAt(A)); A++) {
          this.debug("%s\t%s %s %j", e, A, i, y);
          if (l && c[y]) {
            i += "\\" + y;
            l = false;
            continue;
          }
          switch (y) {
            case "/":
              return false;
            case "\\":
              clearStateChar();
              l = true;
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              this.debug("%s\t%s %s %j <-- stateChar", e, A, i, y);
              if (d) {
                this.debug("  in class");
                if (y === "!" && A === m + 1) y = "^";
                i += y;
                continue;
              }
              E.debug("call clearStateChar %j", v);
              clearStateChar();
              v = y;
              if (r.noext) clearStateChar();
              continue;
            case "(":
              if (d) {
                i += "(";
                continue;
              }
              if (!v) {
                i += "\\(";
                continue;
              }
              f.push({
                type: v,
                start: A - 1,
                reStart: i.length,
                open: u[v].open,
                close: u[v].close
              });
              i += v === "!" ? "(?:(?!(?:" : "(?:";
              this.debug("plType %j %j", v, i);
              v = false;
              continue;
            case ")":
              if (d || !f.length) {
                i += "\\)";
                continue;
              }
              clearStateChar();
              a = true;
              var w = f.pop();
              i += w.close;
              if (w.type === "!") {
                h.push(w);
              }
              w.reEnd = i.length;
              continue;
            case "|":
              if (d || !f.length || l) {
                i += "\\|";
                l = false;
                continue;
              }
              clearStateChar();
              i += "|";
              continue;
            case "[":
              clearStateChar();
              if (d) {
                i += "\\" + y;
                continue;
              }
              d = true;
              m = A;
              D = i.length;
              i += y;
              continue;
            case "]":
              if (A === m + 1 || !d) {
                i += "\\" + y;
                l = false;
                continue;
              }
              if (d) {
                var x = e.substring(m + 1, A);
                try {
                  RegExp("[" + x + "]");
                } catch (e) {
                  var b = this.parse(x, p);
                  i = i.substr(0, D) + "\\[" + b[0] + "\\]";
                  a = a || b[1];
                  d = false;
                  continue;
                }
              }
              a = true;
              d = false;
              i += y;
              continue;
            default:
              clearStateChar();
              if (l) {
                l = false;
              } else if (c[y] && !(y === "^" && d)) {
                i += "\\";
              }
              i += y;
          }
        }
        if (d) {
          x = e.substr(m + 1);
          b = this.parse(x, p);
          i = i.substr(0, D) + "\\[" + b[0];
          a = a || b[1];
        }
        for (w = f.pop(); w; w = f.pop()) {
          var F = i.slice(w.reStart + w.open.length);
          this.debug("setting tail", i, w);
          F = F.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, r) {
            if (!r) {
              r = "\\";
            }
            return t + t + r + "|";
          });
          this.debug("tail=%j\n   %s", F, F, w, i);
          var S = w.type === "*" ? o : w.type === "?" ? s : "\\" + w.type;
          a = true;
          i = i.slice(0, w.reStart) + S + "\\(" + F;
        }
        clearStateChar();
        if (l) {
          i += "\\\\";
        }
        var B = false;
        switch (i.charAt(0)) {
          case ".":
          case "[":
          case "(":
            B = true;
        }
        for (var k = h.length - 1; k > -1; k--) {
          var O = h[k];
          var P = i.slice(0, O.reStart);
          var T = i.slice(O.reStart, O.reEnd - 8);
          var I = i.slice(O.reEnd - 8, O.reEnd);
          var M = i.slice(O.reEnd);
          I += M;
          var L = P.split("(").length - 1;
          var R = M;
          for (A = 0; A < L; A++) {
            R = R.replace(/\)[+*?]?/, "");
          }
          M = R;
          var j = "";
          if (M === "" && t !== p) {
            j = "$";
          }
          var U = P + T + M + j + I;
          i = U;
        }
        if (i !== "" && a) {
          i = "(?=.)" + i;
        }
        if (B) {
          i = g + i;
        }
        if (t === p) {
          return [i, a];
        }
        if (!a) {
          return globUnescape(e);
        }
        var N = r.nocase ? "i" : "";
        try {
          var J = new RegExp("^" + i + "$", N);
        } catch (e) {
          return new RegExp("$.");
        }
        J._glob = e;
        J._src = i;
        return J;
      }
      minimatch.makeRe = function(e, t) {
        return new Minimatch(e, t || {}).makeRe();
      };
      Minimatch.prototype.makeRe = makeRe;
      function makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp;
        var e = this.set;
        if (!e.length) {
          this.regexp = false;
          return this.regexp;
        }
        var t = this.options;
        var r = t.noglobstar ? o : t.dot ? l : f;
        var i = t.nocase ? "i" : "";
        var a = e
          .map(function(e) {
            return e
              .map(function(e) {
                return e === n
                  ? r
                  : typeof e === "string"
                  ? regExpEscape(e)
                  : e._src;
              })
              .join("\\/");
          })
          .join("|");
        a = "^(?:" + a + ")$";
        if (this.negate) a = "^(?!" + a + ").*$";
        try {
          this.regexp = new RegExp(a, i);
        } catch (e) {
          this.regexp = false;
        }
        return this.regexp;
      }
      minimatch.match = function(e, t, r) {
        r = r || {};
        var i = new Minimatch(t, r);
        e = e.filter(function(e) {
          return i.match(e);
        });
        if (i.options.nonull && !e.length) {
          e.push(t);
        }
        return e;
      };
      Minimatch.prototype.match = match;
      function match(e, t) {
        this.debug("match", e, this.pattern);
        if (this.comment) return false;
        if (this.empty) return e === "";
        if (e === "/" && t) return true;
        var r = this.options;
        if (i.sep !== "/") {
          e = e.split(i.sep).join("/");
        }
        e = e.split(h);
        this.debug(this.pattern, "split", e);
        var n = this.set;
        this.debug(this.pattern, "set", n);
        var a;
        var u;
        for (u = e.length - 1; u >= 0; u--) {
          a = e[u];
          if (a) break;
        }
        for (u = 0; u < n.length; u++) {
          var s = n[u];
          var o = e;
          if (r.matchBase && s.length === 1) {
            o = [a];
          }
          var l = this.matchOne(o, s, t);
          if (l) {
            if (r.flipNegate) return true;
            return !this.negate;
          }
        }
        if (r.flipNegate) return false;
        return this.negate;
      }
      Minimatch.prototype.matchOne = function(e, t, r) {
        var i = this.options;
        this.debug("matchOne", { this: this, file: e, pattern: t });
        this.debug("matchOne", e.length, t.length);
        for (
          var a = 0, u = 0, s = e.length, o = t.length;
          a < s && u < o;
          a++, u++
        ) {
          this.debug("matchOne loop");
          var l = t[u];
          var f = e[a];
          this.debug(t, l, f);
          if (l === false) return false;
          if (l === n) {
            this.debug("GLOBSTAR", [t, l, f]);
            var c = a;
            var h = u + 1;
            if (h === o) {
              this.debug("** at the end");
              for (; a < s; a++) {
                if (
                  e[a] === "." ||
                  e[a] === ".." ||
                  (!i.dot && e[a].charAt(0) === ".")
                )
                  return false;
              }
              return true;
            }
            while (c < s) {
              var p = e[c];
              this.debug("\nglobstar while", e, c, t, h, p);
              if (this.matchOne(e.slice(c), t.slice(h), r)) {
                this.debug("globstar found match!", c, s, p);
                return true;
              } else {
                if (
                  p === "." ||
                  p === ".." ||
                  (!i.dot && p.charAt(0) === ".")
                ) {
                  this.debug("dot detected!", e, c, t, h);
                  break;
                }
                this.debug("globstar swallow a segment, and continue");
                c++;
              }
            }
            if (r) {
              this.debug("\n>>> no match, partial?", e, c, t, h);
              if (c === s) return true;
            }
            return false;
          }
          var v;
          if (typeof l === "string") {
            if (i.nocase) {
              v = f.toLowerCase() === l.toLowerCase();
            } else {
              v = f === l;
            }
            this.debug("string match", l, f, v);
          } else {
            v = f.match(l);
            this.debug("pattern match", l, f, v);
          }
          if (!v) return false;
        }
        if (a === s && u === o) {
          return true;
        } else if (a === s) {
          return r;
        } else if (u === o) {
          var d = a === s - 1 && e[a] === "";
          return d;
        }
        throw new Error("wtf?");
      };
      function globUnescape(e) {
        return e.replace(/\\(.)/g, "$1");
      }
      function regExpEscape(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = function(e) {
        if (typeof e !== "function") {
          throw new TypeError("Expected a function");
        }
        return (
          e.displayName ||
          e.name ||
          (/function ([^\(]+)?\(/.exec(e.toString()) || [])[1] ||
          null
        );
      };
    },
    function(e) {
      "use strict";
      e.exports = () => {
        const e = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
        ].join("|");
        return new RegExp(e, "g");
      };
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(304);
      var n = r(948);
      e.exports = fileSystem;
      function fileSystem(e, t, r) {
        var a = e.files;
        if (a.length === 0) {
          r();
        } else {
          n(
            a,
            {
              cwd: t.cwd,
              extensions: t.extensions,
              silentlyIgnore: t.silentlyIgnore,
              ignore: new i({
                cwd: t.cwd,
                detectIgnore: t.detectIgnore,
                ignoreName: t.ignoreName,
                ignorePath: t.ignorePath
              })
            },
            onfound
          );
        }
        function onfound(i, n) {
          var a = n.files;
          a.sort(sortAlphabetically);
          a.forEach(markAsGiven);
          e.files = a;
          if (t.out === null || t.out === undefined) {
            t.out = n.oneFileMode;
          }
          r(i);
        }
        function markAsGiven(e) {
          e.data.unifiedEngineGiven = true;
        }
        function sortAlphabetically(e, t) {
          return e.path < t.path ? -1 : 1;
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(312);
      var n = r(513);
      e.exports = link;
      var a = " ";
      var u = "[";
      var s = "]";
      var o = "(";
      var l = ")";
      var f = /^[a-z][a-z+.-]+:\/?/i;
      function link(e) {
        var t = this;
        var r = t.encode(e.url || "", e);
        var c = t.enterLink();
        var h = t.encode(t.escape(e.url || "", e));
        var p = t.all(e).join("");
        c();
        if (e.title == null && f.test(r) && h === p) {
          return i(t.encode(e.url), true);
        }
        r = i(r);
        if (e.title) {
          r += a + n(t.encode(t.escape(e.title, e), e));
        }
        return u + p + s + o + r + l;
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      function resolveYamlNull(e) {
        if (e === null) return true;
        var t = e.length;
        return (
          (t === 1 && e === "~") ||
          (t === 4 && (e === "null" || e === "Null" || e === "NULL"))
        );
      }
      function constructYamlNull() {
        return null;
      }
      function isNull(e) {
        return e === null;
      }
      e.exports = new i("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
          canonical: function() {
            return "~";
          },
          lowercase: function() {
            return "null";
          },
          uppercase: function() {
            return "NULL";
          },
          camelcase: function() {
            return "Null";
          }
        },
        defaultStyle: "lowercase"
      });
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = longestStreak;
      function longestStreak(e, t) {
        var r = 0;
        var i = 0;
        var n;
        var a;
        if (typeof t !== "string" || t.length !== 1) {
          throw new Error("Expected character");
        }
        e = String(e);
        a = e.indexOf(t);
        n = a;
        while (a !== -1) {
          r++;
          if (a === n) {
            if (r > i) {
              i = r;
            }
          } else {
            r = 1;
          }
          n = a + 1;
          a = e.indexOf(t, n);
        }
        return i;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:stdout");
      var n = r(928);
      e.exports = stdout;
      function stdout(e, t, r, a) {
        if (!t.data.unifiedEngineGiven) {
          i("Ignoring programmatically added file");
          a();
        } else if (n(t).fatal || e.output || !e.out) {
          i("Ignoring writing to `streamOut`");
          a();
        } else {
          i("Writing document to `streamOut`");
          e.streamOut.write(t.toString(), a);
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(56);
      var n = r(503);
      e.exports = toVFile;
      function toVFile(e) {
        if (typeof e === "string" || i(e)) {
          e = { path: String(e) };
        }
        return n(e);
      }
    },
    ,
    ,
    ,
    function(e) {
      (function webpackUniversalModuleDefinition(t, r) {
        if (true) e.exports = r();
        else {
        }
      })(this, function() {
        return (function(e) {
          var t = {};
          function __webpack_require__(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = { exports: {}, id: r, loaded: false });
            e[r].call(i.exports, i, i.exports, __webpack_require__);
            i.loaded = true;
            return i.exports;
          }
          __webpack_require__.m = e;
          __webpack_require__.c = t;
          __webpack_require__.p = "";
          return __webpack_require__(0);
        })([
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(1);
            var n = r(3);
            var a = r(8);
            var u = r(15);
            function parse(e, t, r) {
              var u = null;
              var s = function(e, t) {
                if (r) {
                  r(e, t);
                }
                if (u) {
                  u.visit(e, t);
                }
              };
              var o = typeof r === "function" ? s : null;
              var l = false;
              if (t) {
                l = typeof t.comment === "boolean" && t.comment;
                var f = typeof t.attachComment === "boolean" && t.attachComment;
                if (l || f) {
                  u = new i.CommentHandler();
                  u.attach = f;
                  t.comment = true;
                  o = s;
                }
              }
              var c = false;
              if (t && typeof t.sourceType === "string") {
                c = t.sourceType === "module";
              }
              var h;
              if (t && typeof t.jsx === "boolean" && t.jsx) {
                h = new n.JSXParser(e, t, o);
              } else {
                h = new a.Parser(e, t, o);
              }
              var p = c ? h.parseModule() : h.parseScript();
              var v = p;
              if (l && u) {
                v.comments = u.comments;
              }
              if (h.config.tokens) {
                v.tokens = h.tokens;
              }
              if (h.config.tolerant) {
                v.errors = h.errorHandler.errors;
              }
              return v;
            }
            t.parse = parse;
            function parseModule(e, t, r) {
              var i = t || {};
              i.sourceType = "module";
              return parse(e, i, r);
            }
            t.parseModule = parseModule;
            function parseScript(e, t, r) {
              var i = t || {};
              i.sourceType = "script";
              return parse(e, i, r);
            }
            t.parseScript = parseScript;
            function tokenize(e, t, r) {
              var i = new u.Tokenizer(e, t);
              var n;
              n = [];
              try {
                while (true) {
                  var a = i.getNextToken();
                  if (!a) {
                    break;
                  }
                  if (r) {
                    a = r(a);
                  }
                  n.push(a);
                }
              } catch (e) {
                i.errorHandler.tolerate(e);
              }
              if (i.errorHandler.tolerant) {
                n.errors = i.errors();
              }
              return n;
            }
            t.tokenize = tokenize;
            var s = r(2);
            t.Syntax = s.Syntax;
            t.version = "4.0.1";
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(2);
            var n = (function() {
              function CommentHandler() {
                this.attach = false;
                this.comments = [];
                this.stack = [];
                this.leading = [];
                this.trailing = [];
              }
              CommentHandler.prototype.insertInnerComments = function(e, t) {
                if (e.type === i.Syntax.BlockStatement && e.body.length === 0) {
                  var r = [];
                  for (var n = this.leading.length - 1; n >= 0; --n) {
                    var a = this.leading[n];
                    if (t.end.offset >= a.start) {
                      r.unshift(a.comment);
                      this.leading.splice(n, 1);
                      this.trailing.splice(n, 1);
                    }
                  }
                  if (r.length) {
                    e.innerComments = r;
                  }
                }
              };
              CommentHandler.prototype.findTrailingComments = function(e) {
                var t = [];
                if (this.trailing.length > 0) {
                  for (var r = this.trailing.length - 1; r >= 0; --r) {
                    var i = this.trailing[r];
                    if (i.start >= e.end.offset) {
                      t.unshift(i.comment);
                    }
                  }
                  this.trailing.length = 0;
                  return t;
                }
                var n = this.stack[this.stack.length - 1];
                if (n && n.node.trailingComments) {
                  var a = n.node.trailingComments[0];
                  if (a && a.range[0] >= e.end.offset) {
                    t = n.node.trailingComments;
                    delete n.node.trailingComments;
                  }
                }
                return t;
              };
              CommentHandler.prototype.findLeadingComments = function(e) {
                var t = [];
                var r;
                while (this.stack.length > 0) {
                  var i = this.stack[this.stack.length - 1];
                  if (i && i.start >= e.start.offset) {
                    r = i.node;
                    this.stack.pop();
                  } else {
                    break;
                  }
                }
                if (r) {
                  var n = r.leadingComments ? r.leadingComments.length : 0;
                  for (var a = n - 1; a >= 0; --a) {
                    var u = r.leadingComments[a];
                    if (u.range[1] <= e.start.offset) {
                      t.unshift(u);
                      r.leadingComments.splice(a, 1);
                    }
                  }
                  if (r.leadingComments && r.leadingComments.length === 0) {
                    delete r.leadingComments;
                  }
                  return t;
                }
                for (var a = this.leading.length - 1; a >= 0; --a) {
                  var i = this.leading[a];
                  if (i.start <= e.start.offset) {
                    t.unshift(i.comment);
                    this.leading.splice(a, 1);
                  }
                }
                return t;
              };
              CommentHandler.prototype.visitNode = function(e, t) {
                if (e.type === i.Syntax.Program && e.body.length > 0) {
                  return;
                }
                this.insertInnerComments(e, t);
                var r = this.findTrailingComments(t);
                var n = this.findLeadingComments(t);
                if (n.length > 0) {
                  e.leadingComments = n;
                }
                if (r.length > 0) {
                  e.trailingComments = r;
                }
                this.stack.push({ node: e, start: t.start.offset });
              };
              CommentHandler.prototype.visitComment = function(e, t) {
                var r = e.type[0] === "L" ? "Line" : "Block";
                var i = { type: r, value: e.value };
                if (e.range) {
                  i.range = e.range;
                }
                if (e.loc) {
                  i.loc = e.loc;
                }
                this.comments.push(i);
                if (this.attach) {
                  var n = {
                    comment: {
                      type: r,
                      value: e.value,
                      range: [t.start.offset, t.end.offset]
                    },
                    start: t.start.offset
                  };
                  if (e.loc) {
                    n.comment.loc = e.loc;
                  }
                  e.type = r;
                  this.leading.push(n);
                  this.trailing.push(n);
                }
              };
              CommentHandler.prototype.visit = function(e, t) {
                if (e.type === "LineComment") {
                  this.visitComment(e, t);
                } else if (e.type === "BlockComment") {
                  this.visitComment(e, t);
                } else if (this.attach) {
                  this.visitNode(e, t);
                }
              };
              return CommentHandler;
            })();
            t.CommentHandler = n;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.Syntax = {
              AssignmentExpression: "AssignmentExpression",
              AssignmentPattern: "AssignmentPattern",
              ArrayExpression: "ArrayExpression",
              ArrayPattern: "ArrayPattern",
              ArrowFunctionExpression: "ArrowFunctionExpression",
              AwaitExpression: "AwaitExpression",
              BlockStatement: "BlockStatement",
              BinaryExpression: "BinaryExpression",
              BreakStatement: "BreakStatement",
              CallExpression: "CallExpression",
              CatchClause: "CatchClause",
              ClassBody: "ClassBody",
              ClassDeclaration: "ClassDeclaration",
              ClassExpression: "ClassExpression",
              ConditionalExpression: "ConditionalExpression",
              ContinueStatement: "ContinueStatement",
              DoWhileStatement: "DoWhileStatement",
              DebuggerStatement: "DebuggerStatement",
              EmptyStatement: "EmptyStatement",
              ExportAllDeclaration: "ExportAllDeclaration",
              ExportDefaultDeclaration: "ExportDefaultDeclaration",
              ExportNamedDeclaration: "ExportNamedDeclaration",
              ExportSpecifier: "ExportSpecifier",
              ExpressionStatement: "ExpressionStatement",
              ForStatement: "ForStatement",
              ForOfStatement: "ForOfStatement",
              ForInStatement: "ForInStatement",
              FunctionDeclaration: "FunctionDeclaration",
              FunctionExpression: "FunctionExpression",
              Identifier: "Identifier",
              IfStatement: "IfStatement",
              ImportDeclaration: "ImportDeclaration",
              ImportDefaultSpecifier: "ImportDefaultSpecifier",
              ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
              ImportSpecifier: "ImportSpecifier",
              Literal: "Literal",
              LabeledStatement: "LabeledStatement",
              LogicalExpression: "LogicalExpression",
              MemberExpression: "MemberExpression",
              MetaProperty: "MetaProperty",
              MethodDefinition: "MethodDefinition",
              NewExpression: "NewExpression",
              ObjectExpression: "ObjectExpression",
              ObjectPattern: "ObjectPattern",
              Program: "Program",
              Property: "Property",
              RestElement: "RestElement",
              ReturnStatement: "ReturnStatement",
              SequenceExpression: "SequenceExpression",
              SpreadElement: "SpreadElement",
              Super: "Super",
              SwitchCase: "SwitchCase",
              SwitchStatement: "SwitchStatement",
              TaggedTemplateExpression: "TaggedTemplateExpression",
              TemplateElement: "TemplateElement",
              TemplateLiteral: "TemplateLiteral",
              ThisExpression: "ThisExpression",
              ThrowStatement: "ThrowStatement",
              TryStatement: "TryStatement",
              UnaryExpression: "UnaryExpression",
              UpdateExpression: "UpdateExpression",
              VariableDeclaration: "VariableDeclaration",
              VariableDeclarator: "VariableDeclarator",
              WhileStatement: "WhileStatement",
              WithStatement: "WithStatement",
              YieldExpression: "YieldExpression"
            };
          },
          function(e, t, r) {
            "use strict";
            var i =
              (this && this.__extends) ||
              (function() {
                var e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(e, t) {
                      e.__proto__ = t;
                    }) ||
                  function(e, t) {
                    for (var r in t) if (t.hasOwnProperty(r)) e[r] = t[r];
                  };
                return function(t, r) {
                  e(t, r);
                  function __() {
                    this.constructor = t;
                  }
                  t.prototype =
                    r === null
                      ? Object.create(r)
                      : ((__.prototype = r.prototype), new __());
                };
              })();
            Object.defineProperty(t, "__esModule", { value: true });
            var n = r(4);
            var a = r(5);
            var u = r(6);
            var s = r(7);
            var o = r(8);
            var l = r(13);
            var f = r(14);
            l.TokenName[100] = "JSXIdentifier";
            l.TokenName[101] = "JSXText";
            function getQualifiedElementName(e) {
              var t;
              switch (e.type) {
                case u.JSXSyntax.JSXIdentifier:
                  var r = e;
                  t = r.name;
                  break;
                case u.JSXSyntax.JSXNamespacedName:
                  var i = e;
                  t =
                    getQualifiedElementName(i.namespace) +
                    ":" +
                    getQualifiedElementName(i.name);
                  break;
                case u.JSXSyntax.JSXMemberExpression:
                  var n = e;
                  t =
                    getQualifiedElementName(n.object) +
                    "." +
                    getQualifiedElementName(n.property);
                  break;
                default:
                  break;
              }
              return t;
            }
            var c = (function(e) {
              i(JSXParser, e);
              function JSXParser(t, r, i) {
                return e.call(this, t, r, i) || this;
              }
              JSXParser.prototype.parsePrimaryExpression = function() {
                return this.match("<")
                  ? this.parseJSXRoot()
                  : e.prototype.parsePrimaryExpression.call(this);
              };
              JSXParser.prototype.startJSX = function() {
                this.scanner.index = this.startMarker.index;
                this.scanner.lineNumber = this.startMarker.line;
                this.scanner.lineStart =
                  this.startMarker.index - this.startMarker.column;
              };
              JSXParser.prototype.finishJSX = function() {
                this.nextToken();
              };
              JSXParser.prototype.reenterJSX = function() {
                this.startJSX();
                this.expectJSX("}");
                if (this.config.tokens) {
                  this.tokens.pop();
                }
              };
              JSXParser.prototype.createJSXNode = function() {
                this.collectComments();
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser.prototype.createJSXChildNode = function() {
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser.prototype.scanXHTMLEntity = function(e) {
                var t = "&";
                var r = true;
                var i = false;
                var a = false;
                var u = false;
                while (!this.scanner.eof() && r && !i) {
                  var s = this.scanner.source[this.scanner.index];
                  if (s === e) {
                    break;
                  }
                  i = s === ";";
                  t += s;
                  ++this.scanner.index;
                  if (!i) {
                    switch (t.length) {
                      case 2:
                        a = s === "#";
                        break;
                      case 3:
                        if (a) {
                          u = s === "x";
                          r = u || n.Character.isDecimalDigit(s.charCodeAt(0));
                          a = a && !u;
                        }
                        break;
                      default:
                        r =
                          r &&
                          !(a && !n.Character.isDecimalDigit(s.charCodeAt(0)));
                        r =
                          r && !(u && !n.Character.isHexDigit(s.charCodeAt(0)));
                        break;
                    }
                  }
                }
                if (r && i && t.length > 2) {
                  var o = t.substr(1, t.length - 2);
                  if (a && o.length > 1) {
                    t = String.fromCharCode(parseInt(o.substr(1), 10));
                  } else if (u && o.length > 2) {
                    t = String.fromCharCode(parseInt("0" + o.substr(1), 16));
                  } else if (!a && !u && f.XHTMLEntities[o]) {
                    t = f.XHTMLEntities[o];
                  }
                }
                return t;
              };
              JSXParser.prototype.lexJSX = function() {
                var e = this.scanner.source.charCodeAt(this.scanner.index);
                if (
                  e === 60 ||
                  e === 62 ||
                  e === 47 ||
                  e === 58 ||
                  e === 61 ||
                  e === 123 ||
                  e === 125
                ) {
                  var t = this.scanner.source[this.scanner.index++];
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index
                  };
                }
                if (e === 34 || e === 39) {
                  var r = this.scanner.index;
                  var i = this.scanner.source[this.scanner.index++];
                  var a = "";
                  while (!this.scanner.eof()) {
                    var u = this.scanner.source[this.scanner.index++];
                    if (u === i) {
                      break;
                    } else if (u === "&") {
                      a += this.scanXHTMLEntity(i);
                    } else {
                      a += u;
                    }
                  }
                  return {
                    type: 8,
                    value: a,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
                    end: this.scanner.index
                  };
                }
                if (e === 46) {
                  var s = this.scanner.source.charCodeAt(
                    this.scanner.index + 1
                  );
                  var o = this.scanner.source.charCodeAt(
                    this.scanner.index + 2
                  );
                  var t = s === 46 && o === 46 ? "..." : ".";
                  var r = this.scanner.index;
                  this.scanner.index += t.length;
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
                    end: this.scanner.index
                  };
                }
                if (e === 96) {
                  return {
                    type: 10,
                    value: "",
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index
                  };
                }
                if (n.Character.isIdentifierStart(e) && e !== 92) {
                  var r = this.scanner.index;
                  ++this.scanner.index;
                  while (!this.scanner.eof()) {
                    var u = this.scanner.source.charCodeAt(this.scanner.index);
                    if (n.Character.isIdentifierPart(u) && u !== 92) {
                      ++this.scanner.index;
                    } else if (u === 45) {
                      ++this.scanner.index;
                    } else {
                      break;
                    }
                  }
                  var l = this.scanner.source.slice(r, this.scanner.index);
                  return {
                    type: 100,
                    value: l,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: r,
                    end: this.scanner.index
                  };
                }
                return this.scanner.lex();
              };
              JSXParser.prototype.nextJSXToken = function() {
                this.collectComments();
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                var e = this.lexJSX();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(e));
                }
                return e;
              };
              JSXParser.prototype.nextJSXText = function() {
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                var e = this.scanner.index;
                var t = "";
                while (!this.scanner.eof()) {
                  var r = this.scanner.source[this.scanner.index];
                  if (r === "{" || r === "<") {
                    break;
                  }
                  ++this.scanner.index;
                  t += r;
                  if (n.Character.isLineTerminator(r.charCodeAt(0))) {
                    ++this.scanner.lineNumber;
                    if (
                      r === "\r" &&
                      this.scanner.source[this.scanner.index] === "\n"
                    ) {
                      ++this.scanner.index;
                    }
                    this.scanner.lineStart = this.scanner.index;
                  }
                }
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                var i = {
                  type: 101,
                  value: t,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start: e,
                  end: this.scanner.index
                };
                if (t.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(i));
                }
                return i;
              };
              JSXParser.prototype.peekJSXToken = function() {
                var e = this.scanner.saveState();
                this.scanner.scanComments();
                var t = this.lexJSX();
                this.scanner.restoreState(e);
                return t;
              };
              JSXParser.prototype.expectJSX = function(e) {
                var t = this.nextJSXToken();
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t);
                }
              };
              JSXParser.prototype.matchJSX = function(e) {
                var t = this.peekJSXToken();
                return t.type === 7 && t.value === e;
              };
              JSXParser.prototype.parseJSXIdentifier = function() {
                var e = this.createJSXNode();
                var t = this.nextJSXToken();
                if (t.type !== 100) {
                  this.throwUnexpectedToken(t);
                }
                return this.finalize(e, new a.JSXIdentifier(t.value));
              };
              JSXParser.prototype.parseJSXElementName = function() {
                var e = this.createJSXNode();
                var t = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var r = t;
                  this.expectJSX(":");
                  var i = this.parseJSXIdentifier();
                  t = this.finalize(e, new a.JSXNamespacedName(r, i));
                } else if (this.matchJSX(".")) {
                  while (this.matchJSX(".")) {
                    var n = t;
                    this.expectJSX(".");
                    var u = this.parseJSXIdentifier();
                    t = this.finalize(e, new a.JSXMemberExpression(n, u));
                  }
                }
                return t;
              };
              JSXParser.prototype.parseJSXAttributeName = function() {
                var e = this.createJSXNode();
                var t;
                var r = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var i = r;
                  this.expectJSX(":");
                  var n = this.parseJSXIdentifier();
                  t = this.finalize(e, new a.JSXNamespacedName(i, n));
                } else {
                  t = r;
                }
                return t;
              };
              JSXParser.prototype.parseJSXStringLiteralAttribute = function() {
                var e = this.createJSXNode();
                var t = this.nextJSXToken();
                if (t.type !== 8) {
                  this.throwUnexpectedToken(t);
                }
                var r = this.getTokenRaw(t);
                return this.finalize(e, new s.Literal(t.value, r));
              };
              JSXParser.prototype.parseJSXExpressionAttribute = function() {
                var e = this.createJSXNode();
                this.expectJSX("{");
                this.finishJSX();
                if (this.match("}")) {
                  this.tolerateError(
                    "JSX attributes must only be assigned a non-empty expression"
                  );
                }
                var t = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(e, new a.JSXExpressionContainer(t));
              };
              JSXParser.prototype.parseJSXAttributeValue = function() {
                return this.matchJSX("{")
                  ? this.parseJSXExpressionAttribute()
                  : this.matchJSX("<")
                  ? this.parseJSXElement()
                  : this.parseJSXStringLiteralAttribute();
              };
              JSXParser.prototype.parseJSXNameValueAttribute = function() {
                var e = this.createJSXNode();
                var t = this.parseJSXAttributeName();
                var r = null;
                if (this.matchJSX("=")) {
                  this.expectJSX("=");
                  r = this.parseJSXAttributeValue();
                }
                return this.finalize(e, new a.JSXAttribute(t, r));
              };
              JSXParser.prototype.parseJSXSpreadAttribute = function() {
                var e = this.createJSXNode();
                this.expectJSX("{");
                this.expectJSX("...");
                this.finishJSX();
                var t = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(e, new a.JSXSpreadAttribute(t));
              };
              JSXParser.prototype.parseJSXAttributes = function() {
                var e = [];
                while (!this.matchJSX("/") && !this.matchJSX(">")) {
                  var t = this.matchJSX("{")
                    ? this.parseJSXSpreadAttribute()
                    : this.parseJSXNameValueAttribute();
                  e.push(t);
                }
                return e;
              };
              JSXParser.prototype.parseJSXOpeningElement = function() {
                var e = this.createJSXNode();
                this.expectJSX("<");
                var t = this.parseJSXElementName();
                var r = this.parseJSXAttributes();
                var i = this.matchJSX("/");
                if (i) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(e, new a.JSXOpeningElement(t, i, r));
              };
              JSXParser.prototype.parseJSXBoundaryElement = function() {
                var e = this.createJSXNode();
                this.expectJSX("<");
                if (this.matchJSX("/")) {
                  this.expectJSX("/");
                  var t = this.parseJSXElementName();
                  this.expectJSX(">");
                  return this.finalize(e, new a.JSXClosingElement(t));
                }
                var r = this.parseJSXElementName();
                var i = this.parseJSXAttributes();
                var n = this.matchJSX("/");
                if (n) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(e, new a.JSXOpeningElement(r, n, i));
              };
              JSXParser.prototype.parseJSXEmptyExpression = function() {
                var e = this.createJSXChildNode();
                this.collectComments();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                return this.finalize(e, new a.JSXEmptyExpression());
              };
              JSXParser.prototype.parseJSXExpressionContainer = function() {
                var e = this.createJSXNode();
                this.expectJSX("{");
                var t;
                if (this.matchJSX("}")) {
                  t = this.parseJSXEmptyExpression();
                  this.expectJSX("}");
                } else {
                  this.finishJSX();
                  t = this.parseAssignmentExpression();
                  this.reenterJSX();
                }
                return this.finalize(e, new a.JSXExpressionContainer(t));
              };
              JSXParser.prototype.parseJSXChildren = function() {
                var e = [];
                while (!this.scanner.eof()) {
                  var t = this.createJSXChildNode();
                  var r = this.nextJSXText();
                  if (r.start < r.end) {
                    var i = this.getTokenRaw(r);
                    var n = this.finalize(t, new a.JSXText(r.value, i));
                    e.push(n);
                  }
                  if (this.scanner.source[this.scanner.index] === "{") {
                    var u = this.parseJSXExpressionContainer();
                    e.push(u);
                  } else {
                    break;
                  }
                }
                return e;
              };
              JSXParser.prototype.parseComplexJSXElement = function(e) {
                var t = [];
                while (!this.scanner.eof()) {
                  e.children = e.children.concat(this.parseJSXChildren());
                  var r = this.createJSXChildNode();
                  var i = this.parseJSXBoundaryElement();
                  if (i.type === u.JSXSyntax.JSXOpeningElement) {
                    var n = i;
                    if (n.selfClosing) {
                      var s = this.finalize(r, new a.JSXElement(n, [], null));
                      e.children.push(s);
                    } else {
                      t.push(e);
                      e = { node: r, opening: n, closing: null, children: [] };
                    }
                  }
                  if (i.type === u.JSXSyntax.JSXClosingElement) {
                    e.closing = i;
                    var o = getQualifiedElementName(e.opening.name);
                    var l = getQualifiedElementName(e.closing.name);
                    if (o !== l) {
                      this.tolerateError(
                        "Expected corresponding JSX closing tag for %0",
                        o
                      );
                    }
                    if (t.length > 0) {
                      var s = this.finalize(
                        e.node,
                        new a.JSXElement(e.opening, e.children, e.closing)
                      );
                      e = t[t.length - 1];
                      e.children.push(s);
                      t.pop();
                    } else {
                      break;
                    }
                  }
                }
                return e;
              };
              JSXParser.prototype.parseJSXElement = function() {
                var e = this.createJSXNode();
                var t = this.parseJSXOpeningElement();
                var r = [];
                var i = null;
                if (!t.selfClosing) {
                  var n = this.parseComplexJSXElement({
                    node: e,
                    opening: t,
                    closing: i,
                    children: r
                  });
                  r = n.children;
                  i = n.closing;
                }
                return this.finalize(e, new a.JSXElement(t, r, i));
              };
              JSXParser.prototype.parseJSXRoot = function() {
                if (this.config.tokens) {
                  this.tokens.pop();
                }
                this.startJSX();
                var e = this.parseJSXElement();
                this.finishJSX();
                return e;
              };
              JSXParser.prototype.isStartOfExpression = function() {
                return (
                  e.prototype.isStartOfExpression.call(this) || this.match("<")
                );
              };
              return JSXParser;
            })(o.Parser);
            t.JSXParser = c;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var r = {
              NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            t.Character = {
              fromCodePoint: function(e) {
                return e < 65536
                  ? String.fromCharCode(e)
                  : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((e - 65536) & 1023));
              },
              isWhiteSpace: function(e) {
                return (
                  e === 32 ||
                  e === 9 ||
                  e === 11 ||
                  e === 12 ||
                  e === 160 ||
                  (e >= 5760 &&
                    [
                      5760,
                      8192,
                      8193,
                      8194,
                      8195,
                      8196,
                      8197,
                      8198,
                      8199,
                      8200,
                      8201,
                      8202,
                      8239,
                      8287,
                      12288,
                      65279
                    ].indexOf(e) >= 0)
                );
              },
              isLineTerminator: function(e) {
                return e === 10 || e === 13 || e === 8232 || e === 8233;
              },
              isIdentifierStart: function(e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  e === 92 ||
                  (e >= 128 &&
                    r.NonAsciiIdentifierStart.test(
                      t.Character.fromCodePoint(e)
                    ))
                );
              },
              isIdentifierPart: function(e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  (e >= 48 && e <= 57) ||
                  e === 92 ||
                  (e >= 128 &&
                    r.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e)))
                );
              },
              isDecimalDigit: function(e) {
                return e >= 48 && e <= 57;
              },
              isHexDigit: function(e) {
                return (
                  (e >= 48 && e <= 57) ||
                  (e >= 65 && e <= 70) ||
                  (e >= 97 && e <= 102)
                );
              },
              isOctalDigit: function(e) {
                return e >= 48 && e <= 55;
              }
            };
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(6);
            var n = (function() {
              function JSXClosingElement(e) {
                this.type = i.JSXSyntax.JSXClosingElement;
                this.name = e;
              }
              return JSXClosingElement;
            })();
            t.JSXClosingElement = n;
            var a = (function() {
              function JSXElement(e, t, r) {
                this.type = i.JSXSyntax.JSXElement;
                this.openingElement = e;
                this.children = t;
                this.closingElement = r;
              }
              return JSXElement;
            })();
            t.JSXElement = a;
            var u = (function() {
              function JSXEmptyExpression() {
                this.type = i.JSXSyntax.JSXEmptyExpression;
              }
              return JSXEmptyExpression;
            })();
            t.JSXEmptyExpression = u;
            var s = (function() {
              function JSXExpressionContainer(e) {
                this.type = i.JSXSyntax.JSXExpressionContainer;
                this.expression = e;
              }
              return JSXExpressionContainer;
            })();
            t.JSXExpressionContainer = s;
            var o = (function() {
              function JSXIdentifier(e) {
                this.type = i.JSXSyntax.JSXIdentifier;
                this.name = e;
              }
              return JSXIdentifier;
            })();
            t.JSXIdentifier = o;
            var l = (function() {
              function JSXMemberExpression(e, t) {
                this.type = i.JSXSyntax.JSXMemberExpression;
                this.object = e;
                this.property = t;
              }
              return JSXMemberExpression;
            })();
            t.JSXMemberExpression = l;
            var f = (function() {
              function JSXAttribute(e, t) {
                this.type = i.JSXSyntax.JSXAttribute;
                this.name = e;
                this.value = t;
              }
              return JSXAttribute;
            })();
            t.JSXAttribute = f;
            var c = (function() {
              function JSXNamespacedName(e, t) {
                this.type = i.JSXSyntax.JSXNamespacedName;
                this.namespace = e;
                this.name = t;
              }
              return JSXNamespacedName;
            })();
            t.JSXNamespacedName = c;
            var h = (function() {
              function JSXOpeningElement(e, t, r) {
                this.type = i.JSXSyntax.JSXOpeningElement;
                this.name = e;
                this.selfClosing = t;
                this.attributes = r;
              }
              return JSXOpeningElement;
            })();
            t.JSXOpeningElement = h;
            var p = (function() {
              function JSXSpreadAttribute(e) {
                this.type = i.JSXSyntax.JSXSpreadAttribute;
                this.argument = e;
              }
              return JSXSpreadAttribute;
            })();
            t.JSXSpreadAttribute = p;
            var v = (function() {
              function JSXText(e, t) {
                this.type = i.JSXSyntax.JSXText;
                this.value = e;
                this.raw = t;
              }
              return JSXText;
            })();
            t.JSXText = v;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.JSXSyntax = {
              JSXAttribute: "JSXAttribute",
              JSXClosingElement: "JSXClosingElement",
              JSXElement: "JSXElement",
              JSXEmptyExpression: "JSXEmptyExpression",
              JSXExpressionContainer: "JSXExpressionContainer",
              JSXIdentifier: "JSXIdentifier",
              JSXMemberExpression: "JSXMemberExpression",
              JSXNamespacedName: "JSXNamespacedName",
              JSXOpeningElement: "JSXOpeningElement",
              JSXSpreadAttribute: "JSXSpreadAttribute",
              JSXText: "JSXText"
            };
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(2);
            var n = (function() {
              function ArrayExpression(e) {
                this.type = i.Syntax.ArrayExpression;
                this.elements = e;
              }
              return ArrayExpression;
            })();
            t.ArrayExpression = n;
            var a = (function() {
              function ArrayPattern(e) {
                this.type = i.Syntax.ArrayPattern;
                this.elements = e;
              }
              return ArrayPattern;
            })();
            t.ArrayPattern = a;
            var u = (function() {
              function ArrowFunctionExpression(e, t, r) {
                this.type = i.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = e;
                this.body = t;
                this.generator = false;
                this.expression = r;
                this.async = false;
              }
              return ArrowFunctionExpression;
            })();
            t.ArrowFunctionExpression = u;
            var s = (function() {
              function AssignmentExpression(e, t, r) {
                this.type = i.Syntax.AssignmentExpression;
                this.operator = e;
                this.left = t;
                this.right = r;
              }
              return AssignmentExpression;
            })();
            t.AssignmentExpression = s;
            var o = (function() {
              function AssignmentPattern(e, t) {
                this.type = i.Syntax.AssignmentPattern;
                this.left = e;
                this.right = t;
              }
              return AssignmentPattern;
            })();
            t.AssignmentPattern = o;
            var l = (function() {
              function AsyncArrowFunctionExpression(e, t, r) {
                this.type = i.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = e;
                this.body = t;
                this.generator = false;
                this.expression = r;
                this.async = true;
              }
              return AsyncArrowFunctionExpression;
            })();
            t.AsyncArrowFunctionExpression = l;
            var f = (function() {
              function AsyncFunctionDeclaration(e, t, r) {
                this.type = i.Syntax.FunctionDeclaration;
                this.id = e;
                this.params = t;
                this.body = r;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionDeclaration;
            })();
            t.AsyncFunctionDeclaration = f;
            var c = (function() {
              function AsyncFunctionExpression(e, t, r) {
                this.type = i.Syntax.FunctionExpression;
                this.id = e;
                this.params = t;
                this.body = r;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionExpression;
            })();
            t.AsyncFunctionExpression = c;
            var h = (function() {
              function AwaitExpression(e) {
                this.type = i.Syntax.AwaitExpression;
                this.argument = e;
              }
              return AwaitExpression;
            })();
            t.AwaitExpression = h;
            var p = (function() {
              function BinaryExpression(e, t, r) {
                var n = e === "||" || e === "&&";
                this.type = n
                  ? i.Syntax.LogicalExpression
                  : i.Syntax.BinaryExpression;
                this.operator = e;
                this.left = t;
                this.right = r;
              }
              return BinaryExpression;
            })();
            t.BinaryExpression = p;
            var v = (function() {
              function BlockStatement(e) {
                this.type = i.Syntax.BlockStatement;
                this.body = e;
              }
              return BlockStatement;
            })();
            t.BlockStatement = v;
            var d = (function() {
              function BreakStatement(e) {
                this.type = i.Syntax.BreakStatement;
                this.label = e;
              }
              return BreakStatement;
            })();
            t.BreakStatement = d;
            var D = (function() {
              function CallExpression(e, t) {
                this.type = i.Syntax.CallExpression;
                this.callee = e;
                this.arguments = t;
              }
              return CallExpression;
            })();
            t.CallExpression = D;
            var m = (function() {
              function CatchClause(e, t) {
                this.type = i.Syntax.CatchClause;
                this.param = e;
                this.body = t;
              }
              return CatchClause;
            })();
            t.CatchClause = m;
            var g = (function() {
              function ClassBody(e) {
                this.type = i.Syntax.ClassBody;
                this.body = e;
              }
              return ClassBody;
            })();
            t.ClassBody = g;
            var E = (function() {
              function ClassDeclaration(e, t, r) {
                this.type = i.Syntax.ClassDeclaration;
                this.id = e;
                this.superClass = t;
                this.body = r;
              }
              return ClassDeclaration;
            })();
            t.ClassDeclaration = E;
            var A = (function() {
              function ClassExpression(e, t, r) {
                this.type = i.Syntax.ClassExpression;
                this.id = e;
                this.superClass = t;
                this.body = r;
              }
              return ClassExpression;
            })();
            t.ClassExpression = A;
            var C = (function() {
              function ComputedMemberExpression(e, t) {
                this.type = i.Syntax.MemberExpression;
                this.computed = true;
                this.object = e;
                this.property = t;
              }
              return ComputedMemberExpression;
            })();
            t.ComputedMemberExpression = C;
            var y = (function() {
              function ConditionalExpression(e, t, r) {
                this.type = i.Syntax.ConditionalExpression;
                this.test = e;
                this.consequent = t;
                this.alternate = r;
              }
              return ConditionalExpression;
            })();
            t.ConditionalExpression = y;
            var w = (function() {
              function ContinueStatement(e) {
                this.type = i.Syntax.ContinueStatement;
                this.label = e;
              }
              return ContinueStatement;
            })();
            t.ContinueStatement = w;
            var x = (function() {
              function DebuggerStatement() {
                this.type = i.Syntax.DebuggerStatement;
              }
              return DebuggerStatement;
            })();
            t.DebuggerStatement = x;
            var b = (function() {
              function Directive(e, t) {
                this.type = i.Syntax.ExpressionStatement;
                this.expression = e;
                this.directive = t;
              }
              return Directive;
            })();
            t.Directive = b;
            var F = (function() {
              function DoWhileStatement(e, t) {
                this.type = i.Syntax.DoWhileStatement;
                this.body = e;
                this.test = t;
              }
              return DoWhileStatement;
            })();
            t.DoWhileStatement = F;
            var S = (function() {
              function EmptyStatement() {
                this.type = i.Syntax.EmptyStatement;
              }
              return EmptyStatement;
            })();
            t.EmptyStatement = S;
            var B = (function() {
              function ExportAllDeclaration(e) {
                this.type = i.Syntax.ExportAllDeclaration;
                this.source = e;
              }
              return ExportAllDeclaration;
            })();
            t.ExportAllDeclaration = B;
            var k = (function() {
              function ExportDefaultDeclaration(e) {
                this.type = i.Syntax.ExportDefaultDeclaration;
                this.declaration = e;
              }
              return ExportDefaultDeclaration;
            })();
            t.ExportDefaultDeclaration = k;
            var O = (function() {
              function ExportNamedDeclaration(e, t, r) {
                this.type = i.Syntax.ExportNamedDeclaration;
                this.declaration = e;
                this.specifiers = t;
                this.source = r;
              }
              return ExportNamedDeclaration;
            })();
            t.ExportNamedDeclaration = O;
            var P = (function() {
              function ExportSpecifier(e, t) {
                this.type = i.Syntax.ExportSpecifier;
                this.exported = t;
                this.local = e;
              }
              return ExportSpecifier;
            })();
            t.ExportSpecifier = P;
            var T = (function() {
              function ExpressionStatement(e) {
                this.type = i.Syntax.ExpressionStatement;
                this.expression = e;
              }
              return ExpressionStatement;
            })();
            t.ExpressionStatement = T;
            var I = (function() {
              function ForInStatement(e, t, r) {
                this.type = i.Syntax.ForInStatement;
                this.left = e;
                this.right = t;
                this.body = r;
                this.each = false;
              }
              return ForInStatement;
            })();
            t.ForInStatement = I;
            var M = (function() {
              function ForOfStatement(e, t, r) {
                this.type = i.Syntax.ForOfStatement;
                this.left = e;
                this.right = t;
                this.body = r;
              }
              return ForOfStatement;
            })();
            t.ForOfStatement = M;
            var L = (function() {
              function ForStatement(e, t, r, n) {
                this.type = i.Syntax.ForStatement;
                this.init = e;
                this.test = t;
                this.update = r;
                this.body = n;
              }
              return ForStatement;
            })();
            t.ForStatement = L;
            var R = (function() {
              function FunctionDeclaration(e, t, r, n) {
                this.type = i.Syntax.FunctionDeclaration;
                this.id = e;
                this.params = t;
                this.body = r;
                this.generator = n;
                this.expression = false;
                this.async = false;
              }
              return FunctionDeclaration;
            })();
            t.FunctionDeclaration = R;
            var j = (function() {
              function FunctionExpression(e, t, r, n) {
                this.type = i.Syntax.FunctionExpression;
                this.id = e;
                this.params = t;
                this.body = r;
                this.generator = n;
                this.expression = false;
                this.async = false;
              }
              return FunctionExpression;
            })();
            t.FunctionExpression = j;
            var U = (function() {
              function Identifier(e) {
                this.type = i.Syntax.Identifier;
                this.name = e;
              }
              return Identifier;
            })();
            t.Identifier = U;
            var N = (function() {
              function IfStatement(e, t, r) {
                this.type = i.Syntax.IfStatement;
                this.test = e;
                this.consequent = t;
                this.alternate = r;
              }
              return IfStatement;
            })();
            t.IfStatement = N;
            var J = (function() {
              function ImportDeclaration(e, t) {
                this.type = i.Syntax.ImportDeclaration;
                this.specifiers = e;
                this.source = t;
              }
              return ImportDeclaration;
            })();
            t.ImportDeclaration = J;
            var z = (function() {
              function ImportDefaultSpecifier(e) {
                this.type = i.Syntax.ImportDefaultSpecifier;
                this.local = e;
              }
              return ImportDefaultSpecifier;
            })();
            t.ImportDefaultSpecifier = z;
            var X = (function() {
              function ImportNamespaceSpecifier(e) {
                this.type = i.Syntax.ImportNamespaceSpecifier;
                this.local = e;
              }
              return ImportNamespaceSpecifier;
            })();
            t.ImportNamespaceSpecifier = X;
            var G = (function() {
              function ImportSpecifier(e, t) {
                this.type = i.Syntax.ImportSpecifier;
                this.local = e;
                this.imported = t;
              }
              return ImportSpecifier;
            })();
            t.ImportSpecifier = G;
            var q = (function() {
              function LabeledStatement(e, t) {
                this.type = i.Syntax.LabeledStatement;
                this.label = e;
                this.body = t;
              }
              return LabeledStatement;
            })();
            t.LabeledStatement = q;
            var W = (function() {
              function Literal(e, t) {
                this.type = i.Syntax.Literal;
                this.value = e;
                this.raw = t;
              }
              return Literal;
            })();
            t.Literal = W;
            var _ = (function() {
              function MetaProperty(e, t) {
                this.type = i.Syntax.MetaProperty;
                this.meta = e;
                this.property = t;
              }
              return MetaProperty;
            })();
            t.MetaProperty = _;
            var V = (function() {
              function MethodDefinition(e, t, r, n, a) {
                this.type = i.Syntax.MethodDefinition;
                this.key = e;
                this.computed = t;
                this.value = r;
                this.kind = n;
                this.static = a;
              }
              return MethodDefinition;
            })();
            t.MethodDefinition = V;
            var Y = (function() {
              function Module(e) {
                this.type = i.Syntax.Program;
                this.body = e;
                this.sourceType = "module";
              }
              return Module;
            })();
            t.Module = Y;
            var H = (function() {
              function NewExpression(e, t) {
                this.type = i.Syntax.NewExpression;
                this.callee = e;
                this.arguments = t;
              }
              return NewExpression;
            })();
            t.NewExpression = H;
            var $ = (function() {
              function ObjectExpression(e) {
                this.type = i.Syntax.ObjectExpression;
                this.properties = e;
              }
              return ObjectExpression;
            })();
            t.ObjectExpression = $;
            var Z = (function() {
              function ObjectPattern(e) {
                this.type = i.Syntax.ObjectPattern;
                this.properties = e;
              }
              return ObjectPattern;
            })();
            t.ObjectPattern = Z;
            var Q = (function() {
              function Property(e, t, r, n, a, u) {
                this.type = i.Syntax.Property;
                this.key = t;
                this.computed = r;
                this.value = n;
                this.kind = e;
                this.method = a;
                this.shorthand = u;
              }
              return Property;
            })();
            t.Property = Q;
            var K = (function() {
              function RegexLiteral(e, t, r, n) {
                this.type = i.Syntax.Literal;
                this.value = e;
                this.raw = t;
                this.regex = { pattern: r, flags: n };
              }
              return RegexLiteral;
            })();
            t.RegexLiteral = K;
            var ee = (function() {
              function RestElement(e) {
                this.type = i.Syntax.RestElement;
                this.argument = e;
              }
              return RestElement;
            })();
            t.RestElement = ee;
            var te = (function() {
              function ReturnStatement(e) {
                this.type = i.Syntax.ReturnStatement;
                this.argument = e;
              }
              return ReturnStatement;
            })();
            t.ReturnStatement = te;
            var re = (function() {
              function Script(e) {
                this.type = i.Syntax.Program;
                this.body = e;
                this.sourceType = "script";
              }
              return Script;
            })();
            t.Script = re;
            var ie = (function() {
              function SequenceExpression(e) {
                this.type = i.Syntax.SequenceExpression;
                this.expressions = e;
              }
              return SequenceExpression;
            })();
            t.SequenceExpression = ie;
            var ne = (function() {
              function SpreadElement(e) {
                this.type = i.Syntax.SpreadElement;
                this.argument = e;
              }
              return SpreadElement;
            })();
            t.SpreadElement = ne;
            var ae = (function() {
              function StaticMemberExpression(e, t) {
                this.type = i.Syntax.MemberExpression;
                this.computed = false;
                this.object = e;
                this.property = t;
              }
              return StaticMemberExpression;
            })();
            t.StaticMemberExpression = ae;
            var ue = (function() {
              function Super() {
                this.type = i.Syntax.Super;
              }
              return Super;
            })();
            t.Super = ue;
            var se = (function() {
              function SwitchCase(e, t) {
                this.type = i.Syntax.SwitchCase;
                this.test = e;
                this.consequent = t;
              }
              return SwitchCase;
            })();
            t.SwitchCase = se;
            var oe = (function() {
              function SwitchStatement(e, t) {
                this.type = i.Syntax.SwitchStatement;
                this.discriminant = e;
                this.cases = t;
              }
              return SwitchStatement;
            })();
            t.SwitchStatement = oe;
            var le = (function() {
              function TaggedTemplateExpression(e, t) {
                this.type = i.Syntax.TaggedTemplateExpression;
                this.tag = e;
                this.quasi = t;
              }
              return TaggedTemplateExpression;
            })();
            t.TaggedTemplateExpression = le;
            var fe = (function() {
              function TemplateElement(e, t) {
                this.type = i.Syntax.TemplateElement;
                this.value = e;
                this.tail = t;
              }
              return TemplateElement;
            })();
            t.TemplateElement = fe;
            var ce = (function() {
              function TemplateLiteral(e, t) {
                this.type = i.Syntax.TemplateLiteral;
                this.quasis = e;
                this.expressions = t;
              }
              return TemplateLiteral;
            })();
            t.TemplateLiteral = ce;
            var he = (function() {
              function ThisExpression() {
                this.type = i.Syntax.ThisExpression;
              }
              return ThisExpression;
            })();
            t.ThisExpression = he;
            var pe = (function() {
              function ThrowStatement(e) {
                this.type = i.Syntax.ThrowStatement;
                this.argument = e;
              }
              return ThrowStatement;
            })();
            t.ThrowStatement = pe;
            var ve = (function() {
              function TryStatement(e, t, r) {
                this.type = i.Syntax.TryStatement;
                this.block = e;
                this.handler = t;
                this.finalizer = r;
              }
              return TryStatement;
            })();
            t.TryStatement = ve;
            var de = (function() {
              function UnaryExpression(e, t) {
                this.type = i.Syntax.UnaryExpression;
                this.operator = e;
                this.argument = t;
                this.prefix = true;
              }
              return UnaryExpression;
            })();
            t.UnaryExpression = de;
            var De = (function() {
              function UpdateExpression(e, t, r) {
                this.type = i.Syntax.UpdateExpression;
                this.operator = e;
                this.argument = t;
                this.prefix = r;
              }
              return UpdateExpression;
            })();
            t.UpdateExpression = De;
            var me = (function() {
              function VariableDeclaration(e, t) {
                this.type = i.Syntax.VariableDeclaration;
                this.declarations = e;
                this.kind = t;
              }
              return VariableDeclaration;
            })();
            t.VariableDeclaration = me;
            var ge = (function() {
              function VariableDeclarator(e, t) {
                this.type = i.Syntax.VariableDeclarator;
                this.id = e;
                this.init = t;
              }
              return VariableDeclarator;
            })();
            t.VariableDeclarator = ge;
            var Ee = (function() {
              function WhileStatement(e, t) {
                this.type = i.Syntax.WhileStatement;
                this.test = e;
                this.body = t;
              }
              return WhileStatement;
            })();
            t.WhileStatement = Ee;
            var Ae = (function() {
              function WithStatement(e, t) {
                this.type = i.Syntax.WithStatement;
                this.object = e;
                this.body = t;
              }
              return WithStatement;
            })();
            t.WithStatement = Ae;
            var Ce = (function() {
              function YieldExpression(e, t) {
                this.type = i.Syntax.YieldExpression;
                this.argument = e;
                this.delegate = t;
              }
              return YieldExpression;
            })();
            t.YieldExpression = Ce;
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(9);
            var n = r(10);
            var a = r(11);
            var u = r(7);
            var s = r(12);
            var o = r(2);
            var l = r(13);
            var f = "ArrowParameterPlaceHolder";
            var c = (function() {
              function Parser(e, t, r) {
                if (t === void 0) {
                  t = {};
                }
                this.config = {
                  range: typeof t.range === "boolean" && t.range,
                  loc: typeof t.loc === "boolean" && t.loc,
                  source: null,
                  tokens: typeof t.tokens === "boolean" && t.tokens,
                  comment: typeof t.comment === "boolean" && t.comment,
                  tolerant: typeof t.tolerant === "boolean" && t.tolerant
                };
                if (this.config.loc && t.source && t.source !== null) {
                  this.config.source = String(t.source);
                }
                this.delegate = r;
                this.errorHandler = new n.ErrorHandler();
                this.errorHandler.tolerant = this.config.tolerant;
                this.scanner = new s.Scanner(e, this.errorHandler);
                this.scanner.trackComment = this.config.comment;
                this.operatorPrecedence = {
                  ")": 0,
                  ";": 0,
                  ",": 0,
                  "=": 0,
                  "]": 0,
                  "||": 1,
                  "&&": 2,
                  "|": 3,
                  "^": 4,
                  "&": 5,
                  "==": 6,
                  "!=": 6,
                  "===": 6,
                  "!==": 6,
                  "<": 7,
                  ">": 7,
                  "<=": 7,
                  ">=": 7,
                  "<<": 8,
                  ">>": 8,
                  ">>>": 8,
                  "+": 9,
                  "-": 9,
                  "*": 11,
                  "/": 11,
                  "%": 11
                };
                this.lookahead = {
                  type: 2,
                  value: "",
                  lineNumber: this.scanner.lineNumber,
                  lineStart: 0,
                  start: 0,
                  end: 0
                };
                this.hasLineTerminator = false;
                this.context = {
                  isModule: false,
                  await: false,
                  allowIn: true,
                  allowStrictDirective: true,
                  allowYield: true,
                  firstCoverInitializedNameError: null,
                  isAssignmentTarget: false,
                  isBindingElement: false,
                  inFunctionBody: false,
                  inIteration: false,
                  inSwitch: false,
                  labelSet: {},
                  strict: false
                };
                this.tokens = [];
                this.startMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.lastMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.nextToken();
                this.lastMarker = {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              }
              Parser.prototype.throwError = function(e) {
                var t = [];
                for (var r = 1; r < arguments.length; r++) {
                  t[r - 1] = arguments[r];
                }
                var n = Array.prototype.slice.call(arguments, 1);
                var a = e.replace(/%(\d)/g, function(e, t) {
                  i.assert(t < n.length, "Message reference must be in range");
                  return n[t];
                });
                var u = this.lastMarker.index;
                var s = this.lastMarker.line;
                var o = this.lastMarker.column + 1;
                throw this.errorHandler.createError(u, s, o, a);
              };
              Parser.prototype.tolerateError = function(e) {
                var t = [];
                for (var r = 1; r < arguments.length; r++) {
                  t[r - 1] = arguments[r];
                }
                var n = Array.prototype.slice.call(arguments, 1);
                var a = e.replace(/%(\d)/g, function(e, t) {
                  i.assert(t < n.length, "Message reference must be in range");
                  return n[t];
                });
                var u = this.lastMarker.index;
                var s = this.scanner.lineNumber;
                var o = this.lastMarker.column + 1;
                this.errorHandler.tolerateError(u, s, o, a);
              };
              Parser.prototype.unexpectedTokenError = function(e, t) {
                var r = t || a.Messages.UnexpectedToken;
                var i;
                if (e) {
                  if (!t) {
                    r =
                      e.type === 2
                        ? a.Messages.UnexpectedEOS
                        : e.type === 3
                        ? a.Messages.UnexpectedIdentifier
                        : e.type === 6
                        ? a.Messages.UnexpectedNumber
                        : e.type === 8
                        ? a.Messages.UnexpectedString
                        : e.type === 10
                        ? a.Messages.UnexpectedTemplate
                        : a.Messages.UnexpectedToken;
                    if (e.type === 4) {
                      if (this.scanner.isFutureReservedWord(e.value)) {
                        r = a.Messages.UnexpectedReserved;
                      } else if (
                        this.context.strict &&
                        this.scanner.isStrictModeReservedWord(e.value)
                      ) {
                        r = a.Messages.StrictReservedWord;
                      }
                    }
                  }
                  i = e.value;
                } else {
                  i = "ILLEGAL";
                }
                r = r.replace("%0", i);
                if (e && typeof e.lineNumber === "number") {
                  var n = e.start;
                  var u = e.lineNumber;
                  var s = this.lastMarker.index - this.lastMarker.column;
                  var o = e.start - s + 1;
                  return this.errorHandler.createError(n, u, o, r);
                } else {
                  var n = this.lastMarker.index;
                  var u = this.lastMarker.line;
                  var o = this.lastMarker.column + 1;
                  return this.errorHandler.createError(n, u, o, r);
                }
              };
              Parser.prototype.throwUnexpectedToken = function(e, t) {
                throw this.unexpectedTokenError(e, t);
              };
              Parser.prototype.tolerateUnexpectedToken = function(e, t) {
                this.errorHandler.tolerate(this.unexpectedTokenError(e, t));
              };
              Parser.prototype.collectComments = function() {
                if (!this.config.comment) {
                  this.scanner.scanComments();
                } else {
                  var e = this.scanner.scanComments();
                  if (e.length > 0 && this.delegate) {
                    for (var t = 0; t < e.length; ++t) {
                      var r = e[t];
                      var i = void 0;
                      i = {
                        type: r.multiLine ? "BlockComment" : "LineComment",
                        value: this.scanner.source.slice(r.slice[0], r.slice[1])
                      };
                      if (this.config.range) {
                        i.range = r.range;
                      }
                      if (this.config.loc) {
                        i.loc = r.loc;
                      }
                      var n = {
                        start: {
                          line: r.loc.start.line,
                          column: r.loc.start.column,
                          offset: r.range[0]
                        },
                        end: {
                          line: r.loc.end.line,
                          column: r.loc.end.column,
                          offset: r.range[1]
                        }
                      };
                      this.delegate(i, n);
                    }
                  }
                }
              };
              Parser.prototype.getTokenRaw = function(e) {
                return this.scanner.source.slice(e.start, e.end);
              };
              Parser.prototype.convertToken = function(e) {
                var t = {
                  type: l.TokenName[e.type],
                  value: this.getTokenRaw(e)
                };
                if (this.config.range) {
                  t.range = [e.start, e.end];
                }
                if (this.config.loc) {
                  t.loc = {
                    start: {
                      line: this.startMarker.line,
                      column: this.startMarker.column
                    },
                    end: {
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart
                    }
                  };
                }
                if (e.type === 9) {
                  var r = e.pattern;
                  var i = e.flags;
                  t.regex = { pattern: r, flags: i };
                }
                return t;
              };
              Parser.prototype.nextToken = function() {
                var e = this.lookahead;
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart;
                this.collectComments();
                if (this.scanner.index !== this.startMarker.index) {
                  this.startMarker.index = this.scanner.index;
                  this.startMarker.line = this.scanner.lineNumber;
                  this.startMarker.column =
                    this.scanner.index - this.scanner.lineStart;
                }
                var t = this.scanner.lex();
                this.hasLineTerminator = e.lineNumber !== t.lineNumber;
                if (t && this.context.strict && t.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(t.value)) {
                    t.type = 4;
                  }
                }
                this.lookahead = t;
                if (this.config.tokens && t.type !== 2) {
                  this.tokens.push(this.convertToken(t));
                }
                return e;
              };
              Parser.prototype.nextRegexToken = function() {
                this.collectComments();
                var e = this.scanner.scanRegExp();
                if (this.config.tokens) {
                  this.tokens.pop();
                  this.tokens.push(this.convertToken(e));
                }
                this.lookahead = e;
                this.nextToken();
                return e;
              };
              Parser.prototype.createNode = function() {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column
                };
              };
              Parser.prototype.startNode = function(e, t) {
                if (t === void 0) {
                  t = 0;
                }
                var r = e.start - e.lineStart;
                var i = e.lineNumber;
                if (r < 0) {
                  r += t;
                  i--;
                }
                return { index: e.start, line: i, column: r };
              };
              Parser.prototype.finalize = function(e, t) {
                if (this.config.range) {
                  t.range = [e.index, this.lastMarker.index];
                }
                if (this.config.loc) {
                  t.loc = {
                    start: { line: e.line, column: e.column },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column
                    }
                  };
                  if (this.config.source) {
                    t.loc.source = this.config.source;
                  }
                }
                if (this.delegate) {
                  var r = {
                    start: { line: e.line, column: e.column, offset: e.index },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index
                    }
                  };
                  this.delegate(t, r);
                }
                return t;
              };
              Parser.prototype.expect = function(e) {
                var t = this.nextToken();
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t);
                }
              };
              Parser.prototype.expectCommaSeparator = function() {
                if (this.config.tolerant) {
                  var e = this.lookahead;
                  if (e.type === 7 && e.value === ",") {
                    this.nextToken();
                  } else if (e.type === 7 && e.value === ";") {
                    this.nextToken();
                    this.tolerateUnexpectedToken(e);
                  } else {
                    this.tolerateUnexpectedToken(e, a.Messages.UnexpectedToken);
                  }
                } else {
                  this.expect(",");
                }
              };
              Parser.prototype.expectKeyword = function(e) {
                var t = this.nextToken();
                if (t.type !== 4 || t.value !== e) {
                  this.throwUnexpectedToken(t);
                }
              };
              Parser.prototype.match = function(e) {
                return this.lookahead.type === 7 && this.lookahead.value === e;
              };
              Parser.prototype.matchKeyword = function(e) {
                return this.lookahead.type === 4 && this.lookahead.value === e;
              };
              Parser.prototype.matchContextualKeyword = function(e) {
                return this.lookahead.type === 3 && this.lookahead.value === e;
              };
              Parser.prototype.matchAssign = function() {
                if (this.lookahead.type !== 7) {
                  return false;
                }
                var e = this.lookahead.value;
                return (
                  e === "=" ||
                  e === "*=" ||
                  e === "**=" ||
                  e === "/=" ||
                  e === "%=" ||
                  e === "+=" ||
                  e === "-=" ||
                  e === "<<=" ||
                  e === ">>=" ||
                  e === ">>>=" ||
                  e === "&=" ||
                  e === "^=" ||
                  e === "|="
                );
              };
              Parser.prototype.isolateCoverGrammar = function(e) {
                var t = this.context.isBindingElement;
                var r = this.context.isAssignmentTarget;
                var i = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var n = e.call(this);
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(
                    this.context.firstCoverInitializedNameError
                  );
                }
                this.context.isBindingElement = t;
                this.context.isAssignmentTarget = r;
                this.context.firstCoverInitializedNameError = i;
                return n;
              };
              Parser.prototype.inheritCoverGrammar = function(e) {
                var t = this.context.isBindingElement;
                var r = this.context.isAssignmentTarget;
                var i = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var n = e.call(this);
                this.context.isBindingElement =
                  this.context.isBindingElement && t;
                this.context.isAssignmentTarget =
                  this.context.isAssignmentTarget && r;
                this.context.firstCoverInitializedNameError =
                  i || this.context.firstCoverInitializedNameError;
                return n;
              };
              Parser.prototype.consumeSemicolon = function() {
                if (this.match(";")) {
                  this.nextToken();
                } else if (!this.hasLineTerminator) {
                  if (this.lookahead.type !== 2 && !this.match("}")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.lastMarker.index = this.startMarker.index;
                  this.lastMarker.line = this.startMarker.line;
                  this.lastMarker.column = this.startMarker.column;
                }
              };
              Parser.prototype.parsePrimaryExpression = function() {
                var e = this.createNode();
                var t;
                var r, i;
                switch (this.lookahead.type) {
                  case 3:
                    if (
                      (this.context.isModule || this.context.await) &&
                      this.lookahead.value === "await"
                    ) {
                      this.tolerateUnexpectedToken(this.lookahead);
                    }
                    t = this.matchAsyncFunction()
                      ? this.parseFunctionExpression()
                      : this.finalize(
                          e,
                          new u.Identifier(this.nextToken().value)
                        );
                    break;
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(
                        this.lookahead,
                        a.Messages.StrictOctalLiteral
                      );
                    }
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    r = this.nextToken();
                    i = this.getTokenRaw(r);
                    t = this.finalize(e, new u.Literal(r.value, i));
                    break;
                  case 1:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    r = this.nextToken();
                    i = this.getTokenRaw(r);
                    t = this.finalize(e, new u.Literal(r.value === "true", i));
                    break;
                  case 5:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    r = this.nextToken();
                    i = this.getTokenRaw(r);
                    t = this.finalize(e, new u.Literal(null, i));
                    break;
                  case 10:
                    t = this.parseTemplateLiteral();
                    break;
                  case 7:
                    switch (this.lookahead.value) {
                      case "(":
                        this.context.isBindingElement = false;
                        t = this.inheritCoverGrammar(this.parseGroupExpression);
                        break;
                      case "[":
                        t = this.inheritCoverGrammar(
                          this.parseArrayInitializer
                        );
                        break;
                      case "{":
                        t = this.inheritCoverGrammar(
                          this.parseObjectInitializer
                        );
                        break;
                      case "/":
                      case "/=":
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        this.scanner.index = this.startMarker.index;
                        r = this.nextRegexToken();
                        i = this.getTokenRaw(r);
                        t = this.finalize(
                          e,
                          new u.RegexLiteral(r.regex, i, r.pattern, r.flags)
                        );
                        break;
                      default:
                        t = this.throwUnexpectedToken(this.nextToken());
                    }
                    break;
                  case 4:
                    if (
                      !this.context.strict &&
                      this.context.allowYield &&
                      this.matchKeyword("yield")
                    ) {
                      t = this.parseIdentifierName();
                    } else if (
                      !this.context.strict &&
                      this.matchKeyword("let")
                    ) {
                      t = this.finalize(
                        e,
                        new u.Identifier(this.nextToken().value)
                      );
                    } else {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      if (this.matchKeyword("function")) {
                        t = this.parseFunctionExpression();
                      } else if (this.matchKeyword("this")) {
                        this.nextToken();
                        t = this.finalize(e, new u.ThisExpression());
                      } else if (this.matchKeyword("class")) {
                        t = this.parseClassExpression();
                      } else {
                        t = this.throwUnexpectedToken(this.nextToken());
                      }
                    }
                    break;
                  default:
                    t = this.throwUnexpectedToken(this.nextToken());
                }
                return t;
              };
              Parser.prototype.parseSpreadElement = function() {
                var e = this.createNode();
                this.expect("...");
                var t = this.inheritCoverGrammar(
                  this.parseAssignmentExpression
                );
                return this.finalize(e, new u.SpreadElement(t));
              };
              Parser.prototype.parseArrayInitializer = function() {
                var e = this.createNode();
                var t = [];
                this.expect("[");
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    t.push(null);
                  } else if (this.match("...")) {
                    var r = this.parseSpreadElement();
                    if (!this.match("]")) {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      this.expect(",");
                    }
                    t.push(r);
                  } else {
                    t.push(
                      this.inheritCoverGrammar(this.parseAssignmentExpression)
                    );
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(e, new u.ArrayExpression(t));
              };
              Parser.prototype.parsePropertyMethod = function(e) {
                this.context.isAssignmentTarget = false;
                this.context.isBindingElement = false;
                var t = this.context.strict;
                var r = this.context.allowStrictDirective;
                this.context.allowStrictDirective = e.simple;
                var i = this.isolateCoverGrammar(
                  this.parseFunctionSourceElements
                );
                if (this.context.strict && e.firstRestricted) {
                  this.tolerateUnexpectedToken(e.firstRestricted, e.message);
                }
                if (this.context.strict && e.stricted) {
                  this.tolerateUnexpectedToken(e.stricted, e.message);
                }
                this.context.strict = t;
                this.context.allowStrictDirective = r;
                return i;
              };
              Parser.prototype.parsePropertyMethodFunction = function() {
                var e = false;
                var t = this.createNode();
                var r = this.context.allowYield;
                this.context.allowYield = true;
                var i = this.parseFormalParameters();
                var n = this.parsePropertyMethod(i);
                this.context.allowYield = r;
                return this.finalize(
                  t,
                  new u.FunctionExpression(null, i.params, n, e)
                );
              };
              Parser.prototype.parsePropertyMethodAsyncFunction = function() {
                var e = this.createNode();
                var t = this.context.allowYield;
                var r = this.context.await;
                this.context.allowYield = false;
                this.context.await = true;
                var i = this.parseFormalParameters();
                var n = this.parsePropertyMethod(i);
                this.context.allowYield = t;
                this.context.await = r;
                return this.finalize(
                  e,
                  new u.AsyncFunctionExpression(null, i.params, n)
                );
              };
              Parser.prototype.parseObjectPropertyKey = function() {
                var e = this.createNode();
                var t = this.nextToken();
                var r;
                switch (t.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && t.octal) {
                      this.tolerateUnexpectedToken(
                        t,
                        a.Messages.StrictOctalLiteral
                      );
                    }
                    var i = this.getTokenRaw(t);
                    r = this.finalize(e, new u.Literal(t.value, i));
                    break;
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    r = this.finalize(e, new u.Identifier(t.value));
                    break;
                  case 7:
                    if (t.value === "[") {
                      r = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      this.expect("]");
                    } else {
                      r = this.throwUnexpectedToken(t);
                    }
                    break;
                  default:
                    r = this.throwUnexpectedToken(t);
                }
                return r;
              };
              Parser.prototype.isPropertyKey = function(e, t) {
                return (
                  (e.type === o.Syntax.Identifier && e.name === t) ||
                  (e.type === o.Syntax.Literal && e.value === t)
                );
              };
              Parser.prototype.parseObjectProperty = function(e) {
                var t = this.createNode();
                var r = this.lookahead;
                var i;
                var n = null;
                var s = null;
                var o = false;
                var l = false;
                var f = false;
                var c = false;
                if (r.type === 3) {
                  var h = r.value;
                  this.nextToken();
                  o = this.match("[");
                  c =
                    !this.hasLineTerminator &&
                    h === "async" &&
                    !this.match(":") &&
                    !this.match("(") &&
                    !this.match("*") &&
                    !this.match(",");
                  n = c
                    ? this.parseObjectPropertyKey()
                    : this.finalize(t, new u.Identifier(h));
                } else if (this.match("*")) {
                  this.nextToken();
                } else {
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                }
                var p = this.qualifiedPropertyName(this.lookahead);
                if (r.type === 3 && !c && r.value === "get" && p) {
                  i = "get";
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                  this.context.allowYield = false;
                  s = this.parseGetterMethod();
                } else if (r.type === 3 && !c && r.value === "set" && p) {
                  i = "set";
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                  s = this.parseSetterMethod();
                } else if (r.type === 7 && r.value === "*" && p) {
                  i = "init";
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                  s = this.parseGeneratorMethod();
                  l = true;
                } else {
                  if (!n) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  i = "init";
                  if (this.match(":") && !c) {
                    if (!o && this.isPropertyKey(n, "__proto__")) {
                      if (e.value) {
                        this.tolerateError(a.Messages.DuplicateProtoProperty);
                      }
                      e.value = true;
                    }
                    this.nextToken();
                    s = this.inheritCoverGrammar(
                      this.parseAssignmentExpression
                    );
                  } else if (this.match("(")) {
                    s = c
                      ? this.parsePropertyMethodAsyncFunction()
                      : this.parsePropertyMethodFunction();
                    l = true;
                  } else if (r.type === 3) {
                    var h = this.finalize(t, new u.Identifier(r.value));
                    if (this.match("=")) {
                      this.context.firstCoverInitializedNameError = this.lookahead;
                      this.nextToken();
                      f = true;
                      var v = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      s = this.finalize(t, new u.AssignmentPattern(h, v));
                    } else {
                      f = true;
                      s = h;
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(t, new u.Property(i, n, o, s, l, f));
              };
              Parser.prototype.parseObjectInitializer = function() {
                var e = this.createNode();
                this.expect("{");
                var t = [];
                var r = { value: false };
                while (!this.match("}")) {
                  t.push(this.parseObjectProperty(r));
                  if (!this.match("}")) {
                    this.expectCommaSeparator();
                  }
                }
                this.expect("}");
                return this.finalize(e, new u.ObjectExpression(t));
              };
              Parser.prototype.parseTemplateHead = function() {
                i.assert(
                  this.lookahead.head,
                  "Template literal must start with a template head"
                );
                var e = this.createNode();
                var t = this.nextToken();
                var r = t.value;
                var n = t.cooked;
                return this.finalize(
                  e,
                  new u.TemplateElement({ raw: r, cooked: n }, t.tail)
                );
              };
              Parser.prototype.parseTemplateElement = function() {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken();
                }
                var e = this.createNode();
                var t = this.nextToken();
                var r = t.value;
                var i = t.cooked;
                return this.finalize(
                  e,
                  new u.TemplateElement({ raw: r, cooked: i }, t.tail)
                );
              };
              Parser.prototype.parseTemplateLiteral = function() {
                var e = this.createNode();
                var t = [];
                var r = [];
                var i = this.parseTemplateHead();
                r.push(i);
                while (!i.tail) {
                  t.push(this.parseExpression());
                  i = this.parseTemplateElement();
                  r.push(i);
                }
                return this.finalize(e, new u.TemplateLiteral(r, t));
              };
              Parser.prototype.reinterpretExpressionAsPattern = function(e) {
                switch (e.type) {
                  case o.Syntax.Identifier:
                  case o.Syntax.MemberExpression:
                  case o.Syntax.RestElement:
                  case o.Syntax.AssignmentPattern:
                    break;
                  case o.Syntax.SpreadElement:
                    e.type = o.Syntax.RestElement;
                    this.reinterpretExpressionAsPattern(e.argument);
                    break;
                  case o.Syntax.ArrayExpression:
                    e.type = o.Syntax.ArrayPattern;
                    for (var t = 0; t < e.elements.length; t++) {
                      if (e.elements[t] !== null) {
                        this.reinterpretExpressionAsPattern(e.elements[t]);
                      }
                    }
                    break;
                  case o.Syntax.ObjectExpression:
                    e.type = o.Syntax.ObjectPattern;
                    for (var t = 0; t < e.properties.length; t++) {
                      this.reinterpretExpressionAsPattern(
                        e.properties[t].value
                      );
                    }
                    break;
                  case o.Syntax.AssignmentExpression:
                    e.type = o.Syntax.AssignmentPattern;
                    delete e.operator;
                    this.reinterpretExpressionAsPattern(e.left);
                    break;
                  default:
                    break;
                }
              };
              Parser.prototype.parseGroupExpression = function() {
                var e;
                this.expect("(");
                if (this.match(")")) {
                  this.nextToken();
                  if (!this.match("=>")) {
                    this.expect("=>");
                  }
                  e = { type: f, params: [], async: false };
                } else {
                  var t = this.lookahead;
                  var r = [];
                  if (this.match("...")) {
                    e = this.parseRestElement(r);
                    this.expect(")");
                    if (!this.match("=>")) {
                      this.expect("=>");
                    }
                    e = { type: f, params: [e], async: false };
                  } else {
                    var i = false;
                    this.context.isBindingElement = true;
                    e = this.inheritCoverGrammar(
                      this.parseAssignmentExpression
                    );
                    if (this.match(",")) {
                      var n = [];
                      this.context.isAssignmentTarget = false;
                      n.push(e);
                      while (this.lookahead.type !== 2) {
                        if (!this.match(",")) {
                          break;
                        }
                        this.nextToken();
                        if (this.match(")")) {
                          this.nextToken();
                          for (var a = 0; a < n.length; a++) {
                            this.reinterpretExpressionAsPattern(n[a]);
                          }
                          i = true;
                          e = { type: f, params: n, async: false };
                        } else if (this.match("...")) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          n.push(this.parseRestElement(r));
                          this.expect(")");
                          if (!this.match("=>")) {
                            this.expect("=>");
                          }
                          this.context.isBindingElement = false;
                          for (var a = 0; a < n.length; a++) {
                            this.reinterpretExpressionAsPattern(n[a]);
                          }
                          i = true;
                          e = { type: f, params: n, async: false };
                        } else {
                          n.push(
                            this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          );
                        }
                        if (i) {
                          break;
                        }
                      }
                      if (!i) {
                        e = this.finalize(
                          this.startNode(t),
                          new u.SequenceExpression(n)
                        );
                      }
                    }
                    if (!i) {
                      this.expect(")");
                      if (this.match("=>")) {
                        if (
                          e.type === o.Syntax.Identifier &&
                          e.name === "yield"
                        ) {
                          i = true;
                          e = { type: f, params: [e], async: false };
                        }
                        if (!i) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          if (e.type === o.Syntax.SequenceExpression) {
                            for (var a = 0; a < e.expressions.length; a++) {
                              this.reinterpretExpressionAsPattern(
                                e.expressions[a]
                              );
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(e);
                          }
                          var s =
                            e.type === o.Syntax.SequenceExpression
                              ? e.expressions
                              : [e];
                          e = { type: f, params: s, async: false };
                        }
                      }
                      this.context.isBindingElement = false;
                    }
                  }
                }
                return e;
              };
              Parser.prototype.parseArguments = function() {
                this.expect("(");
                var e = [];
                if (!this.match(")")) {
                  while (true) {
                    var t = this.match("...")
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                    e.push(t);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return e;
              };
              Parser.prototype.isIdentifierName = function(e) {
                return (
                  e.type === 3 || e.type === 4 || e.type === 1 || e.type === 5
                );
              };
              Parser.prototype.parseIdentifierName = function() {
                var e = this.createNode();
                var t = this.nextToken();
                if (!this.isIdentifierName(t)) {
                  this.throwUnexpectedToken(t);
                }
                return this.finalize(e, new u.Identifier(t.value));
              };
              Parser.prototype.parseNewExpression = function() {
                var e = this.createNode();
                var t = this.parseIdentifierName();
                i.assert(
                  t.name === "new",
                  "New expression must start with `new`"
                );
                var r;
                if (this.match(".")) {
                  this.nextToken();
                  if (
                    this.lookahead.type === 3 &&
                    this.context.inFunctionBody &&
                    this.lookahead.value === "target"
                  ) {
                    var n = this.parseIdentifierName();
                    r = new u.MetaProperty(t, n);
                  } else {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  var a = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpression
                  );
                  var s = this.match("(") ? this.parseArguments() : [];
                  r = new u.NewExpression(a, s);
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return this.finalize(e, r);
              };
              Parser.prototype.parseAsyncArgument = function() {
                var e = this.parseAssignmentExpression();
                this.context.firstCoverInitializedNameError = null;
                return e;
              };
              Parser.prototype.parseAsyncArguments = function() {
                this.expect("(");
                var e = [];
                if (!this.match(")")) {
                  while (true) {
                    var t = this.match("...")
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAsyncArgument);
                    e.push(t);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return e;
              };
              Parser.prototype.parseLeftHandSideExpressionAllowCall = function() {
                var e = this.lookahead;
                var t = this.matchContextualKeyword("async");
                var r = this.context.allowIn;
                this.context.allowIn = true;
                var i;
                if (this.matchKeyword("super") && this.context.inFunctionBody) {
                  i = this.createNode();
                  this.nextToken();
                  i = this.finalize(i, new u.Super());
                  if (
                    !this.match("(") &&
                    !this.match(".") &&
                    !this.match("[")
                  ) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  i = this.inheritCoverGrammar(
                    this.matchKeyword("new")
                      ? this.parseNewExpression
                      : this.parsePrimaryExpression
                  );
                }
                while (true) {
                  if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var n = this.parseIdentifierName();
                    i = this.finalize(
                      this.startNode(e),
                      new u.StaticMemberExpression(i, n)
                    );
                  } else if (this.match("(")) {
                    var a = t && e.lineNumber === this.lookahead.lineNumber;
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = false;
                    var s = a
                      ? this.parseAsyncArguments()
                      : this.parseArguments();
                    i = this.finalize(
                      this.startNode(e),
                      new u.CallExpression(i, s)
                    );
                    if (a && this.match("=>")) {
                      for (var o = 0; o < s.length; ++o) {
                        this.reinterpretExpressionAsPattern(s[o]);
                      }
                      i = { type: f, params: s, async: true };
                    }
                  } else if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var n = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    i = this.finalize(
                      this.startNode(e),
                      new u.ComputedMemberExpression(i, n)
                    );
                  } else if (
                    this.lookahead.type === 10 &&
                    this.lookahead.head
                  ) {
                    var l = this.parseTemplateLiteral();
                    i = this.finalize(
                      this.startNode(e),
                      new u.TaggedTemplateExpression(i, l)
                    );
                  } else {
                    break;
                  }
                }
                this.context.allowIn = r;
                return i;
              };
              Parser.prototype.parseSuper = function() {
                var e = this.createNode();
                this.expectKeyword("super");
                if (!this.match("[") && !this.match(".")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                return this.finalize(e, new u.Super());
              };
              Parser.prototype.parseLeftHandSideExpression = function() {
                i.assert(
                  this.context.allowIn,
                  "callee of new expression always allow in keyword."
                );
                var e = this.startNode(this.lookahead);
                var t =
                  this.matchKeyword("super") && this.context.inFunctionBody
                    ? this.parseSuper()
                    : this.inheritCoverGrammar(
                        this.matchKeyword("new")
                          ? this.parseNewExpression
                          : this.parsePrimaryExpression
                      );
                while (true) {
                  if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var r = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    t = this.finalize(e, new u.ComputedMemberExpression(t, r));
                  } else if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var r = this.parseIdentifierName();
                    t = this.finalize(e, new u.StaticMemberExpression(t, r));
                  } else if (
                    this.lookahead.type === 10 &&
                    this.lookahead.head
                  ) {
                    var n = this.parseTemplateLiteral();
                    t = this.finalize(e, new u.TaggedTemplateExpression(t, n));
                  } else {
                    break;
                  }
                }
                return t;
              };
              Parser.prototype.parseUpdateExpression = function() {
                var e;
                var t = this.lookahead;
                if (this.match("++") || this.match("--")) {
                  var r = this.startNode(t);
                  var i = this.nextToken();
                  e = this.inheritCoverGrammar(this.parseUnaryExpression);
                  if (
                    this.context.strict &&
                    e.type === o.Syntax.Identifier &&
                    this.scanner.isRestrictedWord(e.name)
                  ) {
                    this.tolerateError(a.Messages.StrictLHSPrefix);
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(a.Messages.InvalidLHSInAssignment);
                  }
                  var n = true;
                  e = this.finalize(r, new u.UpdateExpression(i.value, e, n));
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else {
                  e = this.inheritCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  );
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match("++") || this.match("--")) {
                      if (
                        this.context.strict &&
                        e.type === o.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(e.name)
                      ) {
                        this.tolerateError(a.Messages.StrictLHSPostfix);
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(a.Messages.InvalidLHSInAssignment);
                      }
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      var s = this.nextToken().value;
                      var n = false;
                      e = this.finalize(
                        this.startNode(t),
                        new u.UpdateExpression(s, e, n)
                      );
                    }
                  }
                }
                return e;
              };
              Parser.prototype.parseAwaitExpression = function() {
                var e = this.createNode();
                this.nextToken();
                var t = this.parseUnaryExpression();
                return this.finalize(e, new u.AwaitExpression(t));
              };
              Parser.prototype.parseUnaryExpression = function() {
                var e;
                if (
                  this.match("+") ||
                  this.match("-") ||
                  this.match("~") ||
                  this.match("!") ||
                  this.matchKeyword("delete") ||
                  this.matchKeyword("void") ||
                  this.matchKeyword("typeof")
                ) {
                  var t = this.startNode(this.lookahead);
                  var r = this.nextToken();
                  e = this.inheritCoverGrammar(this.parseUnaryExpression);
                  e = this.finalize(t, new u.UnaryExpression(r.value, e));
                  if (
                    this.context.strict &&
                    e.operator === "delete" &&
                    e.argument.type === o.Syntax.Identifier
                  ) {
                    this.tolerateError(a.Messages.StrictDelete);
                  }
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else if (
                  this.context.await &&
                  this.matchContextualKeyword("await")
                ) {
                  e = this.parseAwaitExpression();
                } else {
                  e = this.parseUpdateExpression();
                }
                return e;
              };
              Parser.prototype.parseExponentiationExpression = function() {
                var e = this.lookahead;
                var t = this.inheritCoverGrammar(this.parseUnaryExpression);
                if (t.type !== o.Syntax.UnaryExpression && this.match("**")) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var r = t;
                  var i = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  );
                  t = this.finalize(
                    this.startNode(e),
                    new u.BinaryExpression("**", r, i)
                  );
                }
                return t;
              };
              Parser.prototype.binaryPrecedence = function(e) {
                var t = e.value;
                var r;
                if (e.type === 7) {
                  r = this.operatorPrecedence[t] || 0;
                } else if (e.type === 4) {
                  r =
                    t === "instanceof" || (this.context.allowIn && t === "in")
                      ? 7
                      : 0;
                } else {
                  r = 0;
                }
                return r;
              };
              Parser.prototype.parseBinaryExpression = function() {
                var e = this.lookahead;
                var t = this.inheritCoverGrammar(
                  this.parseExponentiationExpression
                );
                var r = this.lookahead;
                var i = this.binaryPrecedence(r);
                if (i > 0) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var n = [e, this.lookahead];
                  var a = t;
                  var s = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  );
                  var o = [a, r.value, s];
                  var l = [i];
                  while (true) {
                    i = this.binaryPrecedence(this.lookahead);
                    if (i <= 0) {
                      break;
                    }
                    while (o.length > 2 && i <= l[l.length - 1]) {
                      s = o.pop();
                      var f = o.pop();
                      l.pop();
                      a = o.pop();
                      n.pop();
                      var c = this.startNode(n[n.length - 1]);
                      o.push(this.finalize(c, new u.BinaryExpression(f, a, s)));
                    }
                    o.push(this.nextToken().value);
                    l.push(i);
                    n.push(this.lookahead);
                    o.push(
                      this.isolateCoverGrammar(
                        this.parseExponentiationExpression
                      )
                    );
                  }
                  var h = o.length - 1;
                  t = o[h];
                  var p = n.pop();
                  while (h > 1) {
                    var v = n.pop();
                    var d = p && p.lineStart;
                    var c = this.startNode(v, d);
                    var f = o[h - 1];
                    t = this.finalize(
                      c,
                      new u.BinaryExpression(f, o[h - 2], t)
                    );
                    h -= 2;
                    p = v;
                  }
                }
                return t;
              };
              Parser.prototype.parseConditionalExpression = function() {
                var e = this.lookahead;
                var t = this.inheritCoverGrammar(this.parseBinaryExpression);
                if (this.match("?")) {
                  this.nextToken();
                  var r = this.context.allowIn;
                  this.context.allowIn = true;
                  var i = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  );
                  this.context.allowIn = r;
                  this.expect(":");
                  var n = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  );
                  t = this.finalize(
                    this.startNode(e),
                    new u.ConditionalExpression(t, i, n)
                  );
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return t;
              };
              Parser.prototype.checkPatternParam = function(e, t) {
                switch (t.type) {
                  case o.Syntax.Identifier:
                    this.validateParam(e, t, t.name);
                    break;
                  case o.Syntax.RestElement:
                    this.checkPatternParam(e, t.argument);
                    break;
                  case o.Syntax.AssignmentPattern:
                    this.checkPatternParam(e, t.left);
                    break;
                  case o.Syntax.ArrayPattern:
                    for (var r = 0; r < t.elements.length; r++) {
                      if (t.elements[r] !== null) {
                        this.checkPatternParam(e, t.elements[r]);
                      }
                    }
                    break;
                  case o.Syntax.ObjectPattern:
                    for (var r = 0; r < t.properties.length; r++) {
                      this.checkPatternParam(e, t.properties[r].value);
                    }
                    break;
                  default:
                    break;
                }
                e.simple = e.simple && t instanceof u.Identifier;
              };
              Parser.prototype.reinterpretAsCoverFormalsList = function(e) {
                var t = [e];
                var r;
                var i = false;
                switch (e.type) {
                  case o.Syntax.Identifier:
                    break;
                  case f:
                    t = e.params;
                    i = e.async;
                    break;
                  default:
                    return null;
                }
                r = { simple: true, paramSet: {} };
                for (var n = 0; n < t.length; ++n) {
                  var u = t[n];
                  if (u.type === o.Syntax.AssignmentPattern) {
                    if (u.right.type === o.Syntax.YieldExpression) {
                      if (u.right.argument) {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                      u.right.type = o.Syntax.Identifier;
                      u.right.name = "yield";
                      delete u.right.argument;
                      delete u.right.delegate;
                    }
                  } else if (
                    i &&
                    u.type === o.Syntax.Identifier &&
                    u.name === "await"
                  ) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.checkPatternParam(r, u);
                  t[n] = u;
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var n = 0; n < t.length; ++n) {
                    var u = t[n];
                    if (u.type === o.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                  }
                }
                if (r.message === a.Messages.StrictParamDupe) {
                  var s = this.context.strict ? r.stricted : r.firstRestricted;
                  this.throwUnexpectedToken(s, r.message);
                }
                return {
                  simple: r.simple,
                  params: t,
                  stricted: r.stricted,
                  firstRestricted: r.firstRestricted,
                  message: r.message
                };
              };
              Parser.prototype.parseAssignmentExpression = function() {
                var e;
                if (!this.context.allowYield && this.matchKeyword("yield")) {
                  e = this.parseYieldExpression();
                } else {
                  var t = this.lookahead;
                  var r = t;
                  e = this.parseConditionalExpression();
                  if (
                    r.type === 3 &&
                    r.lineNumber === this.lookahead.lineNumber &&
                    r.value === "async"
                  ) {
                    if (
                      this.lookahead.type === 3 ||
                      this.matchKeyword("yield")
                    ) {
                      var i = this.parsePrimaryExpression();
                      this.reinterpretExpressionAsPattern(i);
                      e = { type: f, params: [i], async: true };
                    }
                  }
                  if (e.type === f || this.match("=>")) {
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var n = e.async;
                    var s = this.reinterpretAsCoverFormalsList(e);
                    if (s) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead);
                      }
                      this.context.firstCoverInitializedNameError = null;
                      var l = this.context.strict;
                      var c = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = s.simple;
                      var h = this.context.allowYield;
                      var p = this.context.await;
                      this.context.allowYield = true;
                      this.context.await = n;
                      var v = this.startNode(t);
                      this.expect("=>");
                      var d = void 0;
                      if (this.match("{")) {
                        var D = this.context.allowIn;
                        this.context.allowIn = true;
                        d = this.parseFunctionSourceElements();
                        this.context.allowIn = D;
                      } else {
                        d = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        );
                      }
                      var m = d.type !== o.Syntax.BlockStatement;
                      if (this.context.strict && s.firstRestricted) {
                        this.throwUnexpectedToken(s.firstRestricted, s.message);
                      }
                      if (this.context.strict && s.stricted) {
                        this.tolerateUnexpectedToken(s.stricted, s.message);
                      }
                      e = n
                        ? this.finalize(
                            v,
                            new u.AsyncArrowFunctionExpression(s.params, d, m)
                          )
                        : this.finalize(
                            v,
                            new u.ArrowFunctionExpression(s.params, d, m)
                          );
                      this.context.strict = l;
                      this.context.allowStrictDirective = c;
                      this.context.allowYield = h;
                      this.context.await = p;
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(a.Messages.InvalidLHSInAssignment);
                      }
                      if (
                        this.context.strict &&
                        e.type === o.Syntax.Identifier
                      ) {
                        var g = e;
                        if (this.scanner.isRestrictedWord(g.name)) {
                          this.tolerateUnexpectedToken(
                            r,
                            a.Messages.StrictLHSAssignment
                          );
                        }
                        if (this.scanner.isStrictModeReservedWord(g.name)) {
                          this.tolerateUnexpectedToken(
                            r,
                            a.Messages.StrictReservedWord
                          );
                        }
                      }
                      if (!this.match("=")) {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                      } else {
                        this.reinterpretExpressionAsPattern(e);
                      }
                      r = this.nextToken();
                      var E = r.value;
                      var A = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                      e = this.finalize(
                        this.startNode(t),
                        new u.AssignmentExpression(E, e, A)
                      );
                      this.context.firstCoverInitializedNameError = null;
                    }
                  }
                }
                return e;
              };
              Parser.prototype.parseExpression = function() {
                var e = this.lookahead;
                var t = this.isolateCoverGrammar(
                  this.parseAssignmentExpression
                );
                if (this.match(",")) {
                  var r = [];
                  r.push(t);
                  while (this.lookahead.type !== 2) {
                    if (!this.match(",")) {
                      break;
                    }
                    this.nextToken();
                    r.push(
                      this.isolateCoverGrammar(this.parseAssignmentExpression)
                    );
                  }
                  t = this.finalize(
                    this.startNode(e),
                    new u.SequenceExpression(r)
                  );
                }
                return t;
              };
              Parser.prototype.parseStatementListItem = function() {
                var e;
                this.context.isAssignmentTarget = true;
                this.context.isBindingElement = true;
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case "export":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          a.Messages.IllegalExportDeclaration
                        );
                      }
                      e = this.parseExportDeclaration();
                      break;
                    case "import":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          a.Messages.IllegalImportDeclaration
                        );
                      }
                      e = this.parseImportDeclaration();
                      break;
                    case "const":
                      e = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "function":
                      e = this.parseFunctionDeclaration();
                      break;
                    case "class":
                      e = this.parseClassDeclaration();
                      break;
                    case "let":
                      e = this.isLexicalDeclaration()
                        ? this.parseLexicalDeclaration({ inFor: false })
                        : this.parseStatement();
                      break;
                    default:
                      e = this.parseStatement();
                      break;
                  }
                } else {
                  e = this.parseStatement();
                }
                return e;
              };
              Parser.prototype.parseBlock = function() {
                var e = this.createNode();
                this.expect("{");
                var t = [];
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  t.push(this.parseStatementListItem());
                }
                this.expect("}");
                return this.finalize(e, new u.BlockStatement(t));
              };
              Parser.prototype.parseLexicalBinding = function(e, t) {
                var r = this.createNode();
                var i = [];
                var n = this.parsePattern(i, e);
                if (this.context.strict && n.type === o.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(n.name)) {
                    this.tolerateError(a.Messages.StrictVarName);
                  }
                }
                var s = null;
                if (e === "const") {
                  if (
                    !this.matchKeyword("in") &&
                    !this.matchContextualKeyword("of")
                  ) {
                    if (this.match("=")) {
                      this.nextToken();
                      s = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      );
                    } else {
                      this.throwError(
                        a.Messages.DeclarationMissingInitializer,
                        "const"
                      );
                    }
                  }
                } else if (
                  (!t.inFor && n.type !== o.Syntax.Identifier) ||
                  this.match("=")
                ) {
                  this.expect("=");
                  s = this.isolateCoverGrammar(this.parseAssignmentExpression);
                }
                return this.finalize(r, new u.VariableDeclarator(n, s));
              };
              Parser.prototype.parseBindingList = function(e, t) {
                var r = [this.parseLexicalBinding(e, t)];
                while (this.match(",")) {
                  this.nextToken();
                  r.push(this.parseLexicalBinding(e, t));
                }
                return r;
              };
              Parser.prototype.isLexicalDeclaration = function() {
                var e = this.scanner.saveState();
                this.scanner.scanComments();
                var t = this.scanner.lex();
                this.scanner.restoreState(e);
                return (
                  t.type === 3 ||
                  (t.type === 7 && t.value === "[") ||
                  (t.type === 7 && t.value === "{") ||
                  (t.type === 4 && t.value === "let") ||
                  (t.type === 4 && t.value === "yield")
                );
              };
              Parser.prototype.parseLexicalDeclaration = function(e) {
                var t = this.createNode();
                var r = this.nextToken().value;
                i.assert(
                  r === "let" || r === "const",
                  "Lexical declaration must be either let or const"
                );
                var n = this.parseBindingList(r, e);
                this.consumeSemicolon();
                return this.finalize(t, new u.VariableDeclaration(n, r));
              };
              Parser.prototype.parseBindingRestElement = function(e, t) {
                var r = this.createNode();
                this.expect("...");
                var i = this.parsePattern(e, t);
                return this.finalize(r, new u.RestElement(i));
              };
              Parser.prototype.parseArrayPattern = function(e, t) {
                var r = this.createNode();
                this.expect("[");
                var i = [];
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    i.push(null);
                  } else {
                    if (this.match("...")) {
                      i.push(this.parseBindingRestElement(e, t));
                      break;
                    } else {
                      i.push(this.parsePatternWithDefault(e, t));
                    }
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(r, new u.ArrayPattern(i));
              };
              Parser.prototype.parsePropertyPattern = function(e, t) {
                var r = this.createNode();
                var i = false;
                var n = false;
                var a = false;
                var s;
                var o;
                if (this.lookahead.type === 3) {
                  var l = this.lookahead;
                  s = this.parseVariableIdentifier();
                  var f = this.finalize(r, new u.Identifier(l.value));
                  if (this.match("=")) {
                    e.push(l);
                    n = true;
                    this.nextToken();
                    var c = this.parseAssignmentExpression();
                    o = this.finalize(
                      this.startNode(l),
                      new u.AssignmentPattern(f, c)
                    );
                  } else if (!this.match(":")) {
                    e.push(l);
                    n = true;
                    o = f;
                  } else {
                    this.expect(":");
                    o = this.parsePatternWithDefault(e, t);
                  }
                } else {
                  i = this.match("[");
                  s = this.parseObjectPropertyKey();
                  this.expect(":");
                  o = this.parsePatternWithDefault(e, t);
                }
                return this.finalize(r, new u.Property("init", s, i, o, a, n));
              };
              Parser.prototype.parseObjectPattern = function(e, t) {
                var r = this.createNode();
                var i = [];
                this.expect("{");
                while (!this.match("}")) {
                  i.push(this.parsePropertyPattern(e, t));
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return this.finalize(r, new u.ObjectPattern(i));
              };
              Parser.prototype.parsePattern = function(e, t) {
                var r;
                if (this.match("[")) {
                  r = this.parseArrayPattern(e, t);
                } else if (this.match("{")) {
                  r = this.parseObjectPattern(e, t);
                } else {
                  if (
                    this.matchKeyword("let") &&
                    (t === "const" || t === "let")
                  ) {
                    this.tolerateUnexpectedToken(
                      this.lookahead,
                      a.Messages.LetInLexicalBinding
                    );
                  }
                  e.push(this.lookahead);
                  r = this.parseVariableIdentifier(t);
                }
                return r;
              };
              Parser.prototype.parsePatternWithDefault = function(e, t) {
                var r = this.lookahead;
                var i = this.parsePattern(e, t);
                if (this.match("=")) {
                  this.nextToken();
                  var n = this.context.allowYield;
                  this.context.allowYield = true;
                  var a = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  );
                  this.context.allowYield = n;
                  i = this.finalize(
                    this.startNode(r),
                    new u.AssignmentPattern(i, a)
                  );
                }
                return i;
              };
              Parser.prototype.parseVariableIdentifier = function(e) {
                var t = this.createNode();
                var r = this.nextToken();
                if (r.type === 4 && r.value === "yield") {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(
                      r,
                      a.Messages.StrictReservedWord
                    );
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(r);
                  }
                } else if (r.type !== 3) {
                  if (
                    this.context.strict &&
                    r.type === 4 &&
                    this.scanner.isStrictModeReservedWord(r.value)
                  ) {
                    this.tolerateUnexpectedToken(
                      r,
                      a.Messages.StrictReservedWord
                    );
                  } else {
                    if (
                      this.context.strict ||
                      r.value !== "let" ||
                      e !== "var"
                    ) {
                      this.throwUnexpectedToken(r);
                    }
                  }
                } else if (
                  (this.context.isModule || this.context.await) &&
                  r.type === 3 &&
                  r.value === "await"
                ) {
                  this.tolerateUnexpectedToken(r);
                }
                return this.finalize(t, new u.Identifier(r.value));
              };
              Parser.prototype.parseVariableDeclaration = function(e) {
                var t = this.createNode();
                var r = [];
                var i = this.parsePattern(r, "var");
                if (this.context.strict && i.type === o.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(i.name)) {
                    this.tolerateError(a.Messages.StrictVarName);
                  }
                }
                var n = null;
                if (this.match("=")) {
                  this.nextToken();
                  n = this.isolateCoverGrammar(this.parseAssignmentExpression);
                } else if (i.type !== o.Syntax.Identifier && !e.inFor) {
                  this.expect("=");
                }
                return this.finalize(t, new u.VariableDeclarator(i, n));
              };
              Parser.prototype.parseVariableDeclarationList = function(e) {
                var t = { inFor: e.inFor };
                var r = [];
                r.push(this.parseVariableDeclaration(t));
                while (this.match(",")) {
                  this.nextToken();
                  r.push(this.parseVariableDeclaration(t));
                }
                return r;
              };
              Parser.prototype.parseVariableStatement = function() {
                var e = this.createNode();
                this.expectKeyword("var");
                var t = this.parseVariableDeclarationList({ inFor: false });
                this.consumeSemicolon();
                return this.finalize(e, new u.VariableDeclaration(t, "var"));
              };
              Parser.prototype.parseEmptyStatement = function() {
                var e = this.createNode();
                this.expect(";");
                return this.finalize(e, new u.EmptyStatement());
              };
              Parser.prototype.parseExpressionStatement = function() {
                var e = this.createNode();
                var t = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(e, new u.ExpressionStatement(t));
              };
              Parser.prototype.parseIfClause = function() {
                if (this.context.strict && this.matchKeyword("function")) {
                  this.tolerateError(a.Messages.StrictFunction);
                }
                return this.parseStatement();
              };
              Parser.prototype.parseIfStatement = function() {
                var e = this.createNode();
                var t;
                var r = null;
                this.expectKeyword("if");
                this.expect("(");
                var i = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  t = this.finalize(this.createNode(), new u.EmptyStatement());
                } else {
                  this.expect(")");
                  t = this.parseIfClause();
                  if (this.matchKeyword("else")) {
                    this.nextToken();
                    r = this.parseIfClause();
                  }
                }
                return this.finalize(e, new u.IfStatement(i, t, r));
              };
              Parser.prototype.parseDoWhileStatement = function() {
                var e = this.createNode();
                this.expectKeyword("do");
                var t = this.context.inIteration;
                this.context.inIteration = true;
                var r = this.parseStatement();
                this.context.inIteration = t;
                this.expectKeyword("while");
                this.expect("(");
                var i = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                } else {
                  this.expect(")");
                  if (this.match(";")) {
                    this.nextToken();
                  }
                }
                return this.finalize(e, new u.DoWhileStatement(r, i));
              };
              Parser.prototype.parseWhileStatement = function() {
                var e = this.createNode();
                var t;
                this.expectKeyword("while");
                this.expect("(");
                var r = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  t = this.finalize(this.createNode(), new u.EmptyStatement());
                } else {
                  this.expect(")");
                  var i = this.context.inIteration;
                  this.context.inIteration = true;
                  t = this.parseStatement();
                  this.context.inIteration = i;
                }
                return this.finalize(e, new u.WhileStatement(r, t));
              };
              Parser.prototype.parseForStatement = function() {
                var e = null;
                var t = null;
                var r = null;
                var i = true;
                var n, s;
                var l = this.createNode();
                this.expectKeyword("for");
                this.expect("(");
                if (this.match(";")) {
                  this.nextToken();
                } else {
                  if (this.matchKeyword("var")) {
                    e = this.createNode();
                    this.nextToken();
                    var f = this.context.allowIn;
                    this.context.allowIn = false;
                    var c = this.parseVariableDeclarationList({ inFor: true });
                    this.context.allowIn = f;
                    if (c.length === 1 && this.matchKeyword("in")) {
                      var h = c[0];
                      if (
                        h.init &&
                        (h.id.type === o.Syntax.ArrayPattern ||
                          h.id.type === o.Syntax.ObjectPattern ||
                          this.context.strict)
                      ) {
                        this.tolerateError(
                          a.Messages.ForInOfLoopInitializer,
                          "for-in"
                        );
                      }
                      e = this.finalize(e, new u.VariableDeclaration(c, "var"));
                      this.nextToken();
                      n = e;
                      s = this.parseExpression();
                      e = null;
                    } else if (
                      c.length === 1 &&
                      c[0].init === null &&
                      this.matchContextualKeyword("of")
                    ) {
                      e = this.finalize(e, new u.VariableDeclaration(c, "var"));
                      this.nextToken();
                      n = e;
                      s = this.parseAssignmentExpression();
                      e = null;
                      i = false;
                    } else {
                      e = this.finalize(e, new u.VariableDeclaration(c, "var"));
                      this.expect(";");
                    }
                  } else if (
                    this.matchKeyword("const") ||
                    this.matchKeyword("let")
                  ) {
                    e = this.createNode();
                    var p = this.nextToken().value;
                    if (!this.context.strict && this.lookahead.value === "in") {
                      e = this.finalize(e, new u.Identifier(p));
                      this.nextToken();
                      n = e;
                      s = this.parseExpression();
                      e = null;
                    } else {
                      var f = this.context.allowIn;
                      this.context.allowIn = false;
                      var c = this.parseBindingList(p, { inFor: true });
                      this.context.allowIn = f;
                      if (
                        c.length === 1 &&
                        c[0].init === null &&
                        this.matchKeyword("in")
                      ) {
                        e = this.finalize(e, new u.VariableDeclaration(c, p));
                        this.nextToken();
                        n = e;
                        s = this.parseExpression();
                        e = null;
                      } else if (
                        c.length === 1 &&
                        c[0].init === null &&
                        this.matchContextualKeyword("of")
                      ) {
                        e = this.finalize(e, new u.VariableDeclaration(c, p));
                        this.nextToken();
                        n = e;
                        s = this.parseAssignmentExpression();
                        e = null;
                        i = false;
                      } else {
                        this.consumeSemicolon();
                        e = this.finalize(e, new u.VariableDeclaration(c, p));
                      }
                    }
                  } else {
                    var v = this.lookahead;
                    var f = this.context.allowIn;
                    this.context.allowIn = false;
                    e = this.inheritCoverGrammar(
                      this.parseAssignmentExpression
                    );
                    this.context.allowIn = f;
                    if (this.matchKeyword("in")) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === o.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(a.Messages.InvalidLHSInForIn);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(e);
                      n = e;
                      s = this.parseExpression();
                      e = null;
                    } else if (this.matchContextualKeyword("of")) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === o.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(a.Messages.InvalidLHSInForLoop);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(e);
                      n = e;
                      s = this.parseAssignmentExpression();
                      e = null;
                      i = false;
                    } else {
                      if (this.match(",")) {
                        var d = [e];
                        while (this.match(",")) {
                          this.nextToken();
                          d.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          );
                        }
                        e = this.finalize(
                          this.startNode(v),
                          new u.SequenceExpression(d)
                        );
                      }
                      this.expect(";");
                    }
                  }
                }
                if (typeof n === "undefined") {
                  if (!this.match(";")) {
                    t = this.parseExpression();
                  }
                  this.expect(";");
                  if (!this.match(")")) {
                    r = this.parseExpression();
                  }
                }
                var D;
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  D = this.finalize(this.createNode(), new u.EmptyStatement());
                } else {
                  this.expect(")");
                  var m = this.context.inIteration;
                  this.context.inIteration = true;
                  D = this.isolateCoverGrammar(this.parseStatement);
                  this.context.inIteration = m;
                }
                return typeof n === "undefined"
                  ? this.finalize(l, new u.ForStatement(e, t, r, D))
                  : i
                  ? this.finalize(l, new u.ForInStatement(n, s, D))
                  : this.finalize(l, new u.ForOfStatement(n, s, D));
              };
              Parser.prototype.parseContinueStatement = function() {
                var e = this.createNode();
                this.expectKeyword("continue");
                var t = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var r = this.parseVariableIdentifier();
                  t = r;
                  var i = "$" + r.name;
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      i
                    )
                  ) {
                    this.throwError(a.Messages.UnknownLabel, r.name);
                  }
                }
                this.consumeSemicolon();
                if (t === null && !this.context.inIteration) {
                  this.throwError(a.Messages.IllegalContinue);
                }
                return this.finalize(e, new u.ContinueStatement(t));
              };
              Parser.prototype.parseBreakStatement = function() {
                var e = this.createNode();
                this.expectKeyword("break");
                var t = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var r = this.parseVariableIdentifier();
                  var i = "$" + r.name;
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      i
                    )
                  ) {
                    this.throwError(a.Messages.UnknownLabel, r.name);
                  }
                  t = r;
                }
                this.consumeSemicolon();
                if (
                  t === null &&
                  !this.context.inIteration &&
                  !this.context.inSwitch
                ) {
                  this.throwError(a.Messages.IllegalBreak);
                }
                return this.finalize(e, new u.BreakStatement(t));
              };
              Parser.prototype.parseReturnStatement = function() {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(a.Messages.IllegalReturn);
                }
                var e = this.createNode();
                this.expectKeyword("return");
                var t =
                  (!this.match(";") &&
                    !this.match("}") &&
                    !this.hasLineTerminator &&
                    this.lookahead.type !== 2) ||
                  this.lookahead.type === 8 ||
                  this.lookahead.type === 10;
                var r = t ? this.parseExpression() : null;
                this.consumeSemicolon();
                return this.finalize(e, new u.ReturnStatement(r));
              };
              Parser.prototype.parseWithStatement = function() {
                if (this.context.strict) {
                  this.tolerateError(a.Messages.StrictModeWith);
                }
                var e = this.createNode();
                var t;
                this.expectKeyword("with");
                this.expect("(");
                var r = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  t = this.finalize(this.createNode(), new u.EmptyStatement());
                } else {
                  this.expect(")");
                  t = this.parseStatement();
                }
                return this.finalize(e, new u.WithStatement(r, t));
              };
              Parser.prototype.parseSwitchCase = function() {
                var e = this.createNode();
                var t;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  t = null;
                } else {
                  this.expectKeyword("case");
                  t = this.parseExpression();
                }
                this.expect(":");
                var r = [];
                while (true) {
                  if (
                    this.match("}") ||
                    this.matchKeyword("default") ||
                    this.matchKeyword("case")
                  ) {
                    break;
                  }
                  r.push(this.parseStatementListItem());
                }
                return this.finalize(e, new u.SwitchCase(t, r));
              };
              Parser.prototype.parseSwitchStatement = function() {
                var e = this.createNode();
                this.expectKeyword("switch");
                this.expect("(");
                var t = this.parseExpression();
                this.expect(")");
                var r = this.context.inSwitch;
                this.context.inSwitch = true;
                var i = [];
                var n = false;
                this.expect("{");
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  var s = this.parseSwitchCase();
                  if (s.test === null) {
                    if (n) {
                      this.throwError(a.Messages.MultipleDefaultsInSwitch);
                    }
                    n = true;
                  }
                  i.push(s);
                }
                this.expect("}");
                this.context.inSwitch = r;
                return this.finalize(e, new u.SwitchStatement(t, i));
              };
              Parser.prototype.parseLabelledStatement = function() {
                var e = this.createNode();
                var t = this.parseExpression();
                var r;
                if (t.type === o.Syntax.Identifier && this.match(":")) {
                  this.nextToken();
                  var i = t;
                  var n = "$" + i.name;
                  if (
                    Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      n
                    )
                  ) {
                    this.throwError(a.Messages.Redeclaration, "Label", i.name);
                  }
                  this.context.labelSet[n] = true;
                  var s = void 0;
                  if (this.matchKeyword("class")) {
                    this.tolerateUnexpectedToken(this.lookahead);
                    s = this.parseClassDeclaration();
                  } else if (this.matchKeyword("function")) {
                    var l = this.lookahead;
                    var f = this.parseFunctionDeclaration();
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(
                        l,
                        a.Messages.StrictFunction
                      );
                    } else if (f.generator) {
                      this.tolerateUnexpectedToken(
                        l,
                        a.Messages.GeneratorInLegacyContext
                      );
                    }
                    s = f;
                  } else {
                    s = this.parseStatement();
                  }
                  delete this.context.labelSet[n];
                  r = new u.LabeledStatement(i, s);
                } else {
                  this.consumeSemicolon();
                  r = new u.ExpressionStatement(t);
                }
                return this.finalize(e, r);
              };
              Parser.prototype.parseThrowStatement = function() {
                var e = this.createNode();
                this.expectKeyword("throw");
                if (this.hasLineTerminator) {
                  this.throwError(a.Messages.NewlineAfterThrow);
                }
                var t = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(e, new u.ThrowStatement(t));
              };
              Parser.prototype.parseCatchClause = function() {
                var e = this.createNode();
                this.expectKeyword("catch");
                this.expect("(");
                if (this.match(")")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                var t = [];
                var r = this.parsePattern(t);
                var i = {};
                for (var n = 0; n < t.length; n++) {
                  var s = "$" + t[n].value;
                  if (Object.prototype.hasOwnProperty.call(i, s)) {
                    this.tolerateError(a.Messages.DuplicateBinding, t[n].value);
                  }
                  i[s] = true;
                }
                if (this.context.strict && r.type === o.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(r.name)) {
                    this.tolerateError(a.Messages.StrictCatchVariable);
                  }
                }
                this.expect(")");
                var l = this.parseBlock();
                return this.finalize(e, new u.CatchClause(r, l));
              };
              Parser.prototype.parseFinallyClause = function() {
                this.expectKeyword("finally");
                return this.parseBlock();
              };
              Parser.prototype.parseTryStatement = function() {
                var e = this.createNode();
                this.expectKeyword("try");
                var t = this.parseBlock();
                var r = this.matchKeyword("catch")
                  ? this.parseCatchClause()
                  : null;
                var i = this.matchKeyword("finally")
                  ? this.parseFinallyClause()
                  : null;
                if (!r && !i) {
                  this.throwError(a.Messages.NoCatchOrFinally);
                }
                return this.finalize(e, new u.TryStatement(t, r, i));
              };
              Parser.prototype.parseDebuggerStatement = function() {
                var e = this.createNode();
                this.expectKeyword("debugger");
                this.consumeSemicolon();
                return this.finalize(e, new u.DebuggerStatement());
              };
              Parser.prototype.parseStatement = function() {
                var e;
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    e = this.parseExpressionStatement();
                    break;
                  case 7:
                    var t = this.lookahead.value;
                    if (t === "{") {
                      e = this.parseBlock();
                    } else if (t === "(") {
                      e = this.parseExpressionStatement();
                    } else if (t === ";") {
                      e = this.parseEmptyStatement();
                    } else {
                      e = this.parseExpressionStatement();
                    }
                    break;
                  case 3:
                    e = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration()
                      : this.parseLabelledStatement();
                    break;
                  case 4:
                    switch (this.lookahead.value) {
                      case "break":
                        e = this.parseBreakStatement();
                        break;
                      case "continue":
                        e = this.parseContinueStatement();
                        break;
                      case "debugger":
                        e = this.parseDebuggerStatement();
                        break;
                      case "do":
                        e = this.parseDoWhileStatement();
                        break;
                      case "for":
                        e = this.parseForStatement();
                        break;
                      case "function":
                        e = this.parseFunctionDeclaration();
                        break;
                      case "if":
                        e = this.parseIfStatement();
                        break;
                      case "return":
                        e = this.parseReturnStatement();
                        break;
                      case "switch":
                        e = this.parseSwitchStatement();
                        break;
                      case "throw":
                        e = this.parseThrowStatement();
                        break;
                      case "try":
                        e = this.parseTryStatement();
                        break;
                      case "var":
                        e = this.parseVariableStatement();
                        break;
                      case "while":
                        e = this.parseWhileStatement();
                        break;
                      case "with":
                        e = this.parseWithStatement();
                        break;
                      default:
                        e = this.parseExpressionStatement();
                        break;
                    }
                    break;
                  default:
                    e = this.throwUnexpectedToken(this.lookahead);
                }
                return e;
              };
              Parser.prototype.parseFunctionSourceElements = function() {
                var e = this.createNode();
                this.expect("{");
                var t = this.parseDirectivePrologues();
                var r = this.context.labelSet;
                var i = this.context.inIteration;
                var n = this.context.inSwitch;
                var a = this.context.inFunctionBody;
                this.context.labelSet = {};
                this.context.inIteration = false;
                this.context.inSwitch = false;
                this.context.inFunctionBody = true;
                while (this.lookahead.type !== 2) {
                  if (this.match("}")) {
                    break;
                  }
                  t.push(this.parseStatementListItem());
                }
                this.expect("}");
                this.context.labelSet = r;
                this.context.inIteration = i;
                this.context.inSwitch = n;
                this.context.inFunctionBody = a;
                return this.finalize(e, new u.BlockStatement(t));
              };
              Parser.prototype.validateParam = function(e, t, r) {
                var i = "$" + r;
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(r)) {
                    e.stricted = t;
                    e.message = a.Messages.StrictParamName;
                  }
                  if (Object.prototype.hasOwnProperty.call(e.paramSet, i)) {
                    e.stricted = t;
                    e.message = a.Messages.StrictParamDupe;
                  }
                } else if (!e.firstRestricted) {
                  if (this.scanner.isRestrictedWord(r)) {
                    e.firstRestricted = t;
                    e.message = a.Messages.StrictParamName;
                  } else if (this.scanner.isStrictModeReservedWord(r)) {
                    e.firstRestricted = t;
                    e.message = a.Messages.StrictReservedWord;
                  } else if (
                    Object.prototype.hasOwnProperty.call(e.paramSet, i)
                  ) {
                    e.stricted = t;
                    e.message = a.Messages.StrictParamDupe;
                  }
                }
                if (typeof Object.defineProperty === "function") {
                  Object.defineProperty(e.paramSet, i, {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true
                  });
                } else {
                  e.paramSet[i] = true;
                }
              };
              Parser.prototype.parseRestElement = function(e) {
                var t = this.createNode();
                this.expect("...");
                var r = this.parsePattern(e);
                if (this.match("=")) {
                  this.throwError(a.Messages.DefaultRestParameter);
                }
                if (!this.match(")")) {
                  this.throwError(a.Messages.ParameterAfterRestParameter);
                }
                return this.finalize(t, new u.RestElement(r));
              };
              Parser.prototype.parseFormalParameter = function(e) {
                var t = [];
                var r = this.match("...")
                  ? this.parseRestElement(t)
                  : this.parsePatternWithDefault(t);
                for (var i = 0; i < t.length; i++) {
                  this.validateParam(e, t[i], t[i].value);
                }
                e.simple = e.simple && r instanceof u.Identifier;
                e.params.push(r);
              };
              Parser.prototype.parseFormalParameters = function(e) {
                var t;
                t = { simple: true, params: [], firstRestricted: e };
                this.expect("(");
                if (!this.match(")")) {
                  t.paramSet = {};
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(t);
                    if (this.match(")")) {
                      break;
                    }
                    this.expect(",");
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return {
                  simple: t.simple,
                  params: t.params,
                  stricted: t.stricted,
                  firstRestricted: t.firstRestricted,
                  message: t.message
                };
              };
              Parser.prototype.matchAsyncFunction = function() {
                var e = this.matchContextualKeyword("async");
                if (e) {
                  var t = this.scanner.saveState();
                  this.scanner.scanComments();
                  var r = this.scanner.lex();
                  this.scanner.restoreState(t);
                  e =
                    t.lineNumber === r.lineNumber &&
                    r.type === 4 &&
                    r.value === "function";
                }
                return e;
              };
              Parser.prototype.parseFunctionDeclaration = function(e) {
                var t = this.createNode();
                var r = this.matchContextualKeyword("async");
                if (r) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var i = r ? false : this.match("*");
                if (i) {
                  this.nextToken();
                }
                var n;
                var s = null;
                var o = null;
                if (!e || !this.match("(")) {
                  var l = this.lookahead;
                  s = this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(l.value)) {
                      this.tolerateUnexpectedToken(
                        l,
                        a.Messages.StrictFunctionName
                      );
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(l.value)) {
                      o = l;
                      n = a.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(l.value)) {
                      o = l;
                      n = a.Messages.StrictReservedWord;
                    }
                  }
                }
                var f = this.context.await;
                var c = this.context.allowYield;
                this.context.await = r;
                this.context.allowYield = !i;
                var h = this.parseFormalParameters(o);
                var p = h.params;
                var v = h.stricted;
                o = h.firstRestricted;
                if (h.message) {
                  n = h.message;
                }
                var d = this.context.strict;
                var D = this.context.allowStrictDirective;
                this.context.allowStrictDirective = h.simple;
                var m = this.parseFunctionSourceElements();
                if (this.context.strict && o) {
                  this.throwUnexpectedToken(o, n);
                }
                if (this.context.strict && v) {
                  this.tolerateUnexpectedToken(v, n);
                }
                this.context.strict = d;
                this.context.allowStrictDirective = D;
                this.context.await = f;
                this.context.allowYield = c;
                return r
                  ? this.finalize(t, new u.AsyncFunctionDeclaration(s, p, m))
                  : this.finalize(t, new u.FunctionDeclaration(s, p, m, i));
              };
              Parser.prototype.parseFunctionExpression = function() {
                var e = this.createNode();
                var t = this.matchContextualKeyword("async");
                if (t) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var r = t ? false : this.match("*");
                if (r) {
                  this.nextToken();
                }
                var i;
                var n = null;
                var s;
                var o = this.context.await;
                var l = this.context.allowYield;
                this.context.await = t;
                this.context.allowYield = !r;
                if (!this.match("(")) {
                  var f = this.lookahead;
                  n =
                    !this.context.strict && !r && this.matchKeyword("yield")
                      ? this.parseIdentifierName()
                      : this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(f.value)) {
                      this.tolerateUnexpectedToken(
                        f,
                        a.Messages.StrictFunctionName
                      );
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(f.value)) {
                      s = f;
                      i = a.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(f.value)) {
                      s = f;
                      i = a.Messages.StrictReservedWord;
                    }
                  }
                }
                var c = this.parseFormalParameters(s);
                var h = c.params;
                var p = c.stricted;
                s = c.firstRestricted;
                if (c.message) {
                  i = c.message;
                }
                var v = this.context.strict;
                var d = this.context.allowStrictDirective;
                this.context.allowStrictDirective = c.simple;
                var D = this.parseFunctionSourceElements();
                if (this.context.strict && s) {
                  this.throwUnexpectedToken(s, i);
                }
                if (this.context.strict && p) {
                  this.tolerateUnexpectedToken(p, i);
                }
                this.context.strict = v;
                this.context.allowStrictDirective = d;
                this.context.await = o;
                this.context.allowYield = l;
                return t
                  ? this.finalize(e, new u.AsyncFunctionExpression(n, h, D))
                  : this.finalize(e, new u.FunctionExpression(n, h, D, r));
              };
              Parser.prototype.parseDirective = function() {
                var e = this.lookahead;
                var t = this.createNode();
                var r = this.parseExpression();
                var i =
                  r.type === o.Syntax.Literal
                    ? this.getTokenRaw(e).slice(1, -1)
                    : null;
                this.consumeSemicolon();
                return this.finalize(
                  t,
                  i ? new u.Directive(r, i) : new u.ExpressionStatement(r)
                );
              };
              Parser.prototype.parseDirectivePrologues = function() {
                var e = null;
                var t = [];
                while (true) {
                  var r = this.lookahead;
                  if (r.type !== 8) {
                    break;
                  }
                  var i = this.parseDirective();
                  t.push(i);
                  var n = i.directive;
                  if (typeof n !== "string") {
                    break;
                  }
                  if (n === "use strict") {
                    this.context.strict = true;
                    if (e) {
                      this.tolerateUnexpectedToken(
                        e,
                        a.Messages.StrictOctalLiteral
                      );
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(
                        r,
                        a.Messages.IllegalLanguageModeDirective
                      );
                    }
                  } else {
                    if (!e && r.octal) {
                      e = r;
                    }
                  }
                }
                return t;
              };
              Parser.prototype.qualifiedPropertyName = function(e) {
                switch (e.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true;
                  case 7:
                    return e.value === "[";
                  default:
                    break;
                }
                return false;
              };
              Parser.prototype.parseGetterMethod = function() {
                var e = this.createNode();
                var t = false;
                var r = this.context.allowYield;
                this.context.allowYield = !t;
                var i = this.parseFormalParameters();
                if (i.params.length > 0) {
                  this.tolerateError(a.Messages.BadGetterArity);
                }
                var n = this.parsePropertyMethod(i);
                this.context.allowYield = r;
                return this.finalize(
                  e,
                  new u.FunctionExpression(null, i.params, n, t)
                );
              };
              Parser.prototype.parseSetterMethod = function() {
                var e = this.createNode();
                var t = false;
                var r = this.context.allowYield;
                this.context.allowYield = !t;
                var i = this.parseFormalParameters();
                if (i.params.length !== 1) {
                  this.tolerateError(a.Messages.BadSetterArity);
                } else if (i.params[0] instanceof u.RestElement) {
                  this.tolerateError(a.Messages.BadSetterRestParameter);
                }
                var n = this.parsePropertyMethod(i);
                this.context.allowYield = r;
                return this.finalize(
                  e,
                  new u.FunctionExpression(null, i.params, n, t)
                );
              };
              Parser.prototype.parseGeneratorMethod = function() {
                var e = this.createNode();
                var t = true;
                var r = this.context.allowYield;
                this.context.allowYield = true;
                var i = this.parseFormalParameters();
                this.context.allowYield = false;
                var n = this.parsePropertyMethod(i);
                this.context.allowYield = r;
                return this.finalize(
                  e,
                  new u.FunctionExpression(null, i.params, n, t)
                );
              };
              Parser.prototype.isStartOfExpression = function() {
                var e = true;
                var t = this.lookahead.value;
                switch (this.lookahead.type) {
                  case 7:
                    e =
                      t === "[" ||
                      t === "(" ||
                      t === "{" ||
                      t === "+" ||
                      t === "-" ||
                      t === "!" ||
                      t === "~" ||
                      t === "++" ||
                      t === "--" ||
                      t === "/" ||
                      t === "/=";
                    break;
                  case 4:
                    e =
                      t === "class" ||
                      t === "delete" ||
                      t === "function" ||
                      t === "let" ||
                      t === "new" ||
                      t === "super" ||
                      t === "this" ||
                      t === "typeof" ||
                      t === "void" ||
                      t === "yield";
                    break;
                  default:
                    break;
                }
                return e;
              };
              Parser.prototype.parseYieldExpression = function() {
                var e = this.createNode();
                this.expectKeyword("yield");
                var t = null;
                var r = false;
                if (!this.hasLineTerminator) {
                  var i = this.context.allowYield;
                  this.context.allowYield = false;
                  r = this.match("*");
                  if (r) {
                    this.nextToken();
                    t = this.parseAssignmentExpression();
                  } else if (this.isStartOfExpression()) {
                    t = this.parseAssignmentExpression();
                  }
                  this.context.allowYield = i;
                }
                return this.finalize(e, new u.YieldExpression(t, r));
              };
              Parser.prototype.parseClassElement = function(e) {
                var t = this.lookahead;
                var r = this.createNode();
                var i = "";
                var n = null;
                var s = null;
                var o = false;
                var l = false;
                var f = false;
                var c = false;
                if (this.match("*")) {
                  this.nextToken();
                } else {
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                  var h = n;
                  if (
                    h.name === "static" &&
                    (this.qualifiedPropertyName(this.lookahead) ||
                      this.match("*"))
                  ) {
                    t = this.lookahead;
                    f = true;
                    o = this.match("[");
                    if (this.match("*")) {
                      this.nextToken();
                    } else {
                      n = this.parseObjectPropertyKey();
                    }
                  }
                  if (
                    t.type === 3 &&
                    !this.hasLineTerminator &&
                    t.value === "async"
                  ) {
                    var p = this.lookahead.value;
                    if (p !== ":" && p !== "(" && p !== "*") {
                      c = true;
                      t = this.lookahead;
                      n = this.parseObjectPropertyKey();
                      if (t.type === 3 && t.value === "constructor") {
                        this.tolerateUnexpectedToken(
                          t,
                          a.Messages.ConstructorIsAsync
                        );
                      }
                    }
                  }
                }
                var v = this.qualifiedPropertyName(this.lookahead);
                if (t.type === 3) {
                  if (t.value === "get" && v) {
                    i = "get";
                    o = this.match("[");
                    n = this.parseObjectPropertyKey();
                    this.context.allowYield = false;
                    s = this.parseGetterMethod();
                  } else if (t.value === "set" && v) {
                    i = "set";
                    o = this.match("[");
                    n = this.parseObjectPropertyKey();
                    s = this.parseSetterMethod();
                  }
                } else if (t.type === 7 && t.value === "*" && v) {
                  i = "init";
                  o = this.match("[");
                  n = this.parseObjectPropertyKey();
                  s = this.parseGeneratorMethod();
                  l = true;
                }
                if (!i && n && this.match("(")) {
                  i = "init";
                  s = c
                    ? this.parsePropertyMethodAsyncFunction()
                    : this.parsePropertyMethodFunction();
                  l = true;
                }
                if (!i) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                if (i === "init") {
                  i = "method";
                }
                if (!o) {
                  if (f && this.isPropertyKey(n, "prototype")) {
                    this.throwUnexpectedToken(t, a.Messages.StaticPrototype);
                  }
                  if (!f && this.isPropertyKey(n, "constructor")) {
                    if (i !== "method" || !l || (s && s.generator)) {
                      this.throwUnexpectedToken(
                        t,
                        a.Messages.ConstructorSpecialMethod
                      );
                    }
                    if (e.value) {
                      this.throwUnexpectedToken(
                        t,
                        a.Messages.DuplicateConstructor
                      );
                    } else {
                      e.value = true;
                    }
                    i = "constructor";
                  }
                }
                return this.finalize(r, new u.MethodDefinition(n, o, s, i, f));
              };
              Parser.prototype.parseClassElementList = function() {
                var e = [];
                var t = { value: false };
                this.expect("{");
                while (!this.match("}")) {
                  if (this.match(";")) {
                    this.nextToken();
                  } else {
                    e.push(this.parseClassElement(t));
                  }
                }
                this.expect("}");
                return e;
              };
              Parser.prototype.parseClassBody = function() {
                var e = this.createNode();
                var t = this.parseClassElementList();
                return this.finalize(e, new u.ClassBody(t));
              };
              Parser.prototype.parseClassDeclaration = function(e) {
                var t = this.createNode();
                var r = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var i =
                  e && this.lookahead.type !== 3
                    ? null
                    : this.parseVariableIdentifier();
                var n = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  n = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  );
                }
                var a = this.parseClassBody();
                this.context.strict = r;
                return this.finalize(t, new u.ClassDeclaration(i, n, a));
              };
              Parser.prototype.parseClassExpression = function() {
                var e = this.createNode();
                var t = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var r =
                  this.lookahead.type === 3
                    ? this.parseVariableIdentifier()
                    : null;
                var i = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  i = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  );
                }
                var n = this.parseClassBody();
                this.context.strict = t;
                return this.finalize(e, new u.ClassExpression(r, i, n));
              };
              Parser.prototype.parseModule = function() {
                this.context.strict = true;
                this.context.isModule = true;
                this.scanner.isModule = true;
                var e = this.createNode();
                var t = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem());
                }
                return this.finalize(e, new u.Module(t));
              };
              Parser.prototype.parseScript = function() {
                var e = this.createNode();
                var t = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem());
                }
                return this.finalize(e, new u.Script(t));
              };
              Parser.prototype.parseModuleSpecifier = function() {
                var e = this.createNode();
                if (this.lookahead.type !== 8) {
                  this.throwError(a.Messages.InvalidModuleSpecifier);
                }
                var t = this.nextToken();
                var r = this.getTokenRaw(t);
                return this.finalize(e, new u.Literal(t.value, r));
              };
              Parser.prototype.parseImportSpecifier = function() {
                var e = this.createNode();
                var t;
                var r;
                if (this.lookahead.type === 3) {
                  t = this.parseVariableIdentifier();
                  r = t;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    r = this.parseVariableIdentifier();
                  }
                } else {
                  t = this.parseIdentifierName();
                  r = t;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    r = this.parseVariableIdentifier();
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(e, new u.ImportSpecifier(r, t));
              };
              Parser.prototype.parseNamedImports = function() {
                this.expect("{");
                var e = [];
                while (!this.match("}")) {
                  e.push(this.parseImportSpecifier());
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return e;
              };
              Parser.prototype.parseImportDefaultSpecifier = function() {
                var e = this.createNode();
                var t = this.parseIdentifierName();
                return this.finalize(e, new u.ImportDefaultSpecifier(t));
              };
              Parser.prototype.parseImportNamespaceSpecifier = function() {
                var e = this.createNode();
                this.expect("*");
                if (!this.matchContextualKeyword("as")) {
                  this.throwError(a.Messages.NoAsAfterImportNamespace);
                }
                this.nextToken();
                var t = this.parseIdentifierName();
                return this.finalize(e, new u.ImportNamespaceSpecifier(t));
              };
              Parser.prototype.parseImportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(a.Messages.IllegalImportDeclaration);
                }
                var e = this.createNode();
                this.expectKeyword("import");
                var t;
                var r = [];
                if (this.lookahead.type === 8) {
                  t = this.parseModuleSpecifier();
                } else {
                  if (this.match("{")) {
                    r = r.concat(this.parseNamedImports());
                  } else if (this.match("*")) {
                    r.push(this.parseImportNamespaceSpecifier());
                  } else if (
                    this.isIdentifierName(this.lookahead) &&
                    !this.matchKeyword("default")
                  ) {
                    r.push(this.parseImportDefaultSpecifier());
                    if (this.match(",")) {
                      this.nextToken();
                      if (this.match("*")) {
                        r.push(this.parseImportNamespaceSpecifier());
                      } else if (this.match("{")) {
                        r = r.concat(this.parseNamedImports());
                      } else {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                  if (!this.matchContextualKeyword("from")) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause;
                    this.throwError(i, this.lookahead.value);
                  }
                  this.nextToken();
                  t = this.parseModuleSpecifier();
                }
                this.consumeSemicolon();
                return this.finalize(e, new u.ImportDeclaration(r, t));
              };
              Parser.prototype.parseExportSpecifier = function() {
                var e = this.createNode();
                var t = this.parseIdentifierName();
                var r = t;
                if (this.matchContextualKeyword("as")) {
                  this.nextToken();
                  r = this.parseIdentifierName();
                }
                return this.finalize(e, new u.ExportSpecifier(t, r));
              };
              Parser.prototype.parseExportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(a.Messages.IllegalExportDeclaration);
                }
                var e = this.createNode();
                this.expectKeyword("export");
                var t;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  if (this.matchKeyword("function")) {
                    var r = this.parseFunctionDeclaration(true);
                    t = this.finalize(e, new u.ExportDefaultDeclaration(r));
                  } else if (this.matchKeyword("class")) {
                    var r = this.parseClassDeclaration(true);
                    t = this.finalize(e, new u.ExportDefaultDeclaration(r));
                  } else if (this.matchContextualKeyword("async")) {
                    var r = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration(true)
                      : this.parseAssignmentExpression();
                    t = this.finalize(e, new u.ExportDefaultDeclaration(r));
                  } else {
                    if (this.matchContextualKeyword("from")) {
                      this.throwError(
                        a.Messages.UnexpectedToken,
                        this.lookahead.value
                      );
                    }
                    var r = this.match("{")
                      ? this.parseObjectInitializer()
                      : this.match("[")
                      ? this.parseArrayInitializer()
                      : this.parseAssignmentExpression();
                    this.consumeSemicolon();
                    t = this.finalize(e, new u.ExportDefaultDeclaration(r));
                  }
                } else if (this.match("*")) {
                  this.nextToken();
                  if (!this.matchContextualKeyword("from")) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause;
                    this.throwError(i, this.lookahead.value);
                  }
                  this.nextToken();
                  var n = this.parseModuleSpecifier();
                  this.consumeSemicolon();
                  t = this.finalize(e, new u.ExportAllDeclaration(n));
                } else if (this.lookahead.type === 4) {
                  var r = void 0;
                  switch (this.lookahead.value) {
                    case "let":
                    case "const":
                      r = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "var":
                    case "class":
                    case "function":
                      r = this.parseStatementListItem();
                      break;
                    default:
                      this.throwUnexpectedToken(this.lookahead);
                  }
                  t = this.finalize(
                    e,
                    new u.ExportNamedDeclaration(r, [], null)
                  );
                } else if (this.matchAsyncFunction()) {
                  var r = this.parseFunctionDeclaration();
                  t = this.finalize(
                    e,
                    new u.ExportNamedDeclaration(r, [], null)
                  );
                } else {
                  var s = [];
                  var o = null;
                  var l = false;
                  this.expect("{");
                  while (!this.match("}")) {
                    l = l || this.matchKeyword("default");
                    s.push(this.parseExportSpecifier());
                    if (!this.match("}")) {
                      this.expect(",");
                    }
                  }
                  this.expect("}");
                  if (this.matchContextualKeyword("from")) {
                    this.nextToken();
                    o = this.parseModuleSpecifier();
                    this.consumeSemicolon();
                  } else if (l) {
                    var i = this.lookahead.value
                      ? a.Messages.UnexpectedToken
                      : a.Messages.MissingFromClause;
                    this.throwError(i, this.lookahead.value);
                  } else {
                    this.consumeSemicolon();
                  }
                  t = this.finalize(
                    e,
                    new u.ExportNamedDeclaration(null, s, o)
                  );
                }
                return t;
              };
              return Parser;
            })();
            t.Parser = c;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            function assert(e, t) {
              if (!e) {
                throw new Error("ASSERT: " + t);
              }
            }
            t.assert = assert;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var r = (function() {
              function ErrorHandler() {
                this.errors = [];
                this.tolerant = false;
              }
              ErrorHandler.prototype.recordError = function(e) {
                this.errors.push(e);
              };
              ErrorHandler.prototype.tolerate = function(e) {
                if (this.tolerant) {
                  this.recordError(e);
                } else {
                  throw e;
                }
              };
              ErrorHandler.prototype.constructError = function(e, t) {
                var r = new Error(e);
                try {
                  throw r;
                } catch (e) {
                  if (Object.create && Object.defineProperty) {
                    r = Object.create(e);
                    Object.defineProperty(r, "column", { value: t });
                  }
                }
                return r;
              };
              ErrorHandler.prototype.createError = function(e, t, r, i) {
                var n = "Line " + t + ": " + i;
                var a = this.constructError(n, r);
                a.index = e;
                a.lineNumber = t;
                a.description = i;
                return a;
              };
              ErrorHandler.prototype.throwError = function(e, t, r, i) {
                throw this.createError(e, t, r, i);
              };
              ErrorHandler.prototype.tolerateError = function(e, t, r, i) {
                var n = this.createError(e, t, r, i);
                if (this.tolerant) {
                  this.recordError(n);
                } else {
                  throw n;
                }
              };
              return ErrorHandler;
            })();
            t.ErrorHandler = r;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.Messages = {
              BadGetterArity: "Getter must not have any formal parameters",
              BadSetterArity: "Setter must have exactly one formal parameter",
              BadSetterRestParameter:
                "Setter function argument must not be a rest parameter",
              ConstructorIsAsync:
                "Class constructor may not be an async method",
              ConstructorSpecialMethod:
                "Class constructor may not be an accessor",
              DeclarationMissingInitializer:
                "Missing initializer in %0 declaration",
              DefaultRestParameter: "Unexpected token =",
              DuplicateBinding: "Duplicate binding %0",
              DuplicateConstructor: "A class may only have one constructor",
              DuplicateProtoProperty:
                "Duplicate __proto__ fields are not allowed in object literals",
              ForInOfLoopInitializer:
                "%0 loop variable declaration may not have an initializer",
              GeneratorInLegacyContext:
                "Generator declarations are not allowed in legacy contexts",
              IllegalBreak: "Illegal break statement",
              IllegalContinue: "Illegal continue statement",
              IllegalExportDeclaration: "Unexpected token",
              IllegalImportDeclaration: "Unexpected token",
              IllegalLanguageModeDirective:
                "Illegal 'use strict' directive in function with non-simple parameter list",
              IllegalReturn: "Illegal return statement",
              InvalidEscapedReservedWord:
                "Keyword must not contain escaped characters",
              InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
              InvalidLHSInAssignment: "Invalid left-hand side in assignment",
              InvalidLHSInForIn: "Invalid left-hand side in for-in",
              InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
              InvalidModuleSpecifier: "Unexpected token",
              InvalidRegExp: "Invalid regular expression",
              LetInLexicalBinding:
                "let is disallowed as a lexically bound name",
              MissingFromClause: "Unexpected token",
              MultipleDefaultsInSwitch:
                "More than one default clause in switch statement",
              NewlineAfterThrow: "Illegal newline after throw",
              NoAsAfterImportNamespace: "Unexpected token",
              NoCatchOrFinally: "Missing catch or finally after try",
              ParameterAfterRestParameter:
                "Rest parameter must be last formal parameter",
              Redeclaration: "%0 '%1' has already been declared",
              StaticPrototype:
                "Classes may not have static property named prototype",
              StrictCatchVariable:
                "Catch variable may not be eval or arguments in strict mode",
              StrictDelete:
                "Delete of an unqualified identifier in strict mode.",
              StrictFunction:
                "In strict mode code, functions can only be declared at top level or inside a block",
              StrictFunctionName:
                "Function name may not be eval or arguments in strict mode",
              StrictLHSAssignment:
                "Assignment to eval or arguments is not allowed in strict mode",
              StrictLHSPostfix:
                "Postfix increment/decrement may not have eval or arguments operand in strict mode",
              StrictLHSPrefix:
                "Prefix increment/decrement may not have eval or arguments operand in strict mode",
              StrictModeWith:
                "Strict mode code may not include a with statement",
              StrictOctalLiteral:
                "Octal literals are not allowed in strict mode.",
              StrictParamDupe:
                "Strict mode function may not have duplicate parameter names",
              StrictParamName:
                "Parameter name eval or arguments is not allowed in strict mode",
              StrictReservedWord: "Use of future reserved word in strict mode",
              StrictVarName:
                "Variable name may not be eval or arguments in strict mode",
              TemplateOctalLiteral:
                "Octal literals are not allowed in template strings.",
              UnexpectedEOS: "Unexpected end of input",
              UnexpectedIdentifier: "Unexpected identifier",
              UnexpectedNumber: "Unexpected number",
              UnexpectedReserved: "Unexpected reserved word",
              UnexpectedString: "Unexpected string",
              UnexpectedTemplate: "Unexpected quasi %0",
              UnexpectedToken: "Unexpected token %0",
              UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
              UnknownLabel: "Undefined label '%0'",
              UnterminatedRegExp: "Invalid regular expression: missing /"
            };
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(9);
            var n = r(4);
            var a = r(11);
            function hexValue(e) {
              return "0123456789abcdef".indexOf(e.toLowerCase());
            }
            function octalValue(e) {
              return "01234567".indexOf(e);
            }
            var u = (function() {
              function Scanner(e, t) {
                this.source = e;
                this.errorHandler = t;
                this.trackComment = false;
                this.isModule = false;
                this.length = e.length;
                this.index = 0;
                this.lineNumber = e.length > 0 ? 1 : 0;
                this.lineStart = 0;
                this.curlyStack = [];
              }
              Scanner.prototype.saveState = function() {
                return {
                  index: this.index,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart
                };
              };
              Scanner.prototype.restoreState = function(e) {
                this.index = e.index;
                this.lineNumber = e.lineNumber;
                this.lineStart = e.lineStart;
              };
              Scanner.prototype.eof = function() {
                return this.index >= this.length;
              };
              Scanner.prototype.throwUnexpectedToken = function(e) {
                if (e === void 0) {
                  e = a.Messages.UnexpectedTokenIllegal;
                }
                return this.errorHandler.throwError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                );
              };
              Scanner.prototype.tolerateUnexpectedToken = function(e) {
                if (e === void 0) {
                  e = a.Messages.UnexpectedTokenIllegal;
                }
                this.errorHandler.tolerateError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                );
              };
              Scanner.prototype.skipSingleLineComment = function(e) {
                var t = [];
                var r, i;
                if (this.trackComment) {
                  t = [];
                  r = this.index - e;
                  i = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - e
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var a = this.source.charCodeAt(this.index);
                  ++this.index;
                  if (n.Character.isLineTerminator(a)) {
                    if (this.trackComment) {
                      i.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1
                      };
                      var u = {
                        multiLine: false,
                        slice: [r + e, this.index - 1],
                        range: [r, this.index - 1],
                        loc: i
                      };
                      t.push(u);
                    }
                    if (a === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    return t;
                  }
                }
                if (this.trackComment) {
                  i.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var u = {
                    multiLine: false,
                    slice: [r + e, this.index],
                    range: [r, this.index],
                    loc: i
                  };
                  t.push(u);
                }
                return t;
              };
              Scanner.prototype.skipMultiLineComment = function() {
                var e = [];
                var t, r;
                if (this.trackComment) {
                  e = [];
                  t = this.index - 2;
                  r = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var i = this.source.charCodeAt(this.index);
                  if (n.Character.isLineTerminator(i)) {
                    if (
                      i === 13 &&
                      this.source.charCodeAt(this.index + 1) === 10
                    ) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    ++this.index;
                    this.lineStart = this.index;
                  } else if (i === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2;
                      if (this.trackComment) {
                        r.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart
                        };
                        var a = {
                          multiLine: true,
                          slice: [t + 2, this.index - 2],
                          range: [t, this.index],
                          loc: r
                        };
                        e.push(a);
                      }
                      return e;
                    }
                    ++this.index;
                  } else {
                    ++this.index;
                  }
                }
                if (this.trackComment) {
                  r.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var a = {
                    multiLine: true,
                    slice: [t + 2, this.index],
                    range: [t, this.index],
                    loc: r
                  };
                  e.push(a);
                }
                this.tolerateUnexpectedToken();
                return e;
              };
              Scanner.prototype.scanComments = function() {
                var e;
                if (this.trackComment) {
                  e = [];
                }
                var t = this.index === 0;
                while (!this.eof()) {
                  var r = this.source.charCodeAt(this.index);
                  if (n.Character.isWhiteSpace(r)) {
                    ++this.index;
                  } else if (n.Character.isLineTerminator(r)) {
                    ++this.index;
                    if (r === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    t = true;
                  } else if (r === 47) {
                    r = this.source.charCodeAt(this.index + 1);
                    if (r === 47) {
                      this.index += 2;
                      var i = this.skipSingleLineComment(2);
                      if (this.trackComment) {
                        e = e.concat(i);
                      }
                      t = true;
                    } else if (r === 42) {
                      this.index += 2;
                      var i = this.skipMultiLineComment();
                      if (this.trackComment) {
                        e = e.concat(i);
                      }
                    } else {
                      break;
                    }
                  } else if (t && r === 45) {
                    if (
                      this.source.charCodeAt(this.index + 1) === 45 &&
                      this.source.charCodeAt(this.index + 2) === 62
                    ) {
                      this.index += 3;
                      var i = this.skipSingleLineComment(3);
                      if (this.trackComment) {
                        e = e.concat(i);
                      }
                    } else {
                      break;
                    }
                  } else if (r === 60 && !this.isModule) {
                    if (
                      this.source.slice(this.index + 1, this.index + 4) ===
                      "!--"
                    ) {
                      this.index += 4;
                      var i = this.skipSingleLineComment(4);
                      if (this.trackComment) {
                        e = e.concat(i);
                      }
                    } else {
                      break;
                    }
                  } else {
                    break;
                  }
                }
                return e;
              };
              Scanner.prototype.isFutureReservedWord = function(e) {
                switch (e) {
                  case "enum":
                  case "export":
                  case "import":
                  case "super":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner.prototype.isStrictModeReservedWord = function(e) {
                switch (e) {
                  case "implements":
                  case "interface":
                  case "package":
                  case "private":
                  case "protected":
                  case "public":
                  case "static":
                  case "yield":
                  case "let":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner.prototype.isRestrictedWord = function(e) {
                return e === "eval" || e === "arguments";
              };
              Scanner.prototype.isKeyword = function(e) {
                switch (e.length) {
                  case 2:
                    return e === "if" || e === "in" || e === "do";
                  case 3:
                    return (
                      e === "var" ||
                      e === "for" ||
                      e === "new" ||
                      e === "try" ||
                      e === "let"
                    );
                  case 4:
                    return (
                      e === "this" ||
                      e === "else" ||
                      e === "case" ||
                      e === "void" ||
                      e === "with" ||
                      e === "enum"
                    );
                  case 5:
                    return (
                      e === "while" ||
                      e === "break" ||
                      e === "catch" ||
                      e === "throw" ||
                      e === "const" ||
                      e === "yield" ||
                      e === "class" ||
                      e === "super"
                    );
                  case 6:
                    return (
                      e === "return" ||
                      e === "typeof" ||
                      e === "delete" ||
                      e === "switch" ||
                      e === "export" ||
                      e === "import"
                    );
                  case 7:
                    return (
                      e === "default" || e === "finally" || e === "extends"
                    );
                  case 8:
                    return (
                      e === "function" || e === "continue" || e === "debugger"
                    );
                  case 10:
                    return e === "instanceof";
                  default:
                    return false;
                }
              };
              Scanner.prototype.codePointAt = function(e) {
                var t = this.source.charCodeAt(e);
                if (t >= 55296 && t <= 56319) {
                  var r = this.source.charCodeAt(e + 1);
                  if (r >= 56320 && r <= 57343) {
                    var i = t;
                    t = (i - 55296) * 1024 + r - 56320 + 65536;
                  }
                }
                return t;
              };
              Scanner.prototype.scanHexEscape = function(e) {
                var t = e === "u" ? 4 : 2;
                var r = 0;
                for (var i = 0; i < t; ++i) {
                  if (
                    !this.eof() &&
                    n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    r = r * 16 + hexValue(this.source[this.index++]);
                  } else {
                    return null;
                  }
                }
                return String.fromCharCode(r);
              };
              Scanner.prototype.scanUnicodeCodePointEscape = function() {
                var e = this.source[this.index];
                var t = 0;
                if (e === "}") {
                  this.throwUnexpectedToken();
                }
                while (!this.eof()) {
                  e = this.source[this.index++];
                  if (!n.Character.isHexDigit(e.charCodeAt(0))) {
                    break;
                  }
                  t = t * 16 + hexValue(e);
                }
                if (t > 1114111 || e !== "}") {
                  this.throwUnexpectedToken();
                }
                return n.Character.fromCodePoint(t);
              };
              Scanner.prototype.getIdentifier = function() {
                var e = this.index++;
                while (!this.eof()) {
                  var t = this.source.charCodeAt(this.index);
                  if (t === 92) {
                    this.index = e;
                    return this.getComplexIdentifier();
                  } else if (t >= 55296 && t < 57343) {
                    this.index = e;
                    return this.getComplexIdentifier();
                  }
                  if (n.Character.isIdentifierPart(t)) {
                    ++this.index;
                  } else {
                    break;
                  }
                }
                return this.source.slice(e, this.index);
              };
              Scanner.prototype.getComplexIdentifier = function() {
                var e = this.codePointAt(this.index);
                var t = n.Character.fromCodePoint(e);
                this.index += t.length;
                var r;
                if (e === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken();
                  }
                  ++this.index;
                  if (this.source[this.index] === "{") {
                    ++this.index;
                    r = this.scanUnicodeCodePointEscape();
                  } else {
                    r = this.scanHexEscape("u");
                    if (
                      r === null ||
                      r === "\\" ||
                      !n.Character.isIdentifierStart(r.charCodeAt(0))
                    ) {
                      this.throwUnexpectedToken();
                    }
                  }
                  t = r;
                }
                while (!this.eof()) {
                  e = this.codePointAt(this.index);
                  if (!n.Character.isIdentifierPart(e)) {
                    break;
                  }
                  r = n.Character.fromCodePoint(e);
                  t += r;
                  this.index += r.length;
                  if (e === 92) {
                    t = t.substr(0, t.length - 1);
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken();
                    }
                    ++this.index;
                    if (this.source[this.index] === "{") {
                      ++this.index;
                      r = this.scanUnicodeCodePointEscape();
                    } else {
                      r = this.scanHexEscape("u");
                      if (
                        r === null ||
                        r === "\\" ||
                        !n.Character.isIdentifierPart(r.charCodeAt(0))
                      ) {
                        this.throwUnexpectedToken();
                      }
                    }
                    t += r;
                  }
                }
                return t;
              };
              Scanner.prototype.octalToDecimal = function(e) {
                var t = e !== "0";
                var r = octalValue(e);
                if (
                  !this.eof() &&
                  n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                ) {
                  t = true;
                  r = r * 8 + octalValue(this.source[this.index++]);
                  if (
                    "0123".indexOf(e) >= 0 &&
                    !this.eof() &&
                    n.Character.isOctalDigit(this.source.charCodeAt(this.index))
                  ) {
                    r = r * 8 + octalValue(this.source[this.index++]);
                  }
                }
                return { code: r, octal: t };
              };
              Scanner.prototype.scanIdentifier = function() {
                var e;
                var t = this.index;
                var r =
                  this.source.charCodeAt(t) === 92
                    ? this.getComplexIdentifier()
                    : this.getIdentifier();
                if (r.length === 1) {
                  e = 3;
                } else if (this.isKeyword(r)) {
                  e = 4;
                } else if (r === "null") {
                  e = 5;
                } else if (r === "true" || r === "false") {
                  e = 1;
                } else {
                  e = 3;
                }
                if (e !== 3 && t + r.length !== this.index) {
                  var i = this.index;
                  this.index = t;
                  this.tolerateUnexpectedToken(
                    a.Messages.InvalidEscapedReservedWord
                  );
                  this.index = i;
                }
                return {
                  type: e,
                  value: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index
                };
              };
              Scanner.prototype.scanPunctuator = function() {
                var e = this.index;
                var t = this.source[this.index];
                switch (t) {
                  case "(":
                  case "{":
                    if (t === "{") {
                      this.curlyStack.push("{");
                    }
                    ++this.index;
                    break;
                  case ".":
                    ++this.index;
                    if (
                      this.source[this.index] === "." &&
                      this.source[this.index + 1] === "."
                    ) {
                      this.index += 2;
                      t = "...";
                    }
                    break;
                  case "}":
                    ++this.index;
                    this.curlyStack.pop();
                    break;
                  case ")":
                  case ";":
                  case ",":
                  case "[":
                  case "]":
                  case ":":
                  case "?":
                  case "~":
                    ++this.index;
                    break;
                  default:
                    t = this.source.substr(this.index, 4);
                    if (t === ">>>=") {
                      this.index += 4;
                    } else {
                      t = t.substr(0, 3);
                      if (
                        t === "===" ||
                        t === "!==" ||
                        t === ">>>" ||
                        t === "<<=" ||
                        t === ">>=" ||
                        t === "**="
                      ) {
                        this.index += 3;
                      } else {
                        t = t.substr(0, 2);
                        if (
                          t === "&&" ||
                          t === "||" ||
                          t === "==" ||
                          t === "!=" ||
                          t === "+=" ||
                          t === "-=" ||
                          t === "*=" ||
                          t === "/=" ||
                          t === "++" ||
                          t === "--" ||
                          t === "<<" ||
                          t === ">>" ||
                          t === "&=" ||
                          t === "|=" ||
                          t === "^=" ||
                          t === "%=" ||
                          t === "<=" ||
                          t === ">=" ||
                          t === "=>" ||
                          t === "**"
                        ) {
                          this.index += 2;
                        } else {
                          t = this.source[this.index];
                          if ("<>=!+-*%&|^/".indexOf(t) >= 0) {
                            ++this.index;
                          }
                        }
                      }
                    }
                }
                if (this.index === e) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 7,
                  value: t,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.scanHexLiteral = function(e) {
                var t = "";
                while (!this.eof()) {
                  if (
                    !n.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    break;
                  }
                  t += this.source[this.index++];
                }
                if (t.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt("0x" + t, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.scanBinaryLiteral = function(e) {
                var t = "";
                var r;
                while (!this.eof()) {
                  r = this.source[this.index];
                  if (r !== "0" && r !== "1") {
                    break;
                  }
                  t += this.source[this.index++];
                }
                if (t.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (!this.eof()) {
                  r = this.source.charCodeAt(this.index);
                  if (
                    n.Character.isIdentifierStart(r) ||
                    n.Character.isDecimalDigit(r)
                  ) {
                    this.throwUnexpectedToken();
                  }
                }
                return {
                  type: 6,
                  value: parseInt(t, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.scanOctalLiteral = function(e, t) {
                var r = "";
                var i = false;
                if (n.Character.isOctalDigit(e.charCodeAt(0))) {
                  i = true;
                  r = "0" + this.source[this.index++];
                } else {
                  ++this.index;
                }
                while (!this.eof()) {
                  if (
                    !n.Character.isOctalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    break;
                  }
                  r += this.source[this.index++];
                }
                if (!i && r.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  ) ||
                  n.Character.isDecimalDigit(this.source.charCodeAt(this.index))
                ) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt(r, 8),
                  octal: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index
                };
              };
              Scanner.prototype.isImplicitOctalLiteral = function() {
                for (var e = this.index + 1; e < this.length; ++e) {
                  var t = this.source[e];
                  if (t === "8" || t === "9") {
                    return false;
                  }
                  if (!n.Character.isOctalDigit(t.charCodeAt(0))) {
                    return true;
                  }
                }
                return true;
              };
              Scanner.prototype.scanNumericLiteral = function() {
                var e = this.index;
                var t = this.source[e];
                i.assert(
                  n.Character.isDecimalDigit(t.charCodeAt(0)) || t === ".",
                  "Numeric literal must start with a decimal digit or a decimal point"
                );
                var r = "";
                if (t !== ".") {
                  r = this.source[this.index++];
                  t = this.source[this.index];
                  if (r === "0") {
                    if (t === "x" || t === "X") {
                      ++this.index;
                      return this.scanHexLiteral(e);
                    }
                    if (t === "b" || t === "B") {
                      ++this.index;
                      return this.scanBinaryLiteral(e);
                    }
                    if (t === "o" || t === "O") {
                      return this.scanOctalLiteral(t, e);
                    }
                    if (t && n.Character.isOctalDigit(t.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(t, e);
                      }
                    }
                  }
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    r += this.source[this.index++];
                  }
                  t = this.source[this.index];
                }
                if (t === ".") {
                  r += this.source[this.index++];
                  while (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    r += this.source[this.index++];
                  }
                  t = this.source[this.index];
                }
                if (t === "e" || t === "E") {
                  r += this.source[this.index++];
                  t = this.source[this.index];
                  if (t === "+" || t === "-") {
                    r += this.source[this.index++];
                  }
                  if (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    while (
                      n.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      )
                    ) {
                      r += this.source[this.index++];
                    }
                  } else {
                    this.throwUnexpectedToken();
                  }
                }
                if (
                  n.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseFloat(r),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.scanStringLiteral = function() {
                var e = this.index;
                var t = this.source[e];
                i.assert(
                  t === "'" || t === '"',
                  "String literal must starts with a quote"
                );
                ++this.index;
                var r = false;
                var u = "";
                while (!this.eof()) {
                  var s = this.source[this.index++];
                  if (s === t) {
                    t = "";
                    break;
                  } else if (s === "\\") {
                    s = this.source[this.index++];
                    if (!s || !n.Character.isLineTerminator(s.charCodeAt(0))) {
                      switch (s) {
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            u += this.scanUnicodeCodePointEscape();
                          } else {
                            var o = this.scanHexEscape(s);
                            if (o === null) {
                              this.throwUnexpectedToken();
                            }
                            u += o;
                          }
                          break;
                        case "x":
                          var l = this.scanHexEscape(s);
                          if (l === null) {
                            this.throwUnexpectedToken(
                              a.Messages.InvalidHexEscapeSequence
                            );
                          }
                          u += l;
                          break;
                        case "n":
                          u += "\n";
                          break;
                        case "r":
                          u += "\r";
                          break;
                        case "t":
                          u += "\t";
                          break;
                        case "b":
                          u += "\b";
                          break;
                        case "f":
                          u += "\f";
                          break;
                        case "v":
                          u += "\v";
                          break;
                        case "8":
                        case "9":
                          u += s;
                          this.tolerateUnexpectedToken();
                          break;
                        default:
                          if (s && n.Character.isOctalDigit(s.charCodeAt(0))) {
                            var f = this.octalToDecimal(s);
                            r = f.octal || r;
                            u += String.fromCharCode(f.code);
                          } else {
                            u += s;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (s === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (n.Character.isLineTerminator(s.charCodeAt(0))) {
                    break;
                  } else {
                    u += s;
                  }
                }
                if (t !== "") {
                  this.index = e;
                  this.throwUnexpectedToken();
                }
                return {
                  type: 8,
                  value: u,
                  octal: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.scanTemplate = function() {
                var e = "";
                var t = false;
                var r = this.index;
                var i = this.source[r] === "`";
                var u = false;
                var s = 2;
                ++this.index;
                while (!this.eof()) {
                  var o = this.source[this.index++];
                  if (o === "`") {
                    s = 1;
                    u = true;
                    t = true;
                    break;
                  } else if (o === "$") {
                    if (this.source[this.index] === "{") {
                      this.curlyStack.push("${");
                      ++this.index;
                      t = true;
                      break;
                    }
                    e += o;
                  } else if (o === "\\") {
                    o = this.source[this.index++];
                    if (!n.Character.isLineTerminator(o.charCodeAt(0))) {
                      switch (o) {
                        case "n":
                          e += "\n";
                          break;
                        case "r":
                          e += "\r";
                          break;
                        case "t":
                          e += "\t";
                          break;
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            e += this.scanUnicodeCodePointEscape();
                          } else {
                            var l = this.index;
                            var f = this.scanHexEscape(o);
                            if (f !== null) {
                              e += f;
                            } else {
                              this.index = l;
                              e += o;
                            }
                          }
                          break;
                        case "x":
                          var c = this.scanHexEscape(o);
                          if (c === null) {
                            this.throwUnexpectedToken(
                              a.Messages.InvalidHexEscapeSequence
                            );
                          }
                          e += c;
                          break;
                        case "b":
                          e += "\b";
                          break;
                        case "f":
                          e += "\f";
                          break;
                        case "v":
                          e += "\v";
                          break;
                        default:
                          if (o === "0") {
                            if (
                              n.Character.isDecimalDigit(
                                this.source.charCodeAt(this.index)
                              )
                            ) {
                              this.throwUnexpectedToken(
                                a.Messages.TemplateOctalLiteral
                              );
                            }
                            e += "\0";
                          } else if (
                            n.Character.isOctalDigit(o.charCodeAt(0))
                          ) {
                            this.throwUnexpectedToken(
                              a.Messages.TemplateOctalLiteral
                            );
                          } else {
                            e += o;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (o === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (n.Character.isLineTerminator(o.charCodeAt(0))) {
                    ++this.lineNumber;
                    if (o === "\r" && this.source[this.index] === "\n") {
                      ++this.index;
                    }
                    this.lineStart = this.index;
                    e += "\n";
                  } else {
                    e += o;
                  }
                }
                if (!t) {
                  this.throwUnexpectedToken();
                }
                if (!i) {
                  this.curlyStack.pop();
                }
                return {
                  type: 10,
                  value: this.source.slice(r + 1, this.index - s),
                  cooked: e,
                  head: i,
                  tail: u,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: r,
                  end: this.index
                };
              };
              Scanner.prototype.testRegExp = function(e, t) {
                var r = "￿";
                var i = e;
                var n = this;
                if (t.indexOf("u") >= 0) {
                  i = i
                    .replace(
                      /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                      function(e, t, i) {
                        var u = parseInt(t || i, 16);
                        if (u > 1114111) {
                          n.throwUnexpectedToken(a.Messages.InvalidRegExp);
                        }
                        if (u <= 65535) {
                          return String.fromCharCode(u);
                        }
                        return r;
                      }
                    )
                    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, r);
                }
                try {
                  RegExp(i);
                } catch (e) {
                  this.throwUnexpectedToken(a.Messages.InvalidRegExp);
                }
                try {
                  return new RegExp(e, t);
                } catch (e) {
                  return null;
                }
              };
              Scanner.prototype.scanRegExpBody = function() {
                var e = this.source[this.index];
                i.assert(
                  e === "/",
                  "Regular expression literal must start with a slash"
                );
                var t = this.source[this.index++];
                var r = false;
                var u = false;
                while (!this.eof()) {
                  e = this.source[this.index++];
                  t += e;
                  if (e === "\\") {
                    e = this.source[this.index++];
                    if (n.Character.isLineTerminator(e.charCodeAt(0))) {
                      this.throwUnexpectedToken(a.Messages.UnterminatedRegExp);
                    }
                    t += e;
                  } else if (n.Character.isLineTerminator(e.charCodeAt(0))) {
                    this.throwUnexpectedToken(a.Messages.UnterminatedRegExp);
                  } else if (r) {
                    if (e === "]") {
                      r = false;
                    }
                  } else {
                    if (e === "/") {
                      u = true;
                      break;
                    } else if (e === "[") {
                      r = true;
                    }
                  }
                }
                if (!u) {
                  this.throwUnexpectedToken(a.Messages.UnterminatedRegExp);
                }
                return t.substr(1, t.length - 2);
              };
              Scanner.prototype.scanRegExpFlags = function() {
                var e = "";
                var t = "";
                while (!this.eof()) {
                  var r = this.source[this.index];
                  if (!n.Character.isIdentifierPart(r.charCodeAt(0))) {
                    break;
                  }
                  ++this.index;
                  if (r === "\\" && !this.eof()) {
                    r = this.source[this.index];
                    if (r === "u") {
                      ++this.index;
                      var i = this.index;
                      var a = this.scanHexEscape("u");
                      if (a !== null) {
                        t += a;
                        for (e += "\\u"; i < this.index; ++i) {
                          e += this.source[i];
                        }
                      } else {
                        this.index = i;
                        t += "u";
                        e += "\\u";
                      }
                      this.tolerateUnexpectedToken();
                    } else {
                      e += "\\";
                      this.tolerateUnexpectedToken();
                    }
                  } else {
                    t += r;
                    e += r;
                  }
                }
                return t;
              };
              Scanner.prototype.scanRegExp = function() {
                var e = this.index;
                var t = this.scanRegExpBody();
                var r = this.scanRegExpFlags();
                var i = this.testRegExp(t, r);
                return {
                  type: 9,
                  value: "",
                  pattern: t,
                  flags: r,
                  regex: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index
                };
              };
              Scanner.prototype.lex = function() {
                if (this.eof()) {
                  return {
                    type: 2,
                    value: "",
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: this.index,
                    end: this.index
                  };
                }
                var e = this.source.charCodeAt(this.index);
                if (n.Character.isIdentifierStart(e)) {
                  return this.scanIdentifier();
                }
                if (e === 40 || e === 41 || e === 59) {
                  return this.scanPunctuator();
                }
                if (e === 39 || e === 34) {
                  return this.scanStringLiteral();
                }
                if (e === 46) {
                  if (
                    n.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index + 1)
                    )
                  ) {
                    return this.scanNumericLiteral();
                  }
                  return this.scanPunctuator();
                }
                if (n.Character.isDecimalDigit(e)) {
                  return this.scanNumericLiteral();
                }
                if (
                  e === 96 ||
                  (e === 125 &&
                    this.curlyStack[this.curlyStack.length - 1] === "${")
                ) {
                  return this.scanTemplate();
                }
                if (e >= 55296 && e < 57343) {
                  if (
                    n.Character.isIdentifierStart(this.codePointAt(this.index))
                  ) {
                    return this.scanIdentifier();
                  }
                }
                return this.scanPunctuator();
              };
              return Scanner;
            })();
            t.Scanner = u;
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.TokenName = {};
            t.TokenName[1] = "Boolean";
            t.TokenName[2] = "<end>";
            t.TokenName[3] = "Identifier";
            t.TokenName[4] = "Keyword";
            t.TokenName[5] = "Null";
            t.TokenName[6] = "Numeric";
            t.TokenName[7] = "Punctuator";
            t.TokenName[8] = "String";
            t.TokenName[9] = "RegularExpression";
            t.TokenName[10] = "Template";
          },
          function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            t.XHTMLEntities = {
              quot: '"',
              amp: "&",
              apos: "'",
              gt: ">",
              nbsp: " ",
              iexcl: "¡",
              cent: "¢",
              pound: "£",
              curren: "¤",
              yen: "¥",
              brvbar: "¦",
              sect: "§",
              uml: "¨",
              copy: "©",
              ordf: "ª",
              laquo: "«",
              not: "¬",
              shy: "­",
              reg: "®",
              macr: "¯",
              deg: "°",
              plusmn: "±",
              sup2: "²",
              sup3: "³",
              acute: "´",
              micro: "µ",
              para: "¶",
              middot: "·",
              cedil: "¸",
              sup1: "¹",
              ordm: "º",
              raquo: "»",
              frac14: "¼",
              frac12: "½",
              frac34: "¾",
              iquest: "¿",
              Agrave: "À",
              Aacute: "Á",
              Acirc: "Â",
              Atilde: "Ã",
              Auml: "Ä",
              Aring: "Å",
              AElig: "Æ",
              Ccedil: "Ç",
              Egrave: "È",
              Eacute: "É",
              Ecirc: "Ê",
              Euml: "Ë",
              Igrave: "Ì",
              Iacute: "Í",
              Icirc: "Î",
              Iuml: "Ï",
              ETH: "Ð",
              Ntilde: "Ñ",
              Ograve: "Ò",
              Oacute: "Ó",
              Ocirc: "Ô",
              Otilde: "Õ",
              Ouml: "Ö",
              times: "×",
              Oslash: "Ø",
              Ugrave: "Ù",
              Uacute: "Ú",
              Ucirc: "Û",
              Uuml: "Ü",
              Yacute: "Ý",
              THORN: "Þ",
              szlig: "ß",
              agrave: "à",
              aacute: "á",
              acirc: "â",
              atilde: "ã",
              auml: "ä",
              aring: "å",
              aelig: "æ",
              ccedil: "ç",
              egrave: "è",
              eacute: "é",
              ecirc: "ê",
              euml: "ë",
              igrave: "ì",
              iacute: "í",
              icirc: "î",
              iuml: "ï",
              eth: "ð",
              ntilde: "ñ",
              ograve: "ò",
              oacute: "ó",
              ocirc: "ô",
              otilde: "õ",
              ouml: "ö",
              divide: "÷",
              oslash: "ø",
              ugrave: "ù",
              uacute: "ú",
              ucirc: "û",
              uuml: "ü",
              yacute: "ý",
              thorn: "þ",
              yuml: "ÿ",
              OElig: "Œ",
              oelig: "œ",
              Scaron: "Š",
              scaron: "š",
              Yuml: "Ÿ",
              fnof: "ƒ",
              circ: "ˆ",
              tilde: "˜",
              Alpha: "Α",
              Beta: "Β",
              Gamma: "Γ",
              Delta: "Δ",
              Epsilon: "Ε",
              Zeta: "Ζ",
              Eta: "Η",
              Theta: "Θ",
              Iota: "Ι",
              Kappa: "Κ",
              Lambda: "Λ",
              Mu: "Μ",
              Nu: "Ν",
              Xi: "Ξ",
              Omicron: "Ο",
              Pi: "Π",
              Rho: "Ρ",
              Sigma: "Σ",
              Tau: "Τ",
              Upsilon: "Υ",
              Phi: "Φ",
              Chi: "Χ",
              Psi: "Ψ",
              Omega: "Ω",
              alpha: "α",
              beta: "β",
              gamma: "γ",
              delta: "δ",
              epsilon: "ε",
              zeta: "ζ",
              eta: "η",
              theta: "θ",
              iota: "ι",
              kappa: "κ",
              lambda: "λ",
              mu: "μ",
              nu: "ν",
              xi: "ξ",
              omicron: "ο",
              pi: "π",
              rho: "ρ",
              sigmaf: "ς",
              sigma: "σ",
              tau: "τ",
              upsilon: "υ",
              phi: "φ",
              chi: "χ",
              psi: "ψ",
              omega: "ω",
              thetasym: "ϑ",
              upsih: "ϒ",
              piv: "ϖ",
              ensp: " ",
              emsp: " ",
              thinsp: " ",
              zwnj: "‌",
              zwj: "‍",
              lrm: "‎",
              rlm: "‏",
              ndash: "–",
              mdash: "—",
              lsquo: "‘",
              rsquo: "’",
              sbquo: "‚",
              ldquo: "“",
              rdquo: "”",
              bdquo: "„",
              dagger: "†",
              Dagger: "‡",
              bull: "•",
              hellip: "…",
              permil: "‰",
              prime: "′",
              Prime: "″",
              lsaquo: "‹",
              rsaquo: "›",
              oline: "‾",
              frasl: "⁄",
              euro: "€",
              image: "ℑ",
              weierp: "℘",
              real: "ℜ",
              trade: "™",
              alefsym: "ℵ",
              larr: "←",
              uarr: "↑",
              rarr: "→",
              darr: "↓",
              harr: "↔",
              crarr: "↵",
              lArr: "⇐",
              uArr: "⇑",
              rArr: "⇒",
              dArr: "⇓",
              hArr: "⇔",
              forall: "∀",
              part: "∂",
              exist: "∃",
              empty: "∅",
              nabla: "∇",
              isin: "∈",
              notin: "∉",
              ni: "∋",
              prod: "∏",
              sum: "∑",
              minus: "−",
              lowast: "∗",
              radic: "√",
              prop: "∝",
              infin: "∞",
              ang: "∠",
              and: "∧",
              or: "∨",
              cap: "∩",
              cup: "∪",
              int: "∫",
              there4: "∴",
              sim: "∼",
              cong: "≅",
              asymp: "≈",
              ne: "≠",
              equiv: "≡",
              le: "≤",
              ge: "≥",
              sub: "⊂",
              sup: "⊃",
              nsub: "⊄",
              sube: "⊆",
              supe: "⊇",
              oplus: "⊕",
              otimes: "⊗",
              perp: "⊥",
              sdot: "⋅",
              lceil: "⌈",
              rceil: "⌉",
              lfloor: "⌊",
              rfloor: "⌋",
              loz: "◊",
              spades: "♠",
              clubs: "♣",
              hearts: "♥",
              diams: "♦",
              lang: "⟨",
              rang: "⟩"
            };
          },
          function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: true });
            var i = r(10);
            var n = r(12);
            var a = r(13);
            var u = (function() {
              function Reader() {
                this.values = [];
                this.curly = this.paren = -1;
              }
              Reader.prototype.beforeFunctionExpression = function(e) {
                return (
                  [
                    "(",
                    "{",
                    "[",
                    "in",
                    "typeof",
                    "instanceof",
                    "new",
                    "return",
                    "case",
                    "delete",
                    "throw",
                    "void",
                    "=",
                    "+=",
                    "-=",
                    "*=",
                    "**=",
                    "/=",
                    "%=",
                    "<<=",
                    ">>=",
                    ">>>=",
                    "&=",
                    "|=",
                    "^=",
                    ",",
                    "+",
                    "-",
                    "*",
                    "**",
                    "/",
                    "%",
                    "++",
                    "--",
                    "<<",
                    ">>",
                    ">>>",
                    "&",
                    "|",
                    "^",
                    "!",
                    "~",
                    "&&",
                    "||",
                    "?",
                    ":",
                    "===",
                    "==",
                    ">=",
                    "<=",
                    "<",
                    ">",
                    "!=",
                    "!=="
                  ].indexOf(e) >= 0
                );
              };
              Reader.prototype.isRegexStart = function() {
                var e = this.values[this.values.length - 1];
                var t = e !== null;
                switch (e) {
                  case "this":
                  case "]":
                    t = false;
                    break;
                  case ")":
                    var r = this.values[this.paren - 1];
                    t =
                      r === "if" ||
                      r === "while" ||
                      r === "for" ||
                      r === "with";
                    break;
                  case "}":
                    t = false;
                    if (this.values[this.curly - 3] === "function") {
                      var i = this.values[this.curly - 4];
                      t = i ? !this.beforeFunctionExpression(i) : false;
                    } else if (this.values[this.curly - 4] === "function") {
                      var i = this.values[this.curly - 5];
                      t = i ? !this.beforeFunctionExpression(i) : true;
                    }
                    break;
                  default:
                    break;
                }
                return t;
              };
              Reader.prototype.push = function(e) {
                if (e.type === 7 || e.type === 4) {
                  if (e.value === "{") {
                    this.curly = this.values.length;
                  } else if (e.value === "(") {
                    this.paren = this.values.length;
                  }
                  this.values.push(e.value);
                } else {
                  this.values.push(null);
                }
              };
              return Reader;
            })();
            var s = (function() {
              function Tokenizer(e, t) {
                this.errorHandler = new i.ErrorHandler();
                this.errorHandler.tolerant = t
                  ? typeof t.tolerant === "boolean" && t.tolerant
                  : false;
                this.scanner = new n.Scanner(e, this.errorHandler);
                this.scanner.trackComment = t
                  ? typeof t.comment === "boolean" && t.comment
                  : false;
                this.trackRange = t
                  ? typeof t.range === "boolean" && t.range
                  : false;
                this.trackLoc = t ? typeof t.loc === "boolean" && t.loc : false;
                this.buffer = [];
                this.reader = new u();
              }
              Tokenizer.prototype.errors = function() {
                return this.errorHandler.errors;
              };
              Tokenizer.prototype.getNextToken = function() {
                if (this.buffer.length === 0) {
                  var e = this.scanner.scanComments();
                  if (this.scanner.trackComment) {
                    for (var t = 0; t < e.length; ++t) {
                      var r = e[t];
                      var i = this.scanner.source.slice(r.slice[0], r.slice[1]);
                      var n = {
                        type: r.multiLine ? "BlockComment" : "LineComment",
                        value: i
                      };
                      if (this.trackRange) {
                        n.range = r.range;
                      }
                      if (this.trackLoc) {
                        n.loc = r.loc;
                      }
                      this.buffer.push(n);
                    }
                  }
                  if (!this.scanner.eof()) {
                    var u = void 0;
                    if (this.trackLoc) {
                      u = {
                        start: {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart
                        },
                        end: {}
                      };
                    }
                    var s =
                      this.scanner.source[this.scanner.index] === "/" &&
                      this.reader.isRegexStart();
                    var o = s ? this.scanner.scanRegExp() : this.scanner.lex();
                    this.reader.push(o);
                    var l = {
                      type: a.TokenName[o.type],
                      value: this.scanner.source.slice(o.start, o.end)
                    };
                    if (this.trackRange) {
                      l.range = [o.start, o.end];
                    }
                    if (this.trackLoc) {
                      u.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      };
                      l.loc = u;
                    }
                    if (o.type === 9) {
                      var f = o.pattern;
                      var c = o.flags;
                      l.regex = { pattern: f, flags: c };
                    }
                    this.buffer.push(l);
                  }
                }
                return this.buffer.shift();
              };
              return Tokenizer;
            })();
            t.Tokenizer = s;
          }
        ]);
      });
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(941);
      var a = r(333);
      var u = r(340);
      e.exports = log;
      var s = "vfile-reporter";
      function log(e, t, r) {
        var o = t.reporter || a;
        var l;
        if (u(o)) {
          try {
            o = n(o, { cwd: t.cwd, prefix: s });
          } catch (e) {
            r(new Error("Could not find reporter `" + o + "`"));
            return;
          }
        }
        l = o(
          e.files.filter(given),
          i(t.reporterOptions, {
            quiet: t.quiet,
            silent: t.silent,
            color: t.color
          })
        );
        if (l) {
          if (l.charAt(l.length - 1) !== "\n") {
            l += "\n";
          }
          t.streamError.write(l, r);
        } else {
          r();
        }
      }
      function given(e) {
        return e.data.unifiedEngineGiven;
      }
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = sort;
      var t = { true: 2, false: 1, null: 0, undefined: 0 };
      function sort(e) {
        e.messages.sort(comparator);
        return e;
      }
      function comparator(e, r) {
        return (
          check(e, r, "line") ||
          check(e, r, "column") ||
          t[r.fatal] - t[e.fatal] ||
          compare(e, r, "source") ||
          compare(e, r, "ruleId") ||
          compare(e, r, "reason") ||
          0
        );
      }
      function check(e, t, r) {
        return (e[r] || 0) - (t[r] || 0);
      }
      function compare(e, t, r) {
        return (e[r] || "").localeCompare(t[r] || "");
      }
    },
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        var r = e.indexOf("\n", t);
        while (r > t) {
          if (e.charAt(r - 1) !== " ") {
            break;
          }
          r--;
        }
        return r;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:stringify");
      var n = r(928);
      var a = r(212);
      e.exports = stringify;
      function stringify(e, t) {
        var r = e.processor;
        var u = e.tree;
        var s;
        if (n(t).fatal) {
          i("Not compiling failed document");
          return;
        }
        if (!e.output && !e.out && !e.alwaysStringify) {
          i("Not compiling document without output settings");
          return;
        }
        i("Compiling `%s`", t.path);
        if (e.inspect) {
          if (t.path) {
            t.extname = ".txt";
          }
          s = a[e.color ? "color" : "noColor"](u) + "\n";
        } else if (e.treeOut) {
          if (t.path) {
            t.extname = ".json";
          }
          s = JSON.stringify(u, null, 2) + "\n";
        } else {
          s = r.stringify(u, t);
        }
        t.contents = s;
        i("Compiled document");
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      const i = r(624);
      e.exports = e => (typeof e === "string" ? e.replace(i(), "") : e);
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(260);
      function Mark(e, t, r, i, n) {
        this.name = e;
        this.buffer = t;
        this.position = r;
        this.line = i;
        this.column = n;
      }
      Mark.prototype.getSnippet = function getSnippet(e, t) {
        var r, n, a, u, s;
        if (!this.buffer) return null;
        e = e || 4;
        t = t || 75;
        r = "";
        n = this.position;
        while (
          n > 0 &&
          "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(n - 1)) === -1
        ) {
          n -= 1;
          if (this.position - n > t / 2 - 1) {
            r = " ... ";
            n += 5;
            break;
          }
        }
        a = "";
        u = this.position;
        while (
          u < this.buffer.length &&
          "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(u)) === -1
        ) {
          u += 1;
          if (u - this.position > t / 2 - 1) {
            a = " ... ";
            u -= 5;
            break;
          }
        }
        s = this.buffer.slice(n, u);
        return (
          i.repeat(" ", e) +
          r +
          s +
          a +
          "\n" +
          i.repeat(" ", e + this.position - n + r.length) +
          "^"
        );
      };
      Mark.prototype.toString = function toString(e) {
        var t,
          r = "";
        if (this.name) {
          r += 'in "' + this.name + '" ';
        }
        r += "at line " + (this.line + 1) + ", column " + (this.column + 1);
        if (!e) {
          t = this.getSnippet();
          if (t) {
            r += ":\n" + t;
          }
        }
        return r;
      };
      e.exports = Mark;
    },
    function(e, t, r) {
      var i = r(148);
      var n = function() {};
      var a = r(405);
      e.exports = wrapped;
      function wrapped(e) {
        function wrap() {
          var t = i(arguments);
          var r = t[t.length - 1];
          var u = this;
          var s = typeof r == "function" ? t.pop() : n;
          if (!e) {
            return s.apply(u, [null].concat(t));
          }
          if (generator(e)) {
            return a(e).apply(u, t.concat(s));
          }
          if (e.length > t.length) {
            try {
              return e.apply(u, t.concat(s));
            } catch (e) {
              return s(e);
            }
          }
          return sync(e, s).apply(u, t);
        }
        return wrap;
      }
      function sync(e, t) {
        return function() {
          var r;
          try {
            r = e.apply(this, arguments);
          } catch (e) {
            return t(e);
          }
          if (promise(r)) {
            r.then(function(e) {
              t(null, e);
            }, t);
          } else {
            r instanceof Error ? t(r) : t(null, r);
          }
        };
      }
      function generator(e) {
        return e && e.constructor && "GeneratorFunction" == e.constructor.name;
      }
      function promise(e) {
        return e && "function" == typeof e.then;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i("remark-lint:no-file-name-articles", noFileNameArticles);
      function noFileNameArticles(e, t) {
        var r = t.stem && t.stem.match(/^(the|teh|an?)\b/i);
        if (r) {
          t.message("Do not start file names with `" + r[0] + "`");
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      e.exports = newline;
      var n = "\n";
      function newline(e, t, r) {
        var a = t.charAt(0);
        var u;
        var s;
        var o;
        var l;
        if (a !== n) {
          return;
        }
        if (r) {
          return true;
        }
        l = 1;
        u = t.length;
        s = a;
        o = "";
        while (l < u) {
          a = t.charAt(l);
          if (!i(a)) {
            break;
          }
          o += a;
          if (a === n) {
            s += o;
            o = "";
          }
          l++;
        }
        e(s);
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(347)("unified-engine:file-pipeline:transform");
      var n = r(928);
      e.exports = transform;
      function transform(e, t, r, a) {
        if (n(t).fatal) {
          a();
        } else {
          i("Transforming document `%s`", t.path);
          e.processor.run(e.tree, t, onrun);
        }
        function onrun(t, r) {
          i("Transformed document (error: %s)", t);
          e.tree = r;
          a(t);
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(270);
      var u = r(526);
      e.exports = i("remark-lint:heading-style", headingStyle);
      var s = ["atx", "atx-closed", "setext"];
      function headingStyle(e, t, r) {
        r = s.indexOf(r) === -1 ? null : r;
        n(e, "heading", visitor);
        function visitor(e) {
          if (!u(e)) {
            if (r) {
              if (a(e, r) !== r) {
                t.message("Headings should use " + r, e);
              }
            } else {
              r = a(e, r);
            }
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "meta",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "pre",
        "section",
        "source",
        "title",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul"
      ];
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(995);
      e.exports = escape;
      escape.locator = i;
      var n = "\n";
      var a = "\\";
      function escape(e, t, r) {
        var i = this;
        var u;
        var s;
        if (t.charAt(0) === a) {
          u = t.charAt(1);
          if (i.escape.indexOf(u) !== -1) {
            if (r) {
              return true;
            }
            if (u === n) {
              s = { type: "break" };
            } else {
              s = { type: "text", value: u };
            }
            return e(a + u)(s);
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      e.exports = visit;
      var i = r(887);
      var n = i.CONTINUE;
      var a = i.SKIP;
      var u = i.EXIT;
      visit.CONTINUE = n;
      visit.SKIP = a;
      visit.EXIT = u;
      function visit(e, t, r, n) {
        if (typeof t === "function" && typeof r !== "function") {
          n = r;
          r = t;
          t = null;
        }
        i(e, t, overload, n);
        function overload(e, t) {
          var i = t[t.length - 1];
          var n = i ? i.children.indexOf(e) : null;
          return r(e, n, i);
        }
      }
    },
    function(e, t) {
      function isArray(e) {
        if (Array.isArray) {
          return Array.isArray(e);
        }
        return objectToString(e) === "[object Array]";
      }
      t.isArray = isArray;
      function isBoolean(e) {
        return typeof e === "boolean";
      }
      t.isBoolean = isBoolean;
      function isNull(e) {
        return e === null;
      }
      t.isNull = isNull;
      function isNullOrUndefined(e) {
        return e == null;
      }
      t.isNullOrUndefined = isNullOrUndefined;
      function isNumber(e) {
        return typeof e === "number";
      }
      t.isNumber = isNumber;
      function isString(e) {
        return typeof e === "string";
      }
      t.isString = isString;
      function isSymbol(e) {
        return typeof e === "symbol";
      }
      t.isSymbol = isSymbol;
      function isUndefined(e) {
        return e === void 0;
      }
      t.isUndefined = isUndefined;
      function isRegExp(e) {
        return objectToString(e) === "[object RegExp]";
      }
      t.isRegExp = isRegExp;
      function isObject(e) {
        return typeof e === "object" && e !== null;
      }
      t.isObject = isObject;
      function isDate(e) {
        return objectToString(e) === "[object Date]";
      }
      t.isDate = isDate;
      function isError(e) {
        return objectToString(e) === "[object Error]" || e instanceof Error;
      }
      t.isError = isError;
      function isFunction(e) {
        return typeof e === "function";
      }
      t.isFunction = isFunction;
      function isPrimitive(e) {
        return (
          e === null ||
          typeof e === "boolean" ||
          typeof e === "number" ||
          typeof e === "string" ||
          typeof e === "symbol" ||
          typeof e === "undefined"
        );
      }
      t.isPrimitive = isPrimitive;
      t.isBuffer = Buffer.isBuffer;
      function objectToString(e) {
        return Object.prototype.toString.call(e);
      }
    },
    function(e, t, r) {
      "use strict";
      const i = r(656);
      const n = r(606);
      e.exports = e => {
        if (typeof e !== "string" || e.length === 0) {
          return 0;
        }
        e = i(e);
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          const i = e.codePointAt(r);
          if (i <= 31 || (i >= 127 && i <= 159)) {
            continue;
          }
          if (i >= 768 && i <= 879) {
            continue;
          }
          if (i > 65535) {
            r++;
          }
          t += n(i) ? 2 : 1;
        }
        return t;
      };
    },
    ,
    ,
    ,
    function(e) {
      e.exports = require("stream");
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = function isObject(e) {
        return typeof e === "object" && e !== null;
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      e.exports = {
        position: true,
        gfm: true,
        commonmark: false,
        footnotes: false,
        pedantic: false,
        blocks: r(676)
      };
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      var n = Object.prototype.toString;
      function resolveYamlPairs(e) {
        if (e === null) return true;
        var t,
          r,
          i,
          a,
          u,
          s = e;
        u = new Array(s.length);
        for (t = 0, r = s.length; t < r; t += 1) {
          i = s[t];
          if (n.call(i) !== "[object Object]") return false;
          a = Object.keys(i);
          if (a.length !== 1) return false;
          u[t] = [a[0], i[a[0]]];
        }
        return true;
      }
      function constructYamlPairs(e) {
        if (e === null) return [];
        var t,
          r,
          i,
          n,
          a,
          u = e;
        a = new Array(u.length);
        for (t = 0, r = u.length; t < r; t += 1) {
          i = u[t];
          n = Object.keys(i);
          a[t] = [n[0], i[n[0]]];
        }
        return a;
      }
      e.exports = new i("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: resolveYamlPairs,
        construct: constructYamlPairs
      });
    },
    function(e) {
      "use strict";
      e.exports = text;
      function text(e, t, r) {
        var i = this;
        var n;
        var a;
        var u;
        var s;
        var o;
        var l;
        var f;
        var c;
        var h;
        var p;
        if (r) {
          return true;
        }
        n = i.inlineMethods;
        s = n.length;
        a = i.inlineTokenizers;
        u = -1;
        h = t.length;
        while (++u < s) {
          c = n[u];
          if (c === "text" || !a[c]) {
            continue;
          }
          f = a[c].locator;
          if (!f) {
            e.file.fail("Missing locator: `" + c + "`");
          }
          l = f.call(i, t, 1);
          if (l !== -1 && l < h) {
            h = l;
          }
        }
        o = t.slice(0, h);
        p = e.now();
        i.decode(o, p, handler);
        function handler(t, r, i) {
          e(i || t)({ type: "text", value: t });
        }
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(260);
      var n = r(211);
      var a = new RegExp(
        "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" +
          "|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" +
          "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" +
          "|[-+]?\\.(?:inf|Inf|INF)" +
          "|\\.(?:nan|NaN|NAN))$"
      );
      function resolveYamlFloat(e) {
        if (e === null) return false;
        if (!a.test(e) || e[e.length - 1] === "_") {
          return false;
        }
        return true;
      }
      function constructYamlFloat(e) {
        var t, r, i, n;
        t = e.replace(/_/g, "").toLowerCase();
        r = t[0] === "-" ? -1 : 1;
        n = [];
        if ("+-".indexOf(t[0]) >= 0) {
          t = t.slice(1);
        }
        if (t === ".inf") {
          return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
        } else if (t === ".nan") {
          return NaN;
        } else if (t.indexOf(":") >= 0) {
          t.split(":").forEach(function(e) {
            n.unshift(parseFloat(e, 10));
          });
          t = 0;
          i = 1;
          n.forEach(function(e) {
            t += e * i;
            i *= 60;
          });
          return r * t;
        }
        return r * parseFloat(t, 10);
      }
      var u = /^[-+]?[0-9]+e/;
      function representYamlFloat(e, t) {
        var r;
        if (isNaN(e)) {
          switch (t) {
            case "lowercase":
              return ".nan";
            case "uppercase":
              return ".NAN";
            case "camelcase":
              return ".NaN";
          }
        } else if (Number.POSITIVE_INFINITY === e) {
          switch (t) {
            case "lowercase":
              return ".inf";
            case "uppercase":
              return ".INF";
            case "camelcase":
              return ".Inf";
          }
        } else if (Number.NEGATIVE_INFINITY === e) {
          switch (t) {
            case "lowercase":
              return "-.inf";
            case "uppercase":
              return "-.INF";
            case "camelcase":
              return "-.Inf";
          }
        } else if (i.isNegativeZero(e)) {
          return "-0.0";
        }
        r = e.toString(10);
        return u.test(r) ? r.replace("e", ".e") : r;
      }
      function isFloat(e) {
        return (
          Object.prototype.toString.call(e) === "[object Number]" &&
          (e % 1 !== 0 || i.isNegativeZero(e))
        );
      }
      e.exports = new n("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: "lowercase"
      });
    },
    ,
    function(e, t, r) {
      "use strict";
      const i = r(947);
      e.exports = (e, t, r) => {
        if (typeof t === "number") {
          r = t;
        }
        if (i.has(e.toLowerCase())) {
          t = i.get(e.toLowerCase());
          const r = e.charAt(0);
          const n = r === r.toUpperCase();
          if (n) {
            t = r.toUpperCase() + t.slice(1);
          }
          const a = e === e.toUpperCase();
          if (a) {
            t = t.toUpperCase();
          }
        } else if (typeof t !== "string") {
          t = (
            e
              .replace(/(?:s|x|z|ch|sh)$/i, "$&e")
              .replace(/([^aeiou])y$/i, "$1ie") + "s"
          ).replace(/i?e?s$/i, t => {
            const r = e.slice(-1) === e.slice(-1).toLowerCase();
            return r ? t.toLowerCase() : t.toUpperCase();
          });
        }
        return Math.abs(r) === 1 ? e : t;
      };
    },
    function(e, t, r) {
      "use strict";
      var i = r(814);
      e.exports = pad;
      var n = "\n";
      var a = " ";
      var u = 4;
      function pad(e, t) {
        var r = e.split(n);
        var s = r.length;
        var o = i(a, t * u);
        while (s--) {
          if (r[s].length !== 0) {
            r[s] = o + r[s];
          }
        }
        return r.join(n);
      }
    },
    ,
    ,
    ,
    function(e) {
      e.exports = function(e, t) {
        return e.replace(/(\\*)(\$([_a-z0-9]+)|\${([_a-z0-9]+)})/gi, function(
          e,
          r,
          i,
          n,
          a
        ) {
          if (!(r.length % 2)) {
            return r.substring(Math.ceil(r.length / 2)) + (t[n || a] || "");
          } else {
            return r.substring(1) + i;
          }
        });
      };
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      var n = Object.prototype.hasOwnProperty;
      function resolveYamlSet(e) {
        if (e === null) return true;
        var t,
          r = e;
        for (t in r) {
          if (n.call(r, t)) {
            if (r[t] !== null) return false;
          }
        }
        return true;
      }
      function constructYamlSet(e) {
        return e !== null ? e : {};
      }
      e.exports = new i("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: resolveYamlSet,
        construct: constructYamlSet
      });
    },
    function(e) {
      if (typeof Object.create === "function") {
        e.exports = function inherits(e, t) {
          e.super_ = t;
          e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
      } else {
        e.exports = function inherits(e, t) {
          e.super_ = t;
          var r = function() {};
          r.prototype = t.prototype;
          e.prototype = new r();
          e.prototype.constructor = e;
        };
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      var t = Object.prototype.toString;
      var r =
        typeof Buffer.alloc === "function" &&
        typeof Buffer.allocUnsafe === "function" &&
        typeof Buffer.from === "function";
      function isArrayBuffer(e) {
        return t.call(e).slice(8, -1) === "ArrayBuffer";
      }
      function fromArrayBuffer(e, t, i) {
        t >>>= 0;
        var n = e.byteLength - t;
        if (n < 0) {
          throw new RangeError("'offset' is out of bounds");
        }
        if (i === undefined) {
          i = n;
        } else {
          i >>>= 0;
          if (i > n) {
            throw new RangeError("'length' is out of bounds");
          }
        }
        return r
          ? Buffer.from(e.slice(t, t + i))
          : new Buffer(new Uint8Array(e.slice(t, t + i)));
      }
      function fromString(e, t) {
        if (typeof t !== "string" || t === "") {
          t = "utf8";
        }
        if (!Buffer.isEncoding(t)) {
          throw new TypeError('"encoding" must be a valid string encoding');
        }
        return r ? Buffer.from(e, t) : new Buffer(e, t);
      }
      function bufferFrom(e, t, i) {
        if (typeof e === "number") {
          throw new TypeError('"value" argument must not be a number');
        }
        if (isArrayBuffer(e)) {
          return fromArrayBuffer(e, t, i);
        }
        if (typeof e === "string") {
          return fromString(e, t);
        }
        return r ? Buffer.from(e) : new Buffer(e);
      }
      e.exports = bufferFrom;
    },
    ,
    function(e) {
      e.exports = {
        AEli: "Æ",
        AElig: "Æ",
        AM: "&",
        AMP: "&",
        Aacut: "Á",
        Aacute: "Á",
        Abreve: "Ă",
        Acir: "Â",
        Acirc: "Â",
        Acy: "А",
        Afr: "𝔄",
        Agrav: "À",
        Agrave: "À",
        Alpha: "Α",
        Amacr: "Ā",
        And: "⩓",
        Aogon: "Ą",
        Aopf: "𝔸",
        ApplyFunction: "⁡",
        Arin: "Å",
        Aring: "Å",
        Ascr: "𝒜",
        Assign: "≔",
        Atild: "Ã",
        Atilde: "Ã",
        Aum: "Ä",
        Auml: "Ä",
        Backslash: "∖",
        Barv: "⫧",
        Barwed: "⌆",
        Bcy: "Б",
        Because: "∵",
        Bernoullis: "ℬ",
        Beta: "Β",
        Bfr: "𝔅",
        Bopf: "𝔹",
        Breve: "˘",
        Bscr: "ℬ",
        Bumpeq: "≎",
        CHcy: "Ч",
        COP: "©",
        COPY: "©",
        Cacute: "Ć",
        Cap: "⋒",
        CapitalDifferentialD: "ⅅ",
        Cayleys: "ℭ",
        Ccaron: "Č",
        Ccedi: "Ç",
        Ccedil: "Ç",
        Ccirc: "Ĉ",
        Cconint: "∰",
        Cdot: "Ċ",
        Cedilla: "¸",
        CenterDot: "·",
        Cfr: "ℭ",
        Chi: "Χ",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        Colon: "∷",
        Colone: "⩴",
        Congruent: "≡",
        Conint: "∯",
        ContourIntegral: "∮",
        Copf: "ℂ",
        Coproduct: "∐",
        CounterClockwiseContourIntegral: "∳",
        Cross: "⨯",
        Cscr: "𝒞",
        Cup: "⋓",
        CupCap: "≍",
        DD: "ⅅ",
        DDotrahd: "⤑",
        DJcy: "Ђ",
        DScy: "Ѕ",
        DZcy: "Џ",
        Dagger: "‡",
        Darr: "↡",
        Dashv: "⫤",
        Dcaron: "Ď",
        Dcy: "Д",
        Del: "∇",
        Delta: "Δ",
        Dfr: "𝔇",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        Dopf: "𝔻",
        Dot: "¨",
        DotDot: "⃜",
        DotEqual: "≐",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        Downarrow: "⇓",
        Dscr: "𝒟",
        Dstrok: "Đ",
        ENG: "Ŋ",
        ET: "Ð",
        ETH: "Ð",
        Eacut: "É",
        Eacute: "É",
        Ecaron: "Ě",
        Ecir: "Ê",
        Ecirc: "Ê",
        Ecy: "Э",
        Edot: "Ė",
        Efr: "𝔈",
        Egrav: "È",
        Egrave: "È",
        Element: "∈",
        Emacr: "Ē",
        EmptySmallSquare: "◻",
        EmptyVerySmallSquare: "▫",
        Eogon: "Ę",
        Eopf: "𝔼",
        Epsilon: "Ε",
        Equal: "⩵",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Escr: "ℰ",
        Esim: "⩳",
        Eta: "Η",
        Eum: "Ë",
        Euml: "Ë",
        Exists: "∃",
        ExponentialE: "ⅇ",
        Fcy: "Ф",
        Ffr: "𝔉",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        Fopf: "𝔽",
        ForAll: "∀",
        Fouriertrf: "ℱ",
        Fscr: "ℱ",
        GJcy: "Ѓ",
        G: ">",
        GT: ">",
        Gamma: "Γ",
        Gammad: "Ϝ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        Gcy: "Г",
        Gdot: "Ġ",
        Gfr: "𝔊",
        Gg: "⋙",
        Gopf: "𝔾",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        Gt: "≫",
        HARDcy: "Ъ",
        Hacek: "ˇ",
        Hat: "^",
        Hcirc: "Ĥ",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        Hopf: "ℍ",
        HorizontalLine: "─",
        Hscr: "ℋ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        IEcy: "Е",
        IJlig: "Ĳ",
        IOcy: "Ё",
        Iacut: "Í",
        Iacute: "Í",
        Icir: "Î",
        Icirc: "Î",
        Icy: "И",
        Idot: "İ",
        Ifr: "ℑ",
        Igrav: "Ì",
        Igrave: "Ì",
        Im: "ℑ",
        Imacr: "Ī",
        ImaginaryI: "ⅈ",
        Implies: "⇒",
        Int: "∬",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Iogon: "Į",
        Iopf: "𝕀",
        Iota: "Ι",
        Iscr: "ℐ",
        Itilde: "Ĩ",
        Iukcy: "І",
        Ium: "Ï",
        Iuml: "Ï",
        Jcirc: "Ĵ",
        Jcy: "Й",
        Jfr: "𝔍",
        Jopf: "𝕁",
        Jscr: "𝒥",
        Jsercy: "Ј",
        Jukcy: "Є",
        KHcy: "Х",
        KJcy: "Ќ",
        Kappa: "Κ",
        Kcedil: "Ķ",
        Kcy: "К",
        Kfr: "𝔎",
        Kopf: "𝕂",
        Kscr: "𝒦",
        LJcy: "Љ",
        L: "<",
        LT: "<",
        Lacute: "Ĺ",
        Lambda: "Λ",
        Lang: "⟪",
        Laplacetrf: "ℒ",
        Larr: "↞",
        Lcaron: "Ľ",
        Lcedil: "Ļ",
        Lcy: "Л",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessLess: "⪡",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Lfr: "𝔏",
        Ll: "⋘",
        Lleftarrow: "⇚",
        Lmidot: "Ŀ",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lopf: "𝕃",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        Lscr: "ℒ",
        Lsh: "↰",
        Lstrok: "Ł",
        Lt: "≪",
        Map: "⤅",
        Mcy: "М",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        MinusPlus: "∓",
        Mopf: "𝕄",
        Mscr: "ℳ",
        Mu: "Μ",
        NJcy: "Њ",
        Nacute: "Ń",
        Ncaron: "Ň",
        Ncedil: "Ņ",
        Ncy: "Н",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        Nfr: "𝔑",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        Nscr: "𝒩",
        Ntild: "Ñ",
        Ntilde: "Ñ",
        Nu: "Ν",
        OElig: "Œ",
        Oacut: "Ó",
        Oacute: "Ó",
        Ocir: "Ô",
        Ocirc: "Ô",
        Ocy: "О",
        Odblac: "Ő",
        Ofr: "𝔒",
        Ograv: "Ò",
        Ograve: "Ò",
        Omacr: "Ō",
        Omega: "Ω",
        Omicron: "Ο",
        Oopf: "𝕆",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        Or: "⩔",
        Oscr: "𝒪",
        Oslas: "Ø",
        Oslash: "Ø",
        Otild: "Õ",
        Otilde: "Õ",
        Otimes: "⨷",
        Oum: "Ö",
        Ouml: "Ö",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        PartialD: "∂",
        Pcy: "П",
        Pfr: "𝔓",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Poincareplane: "ℌ",
        Popf: "ℙ",
        Pr: "⪻",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Prime: "″",
        Product: "∏",
        Proportion: "∷",
        Proportional: "∝",
        Pscr: "𝒫",
        Psi: "Ψ",
        QUO: '"',
        QUOT: '"',
        Qfr: "𝔔",
        Qopf: "ℚ",
        Qscr: "𝒬",
        RBarr: "⤐",
        RE: "®",
        REG: "®",
        Racute: "Ŕ",
        Rang: "⟫",
        Rarr: "↠",
        Rarrtl: "⤖",
        Rcaron: "Ř",
        Rcedil: "Ŗ",
        Rcy: "Р",
        Re: "ℜ",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        Rfr: "ℜ",
        Rho: "Ρ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        Rightarrow: "⇒",
        Ropf: "ℝ",
        RoundImplies: "⥰",
        Rrightarrow: "⇛",
        Rscr: "ℛ",
        Rsh: "↱",
        RuleDelayed: "⧴",
        SHCHcy: "Щ",
        SHcy: "Ш",
        SOFTcy: "Ь",
        Sacute: "Ś",
        Sc: "⪼",
        Scaron: "Š",
        Scedil: "Ş",
        Scirc: "Ŝ",
        Scy: "С",
        Sfr: "𝔖",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sopf: "𝕊",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Sscr: "𝒮",
        Star: "⋆",
        Sub: "⋐",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Sup: "⋑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        THOR: "Þ",
        THORN: "Þ",
        TRADE: "™",
        TSHcy: "Ћ",
        TScy: "Ц",
        Tab: "\t",
        Tau: "Τ",
        Tcaron: "Ť",
        Tcedil: "Ţ",
        Tcy: "Т",
        Tfr: "𝔗",
        Therefore: "∴",
        Theta: "Θ",
        ThickSpace: "  ",
        ThinSpace: " ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        Topf: "𝕋",
        TripleDot: "⃛",
        Tscr: "𝒯",
        Tstrok: "Ŧ",
        Uacut: "Ú",
        Uacute: "Ú",
        Uarr: "↟",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        Ubreve: "Ŭ",
        Ucir: "Û",
        Ucirc: "Û",
        Ucy: "У",
        Udblac: "Ű",
        Ufr: "𝔘",
        Ugrav: "Ù",
        Ugrave: "Ù",
        Umacr: "Ū",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        Uopf: "𝕌",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        Upsilon: "Υ",
        Uring: "Ů",
        Uscr: "𝒰",
        Utilde: "Ũ",
        Uum: "Ü",
        Uuml: "Ü",
        VDash: "⊫",
        Vbar: "⫫",
        Vcy: "В",
        Vdash: "⊩",
        Vdashl: "⫦",
        Vee: "⋁",
        Verbar: "‖",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        Vopf: "𝕍",
        Vscr: "𝒱",
        Vvdash: "⊪",
        Wcirc: "Ŵ",
        Wedge: "⋀",
        Wfr: "𝔚",
        Wopf: "𝕎",
        Wscr: "𝒲",
        Xfr: "𝔛",
        Xi: "Ξ",
        Xopf: "𝕏",
        Xscr: "𝒳",
        YAcy: "Я",
        YIcy: "Ї",
        YUcy: "Ю",
        Yacut: "Ý",
        Yacute: "Ý",
        Ycirc: "Ŷ",
        Ycy: "Ы",
        Yfr: "𝔜",
        Yopf: "𝕐",
        Yscr: "𝒴",
        Yuml: "Ÿ",
        ZHcy: "Ж",
        Zacute: "Ź",
        Zcaron: "Ž",
        Zcy: "З",
        Zdot: "Ż",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        Zfr: "ℨ",
        Zopf: "ℤ",
        Zscr: "𝒵",
        aacut: "á",
        aacute: "á",
        abreve: "ă",
        ac: "∾",
        acE: "∾̳",
        acd: "∿",
        acir: "â",
        acirc: "â",
        acut: "´",
        acute: "´",
        acy: "а",
        aeli: "æ",
        aelig: "æ",
        af: "⁡",
        afr: "𝔞",
        agrav: "à",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        amacr: "ā",
        amalg: "⨿",
        am: "&",
        amp: "&",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        aopf: "𝕒",
        ap: "≈",
        apE: "⩰",
        apacir: "⩯",
        ape: "≊",
        apid: "≋",
        apos: "'",
        approx: "≈",
        approxeq: "≊",
        arin: "å",
        aring: "å",
        ascr: "𝒶",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atild: "ã",
        atilde: "ã",
        aum: "ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        bNot: "⫭",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        barvee: "⊽",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxDL: "╗",
        boxDR: "╔",
        boxDl: "╖",
        boxDr: "╓",
        boxH: "═",
        boxHD: "╦",
        boxHU: "╩",
        boxHd: "╤",
        boxHu: "╧",
        boxUL: "╝",
        boxUR: "╚",
        boxUl: "╜",
        boxUr: "╙",
        boxV: "║",
        boxVH: "╬",
        boxVL: "╣",
        boxVR: "╠",
        boxVh: "╫",
        boxVl: "╢",
        boxVr: "╟",
        boxbox: "⧉",
        boxdL: "╕",
        boxdR: "╒",
        boxdl: "┐",
        boxdr: "┌",
        boxh: "─",
        boxhD: "╥",
        boxhU: "╨",
        boxhd: "┬",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxuL: "╛",
        boxuR: "╘",
        boxul: "┘",
        boxur: "└",
        boxv: "│",
        boxvH: "╪",
        boxvL: "╡",
        boxvR: "╞",
        boxvh: "┼",
        boxvl: "┤",
        boxvr: "├",
        bprime: "‵",
        breve: "˘",
        brvba: "¦",
        brvbar: "¦",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        bumpeq: "≏",
        cacute: "ć",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        ccaps: "⩍",
        ccaron: "č",
        ccedi: "ç",
        ccedil: "ç",
        ccirc: "ĉ",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        cedi: "¸",
        cedil: "¸",
        cemptyv: "⦲",
        cen: "¢",
        cent: "¢",
        centerdot: "·",
        cfr: "𝔠",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        cir: "○",
        cirE: "⧃",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        conint: "∮",
        copf: "𝕔",
        coprod: "∐",
        cop: "©",
        copy: "©",
        copysr: "℗",
        crarr: "↵",
        cross: "✗",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        cupbrcap: "⩈",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curre: "¤",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dArr: "⇓",
        dHar: "⥥",
        dagger: "†",
        daleth: "ℸ",
        darr: "↓",
        dash: "‐",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        dcy: "д",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        ddotseq: "⩷",
        de: "°",
        deg: "°",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        dharl: "⇃",
        dharr: "⇂",
        diam: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divid: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        dot: "˙",
        doteq: "≐",
        doteqdot: "≑",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        downarrow: "↓",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        dscy: "ѕ",
        dsol: "⧶",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        dzigrarr: "⟿",
        eDDot: "⩷",
        eDot: "≑",
        eacut: "é",
        eacute: "é",
        easter: "⩮",
        ecaron: "ě",
        ecir: "ê",
        ecirc: "ê",
        ecolon: "≕",
        ecy: "э",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        eg: "⪚",
        egrav: "è",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        emptyv: "∅",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        eng: "ŋ",
        ensp: " ",
        eogon: "ę",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        equals: "=",
        equest: "≟",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erDot: "≓",
        erarr: "⥱",
        escr: "ℯ",
        esdot: "≐",
        esim: "≂",
        eta: "η",
        et: "ð",
        eth: "ð",
        eum: "ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        filig: "ﬁ",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        fpartint: "⨍",
        frac1: "¼",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac3: "¾",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        gE: "≧",
        gEl: "⪌",
        gacute: "ǵ",
        gamma: "γ",
        gammad: "ϝ",
        gap: "⪆",
        gbreve: "ğ",
        gcirc: "ĝ",
        gcy: "г",
        gdot: "ġ",
        ge: "≥",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        gl: "≷",
        glE: "⪒",
        gla: "⪥",
        glj: "⪤",
        gnE: "≩",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        grave: "`",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        g: ">",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        hArr: "⇔",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        hbar: "ℏ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        horbar: "―",
        hscr: "𝒽",
        hslash: "ℏ",
        hstrok: "ħ",
        hybull: "⁃",
        hyphen: "‐",
        iacut: "í",
        iacute: "í",
        ic: "⁣",
        icir: "î",
        icirc: "î",
        icy: "и",
        iecy: "е",
        iexc: "¡",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        igrav: "ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        imacr: "ī",
        image: "ℑ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        intercal: "⊺",
        intlarhk: "⨗",
        intprod: "⨼",
        iocy: "ё",
        iogon: "į",
        iopf: "𝕚",
        iota: "ι",
        iprod: "⨼",
        iques: "¿",
        iquest: "¿",
        iscr: "𝒾",
        isin: "∈",
        isinE: "⋹",
        isindot: "⋵",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        iukcy: "і",
        ium: "ï",
        iuml: "ï",
        jcirc: "ĵ",
        jcy: "й",
        jfr: "𝔧",
        jmath: "ȷ",
        jopf: "𝕛",
        jscr: "𝒿",
        jsercy: "ј",
        jukcy: "є",
        kappa: "κ",
        kappav: "ϰ",
        kcedil: "ķ",
        kcy: "к",
        kfr: "𝔨",
        kgreen: "ĸ",
        khcy: "х",
        kjcy: "ќ",
        kopf: "𝕜",
        kscr: "𝓀",
        lAarr: "⇚",
        lArr: "⇐",
        lAtail: "⤛",
        lBarr: "⤎",
        lE: "≦",
        lEg: "⪋",
        lHar: "⥢",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        laqu: "«",
        laquo: "«",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        leftarrow: "←",
        leftarrowtail: "↢",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        leftthreetimes: "⋋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        lessgtr: "≶",
        lesssim: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        l: "<",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltrPar: "⦖",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        mDDot: "∺",
        mac: "¯",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        mdash: "—",
        measuredangle: "∡",
        mfr: "𝔪",
        mho: "℧",
        micr: "µ",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middo: "·",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        mstpos: "∾",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nGg: "⋙̸",
        nGt: "≫⃒",
        nGtv: "≫̸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nLl: "⋘̸",
        nLt: "≪⃒",
        nLtv: "≪̸",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        nabla: "∇",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbs: " ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        neArr: "⇗",
        nearhk: "⤤",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        ngsim: "≵",
        ngt: "≯",
        ngtr: "≯",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        nlArr: "⇍",
        nlE: "≦̸",
        nlarr: "↚",
        nldr: "‥",
        nle: "≰",
        nleftarrow: "↚",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nlsim: "≴",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nmid: "∤",
        nopf: "𝕟",
        no: "¬",
        not: "¬",
        notin: "∉",
        notinE: "⋹̸",
        notindot: "⋵̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntild: "ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvDash: "⊭",
        nvHarr: "⤄",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwArr: "⇖",
        nwarhk: "⤣",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        oS: "Ⓢ",
        oacut: "ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "ô",
        ocirc: "ô",
        ocy: "о",
        odash: "⊝",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        ofcir: "⦿",
        ofr: "𝔬",
        ogon: "˛",
        ograv: "ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        omega: "ω",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        opar: "⦷",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        orarr: "↻",
        ord: "º",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oscr: "ℴ",
        oslas: "ø",
        oslash: "ø",
        osol: "⊘",
        otild: "õ",
        otilde: "õ",
        otimes: "⊗",
        otimesas: "⨶",
        oum: "ö",
        ouml: "ö",
        ovbar: "⌽",
        par: "¶",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        plusm: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        pointint: "⨕",
        popf: "𝕡",
        poun: "£",
        pound: "£",
        pr: "≺",
        prE: "⪳",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        primes: "ℙ",
        prnE: "⪵",
        prnap: "⪹",
        prnsim: "⋨",
        prod: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        psi: "ψ",
        puncsp: " ",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        qprime: "⁗",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quo: '"',
        quot: '"',
        rAarr: "⇛",
        rArr: "⇒",
        rAtail: "⤜",
        rBarr: "⤏",
        rHar: "⥤",
        race: "∽̱",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raqu: "»",
        raquo: "»",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        re: "®",
        reg: "®",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        rhov: "ϱ",
        rightarrow: "→",
        rightarrowtail: "↣",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        rightthreetimes: "⋌",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        rsaquo: "›",
        rscr: "𝓇",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        sbquo: "‚",
        sc: "≻",
        scE: "⪴",
        scap: "⪸",
        scaron: "š",
        sccue: "≽",
        sce: "⪰",
        scedil: "ş",
        scirc: "ŝ",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        seArr: "⇘",
        searhk: "⤥",
        searr: "↘",
        searrow: "↘",
        sec: "§",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        shcy: "ш",
        shortmid: "∣",
        shortparallel: "∥",
        sh: "­",
        shy: "­",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        subE: "⫅",
        subdot: "⪽",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        sum: "∑",
        sung: "♪",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supE: "⫆",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supedot: "⫄",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swArr: "⇙",
        swarhk: "⤦",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szli: "ß",
        szlig: "ß",
        target: "⌖",
        tau: "τ",
        tbrk: "⎴",
        tcaron: "ť",
        tcedil: "ţ",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        thor: "þ",
        thorn: "þ",
        tilde: "˜",
        time: "×",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        tscy: "ц",
        tshcy: "ћ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uArr: "⇑",
        uHar: "⥣",
        uacut: "ú",
        uacute: "ú",
        uarr: "↑",
        ubrcy: "ў",
        ubreve: "ŭ",
        ucir: "û",
        ucirc: "û",
        ucy: "у",
        udarr: "⇅",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        ugrav: "ù",
        ugrave: "ù",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        um: "¨",
        uml: "¨",
        uogon: "ų",
        uopf: "𝕦",
        uparrow: "↑",
        updownarrow: "↕",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        upsi: "υ",
        upsih: "ϒ",
        upsilon: "υ",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        urtri: "◹",
        uscr: "𝓊",
        utdot: "⋰",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uum: "ü",
        uuml: "ü",
        uwangle: "⦧",
        vArr: "⇕",
        vBar: "⫨",
        vBarv: "⫩",
        vDash: "⊨",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vcy: "в",
        vdash: "⊢",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        vert: "|",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        vzigzag: "⦚",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacut: "ý",
        yacute: "ý",
        yacy: "я",
        ycirc: "ŷ",
        ycy: "ы",
        ye: "¥",
        yen: "¥",
        yfr: "𝔶",
        yicy: "ї",
        yopf: "𝕪",
        yscr: "𝓎",
        yucy: "ю",
        yum: "ÿ",
        yuml: "ÿ",
        zacute: "ź",
        zcaron: "ž",
        zcy: "з",
        zdot: "ż",
        zeetrf: "ℨ",
        zeta: "ζ",
        zfr: "𝔷",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
      };
    },
    function(e, t, r) {
      const i = r(287);
      const n = r(809);
      const a = { parse: i, stringify: n };
      e.exports = a;
    },
    ,
    function(e) {
      "use strict";
      e.exports = interrupt;
      function interrupt(e, t, r, i) {
        var n = e.length;
        var a = -1;
        var u;
        var s;
        while (++a < n) {
          u = e[a];
          s = u[1] || {};
          if (s.pedantic !== undefined && s.pedantic !== r.options.pedantic) {
            continue;
          }
          if (
            s.commonmark !== undefined &&
            s.commonmark !== r.options.commonmark
          ) {
            continue;
          }
          if (t[u[0]].apply(r, i)) {
            return true;
          }
        }
        return false;
      }
    },
    function(e) {
      e.exports = {
        addendum: "addenda",
        aircraft: "aircraft",
        alga: "algae",
        alumna: "alumnae",
        alumnus: "alumni",
        amoeba: "amoebae",
        analysis: "analyses",
        antenna: "antennae",
        antithesis: "antitheses",
        apex: "apices",
        appendix: "appendices",
        automaton: "automata",
        axis: "axes",
        bacillus: "bacilli",
        bacterium: "bacteria",
        barracks: "barracks",
        basis: "bases",
        beau: "beaux",
        bison: "bison",
        buffalo: "buffalo",
        bureau: "bureaus",
        cactus: "cacti",
        calf: "calves",
        carp: "carp",
        census: "censuses",
        chassis: "chassis",
        cherub: "cherubim",
        child: "children",
        château: "châteaus",
        cod: "cod",
        codex: "codices",
        concerto: "concerti",
        corpus: "corpora",
        crisis: "crises",
        criterion: "criteria",
        curriculum: "curricula",
        datum: "data",
        deer: "deer",
        diagnosis: "diagnoses",
        die: "dice",
        dwarf: "dwarfs",
        echo: "echoes",
        elf: "elves",
        elk: "elk",
        ellipsis: "ellipses",
        embargo: "embargoes",
        emphasis: "emphases",
        erratum: "errata",
        "faux pas": "faux pas",
        fez: "fezes",
        firmware: "firmware",
        fish: "fish",
        focus: "foci",
        foot: "feet",
        formula: "formulae",
        fungus: "fungi",
        gallows: "gallows",
        genus: "genera",
        goose: "geese",
        graffito: "graffiti",
        grouse: "grouse",
        half: "halves",
        hero: "heroes",
        hoof: "hooves",
        hovercraft: "hovercraft",
        hypothesis: "hypotheses",
        index: "indices",
        kakapo: "kakapo",
        knife: "knives",
        larva: "larvae",
        leaf: "leaves",
        libretto: "libretti",
        life: "lives",
        loaf: "loaves",
        locus: "loci",
        louse: "lice",
        man: "men",
        matrix: "matrices",
        means: "means",
        medium: "media",
        memorandum: "memoranda",
        millennium: "millennia",
        minutia: "minutiae",
        moose: "moose",
        mouse: "mice",
        nebula: "nebulae",
        nemesis: "nemeses",
        neurosis: "neuroses",
        news: "news",
        nucleus: "nuclei",
        oasis: "oases",
        offspring: "offspring",
        opus: "opera",
        ovum: "ova",
        ox: "oxen",
        paralysis: "paralyses",
        parenthesis: "parentheses",
        person: "people",
        phenomenon: "phenomena",
        phylum: "phyla",
        pike: "pike",
        polyhedron: "polyhedra",
        potato: "potatoes",
        prognosis: "prognoses",
        quiz: "quizzes",
        radius: "radii",
        referendum: "referenda",
        salmon: "salmon",
        scarf: "scarves",
        self: "selves",
        series: "series",
        sheep: "sheep",
        shelf: "shelves",
        shrimp: "shrimp",
        spacecraft: "spacecraft",
        species: "species",
        spectrum: "spectra",
        squid: "squid",
        stimulus: "stimuli",
        stratum: "strata",
        swine: "swine",
        syllabus: "syllabi",
        symposium: "symposia",
        synopsis: "synopses",
        synthesis: "syntheses",
        tableau: "tableaus",
        that: "those",
        thesis: "theses",
        thief: "thieves",
        this: "these",
        tomato: "tomatoes",
        tooth: "teeth",
        trout: "trout",
        tuna: "tuna",
        vertebra: "vertebrae",
        vertex: "vertices",
        veto: "vetoes",
        vita: "vitae",
        vortex: "vortices",
        watercraft: "watercraft",
        wharf: "wharves",
        wife: "wives",
        wolf: "wolves",
        woman: "women"
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(260);
      var n = r(833);
      var a = r(211);
      function compileList(e, t, r) {
        var i = [];
        e.include.forEach(function(e) {
          r = compileList(e, t, r);
        });
        e[t].forEach(function(e) {
          r.forEach(function(t, r) {
            if (t.tag === e.tag && t.kind === e.kind) {
              i.push(r);
            }
          });
          r.push(e);
        });
        return r.filter(function(e, t) {
          return i.indexOf(t) === -1;
        });
      }
      function compileMap() {
        var e = { scalar: {}, sequence: {}, mapping: {}, fallback: {} },
          t,
          r;
        function collectType(t) {
          e[t.kind][t.tag] = e["fallback"][t.tag] = t;
        }
        for (t = 0, r = arguments.length; t < r; t += 1) {
          arguments[t].forEach(collectType);
        }
        return e;
      }
      function Schema(e) {
        this.include = e.include || [];
        this.implicit = e.implicit || [];
        this.explicit = e.explicit || [];
        this.implicit.forEach(function(e) {
          if (e.loadKind && e.loadKind !== "scalar") {
            throw new n(
              "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
            );
          }
        });
        this.compiledImplicit = compileList(this, "implicit", []);
        this.compiledExplicit = compileList(this, "explicit", []);
        this.compiledTypeMap = compileMap(
          this.compiledImplicit,
          this.compiledExplicit
        );
      }
      Schema.DEFAULT = null;
      Schema.create = function createSchema() {
        var e, t;
        switch (arguments.length) {
          case 1:
            e = Schema.DEFAULT;
            t = arguments[0];
            break;
          case 2:
            e = arguments[0];
            t = arguments[1];
            break;
          default:
            throw new n("Wrong number of arguments for Schema.create function");
        }
        e = i.toArray(e);
        t = i.toArray(t);
        if (
          !e.every(function(e) {
            return e instanceof Schema;
          })
        ) {
          throw new n(
            "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
          );
        }
        if (
          !t.every(function(e) {
            return e instanceof a;
          })
        ) {
          throw new n(
            "Specified list of YAML types (or a single Type object) contains a non-Type object."
          );
        }
        return new Schema({ include: e, explicit: t });
      };
      e.exports = Schema;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(814);
      var n = r(934);
      e.exports = indentedCode;
      var a = "\n";
      var u = "\t";
      var s = " ";
      var o = 4;
      var l = i(s, o);
      function indentedCode(e, t, r) {
        var i = -1;
        var o = t.length;
        var f = "";
        var c = "";
        var h = "";
        var p = "";
        var v;
        var d;
        var D;
        while (++i < o) {
          v = t.charAt(i);
          if (D) {
            D = false;
            f += h;
            c += p;
            h = "";
            p = "";
            if (v === a) {
              h = v;
              p = v;
            } else {
              f += v;
              c += v;
              while (++i < o) {
                v = t.charAt(i);
                if (!v || v === a) {
                  p = v;
                  h = v;
                  break;
                }
                f += v;
                c += v;
              }
            }
          } else if (
            v === s &&
            t.charAt(i + 1) === v &&
            t.charAt(i + 2) === v &&
            t.charAt(i + 3) === v
          ) {
            h += l;
            i += 3;
            D = true;
          } else if (v === u) {
            h += v;
            D = true;
          } else {
            d = "";
            while (v === u || v === s) {
              d += v;
              v = t.charAt(++i);
            }
            if (v !== a) {
              break;
            }
            h += d + v;
            p += v;
          }
        }
        if (c) {
          if (r) {
            return true;
          }
          return e(f)({ type: "code", lang: null, meta: null, value: n(c) });
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(814);
      e.exports = strong;
      function strong(e) {
        var t = i(this.options.strong, 2);
        return t + this.all(e).join("") + t;
      }
    },
    function(e, t) {
      var i = void 0;
      var n = 1e5;
      var a = (function() {
        var e = Object.prototype.toString,
          t = Object.prototype.hasOwnProperty;
        return {
          Class: function(t) {
            return e.call(t).replace(/^\[object *|\]$/g, "");
          },
          HasProperty: function(e, t) {
            return t in e;
          },
          HasOwnProperty: function(e, r) {
            return t.call(e, r);
          },
          IsCallable: function(e) {
            return typeof e === "function";
          },
          ToInt32: function(e) {
            return e >> 0;
          },
          ToUint32: function(e) {
            return e >>> 0;
          }
        };
      })();
      var u = Math.LN2,
        s = Math.abs,
        o = Math.floor,
        l = Math.log,
        f = Math.min,
        c = Math.pow,
        h = Math.round;
      function configureProperties(e) {
        if (v && p) {
          var t = v(e),
            r;
          for (r = 0; r < t.length; r += 1) {
            p(e, t[r], {
              value: e[t[r]],
              writable: false,
              enumerable: false,
              configurable: false
            });
          }
        }
      }
      var p;
      if (
        Object.defineProperty &&
        (function() {
          try {
            Object.defineProperty({}, "x", {});
            return true;
          } catch (e) {
            return false;
          }
        })()
      ) {
        p = Object.defineProperty;
      } else {
        p = function(e, t, r) {
          if (!e === Object(e))
            throw new TypeError("Object.defineProperty called on non-object");
          if (a.HasProperty(r, "get") && Object.prototype.__defineGetter__) {
            Object.prototype.__defineGetter__.call(e, t, r.get);
          }
          if (a.HasProperty(r, "set") && Object.prototype.__defineSetter__) {
            Object.prototype.__defineSetter__.call(e, t, r.set);
          }
          if (a.HasProperty(r, "value")) {
            e[t] = r.value;
          }
          return e;
        };
      }
      var v =
        Object.getOwnPropertyNames ||
        function(e) {
          if (e !== Object(e))
            throw new TypeError(
              "Object.getOwnPropertyNames called on non-object"
            );
          var t = [],
            r;
          for (r in e) {
            if (a.HasOwnProperty(e, r)) {
              t.push(r);
            }
          }
          return t;
        };
      function makeArrayAccessors(e) {
        if (!p) {
          return;
        }
        if (e.length > n) throw new RangeError("Array too large for polyfill");
        function makeArrayAccessor(t) {
          p(e, t, {
            get: function() {
              return e._getter(t);
            },
            set: function(r) {
              e._setter(t, r);
            },
            enumerable: true,
            configurable: false
          });
        }
        var t;
        for (t = 0; t < e.length; t += 1) {
          makeArrayAccessor(t);
        }
      }
      function as_signed(e, t) {
        var r = 32 - t;
        return (e << r) >> r;
      }
      function as_unsigned(e, t) {
        var r = 32 - t;
        return (e << r) >>> r;
      }
      function packI8(e) {
        return [e & 255];
      }
      function unpackI8(e) {
        return as_signed(e[0], 8);
      }
      function packU8(e) {
        return [e & 255];
      }
      function unpackU8(e) {
        return as_unsigned(e[0], 8);
      }
      function packU8Clamped(e) {
        e = h(Number(e));
        return [e < 0 ? 0 : e > 255 ? 255 : e & 255];
      }
      function packI16(e) {
        return [(e >> 8) & 255, e & 255];
      }
      function unpackI16(e) {
        return as_signed((e[0] << 8) | e[1], 16);
      }
      function packU16(e) {
        return [(e >> 8) & 255, e & 255];
      }
      function unpackU16(e) {
        return as_unsigned((e[0] << 8) | e[1], 16);
      }
      function packI32(e) {
        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
      }
      function unpackI32(e) {
        return as_signed((e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3], 32);
      }
      function packU32(e) {
        return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
      }
      function unpackU32(e) {
        return as_unsigned(
          (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
          32
        );
      }
      function packIEEE754(e, t, r) {
        var i = (1 << (t - 1)) - 1,
          n,
          a,
          h,
          p,
          v,
          d,
          D,
          m;
        function roundToEven(e) {
          var t = o(e),
            r = e - t;
          if (r < 0.5) return t;
          if (r > 0.5) return t + 1;
          return t % 2 ? t + 1 : t;
        }
        if (e !== e) {
          a = (1 << t) - 1;
          h = c(2, r - 1);
          n = 0;
        } else if (e === Infinity || e === -Infinity) {
          a = (1 << t) - 1;
          h = 0;
          n = e < 0 ? 1 : 0;
        } else if (e === 0) {
          a = 0;
          h = 0;
          n = 1 / e === -Infinity ? 1 : 0;
        } else {
          n = e < 0;
          e = s(e);
          if (e >= c(2, 1 - i)) {
            a = f(o(l(e) / u), 1023);
            h = roundToEven((e / c(2, a)) * c(2, r));
            if (h / c(2, r) >= 2) {
              a = a + 1;
              h = 1;
            }
            if (a > i) {
              a = (1 << t) - 1;
              h = 0;
            } else {
              a = a + i;
              h = h - c(2, r);
            }
          } else {
            a = 0;
            h = roundToEven(e / c(2, 1 - i - r));
          }
        }
        d = [];
        for (v = r; v; v -= 1) {
          d.push(h % 2 ? 1 : 0);
          h = o(h / 2);
        }
        for (v = t; v; v -= 1) {
          d.push(a % 2 ? 1 : 0);
          a = o(a / 2);
        }
        d.push(n ? 1 : 0);
        d.reverse();
        D = d.join("");
        m = [];
        while (D.length) {
          m.push(parseInt(D.substring(0, 8), 2));
          D = D.substring(8);
        }
        return m;
      }
      function unpackIEEE754(e, t, r) {
        var i = [],
          n,
          a,
          u,
          s,
          o,
          l,
          f,
          h;
        for (n = e.length; n; n -= 1) {
          u = e[n - 1];
          for (a = 8; a; a -= 1) {
            i.push(u % 2 ? 1 : 0);
            u = u >> 1;
          }
        }
        i.reverse();
        s = i.join("");
        o = (1 << (t - 1)) - 1;
        l = parseInt(s.substring(0, 1), 2) ? -1 : 1;
        f = parseInt(s.substring(1, 1 + t), 2);
        h = parseInt(s.substring(1 + t), 2);
        if (f === (1 << t) - 1) {
          return h !== 0 ? NaN : l * Infinity;
        } else if (f > 0) {
          return l * c(2, f - o) * (1 + h / c(2, r));
        } else if (h !== 0) {
          return l * c(2, -(o - 1)) * (h / c(2, r));
        } else {
          return l < 0 ? -0 : 0;
        }
      }
      function unpackF64(e) {
        return unpackIEEE754(e, 11, 52);
      }
      function packF64(e) {
        return packIEEE754(e, 11, 52);
      }
      function unpackF32(e) {
        return unpackIEEE754(e, 8, 23);
      }
      function packF32(e) {
        return packIEEE754(e, 8, 23);
      }
      (function() {
        var e = function ArrayBuffer(e) {
          e = a.ToInt32(e);
          if (e < 0)
            throw new RangeError(
              "ArrayBuffer size is not a small enough positive integer"
            );
          this.byteLength = e;
          this._bytes = [];
          this._bytes.length = e;
          var t;
          for (t = 0; t < this.byteLength; t += 1) {
            this._bytes[t] = 0;
          }
          configureProperties(this);
        };
        t.ArrayBuffer = t.ArrayBuffer || e;
        var r = function ArrayBufferView() {};
        function makeConstructor(t, n, u) {
          var s;
          s = function(t, r, i) {
            var n, u, o, l;
            if (!arguments.length || typeof arguments[0] === "number") {
              this.length = a.ToInt32(arguments[0]);
              if (i < 0)
                throw new RangeError(
                  "ArrayBufferView size is not a small enough positive integer"
                );
              this.byteLength = this.length * this.BYTES_PER_ELEMENT;
              this.buffer = new e(this.byteLength);
              this.byteOffset = 0;
            } else if (
              typeof arguments[0] === "object" &&
              arguments[0].constructor === s
            ) {
              n = arguments[0];
              this.length = n.length;
              this.byteLength = this.length * this.BYTES_PER_ELEMENT;
              this.buffer = new e(this.byteLength);
              this.byteOffset = 0;
              for (o = 0; o < this.length; o += 1) {
                this._setter(o, n._getter(o));
              }
            } else if (
              typeof arguments[0] === "object" &&
              !(
                arguments[0] instanceof e ||
                a.Class(arguments[0]) === "ArrayBuffer"
              )
            ) {
              u = arguments[0];
              this.length = a.ToUint32(u.length);
              this.byteLength = this.length * this.BYTES_PER_ELEMENT;
              this.buffer = new e(this.byteLength);
              this.byteOffset = 0;
              for (o = 0; o < this.length; o += 1) {
                l = u[o];
                this._setter(o, Number(l));
              }
            } else if (
              typeof arguments[0] === "object" &&
              (arguments[0] instanceof e ||
                a.Class(arguments[0]) === "ArrayBuffer")
            ) {
              this.buffer = t;
              this.byteOffset = a.ToUint32(r);
              if (this.byteOffset > this.buffer.byteLength) {
                throw new RangeError("byteOffset out of range");
              }
              if (this.byteOffset % this.BYTES_PER_ELEMENT) {
                throw new RangeError(
                  "ArrayBuffer length minus the byteOffset is not a multiple of the element size."
                );
              }
              if (arguments.length < 3) {
                this.byteLength = this.buffer.byteLength - this.byteOffset;
                if (this.byteLength % this.BYTES_PER_ELEMENT) {
                  throw new RangeError(
                    "length of buffer minus byteOffset not a multiple of the element size"
                  );
                }
                this.length = this.byteLength / this.BYTES_PER_ELEMENT;
              } else {
                this.length = a.ToUint32(i);
                this.byteLength = this.length * this.BYTES_PER_ELEMENT;
              }
              if (this.byteOffset + this.byteLength > this.buffer.byteLength) {
                throw new RangeError(
                  "byteOffset and length reference an area beyond the end of the buffer"
                );
              }
            } else {
              throw new TypeError("Unexpected argument type(s)");
            }
            this.constructor = s;
            configureProperties(this);
            makeArrayAccessors(this);
          };
          s.prototype = new r();
          s.prototype.BYTES_PER_ELEMENT = t;
          s.prototype._pack = n;
          s.prototype._unpack = u;
          s.BYTES_PER_ELEMENT = t;
          s.prototype._getter = function(e) {
            if (arguments.length < 1)
              throw new SyntaxError("Not enough arguments");
            e = a.ToUint32(e);
            if (e >= this.length) {
              return i;
            }
            var t = [],
              r,
              n;
            for (
              r = 0, n = this.byteOffset + e * this.BYTES_PER_ELEMENT;
              r < this.BYTES_PER_ELEMENT;
              r += 1, n += 1
            ) {
              t.push(this.buffer._bytes[n]);
            }
            return this._unpack(t);
          };
          s.prototype.get = s.prototype._getter;
          s.prototype._setter = function(e, t) {
            if (arguments.length < 2)
              throw new SyntaxError("Not enough arguments");
            e = a.ToUint32(e);
            if (e >= this.length) {
              return i;
            }
            var r = this._pack(t),
              n,
              u;
            for (
              n = 0, u = this.byteOffset + e * this.BYTES_PER_ELEMENT;
              n < this.BYTES_PER_ELEMENT;
              n += 1, u += 1
            ) {
              this.buffer._bytes[u] = r[n];
            }
          };
          s.prototype.set = function(e, t) {
            if (arguments.length < 1)
              throw new SyntaxError("Not enough arguments");
            var r, i, n, u, s, o, l, f, c, h;
            if (
              typeof arguments[0] === "object" &&
              arguments[0].constructor === this.constructor
            ) {
              r = arguments[0];
              n = a.ToUint32(arguments[1]);
              if (n + r.length > this.length) {
                throw new RangeError(
                  "Offset plus length of array is out of range"
                );
              }
              f = this.byteOffset + n * this.BYTES_PER_ELEMENT;
              c = r.length * this.BYTES_PER_ELEMENT;
              if (r.buffer === this.buffer) {
                h = [];
                for (s = 0, o = r.byteOffset; s < c; s += 1, o += 1) {
                  h[s] = r.buffer._bytes[o];
                }
                for (s = 0, l = f; s < c; s += 1, l += 1) {
                  this.buffer._bytes[l] = h[s];
                }
              } else {
                for (
                  s = 0, o = r.byteOffset, l = f;
                  s < c;
                  s += 1, o += 1, l += 1
                ) {
                  this.buffer._bytes[l] = r.buffer._bytes[o];
                }
              }
            } else if (
              typeof arguments[0] === "object" &&
              typeof arguments[0].length !== "undefined"
            ) {
              i = arguments[0];
              u = a.ToUint32(i.length);
              n = a.ToUint32(arguments[1]);
              if (n + u > this.length) {
                throw new RangeError(
                  "Offset plus length of array is out of range"
                );
              }
              for (s = 0; s < u; s += 1) {
                o = i[s];
                this._setter(n + s, Number(o));
              }
            } else {
              throw new TypeError("Unexpected argument type(s)");
            }
          };
          s.prototype.subarray = function(e, t) {
            function clamp(e, t, r) {
              return e < t ? t : e > r ? r : e;
            }
            e = a.ToInt32(e);
            t = a.ToInt32(t);
            if (arguments.length < 1) {
              e = 0;
            }
            if (arguments.length < 2) {
              t = this.length;
            }
            if (e < 0) {
              e = this.length + e;
            }
            if (t < 0) {
              t = this.length + t;
            }
            e = clamp(e, 0, this.length);
            t = clamp(t, 0, this.length);
            var r = t - e;
            if (r < 0) {
              r = 0;
            }
            return new this.constructor(
              this.buffer,
              this.byteOffset + e * this.BYTES_PER_ELEMENT,
              r
            );
          };
          return s;
        }
        var n = makeConstructor(1, packI8, unpackI8);
        var u = makeConstructor(1, packU8, unpackU8);
        var s = makeConstructor(1, packU8Clamped, unpackU8);
        var o = makeConstructor(2, packI16, unpackI16);
        var l = makeConstructor(2, packU16, unpackU16);
        var f = makeConstructor(4, packI32, unpackI32);
        var c = makeConstructor(4, packU32, unpackU32);
        var h = makeConstructor(4, packF32, unpackF32);
        var p = makeConstructor(8, packF64, unpackF64);
        t.Int8Array = t.Int8Array || n;
        t.Uint8Array = t.Uint8Array || u;
        t.Uint8ClampedArray = t.Uint8ClampedArray || s;
        t.Int16Array = t.Int16Array || o;
        t.Uint16Array = t.Uint16Array || l;
        t.Int32Array = t.Int32Array || f;
        t.Uint32Array = t.Uint32Array || c;
        t.Float32Array = t.Float32Array || h;
        t.Float64Array = t.Float64Array || p;
      })();
      (function() {
        function r(e, t) {
          return a.IsCallable(e.get) ? e.get(t) : e[t];
        }
        var e = (function() {
          var e = new t.Uint16Array([4660]),
            i = new t.Uint8Array(e.buffer);
          return r(i, 0) === 18;
        })();
        var i = function DataView(e, r, i) {
          if (arguments.length === 0) {
            e = new t.ArrayBuffer(0);
          } else if (
            !(e instanceof t.ArrayBuffer || a.Class(e) === "ArrayBuffer")
          ) {
            throw new TypeError("TypeError");
          }
          this.buffer = e || new t.ArrayBuffer(0);
          this.byteOffset = a.ToUint32(r);
          if (this.byteOffset > this.buffer.byteLength) {
            throw new RangeError("byteOffset out of range");
          }
          if (arguments.length < 3) {
            this.byteLength = this.buffer.byteLength - this.byteOffset;
          } else {
            this.byteLength = a.ToUint32(i);
          }
          if (this.byteOffset + this.byteLength > this.buffer.byteLength) {
            throw new RangeError(
              "byteOffset and length reference an area beyond the end of the buffer"
            );
          }
          configureProperties(this);
        };
        function makeGetter(i) {
          return function(n, u) {
            n = a.ToUint32(n);
            if (n + i.BYTES_PER_ELEMENT > this.byteLength) {
              throw new RangeError("Array index out of range");
            }
            n += this.byteOffset;
            var s = new t.Uint8Array(this.buffer, n, i.BYTES_PER_ELEMENT),
              o = [],
              l;
            for (l = 0; l < i.BYTES_PER_ELEMENT; l += 1) {
              o.push(r(s, l));
            }
            if (Boolean(u) === Boolean(e)) {
              o.reverse();
            }
            return r(new i(new t.Uint8Array(o).buffer), 0);
          };
        }
        i.prototype.getUint8 = makeGetter(t.Uint8Array);
        i.prototype.getInt8 = makeGetter(t.Int8Array);
        i.prototype.getUint16 = makeGetter(t.Uint16Array);
        i.prototype.getInt16 = makeGetter(t.Int16Array);
        i.prototype.getUint32 = makeGetter(t.Uint32Array);
        i.prototype.getInt32 = makeGetter(t.Int32Array);
        i.prototype.getFloat32 = makeGetter(t.Float32Array);
        i.prototype.getFloat64 = makeGetter(t.Float64Array);
        function makeSetter(i) {
          return function(n, u, s) {
            n = a.ToUint32(n);
            if (n + i.BYTES_PER_ELEMENT > this.byteLength) {
              throw new RangeError("Array index out of range");
            }
            var o = new i([u]),
              l = new t.Uint8Array(o.buffer),
              f = [],
              c,
              h;
            for (c = 0; c < i.BYTES_PER_ELEMENT; c += 1) {
              f.push(r(l, c));
            }
            if (Boolean(s) === Boolean(e)) {
              f.reverse();
            }
            h = new t.Uint8Array(this.buffer, n, i.BYTES_PER_ELEMENT);
            h.set(f);
          };
        }
        i.prototype.setUint8 = makeSetter(t.Uint8Array);
        i.prototype.setInt8 = makeSetter(t.Int8Array);
        i.prototype.setUint16 = makeSetter(t.Uint16Array);
        i.prototype.setInt16 = makeSetter(t.Int16Array);
        i.prototype.setUint32 = makeSetter(t.Uint32Array);
        i.prototype.setInt32 = makeSetter(t.Int32Array);
        i.prototype.setFloat32 = makeSetter(t.Float32Array);
        i.prototype.setFloat64 = makeSetter(t.Float64Array);
        t.DataView = t.DataView || i;
      })();
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      var i = r(285).Writable;
      var n = r(780);
      var a = r(719);
      if (typeof Uint8Array === "undefined") {
        var u = r(731).Uint8Array;
      } else {
        var u = Uint8Array;
      }
      function ConcatStream(e, t) {
        if (!(this instanceof ConcatStream)) return new ConcatStream(e, t);
        if (typeof e === "function") {
          t = e;
          e = {};
        }
        if (!e) e = {};
        var r = e.encoding;
        var n = false;
        if (!r) {
          n = true;
        } else {
          r = String(r).toLowerCase();
          if (r === "u8" || r === "uint8") {
            r = "uint8array";
          }
        }
        i.call(this, { objectMode: true });
        this.encoding = r;
        this.shouldInferEncoding = n;
        if (t)
          this.on("finish", function() {
            t(this.getBody());
          });
        this.body = [];
      }
      e.exports = ConcatStream;
      n(ConcatStream, i);
      ConcatStream.prototype._write = function(e, t, r) {
        this.body.push(e);
        r();
      };
      ConcatStream.prototype.inferEncoding = function(e) {
        var t = e === undefined ? this.body[0] : e;
        if (Buffer.isBuffer(t)) return "buffer";
        if (typeof Uint8Array !== "undefined" && t instanceof Uint8Array)
          return "uint8array";
        if (Array.isArray(t)) return "array";
        if (typeof t === "string") return "string";
        if (Object.prototype.toString.call(t) === "[object Object]")
          return "object";
        return "buffer";
      };
      ConcatStream.prototype.getBody = function() {
        if (!this.encoding && this.body.length === 0) return [];
        if (this.shouldInferEncoding) this.encoding = this.inferEncoding();
        if (this.encoding === "array") return arrayConcat(this.body);
        if (this.encoding === "string") return stringConcat(this.body);
        if (this.encoding === "buffer") return bufferConcat(this.body);
        if (this.encoding === "uint8array") return u8Concat(this.body);
        return this.body;
      };
      var s =
        Array.isArray ||
        function(e) {
          return Object.prototype.toString.call(e) == "[object Array]";
        };
      function isArrayish(e) {
        return /Array\]$/.test(Object.prototype.toString.call(e));
      }
      function isBufferish(e) {
        return (
          typeof e === "string" ||
          isArrayish(e) ||
          (e && typeof e.subarray === "function")
        );
      }
      function stringConcat(e) {
        var t = [];
        var r = false;
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          if (typeof n === "string") {
            t.push(n);
          } else if (Buffer.isBuffer(n)) {
            t.push(n);
          } else if (isBufferish(n)) {
            t.push(a(n));
          } else {
            t.push(a(String(n)));
          }
        }
        if (Buffer.isBuffer(e[0])) {
          t = Buffer.concat(t);
          t = t.toString("utf8");
        } else {
          t = t.join("");
        }
        return t;
      }
      function bufferConcat(e) {
        var t = [];
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          if (Buffer.isBuffer(i)) {
            t.push(i);
          } else if (isBufferish(i)) {
            t.push(a(i));
          } else {
            t.push(a(String(i)));
          }
        }
        return Buffer.concat(t);
      }
      function arrayConcat(e) {
        var t = [];
        for (var r = 0; r < e.length; r++) {
          t.push.apply(t, e[r]);
        }
        return t;
      }
      function u8Concat(e) {
        var t = 0;
        for (var r = 0; r < e.length; r++) {
          if (typeof e[r] === "string") {
            e[r] = a(e[r]);
          }
          t += e[r].length;
        }
        var i = new u(t);
        for (var r = 0, n = 0; r < e.length; r++) {
          var s = e[r];
          for (var o = 0; o < s.length; o++) {
            i[n++] = s[o];
          }
        }
        return i;
      }
    },
    function(e) {
      "use strict";
      e.exports = emphasis;
      var t = "_";
      var r = "*";
      function emphasis(e) {
        var i = this.options.emphasis;
        var n = this.all(e).join("");
        if (this.options.pedantic && i === t && n.indexOf(i) !== -1) {
          i = r;
        }
        return i + n + i;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = footnoteReference;
      var t = "[";
      var r = "]";
      var i = "^";
      function footnoteReference(e) {
        return t + i + (e.label || e.identifier) + r;
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = parseJson;
      function parseJson(e, t, r) {
        r = r || 20;
        try {
          return JSON.parse(e, t);
        } catch (t) {
          if (typeof e !== "string") {
            const t = Array.isArray(e) && e.length === 0;
            const r = "Cannot parse " + (t ? "an empty array" : String(e));
            throw new TypeError(r);
          }
          const i = t.message.match(/^Unexpected token.*position\s+(\d+)/i);
          const n = i
            ? +i[1]
            : t.message.match(/^Unexpected end of JSON.*/i)
            ? e.length - 1
            : null;
          if (n != null) {
            const i = n <= r ? 0 : n - r;
            const a = n + r >= e.length ? e.length : n + r;
            t.message += ` while parsing near '${i === 0 ? "" : "..."}${e.slice(
              i,
              a
            )}${a === e.length ? "" : "..."}'`;
          } else {
            t.message += ` while parsing '${e.slice(0, r * 2)}'`;
          }
          throw t;
        }
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = function isArrayish(e) {
        if (!e) {
          return false;
        }
        return (
          e instanceof Array ||
          Array.isArray(e) ||
          (e.length >= 0 && e.splice instanceof Function)
        );
      };
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = strikethrough;
      var t = "~";
      var r = t + t;
      function strikethrough(e) {
        return r + this.all(e).join("") + r;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(704);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i("remark-lint:no-heading-indent", noHeadingIndent);
      var o = u.start;
      function noHeadingIndent(e, t) {
        var r = String(t);
        var i = r.length;
        a(e, "heading", visitor);
        function visitor(e) {
          var a;
          var u;
          var l;
          var f;
          var c;
          if (s(e)) {
            return;
          }
          a = o(e);
          u = a.offset;
          l = u - 1;
          while (++l < i) {
            f = r.charAt(l);
            if (f !== " " && f !== "\t") {
              break;
            }
          }
          c = l - u;
          if (c) {
            t.message(
              "Remove " + c + " " + n("space", c) + " before this heading",
              { line: a.line, column: a.column + c }
            );
          }
        }
      }
    },
    ,
    ,
    ,
    function(e) {
      var t = {}.toString;
      e.exports =
        Array.isArray ||
        function(e) {
          return t.call(e) == "[object Array]";
        };
    },
    function(e) {
      "use strict";
      e.exports = paragraph;
      function paragraph(e) {
        return this.all(e).join("");
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i("remark-lint:final-newline", finalNewline);
      function finalNewline(e, t) {
        var r = String(t);
        var i = r.length - 1;
        if (i > -1 && r.charAt(i) !== "\n") {
          t.message("Missing newline character at end of file");
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(171);
      var n = r(111);
      e.exports = strikethrough;
      strikethrough.locator = n;
      var a = "~";
      var u = "~~";
      function strikethrough(e, t, r) {
        var n = this;
        var s = "";
        var o = "";
        var l = "";
        var f = "";
        var c;
        var h;
        var p;
        if (
          !n.options.gfm ||
          t.charAt(0) !== a ||
          t.charAt(1) !== a ||
          i(t.charAt(2))
        ) {
          return;
        }
        c = 1;
        h = t.length;
        p = e.now();
        p.column += 2;
        p.offset += 2;
        while (++c < h) {
          s = t.charAt(c);
          if (s === a && o === a && (!l || !i(l))) {
            if (r) {
              return true;
            }
            return e(u + f + u)({
              type: "delete",
              children: n.tokenizeInline(f, p)
            });
          }
          f += o;
          l = o;
          o = s;
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      function setup(e) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = r(596);
        Object.keys(e).forEach(function(t) {
          createDebug[t] = e[t];
        });
        createDebug.instances = [];
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(e) {
          var t = 0;
          for (var r = 0; r < e.length; r++) {
            t = (t << 5) - t + e.charCodeAt(r);
            t |= 0;
          }
          return createDebug.colors[Math.abs(t) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(e) {
          var t;
          function debug() {
            if (!debug.enabled) {
              return;
            }
            for (
              var e = arguments.length, r = new Array(e), i = 0;
              i < e;
              i++
            ) {
              r[i] = arguments[i];
            }
            var n = debug;
            var a = Number(new Date());
            var u = a - (t || a);
            n.diff = u;
            n.prev = t;
            n.curr = a;
            t = a;
            r[0] = createDebug.coerce(r[0]);
            if (typeof r[0] !== "string") {
              r.unshift("%O");
            }
            var s = 0;
            r[0] = r[0].replace(/%([a-zA-Z%])/g, function(e, t) {
              if (e === "%%") {
                return e;
              }
              s++;
              var i = createDebug.formatters[t];
              if (typeof i === "function") {
                var a = r[s];
                e = i.call(n, a);
                r.splice(s, 1);
                s--;
              }
              return e;
            });
            createDebug.formatArgs.call(n, r);
            var o = n.log || createDebug.log;
            o.apply(n, r);
          }
          debug.namespace = e;
          debug.enabled = createDebug.enabled(e);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(e);
          debug.destroy = destroy;
          debug.extend = extend;
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          createDebug.instances.push(debug);
          return debug;
        }
        function destroy() {
          var e = createDebug.instances.indexOf(this);
          if (e !== -1) {
            createDebug.instances.splice(e, 1);
            return true;
          }
          return false;
        }
        function extend(e, t) {
          return createDebug(
            this.namespace + (typeof t === "undefined" ? ":" : t) + e
          );
        }
        function enable(e) {
          createDebug.save(e);
          createDebug.names = [];
          createDebug.skips = [];
          var t;
          var r = (typeof e === "string" ? e : "").split(/[\s,]+/);
          var i = r.length;
          for (t = 0; t < i; t++) {
            if (!r[t]) {
              continue;
            }
            e = r[t].replace(/\*/g, ".*?");
            if (e[0] === "-") {
              createDebug.skips.push(new RegExp("^" + e.substr(1) + "$"));
            } else {
              createDebug.names.push(new RegExp("^" + e + "$"));
            }
          }
          for (t = 0; t < createDebug.instances.length; t++) {
            var n = createDebug.instances[t];
            n.enabled = createDebug.enabled(n.namespace);
          }
        }
        function disable() {
          createDebug.enable("");
        }
        function enabled(e) {
          if (e[e.length - 1] === "*") {
            return true;
          }
          var t;
          var r;
          for (t = 0, r = createDebug.skips.length; t < r; t++) {
            if (createDebug.skips[t].test(e)) {
              return false;
            }
          }
          for (t = 0, r = createDebug.names.length; t < r; t++) {
            if (createDebug.names[t].test(e)) {
              return true;
            }
          }
          return false;
        }
        function coerce(e) {
          if (e instanceof Error) {
            return e.stack || e.message;
          }
          return e;
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      e.exports = setup;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(537);
      e.exports = copy;
      var n = "&";
      var a = /[-!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~_]/;
      function copy(e, t) {
        var r = e.length;
        var u = t.length;
        var s = [];
        var o = 0;
        var l = 0;
        var f;
        while (l < r) {
          f = l;
          while (l < r && !a.test(e.charAt(l))) {
            l += 1;
          }
          s.push(e.slice(f, l));
          while (o < u && !a.test(t.charAt(o))) {
            o += 1;
          }
          f = o;
          while (o < u && a.test(t.charAt(o))) {
            if (t.charAt(o) === n) {
              o += i(t.slice(o));
            }
            o += 1;
          }
          s.push(t.slice(f, o));
          while (l < r && a.test(e.charAt(l))) {
            l += 1;
          }
        }
        return s.join("");
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(986);
      e.exports = lint;
      function lint() {
        this.use(lintMessageControl);
      }
      function lintMessageControl() {
        return i({ name: "lint", source: "remark-lint" });
      }
    },
    function(e) {
      e.exports = require("module");
    },
    ,
    function(e, t, r) {
      try {
        var i = r(64);
        if (typeof i.inherits !== "function") throw "";
        e.exports = i.inherits;
      } catch (t) {
        e.exports = r(714);
      }
    },
    function(e) {
      "use strict";
      e.exports = block;
      var t = "\n";
      var r = t + t;
      var i = r + t;
      var n = r + "\x3c!----\x3e" + r;
      function block(e) {
        var t = this;
        var a = t.options;
        var u = a.fences;
        var s = a.commonmark ? n : i;
        var o = [];
        var l = e.children;
        var f = l.length;
        var c = -1;
        var h;
        var p;
        while (++c < f) {
          h = p;
          p = l[c];
          if (h) {
            if (
              h.type === "list" &&
              ((p.type === "list" && h.ordered === p.ordered) ||
                (p.type === "code" && (!p.lang && !u)))
            ) {
              o.push(s);
            } else {
              o.push(r);
            }
          }
          o.push(t.visit(p, e));
        }
        return o.join("");
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(651);
      e.exports = hardBreak;
      hardBreak.locator = i;
      var n = " ";
      var a = "\n";
      var u = 2;
      function hardBreak(e, t, r) {
        var i = t.length;
        var s = -1;
        var o = "";
        var l;
        while (++s < i) {
          l = t.charAt(s);
          if (l === a) {
            if (s < u) {
              return;
            }
            if (r) {
              return true;
            }
            o += l;
            return e(o)({ type: "break" });
          }
          if (l !== n) {
            return;
          }
          o += l;
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      var n = new RegExp(
        "^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9])" + "-([0-9][0-9])$"
      );
      var a = new RegExp(
        "^([0-9][0-9][0-9][0-9])" +
          "-([0-9][0-9]?)" +
          "-([0-9][0-9]?)" +
          "(?:[Tt]|[ \\t]+)" +
          "([0-9][0-9]?)" +
          ":([0-9][0-9])" +
          ":([0-9][0-9])" +
          "(?:\\.([0-9]*))?" +
          "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" +
          "(?::([0-9][0-9]))?))?$"
      );
      function resolveYamlTimestamp(e) {
        if (e === null) return false;
        if (n.exec(e) !== null) return true;
        if (a.exec(e) !== null) return true;
        return false;
      }
      function constructYamlTimestamp(e) {
        var t,
          r,
          i,
          u,
          s,
          o,
          l,
          f = 0,
          c = null,
          h,
          p,
          v;
        t = n.exec(e);
        if (t === null) t = a.exec(e);
        if (t === null) throw new Error("Date resolve error");
        r = +t[1];
        i = +t[2] - 1;
        u = +t[3];
        if (!t[4]) {
          return new Date(Date.UTC(r, i, u));
        }
        s = +t[4];
        o = +t[5];
        l = +t[6];
        if (t[7]) {
          f = t[7].slice(0, 3);
          while (f.length < 3) {
            f += "0";
          }
          f = +f;
        }
        if (t[9]) {
          h = +t[10];
          p = +(t[11] || 0);
          c = (h * 60 + p) * 6e4;
          if (t[9] === "-") c = -c;
        }
        v = new Date(Date.UTC(r, i, u, s, o, l, f));
        if (c) v.setTime(v.getTime() - c);
        return v;
      }
      function representYamlTimestamp(e) {
        return e.toISOString();
      }
      e.exports = new i("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp
      });
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(682);
      e.exports = removePosition;
      function removePosition(e, t) {
        i(e, t ? hard : soft);
        return e;
      }
      function hard(e) {
        delete e.position;
      }
      function soft(e) {
        e.position = undefined;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(366);
      var n = r(144);
      e.exports = transform;
      function transform(e, t, r) {
        var a = new i();
        e.fileSet = a;
        a.on("add", add).on("done", r);
        if (e.files.length === 0) {
          r();
        } else {
          e.files.forEach(a.add, a);
        }
        function add(r) {
          n.run(
            {
              configuration: e.configuration,
              processor: t.processor(),
              cwd: t.cwd,
              extensions: t.extensions,
              pluginPrefix: t.pluginPrefix,
              treeIn: t.treeIn,
              treeOut: t.treeOut,
              inspect: t.inspect,
              color: t.color,
              out: t.out,
              output: t.output,
              streamOut: t.streamOut,
              alwaysStringify: t.alwaysStringify
            },
            r,
            a,
            done
          );
          function done(e) {
            if (e) {
              e = r.message(e);
              e.fatal = true;
            }
            a.emit("one", r);
          }
        }
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(902);
      e.exports = factory;
      function factory(e) {
        decoder.raw = decodeRaw;
        return decoder;
        function normalize(t) {
          var r = e.offset;
          var i = t.line;
          var n = [];
          while (++i) {
            if (!(i in r)) {
              break;
            }
            n.push((r[i] || 0) + 1);
          }
          return { start: t, indent: n };
        }
        function decoder(t, r, i) {
          n(t, {
            position: normalize(r),
            warning: handleWarning,
            text: i,
            reference: i,
            textContext: e,
            referenceContext: e
          });
        }
        function decodeRaw(e, t, r) {
          return n(e, i(r, { position: normalize(t), warning: handleWarning }));
        }
        function handleWarning(t, r, i) {
          if (i !== 3) {
            e.file.message(t, r);
          }
        }
      }
    },
    function(e, t, r) {
      const i = r(604);
      e.exports = function stringify(e, t, r) {
        const n = [];
        let a = "";
        let u;
        let s;
        let o = "";
        let l;
        if (t != null && typeof t === "object" && !Array.isArray(t)) {
          r = t.space;
          l = t.quote;
          t = t.replacer;
        }
        if (typeof t === "function") {
          s = t;
        } else if (Array.isArray(t)) {
          u = [];
          for (const e of t) {
            let t;
            if (typeof e === "string") {
              t = e;
            } else if (
              typeof e === "number" ||
              e instanceof String ||
              e instanceof Number
            ) {
              t = String(e);
            }
            if (t !== undefined && u.indexOf(t) < 0) {
              u.push(t);
            }
          }
        }
        if (r instanceof Number) {
          r = Number(r);
        } else if (r instanceof String) {
          r = String(r);
        }
        if (typeof r === "number") {
          if (r > 0) {
            r = Math.min(10, Math.floor(r));
            o = "          ".substr(0, r);
          }
        } else if (typeof r === "string") {
          o = r.substr(0, 10);
        }
        return serializeProperty("", { "": e });
        function serializeProperty(e, t) {
          let r = t[e];
          if (r != null) {
            if (typeof r.toJSON5 === "function") {
              r = r.toJSON5(e);
            } else if (typeof r.toJSON === "function") {
              r = r.toJSON(e);
            }
          }
          if (s) {
            r = s.call(t, e, r);
          }
          if (r instanceof Number) {
            r = Number(r);
          } else if (r instanceof String) {
            r = String(r);
          } else if (r instanceof Boolean) {
            r = r.valueOf();
          }
          switch (r) {
            case null:
              return "null";
            case true:
              return "true";
            case false:
              return "false";
          }
          if (typeof r === "string") {
            return quoteString(r, false);
          }
          if (typeof r === "number") {
            return String(r);
          }
          if (typeof r === "object") {
            return Array.isArray(r) ? serializeArray(r) : serializeObject(r);
          }
          return undefined;
        }
        function quoteString(e) {
          const t = { "'": 0.1, '"': 0.2 };
          const r = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\v",
            "\0": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
          };
          let i = "";
          for (const n of e) {
            switch (n) {
              case "'":
              case '"':
                t[n]++;
                i += n;
                continue;
            }
            if (r[n]) {
              i += r[n];
              continue;
            }
            if (n < " ") {
              let e = n.charCodeAt(0).toString(16);
              i += "\\x" + ("00" + e).substring(e.length);
              continue;
            }
            i += n;
          }
          const n = l || Object.keys(t).reduce((e, r) => (t[e] < t[r] ? e : r));
          i = i.replace(new RegExp(n, "g"), r[n]);
          return n + i + n;
        }
        function serializeObject(e) {
          if (n.indexOf(e) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          n.push(e);
          let t = a;
          a = a + o;
          let r = u || Object.keys(e);
          let i = [];
          for (const t of r) {
            const r = serializeProperty(t, e);
            if (r !== undefined) {
              let e = serializeKey(t) + ":";
              if (o !== "") {
                e += " ";
              }
              e += r;
              i.push(e);
            }
          }
          let s;
          if (i.length === 0) {
            s = "{}";
          } else {
            let e;
            if (o === "") {
              e = i.join(",");
              s = "{" + e + "}";
            } else {
              let r = ",\n" + a;
              e = i.join(r);
              s = "{\n" + a + e + ",\n" + t + "}";
            }
          }
          n.pop();
          a = t;
          return s;
        }
        function serializeKey(e) {
          if (e.length === 0) {
            return quoteString(e, true);
          }
          const t = String.fromCodePoint(e.codePointAt(0));
          if (!i.isIdStartChar(t)) {
            return quoteString(e, true);
          }
          for (let r = t.length; r < e.length; r++) {
            if (!i.isIdContinueChar(String.fromCodePoint(e.codePointAt(r)))) {
              return quoteString(e, true);
            }
          }
          return e;
        }
        function serializeArray(e) {
          if (n.indexOf(e) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          n.push(e);
          let t = a;
          a = a + o;
          let r = [];
          for (let t = 0; t < e.length; t++) {
            const i = serializeProperty(String(t), e);
            r.push(i !== undefined ? i : "null");
          }
          let i;
          if (r.length === 0) {
            i = "[]";
          } else {
            if (o === "") {
              let e = r.join(",");
              i = "[" + e + "]";
            } else {
              let e = ",\n" + a;
              let n = r.join(e);
              i = "[\n" + a + n + ",\n" + t + "]";
            }
          }
          n.pop();
          a = t;
          return i;
        }
      };
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = text;
      function text(e, t) {
        return this.encode(this.escape(e.value, e, t), e);
      }
    },
    ,
    function(e) {
      "use strict";
      var t = "";
      var r;
      e.exports = repeat;
      function repeat(e, i) {
        if (typeof e !== "string") {
          throw new TypeError("expected a string");
        }
        if (i === 1) return e;
        if (i === 2) return e + e;
        var n = e.length * i;
        if (r !== e || typeof r === "undefined") {
          r = e;
          t = "";
        } else if (t.length >= n) {
          return t.substr(0, n);
        }
        while (n > t.length && i > 1) {
          if (i & 1) {
            t += e;
          }
          i >>= 1;
          e += e;
        }
        t += e;
        t = t.substr(0, n);
        return t;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(839);
      var a = r(526);
      var u = r(135);
      var s = r(682);
      e.exports = i(
        "remark-lint:no-duplicate-definitions",
        noDuplicateDefinitions
      );
      var o = "Do not use definitions with the same identifier";
      function noDuplicateDefinitions(e, t) {
        var r = {};
        s(e, ["definition", "footnoteDefinition"], validate);
        function validate(e) {
          var i;
          var s;
          if (!a(e)) {
            i = e.identifier;
            s = r[i];
            if (s && s.type) {
              t.message(o + " (" + u(n.start(s)) + ")", e);
            }
            r[i] = e;
          }
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = is;
      function is(e, t, r, i, n) {
        var a = i !== null && i !== undefined;
        var u = r !== null && r !== undefined;
        var s = convert(e);
        if (u && (typeof r !== "number" || r < 0 || r === Infinity)) {
          throw new Error("Expected positive finite index or child node");
        }
        if (a && (!is(null, i) || !i.children)) {
          throw new Error("Expected parent node");
        }
        if (!t || !t.type || typeof t.type !== "string") {
          return false;
        }
        if (a !== u) {
          throw new Error("Expected both parent and index");
        }
        return Boolean(s.call(n, t, r, i));
      }
      function convert(e) {
        if (typeof e === "string") {
          return typeFactory(e);
        }
        if (e === null || e === undefined) {
          return ok;
        }
        if (typeof e === "object") {
          return ("length" in e ? anyFactory : matchesFactory)(e);
        }
        if (typeof e === "function") {
          return e;
        }
        throw new Error("Expected function, string, or object as test");
      }
      function convertAll(e) {
        var t = [];
        var r = e.length;
        var i = -1;
        while (++i < r) {
          t[i] = convert(e[i]);
        }
        return t;
      }
      function matchesFactory(e) {
        return matches;
        function matches(t) {
          var r;
          for (r in e) {
            if (t[r] !== e[r]) {
              return false;
            }
          }
          return true;
        }
      }
      function anyFactory(e) {
        var t = convertAll(e);
        var r = t.length;
        return matches;
        function matches() {
          var e = -1;
          while (++e < r) {
            if (t[e].apply(this, arguments)) {
              return true;
            }
          }
          return false;
        }
      }
      function typeFactory(e) {
        return type;
        function type(t) {
          return Boolean(t && t.type === e);
        }
      }
      function ok() {
        return true;
      }
    },
    function(e) {
      e.exports = {
        name: "node-lint-md-cli-rollup",
        description: "remark packaged for node markdown linting",
        version: "2.0.0",
        devDependencies: { "@zeit/ncc": "^0.16.1" },
        dependencies: {
          "markdown-extensions": "^1.1.1",
          remark: "^10.0.1",
          "remark-lint": "^6.0.4",
          "remark-preset-lint-node": "^1.10.0",
          "unified-args": "^7.0.0",
          "unified-engine": "^6.0.1"
        },
        main: "src/cli-entry.js",
        scripts: {
          build: "ncc build -m",
          "build-node": "npm run build && cp dist/index.js ../lint-md.js"
        }
      };
    },
    function(e) {
      "use strict";
      e.exports = setextHeading;
      var t = "\n";
      var r = "\t";
      var i = " ";
      var n = "=";
      var a = "-";
      var u = 3;
      var s = 1;
      var o = 2;
      function setextHeading(e, l, f) {
        var c = this;
        var h = e.now();
        var p = l.length;
        var v = -1;
        var d = "";
        var D;
        var m;
        var g;
        var E;
        var A;
        while (++v < p) {
          g = l.charAt(v);
          if (g !== i || v >= u) {
            v--;
            break;
          }
          d += g;
        }
        D = "";
        m = "";
        while (++v < p) {
          g = l.charAt(v);
          if (g === t) {
            v--;
            break;
          }
          if (g === i || g === r) {
            m += g;
          } else {
            D += m + g;
            m = "";
          }
        }
        h.column += d.length;
        h.offset += d.length;
        d += D + m;
        g = l.charAt(++v);
        E = l.charAt(++v);
        if (g !== t || (E !== n && E !== a)) {
          return;
        }
        d += g;
        m = E;
        A = E === n ? s : o;
        while (++v < p) {
          g = l.charAt(v);
          if (g !== E) {
            if (g !== t) {
              return;
            }
            v--;
            break;
          }
          m += g;
        }
        if (f) {
          return true;
        }
        return e(d + m)({
          type: "heading",
          depth: A,
          children: c.tokenizeInline(D, h)
        });
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = unorderedItems;
      var t = "\n";
      var r = t + t;
      function unorderedItems(e) {
        var i = this;
        var n = i.options.bullet;
        var a = i.visitors.listItem;
        var u = e.children;
        var s = u.length;
        var o = -1;
        var l = [];
        while (++o < s) {
          l[o] = a.call(i, u[o], e, o, n);
        }
        return l.join(e.spread ? r : t);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      function YAMLException(e, t) {
        Error.call(this);
        this.name = "YAMLException";
        this.reason = e;
        this.mark = t;
        this.message =
          (this.reason || "(unknown reason)") +
          (this.mark ? " " + this.mark.toString() : "");
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack || "";
        }
      }
      YAMLException.prototype = Object.create(Error.prototype);
      YAMLException.prototype.constructor = YAMLException;
      YAMLException.prototype.toString = function toString(e) {
        var t = this.name + ": ";
        t += this.reason || "(unknown reason)";
        if (!e && this.mark) {
          t += " " + this.mark.toString();
        }
        return t;
      };
      e.exports = YAMLException;
    },
    function(e) {
      "use strict";
      e.exports = (e, t) => {
        t = t || process.argv;
        const r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
        const i = t.indexOf(r + e);
        const n = t.indexOf("--");
        return i !== -1 && (n === -1 ? true : i < n);
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(794);
      e.exports = parse;
      var a = "\n";
      var u = /\r\n|\r/g;
      function parse() {
        var e = this;
        var t = String(e.file);
        var r = { line: 1, column: 1, offset: 0 };
        var s = i(r);
        var o;
        t = t.replace(u, a);
        if (t.charCodeAt(0) === 65279) {
          t = t.slice(1);
          s.column++;
          s.offset++;
        }
        o = {
          type: "root",
          children: e.tokenizeBlock(t, s),
          position: { start: r, end: e.eof || i(r) }
        };
        if (!e.options.position) {
          n(o, true);
        }
        return o;
      }
    },
    ,
    ,
    function(e, t) {
      "use strict";
      var r = t;
      r.start = factory("start");
      r.end = factory("end");
      function factory(e) {
        point.displayName = e;
        return point;
        function point(t) {
          var r = (t && t.position && t.position[e]) || {};
          return {
            line: r.line || null,
            column: r.column || null,
            offset: isNaN(r.offset) ? null : r.offset
          };
        }
      }
    },
    function(e) {
      "use strict";
      e.exports = blockquote;
      var t = "\n";
      var r = " ";
      var i = ">";
      function blockquote(e) {
        var n = this.block(e).split(t);
        var a = [];
        var u = n.length;
        var s = -1;
        var o;
        while (++s < u) {
          o = n[s];
          a[s] = (o ? r : "") + o;
        }
        return i + a.join(t + i);
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(526);
      var a = r(682);
      e.exports = i("remark-lint:no-unused-definitions", noUnusedDefinitions);
      var u = "Found unused definition";
      function noUnusedDefinitions(e, t) {
        var r = {};
        var i;
        var s;
        a(e, ["definition", "footnoteDefinition"], find);
        a(e, ["imageReference", "linkReference", "footnoteReference"], mark);
        for (i in r) {
          s = r[i];
          if (!s.used) {
            t.message(u, s.node);
          }
        }
        function find(e) {
          if (!n(e)) {
            r[e.identifier.toUpperCase()] = { node: e, used: false };
          }
        }
        function mark(e) {
          var t = r[e.identifier.toUpperCase()];
          if (!n(e) && t) {
            t.used = true;
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(211);
      function resolveYamlBoolean(e) {
        if (e === null) return false;
        var t = e.length;
        return (
          (t === 4 && (e === "true" || e === "True" || e === "TRUE")) ||
          (t === 5 && (e === "false" || e === "False" || e === "FALSE"))
        );
      }
      function constructYamlBoolean(e) {
        return e === "true" || e === "True" || e === "TRUE";
      }
      function isBoolean(e) {
        return Object.prototype.toString.call(e) === "[object Boolean]";
      }
      e.exports = new i("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
          lowercase: function(e) {
            return e ? "true" : "false";
          },
          uppercase: function(e) {
            return e ? "TRUE" : "FALSE";
          },
          camelcase: function(e) {
            return e ? "True" : "False";
          }
        },
        defaultStyle: "lowercase"
      });
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(704);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i(
        "remark-lint:no-consecutive-blank-lines",
        noConsecutiveBlankLines
      );
      function noConsecutiveBlankLines(e, t) {
        a(e, visitor);
        function visitor(e) {
          var t = e.children;
          var r;
          var i;
          if (!s(e) && t) {
            r = t[0];
            if (r && !s(r)) {
              compare(u.start(e), u.start(r), 0);
              t.forEach(visitChild);
              i = t[t.length - 1];
              if (i !== r && !s(i)) {
                compare(u.end(e), u.end(i), 1);
              }
            }
          }
        }
        function compare(e, r, i) {
          var a = r.line - e.line;
          var u = Math.abs(a) - i;
          var s;
          if (u > 0) {
            s =
              "Remove " +
              u +
              " " +
              n("line", u) +
              " " +
              (a > 0 ? "before" : "after") +
              " node";
            t.message(s, r);
          }
        }
        function visitChild(e, t, r) {
          var i = r[t - 1];
          var n = 2;
          if (i && !s(i) && !s(e)) {
            if (
              (i.type === "list" && e.type === "list") ||
              (e.type === "code" && i.type === "list" && !e.lang)
            ) {
              n++;
            }
            compare(u.end(i), u.start(e), n);
          }
        }
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(123);
      var n = r(341);
      var a = r(627);
      var u = r(406);
      var s = r(803);
      var o = r(647);
      e.exports = i()
        .use(n)
        .use(a)
        .use(u)
        .use(s)
        .use(o);
    },
    ,
    ,
    function(e) {
      e.exports = function(e, t) {
        if (!t) t = {};
        var r = t.hsep === undefined ? "  " : t.hsep;
        var i = t.align || [];
        var n =
          t.stringLength ||
          function(e) {
            return String(e).length;
          };
        var a = reduce(
          e,
          function(e, t) {
            forEach(t, function(t, r) {
              var i = dotindex(t);
              if (!e[r] || i > e[r]) e[r] = i;
            });
            return e;
          },
          []
        );
        var u = map(e, function(e) {
          return map(e, function(e, t) {
            var r = String(e);
            if (i[t] === ".") {
              var u = dotindex(r);
              var s = a[t] + (/\./.test(r) ? 1 : 2) - (n(r) - u);
              return r + Array(s).join(" ");
            } else return r;
          });
        });
        var s = reduce(
          u,
          function(e, t) {
            forEach(t, function(t, r) {
              var i = n(t);
              if (!e[r] || i > e[r]) e[r] = i;
            });
            return e;
          },
          []
        );
        return map(u, function(e) {
          return map(e, function(e, t) {
            var r = s[t] - n(e) || 0;
            var a = Array(Math.max(r + 1, 1)).join(" ");
            if (i[t] === "r" || i[t] === ".") {
              return a + e;
            }
            if (i[t] === "c") {
              return (
                Array(Math.ceil(r / 2 + 1)).join(" ") +
                e +
                Array(Math.floor(r / 2 + 1)).join(" ")
              );
            }
            return e + a;
          })
            .join(r)
            .replace(/\s+$/, "");
        }).join("\n");
      };
      function dotindex(e) {
        var t = /\.[^.]*$/.exec(e);
        return t ? t.index + 1 : e.length;
      }
      function reduce(e, t, r) {
        if (e.reduce) return e.reduce(t, r);
        var i = 0;
        var n = arguments.length >= 3 ? r : e[i++];
        for (; i < e.length; i++) {
          t(n, e[i], i);
        }
        return n;
      }
      function forEach(e, t) {
        if (e.forEach) return e.forEach(t);
        for (var r = 0; r < e.length; r++) {
          t.call(e, e[r], r);
        }
      }
      function map(e, t) {
        if (e.map) return e.map(t);
        var r = [];
        for (var i = 0; i < e.length; i++) {
          r.push(t.call(e, e[i], i));
        }
        return r;
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(950);
      e.exports = i;
    },
    function(e) {
      e.exports.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
      e.exports.ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
      e.exports.ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
    },
    function(e, t, r) {
      "use strict";
      var i = r(312);
      var n = r(513);
      e.exports = image;
      var a = " ";
      var u = "(";
      var s = ")";
      var o = "[";
      var l = "]";
      var f = "!";
      function image(e) {
        var t = this;
        var r = i(t.encode(e.url || "", e));
        var c = t.enterLink();
        var h = t.encode(t.escape(e.alt || "", e));
        c();
        if (e.title) {
          r += a + n(t.encode(e.title, e));
        }
        return f + o + h + l + u + r + s;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(514);
      var a = r(7);
      var u = r(452);
      var s = r(808);
      var o = r(158);
      e.exports = Parser;
      function Parser(e, t) {
        this.file = t;
        this.offset = {};
        this.options = i(this.options);
        this.setOptions({});
        this.inList = false;
        this.inBlock = false;
        this.inLink = false;
        this.atStart = true;
        this.toOffset = a(t).toOffset;
        this.unescape = u(this, "escape");
        this.decode = s(this);
      }
      var l = Parser.prototype;
      l.setOptions = r(403);
      l.parse = r(836);
      l.options = r(694);
      l.exitStart = n("atStart", true);
      l.enterList = n("inList", false);
      l.enterLink = n("inLink", false);
      l.enterBlock = n("inBlock", false);
      l.interruptParagraph = [
        ["thematicBreak"],
        ["atxHeading"],
        ["fencedCode"],
        ["blockquote"],
        ["html"],
        ["setextHeading", { commonmark: false }],
        ["definition", { commonmark: false }],
        ["footnote", { commonmark: false }]
      ];
      l.interruptList = [
        ["atxHeading", { pedantic: false }],
        ["fencedCode", { pedantic: false }],
        ["thematicBreak", { pedantic: false }],
        ["definition", { commonmark: false }],
        ["footnote", { commonmark: false }]
      ];
      l.interruptBlockquote = [
        ["indentedCode", { commonmark: true }],
        ["fencedCode", { commonmark: true }],
        ["atxHeading", { commonmark: true }],
        ["setextHeading", { commonmark: true }],
        ["thematicBreak", { commonmark: true }],
        ["html", { commonmark: true }],
        ["list", { commonmark: true }],
        ["definition", { commonmark: false }],
        ["footnote", { commonmark: false }]
      ];
      l.blockTokenizers = {
        newline: r(670),
        indentedCode: r(729),
        fencedCode: r(964),
        blockquote: r(251),
        atxHeading: r(279),
        thematicBreak: r(391),
        list: r(44),
        setextHeading: r(819),
        html: r(214),
        footnote: r(465),
        definition: r(105),
        table: r(554),
        paragraph: r(328)
      };
      l.inlineTokenizers = {
        escape: r(680),
        autoLink: r(355),
        url: r(190),
        html: r(446),
        link: r(575),
        reference: r(332),
        strong: r(593),
        emphasis: r(905),
        deletion: r(770),
        code: r(233),
        break: r(782),
        text: r(698)
      };
      l.blockMethods = keys(l.blockTokenizers);
      l.inlineMethods = keys(l.inlineTokenizers);
      l.tokenizeBlock = o("block");
      l.tokenizeInline = o("inline");
      l.tokenizeFactory = o;
      function keys(e) {
        var t = [];
        var r;
        for (r in e) {
          t.push(r);
        }
        return t;
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty;
      var r = Object.prototype.toString;
      var i = Object.defineProperty;
      var n = Object.getOwnPropertyDescriptor;
      var a = function isArray(e) {
        if (typeof Array.isArray === "function") {
          return Array.isArray(e);
        }
        return r.call(e) === "[object Array]";
      };
      var u = function isPlainObject(e) {
        if (!e || r.call(e) !== "[object Object]") {
          return false;
        }
        var i = t.call(e, "constructor");
        var n =
          e.constructor &&
          e.constructor.prototype &&
          t.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !i && !n) {
          return false;
        }
        var a;
        for (a in e) {
        }
        return typeof a === "undefined" || t.call(e, a);
      };
      var s = function setProperty(e, t) {
        if (i && t.name === "__proto__") {
          i(e, t.name, {
            enumerable: true,
            configurable: true,
            value: t.newValue,
            writable: true
          });
        } else {
          e[t.name] = t.newValue;
        }
      };
      var o = function getProperty(e, r) {
        if (r === "__proto__") {
          if (!t.call(e, r)) {
            return void 0;
          } else if (n) {
            return n(e, r).value;
          }
        }
        return e[r];
      };
      e.exports = function extend() {
        var e, t, r, i, n, l;
        var f = arguments[0];
        var c = 1;
        var h = arguments.length;
        var p = false;
        if (typeof f === "boolean") {
          p = f;
          f = arguments[1] || {};
          c = 2;
        }
        if (f == null || (typeof f !== "object" && typeof f !== "function")) {
          f = {};
        }
        for (; c < h; ++c) {
          e = arguments[c];
          if (e != null) {
            for (t in e) {
              r = o(f, t);
              i = o(e, t);
              if (f !== i) {
                if (p && i && (u(i) || (n = a(i)))) {
                  if (n) {
                    n = false;
                    l = r && a(r) ? r : [];
                  } else {
                    l = r && u(r) ? r : {};
                  }
                  s(f, { name: t, newValue: extend(p, l, i) });
                } else if (typeof i !== "undefined") {
                  s(f, { name: t, newValue: i });
                }
              }
            }
          }
        }
        return f;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = all;
      function all(e) {
        var t = this;
        var r = e.children;
        var i = r.length;
        var n = [];
        var a = -1;
        while (++a < i) {
          n[a] = t.visit(r[a], e);
        }
        return n;
      }
    },
    function(e) {
      "use strict";
      e.exports = marker;
      var t = /\s+/g;
      var r = /\s+([-a-z0-9_]+)(?:=(?:"((?:\\[\s\S]|[^"])+)"|'((?:\\[\s\S]|[^'])+)'|((?:\\[\s\S]|[^"'\s])+)))?/gi;
      var i = /\s*([a-zA-Z0-9-]+)(\s+([\s\S]*))?\s*/;
      var n = new RegExp("(\\s*\x3c!--" + i.source + "--\x3e\\s*)");
      function marker(e) {
        var t;
        var r;
        var a;
        var u;
        if (!e) {
          return null;
        }
        t = e.type;
        if (t !== "html" && t !== "comment") {
          return null;
        }
        r = e.value;
        a = r.match(t === "comment" ? i : n);
        if (!a || a[0].length !== r.length) {
          return null;
        }
        a = a.slice(e.type === "comment" ? 1 : 2);
        u = parameters(a[1] || "");
        if (!u) {
          return null;
        }
        return { name: a[0], attributes: a[2] || "", parameters: u, node: e };
      }
      function parameters(e) {
        var i = {};
        var n = e.replace(r, replacer);
        return n.replace(t, "") ? null : i;
        function replacer(e, t, r, n, a) {
          var u = r || n || a || "";
          if (u === "true" || u === "") {
            u = true;
          } else if (u === "false") {
            u = false;
          } else if (!isNaN(u)) {
            u = Number(u);
          }
          i[t] = u;
          return "";
        }
      }
    },
    function(e, t, r) {
      "use strict";
      e = r.nmd(e);
      var i = r(589);
      var n = r(778);
      var a = r(857);
      var u = r(163);
      var s = r(347)("unified-engine:configuration");
      var o = r(941).resolve;
      var l = r(345);
      var f = r(336);
      var c = r(692);
      var h = r(340);
      var p = r(289);
      e.exports = Config;
      var v = {}.hasOwnProperty;
      var d = i.extname;
      var D = i.basename;
      var m = i.dirname;
      var g = i.relative;
      var E = {
        ".json": loadJSON,
        ".js": loadScript,
        ".yaml": loadYAML,
        ".yml": loadYAML
      };
      var A = loadJSON;
      Config.prototype.load = load;
      function Config(e) {
        var t = e.rcName;
        var r = e.packageField;
        var i = [];
        this.cwd = e.cwd;
        this.packageField = e.packageField;
        this.pluginPrefix = e.pluginPrefix;
        this.configTransform = e.configTransform;
        this.defaultConfig = e.defaultConfig;
        if (t) {
          i.push(t, t + ".js", t + ".yml", t + ".yaml");
          s("Looking for `%s` configuration files", i);
        }
        if (r) {
          i.push("package.json");
          s("Looking for `%s` fields in `package.json` files", r);
        }
        this.given = { settings: e.settings, plugins: e.plugins };
        this.create = create.bind(this);
        this.findUp = new p({
          filePath: e.rcPath,
          cwd: e.cwd,
          detect: e.detectConfig,
          names: i,
          create: this.create
        });
      }
      function load(e, t) {
        var r = e || i.resolve(this.cwd, "stdin.js");
        var n = this;
        n.findUp.load(r, done);
        function done(e, r) {
          if (e || r) {
            return t(e, r);
          }
          t(null, n.create());
        }
      }
      function create(e, t) {
        var r = this;
        var i = r.configTransform;
        var n = r.defaultConfig;
        var a = (t && E[d(t)]) || A;
        var u = { prefix: r.pluginPrefix, cwd: r.cwd };
        var s = { settings: {}, plugins: [] };
        var o = e ? a.apply(r, arguments) : undefined;
        if (i && o !== undefined) {
          o = i(o, t);
        }
        if (e && o === undefined && D(t) === "package.json") {
          return;
        }
        if (o === undefined) {
          if (n) {
            merge(s, n, null, f(u, { root: r.cwd }));
          }
        } else {
          merge(s, o, null, f(u, { root: m(t) }));
        }
        merge(s, r.given, null, f(u, { root: r.cwd }));
        return s;
      }
      function loadScript(t, r) {
        var i = n._cache[r];
        if (!i) {
          i = new n(r, e);
          i.filename = r;
          i.paths = n._nodeModulePaths(m(r));
          i._compile(String(t), r);
          i.loaded = true;
          n._cache[r] = i;
        }
        return i.exports;
      }
      function loadYAML(e, t) {
        return a.safeLoad(e, { filename: D(t) });
      }
      function loadJSON(e, t) {
        var r = u(e, t);
        if (D(t) === "package.json") {
          r = r[this.packageField];
        }
        return r;
      }
      function merge(e, t, r, n) {
        var a = n.root;
        var u = n.cwd;
        var s = n.prefix;
        if (c(t)) {
          addPreset(t);
        } else {
          throw new Error("Expected preset, not `" + t + "`");
        }
        return e;
        function addPreset(t) {
          var r = t.plugins;
          if (r === null || r === undefined) {
          } else if (c(r)) {
            if ("length" in r) {
              addEach(r);
            } else {
              addIn(r);
            }
          } else {
            throw new Error(
              "Expected a list or object of plugins, not `" + r + "`"
            );
          }
          e.settings = f(e.settings, t.settings);
        }
        function addEach(e) {
          var t = e.length;
          var r = -1;
          var i;
          while (++r < t) {
            i = e[r];
            if (c(i) && "length" in i) {
              use.apply(null, i);
            } else {
              use(i);
            }
          }
        }
        function addIn(e) {
          var t;
          for (t in e) {
            use(t, e[t]);
          }
        }
        function use(t, r) {
          if (h(t)) {
            addModule(t, r);
          } else if (typeof t === "function") {
            addPlugin(t, r);
          } else {
            merge(e, t, r, n);
          }
        }
        function addModule(t, r) {
          var c = o(t, { cwd: a, prefix: s });
          var h;
          if (c) {
            try {
              h = require(c);
            } catch (e) {
              throw l("Cannot parse script `%s`\n%s", g(a, c), e.stack);
            }
            try {
              if (typeof h === "function") {
                addPlugin(h, r);
              } else {
                merge(e, h, r, f(n, { root: m(c) }));
              }
            } catch (e) {
              throw l(
                "Error: Expected preset or plugin, not %s, at `%s`",
                h,
                g(a, c)
              );
            }
          } else {
            c = g(u, i.resolve(a, t));
            addPlugin(
              failingModule(c, new Error("Could not find module `" + t + "`")),
              r
            );
          }
        }
        function addPlugin(t, r) {
          var i = find(e.plugins, t);
          if (i) {
            reconfigure(i, r);
          } else {
            e.plugins.push([t, r]);
          }
        }
      }
      function reconfigure(e, t) {
        if (t !== false && e[1] !== false && c(t)) {
          t = f(e[1], t);
        }
        e[1] = t;
      }
      function find(e, t) {
        var r = e.length;
        var i = -1;
        var n;
        while (++i < r) {
          n = e[i];
          if (n[0] === t) {
            return n;
          }
        }
      }
      function failingModule(e, t) {
        var r = failingModule.cache || (failingModule.cache = {});
        var i = v.call(r, e) ? r[e] : (r[e] = fail);
        return i;
        function fail() {
          throw t;
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(211);
      function resolveJavascriptUndefined() {
        return true;
      }
      function constructJavascriptUndefined() {
        return undefined;
      }
      function representJavascriptUndefined() {
        return "";
      }
      function isUndefined(e) {
        return typeof e === "undefined";
      }
      e.exports = new i("tag:yaml.org,2002:js/undefined", {
        kind: "scalar",
        resolve: resolveJavascriptUndefined,
        construct: constructJavascriptUndefined,
        predicate: isUndefined,
        represent: representJavascriptUndefined
      });
    },
    function(e) {
      var t = Object.prototype.hasOwnProperty;
      var r = Object.prototype.toString;
      function isEmpty(e) {
        if (e == null) return true;
        if ("boolean" == typeof e) return false;
        if ("number" == typeof e) return e === 0;
        if ("string" == typeof e) return e.length === 0;
        if ("function" == typeof e) return e.length === 0;
        if (Array.isArray(e)) return e.length === 0;
        if (e instanceof Error) return e.message === "";
        if (e.toString == r) {
          switch (e.toString()) {
            case "[object File]":
            case "[object Map]":
            case "[object Set]": {
              return e.size === 0;
            }
            case "[object Object]": {
              for (var i in e) {
                if (t.call(e, i)) return false;
              }
              return true;
            }
          }
        }
        return false;
      }
      e.exports = isEmpty;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(474),
        n = r(86),
        a = r(709);
      var u = r(589);
      e.exports = function() {
        var e = i("npm", null, []).prefix;
        if (e) {
          return n(a(e, process.env));
        } else if (process.platform == "win32") {
          return u.dirname(process.execPath);
        } else {
          return u.resolve(process.execPath, "../..");
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      e.exports = require("tty");
    },
    ,
    function(e, t, r) {
      "use strict";
      e.exports = visitParents;
      var i = r(817);
      var n = true;
      var a = "skip";
      var u = false;
      visitParents.CONTINUE = n;
      visitParents.SKIP = a;
      visitParents.EXIT = u;
      function visitParents(e, t, r, n) {
        if (typeof t === "function" && typeof r !== "function") {
          n = r;
          r = t;
          t = null;
        }
        one(e, null, []);
        function one(e, n, s) {
          var o;
          if (!t || i(t, e, n, s[s.length - 1] || null)) {
            o = r(e, s);
            if (o === u) {
              return o;
            }
          }
          if (e.children && o !== a) {
            return all(e.children, s.concat(e)) === u ? u : o;
          }
          return o;
        }
        function all(e, t) {
          var r = -1;
          var i = n ? -1 : 1;
          var a = (n ? e.length : r) + i;
          var s;
          var o;
          while (a > r && a < e.length) {
            s = e[a];
            o = s && one(s, a, t);
            if (o === u) {
              return o;
            }
            a = typeof o === "number" ? o : a + i;
          }
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(704);
      var a = r(682);
      var u = r(839);
      var s = r(526);
      e.exports = i("remark-lint:list-item-indent", listItemIndent);
      var o = u.start;
      var l = { "tab-size": true, mixed: true, space: true };
      function listItemIndent(e, t, r) {
        var i = String(t);
        r = typeof r === "string" ? r : "tab-size";
        if (l[r] !== true) {
          t.fail(
            "Invalid list-item indent style `" +
              r +
              "`: use either `'tab-size'`, `'space'`, or `'mixed'`"
          );
        }
        a(e, "list", visitor);
        function visitor(e) {
          var a = e.spread || e.loose;
          if (!s(e)) {
            e.children.forEach(visitItem);
          }
          function visitItem(e) {
            var u = e.children[0];
            var s = o(u);
            var l;
            var f;
            var c;
            var h;
            var p;
            l = i.slice(o(e).offset, s.offset).replace(/\[[x ]?]\s*$/i, "");
            f = l.trimRight().length;
            c =
              r === "tab-size" || (r === "mixed" && a)
                ? Math.ceil(f / 4) * 4
                : f + 1;
            if (l.length !== c) {
              h = c - l.length;
              p =
                "Incorrect list-item indent: " +
                (h > 0 ? "add" : "remove") +
                " " +
                Math.abs(h) +
                " " +
                n("space", h);
              t.message(p, s);
            }
          }
        }
      }
    },
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(721);
      e.exports = decodeEntity;
      var n = {}.hasOwnProperty;
      function decodeEntity(e) {
        return n.call(i, e) ? i[e] : false;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(839);
      var u = r(526);
      e.exports = i("remark-lint:definition-spacing", definitionSpacing);
      var s = /^\s*\[((?:\\[\s\S]|[^[\]])+)]/;
      var o = "Do not use consecutive white-space in definition labels";
      function definitionSpacing(e, t) {
        var r = String(t);
        n(e, ["definition", "footnoteDefinition"], validate);
        function validate(e) {
          var i = a.start(e).offset;
          var n = a.end(e).offset;
          if (!u(e) && /[ \t\n]{2,}/.test(r.slice(i, n).match(s)[1])) {
            t.message(o, e);
          }
        }
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(336);
      var n = r(780);
      e.exports = unherit;
      function unherit(e) {
        var t;
        var r;
        var a;
        n(Of, e);
        n(From, Of);
        t = Of.prototype;
        for (r in t) {
          a = t[r];
          if (a && typeof a === "object") {
            t[r] = "concat" in a ? a.concat() : i(a);
          }
        }
        return Of;
        function From(t) {
          return e.apply(this, t);
        }
        function Of() {
          if (!(this instanceof Of)) {
            return new From(arguments);
          }
          return e.apply(this, arguments);
        }
      }
    },
    function(e) {
      "use strict";
      const t = e => {
        let t = false;
        let r = false;
        let i = false;
        for (let n = 0; n < e.length; n++) {
          const a = e[n];
          if (t && /[a-zA-Z]/.test(a) && a.toUpperCase() === a) {
            e = e.slice(0, n) + "-" + e.slice(n);
            t = false;
            i = r;
            r = true;
            n++;
          } else if (r && i && /[a-zA-Z]/.test(a) && a.toLowerCase() === a) {
            e = e.slice(0, n - 1) + "-" + e.slice(n - 1);
            i = r;
            r = false;
            t = true;
          } else {
            t = a.toLowerCase() === a && a.toUpperCase() !== a;
            i = r;
            r = a.toUpperCase() === a && a.toLowerCase() !== a;
          }
        }
        return e;
      };
      const r = (e, r) => {
        if (!(typeof e === "string" || Array.isArray(e))) {
          throw new TypeError("Expected the input to be `string | string[]`");
        }
        r = Object.assign({ pascalCase: false }, r);
        const i = e =>
          r.pascalCase ? e.charAt(0).toUpperCase() + e.slice(1) : e;
        if (Array.isArray(e)) {
          e = e
            .map(e => e.trim())
            .filter(e => e.length)
            .join("-");
        } else {
          e = e.trim();
        }
        if (e.length === 0) {
          return "";
        }
        if (e.length === 1) {
          return r.pascalCase ? e.toUpperCase() : e.toLowerCase();
        }
        const n = e !== e.toLowerCase();
        if (n) {
          e = t(e);
        }
        e = e
          .replace(/^[_.\- ]+/, "")
          .toLowerCase()
          .replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase())
          .replace(/\d+(\w|$)/g, e => e.toUpperCase());
        return i(e);
      };
      e.exports = r;
      e.exports.default = r;
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(211);
      function resolveYamlMerge(e) {
        return e === "<<" || e === null;
      }
      e.exports = new i("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: resolveYamlMerge
      });
    },
    function(e) {
      "use strict";
      e.exports = {
        gfm: true,
        commonmark: false,
        pedantic: false,
        entities: "false",
        setext: false,
        closeAtx: false,
        looseTable: false,
        spacedTable: true,
        paddedTable: true,
        stringLength: stringLength,
        incrementListMarker: true,
        fences: false,
        fence: "`",
        bullet: "-",
        listItemIndent: "tab",
        rule: "*",
        ruleSpaces: true,
        ruleRepetition: 3,
        strong: "*",
        emphasis: "_"
      };
      function stringLength(e) {
        return e.length;
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(197);
      var n = r(520);
      var a = r(439);
      var u = r(25);
      var s = r(908);
      var o = r(895);
      e.exports = parseEntities;
      var l = {}.hasOwnProperty;
      var f = String.fromCharCode;
      var c = Function.prototype;
      var h = {
        warning: null,
        reference: null,
        text: null,
        warningContext: null,
        referenceContext: null,
        textContext: null,
        position: {},
        additional: null,
        attribute: false,
        nonTerminated: true
      };
      var p = "named";
      var v = "hexadecimal";
      var d = "decimal";
      var D = {};
      D[v] = 16;
      D[d] = 10;
      var m = {};
      m[p] = s;
      m[d] = a;
      m[v] = u;
      var g = 1;
      var E = 2;
      var A = 3;
      var C = 4;
      var y = 5;
      var w = 6;
      var x = 7;
      var b = {};
      b[g] = "Named character references must be terminated by a semicolon";
      b[E] = "Numeric character references must be terminated by a semicolon";
      b[A] = "Named character references cannot be empty";
      b[C] = "Numeric character references cannot be empty";
      b[y] = "Named character references must be known";
      b[w] = "Numeric character references cannot be disallowed";
      b[x] =
        "Numeric character references cannot be outside the permissible Unicode range";
      function parseEntities(e, t) {
        var r = {};
        var i;
        var n;
        if (!t) {
          t = {};
        }
        for (n in h) {
          i = t[n];
          r[n] = i === null || i === undefined ? h[n] : i;
        }
        if (r.position.indent || r.position.start) {
          r.indent = r.position.indent || [];
          r.position = r.position.start;
        }
        return parse(e, r);
      }
      function parse(e, t) {
        var r = t.additional;
        var a = t.nonTerminated;
        var u = t.text;
        var h = t.reference;
        var F = t.warning;
        var S = t.textContext;
        var B = t.referenceContext;
        var k = t.warningContext;
        var O = t.position;
        var P = t.indent || [];
        var T = e.length;
        var I = 0;
        var M = -1;
        var L = O.column || 1;
        var R = O.line || 1;
        var j = "";
        var U = [];
        var N;
        var J;
        var z;
        var X;
        var G;
        var q;
        var W;
        var _;
        var V;
        var Y;
        var H;
        var $;
        var Z;
        var Q;
        var K;
        var ee;
        var te;
        var re;
        var ie;
        ee = now();
        _ = F ? parseError : c;
        I--;
        T++;
        while (++I < T) {
          if (G === "\n") {
            L = P[M] || 1;
          }
          G = at(I);
          if (G !== "&") {
            if (G === "\n") {
              R++;
              M++;
              L = 0;
            }
            if (G) {
              j += G;
              L++;
            } else {
              flush();
            }
          } else {
            W = at(I + 1);
            if (
              W === "\t" ||
              W === "\n" ||
              W === "\f" ||
              W === " " ||
              W === "<" ||
              W === "&" ||
              W === "" ||
              (r && W === r)
            ) {
              j += G;
              L++;
              continue;
            }
            Z = I + 1;
            $ = Z;
            ie = Z;
            if (W !== "#") {
              Q = p;
            } else {
              ie = ++$;
              W = at(ie);
              if (W === "x" || W === "X") {
                Q = v;
                ie = ++$;
              } else {
                Q = d;
              }
            }
            N = "";
            H = "";
            X = "";
            K = m[Q];
            ie--;
            while (++ie < T) {
              W = at(ie);
              if (!K(W)) {
                break;
              }
              X += W;
              if (Q === p && l.call(i, X)) {
                N = X;
                H = i[X];
              }
            }
            z = at(ie) === ";";
            if (z) {
              ie++;
              J = Q === p ? o(X) : false;
              if (J) {
                N = X;
                H = J;
              }
            }
            re = 1 + ie - Z;
            if (!z && !a) {
            } else if (!X) {
              if (Q !== p) {
                _(C, re);
              }
            } else if (Q === p) {
              if (z && !H) {
                _(y, 1);
              } else {
                if (N !== X) {
                  ie = $ + N.length;
                  re = 1 + ie - $;
                  z = false;
                }
                if (!z) {
                  V = N ? g : A;
                  if (!t.attribute) {
                    _(V, re);
                  } else {
                    W = at(ie);
                    if (W === "=") {
                      _(V, re);
                      H = null;
                    } else if (s(W)) {
                      H = null;
                    } else {
                      _(V, re);
                    }
                  }
                }
              }
              q = H;
            } else {
              if (!z) {
                _(E, re);
              }
              q = parseInt(X, D[Q]);
              if (prohibited(q)) {
                _(x, re);
                q = "�";
              } else if (q in n) {
                _(w, re);
                q = n[q];
              } else {
                Y = "";
                if (disallowed(q)) {
                  _(w, re);
                }
                if (q > 65535) {
                  q -= 65536;
                  Y += f((q >>> (10 & 1023)) | 55296);
                  q = 56320 | (q & 1023);
                }
                q = Y + f(q);
              }
            }
            if (!q) {
              X = e.slice(Z - 1, ie);
              j += X;
              L += X.length;
              I = ie - 1;
            } else {
              flush();
              ee = now();
              I = ie - 1;
              L += ie - Z + 1;
              U.push(q);
              te = now();
              te.offset++;
              if (h) {
                h.call(B, q, { start: ee, end: te }, e.slice(Z - 1, ie));
              }
              ee = te;
            }
          }
        }
        return U.join("");
        function now() {
          return { line: R, column: L, offset: I + (O.offset || 0) };
        }
        function parseError(e, t) {
          var r = now();
          r.column += t;
          r.offset += t;
          F.call(k, b[e], r, e);
        }
        function at(t) {
          return e.charAt(t);
        }
        function flush() {
          if (j) {
            U.push(j);
            if (u) {
              u.call(S, j, { start: ee, end: now() });
            }
            j = "";
          }
        }
      }
      function prohibited(e) {
        return (e >= 55296 && e <= 57343) || e > 1114111;
      }
      function disallowed(e) {
        return (
          (e >= 1 && e <= 8) ||
          e === 11 ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          (e & 65535) === 65535 ||
          (e & 65535) === 65534
        );
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(36);
      var n = r(116);
      var a = r(171);
      var u = r(82);
      e.exports = emphasis;
      emphasis.locator = u;
      var s = "*";
      var o = "_";
      var l = "\\";
      function emphasis(e, t, r) {
        var u = this;
        var f = 0;
        var c = t.charAt(f);
        var h;
        var p;
        var v;
        var d;
        var D;
        var m;
        var g;
        if (c !== s && c !== o) {
          return;
        }
        p = u.options.pedantic;
        D = c;
        v = c;
        m = t.length;
        f++;
        d = "";
        c = "";
        if (p && a(t.charAt(f))) {
          return;
        }
        while (f < m) {
          g = c;
          c = t.charAt(f);
          if (c === v && (!p || !a(g))) {
            c = t.charAt(++f);
            if (c !== v) {
              if (!i(d) || g === v) {
                return;
              }
              if (!p && v === o && n(c)) {
                d += v;
                continue;
              }
              if (r) {
                return true;
              }
              h = e.now();
              h.column++;
              h.offset++;
              return e(D + d + v)({
                type: "emphasis",
                children: u.tokenizeInline(d, h)
              });
            }
            d += v;
          }
          if (!p && c === l) {
            d += c;
            c = t.charAt(++f);
          }
          d += c;
          f++;
        }
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(138);
      var n = r(439);
      e.exports = alphanumerical;
      function alphanumerical(e) {
        return i(e) || n(e);
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      e.exports = i(
        "remark-lint:no-file-name-outer-dashes",
        noFileNameOuterDashes
      );
      var n = "Do not use initial or final dashes in a file name";
      function noFileNameOuterDashes(e, t) {
        if (t.stem && /^-|-$/.test(t.stem)) {
          t.message(n);
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      t.alphasort = alphasort;
      t.alphasorti = alphasorti;
      t.setopts = setopts;
      t.ownProp = ownProp;
      t.makeAbs = makeAbs;
      t.finish = finish;
      t.mark = mark;
      t.isIgnored = isIgnored;
      t.childrenIgnored = childrenIgnored;
      function ownProp(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      var i = r(589);
      var n = r(620);
      var a = r(969);
      var u = n.Minimatch;
      function alphasorti(e, t) {
        return e.toLowerCase().localeCompare(t.toLowerCase());
      }
      function alphasort(e, t) {
        return e.localeCompare(t);
      }
      function setupIgnores(e, t) {
        e.ignore = t.ignore || [];
        if (!Array.isArray(e.ignore)) e.ignore = [e.ignore];
        if (e.ignore.length) {
          e.ignore = e.ignore.map(ignoreMap);
        }
      }
      function ignoreMap(e) {
        var t = null;
        if (e.slice(-3) === "/**") {
          var r = e.replace(/(\/\*\*)+$/, "");
          t = new u(r, { dot: true });
        }
        return { matcher: new u(e, { dot: true }), gmatcher: t };
      }
      function setopts(e, t, r) {
        if (!r) r = {};
        if (r.matchBase && -1 === t.indexOf("/")) {
          if (r.noglobstar) {
            throw new Error("base matching requires globstar");
          }
          t = "**/" + t;
        }
        e.silent = !!r.silent;
        e.pattern = t;
        e.strict = r.strict !== false;
        e.realpath = !!r.realpath;
        e.realpathCache = r.realpathCache || Object.create(null);
        e.follow = !!r.follow;
        e.dot = !!r.dot;
        e.mark = !!r.mark;
        e.nodir = !!r.nodir;
        if (e.nodir) e.mark = true;
        e.sync = !!r.sync;
        e.nounique = !!r.nounique;
        e.nonull = !!r.nonull;
        e.nosort = !!r.nosort;
        e.nocase = !!r.nocase;
        e.stat = !!r.stat;
        e.noprocess = !!r.noprocess;
        e.absolute = !!r.absolute;
        e.maxLength = r.maxLength || Infinity;
        e.cache = r.cache || Object.create(null);
        e.statCache = r.statCache || Object.create(null);
        e.symlinks = r.symlinks || Object.create(null);
        setupIgnores(e, r);
        e.changedCwd = false;
        var n = process.cwd();
        if (!ownProp(r, "cwd")) e.cwd = n;
        else {
          e.cwd = i.resolve(r.cwd);
          e.changedCwd = e.cwd !== n;
        }
        e.root = r.root || i.resolve(e.cwd, "/");
        e.root = i.resolve(e.root);
        if (process.platform === "win32") e.root = e.root.replace(/\\/g, "/");
        e.cwdAbs = a(e.cwd) ? e.cwd : makeAbs(e, e.cwd);
        if (process.platform === "win32")
          e.cwdAbs = e.cwdAbs.replace(/\\/g, "/");
        e.nomount = !!r.nomount;
        r.nonegate = true;
        r.nocomment = true;
        e.minimatch = new u(t, r);
        e.options = e.minimatch.options;
      }
      function finish(e) {
        var t = e.nounique;
        var r = t ? [] : Object.create(null);
        for (var i = 0, n = e.matches.length; i < n; i++) {
          var a = e.matches[i];
          if (!a || Object.keys(a).length === 0) {
            if (e.nonull) {
              var u = e.minimatch.globSet[i];
              if (t) r.push(u);
              else r[u] = true;
            }
          } else {
            var s = Object.keys(a);
            if (t) r.push.apply(r, s);
            else
              s.forEach(function(e) {
                r[e] = true;
              });
          }
        }
        if (!t) r = Object.keys(r);
        if (!e.nosort) r = r.sort(e.nocase ? alphasorti : alphasort);
        if (e.mark) {
          for (var i = 0; i < r.length; i++) {
            r[i] = e._mark(r[i]);
          }
          if (e.nodir) {
            r = r.filter(function(t) {
              var r = !/\/$/.test(t);
              var i = e.cache[t] || e.cache[makeAbs(e, t)];
              if (r && i) r = i !== "DIR" && !Array.isArray(i);
              return r;
            });
          }
        }
        if (e.ignore.length)
          r = r.filter(function(t) {
            return !isIgnored(e, t);
          });
        e.found = r;
      }
      function mark(e, t) {
        var r = makeAbs(e, t);
        var i = e.cache[r];
        var n = t;
        if (i) {
          var a = i === "DIR" || Array.isArray(i);
          var u = t.slice(-1) === "/";
          if (a && !u) n += "/";
          else if (!a && u) n = n.slice(0, -1);
          if (n !== t) {
            var s = makeAbs(e, n);
            e.statCache[s] = e.statCache[r];
            e.cache[s] = e.cache[r];
          }
        }
        return n;
      }
      function makeAbs(e, t) {
        var r = t;
        if (t.charAt(0) === "/") {
          r = i.join(e.root, t);
        } else if (a(t) || t === "") {
          r = t;
        } else if (e.changedCwd) {
          r = i.resolve(e.cwd, t);
        } else {
          r = i.resolve(t);
        }
        if (process.platform === "win32") r = r.replace(/\\/g, "/");
        return r;
      }
      function isIgnored(e, t) {
        if (!e.ignore.length) return false;
        return e.ignore.some(function(e) {
          return e.matcher.match(t) || !!(e.gmatcher && e.gmatcher.match(t));
        });
      }
      function childrenIgnored(e, t) {
        if (!e.ignore.length) return false;
        return e.ignore.some(function(e) {
          return !!(e.gmatcher && e.gmatcher.match(t));
        });
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(12);
      e.exports = Readable;
      var n = r(762);
      var a;
      Readable.ReadableState = ReadableState;
      var u = r(485).EventEmitter;
      var s = function(e, t) {
        return e.listeners(t).length;
      };
      var o = r(569);
      var l = r(945).Buffer;
      var f = global.Uint8Array || function() {};
      function _uint8ArrayToBuffer(e) {
        return l.from(e);
      }
      function _isUint8Array(e) {
        return l.isBuffer(e) || e instanceof f;
      }
      var c = r(683);
      c.inherits = r(780);
      var h = r(64);
      var p = void 0;
      if (h && h.debuglog) {
        p = h.debuglog("stream");
      } else {
        p = function() {};
      }
      var v = r(402);
      var d = r(972);
      var D;
      c.inherits(Readable, o);
      var m = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(e, t, r) {
        if (typeof e.prependListener === "function")
          return e.prependListener(t, r);
        if (!e._events || !e._events[t]) e.on(t, r);
        else if (n(e._events[t])) e._events[t].unshift(r);
        else e._events[t] = [r, e._events[t]];
      }
      function ReadableState(e, t) {
        a = a || r(98);
        e = e || {};
        var i = t instanceof a;
        this.objectMode = !!e.objectMode;
        if (i) this.objectMode = this.objectMode || !!e.readableObjectMode;
        var n = e.highWaterMark;
        var u = e.readableHighWaterMark;
        var s = this.objectMode ? 16 : 16 * 1024;
        if (n || n === 0) this.highWaterMark = n;
        else if (i && (u || u === 0)) this.highWaterMark = u;
        else this.highWaterMark = s;
        this.highWaterMark = Math.floor(this.highWaterMark);
        this.buffer = new v();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.destroyed = false;
        this.defaultEncoding = e.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (e.encoding) {
          if (!D) D = r(349).StringDecoder;
          this.decoder = new D(e.encoding);
          this.encoding = e.encoding;
        }
      }
      function Readable(e) {
        a = a || r(98);
        if (!(this instanceof Readable)) return new Readable(e);
        this._readableState = new ReadableState(e, this);
        this.readable = true;
        if (e) {
          if (typeof e.read === "function") this._read = e.read;
          if (typeof e.destroy === "function") this._destroy = e.destroy;
        }
        o.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        get: function() {
          if (this._readableState === undefined) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function(e) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = e;
        }
      });
      Readable.prototype.destroy = d.destroy;
      Readable.prototype._undestroy = d.undestroy;
      Readable.prototype._destroy = function(e, t) {
        this.push(null);
        t(e);
      };
      Readable.prototype.push = function(e, t) {
        var r = this._readableState;
        var i;
        if (!r.objectMode) {
          if (typeof e === "string") {
            t = t || r.defaultEncoding;
            if (t !== r.encoding) {
              e = l.from(e, t);
              t = "";
            }
            i = true;
          }
        } else {
          i = true;
        }
        return readableAddChunk(this, e, t, false, i);
      };
      Readable.prototype.unshift = function(e) {
        return readableAddChunk(this, e, null, true, false);
      };
      function readableAddChunk(e, t, r, i, n) {
        var a = e._readableState;
        if (t === null) {
          a.reading = false;
          onEofChunk(e, a);
        } else {
          var u;
          if (!n) u = chunkInvalid(a, t);
          if (u) {
            e.emit("error", u);
          } else if (a.objectMode || (t && t.length > 0)) {
            if (
              typeof t !== "string" &&
              !a.objectMode &&
              Object.getPrototypeOf(t) !== l.prototype
            ) {
              t = _uint8ArrayToBuffer(t);
            }
            if (i) {
              if (a.endEmitted)
                e.emit("error", new Error("stream.unshift() after end event"));
              else addChunk(e, a, t, true);
            } else if (a.ended) {
              e.emit("error", new Error("stream.push() after EOF"));
            } else {
              a.reading = false;
              if (a.decoder && !r) {
                t = a.decoder.write(t);
                if (a.objectMode || t.length !== 0) addChunk(e, a, t, false);
                else maybeReadMore(e, a);
              } else {
                addChunk(e, a, t, false);
              }
            }
          } else if (!i) {
            a.reading = false;
          }
        }
        return needMoreData(a);
      }
      function addChunk(e, t, r, i) {
        if (t.flowing && t.length === 0 && !t.sync) {
          e.emit("data", r);
          e.read(0);
        } else {
          t.length += t.objectMode ? 1 : r.length;
          if (i) t.buffer.unshift(r);
          else t.buffer.push(r);
          if (t.needReadable) emitReadable(e);
        }
        maybeReadMore(e, t);
      }
      function chunkInvalid(e, t) {
        var r;
        if (
          !_isUint8Array(t) &&
          typeof t !== "string" &&
          t !== undefined &&
          !e.objectMode
        ) {
          r = new TypeError("Invalid non-string/buffer chunk");
        }
        return r;
      }
      function needMoreData(e) {
        return (
          !e.ended &&
          (e.needReadable || e.length < e.highWaterMark || e.length === 0)
        );
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(e) {
        if (!D) D = r(349).StringDecoder;
        this._readableState.decoder = new D(e);
        this._readableState.encoding = e;
        return this;
      };
      var g = 8388608;
      function computeNewHighWaterMark(e) {
        if (e >= g) {
          e = g;
        } else {
          e--;
          e |= e >>> 1;
          e |= e >>> 2;
          e |= e >>> 4;
          e |= e >>> 8;
          e |= e >>> 16;
          e++;
        }
        return e;
      }
      function howMuchToRead(e, t) {
        if (e <= 0 || (t.length === 0 && t.ended)) return 0;
        if (t.objectMode) return 1;
        if (e !== e) {
          if (t.flowing && t.length) return t.buffer.head.data.length;
          else return t.length;
        }
        if (e > t.highWaterMark) t.highWaterMark = computeNewHighWaterMark(e);
        if (e <= t.length) return e;
        if (!t.ended) {
          t.needReadable = true;
          return 0;
        }
        return t.length;
      }
      Readable.prototype.read = function(e) {
        p("read", e);
        e = parseInt(e, 10);
        var t = this._readableState;
        var r = e;
        if (e !== 0) t.emittedReadable = false;
        if (
          e === 0 &&
          t.needReadable &&
          (t.length >= t.highWaterMark || t.ended)
        ) {
          p("read: emitReadable", t.length, t.ended);
          if (t.length === 0 && t.ended) endReadable(this);
          else emitReadable(this);
          return null;
        }
        e = howMuchToRead(e, t);
        if (e === 0 && t.ended) {
          if (t.length === 0) endReadable(this);
          return null;
        }
        var i = t.needReadable;
        p("need readable", i);
        if (t.length === 0 || t.length - e < t.highWaterMark) {
          i = true;
          p("length less than watermark", i);
        }
        if (t.ended || t.reading) {
          i = false;
          p("reading or ended", i);
        } else if (i) {
          p("do read");
          t.reading = true;
          t.sync = true;
          if (t.length === 0) t.needReadable = true;
          this._read(t.highWaterMark);
          t.sync = false;
          if (!t.reading) e = howMuchToRead(r, t);
        }
        var n;
        if (e > 0) n = fromList(e, t);
        else n = null;
        if (n === null) {
          t.needReadable = true;
          e = 0;
        } else {
          t.length -= e;
        }
        if (t.length === 0) {
          if (!t.ended) t.needReadable = true;
          if (r !== e && t.ended) endReadable(this);
        }
        if (n !== null) this.emit("data", n);
        return n;
      };
      function onEofChunk(e, t) {
        if (t.ended) return;
        if (t.decoder) {
          var r = t.decoder.end();
          if (r && r.length) {
            t.buffer.push(r);
            t.length += t.objectMode ? 1 : r.length;
          }
        }
        t.ended = true;
        emitReadable(e);
      }
      function emitReadable(e) {
        var t = e._readableState;
        t.needReadable = false;
        if (!t.emittedReadable) {
          p("emitReadable", t.flowing);
          t.emittedReadable = true;
          if (t.sync) i.nextTick(emitReadable_, e);
          else emitReadable_(e);
        }
      }
      function emitReadable_(e) {
        p("emit readable");
        e.emit("readable");
        flow(e);
      }
      function maybeReadMore(e, t) {
        if (!t.readingMore) {
          t.readingMore = true;
          i.nextTick(maybeReadMore_, e, t);
        }
      }
      function maybeReadMore_(e, t) {
        var r = t.length;
        while (
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark
        ) {
          p("maybeReadMore read 0");
          e.read(0);
          if (r === t.length) break;
          else r = t.length;
        }
        t.readingMore = false;
      }
      Readable.prototype._read = function(e) {
        this.emit("error", new Error("_read() is not implemented"));
      };
      Readable.prototype.pipe = function(e, t) {
        var r = this;
        var n = this._readableState;
        switch (n.pipesCount) {
          case 0:
            n.pipes = e;
            break;
          case 1:
            n.pipes = [n.pipes, e];
            break;
          default:
            n.pipes.push(e);
            break;
        }
        n.pipesCount += 1;
        p("pipe count=%d opts=%j", n.pipesCount, t);
        var a =
          (!t || t.end !== false) &&
          e !== process.stdout &&
          e !== process.stderr;
        var u = a ? onend : unpipe;
        if (n.endEmitted) i.nextTick(u);
        else r.once("end", u);
        e.on("unpipe", onunpipe);
        function onunpipe(e, t) {
          p("onunpipe");
          if (e === r) {
            if (t && t.hasUnpiped === false) {
              t.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          p("onend");
          e.end();
        }
        var o = pipeOnDrain(r);
        e.on("drain", o);
        var l = false;
        function cleanup() {
          p("cleanup");
          e.removeListener("close", onclose);
          e.removeListener("finish", onfinish);
          e.removeListener("drain", o);
          e.removeListener("error", onerror);
          e.removeListener("unpipe", onunpipe);
          r.removeListener("end", onend);
          r.removeListener("end", unpipe);
          r.removeListener("data", ondata);
          l = true;
          if (n.awaitDrain && (!e._writableState || e._writableState.needDrain))
            o();
        }
        var f = false;
        r.on("data", ondata);
        function ondata(t) {
          p("ondata");
          f = false;
          var i = e.write(t);
          if (false === i && !f) {
            if (
              ((n.pipesCount === 1 && n.pipes === e) ||
                (n.pipesCount > 1 && indexOf(n.pipes, e) !== -1)) &&
              !l
            ) {
              p("false write response, pause", r._readableState.awaitDrain);
              r._readableState.awaitDrain++;
              f = true;
            }
            r.pause();
          }
        }
        function onerror(t) {
          p("onerror", t);
          unpipe();
          e.removeListener("error", onerror);
          if (s(e, "error") === 0) e.emit("error", t);
        }
        prependListener(e, "error", onerror);
        function onclose() {
          e.removeListener("finish", onfinish);
          unpipe();
        }
        e.once("close", onclose);
        function onfinish() {
          p("onfinish");
          e.removeListener("close", onclose);
          unpipe();
        }
        e.once("finish", onfinish);
        function unpipe() {
          p("unpipe");
          r.unpipe(e);
        }
        e.emit("pipe", r);
        if (!n.flowing) {
          p("pipe resume");
          r.resume();
        }
        return e;
      };
      function pipeOnDrain(e) {
        return function() {
          var t = e._readableState;
          p("pipeOnDrain", t.awaitDrain);
          if (t.awaitDrain) t.awaitDrain--;
          if (t.awaitDrain === 0 && s(e, "data")) {
            t.flowing = true;
            flow(e);
          }
        };
      }
      Readable.prototype.unpipe = function(e) {
        var t = this._readableState;
        var r = { hasUnpiped: false };
        if (t.pipesCount === 0) return this;
        if (t.pipesCount === 1) {
          if (e && e !== t.pipes) return this;
          if (!e) e = t.pipes;
          t.pipes = null;
          t.pipesCount = 0;
          t.flowing = false;
          if (e) e.emit("unpipe", this, r);
          return this;
        }
        if (!e) {
          var i = t.pipes;
          var n = t.pipesCount;
          t.pipes = null;
          t.pipesCount = 0;
          t.flowing = false;
          for (var a = 0; a < n; a++) {
            i[a].emit("unpipe", this, r);
          }
          return this;
        }
        var u = indexOf(t.pipes, e);
        if (u === -1) return this;
        t.pipes.splice(u, 1);
        t.pipesCount -= 1;
        if (t.pipesCount === 1) t.pipes = t.pipes[0];
        e.emit("unpipe", this, r);
        return this;
      };
      Readable.prototype.on = function(e, t) {
        var r = o.prototype.on.call(this, e, t);
        if (e === "data") {
          if (this._readableState.flowing !== false) this.resume();
        } else if (e === "readable") {
          var n = this._readableState;
          if (!n.endEmitted && !n.readableListening) {
            n.readableListening = n.needReadable = true;
            n.emittedReadable = false;
            if (!n.reading) {
              i.nextTick(nReadingNextTick, this);
            } else if (n.length) {
              emitReadable(this);
            }
          }
        }
        return r;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      function nReadingNextTick(e) {
        p("readable nexttick read 0");
        e.read(0);
      }
      Readable.prototype.resume = function() {
        var e = this._readableState;
        if (!e.flowing) {
          p("resume");
          e.flowing = true;
          resume(this, e);
        }
        return this;
      };
      function resume(e, t) {
        if (!t.resumeScheduled) {
          t.resumeScheduled = true;
          i.nextTick(resume_, e, t);
        }
      }
      function resume_(e, t) {
        if (!t.reading) {
          p("resume read 0");
          e.read(0);
        }
        t.resumeScheduled = false;
        t.awaitDrain = 0;
        e.emit("resume");
        flow(e);
        if (t.flowing && !t.reading) e.read(0);
      }
      Readable.prototype.pause = function() {
        p("call pause flowing=%j", this._readableState.flowing);
        if (false !== this._readableState.flowing) {
          p("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        return this;
      };
      function flow(e) {
        var t = e._readableState;
        p("flow", t.flowing);
        while (t.flowing && e.read() !== null) {}
      }
      Readable.prototype.wrap = function(e) {
        var t = this;
        var r = this._readableState;
        var i = false;
        e.on("end", function() {
          p("wrapped end");
          if (r.decoder && !r.ended) {
            var e = r.decoder.end();
            if (e && e.length) t.push(e);
          }
          t.push(null);
        });
        e.on("data", function(n) {
          p("wrapped data");
          if (r.decoder) n = r.decoder.write(n);
          if (r.objectMode && (n === null || n === undefined)) return;
          else if (!r.objectMode && (!n || !n.length)) return;
          var a = t.push(n);
          if (!a) {
            i = true;
            e.pause();
          }
        });
        for (var n in e) {
          if (this[n] === undefined && typeof e[n] === "function") {
            this[n] = (function(t) {
              return function() {
                return e[t].apply(e, arguments);
              };
            })(n);
          }
        }
        for (var a = 0; a < m.length; a++) {
          e.on(m[a], this.emit.bind(this, m[a]));
        }
        this._read = function(t) {
          p("wrapped _read", t);
          if (i) {
            i = false;
            e.resume();
          }
        };
        return this;
      };
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        enumerable: false,
        get: function() {
          return this._readableState.highWaterMark;
        }
      });
      Readable._fromList = fromList;
      function fromList(e, t) {
        if (t.length === 0) return null;
        var r;
        if (t.objectMode) r = t.buffer.shift();
        else if (!e || e >= t.length) {
          if (t.decoder) r = t.buffer.join("");
          else if (t.buffer.length === 1) r = t.buffer.head.data;
          else r = t.buffer.concat(t.length);
          t.buffer.clear();
        } else {
          r = fromListPartial(e, t.buffer, t.decoder);
        }
        return r;
      }
      function fromListPartial(e, t, r) {
        var i;
        if (e < t.head.data.length) {
          i = t.head.data.slice(0, e);
          t.head.data = t.head.data.slice(e);
        } else if (e === t.head.data.length) {
          i = t.shift();
        } else {
          i = r ? copyFromBufferString(e, t) : copyFromBuffer(e, t);
        }
        return i;
      }
      function copyFromBufferString(e, t) {
        var r = t.head;
        var i = 1;
        var n = r.data;
        e -= n.length;
        while ((r = r.next)) {
          var a = r.data;
          var u = e > a.length ? a.length : e;
          if (u === a.length) n += a;
          else n += a.slice(0, e);
          e -= u;
          if (e === 0) {
            if (u === a.length) {
              ++i;
              if (r.next) t.head = r.next;
              else t.head = t.tail = null;
            } else {
              t.head = r;
              r.data = a.slice(u);
            }
            break;
          }
          ++i;
        }
        t.length -= i;
        return n;
      }
      function copyFromBuffer(e, t) {
        var r = l.allocUnsafe(e);
        var i = t.head;
        var n = 1;
        i.data.copy(r);
        e -= i.data.length;
        while ((i = i.next)) {
          var a = i.data;
          var u = e > a.length ? a.length : e;
          a.copy(r, r.length - e, 0, u);
          e -= u;
          if (e === 0) {
            if (u === a.length) {
              ++n;
              if (i.next) t.head = i.next;
              else t.head = t.tail = null;
            } else {
              t.head = i;
              i.data = a.slice(u);
            }
            break;
          }
          ++n;
        }
        t.length -= n;
        return r;
      }
      function endReadable(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        if (!t.endEmitted) {
          t.ended = true;
          i.nextTick(endReadableNT, t, e);
        }
      }
      function endReadableNT(e, t) {
        if (!e.endEmitted && e.length === 0) {
          e.endEmitted = true;
          t.readable = false;
          t.emit("end");
        }
      }
      function indexOf(e, t) {
        for (var r = 0, i = e.length; r < i; r++) {
          if (e[r] === t) return r;
        }
        return -1;
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(495);
      var n = r(682);
      var a = r(526);
      e.exports = i("remark-lint:no-shell-dollars", noShellDollars);
      var u = "Do not use dollar signs before shell-commands";
      var s = [
        "sh",
        "bash",
        "bats",
        "cgi",
        "command",
        "fcgi",
        "ksh",
        "tmux",
        "tool",
        "zsh"
      ];
      function noShellDollars(e, t) {
        n(e, "code", visitor);
        function visitor(e) {
          var r;
          var i;
          var n;
          var o;
          if (!a(e) && e.lang && s.indexOf(e.lang) !== -1) {
            r = e.value.split("\n");
            n = r.length;
            o = -1;
            if (n <= 1) {
              return;
            }
            while (++o < n) {
              i = r[o];
              if (i.trim() && !i.match(/^\s*\$\s*/)) {
                return;
              }
            }
            t.message(u, e);
          }
        }
      }
    },
    ,
    function(e) {
      "use strict";
      e.exports = statistics;
      function statistics(e) {
        var t = { true: 0, false: 0, null: 0 };
        count(e);
        return {
          fatal: t.true,
          nonfatal: t.false + t.null,
          warn: t.false,
          info: t.null,
          total: t.true + t.false + t.null
        };
        function count(e) {
          if (e) {
            if (e[0] && e[0].messages) {
              countInAll(e);
            } else {
              countAll(e.messages || e);
            }
          }
        }
        function countInAll(e) {
          var t = e.length;
          var r = -1;
          while (++r < t) {
            count(e[r].messages);
          }
        }
        function countAll(e) {
          var r = e.length;
          var i = -1;
          var n;
          while (++i < r) {
            n = e[i].fatal;
            t[n === null || n === undefined ? null : Boolean(n)]++;
          }
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = trimTrailingLines;
      var t = "\n";
      function trimTrailingLines(e) {
        var r = String(e);
        var i = r.length;
        while (r.charAt(--i) === t) {}
        return r.slice(0, i + 1);
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = footnote;
      var t = "[";
      var r = "]";
      var i = "^";
      function footnote(e) {
        return t + i + this.all(e).join("") + r;
      }
    },
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(66);
      var n = r(589);
      var a = r(78).silent;
      var u = r(878)();
      e.exports = loadPlugin;
      loadPlugin.resolve = resolvePlugin;
      var s = process.versions.electron !== undefined;
      var o = process.argv[1] || "";
      var l = process.env.NVM_BIN;
      var f = s || o.indexOf(u) === 0;
      var c = process.platform === "win32";
      var h = c ? "" : "lib";
      var p = n.resolve(u, h, "node_modules");
      if (s && l && !i.existsSync(p)) {
        p = n.resolve(l, "..", h, "node_modules");
      }
      function loadPlugin(e, t) {
        return r(73)(resolvePlugin(e, t) || e);
      }
      function resolvePlugin(e, t) {
        var r = t || {};
        var i = r.prefix;
        var n = r.cwd;
        var u;
        var s;
        var o;
        var l;
        var c;
        var h;
        var v = "";
        if (n && typeof n === "object") {
          s = n.concat();
        } else {
          s = [n || process.cwd()];
        }
        if (e.charAt(0) !== ".") {
          if (r.global == null ? f : r.global) {
            s.push(p);
          }
          if (i) {
            i = i.charAt(i.length - 1) === "-" ? i : i + "-";
            if (e.charAt(0) === "@") {
              h = e.indexOf("/");
              if (h !== -1) {
                v = e.slice(0, h + 1);
                e = e.slice(h + 1);
              }
            }
            if (e.slice(0, i.length) !== i) {
              c = v + i + e;
            }
            e = v + e;
          }
        }
        o = s.length;
        l = -1;
        while (++l < o) {
          n = s[l];
          u = (c && a(n, c)) || a(n, e);
          if (u) {
            return u;
          }
        }
        return null;
      }
    },
    function(e) {
      e.exports = require("buffer");
    },
    ,
    ,
    function(e, t, r) {
      var i = r(942);
      var n = i.Buffer;
      function copyProps(e, t) {
        for (var r in e) {
          t[r] = e[r];
        }
      }
      if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
        e.exports = i;
      } else {
        copyProps(i, t);
        t.Buffer = SafeBuffer;
      }
      function SafeBuffer(e, t, r) {
        return n(e, t, r);
      }
      copyProps(n, SafeBuffer);
      SafeBuffer.from = function(e, t, r) {
        if (typeof e === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return n(e, t, r);
      };
      SafeBuffer.alloc = function(e, t, r) {
        if (typeof e !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var i = n(e);
        if (t !== undefined) {
          if (typeof r === "string") {
            i.fill(t, r);
          } else {
            i.fill(t);
          }
        } else {
          i.fill(0);
        }
        return i;
      };
      SafeBuffer.allocUnsafe = function(e) {
        if (typeof e !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return n(e);
      };
      SafeBuffer.allocUnsafeSlow = function(e) {
        if (typeof e !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return i.SlowBuffer(e);
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      e = r.nmd(e);
      const i = r(725);
      const n = new Map();
      for (const e of Object.keys(i)) {
        n.set(e, i[e]);
      }
      Object.defineProperty(e, "exports", {
        get() {
          return n;
        }
      });
    },
    function(e, t, r) {
      "use strict";
      var i = r(589);
      var n = r(66);
      var a = r(327);
      var u = r(96);
      var s = r(336);
      var o = r(460);
      var l = r(340);
      var f = n.readdir;
      var c = n.stat;
      var h = i.join;
      var p = i.relative;
      var v = i.resolve;
      var d = i.basename;
      var D = i.extname;
      var m = a.hasMagic;
      e.exports = find;
      function find(e, t, r) {
        expand(e, t, done);
        function done(e, t) {
          if (e) {
            r(e);
          } else {
            r(null, { oneFileMode: oneFileMode(t), files: t.output });
          }
        }
      }
      function expand(e, t, r) {
        var i = t.cwd;
        var n = [];
        var u = 0;
        var s = 0;
        var o;
        e.forEach(each);
        if (!s) {
          search(n, t, done);
        }
        function each(e) {
          if (l(e)) {
            if (m(e)) {
              s++;
              a(e, { cwd: i }, one);
            } else {
              e = p(i, v(i, e)) || ".";
              n.push(e);
            }
          } else {
            e.cwd = i;
            e.path = p(i, e.path);
            e.history = [e.path];
            n.push(e);
          }
        }
        function one(e, r) {
          if (o) {
            return;
          }
          if (e) {
            o = true;
            done(e);
          } else {
            u++;
            n = n.concat(r);
            if (u === s) {
              search(n, t, done);
            }
          }
        }
        function done(e, t) {
          if (e) {
            r(e);
          } else {
            r(null, { input: n, output: t });
          }
        }
      }
      function search(e, t, r) {
        var i = t.cwd;
        var n = t.silentlyIgnore;
        var a = t.nested;
        var l = t.extensions;
        var c = [];
        var p = 0;
        var d = 0;
        e.forEach(each);
        if (!p) {
          r(null, c);
        }
        return each;
        function each(e) {
          var m = base(e);
          if (a && (o(m) || m === "node_modules")) {
            return;
          }
          p++;
          statAndIgnore(e, t, handle);
          function handle(t, r) {
            var s = r && r.ignored;
            var o = r && r.stats && r.stats.isDirectory();
            if (s && (a || n)) {
              return one(null, []);
            }
            if (!s && o) {
              return f(v(i, filePath(e)), directory);
            }
            if (a && !o && l.length !== 0 && l.indexOf(D(e)) === -1) {
              return one(null, []);
            }
            e = u(e);
            e.cwd = i;
            if (s) {
              try {
                e.fail("Cannot process specified file: it’s ignored");
              } catch (t) {}
            }
            if (t && t.code === "ENOENT") {
              try {
                e.fail(t.syscall === "stat" ? "No such file or directory" : t);
              } catch (t) {}
            }
            one(null, [e]);
          }
          function directory(e, r) {
            var n;
            if (e) {
              n = u(filePath(n));
              n.cwd = i;
              try {
                n.fail("Cannot read directory");
              } catch (e) {}
              one(null, [n]);
            } else {
              search(r.map(concat), s(t, { nested: true }), one);
            }
          }
          function one(e, t) {
            if (t) {
              c = c.concat(t);
            }
            d++;
            if (d === p) {
              r(null, c);
            }
          }
          function concat(t) {
            return h(filePath(e), t);
          }
        }
      }
      function statAndIgnore(e, t, r) {
        var i = t.ignore;
        var n = v(t.cwd, filePath(e));
        var a = 1;
        var u = 0;
        var s;
        var o;
        if (!e.contents) {
          a++;
          c(n, handleStat);
        }
        i.check(n, handleIgnore);
        function handleStat(e, t) {
          s = t;
          one(e);
        }
        function handleIgnore(e, t) {
          o = t;
          one(e);
        }
        function one(e) {
          u++;
          if (e) {
            r(e);
            u = -1;
          } else if (u === a) {
            r(null, { stats: s, ignored: o });
          }
        }
      }
      function base(e) {
        return l(e) ? d(e) : e.basename;
      }
      function filePath(e) {
        return l(e) ? e : e.path;
      }
      function oneFileMode(e) {
        return (
          e.output.length === 1 &&
          e.input.length === 1 &&
          e.output[0].path === e.input[0]
        );
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(84);
      var n = r(535);
      function deprecated(e) {
        return function() {
          throw new Error(
            "Function " + e + " is deprecated and cannot be used."
          );
        };
      }
      e.exports.Type = r(211);
      e.exports.Schema = r(727);
      e.exports.FAILSAFE_SCHEMA = r(234);
      e.exports.JSON_SCHEMA = r(43);
      e.exports.CORE_SCHEMA = r(95);
      e.exports.DEFAULT_SAFE_SCHEMA = r(388);
      e.exports.DEFAULT_FULL_SCHEMA = r(65);
      e.exports.load = i.load;
      e.exports.loadAll = i.loadAll;
      e.exports.safeLoad = i.safeLoad;
      e.exports.safeLoadAll = i.safeLoadAll;
      e.exports.dump = n.dump;
      e.exports.safeDump = n.safeDump;
      e.exports.YAMLException = r(833);
      e.exports.MINIMAL_SCHEMA = r(234);
      e.exports.SAFE_SCHEMA = r(388);
      e.exports.DEFAULT_SCHEMA = r(65);
      e.exports.scan = deprecated("scan");
      e.exports.parse = deprecated("parse");
      e.exports.compose = deprecated("compose");
      e.exports.addConstructor = deprecated("addConstructor");
    },
    function(e) {
      "use strict";
      var t = Object.prototype.toString;
      e.exports = function(e) {
        var r;
        return (
          t.call(e) === "[object Object]" &&
          ((r = Object.getPrototypeOf(e)),
          r === null || r === Object.getPrototypeOf({}))
        );
      };
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      e.exports = Transform;
      var i = r(98);
      var n = r(683);
      n.inherits = r(780);
      n.inherits(Transform, i);
      function afterTransform(e, t) {
        var r = this._transformState;
        r.transforming = false;
        var i = r.writecb;
        if (!i) {
          return this.emit(
            "error",
            new Error("write callback called multiple times")
          );
        }
        r.writechunk = null;
        r.writecb = null;
        if (t != null) this.push(t);
        i(e);
        var n = this._readableState;
        n.reading = false;
        if (n.needReadable || n.length < n.highWaterMark) {
          this._read(n.highWaterMark);
        }
      }
      function Transform(e) {
        if (!(this instanceof Transform)) return new Transform(e);
        i.call(this, e);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (e) {
          if (typeof e.transform === "function") this._transform = e.transform;
          if (typeof e.flush === "function") this._flush = e.flush;
        }
        this.on("prefinish", prefinish);
      }
      function prefinish() {
        var e = this;
        if (typeof this._flush === "function") {
          this._flush(function(t, r) {
            done(e, t, r);
          });
        } else {
          done(this, null, null);
        }
      }
      Transform.prototype.push = function(e, t) {
        this._transformState.needTransform = false;
        return i.prototype.push.call(this, e, t);
      };
      Transform.prototype._transform = function(e, t, r) {
        throw new Error("_transform() is not implemented");
      };
      Transform.prototype._write = function(e, t, r) {
        var i = this._transformState;
        i.writecb = r;
        i.writechunk = e;
        i.writeencoding = t;
        if (!i.transforming) {
          var n = this._readableState;
          if (i.needTransform || n.needReadable || n.length < n.highWaterMark)
            this._read(n.highWaterMark);
        }
      };
      Transform.prototype._read = function(e) {
        var t = this._transformState;
        if (t.writechunk !== null && t.writecb && !t.transforming) {
          t.transforming = true;
          this._transform(t.writechunk, t.writeencoding, t.afterTransform);
        } else {
          t.needTransform = true;
        }
      };
      Transform.prototype._destroy = function(e, t) {
        var r = this;
        i.prototype._destroy.call(this, e, function(e) {
          t(e);
          r.emit("close");
        });
      };
      function done(e, t, r) {
        if (t) return e.emit("error", t);
        if (r != null) e.push(r);
        if (e._writableState.length)
          throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming)
          throw new Error("Calling transform done when still transforming");
        return e.push(null);
      }
    },
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = tableCell;
      function tableCell(e) {
        return this.all(e).join("");
      }
    },
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(934);
      e.exports = fencedCode;
      var n = "\n";
      var a = "\t";
      var u = " ";
      var s = "~";
      var o = "`";
      var l = 3;
      var f = 4;
      function fencedCode(e, t, r) {
        var c = this;
        var h = c.options.gfm;
        var p = t.length + 1;
        var v = 0;
        var d = "";
        var D;
        var m;
        var g;
        var E;
        var A;
        var C;
        var y;
        var w;
        var x;
        var b;
        var F;
        var S;
        var B;
        if (!h) {
          return;
        }
        while (v < p) {
          g = t.charAt(v);
          if (g !== u && g !== a) {
            break;
          }
          d += g;
          v++;
        }
        S = v;
        g = t.charAt(v);
        if (g !== s && g !== o) {
          return;
        }
        v++;
        m = g;
        D = 1;
        d += g;
        while (v < p) {
          g = t.charAt(v);
          if (g !== m) {
            break;
          }
          d += g;
          D++;
          v++;
        }
        if (D < l) {
          return;
        }
        while (v < p) {
          g = t.charAt(v);
          if (g !== u && g !== a) {
            break;
          }
          d += g;
          v++;
        }
        E = "";
        y = "";
        while (v < p) {
          g = t.charAt(v);
          if (g === n || g === s || g === o) {
            break;
          }
          if (g === u || g === a) {
            y += g;
          } else {
            E += y + g;
            y = "";
          }
          v++;
        }
        g = t.charAt(v);
        if (g && g !== n) {
          return;
        }
        if (r) {
          return true;
        }
        B = e.now();
        B.column += d.length;
        B.offset += d.length;
        d += E;
        E = c.decode.raw(c.unescape(E), B);
        if (y) {
          d += y;
        }
        y = "";
        b = "";
        F = "";
        w = "";
        x = "";
        while (v < p) {
          g = t.charAt(v);
          w += b;
          x += F;
          b = "";
          F = "";
          if (g !== n) {
            w += g;
            F += g;
            v++;
            continue;
          }
          if (w) {
            b += g;
            F += g;
          } else {
            d += g;
          }
          y = "";
          v++;
          while (v < p) {
            g = t.charAt(v);
            if (g !== u) {
              break;
            }
            y += g;
            v++;
          }
          b += y;
          F += y.slice(S);
          if (y.length >= f) {
            continue;
          }
          y = "";
          while (v < p) {
            g = t.charAt(v);
            if (g !== m) {
              break;
            }
            y += g;
            v++;
          }
          b += y;
          F += y;
          if (y.length < D) {
            continue;
          }
          y = "";
          while (v < p) {
            g = t.charAt(v);
            if (g !== u && g !== a) {
              break;
            }
            b += g;
            F += g;
            v++;
          }
          if (!g || g === n) {
            break;
          }
        }
        d += w + b;
        v = -1;
        p = E.length;
        while (++v < p) {
          g = E.charAt(v);
          if (g === u || g === a) {
            if (!A) {
              A = E.slice(0, v);
            }
          } else if (A) {
            C = E.slice(v);
            break;
          }
        }
        return e(d)({
          type: "code",
          lang: A || E || null,
          meta: C || null,
          value: i(x)
        });
      }
    },
    function(e, t, r) {
      "use strict";
      var i = r(636);
      var n = r(814);
      e.exports = inlineCode;
      var a = " ";
      var u = "`";
      function inlineCode(e) {
        var t = e.value;
        var r = n(u, i(t, u) + 1);
        var s = r;
        var o = r;
        if (t.charAt(0) === u) {
          s += a;
        }
        if (t.charAt(t.length - 1) === u) {
          o = a + o;
        }
        return s + t + o;
      }
    },
    ,
    ,
    ,
    function(e) {
      "use strict";
      function posix(e) {
        return e.charAt(0) === "/";
      }
      function win32(e) {
        var t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
        var r = t.exec(e);
        var i = r[1] || "";
        var n = Boolean(i && i.charAt(1) !== ":");
        return Boolean(r[2] || n);
      }
      e.exports = process.platform === "win32" ? win32 : posix;
      e.exports.posix = posix;
      e.exports.win32 = win32;
    },
    function(e, t, r) {
      "use strict";
      var i = r(885);
      var n = r(64);
      t.init = init;
      t.log = log;
      t.formatArgs = formatArgs;
      t.save = save;
      t.load = load;
      t.useColors = useColors;
      t.colors = [6, 2, 3, 4, 5, 1];
      try {
        var a = r(101);
        if (a && (a.stderr || a).level >= 2) {
          t.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
          ];
        }
      } catch (e) {}
      t.inspectOpts = Object.keys(process.env)
        .filter(function(e) {
          return /^debug_/i.test(e);
        })
        .reduce(function(e, t) {
          var r = t
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, function(e, t) {
              return t.toUpperCase();
            });
          var i = process.env[t];
          if (/^(yes|on|true|enabled)$/i.test(i)) {
            i = true;
          } else if (/^(no|off|false|disabled)$/i.test(i)) {
            i = false;
          } else if (i === "null") {
            i = null;
          } else {
            i = Number(i);
          }
          e[r] = i;
          return e;
        }, {});
      function useColors() {
        return "colors" in t.inspectOpts
          ? Boolean(t.inspectOpts.colors)
          : i.isatty(process.stderr.fd);
      }
      function formatArgs(t) {
        var r = this.namespace,
          i = this.useColors;
        if (i) {
          var n = this.color;
          var a = "[3" + (n < 8 ? n : "8;5;" + n);
          var u = "  ".concat(a, ";1m").concat(r, " [0m");
          t[0] = u + t[0].split("\n").join("\n" + u);
          t.push(a + "m+" + e.exports.humanize(this.diff) + "[0m");
        } else {
          t[0] = getDate() + r + " " + t[0];
        }
      }
      function getDate() {
        if (t.inspectOpts.hideDate) {
          return "";
        }
        return new Date().toISOString() + " ";
      }
      function log() {
        return process.stderr.write(n.format.apply(n, arguments) + "\n");
      }
      function save(e) {
        if (e) {
          process.env.DEBUG = e;
        } else {
          delete process.env.DEBUG;
        }
      }
      function load() {
        return process.env.DEBUG;
      }
      function init(e) {
        e.inspectOpts = {};
        var r = Object.keys(t.inspectOpts);
        for (var i = 0; i < r.length; i++) {
          e.inspectOpts[r[i]] = t.inspectOpts[r[i]];
        }
      }
      e.exports = r(772)(t);
      var u = e.exports.formatters;
      u.o = function(e) {
        this.inspectOpts.colors = this.useColors;
        return n.inspect(e, this.inspectOpts).replace(/\s*\n\s*/g, " ");
      };
      u.O = function(e) {
        this.inspectOpts.colors = this.useColors;
        return n.inspect(e, this.inspectOpts);
      };
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(12);
      function destroy(e, t) {
        var r = this;
        var n = this._readableState && this._readableState.destroyed;
        var a = this._writableState && this._writableState.destroyed;
        if (n || a) {
          if (t) {
            t(e);
          } else if (
            e &&
            (!this._writableState || !this._writableState.errorEmitted)
          ) {
            i.nextTick(emitErrorNT, this, e);
          }
          return this;
        }
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(e || null, function(e) {
          if (!t && e) {
            i.nextTick(emitErrorNT, r, e);
            if (r._writableState) {
              r._writableState.errorEmitted = true;
            }
          } else if (t) {
            t(e);
          }
        });
        return this;
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }
      function emitErrorNT(e, t) {
        e.emit("error", t);
      }
      e.exports = { destroy: destroy, undestroy: undestroy };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
      "use strict";
      var i = r(260);
      var n = r(211);
      function isHexCode(e) {
        return (
          (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102)
        );
      }
      function isOctCode(e) {
        return 48 <= e && e <= 55;
      }
      function isDecCode(e) {
        return 48 <= e && e <= 57;
      }
      function resolveYamlInteger(e) {
        if (e === null) return false;
        var t = e.length,
          r = 0,
          i = false,
          n;
        if (!t) return false;
        n = e[r];
        if (n === "-" || n === "+") {
          n = e[++r];
        }
        if (n === "0") {
          if (r + 1 === t) return true;
          n = e[++r];
          if (n === "b") {
            r++;
            for (; r < t; r++) {
              n = e[r];
              if (n === "_") continue;
              if (n !== "0" && n !== "1") return false;
              i = true;
            }
            return i && n !== "_";
          }
          if (n === "x") {
            r++;
            for (; r < t; r++) {
              n = e[r];
              if (n === "_") continue;
              if (!isHexCode(e.charCodeAt(r))) return false;
              i = true;
            }
            return i && n !== "_";
          }
          for (; r < t; r++) {
            n = e[r];
            if (n === "_") continue;
            if (!isOctCode(e.charCodeAt(r))) return false;
            i = true;
          }
          return i && n !== "_";
        }
        if (n === "_") return false;
        for (; r < t; r++) {
          n = e[r];
          if (n === "_") continue;
          if (n === ":") break;
          if (!isDecCode(e.charCodeAt(r))) {
            return false;
          }
          i = true;
        }
        if (!i || n === "_") return false;
        if (n !== ":") return true;
        return /^(:[0-5]?[0-9])+$/.test(e.slice(r));
      }
      function constructYamlInteger(e) {
        var t = e,
          r = 1,
          i,
          n,
          a = [];
        if (t.indexOf("_") !== -1) {
          t = t.replace(/_/g, "");
        }
        i = t[0];
        if (i === "-" || i === "+") {
          if (i === "-") r = -1;
          t = t.slice(1);
          i = t[0];
        }
        if (t === "0") return 0;
        if (i === "0") {
          if (t[1] === "b") return r * parseInt(t.slice(2), 2);
          if (t[1] === "x") return r * parseInt(t, 16);
          return r * parseInt(t, 8);
        }
        if (t.indexOf(":") !== -1) {
          t.split(":").forEach(function(e) {
            a.unshift(parseInt(e, 10));
          });
          t = 0;
          n = 1;
          a.forEach(function(e) {
            t += e * n;
            n *= 60;
          });
          return r * t;
        }
        return r * parseInt(t, 10);
      }
      function isInteger(e) {
        return (
          Object.prototype.toString.call(e) === "[object Number]" &&
          (e % 1 === 0 && !i.isNegativeZero(e))
        );
      }
      e.exports = new n("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
          binary: function(e) {
            return e >= 0
              ? "0b" + e.toString(2)
              : "-0b" + e.toString(2).slice(1);
          },
          octal: function(e) {
            return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
          },
          decimal: function(e) {
            return e.toString(10);
          },
          hexadecimal: function(e) {
            return e >= 0
              ? "0x" + e.toString(16).toUpperCase()
              : "-0x" +
                  e
                    .toString(16)
                    .toUpperCase()
                    .slice(1);
          }
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"]
        }
      });
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        var r = e.indexOf("[", t);
        var i = e.indexOf("![", t);
        if (i === -1) {
          return r;
        }
        return r < i ? r : i;
      }
    },
    ,
    function(e, t, r) {
      "use strict";
      var i = r(577);
      var n = r(873);
      var a = r(336);
      e.exports = messageControl;
      function messageControl(e) {
        return i(a({ marker: n, test: "html" }, e));
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e) {
      "use strict";
      e.exports = locate;
      function locate(e, t) {
        return e.indexOf("\\", t);
      }
    },
    ,
    ,
    function(e) {
      "use strict";
      e.exports = list;
      function list(e) {
        var t = e.ordered ? this.visitOrderedItems : this.visitUnorderedItems;
        return t.call(this, e);
      }
    }
  ],
  function(e) {
    "use strict";
    !(function() {
      e.nmd = function(e) {
        e.paths = [];
        if (!e.children) e.children = [];
        Object.defineProperty(e, "loaded", {
          enumerable: true,
          get: function() {
            return e.l;
          }
        });
        Object.defineProperty(e, "id", {
          enumerable: true,
          get: function() {
            return e.i;
          }
        });
        return e;
      };
    })();
  }
);
