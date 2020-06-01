function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/games/connect-four/connect-four.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/connect-four/connect-four.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGamesConnectFourConnectFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"game-board\">\n\t<div class=\"column\" id=\"column-0\" data-x=\"0\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\"  id=\"column-1\" data-x=\"1\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\" id=\"column-2\" data-x=\"2\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\" id=\"column-3\" data-x=\"3\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\" id=\"column-4\" data-x=\"4\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\" id=\"column-5\" data-x=\"5\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n\t<div class=\"column\" id=\"column-6\" data-x=\"6\">\n\t\t<svg height=\"100\" width=\"100\" class=\"row-5\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-4\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-3\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-2\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-1\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t\t<svg height=\"100\" width=\"100\" class=\"row-0\">\n\t\t  <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#0B4E72\" stroke-width=\"3\" class=\"free\" />\n\t\t</svg> \n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/games/tictactoe/tictactoe.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/tictactoe/tictactoe.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGamesTictactoeTictactoeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table>\n  <tr>\n    <td class=\"space\" data-x=\"0\">\n      <!-- <svg class=\"heart\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"\n        viewBox=\"0 0 1280.000000 1280.000000\" preserveAspectRatio=\"xMidYMid meet\">\n        <metadata>\n          Created by potrace 1.15, written by Peter Selinger 2001-2017\n        </metadata>\n        <g transform=\"translate(0.000000,1280.000000) scale(0.100000,-0.100000)\" fill=\"#FF0000\" stroke=\"none\">\n          <path d=\"M3240 12690 c-837 -49 -1545 -357 -2134 -930 -582 -565 -911 -1286\n-987 -2158 -18 -206 -7 -716 20 -917 94 -705 332 -1346 718 -1935 143 -217\n211 -307 388 -510 287 -330 945 -1093 1454 -1685 191 -223 289 -359 441 -610\n348 -578 558 -1206 637 -1905 22 -196 25 -819 5 -1040 -17 -187 -47 -432 -73\n-590 -27 -169 -27 -199 1 -222 31 -25 48 -23 147 17 48 19 95 35 104 35 26 0\n398 189 764 387 1642 891 2981 1774 4215 2782 704 575 1381 1225 1881 1807\n201 234 253 298 446 555 722 959 1173 1933 1332 2879 74 441 87 905 35 1260\n-101 689 -400 1271 -914 1779 -586 579 -1274 908 -2075 992 -143 15 -518 15\n-670 -1 -550 -54 -1056 -247 -1473 -562 -397 -299 -707 -667 -1011 -1198 -40\n-69 -75 -126 -79 -127 -4 -2 -20 32 -36 75 -145 392 -446 796 -806 1084 -663\n529 -1479 788 -2330 738z m1745 -2125 c204 -29 399 -105 595 -233 208 -135\n397 -326 518 -524 86 -141 154 -294 193 -438 33 -124 47 -156 75 -169 54 -24\n70 -4 199 249 168 329 291 507 478 692 206 204 429 334 685 400 217 56 519 49\n744 -16 250 -73 457 -198 672 -406 339 -328 552 -727 630 -1177 59 -341 43\n-831 -40 -1243 -88 -442 -259 -903 -501 -1353 -698 -1300 -2049 -2657 -3816\n-3836 -318 -212 -444 -287 -422 -251 17 27 37 324 42 610 4 252 2 349 -12 485\n-48 495 -163 915 -364 1340 -116 243 -168 323 -925 1395 -272 386 -324 468\n-421 665 -226 461 -337 920 -352 1460 -18 665 129 1207 441 1623 117 156 186\n231 305 335 177 152 372 268 561 330 75 25 245 63 310 70 91 10 315 5 405 -8z\" />\n        </g>\n      </svg> -->\n      {{board.g[0]}}\n    </td>\n    <td class=\"space vert\" data-x=\"1\">{{board.g[1]}}</td>\n    <td class=\"space\" data-x=\"2\">\n      {{board.g[2]}}\n    </td>\n  </tr>\n  <tr>\n    <td class=\"space hori\" data-x=\"3\">{{board.g[3]}}</td>\n    <td class=\"space vert hori\" data-x=\"4\">\n      {{board.g[4]}}\n      <!-- <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\"\n        viewBox=\"0 0 1280.000000 640.000000\" preserveAspectRatio=\"xMidYMid meet\">\n        <metadata>\n          Created by potrace 1.15, written by Peter Selinger 2001-2017\n        </metadata>\n        <g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\" fill=\"#000000\" stroke=\"none\">\n          <path d=\"M5210 6235 l-65 -66 125 -119 c69 -65 128 -119 132 -119 3 -1 62 53\n130 118 l123 119 -65 66 c-35 36 -69 66 -74 66 -6 0 -34 -23 -63 -52 l-53 -52\n-53 52 c-29 29 -57 52 -63 52 -5 0 -39 -29 -74 -65z\" />\n          <path d=\"M8955 5354 l-70 -65 128 -126 128 -127 126 126 126 126 -69 65 -68\n65 -59 -51 -58 -51 -52 52 c-29 29 -55 52 -57 52 -3 -1 -36 -30 -75 -66z\" />\n          <path d=\"M5555 5044 c-119 -21 -262 -68 -375 -125 -136 -68 -272 -175 -645\n-509 -678 -607 -974 -818 -1323 -940 l-124 -43 52 -31 c311 -183 601 -390 875\n-625 55 -47 271 -255 480 -461 209 -207 431 -418 493 -468 420 -341 807 -490\n1322 -509 559 -20 1029 134 1461 481 150 120 322 282 535 503 221 228 367 367\n551 519 227 190 520 398 736 523 59 35 107 64 107 66 0 1 -60 24 -132 50 -240\n85 -437 204 -740 447 -149 119 -280 232 -767 661 -279 246 -399 328 -568 390\n-181 67 -258 81 -443 81 -143 1 -176 -2 -245 -22 -144 -41 -291 -131 -370\n-225 l-35 -42 -78 75 c-120 115 -235 174 -400 206 -92 17 -261 17 -367 -2z\" />\n          <path d=\"M3320 2075 l-65 -65 90 -91 c50 -50 107 -104 128 -121 l37 -30 125\n118 c69 64 125 120 125 123 0 4 -32 35 -71 70 l-71 64 -54 -54 -54 -53 -53 52\nc-29 29 -57 52 -63 52 -5 0 -39 -29 -74 -65z\" />\n          <path d=\"M6640 404 l-65 -65 125 -119 c69 -66 128 -119 131 -120 3 0 62 54\n130 119 l124 119 -65 66 c-35 36 -69 66 -74 66 -6 0 -34 -23 -63 -52 l-53 -52\n-53 52 c-29 29 -57 52 -63 52 -5 0 -39 -30 -74 -66z\" />\n        </g>\n      </svg> -->\n    </td>\n    <td class=\"space hori\" data-x=\"5\">{{board.g[5]}}</td>\n  </tr>\n  <tr>\n    <td class=\"space\" data-x=\"6\">{{board.g[6]}}</td>\n    <td class=\"space vert\" data-x=\"7\">{{board.g[7]}}</td>\n    <td class=\"space\" data-x=\"8\">{{board.g[8]}}</td>\n  </tr>\n</table>";
    /***/
  },

  /***/
  "./src/app/games/connect-four/connect-four.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/games/connect-four/connect-four.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGamesConnectFourConnectFourComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  border: 0;\n  padding: 0;\n}\n\n#game-board {\n  background: #0074B3;\n  width: 730px;\n  cursor: pointer;\n}\n\n.column {\n  width: 100px;\n  display: inline-block;\n}\n\n.column:hover circle.free {\n  fill: #D5E4ED;\n}\n\ncircle.free {\n  fill: #fff;\n}\n\ncircle.red {\n  fill: #D50000;\n}\n\ncircle.yellow {\n  fill: #DAD400;\n}\n\n.space {\n  width: 50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvZ2l0L25hdGFzaGEtZ2FtZXMvc3JjL2FwcC9nYW1lcy9jb25uZWN0LWZvdXIvY29ubmVjdC1mb3VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lcy9jb25uZWN0LWZvdXIvY29ubmVjdC1mb3VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvY29ubmVjdC1mb3VyL2Nvbm5lY3QtZm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRib3JkZXI6IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbiNnYW1lLWJvYXJkIHtcblx0YmFja2dyb3VuZDogIzAwNzRCMztcblx0d2lkdGg6IDczMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2x1bW4ge1xuXHR3aWR0aDogMTAwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbHVtbjpob3ZlciAgY2lyY2xlLmZyZWV7XG5cdGZpbGw6ICNENUU0RUQ7XG59XG5cbmNpcmNsZS5mcmVlIHtcblx0ZmlsbDogI2ZmZjtcbn1cblxuY2lyY2xlLnJlZCB7XG5cdGZpbGw6ICNENTAwMDA7XG59XG5cbmNpcmNsZS55ZWxsb3cge1xuXHRmaWxsOiAjREFENDAwO1xufVxuXG4uc3BhY2Uge1xuXHR3aWR0aDogNTA7XG59XG4iLCIqIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZ2FtZS1ib2FyZCB7XG4gIGJhY2tncm91bmQ6ICMwMDc0QjM7XG4gIHdpZHRoOiA3MzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sdW1uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb2x1bW46aG92ZXIgY2lyY2xlLmZyZWUge1xuICBmaWxsOiAjRDVFNEVEO1xufVxuXG5jaXJjbGUuZnJlZSB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbmNpcmNsZS5yZWQge1xuICBmaWxsOiAjRDUwMDAwO1xufVxuXG5jaXJjbGUueWVsbG93IHtcbiAgZmlsbDogI0RBRDQwMDtcbn1cblxuLnNwYWNlIHtcbiAgd2lkdGg6IDUwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/games/connect-four/connect-four.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/games/connect-four/connect-four.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConnectFourComponent */

  /***/
  function srcAppGamesConnectFourConnectFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectFourComponent", function () {
      return ConnectFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // https://codepen.io/r00k/pen/pvRaGq?__cf_chl_jschl_tk__=61bf02b92c339ee32466ede5c22cc40b9e980346-1590366555-0-AYWNd_7N_LyHoYU2gYVxp7mEiAZk3VgCFA2BYGGxicZli55Q3nr4P8Baj9jTe9ZDQyfFSaafCsFHsfqFfl5xZFPXGwL0o9V5MEC7iCwn-q3hEocoWnrO0zZCXgJ-ABNdtg4sIj5ToVgc8hgPeRZpq5JA5eIwFFkjdPLVJf85Ek4JWXe5RZJ5IUEL1e11cIZA9coFheXck76pboqltJXUBE8ZFr_ZJVw32ezjH7_fA0nwBjuXzQM5vu6_gXXEafmJ5VO_rWNjMn_W5wV1vMdu8OQODEec_qxSuuWx2O2wfiy1D5o_0hTlhh-ioTPyMD_QbfDDWlB03DfxjJWI6yo6Ce_k-d5UsYOQLVNsHxA8Dvu5


    var ConnectFourComponent = /*#__PURE__*/function () {
      function ConnectFourComponent() {
        _classCallCheck(this, ConnectFourComponent);

        this.gameBoard = {};
        this.currentPlayer = 'red';
        this.numRows = 6;
        this.numCols = 7;
        this.numTurns = 0;
      }

      _createClass(ConnectFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var columns = document.querySelectorAll('.column');
          var that = this;
          Array.prototype.forEach.call(columns, function (col) {
            col.addEventListener('click', function () {
              that.markNextFree(col.getAttribute('data-x'), that);
            });
          });

          for (var x = 0; x <= that.numRows; x++) {
            that.gameBoard[x] = {};

            for (var y = 0; y <= that.numCols; y++) {
              that.gameBoard[x][y] = 'free';
            }
          }
        }
      }, {
        key: "markNextFree",
        value: function markNextFree(x, that) {
          var nextY;
          nextY = false;

          for (var y = 0; y < that.numRows; y++) {
            if (that.gameBoard[x][y] === 'free') {
              nextY = y;
              break;
            }
          }

          if (nextY === false) {
            alert('No free spaces in this column. Try another.');
            return false;
          }

          that.gameBoard[x][nextY] = that.currentPlayer;
          document.querySelector('#column-' + x + ' .row-' + nextY + ' circle').setAttribute('class', that.currentPlayer);
          that.numTurns = that.numTurns + 1;

          if (that.isWinner(parseInt(x), nextY, that)) {
            alert(that.currentPlayer + ' wins!'); //that.clearBoard(that);
          } else if (that.numTurns >= that.numRows * that.numCols) {
            alert('It\'s a tie!'); //that.clearBoard(that);
          }

          that.currentPlayer = that.currentPlayer === 'red' ? 'yellow' : 'red';
        }
      }, {
        key: "clearBoard",
        value: function clearBoard(that) {
          Array.prototype.forEach.call(document.querySelectorAll('circle'), function (piece) {
            piece.setAttribute('class', 'free');
          });
          that.gameBoard = {};

          for (var x = 0; x <= that.numRows; x++) {
            that.gameBoard[x] = {};

            for (var y = 0; y <= that.numCols; y++) {
              that.gameBoard[x][y] = 'free';
            }

            console.log(that.gameBoard);
          }

          that.numTurns = 0;
          return that.gameBoard;
        }
      }, {
        key: "isWinner",
        value: function isWinner(currentX, currentY, that) {
          return that.checkDirection(currentX, currentY, 'vertical', that) || that.checkDirection(currentX, currentY, 'diagonal', that) || that.checkDirection(currentX, currentY, 'horizontal', that);
        }
      }, {
        key: "isBounds",
        value: function isBounds(x, y, that) {
          return that.gameBoard.hasOwnProperty(x) && typeof that.gameBoard[x][y] !== 'undefined';
        }
      }, {
        key: "checkDirection",
        value: function checkDirection(currentX, currentY, direction, that) {
          var chainLength, directions;
          directions = {
            horizontal: [[0, -1], [0, 1]],
            vertical: [[-1, 0], [1, 0]],
            diagonal: [[-1, -1], [1, 1], [-1, 1], [1, -1]]
          };
          chainLength = 1;
          directions[direction].forEach(function (coords) {
            var i = 1;

            while (that.isBounds(currentX + coords[0] * i, currentY + coords[1] * i, that) && that.gameBoard[currentX + coords[0] * i][currentY + coords[1] * i] === that.currentPlayer) {
              chainLength = chainLength + 1;
              i = i + 1;
            }

            ;
          });
          return chainLength >= 4;
        }
      }]);

      return ConnectFourComponent;
    }();

    ConnectFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connect-four',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./connect-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/games/connect-four/connect-four.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./connect-four.component.scss */
      "./src/app/games/connect-four/connect-four.component.scss"))["default"]]
    })], ConnectFourComponent);
    /***/
  },

  /***/
  "./src/app/games/games-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/games/games-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: GamesRoutingModule */

  /***/
  function srcAppGamesGamesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesRoutingModule", function () {
      return GamesRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tictactoe/tictactoe.component */
    "./src/app/games/tictactoe/tictactoe.component.ts");
    /* harmony import */


    var _connect_four_connect_four_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./connect-four/connect-four.component */
    "./src/app/games/connect-four/connect-four.component.ts");

    var routes = [{
      path: '',
      component: _tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_1__["TictactoeComponent"]
    }, {
      path: 'games/TicTacToe',
      component: _tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_1__["TictactoeComponent"]
    }, {
      path: 'games/ConnectFour',
      component: _connect_four_connect_four_component__WEBPACK_IMPORTED_MODULE_2__["ConnectFourComponent"]
    }]; // @NgModule({
    //   imports: [RouterModule.forChild(routes)],
    //   exports: [RouterModule],
    // })

    var GamesRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
    /***/

  },

  /***/
  "./src/app/games/games.module.ts":
  /*!***************************************!*\
    !*** ./src/app/games/games.module.ts ***!
    \***************************************/

  /*! exports provided: GamesModule */

  /***/
  function srcAppGamesGamesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesModule", function () {
      return GamesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tictactoe/tictactoe.component */
    "./src/app/games/tictactoe/tictactoe.component.ts");
    /* harmony import */


    var _connect_four_connect_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./connect-four/connect-four.component */
    "./src/app/games/connect-four/connect-four.component.ts");
    /* harmony import */


    var _games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./games-routing.module */
    "./src/app/games/games-routing.module.ts");

    var GamesModule = function GamesModule() {
      _classCallCheck(this, GamesModule);
    };

    GamesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tictactoe_tictactoe_component__WEBPACK_IMPORTED_MODULE_3__["TictactoeComponent"], _connect_four_connect_four_component__WEBPACK_IMPORTED_MODULE_4__["ConnectFourComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _games_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamesRoutingModule"]]
    })], GamesModule);
    /***/
  },

  /***/
  "./src/app/games/tictactoe/tictactoe.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/games/tictactoe/tictactoe.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGamesTictactoeTictactoeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n}\n\ntd {\n  width: 100px;\n  height: 100px;\n}\n\ntable {\n  margin: 5px auto;\n}\n\n.vert {\n  border-left: 2px solid black;\n  border-right: 2px solid black;\n}\n\n.hori {\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n}\n\nsvg.heart {\n  background-size: 20px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pa2UvZ2l0L25hdGFzaGEtZ2FtZXMvc3JjL2FwcC9nYW1lcy90aWN0YWN0b2UvdGljdGFjdG9lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lcy90aWN0YWN0b2UvdGljdGFjdG9lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtBQ0dKOztBRERFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0lKOztBREZFO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQ0tKOztBREZFO0VBQ0UsMEJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3RpY3RhY3RvZS90aWN0YWN0b2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuICAudmVydCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuICAuaG9yaSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIHN2Zy5oZWFydCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDMwcHg7XG4gIH0iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbnRhYmxlIHtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cblxuLnZlcnQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmhvcmkge1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuc3ZnLmhlYXJ0IHtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/games/tictactoe/tictactoe.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/games/tictactoe/tictactoe.component.ts ***!
    \********************************************************/

  /*! exports provided: TictactoeComponent */

  /***/
  function srcAppGamesTictactoeTictactoeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TictactoeComponent", function () {
      return TictactoeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    ;

    var TictactoeComponent = /*#__PURE__*/function () {
      function TictactoeComponent(firestore) {
        var _this = this;

        _classCallCheck(this, TictactoeComponent);

        this.board = {
          g: []
        };
        this.currentPlayer = 'X';
        this.numRows = 2;
        this.numCols = 2;
        this.numTurns = 0;
        this.ignore_msg = false;
        firestore.doc('alerts/1').valueChanges().subscribe(function (alert) {
          if (!_this.ignore_msg) {
            _this.ignore_msg = false;
            alert(alert);
          }
        });
        this.boardDocument = firestore.doc('boards/1');
        this.boardDocument.valueChanges().subscribe(function (board) {
          _this.board = board;
        });
      }

      _createClass(TictactoeComponent, [{
        key: "update",
        value: function update() {
          this.boardDocument.update(this.board)["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var spaces, that, gi, x, y;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // await this.boardDocument.valueChanges().toPromise().then( board => {
                    //   this.board = board;
                    // })
                    spaces = document.querySelectorAll('.space');
                    that = this;
                    Array.prototype.forEach.call(spaces, function (space) {
                      space.addEventListener('click', function () {
                        that.markNextFree(space.getAttribute('data-x'), that);
                      });
                    });
                    that.board.g = [];
                    ;
                    gi = 0;
                    that.gameBoard = {};

                    for (x = 0; x <= that.numRows; x++) {
                      that.gameBoard[x] = {};

                      for (y = 0; y <= that.numCols; y++) {
                        that.board.g[gi++] = '';
                        that.gameBoard[x][y] = '';
                      }
                    }

                    delete that.board.msg;
                    that.update();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "markNextFree",
        value: function markNextFree(d, that) {
          var xx = Math.floor(d / 3);
          var yy = d % 3;
          var nextY;
          nextY = false; // for (var y = 0; y < that.numRows; y++) {
          //   if (that.gameBoard[x][y] === 'free') {
          //     nextY = y;
          //     break;
          //   }
          // }

          if (that.board.g[d] !== '') {
            alert('Try another.');
            return false;
          }

          that.gameBoard[xx][yy] = that.currentPlayer;
          that.board.g[d] = that.currentPlayer;
          that.update(); // document.querySelector('#column-' + x + ' .row-' + nextY + ' circle').setAttribute(
          //   'class', that.currentPlayer
          // );

          that.numTurns = that.numTurns + 1;

          if (that.isWinner(that)) {
            this.ignore_msg = true;
            alert(that.currentPlayer + ' wins!');
            that.clearBoard(that);
            that.board.msg = that.currentPlayer + ' wins!';
            that.update();
          } else if (that.numTurns >= (that.numRows + 1) * (that.numCols + 1)) {
            this.ignore_msg = true;
            alert('It\'s a tie!');
            that.clearBoard(that);
            that.board.msg = 'It\'s a tie!';
            that.update();
          }

          that.currentPlayer = that.currentPlayer === 'X' ? 'O' : 'X';
        }
      }, {
        key: "clearBoard",
        value: function clearBoard(that) {
          that.board.g = [];
          var gi = 0;
          that.gameBoard = {};

          for (var x = 0; x <= that.numRows; x++) {
            that.gameBoard[x] = {};

            for (var y = 0; y <= that.numCols; y++) {
              that.board.g[gi++] = '';
              that.gameBoard[x][y] = '';
            }

            console.log(that.gameBoard);
          }

          that.numTurns = 0;
          this.update();
          return that.gameBoard;
        }
      }, {
        key: "isWinner",
        value: function isWinner(that) {
          if (that.board.g[0] === that.currentPlayer && that.board.g[1] === that.currentPlayer && that.board.g[2] === that.currentPlayer || that.board.g[3] === that.currentPlayer && that.board.g[4] === that.currentPlayer && that.board.g[5] === that.currentPlayer || that.board.g[6] === that.currentPlayer && that.board.g[7] === that.currentPlayer && that.board.g[8] === that.currentPlayer || that.board.g[0] === that.currentPlayer && that.board.g[3] === that.currentPlayer && that.board.g[6] === that.currentPlayer || that.board.g[1] === that.currentPlayer && that.board.g[4] === that.currentPlayer && that.board.g[7] === that.currentPlayer || that.board.g[2] === that.currentPlayer && that.board.g[5] === that.currentPlayer && that.board.g[8] === that.currentPlayer || that.board.g[0] === that.currentPlayer && that.board.g[4] === that.currentPlayer && that.board.g[8] === that.currentPlayer || that.board.g[2] === that.currentPlayer && that.board.g[4] === that.currentPlayer && that.board.g[6] === that.currentPlayer) {
            return true;
          }
        }
      }]);

      return TictactoeComponent;
    }();

    TictactoeComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    TictactoeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tictactoe',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tictactoe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/games/tictactoe/tictactoe.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tictactoe.component.scss */
      "./src/app/games/tictactoe/tictactoe.component.scss"))["default"]]
    })], TictactoeComponent);
    /***/
  }
}]);
//# sourceMappingURL=games-games-module-es5.js.map