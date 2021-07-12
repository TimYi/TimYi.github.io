(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/group/index.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ytm/git/Gottingen/rubenlab.org/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/ytm/git/Gottingen/rubenlab.org/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-5-2!/home/ytm/git/Gottingen/rubenlab.org/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-5-3!./app/group/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".plain-markdown p {\n  margin-bottom: 0;\n}\n\n.first-p-inline p:nth-child(1) {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKOztBQUtFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6ImluZGV4LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhaW4tbWFya2Rvd24ge1xuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5maXJzdC1wLWlubGluZSB7XG4gIHA6bnRoLWNoaWxkKDEpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn0iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************!*\
  !*** /home/ytm/git/Gottingen/rubenlab.org/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_ScrollRestoration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScrollRestoration */ "./app/components/ScrollRestoration.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./app/home/index.tsx");
/* harmony import */ var _publications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publications */ "./app/publications/index.tsx");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group */ "./app/group/index.tsx");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ "./app/contact/index.tsx");
/* harmony import */ var _assets_scripps_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/scripps-logo.png */ "./assets/scripps-logo.png");
/* harmony import */ var _assets_scripps_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scripps_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/app/app.tsx";










class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.listenToScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      this.setState({
        scrolled: winScroll
      });
    };

    this.state = {
      scrolled: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const {
      scrolled
    } = this.state;
    const windowWidth = window.innerWidth;
    const whiteNav = scrolled && scrolled > 82 || windowWidth < 992;
    const atTop = !scrolled;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_ScrollRestoration__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        expand: "md",
        fixed: "top",
        className: 'navbar-b ' + (whiteNav ? 'navbar-reduce' : 'navbar-trans'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
              alt: "lablogo",
              src: "data:,",
              className: "lablogo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            className: "justify-content-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/",
                  exact: true,
                  className: "nav-link",
                  activeClassName: "active",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/publications",
                  className: "nav-link",
                  activeClassName: "active",
                  children: "Publications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/group",
                  className: "nav-link",
                  activeClassName: "active",
                  children: "Group"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/contact",
                  className: "nav-link",
                  activeClassName: "active",
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/publications",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_publications__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_group__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_home__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("footer", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "row-sm-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                href: "https://www.scripps.edu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  style: {
                    width: '22rem'
                  },
                  src: _assets_scripps_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
                  alt: "gottingen logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "copyright-box",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "credits",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
                  className: "copyright",
                  children: ["\xA9 Copyright ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                    children: "Ruben Lab"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 33
                  }, this), ". All Rights Reserved"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        className: "back-to-top",
        style: {
          display: atTop ? 'none' : 'inline'
        },
        onClick: this.backToTop,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("i", {
          className: "fa fa-chevron-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this);
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/components/ScrollRestoration.ts":
/*!*********************************************!*\
  !*** ./app/components/ScrollRestoration.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");



class ScrollRestoration extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollRestoration));

/***/ }),

/***/ "./app/contact/index.tsx":
/*!*******************************!*\
  !*** ./app/contact/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_satelliteTorreyPines_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/satelliteTorreyPines.jpg */ "./assets/satelliteTorreyPines.jpg");
/* harmony import */ var _assets_satelliteTorreyPines_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_satelliteTorreyPines_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_gzmb_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/gzmb.jpg */ "./assets/gzmb.jpg");
/* harmony import */ var _assets_gzmb_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_gzmb_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/app/contact/index.tsx";




function Contact() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "intro intro-single route bg-image",
      style: {
        backgroundImage: `url(${_assets_satelliteTorreyPines_jpg__WEBPACK_IMPORTED_MODULE_1___default.a}`
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "overlay-mf"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "intro-content display-table",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "table-cell",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
              className: "intro-title mb-4",
              children: "Contact Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
              className: "subtitle-b",
              children: "Lab Phone: (858) 784-8761"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      id: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "portfolio-details",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-md-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                  className: "fa fa-user",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this), " Physical Address"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "ml-lg-4 ml-md-0 mb-3",
                children: ["Ruben Lab", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, this), "Justus-von-Liebig-Weg 11", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this), "37077 G\xF6ttingen", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, this), "University Medical Center G\xF6ttingen", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, this), "Institute for Neuropathology", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-md-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                  className: "fa fa-envelope",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, this), " Mailing Address"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "ml-lg-4 ml-md-0 mb-3",
                children: ["Ruben Lab", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, this), "Institute for Neuropathology", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, this), "Justus-von-Liebig-Weg 11", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, this), "Room 3088", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this), "37077 G\xF6ttingen", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-md-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                  className: "fa fa-truck",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, this), " Shipping Address"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "ml-lg-4 ml-md-0",
                children: ["Ruben Lab", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this), "Institute for Neuropathology", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this), "Justus-von-Liebig-Weg 11", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, this), "37077 G\xF6ttingen, Germany", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "portfolio-details",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-sm-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
                children: "All inquiries to:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "col title-pub",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("b", {
                    children: "Ruben, Fernandez Busnadiego"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("em", {
                    children: "Professor"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, this), "Department of Integrative Structural and Computational Biology", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                    className: "fa fa-envelope",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                    href: "mailto:ruben.fernandezbusnadiego@med.uni-goettingen.de",
                    children: "ruben.fernandezbusnadiego@med.uni-goettingen.de"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                    className: "fa fa-phone",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this), " +49 551 3960745", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "col title-pub",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("b", {
                    children: "Cristina Mora"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("em", {
                    children: "Administrative Assistant"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, this), "Department of Integrative Structural and Computational Biology", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                    className: "fa fa-envelope",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                    href: "mailto:$email",
                    children: "crmora@scripps.edu"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                    className: "fa fa-phone",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 21
                  }, this), " (858) 784-2122", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                src: _assets_gzmb_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
                alt: "lab exterior",
                className: "img-fluid shadow title-pub"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "col-sm-6 mb-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                id: "map-container-google-1",
                className: "z-depth-1-half map-container shadow",
                style: {
                  height: '500px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("iframe", {
                  title: "map",
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.486673563955!2d9.950552851579966!3d51.55931117954383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d51e631be957%3A0x82eea5498cf15038!2sGZMB!5e0!3m2!1szh-CN!2sde!4v1626076766126!5m2!1szh-CN!2sde",
                  style: {
                    border: 0
                  },
                  allowFullScreen: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./app/group/index.scss":
/*!******************************!*\
  !*** ./app/group/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-5-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-5-3!./index.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/group/index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/group/index.tsx":
/*!*****************************!*\
  !*** ./app/group/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "../../../node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_orcidid_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/orcidid_logo.svg */ "./assets/orcidid_logo.svg");
/* harmony import */ var _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/linkedin.svg */ "./assets/linkedin.svg");
/* harmony import */ var _assets_twitter2_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/twitter2_logo.svg */ "./assets/twitter2_logo.svg");
/* harmony import */ var _assets_labOuting_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/labOuting.jpg */ "./assets/labOuting.jpg");
/* harmony import */ var _assets_labOuting_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_labOuting_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Ruben_Fernandez-Busnadiego.png */ "./assets/Ruben_Fernandez-Busnadiego.png");
/* harmony import */ var _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./app/group/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/app/group/index.tsx";









const users = [{
  name: 'Rubén Fernández-Busnadiego',
  photo: _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  titles: ['Professor'],
  educationAndTraining: `Full Professor at the University Medical Center, University of Göttingen, Germany, Institute of Neuropathology`,
  phone: '+49 551 3960745',
  email: 'ruben.fernandezbusnadiego@med.uni-goettingen.de',
  orcid: '',
  linkedin: '',
  twitter: 'ruferbus'
}];
const alumnis = [{
  name: 'Cristina Puchades, Ph.D.',
  photo: _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: `Graduate Student (with [Wiseman lab](https://wiseman.scripps.edu/)),2014-2019`,
  subsequently: 'Postdoc, [Cheng lab, UC San Francisco](https://cryoem.ucsf.edu/)',
  orcid: '0000-0003-3240-4176',
  linkedin: 'cristina-puchades-24438b55',
  twitter: 'PuchadesEM'
}, {
  name: 'Cristina Puchades, Ph.D.',
  photo: _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: `Graduate Student (with [Wiseman lab](https://wiseman.scripps.edu/)),2014-2019`,
  subsequently: 'Postdoc, [Cheng lab, UC San Francisco](https://cryoem.ucsf.edu/)',
  orcid: '0000-0003-3240-4176',
  linkedin: 'cristina-puchades-24438b55',
  twitter: 'PuchadesEM'
}, {
  name: 'Cristina Puchades, Ph.D.',
  photo: _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: `Graduate Student (with [Wiseman lab](https://wiseman.scripps.edu/)),2014-2019`,
  subsequently: 'Postdoc, [Cheng lab, UC San Francisco](https://cryoem.ucsf.edu/)',
  orcid: '0000-0003-3240-4176',
  linkedin: 'cristina-puchades-24438b55',
  twitter: 'PuchadesEM'
}, {
  name: 'Cristina Puchades, Ph.D.',
  photo: _assets_Ruben_Fernandez_Busnadiego_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: `Graduate Student (with [Wiseman lab](https://wiseman.scripps.edu/)),2014-2019`,
  subsequently: 'Postdoc, [Cheng lab, UC San Francisco](https://cryoem.ucsf.edu/)',
  orcid: '0000-0003-3240-4176',
  linkedin: 'cristina-puchades-24438b55',
  twitter: 'PuchadesEM'
}];
class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.currentRef = void 0;
    this.alumniRef = void 0;
    this.joinRef = void 0;

    this.scrollToCurrent = () => {
      var _this$currentRef$curr;

      (_this$currentRef$curr = this.currentRef.current) === null || _this$currentRef$curr === void 0 ? void 0 : _this$currentRef$curr.scrollIntoView({
        behavior: 'smooth'
      });
    };

    this.scrollToAlumni = () => {
      var _this$alumniRef$curre;

      (_this$alumniRef$curre = this.alumniRef.current) === null || _this$alumniRef$curre === void 0 ? void 0 : _this$alumniRef$curre.scrollIntoView({
        behavior: 'smooth'
      });
    };

    this.scrollToJoin = () => {
      var _this$joinRef$current;

      (_this$joinRef$current = this.joinRef.current) === null || _this$joinRef$current === void 0 ? void 0 : _this$joinRef$current.scrollIntoView({
        behavior: 'smooth'
      });
    };

    this.currentRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    this.alumniRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    this.joinRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  }

  renderUsers(users) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: users.map((user, index) => {
        return this.renderUser(user, index);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this);
  }

  renderUser(user, index) {
    let imgDivClass;
    let infoDivClass;

    if (index % 2 === 0) {
      imgDivClass = 'col-md-6 order-md-2';
      infoDivClass = 'col-md-6 flex-valign text-md-right';
    } else {
      imgDivClass = 'col-md-6 text-md-right';
      infoDivClass = 'col-md-6 flex-valign';
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "row mb-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: imgDivClass,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
          src: user.photo,
          className: "img-fluid w-50 w-md-80 w-lg-60 rounded-circle labmemberimg shadow",
          alt: "labmember"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: infoDivClass,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
          className: "text-uppercase text-letter-spacing-xs mt-0 mb-1 text-dark font-weight-bold",
          children: user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
          className: "my-0 font-weight-normal",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("em", {
            children: user.titles.map((title, index) => {
              if (index < user.titles.length - 1) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 21
                }, this);
              } else {
                return title;
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {
          className: "hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), user.educationAndTraining ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
            children: "Education & Training"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
            className: "plain-markdown",
            children: user.educationAndTraining
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
            className: "fa fa-phone",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), " ", user.phone, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
            className: "fa fa-envelope",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
              href: `mailto:${user.email}`,
              children: user.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), user.orcid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
              className: "inline-block",
              style: {
                height: '1em'
              },
              src: _assets_orcidid_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
              alt: "orcid logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 17
            }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
              target: "_blank",
              href: `http://orcid.org/${user.orcid}`,
              rel: "noreferrer",
              children: "0000-0003-3176-6829"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 15
          }, this) : null, user.twitter ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
              className: "inline-block",
              style: {
                height: '1em'
              },
              src: _assets_twitter2_logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
              alt: "twitter logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
              target: "_blank",
              href: `http://twitter.com/${user.twitter}`,
              rel: "noreferrer",
              children: ["@", user.twitter]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this) : null, user.linkedin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
              className: "inline-block",
              style: {
                height: '1em'
              },
              src: _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
              alt: "linkedin logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
              target: "_blank",
              href: `https://www.linkedin.com/in/${user.linkedin}`,
              rel: "noreferrer",
              children: ["$", user.linkedin]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this);
  }

  renderAlumni(alumni) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "col-md-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "service-box text-center module already-visible",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          style: {
            padding: '0 0 1rem 0'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
            src: alumni.photo,
            alt: "",
            className: "img-fluid w-50 w-md-80 w-lg-60 rounded-circle labmemberimg shadow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "service-content text-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
            className: "w-title",
            children: alumni.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
              className: "plain-markdown",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
                children: alumni.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this), "Subsequently:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("em", {
              className: "plain-markdown first-p-inline",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
                children: alumni.subsequently
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, this), alumni.orcid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                className: "inline-block",
                style: {
                  height: '1em'
                },
                src: _assets_orcidid_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
                alt: "orcid logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                target: "_blank",
                href: `http://orcid.org/${alumni.orcid}`,
                rel: "noreferrer",
                children: alumni.orcid
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 17
            }, this) : null, alumni.twitter ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                className: "inline-block",
                style: {
                  height: '1em'
                },
                src: _assets_twitter2_logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                alt: "twitter logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 19
              }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                target: "_blank",
                href: `http://twitter.com/${alumni.twitter}`,
                rel: "noreferrer",
                children: ["@", alumni.twitter]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 17
            }, this) : null, alumni.linkedin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                className: "inline-block",
                style: {
                  height: '1em'
                },
                src: _assets_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: "linkedin logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 19
              }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                target: "_blank",
                href: `https://www.linkedin.com/in/${alumni.linkedin}`,
                rel: "noreferrer",
                children: alumni.linkedin
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 17
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "intro intro-single route bg-image",
        style: {
          backgroundImage: `url(${_assets_labOuting_jpg__WEBPACK_IMPORTED_MODULE_5___default.a})`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "overlay-mf"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "intro-content display-table",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "table-cell",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                className: "intro-title mb-4",
                children: "Ruben Lab Members"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "justify-content-center intro-subtitle",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  className: "js-scroll btn btn-outline-light btn-sm",
                  style: {
                    fontSize: '1.5rem'
                  },
                  onClick: this.scrollToCurrent,
                  children: "Current"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  className: "js-scroll btn btn-outline-light btn-sm",
                  style: {
                    fontSize: '1.5rem',
                    marginRight: '0.5rem',
                    marginLeft: '0.5rem'
                  },
                  onClick: this.scrollToAlumni,
                  children: "Alumni"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  className: "js-scroll btn btn-outline-light btn-sm",
                  style: {
                    fontSize: '1.5rem'
                  },
                  onClick: this.scrollToJoin,
                  children: "JOIN"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
        className: "portfolio-details",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "container py-7",
          ref: this.currentRef,
          children: this.renderUsers(users)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
        className: "portfolio-mf sect-pt4 route",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "container",
          ref: this.alumniRef,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "col-sm-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "title-box text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
                  className: "title-a",
                  children: "Ruben Lab Alumni"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 383,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "subtitle-a",
                  children: "They came, they conquered, they moved on to better things"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "line-mf"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "row",
            children: alumnis.map(alumni => this.renderAlumni(alumni))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
        ref: this.joinRef,
        className: "about-mf sect-pt0 route",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "col-sm-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box-shadow-full",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                  className: "row",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                    className: "col-12",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "service-ico",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
                        className: "ico-circle",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("i", {
                          className: "icon-person-add"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 405,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 404,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 403,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "title-box text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
                        className: "title-a mt-3",
                        children: "Join our group"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 409,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "line-mf"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 410,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "title-box-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
                        className: "title-left",
                        children: "Graduate Students"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 413,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 412,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                      className: "lead",
                      children: ["Scripps labs do not directly accept students. All prospective students must apply to the", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                        href: "https://education.scripps.edu/graduate/about-the-graduate-school/",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                          children: "graduate program"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 419,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 418,
                        columnNumber: 25
                      }, this), ". During the first year of the PhD program, Scripps students can rotate in 2-4 labs prior to deciding on a thesis lab. Our lab is usually open for rotation students every quarter and will generally have room for 1-2 new graduate students per year."]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 415,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                      className: "title-box-2 mt-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
                        className: "title-left",
                        children: "Postdoctoral Fellows"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 428,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 427,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                      className: "lead",
                      children: ["Inquiries about postdoctoral positions should be emailed directly to", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                        href: "mailto:ruben.fernandezbusnadiego@med.uni-goettingen.de",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                          children: "Ruben FERN\xC1NDEZ-BUSNADIEGO"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 434,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 433,
                        columnNumber: 25
                      }, this), ". Our lab welcomes applicants of any race, religion, national origin, gender identity, caregiver and family commitments, political affiliation, sexual orientation, and eligible age or ability. Furthermore, we are committed to maintaining a supportive and collaborative lab environment. Our lab doesn\u2019t post for specific positions, so we encourage exploratory inquiries!"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 430,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                      className: "lead",
                      children: "All candidates will be encouraged to explore applying for extramural fellowships to support their research."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 445,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 402,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 401,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./app/home/index.tsx":
/*!****************************!*\
  !*** ./app/home/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "../../../node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _introData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introData */ "./app/home/introData.ts");
/* harmony import */ var _assets_rubenResearch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/rubenResearch.png */ "./assets/rubenResearch.png");
/* harmony import */ var _assets_rubenResearch_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_rubenResearch_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/app/home/index.tsx";





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: _introData__WEBPACK_IMPORTED_MODULE_2__["default"],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        id: "home",
        className: "intro route bg-image crossfade",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("figure", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("figure", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("figure", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("figure", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("figure", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "overlay-intro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "intro-content display-table",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "table-cell",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
                options: defaultOptions
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
                className: "subtitle-b mb-4",
                style: {
                  fontSize: '4vw',
                  marginTop: '2rem'
                },
                children: "Visualizing the machinery of life and death"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
        id: "main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
          id: "research",
          className: "about-mf sect-pt4 route",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "col-sm-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "box-shadow-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-12",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                        className: "title-box-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                          className: "title-left",
                          children: "Overview of our research"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                        className: "lead",
                        children: "Our research focuses on cutting-edge electron microscopy to reveal the intricate detail of cellular architecture. We combine cryo-FIB milling with cryo-electron tomography (cryo-ET) to image cells pristinely preserved by vitrification at molecular resolution."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-lg-12",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                        className: "lead",
                        children: "One of our foci is the study of membrane contact sites (MCS), structures where two cellular membranes come into close apposition to directly exchange Ca2+, lipids and metabolites. We combine cryo-ET with molecular biology and functional assays to reveal the structural and functional roles of different MCS-resident proteins in situ, i.e. within their unaltered cellular environment."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                        className: "lead",
                        children: "Another major research area is the molecular architecture of neurons, both in their healthy state and in the context of neurodegenerative diseases. For example, our work has revealed the intricate structure of the presynaptic cytomatrix, a dense network of filaments linking synaptic vesicles to each other and to the active zone, likely playing important roles in the regulation of neurotransmitter release. We have also investigated toxic protein aggregates related to e.g. Huntington\u2019s disease or amyotrophic lateral sclerosis. Our work reveals the broad diversity of such aggregates, both structurally and in terms of cellular interactions. These studies are shedding new light into the molecular mechanisms of neuron (dys)function."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-lg-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                        className: "about-img",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                          src: _assets_rubenResearch_png__WEBPACK_IMPORTED_MODULE_3___default.a,
                          className: "img-fluid rounded b-shadow-a",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
          id: "aboutcryoem",
          className: "about-mf sect-pt0 route",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "col-sm-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "box-shadow-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-12",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                        className: "title-box-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
                          className: "title-left",
                          children: "A 3-minute introduction to cryo-EM"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 127,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-lg-6 order-lg-2 mb-4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                        className: "embed-responsive embed-responsive-16by9",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("iframe", {
                          title: "video",
                          className: "embed-responsive-item",
                          src: "https://www.youtube.com/embed/BJKkC0W-6Qk",
                          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                      className: "col-lg-6 order-lg-1",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                        className: "lead",
                        children: ["This short movie is based on slides from Gabe Lander's PhD thesis defense (2009). Although cryo-EM instrumentation and algorithms have improved much since then, the fundamentals of the methodology presented in this video remain relevant.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 27
                        }, this), "The slides used to generate this movie can be downloaded using the links below:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                          target: "_blank",
                          href: "https://www.lander-lab.com/downloads/EMIntro.key",
                          className: "btn btn-outline-dark btn-sm pub-button",
                          style: {
                            width: 'auto'
                          },
                          rel: "noreferrer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                            className: "fa fa-download",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 163,
                            columnNumber: 29
                          }, this), ' ', "Keynote"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                          target: "_blank",
                          href: "https://www.lander-lab.com/downloads/EMIntro.pptx",
                          className: "btn btn-outline-dark btn-sm pub-button",
                          style: {
                            width: 'auto'
                          },
                          rel: "noreferrer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                            className: "fa fa-download",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 29
                          }, this), ' ', "Powerpoint (animations don't work)"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./app/home/introData.ts":
/*!*******************************!*\
  !*** ./app/home/introData.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  v: '5.7.4',
  fr: 29.9700012207031,
  ip: 0,
  op: 422.000017188412,
  w: 1903,
  h: 710,
  nm: 'Comp 1',
  ddd: 1,
  assets: [{
    id: 'comp_0',
    layers: [{
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'ATP',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 376,
            s: [100]
          }, {
            t: 393.000016007218,
            s: [0]
          }],
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: [405.5, 312.5, 0],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [71.5, 44.5, 0],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [318.972, 318.972, 100],
          ix: 6,
          l: 2
        }
      },
      ao: 0,
      hasMask: true,
      masksProperties: [{
        inv: false,
        mode: 's',
        pt: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 291,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-10.106, -10.57], [-11.36, 99.522], [167.409, 96.387], [169.29, -13.078]],
              c: true
            }]
          }, {
            t: 315.000012830213,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[156.052, -18.094], [154.798, 91.998], [333.567, 88.863], [335.448, -20.602]],
              c: true
            }]
          }],
          ix: 1
        },
        o: {
          a: 0,
          k: 100,
          ix: 3
        },
        x: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Mask 1'
      }],
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[4.701, 0.141], [0.106, -4.694], [-4.745, -0.099], [-0.122, 4.69]],
              o: [[-4.706, -0.141], [-0.108, 4.699], [4.713, 0.097], [0.124, -4.76]],
              v: [[0.266, -8.466], [-8.505, -0.168], [-0.115, 8.51], [8.489, 0.337]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [0.058180108666, 1, 0, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [89.589, 17.661],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 1',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }, {
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[4.727, 0.025], [0.042, -4.628], [-4.842, -0.007], [-0.024, 4.713]],
              o: [[-4.567, -0.024], [-0.045, 4.897], [4.773, 0.007], [0.026, -4.659]],
              v: [[-0.068, -8.486], [-8.49, -0.075], [-0.1, 8.503], [8.509, 0.06]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [0.058823529631, 1, 0, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [126.516, 18.073],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 2',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: 'ADBE Vector Group',
        hd: false
      }, {
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[4.687, 0.012], [0.041, -4.663], [-4.597, 0.011], [-0.018, 4.527]],
              o: [[-4.719, -0.012], [-0.039, 4.581], [4.631, -0.011], [0.018, -4.632]],
              v: [[0.04, -8.395], [-8.49, -0.061], [-0.057, 8.396], [8.51, 0.032]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [0.058823529631, 1, 0, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [55.601, 17.281],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 3',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: 'ADBE Vector Group',
        hd: false
      }, {
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[5.952, -1.65], [1.866, 5.532], [2.15, -0.123], [2.942, -0.204], [0.353, -0.778], [4.869, 0.184], [2.019, 5.021], [0.867, 0.082], [2.375, -0.228], [0.348, -0.779], [6.801, 1.706], [0.414, -0.606], [4.794, -7.072], [-0.938, -1.025], [2.098, -6.659], [6.673, -1.499], [-0.012, 11.672], [-11.763, -3.611], [-1.029, 1.585], [-4.716, 6.932], [0.795, 1.462], [-5.825, 2.975], [-2.822, -5.754], [-2.074, 0], [-1.008, 0], [-2.15, 3.518], [-3.826, -8.164], [-1.675, 0.053], [-3.194, -0.079], [-0.798, 1.54], [-5.098, -0.801], [-0.869, -5.02]],
              o: [[-5.533, 1.535], [-0.737, -2.184], [-2.946, 0.169], [-0.852, 0.059], [-2.266, 4.981], [-5.283, -0.2], [-0.308, -0.768], [-2.376, -0.224], [-0.864, 0.083], [-2.851, 6.38], [-0.728, -0.183], [-4.825, 7.05], [-0.99, 1.46], [4.781, 5.23], [-2.059, 6.539], [-11.282, 2.535], [0.012, -12.236], [1.738, 0.533], [4.564, -7.032], [0.953, -1.4], [-3.129, -5.755], [5.528, -2.823], [0.908, 1.85], [0.788, 0], [3.444, 0], [4.665, -7.632], [0.726, 1.548], [3.191, -0.101], [1.603, 0.039], [2.452, -4.727], [4.845, 0.76], [1.008, 5.833]],
              v: [[58.152, -15.049], [44.617, -22.082], [40.671, -24.772], [31.811, -24.647], [29.419, -22.994], [18.396, -15.203], [7.385, -23.013], [4.984, -24.648], [-2.191, -24.646], [-4.589, -22.986], [-19.374, -15.816], [-21.85, -14.92], [-36.139, 6.357], [-35.52, 9.617], [-31.553, 27.643], [-44.956, 39.702], [-66.745, 21.936], [-43.417, 4.755], [-39.684, 3.518], [-25.749, -17.42], [-25.646, -21.301], [-20.661, -37.049], [-5.35, -31.848], [-1.339, -29.374], [2.21, -29.39], [9.145, -33.213], [28.84, -31.472], [32.083, -29.365], [41.667, -29.371], [45.063, -31.331], [57.217, -37.494], [66.664, -27.937]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[5.165, 5.028], [5.484, -7.349], [4.025, 0], [0.984, 1.612], [5.999, -9.257], [2.661, 0], [1.104, 1.681], [5.717, -7.018], [-1.488, -5.366], [0.949, -1.387], [3.498, -5.44], [1.98, 0.299], [-0.31, -11.029], [-15.971, -1.56], [-4.246, 8.096], [5.113, 7.273], [-1.051, 1.517], [-2.816, 4.728], [-3.221, -0.319], [-2.977, 4.913], [-2.749, 0], [-0.856, -1.583], [-5.333, 9.191], [-3.775, 0], [-0.745, -1.446], [-5.46, -0.616], [-2.668, 5.653]],
              o: [[-4.97, -4.839], [-1.62, 2.005], [-4.189, 0], [-5.801, -9.493], [-1.091, 1.682], [-2.66, 0], [-5.892, -8.971], [-3.8, 4.664], [0.452, 1.63], [-3.651, 5.339], [-1.056, 1.643], [-15.949, -2.412], [-0.007, 6.639], [9.198, 0.623], [4.023, -7.674], [-1.148, -1.632], [3.139, -4.527], [1.636, -2.746], [6.046, 0.597], [0.915, -1.51], [2.971, 0], [5.38, 9.941], [1.617, -2.787], [2.958, 0], [2.391, 4.639], [6.708, 0.757], [2.089, -4.426]],
              v: [[65.591, -37.145], [43.648, -35.126], [37.292, -32.322], [31.193, -34.455], [5.706, -34.699], [1.413, -32.184], [-2.848, -34.713], [-26.977, -36.395], [-29.473, -21.277], [-30.048, -17.075], [-40.798, -0.921], [-44.924, 0.896], [-70.501, 22.066], [-50.505, 43.333], [-29.829, 32.251], [-31.292, 9.367], [-31.305, 5.193], [-22.18, -8.585], [-15.443, -12.155], [-2.305, -19.659], [1.467, -21.926], [5.152, -19.555], [30.868, -18.574], [37.096, -21.733], [41.74, -19.839], [53.16, -11.411], [68.723, -19.413]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 2',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'mm',
          mm: 1,
          nm: 'Merge Paths 1',
          mn: 'ADBE Vector Filter - Merge',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [1, 1, 1, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [71.061, 44.207],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 4',
        np: 4,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: 'ADBE Vector Group',
        hd: false
      }],
      ip: 0,
      op: 900.000036657751,
      st: 0,
      bm: 0
    }, {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'GearCenter',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 264,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 283,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 375,
            s: [100]
          }, {
            t: 393.000016007218,
            s: [0]
          }],
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: [883, 354, 0],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [0, 0, 0],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [100, 100, 100],
          ix: 6,
          l: 2
        }
      },
      ao: 0,
      shapes: [{
        ty: 'gr',
        it: [{
          d: 1,
          ty: 'el',
          s: {
            a: 0,
            k: [95.32, 95.32],
            ix: 2
          },
          p: {
            a: 0,
            k: [0, 0],
            ix: 3
          },
          nm: 'Ellipse Path 1',
          mn: 'ADBE Vector Shape - Ellipse',
          hd: false
        }, {
          ty: 'st',
          c: {
            a: 0,
            k: [1, 1, 1, 1],
            ix: 3
          },
          o: {
            a: 0,
            k: 100,
            ix: 4
          },
          w: {
            a: 0,
            k: 0,
            ix: 5
          },
          lc: 1,
          lj: 1,
          ml: 4,
          bm: 0,
          nm: 'Stroke 1',
          mn: 'ADBE Vector Graphic - Stroke',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 303,
              s: [1, 1, 1, 1]
            }, {
              t: 314.000012789482,
              s: [0.164705887437, 1, 0, 1]
            }],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [-634.246, 27.355],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Ellipse 1',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }],
      ip: 0,
      op: 900.000036657751,
      st: 0,
      bm: 0
    }, {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'gearFlask',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 146,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 164,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 392,
            s: [100]
          }, {
            t: 405.000016495988,
            s: [0]
          }],
          ix: 11
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        p: {
          a: 0,
          k: [332.5, 365.5, 0],
          ix: 2,
          l: 2
        },
        a: {
          a: 0,
          k: [89.5, 96.5, 0],
          ix: 1,
          l: 2
        },
        s: {
          a: 0,
          k: [318.972, 318.972, 100],
          ix: 6,
          l: 2
        }
      },
      ao: 0,
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0.166, -0.291], [3.305, -5.802], [0.386, -0.677], [0.04, -0.072], [0.235, -0.474], [0.088, -0.19], [0.209, -0.512], [0.051, -0.131], [0.162, -0.478], [0.058, -0.184], [0.142, -0.559], [0.024, -0.097], [0.095, -0.502], [0.028, -0.164], [0.064, -0.577], [0.008, -0.084], [0.026, -0.522], [0.005, -0.144], [-0.015, -0.583], [-0.001, -0.021], [-0.012, -0.286], [-0.309, -1.41], [-0.019, -0.09], [-0.019, -0.079], [-0.009, -0.038], [-0.171, -0.582], [-0.003, -0.011], [-0.216, -0.588], [-0.022, -0.059], [-0.591, -1.107], [-0.026, -0.05], [-0.752, -1.032], [-0.03, -0.039], [-0.911, -0.94], [-0.013, -0.014], [-7.872, 0.117], [-0.132, 0.001], [-0.307, 0], [0, 0], [-20.318, 0.005], [-20.318, -0.032], [0, 0], [-0.305, 0.006], [-0.131, -0.002], [-4.507, 4.781], [-0.012, 0.013], [-0.762, 1.035], [-0.028, 0.04], [-0.6, 1.111], [-0.027, 0.05], [-0.438, 1.168], [-0.022, 0.058], [-0.177, 0.6], [-0.004, 0.011], [-0.132, 0.592], [-0.008, 0.038], [-0.019, 0.077], [-0.018, 0.09], [-0.057, 1.327], [0, 0.276], [0, 0.021], [0.02, 0.585], [0.007, 0.144], [0.054, 0.523], [0.01, 0.084], [0.099, 0.576], [0.031, 0.164], [0.121, 0.5], [0.025, 0.097], [0.175, 0.555], [0.062, 0.183], [0.185, 0.475], [0.054, 0.131], [0.238, 0.506], [0.094, 0.189], [0.262, 0.468], [0.041, 0.073], [0.385, 0.677], [3.956, 6.913], [9.35, 16.254], [0.323, 0.565], [0, 0], [0, 0], [0, 0], [0.958, -0.556], [0, 0], [-0.556, -0.958], [0, 0], [0, 0], [-5.23, -9.034], [-5.011, -8.734], [-1.97, -3.454], [-0.307, -0.538], [-0.138, -0.245], [0, 0], [-0.355, -0.601], [-0.038, -0.072], [-0.469, -0.926], [-0.158, -0.32], [-0.375, -0.797], [-0.289, -0.648], [-0.229, -0.529], [-0.501, -1.277], [-0.146, -0.644], [0.501, -2.521], [0.278, -0.862], [0.013, -0.038], [0.277, -0.586], [0.004, -0.007], [0.8, -1.102], [0.011, -0.015], [0.442, -0.5], [0.027, -0.03], [0.493, -0.457], [0.015, -0.014], [1.968, -0.881], [0.013, -0.006], [2.986, 0], [8.857, 0.012], [11.431, -0.007], [11.43, -0.032], [8.857, 0], [2.469, 0.992], [0.013, 0.006], [1.531, 1.408], [0.016, 0.014], [0.444, 0.499], [0.026, 0.031], [0.39, 0.535], [0.011, 0.015], [0.571, 1.205], [0.003, 0.006], [0.221, 0.6], [0.014, 0.038], [0.186, 0.931], [-0.363, 2.256], [-0.236, 0.603], [-0.544, 1.265], [-0.237, 0.528], [-0.3, 0.641], [-0.393, 0.79], [-0.161, 0.319], [-0.491, 0.913], [-0.038, 0.071], [0, 0], [-0.138, 0.244], [-0.314, 0.55], [-1.869, 3.26], [0.36, 0.539], [1.43, 0.064]],
              o: [[-3.774, 6.597], [-0.386, 0.677], [-0.041, 0.073], [-0.262, 0.468], [-0.094, 0.189], [-0.239, 0.506], [-0.053, 0.131], [-0.187, 0.475], [-0.061, 0.183], [-0.175, 0.555], [-0.024, 0.097], [-0.121, 0.5], [-0.031, 0.164], [-0.099, 0.576], [-0.009, 0.084], [-0.054, 0.523], [-0.008, 0.144], [-0.021, 0.585], [0.001, 0.021], [0, 0.276], [0.057, 1.327], [0.018, 0.09], [0.018, 0.077], [0.008, 0.038], [0.133, 0.592], [0.003, 0.011], [0.177, 0.6], [0.021, 0.058], [0.438, 1.168], [0.027, 0.05], [0.601, 1.111], [0.029, 0.04], [0.761, 1.035], [0.014, 0.013], [4.508, 4.781], [0.133, -0.002], [0.305, 0.006], [0, 0], [20.318, -0.032], [20.318, 0.005], [0, 0], [0.307, 0], [0.132, 0.001], [7.873, 0.117], [0.014, -0.014], [0.911, -0.94], [0.029, -0.039], [0.752, -1.032], [0.028, -0.05], [0.59, -1.107], [0.022, -0.059], [0.216, -0.588], [0.003, -0.011], [0.17, -0.582], [0.009, -0.038], [0.018, -0.079], [0.018, -0.09], [0.309, -1.41], [0.012, -0.286], [0, -0.021], [0.014, -0.583], [-0.005, -0.144], [-0.026, -0.522], [-0.009, -0.084], [-0.065, -0.577], [-0.028, -0.164], [-0.095, -0.502], [-0.024, -0.097], [-0.141, -0.559], [-0.058, -0.184], [-0.161, -0.478], [-0.052, -0.131], [-0.209, -0.512], [-0.089, -0.19], [-0.235, -0.474], [-0.04, -0.072], [-0.386, -0.677], [-3.452, -6.057], [-9.62, -16.836], [-0.242, -0.446], [0, 0], [0, 0], [0, 0], [-0.556, -0.958], [0, 0], [-0.958, 0.557], [0, 0], [0, 0], [5.229, 9.005], [5.521, 9.552], [1.978, 3.45], [0.315, 0.55], [0.138, 0.244], [0, 0], [0.349, 0.607], [0.038, 0.071], [0.49, 0.913], [0.161, 0.319], [0.391, 0.79], [0.3, 0.643], [0.238, 0.527], [0.545, 1.265], [0.236, 0.603], [0.363, 2.256], [-0.186, 0.931], [-0.014, 0.038], [-0.221, 0.6], [-0.003, 0.006], [-0.571, 1.205], [-0.01, 0.015], [-0.39, 0.535], [-0.026, 0.031], [-0.444, 0.499], [-0.016, 0.014], [-1.531, 1.408], [-0.013, 0.006], [-2.469, 0.992], [-8.857, 0], [-11.43, -0.032], [-11.43, -0.007], [-8.858, 0.012], [-2.986, 0], [-0.013, -0.006], [-1.968, -0.881], [-0.015, -0.014], [-0.493, -0.457], [-0.027, -0.03], [-0.441, -0.5], [-0.011, -0.015], [-0.799, -1.102], [-0.004, -0.007], [-0.277, -0.586], [-0.014, -0.038], [-0.278, -0.862], [-0.501, -2.521], [0.145, -0.644], [0.501, -1.277], [0.23, -0.53], [0.289, -0.646], [0.375, -0.798], [0.158, -0.32], [0.469, -0.926], [0.038, -0.072], [0, 0], [0.137, -0.245], [0.307, -0.538], [1.861, -3.264], [0.109, -0.189], [-0.797, -1.19], [-0.781, -0.035]],
              v: [[-73.151, -2.818], [-83.843, 15.905], [-85.003, 17.935], [-85.118, 18.154], [-85.861, 19.568], [-86.135, 20.135], [-86.811, 21.661], [-86.964, 22.055], [-87.484, 23.484], [-87.663, 24.034], [-88.145, 25.704], [-88.212, 25.995], [-88.535, 27.499], [-88.624, 27.991], [-88.874, 29.721], [-88.897, 29.971], [-89.016, 31.538], [-89.035, 31.971], [-89.048, 33.723], [-89.048, 33.786], [-89.044, 34.616], [-88.484, 38.738], [-88.426, 39.008], [-88.376, 39.242], [-88.348, 39.355], [-87.895, 41.117], [-87.885, 41.15], [-87.294, 42.932], [-87.229, 43.107], [-85.686, 46.523], [-85.605, 46.672], [-83.576, 49.889], [-83.488, 50.007], [-80.98, 52.973], [-80.942, 53.014], [-62.266, 61.056], [-61.869, 61.053], [-60.956, 61.077], [-60.953, 61.077], [0.001, 61.031], [60.955, 61.077], [60.958, 61.077], [61.87, 61.053], [62.266, 61.056], [80.942, 53.014], [80.981, 52.973], [83.49, 50.007], [83.577, 49.889], [85.606, 46.672], [85.688, 46.523], [87.23, 43.107], [87.296, 42.932], [87.886, 41.15], [87.895, 41.117], [88.347, 39.355], [88.378, 39.242], [88.429, 39.008], [88.485, 38.738], [89.046, 34.616], [89.05, 33.786], [89.05, 33.723], [89.037, 31.971], [89.016, 31.538], [88.899, 29.971], [88.876, 29.721], [88.626, 27.991], [88.536, 27.499], [88.213, 25.995], [88.145, 25.704], [87.665, 24.034], [87.485, 23.484], [86.967, 22.055], [86.812, 21.661], [86.137, 20.135], [85.863, 19.568], [85.119, 18.154], [85.005, 17.935], [83.846, 15.905], [72.653, -3.691], [46.588, -49.184], [45.745, -50.689], [43.602, -54.38], [41.713, -57.636], [40.406, -59.885], [37.653, -60.616], [34.299, -58.668], [33.568, -55.915], [34.89, -53.639], [35.963, -51.789], [49.674, -28.055], [65.731, -0.188], [71.654, 10.165], [72.589, 11.803], [72.993, 12.542], [72.902, 12.501], [73.959, 14.312], [74.075, 14.525], [75.511, 17.286], [75.99, 18.243], [77.14, 20.624], [78.021, 22.561], [78.729, 24.142], [80.304, 27.954], [80.874, 29.827], [80.757, 36.961], [80.044, 39.638], [80.002, 39.751], [79.257, 41.533], [79.247, 41.553], [77.186, 45.027], [77.154, 45.073], [75.906, 46.626], [75.826, 46.717], [74.42, 48.152], [74.373, 48.194], [69.114, 51.674], [69.075, 51.693], [60.864, 53.224], [34.291, 53.201], [0.001, 53.163], [-34.29, 53.201], [-60.863, 53.224], [-69.074, 51.693], [-69.113, 51.674], [-74.372, 48.194], [-74.419, 48.152], [-75.824, 46.717], [-75.904, 46.626], [-77.154, 45.073], [-77.186, 45.027], [-79.245, 41.553], [-79.257, 41.533], [-80.001, 39.751], [-80.042, 39.638], [-80.755, 36.961], [-80.873, 29.827], [-80.302, 27.954], [-78.729, 24.142], [-78.02, 22.557], [-77.139, 20.626], [-75.988, 18.243], [-75.509, 17.286], [-74.074, 14.525], [-73.958, 14.312], [-72.992, 12.542], [-72.589, 11.803], [-71.654, 10.165], [-66.055, 0.381], [-66.074, -1.387], [-71.184, -3.973]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [1, 1, 1, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [89.313, 131.236],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 1',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }, {
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 1.763], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [0.542, -0.765], [3.01, -0.293]],
              o: [[0, 0], [0, -1.1], [0, 0], [1.099, 0], [0, 0], [0, 1.924], [-0.413, 0.584], [0, 0]],
              v: [[-3.926, 24.128], [-3.926, -23.891], [-1.926, -25.891], [1.926, -25.891], [3.926, -23.891], [3.926, 20.4], [3.17, 23.966], [-0.675, 25.552]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [1, 1, 1, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [58.144, 41.697],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 2',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: 'ADBE Vector Group',
        hd: false
      }, {
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[2.468, 0.032], [0.006, -2.853], [0.003, -1.52], [0, 0], [-1.73, -0.172], [0, 1.099], [0, 0], [0, 0]],
              o: [[-1.736, 0.175], [-0.003, 1.496], [0, 0], [0.001, 2.847], [1.101, 0], [0, 0], [0, 0], [-0.022, -1.645]],
              v: [[1.694, -8.449], [-4.158, -6.449], [-4.158, -0.158], [-4.158, 6.454], [1.694, 8.454], [3.694, 6.454], [3.694, -0.127], [3.694, -3.867]],
              c: true
            },
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ty: 'fl',
          c: {
            a: 0,
            k: [1, 1, 1, 1],
            ix: 4
          },
          o: {
            a: 0,
            k: 100,
            ix: 5
          },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }, {
          ty: 'tr',
          p: {
            a: 0,
            k: [120.524, 24.194],
            ix: 2
          },
          a: {
            a: 0,
            k: [0, 0],
            ix: 1
          },
          s: {
            a: 0,
            k: [100, 100],
            ix: 3
          },
          r: {
            a: 0,
            k: 0,
            ix: 6
          },
          o: {
            a: 0,
            k: 100,
            ix: 7
          },
          sk: {
            a: 0,
            k: 0,
            ix: 4
          },
          sa: {
            a: 0,
            k: 0,
            ix: 5
          },
          nm: 'Transform'
        }],
        nm: 'Group 3',
        np: 2,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: 'ADBE Vector Group',
        hd: false
      }],
      ip: 0,
      op: 900.000036657751,
      st: 0,
      bm: 0
    }]
  }],
  fonts: {
    list: [{
      fName: 'FjallaOne-Regular',
      fFamily: 'Fjalla One',
      fStyle: 'Regular',
      ascent: 88.818359375
    }]
  },
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: 'gearMask',
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [400.5, 367, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 258.545,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-110, -245], [-110, -91], [-56, -78], [-14, -29], [-9, 28], [-54, 68], [-117, 92], [-154, 46], [-199, -1], [-294, 24], [-351, 137], [-276, 197], [-211, 264], [-93, 299], [68, 264], [155, 204], [202, 43], [156, -147], [15, -240]],
              c: true
            }]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 267.753,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-103, -248], [-100, -98], [-56, -78], [-14, -29], [-9, 28], [-54, 68], [-89, 87], [-154, 46], [-199, -1], [-294, 24], [-351, 137], [-276, 197], [-211, 264], [-93, 299], [68, 264], [155, 204], [202, 43], [156, -147], [15, -240]],
              c: true
            }]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 268.366,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-103, -248], [-100, -98], [-56, -78], [-14, -29], [-9, 28], [-54, 68], [-89, 87], [-99, 85], [-121, 80], [-133, 91], [-158, 149], [-158, 180], [-147, 225], [-70, 299], [73, 285], [155, 204], [202, 43], [156, -147], [15, -240]],
              c: true
            }]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 274.505,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-103, -248], [-100, -98], [-56, -78], [-14, -29], [-9, 28], [-54, 68], [-63, 83], [-58, 95], [-42, 113], [-28, 128], [-20, 148], [-12, 168], [1, 185], [22, 238], [99, 232], [144, 199], [202, 43], [156, -147], [15, -240]],
              c: true
            }]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 280.644,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-103, -248], [-100, -98], [-56, -78], [-14, -29], [-9, 28], [-8, 46], [5, 60], [18, 64], [33, 66], [46, 66], [62, 69], [87, 79], [99, 84], [120, 90], [136, 87], [168, 59], [192, 20], [156, -147], [15, -240]],
              c: true
            }]
          }, {
            t: 286.782511680891,
            s: [{
              i: [[0, 0], [0, 0], [0, 0], [-3, -4], [-1, -6], [0, 0], [3, -3], [0, 0], [0, 0], [0, 0], [0, 0], [-3, -3], [0, 0], [-6, -2], [-3, 1], [-3, 1], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [3, 4], [1, 6], [0, 0], [-3, 3], [0, 0], [0, 0], [0, 0], [0, 0], [3, 3], [0, 0], [6, 2], [3, -1], [3, -1], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[-58, -253], [-103, -248], [-100, -98], [-56, -78], [-28, -58], [-13, -38], [4, -26], [18, -22], [34, -23], [45, -33], [64, -39], [80, -48], [103, -47], [125, -49], [137, -58], [155, -91], [152, -142], [133, -171], [88, -218], [15, -240]],
              c: true
            }]
          }],
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Shape 1',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: 'Gear',
    tt: 2,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          t: 376,
          s: [100]
        }, {
          t: 393.000016007218,
          s: [0]
        }],
        ix: 11
      },
      r: {
        a: 1,
        k: [{
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          t: 258,
          s: [266]
        }, {
          t: 296.000012056327,
          s: [0]
        }],
        ix: 10
      },
      p: {
        a: 0,
        k: [317.5, 381.5, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [72.481, 80.166, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [318.803, 318.803, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[1.595, 1.347], [3.996, 3.433], [-0.31, 1.592], [-0.181, 2.146], [1.893, -0.015], [7.831, 0.041], [0.03, -1.501], [0.259, -1.81], [16.472, -0.279], [6.769, 6.114], [0.153, 9.069], [-16.63, 2.379], [-0.013, 1.899], [-0.065, 7.83], [2.101, -0.41], [0.979, 1.139], [3.399, 4.023], [1.937, -0.912], [3.854, -1.542], [-0.149, -1.596], [-0.349, -5.494], [0.564, -0.57], [3.468, -3.162], [1.082, 0.052], [5.395, 0.552], [0.756, -1.981], [1.741, -3.763], [-1.325, -1.125], [-3.669, -3.165], [-0.334, -0.314], [-0.039, -1.183], [-0.005, -2.721], [0.09, -2.718], [0.002, -0.039], [0.661, -0.569], [4.024, -3.4], [-0.912, -1.935], [-1.543, -3.853], [-1.597, 0.149], [-5.493, 0.348], [-0.571, -0.566], [-3.162, -3.468], [0.052, -1.082], [0.553, -5.395], [-1.981, -0.756], [-3.764, -1.743], [-1.125, 1.326], [-3.166, 3.669], [-0.315, 0.334], [-1.184, 0.039], [-2.72, 0.005], [-2.718, -0.09], [-0.787, -0.835], [-0.311, -0.336], [-3.136, -3.693], [-1.567, 0.724], [-3.872, 1.477], [0.202, 1.971], [0.261, 5.415], [-0.765, 0.838], [-3.335, 3.303], [-0.785, -0.049], [-5.481, -0.513], [-0.613, 1.534], [-1.768, 3.755]],
            o: [[-4.023, -3.4], [-1.14, -0.98], [0.411, -2.101], [0.137, -1.626], [-7.831, 0.064], [-1.564, -0.009], [-0.037, 1.827], [-2.379, 16.63], [-8.978, -0.152], [-6.123, -6.68], [0.278, -16.473], [1.811, -0.259], [0.055, -7.831], [0.015, -1.894], [-1.593, 0.312], [-3.433, -3.997], [-1.348, -1.595], [-3.754, 1.768], [-1.532, 0.613], [0.513, 5.481], [0.049, 0.785], [-3.304, 3.335], [-0.838, 0.765], [-5.415, -0.26], [-1.972, -0.202], [-1.477, 3.872], [-0.725, 1.566], [3.695, 3.135], [0.336, 0.312], [0.835, 0.787], [0.09, 2.718], [-0.005, 2.72], [-0.001, 0.039], [-0.166, 0.67], [-3.996, 3.433], [-1.594, 1.347], [1.768, 3.755], [0.614, 1.534], [5.482, -0.513], [0.785, -0.049], [3.335, 3.303], [0.764, 0.838], [-0.26, 5.415], [-0.202, 1.971], [3.872, 1.477], [1.566, 0.724], [3.136, -3.693], [0.312, -0.336], [0.786, -0.835], [2.718, -0.09], [2.721, 0.005], [1.183, 0.039], [0.314, 0.334], [3.166, 3.669], [1.125, 1.326], [3.763, -1.743], [1.981, -0.756], [-0.553, -5.395], [-0.052, -1.082], [3.162, -3.468], [0.57, -0.566], [5.494, 0.348], [1.597, 0.149], [1.543, -3.853], [0.912, -1.935]],
            v: [[75.187, 20.514], [63.286, 10.113], [61.973, 6.617], [62.538, 0.183], [60.318, -2.337], [36.825, -2.326], [34.708, -0.183], [34.243, 5.29], [-0.001, 34.894], [-24.801, 24.827], [-34.84, 0.053], [-5.238, -34.191], [-3.245, -36.373], [-3.234, -59.865], [-6.563, -61.921], [-10.06, -63.232], [-20.461, -75.133], [-25.001, -76.178], [-36.442, -71.258], [-38.296, -68.162], [-36.984, -51.699], [-37.94, -49.311], [-48.066, -39.521], [-51.343, -38.143], [-67.564, -39.386], [-71.383, -37.193], [-76.312, -25.769], [-75.498, -22.05], [-64.542, -12.494], [-63.531, -11.561], [-62.118, -8.106], [-62.026, 0.053], [-62.118, 8.212], [-62.128, 8.33], [-63.286, 10.113], [-75.187, 20.514], [-76.231, 25.053], [-71.312, 36.493], [-68.215, 38.348], [-51.752, 37.036], [-49.363, 37.993], [-39.574, 48.118], [-38.196, 51.395], [-39.439, 67.617], [-37.246, 71.436], [-25.821, 76.365], [-22.104, 75.549], [-12.547, 64.594], [-11.613, 63.583], [-8.159, 62.171], [-0.001, 62.077], [8.16, 62.171], [11.613, 63.583], [12.546, 64.594], [22.104, 75.549], [25.821, 76.365], [37.245, 71.436], [39.438, 67.617], [38.195, 51.395], [39.575, 48.118], [49.363, 37.993], [51.751, 37.036], [68.214, 38.348], [71.312, 36.493], [76.23, 25.053]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [72.453, 80.01],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Group 1',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 1,
    ind: 3,
    ty: 5,
    nm: 'ELECTRON MICROSCOPY',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      rx: {
        a: 0,
        k: 0,
        ix: 8
      },
      ry: {
        a: 0,
        k: 0,
        ix: 9
      },
      rz: {
        a: 0,
        k: 0,
        ix: 10
      },
      or: {
        a: 0,
        k: [0, 0, 0],
        ix: 7
      },
      p: {
        a: 0,
        k: [710.5, 317, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    t: {
      d: {
        k: [{
          s: {
            s: 200,
            f: 'FjallaOne-Regular',
            t: 'ELECTRON\rMICROSCOPY',
            j: 0,
            tr: 0,
            lh: 240.000015258789,
            ls: 0,
            fc: [1, 1, 1]
          },
          t: 0
        }]
      },
      p: {},
      m: {
        g: 1,
        a: {
          a: 0,
          k: [0, 0],
          ix: 2
        }
      },
      a: [{
        nm: 'Animator 1',
        s: {
          t: 0,
          xe: {
            a: 0,
            k: 0,
            ix: 7
          },
          ne: {
            a: 0,
            k: 0,
            ix: 8
          },
          a: {
            a: 0,
            k: 100,
            ix: 4
          },
          b: 1,
          rn: 0,
          sh: 1,
          r: 1
        },
        a: {
          s: {
            a: 0,
            k: [100, 100, 100],
            ix: 3
          },
          o: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 0,
              s: [0]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 12,
              s: [100]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 102,
              s: [100]
            }, {
              t: 111.000004521123,
              s: [0]
            }],
            ix: 9
          },
          bl: {
            a: 0,
            k: [0, 0],
            ix: 95
          }
        }
      }, {
        nm: 'Animator 2',
        s: {
          t: 0,
          xe: {
            a: 0,
            k: 0,
            ix: 7
          },
          ne: {
            a: 0,
            k: 0,
            ix: 8
          },
          a: {
            a: 0,
            k: 100,
            ix: 4
          },
          b: 1,
          rn: 0,
          sh: 1,
          r: 1
        },
        a: {
          fc: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 55,
              s: [1, 1, 1, 1]
            }, {
              t: 87.0000035435826,
              s: [0.034099198878, 1, 0, 1]
            }],
            ix: 12
          }
        }
      }]
    },
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 1,
    ind: 4,
    ty: 5,
    nm: 'BIOCHEMISTRY',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      rx: {
        a: 0,
        k: 0,
        ix: 8
      },
      ry: {
        a: 0,
        k: 0,
        ix: 9
      },
      rz: {
        a: 0,
        k: 0,
        ix: 10
      },
      or: {
        a: 0,
        k: [0, 0, 0],
        ix: 7
      },
      p: {
        a: 0,
        k: [682.5, 435, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    t: {
      d: {
        k: [{
          s: {
            s: 200,
            f: 'FjallaOne-Regular',
            t: 'BIOCHEMISTRY',
            j: 0,
            tr: 0,
            lh: 240,
            ls: 0,
            fc: [0.922, 0.922, 0.922]
          },
          t: 0
        }]
      },
      p: {},
      m: {
        g: 1,
        a: {
          a: 0,
          k: [0, 0],
          ix: 2
        }
      },
      a: [{
        nm: 'Animator 2',
        s: {
          t: 0,
          xe: {
            a: 0,
            k: 0,
            ix: 7
          },
          ne: {
            a: 0,
            k: 0,
            ix: 8
          },
          a: {
            a: 0,
            k: 100,
            ix: 4
          },
          b: 1,
          rn: 1,
          sh: 1,
          s: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 144,
              s: [0]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 167,
              s: [100]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 180,
              s: [100]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 239,
              s: [100]
            }, {
              t: 260.000010590017,
              s: [0]
            }],
            ix: 1
          },
          r: 1
        },
        a: {
          s: {
            a: 0,
            k: [100, 0, 100],
            ix: 3
          }
        }
      }]
    },
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 1,
    ind: 5,
    ty: 5,
    nm: 'MOLECULAR MECHANISMS',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      rx: {
        a: 0,
        k: 0,
        ix: 8
      },
      ry: {
        a: 0,
        k: 0,
        ix: 9
      },
      rz: {
        a: 0,
        k: 0,
        ix: 10
      },
      or: {
        a: 0,
        k: [0, 0, 0],
        ix: 7
      },
      p: {
        a: 0,
        k: [710.5, 315, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    t: {
      d: {
        k: [{
          s: {
            s: 200,
            f: 'FjallaOne-Regular',
            t: 'MOLECULAR\rMECHANISMS',
            j: 0,
            tr: 0,
            lh: 240.000015258789,
            ls: 0,
            fc: [0.922, 0.922, 0.922]
          },
          t: 0
        }]
      },
      p: {},
      m: {
        g: 1,
        a: {
          a: 0,
          k: [0, 0],
          ix: 2
        }
      },
      a: [{
        nm: 'Animator 1',
        s: {
          t: 0,
          xe: {
            a: 0,
            k: 0,
            ix: 7
          },
          ne: {
            a: 0,
            k: 0,
            ix: 8
          },
          a: {
            a: 0,
            k: 100,
            ix: 4
          },
          b: 1,
          rn: 0,
          sh: 1,
          s: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 265,
              s: [0]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 314,
              s: [100]
            }, {
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 375,
              s: [100]
            }, {
              t: 399.000016251603,
              s: [0]
            }],
            ix: 1
          },
          r: 1
        },
        a: {
          s: {
            a: 0,
            k: [100, 100, 100],
            ix: 3
          },
          rx: {
            a: 0,
            k: 0,
            ix: 6
          },
          ry: {
            a: 0,
            k: 90,
            ix: 7
          },
          r: {
            a: 0,
            k: 0,
            ix: 8
          },
          o: {
            a: 0,
            k: 1,
            ix: 9
          },
          bl: {
            a: 0,
            k: [40, 40],
            ix: 95
          }
        }
      }]
    },
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 6,
    ty: 4,
    nm: 'EM Mask',
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 90,
          s: [392.5, 437, 0],
          to: [0, 47, 0],
          ti: [0, -47, 0]
        }, {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 113,
          s: [392.5, 719, 0],
          to: [0, 0, 0],
          ti: [0, 0, 0]
        }, {
          i: {
            x: 0.833,
            y: 0.833
          },
          o: {
            x: 0.167,
            y: 0.167
          },
          t: 389,
          s: [392.5, 719, 0],
          to: [0, -46.333, 0],
          ti: [0, 46.333, 0]
        }, {
          t: 405.000016495988,
          s: [392.5, 441, 0]
        }],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [100, 113.147, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ty: 'rc',
        d: 1,
        s: {
          a: 0,
          k: [184.266, 79.618],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Rectangle Path 1',
        mn: 'ADBE Vector Shape - Rect',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 113,
            s: [257.383, -409.62],
            to: [-26.706, 0],
            ti: [26.706, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 131,
            s: [97.148, -409.62],
            to: [0, 0],
            ti: [0, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 377,
            s: [97.148, -409.62],
            to: [27.186, 0],
            ti: [-27.186, 0]
          }, {
            t: 389.000015844295,
            s: [260.266, -409.62]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle 3',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ty: 'rc',
        d: 1,
        s: {
          a: 0,
          k: [182.227, 80.288],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Rectangle Path 1',
        mn: 'ADBE Vector Shape - Rect',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 113,
            s: [-245.621, -411.729],
            to: [26.712, 0.074],
            ti: [-26.712, -0.074]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 131,
            s: [-85.352, -411.287],
            to: [0, 0],
            ti: [0, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 377,
            s: [-85.352, -411.287],
            to: [-26.816, 0],
            ti: [26.816, 0]
          }, {
            t: 389.000015844295,
            s: [-246.25, -411.287]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle 2',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 2,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ty: 'rc',
        d: 1,
        s: {
          a: 0,
          k: [1920, 1080],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Rectangle Path 1',
        mn: 'ADBE Vector Shape - Rect',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [-3.109, -535.883],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [23.041, -26.224],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle 1',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 3,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: 'EM',
    tt: 2,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          t: 259.773,
          s: [100]
        }, {
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          t: 261.614,
          s: [0]
        }, {
          i: {
            x: [0.833],
            y: [0.833]
          },
          o: {
            x: [0.167],
            y: [0.167]
          },
          t: 376,
          s: [0]
        }, {
          t: 392.000015966487,
          s: [100]
        }],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [406.5, 350, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [91.5, 126.5, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [318.829, 318.829, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [-7.981, 0.197], [-17.414, -0.039], [0, 0], [-4.437, 0.011], [0, 0], [0, 0], [-4.907, -0.121], [0, 0]],
            o: [[0, 0], [4.918, -0.122], [0, 0], [0, 0], [2.068, 0.005], [0, 0], [17.448, -0.038], [7.981, 0.197], [0, 0]],
            v: [[-69.245, -6.422], [-61.264, 6.215], [-5.04, 6.19], [-5.245, 6.225], [1.982, 6.206], [5.245, 6.215], [5.152, 6.199], [61.264, 6.225], [69.245, -6.411]],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 7,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 10,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 90,
            s: [89.443, 228.786],
            to: [0, -1.002],
            ti: [0, 1.002]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 131,
            s: [89.443, 222.772],
            to: [0, 0],
            ti: [0, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 385,
            s: [89.443, 222.772],
            to: [0, 1.002],
            ti: [0, -1.002]
          }, {
            t: 418.000017025489,
            s: [89.443, 228.786]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 90,
            s: [100, 100]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 131,
            s: [100, 46.683]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 385,
            s: [100, 46.683]
          }, {
            t: 418.000017025489,
            s: [100, 100]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Base',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [0, 0], [-2.75, 0], [0, 0], [0, 2.75], [0, 0]],
            o: [[0, 0], [0, 2.75], [0, 0], [2.75, 0], [0, 0], [0, 0]],
            v: [[-44.88, -44.397], [-44.88, 39.397], [-39.88, 44.397], [39.88, 44.397], [44.88, 39.397], [44.88, -44.397]],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 7,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 10,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.444, 61.897],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Group 2',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 2,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, -22.628], [27.586, 0], [0, 22.628], [-27.585, 0]],
            o: [[0, 22.628], [-27.585, 0], [0, -22.628], [27.586, 0]],
            v: [[49.947, -0.001], [0, 40.973], [-49.947, -0.001], [0, -40.973]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 7,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 10,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.443, 166.419],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 102,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 144,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 396,
            s: [0]
          }, {
            t: 418.000017025489,
            s: [99]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'WindowFrame',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 3,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[7.612, 13.371], [14.462, 25.125], [5.287, -2.805], [-1.129, -1.943], [-12.772, -22.413], [-2.173, -5.543], [14.672, 0.108], [40.674, 0.001], [2.472, 0.996], [1.821, 5.003], [0.188, 0.947], [-0.367, 2.263], [-0.233, 0.596], [-2.362, 4.388], [-0.365, 0.636], [0, 0], [-0.139, 0.244], [-12.957, 22.307], [2.112, 1.12], [2.74, -4.759], [14.344, -25.193], [-0.144, -5.316], [-0.012, -0.285], [-0.376, -1.583], [-3.787, -3.893], [-7.872, 0.117], [-0.132, 0.002], [-0.307, 0], [-20.319, 0.004], [-20.318, -0.032], [-4.837, 3.534]],
            o: [[-14.343, -25.193], [-2.739, -4.759], [-2.111, 1.12], [12.956, 22.307], [2.948, 5.174], [3.83, 9.77], [-40.672, -0.301], [-2.991, 0], [-5.306, -2.363], [-0.284, -0.876], [-0.503, -2.529], [0.145, -0.635], [1.814, -4.627], [0.371, -0.63], [0, 0], [0.138, -0.245], [12.771, -22.413], [1.129, -1.943], [-5.287, -2.805], [-14.462, 25.125], [-2.884, 5.067], [0, 0.275], [0.065, 1.484], [1.129, 5.111], [4.507, 4.78], [0.133, -0.002], [0.306, 0.007], [20.319, -0.032], [20.318, 0.004], [5.939, 0.009], [12.053, -8.802]],
            v: [[83.291, 18.495], [40.068, -56.975], [33.239, -58.736], [32.201, -54.669], [70.879, 12.363], [78.593, 28.514], [59.448, 53.887], [-62.573, 53.785], [-70.797, 52.248], [-81.739, 40.244], [-82.465, 37.521], [-82.581, 30.365], [-82.016, 28.514], [-75.718, 14.958], [-74.611, 13.062], [-74.706, 13.104], [-74.301, 12.363], [-35.623, -54.669], [-36.662, -58.736], [-43.491, -56.975], [-86.714, 18.495], [-90.759, 34.346], [-90.755, 35.176], [-90.087, 39.801], [-82.652, 53.576], [-63.977, 61.616], [-63.58, 61.613], [-62.667, 61.638], [-1.711, 61.591], [59.244, 61.638], [75.482, 56.833]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [91.153, 165.881],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Group 4',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 4,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, -22.628], [27.586, 0], [0, 22.628], [-27.585, 0]],
            o: [[0, 22.628], [-27.585, 0], [0, -22.628], [27.586, 0]],
            v: [[49.947, -0.001], [0, 40.973], [-49.947, -0.001], [0, -40.973]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0, 1, 0.234999997008, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.443, 166.226],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 54,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 90,
            s: [100]
          }, {
            t: 111.000004521123,
            s: [0]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Green',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 5,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        d: 1,
        ty: 'el',
        s: {
          a: 0,
          k: [76.39, 28.625],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        nm: 'Ellipse Path 1',
        mn: 'ADBE Vector Shape - Ellipse',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.771706461906, 1, 0.765609681606, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.779, 194.422],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 76.956],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 90,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 121,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 398,
            s: [0]
          }, {
            t: 420.000017106951,
            s: [100]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Phosphor Screen',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 6,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: 'FlaskMask',
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [387.5, 600, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [100, 118.709, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ty: 'rc',
        d: 1,
        s: {
          a: 0,
          k: [254.898, 150.009],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Rectangle Path 1',
        mn: 'ADBE Vector Shape - Rect',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 276.96,
            s: [13.652, -415.866],
            to: [16.422, -1.143],
            ti: [-16.422, 1.143]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 281.871,
            s: [112.184, -422.724],
            to: [0, 0],
            ti: [0, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 386,
            s: [112.184, -422.724],
            to: [-17.885, 0],
            ti: [17.885, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 393,
            s: [4.875, -422.724],
            to: [0, 0],
            ti: [0, 0]
          }, {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 399,
            s: [4.875, -422.724],
            to: [0.154, -6.242],
            ti: [-0.154, 6.242]
          }, {
            t: 402.000016373796,
            s: [5.797, -460.177]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0.918, -75.513],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 118,
            s: [100, 95.085]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 135,
            s: [100, -0.475]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 297,
            s: [24.064, 3.122]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 304,
            s: [24.064, 124.961]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 386,
            s: [24.064, 124.961]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 393,
            s: [116.965, 99.307]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 399,
            s: [116.965, 99.307]
          }, {
            t: 402.000016373796,
            s: [116.965, 126.938]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'NeckMask',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ty: 'rc',
        d: 1,
        s: {
          a: 0,
          k: [526.859, 211.367],
          ix: 2
        },
        p: {
          a: 0,
          k: [0, 0],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 4
        },
        nm: 'Rectangle Path 1',
        mn: 'ADBE Vector Shape - Rect',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 0,
          ix: 5
        },
        lc: 1,
        lj: 1,
        ml: 4,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0, 0, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 260.386,
            s: [5.449, -191.293],
            to: [-13.983, -18.269],
            ti: [13.983, 18.269]
          }, {
            t: 261.000010630748,
            s: [-78.449, -300.907]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0.836, -105.092],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 144,
            s: [100, 100]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 164,
            s: [100, 3.391]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 242,
            s: [100, 3.654]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 258.545,
            s: [100, 99.728]
          }, {
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 261,
            s: [6.463, 4.632]
          }, {
            t: 278.187511330809,
            s: [6.463, 114.061]
          }],
          ix: 3
        },
        r: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 258.545,
            s: [0]
          }, {
            t: 261.000010630748,
            s: [34.129]
          }],
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 258.545,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 259.773,
            s: [0]
          }, {
            t: 262.841260705744,
            s: [100]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'LowerMask',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 2,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 9,
    ty: 4,
    nm: 'Flask',
    tt: 2,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [400.5, 367, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [89.5, 96.5, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [318.829, 318.829, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [0, 0]],
            o: [[0, 0], [0, 0]],
            v: [[49.47, 5.5], [129.158, 5.5]],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 11,
          ix: 5
        },
        lc: 2,
        lj: 1,
        ml: 10,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.02, 5.559],
          ix: 2
        },
        a: {
          a: 0,
          k: [89.02, 5.559],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 115,
            s: [1, 1]
          }, {
            t: 139.000005661586,
            s: [100, 100]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 114,
            s: [0]
          }, {
            t: 138.000005620855,
            s: [100]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Top',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, -4.575], [4.574, 0], [0, 4.575], [-4.575, 0]],
            o: [[0, 4.575], [-4.575, 0], [0, -4.575], [4.574, 0]],
            v: [[8.283, 0], [0, 8.283], [-8.283, 0], [0, -8.284]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 163,
            s: [119.798, 165.198],
            to: [0.26, -1.653],
            ti: [-0.26, 1.653]
          }, {
            t: 187.000007616666,
            s: [121.357, 155.28]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 163,
            s: [33, 33]
          }, {
            t: 187.000007616666,
            s: [100, 100]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 163,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 187,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 257,
            s: [98.919]
          }, {
            t: 258.000010508555,
            s: [0]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'BubbleBottom',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 2,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, -3.105], [3.105, 0], [0, 3.105], [-3.106, 0]],
            o: [[0, 3.105], [-3.106, 0], [0, -3.105], [3.105, 0]],
            v: [[5.623, 0], [-0.001, 5.623], [-5.622, 0], [-0.001, -5.623]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 167,
            s: [91.67, 167.432],
            to: [-0.393, -4.176],
            ti: [0.393, 4.176]
          }, {
            t: 197.000008023974,
            s: [89.314, 142.374]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 167,
            s: [39, 39]
          }, {
            t: 197.000008023974,
            s: [100, 100]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 167,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 197,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 257,
            s: [99.388]
          }, {
            t: 258.000010508555,
            s: [0]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'BubbleMiddle',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 3,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, -6.211], [6.211, 0], [0, 6.211], [-6.211, 0]],
            o: [[0, 6.211], [-6.211, 0], [0, -6.211], [6.211, 0]],
            v: [[11.245, 0], [0, 11.246], [-11.246, 0], [0, -11.246]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 1,
          k: [{
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 171,
            s: [104.816, 169.076],
            to: [1.633, -7.588],
            ti: [-1.633, 7.588]
          }, {
            t: 206.000008390552,
            s: [114.615, 123.55]
          }],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 1,
          k: [{
            i: {
              x: [0.833, 0.833],
              y: [0.833, 0.833]
            },
            o: {
              x: [0.167, 0.167],
              y: [0.167, 0.167]
            },
            t: 171,
            s: [24, 24]
          }, {
            t: 206.000008390552,
            s: [100, 100]
          }],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 171,
            s: [0]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 206,
            s: [100]
          }, {
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 257,
            s: [100]
          }, {
            t: 258.000010508555,
            s: [0]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'BubbleTop',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 4,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[-4.112, 7.479], [0, 0], [-5.519, 0], [0, 0], [-2.201, -4.159], [0, 0], [10.029, 0], [0, 0]],
            o: [[0, 0], [2.244, -4.081], [0, 0], [5.59, 0], [0, 0], [3.949, 7.462], [0, 0], [-10.114, 0]],
            v: [[-70.389, 19.122], [-44.307, -28.319], [-31.543, -35.03], [32.602, -35.03], [45.445, -28.174], [70.552, 19.267], [57.71, 35.03], [-57.624, 35.03]],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0, 1, 0.234999997008, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.272, 138.827],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 257,
            s: [100]
          }, {
            t: 258.158760515021,
            s: [2]
          }],
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Liquid',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 5,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [[0, 0], [-0.139, 0.243], [-0.314, 0.55], [-1.978, 3.45], [-5.522, 9.552], [-5.259, 9.055], [-0.073, 0.14], [-1.905, 3.281], [0, 1.924], [0, 0], [1.1, 0], [0, 0], [0, -1.1], [0, 0], [0.136, -0.236], [1.488, -2.586], [1.047, -1.818], [10.265, -17.963], [3.451, -6.057], [0.386, -0.677], [0.04, -0.072], [0.235, -0.474], [0.089, -0.19], [0.209, -0.513], [0.052, -0.131], [0.161, -0.478], [0.057, -0.183], [0.142, -0.559], [0.023, -0.097], [0.095, -0.501], [0.028, -0.164], [0.065, -0.576], [0.009, -0.084], [0.026, -0.521], [0.005, -0.144], [-0.015, -0.583], [0, -0.022], [-0.012, -0.285], [-0.308, -1.41], [-0.019, -0.09], [-0.018, -0.077], [-0.009, -0.038], [-0.17, -0.582], [-0.003, -0.011], [-0.215, -0.588], [-0.022, -0.058], [-0.591, -1.106], [-0.027, -0.049], [-0.752, -1.032], [-0.029, -0.039], [-0.911, -0.94], [-0.013, -0.014], [-7.873, 0.117], [-0.133, 0.002], [-0.307, 0], [0, 0], [-20.317, 0.004], [-20.318, -0.032], [0, 0], [-0.304, 0.007], [-0.133, -0.002], [-4.507, 4.78], [-0.014, 0.013], [-0.761, 1.035], [-0.028, 0.04], [-0.601, 1.11], [-0.027, 0.05], [-0.438, 1.169], [-0.021, 0.058], [-0.176, 0.6], [-0.003, 0.011], [-0.134, 0.592], [-0.009, 0.039], [-0.018, 0.078], [-0.018, 0.09], [-0.058, 1.326], [0, 0.275], [0, 0.021], [0.021, 0.585], [0.008, 0.145], [0.054, 0.523], [0.009, 0.084], [0.1, 0.576], [0.032, 0.164], [0.122, 0.501], [0.024, 0.097], [0.176, 0.555], [0.061, 0.183], [0.186, 0.475], [0.052, 0.13], [0.239, 0.506], [0.093, 0.188], [0.262, 0.468], [0.041, 0.072], [0.386, 0.677], [3.955, 6.912], [10.322, 17.931], [0.616, 0.907], [1.384, 2.405], [0.118, 0.212], [0, 0], [1.1, 0], [0, 0], [0, -1.1], [0, 0], [-0.471, -0.81], [-2.138, -3.683], [-0.087, -0.149], [-5.245, -9.063], [-5.011, -8.734], [-1.97, -3.454], [-0.307, -0.538], [-0.136, -0.245], [0, 0], [-0.354, -0.602], [-0.038, -0.07], [-0.47, -0.927], [-0.158, -0.321], [-0.375, -0.797], [-0.29, -0.647], [-0.229, -0.529], [-0.501, -1.278], [-0.145, -0.643], [0.501, -2.521], [0.279, -0.862], [0.014, -0.038], [0.277, -0.586], [0.003, -0.008], [0.799, -1.102], [0.011, -0.015], [0.442, -0.5], [0.028, -0.03], [0.494, -0.457], [0.015, -0.014], [1.967, -0.88], [0.014, -0.006], [2.987, 0], [8.858, 0.011], [11.431, -0.007], [11.429, -0.032], [8.858, 0], [2.469, 0.992], [0.013, 0.007], [1.53, 1.408], [0.015, 0.014], [0.445, 0.498], [0.027, 0.031], [0.39, 0.535], [0.011, 0.015], [0.572, 1.205], [0.003, 0.008], [0.221, 0.6], [0.013, 0.038], [0.185, 0.931], [-0.364, 2.256], [-0.236, 0.603], [-0.545, 1.264], [-0.238, 0.528], [-0.3, 0.642], [-0.392, 0.79], [-0.16, 0.318], [-0.49, 0.914], [-0.038, 0.07]],
            o: [[0.137, -0.245], [0.306, -0.538], [1.97, -3.454], [5.01, -8.734], [5.245, -9.063], [0.087, -0.149], [2.137, -3.683], [0.47, -0.81], [0, 0], [0, -1.1], [0, 0], [-1.1, 0], [0, 0], [-0.118, 0.212], [-1.384, 2.405], [-0.479, 0.503], [-10.32, 17.931], [-3.956, 6.912], [-0.385, 0.677], [-0.041, 0.072], [-0.262, 0.468], [-0.093, 0.188], [-0.239, 0.506], [-0.054, 0.13], [-0.186, 0.475], [-0.061, 0.183], [-0.176, 0.555], [-0.025, 0.097], [-0.122, 0.501], [-0.031, 0.164], [-0.1, 0.576], [-0.009, 0.084], [-0.054, 0.523], [-0.007, 0.145], [-0.02, 0.585], [0, 0.021], [0, 0.275], [0.058, 1.326], [0.018, 0.09], [0.018, 0.078], [0.009, 0.039], [0.133, 0.592], [0.004, 0.011], [0.176, 0.6], [0.022, 0.058], [0.437, 1.169], [0.026, 0.05], [0.6, 1.11], [0.028, 0.04], [0.762, 1.035], [0.013, 0.013], [4.508, 4.78], [0.132, -0.002], [0.305, 0.007], [0, 0], [20.318, -0.032], [20.319, 0.004], [0, 0], [0.308, 0], [0.133, 0.002], [7.872, 0.117], [0.013, -0.014], [0.91, -0.94], [0.029, -0.039], [0.752, -1.032], [0.026, -0.049], [0.591, -1.106], [0.021, -0.058], [0.215, -0.588], [0.004, -0.011], [0.171, -0.582], [0.009, -0.038], [0.019, -0.077], [0.018, -0.09], [0.308, -1.41], [0.012, -0.285], [0, -0.022], [0.015, -0.583], [-0.005, -0.144], [-0.026, -0.521], [-0.009, -0.084], [-0.065, -0.576], [-0.027, -0.164], [-0.094, -0.501], [-0.023, -0.097], [-0.143, -0.559], [-0.057, -0.183], [-0.161, -0.478], [-0.052, -0.131], [-0.209, -0.513], [-0.089, -0.19], [-0.235, -0.474], [-0.04, -0.072], [-0.386, -0.677], [-3.451, -6.057], [-10.265, -17.963], [-1.046, -1.818], [-1.488, -2.586], [-0.136, -0.236], [0, 0], [0, -1.1], [0, 0], [-1.1, 0], [0, 0], [0, 1.924], [1.904, 3.281], [0.072, 0.14], [5.259, 9.055], [5.522, 9.552], [1.977, 3.45], [0.314, 0.55], [0.139, 0.243], [0, 0], [0.348, 0.607], [0.038, 0.07], [0.491, 0.914], [0.16, 0.318], [0.392, 0.789], [0.301, 0.643], [0.236, 0.527], [0.545, 1.265], [0.236, 0.603], [0.364, 2.256], [-0.185, 0.931], [-0.014, 0.038], [-0.221, 0.6], [-0.003, 0.008], [-0.572, 1.205], [-0.012, 0.015], [-0.39, 0.535], [-0.026, 0.031], [-0.444, 0.498], [-0.015, 0.014], [-1.53, 1.408], [-0.013, 0.007], [-2.468, 0.992], [-8.857, 0], [-11.429, -0.032], [-11.429, -0.007], [-8.858, 0.011], [-2.985, 0], [-0.014, -0.006], [-1.967, -0.88], [-0.015, -0.014], [-0.494, -0.457], [-0.026, -0.03], [-0.441, -0.5], [-0.011, -0.015], [-0.799, -1.102], [-0.003, -0.008], [-0.277, -0.586], [-0.013, -0.038], [-0.279, -0.862], [-0.501, -2.521], [0.145, -0.643], [0.501, -1.278], [0.23, -0.532], [0.289, -0.645], [0.375, -0.797], [0.158, -0.32], [0.47, -0.927], [0.039, -0.07], [0, 0]],
            v: [[-72.992, 39.67], [-72.589, 38.931], [-71.654, 37.292], [-65.729, 26.94], [-49.673, -0.926], [-33.913, -28.101], [-33.688, -28.525], [-27.601, -39.01], [-27.244, -42.01], [-27.244, -86.301], [-29.244, -88.301], [-33.096, -88.301], [-35.096, -86.301], [-35.096, -41.98], [-35.469, -41.316], [-39.783, -33.82], [-41.781, -30.408], [-72.652, 23.438], [-83.844, 43.033], [-85.005, 45.063], [-85.118, 45.282], [-85.863, 46.696], [-86.136, 47.263], [-86.811, 48.791], [-86.965, 49.183], [-87.484, 50.613], [-87.663, 51.162], [-88.145, 52.833], [-88.212, 53.124], [-88.535, 54.627], [-88.624, 55.119], [-88.876, 56.848], [-88.898, 57.1], [-89.016, 58.666], [-89.036, 59.099], [-89.048, 60.851], [-89.049, 60.915], [-89.046, 61.744], [-88.486, 65.867], [-88.427, 66.136], [-88.378, 66.369], [-88.348, 66.483], [-87.895, 68.245], [-87.885, 68.278], [-87.296, 70.06], [-87.229, 70.234], [-85.686, 73.651], [-85.605, 73.8], [-83.576, 77.017], [-83.49, 77.135], [-80.98, 80.101], [-80.942, 80.143], [-62.266, 88.184], [-61.869, 88.181], [-60.956, 88.206], [-60.953, 88.206], [-0.001, 88.159], [60.954, 88.206], [60.956, 88.206], [61.869, 88.181], [62.268, 88.184], [80.943, 80.143], [80.982, 80.101], [83.49, 77.135], [83.576, 77.017], [85.607, 73.8], [85.688, 73.651], [87.23, 70.234], [87.296, 70.06], [87.886, 68.278], [87.895, 68.245], [88.348, 66.483], [88.378, 66.369], [88.428, 66.136], [88.486, 65.867], [89.046, 61.744], [89.05, 60.915], [89.049, 60.851], [89.037, 59.099], [89.016, 58.666], [88.899, 57.1], [88.876, 56.848], [88.624, 55.119], [88.535, 54.627], [88.212, 53.124], [88.145, 52.833], [87.663, 51.162], [87.485, 50.613], [86.965, 49.183], [86.813, 48.791], [86.137, 47.263], [85.863, 46.696], [85.119, 45.282], [85.005, 45.063], [83.844, 43.033], [72.654, 23.438], [41.781, -30.408], [39.783, -33.82], [35.47, -41.316], [35.096, -41.98], [35.096, -86.301], [33.096, -88.301], [29.245, -88.301], [27.245, -86.301], [27.245, -42.01], [27.603, -39.01], [33.689, -28.525], [33.914, -28.101], [49.674, -0.926], [65.731, 26.94], [71.654, 37.292], [72.589, 38.931], [72.992, 39.67], [72.902, 39.63], [73.959, 41.441], [74.074, 41.652], [75.511, 44.415], [75.989, 45.373], [77.14, 47.752], [78.023, 49.689], [78.729, 51.27], [80.303, 55.083], [80.874, 56.955], [80.756, 64.089], [80.042, 66.766], [80.002, 66.879], [79.257, 68.66], [79.247, 68.682], [77.187, 72.156], [77.154, 72.201], [75.904, 73.754], [75.825, 73.845], [74.419, 75.281], [74.373, 75.322], [69.114, 78.802], [69.074, 78.821], [60.863, 80.352], [34.29, 80.329], [-0.001, 80.291], [-34.29, 80.329], [-60.863, 80.352], [-69.074, 78.821], [-69.113, 78.802], [-74.372, 75.322], [-74.419, 75.281], [-75.826, 73.845], [-75.906, 73.754], [-77.154, 72.201], [-77.186, 72.156], [-79.246, 68.682], [-79.257, 68.66], [-80.001, 66.879], [-80.042, 66.766], [-80.755, 64.089], [-80.873, 56.955], [-80.302, 55.083], [-78.729, 51.271], [-78.02, 49.685], [-77.139, 47.753], [-75.988, 45.372], [-75.51, 44.415], [-74.074, 41.652], [-73.958, 41.441]],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [89.313, 104.108],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Glass',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 6,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 10,
    ty: 0,
    nm: 'Pre-comp 1',
    refId: 'comp_0',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [951.5, 355, 0],
        ix: 2,
        l: 2
      },
      a: {
        a: 0,
        k: [883, 354, 0],
        ix: 1,
        l: 2
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6,
        l: 2
      }
    },
    ao: 0,
    w: 1766,
    h: 708,
    ip: 0,
    op: 900.000036657751,
    st: 0,
    bm: 0
  }],
  markers: [],
  chars: [{
    ch: 'M',
    size: 200,
    style: 'Regular',
    w: 70.41,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0.081, 3.906], [0.13, 3.271], [0.163, 2.507], [0.13, 1.465], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.163, -2.506], [0.13, -3.271], [0.081, -3.906], [0, -4.231], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.488, -3.239], [0.455, -2.864], [0, 0], [0.488, 3.239], [0.846, 3.581], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, -4.231], [-0.082, -3.906], [-0.13, -3.271], [-0.163, -2.506], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.13, 1.465], [-0.163, 2.507], [-0.13, 3.271], [-0.082, 3.906], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.847, 3.581], [-0.488, 3.239], [0, 0], [-0.456, -2.864], [-0.488, -3.239], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [18.945, 0], [18.945, -27.588], [18.823, -39.795], [18.506, -50.562], [18.066, -59.229], [17.627, -65.186], [18.555, -65.186], [31.25, -10.742], [39.258, -10.742], [51.855, -65.186], [52.783, -65.186], [52.344, -59.229], [51.904, -50.562], [51.587, -39.795], [51.465, -27.588], [51.465, 0], [63.281, 0], [63.281, -83.398], [47.119, -83.398], [38.867, -51.123], [36.865, -40.894], [35.449, -31.738], [35.059, -31.738], [33.643, -40.894], [31.641, -51.123], [23.633, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'M',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'M',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'O',
    size: 200,
    style: 'Regular',
    w: 50.98,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[-1.498, 0.227], [-1.514, 0.7], [-1.449, 1.254], [-1.107, 2.068], [-0.684, 2.979], [0, 4.134], [0, 0], [0.667, 3.011], [1.106, 2.035], [1.432, 1.189], [1.514, 0.603], [1.514, 0.179], [1.237, 0], [1.53, -0.195], [1.546, -0.635], [1.416, -1.204], [1.106, -2.034], [0.667, -2.979], [0, -4.199], [0, 0], [-0.652, -3.011], [-1.091, -2.051], [-1.416, -1.253], [-1.53, -0.684], [-1.562, -0.212], [-1.335, 0]],
              o: [[1.497, -0.228], [1.514, -0.7], [1.448, -1.253], [1.106, -2.067], [0.684, -2.979], [0, 0], [0, -4.264], [-0.668, -3.011], [-1.107, -2.034], [-1.433, -1.188], [-1.514, -0.602], [-1.514, -0.179], [-1.302, 0], [-1.53, 0.195], [-1.546, 0.635], [-1.416, 1.205], [-1.107, 2.035], [-0.668, 2.979], [0, 0], [0, 4.167], [0.651, 3.011], [1.09, 2.051], [1.416, 1.254], [1.53, 0.684], [1.562, 0.211], [1.204, 0]],
              v: [[29.639, 0.391], [34.155, -1.001], [38.599, -3.931], [42.432, -8.911], [45.117, -16.479], [46.143, -27.148], [46.143, -56.689], [45.142, -67.603], [42.48, -75.171], [38.672, -80.005], [34.253, -82.69], [29.712, -83.862], [25.586, -84.131], [21.338, -83.838], [16.724, -82.593], [12.28, -79.834], [8.496, -74.976], [5.835, -67.456], [4.834, -56.689], [4.834, -27.148], [5.811, -16.382], [8.423, -8.789], [12.183, -3.833], [16.602, -0.928], [21.24, 0.415], [25.586, 0.732]],
              c: true
            },
            ix: 2
          },
          nm: 'O',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[0.944, 0.423], [0.618, 1.042], [0.309, 1.709], [0, 2.605], [0, 0], [-0.31, 1.791], [-0.619, 1.091], [-0.945, 0.456], [-1.27, 0], [-0.928, -0.455], [-0.603, -1.09], [-0.31, -1.79], [0, -2.669], [0, 0], [0.309, -1.709], [0.602, -1.041], [0.928, -0.423], [1.237, 0]],
              o: [[-0.945, -0.423], [-0.619, -1.041], [-0.31, -1.709], [0, 0], [0, -2.669], [0.309, -1.79], [0.618, -1.09], [0.944, -0.455], [1.237, 0], [0.928, 0.456], [0.602, 1.091], [0.309, 1.791], [0, 0], [0, 2.605], [-0.31, 1.709], [-0.603, 1.042], [-0.928, 0.423], [-1.27, 0]],
              v: [[22.266, -9.424], [19.922, -11.621], [18.53, -15.747], [18.066, -22.217], [18.066, -60.156], [18.53, -66.846], [19.922, -71.167], [22.266, -73.486], [25.586, -74.17], [28.833, -73.486], [31.128, -71.167], [32.495, -66.846], [32.959, -60.156], [32.959, -22.217], [32.495, -15.747], [31.128, -11.621], [28.833, -9.424], [25.586, -8.789]],
              c: true
            },
            ix: 2
          },
          nm: 'O',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'O',
        np: 5,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'L',
    size: 200,
    style: 'Regular',
    w: 37.89,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [37.012, 0], [37.012, -9.961], [19.775, -9.961], [19.775, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'L',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'L',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'E',
    size: 200,
    style: 'Regular',
    w: 40.53,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [38.525, 0], [38.525, -9.961], [19.775, -9.961], [19.775, -38.525], [33.887, -38.525], [33.887, -48.486], [19.775, -48.486], [19.775, -73.438], [38.037, -73.438], [38.037, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'E',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'E',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'C',
    size: 200,
    style: 'Regular',
    w: 45.7,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[-3.06, 3.191], [0, 6.706], [0, 0], [0, 0], [0, 0], [0.342, -1.221], [0.569, -0.797], [0.748, -0.374], [0.813, 0], [0.895, 0.439], [0.553, 1.042], [0.244, 1.726], [0, 2.605], [0, 0], [-0.31, 1.791], [-0.586, 1.091], [-0.879, 0.456], [-1.172, 0], [-1.009, -2.278], [0, -4.59], [0, 0], [0, 0], [-0.179, 1.514], [0, 1.791], [0.569, 2.148], [1.35, 1.611], [2.229, 0.928], [3.32, 0], [1.481, -0.195], [1.497, -0.635], [1.399, -1.204], [1.074, -2.034], [0.651, -2.979], [0, -4.199], [0, 0], [-0.635, -3.011], [-1.058, -2.051], [-1.384, -1.253], [-1.514, -0.684], [-1.514, -0.212], [-1.302, 0]],
              o: [[3.059, -3.19], [0, 0], [0, 0], [0, 0], [0, 1.66], [-0.342, 1.221], [-0.57, 0.798], [-0.749, 0.375], [-1.27, 0], [-0.896, -0.439], [-0.554, -1.041], [-0.244, -1.725], [0, 0], [0, -2.669], [0.309, -1.79], [0.586, -1.09], [0.879, -0.455], [1.953, 0], [1.009, 2.279], [0, 0], [0, 0], [0.358, -1.823], [0.179, -1.514], [0, -2.409], [-0.57, -2.148], [-1.351, -1.611], [-2.23, -0.928], [-1.27, 0], [-1.482, 0.195], [-1.498, 0.635], [-1.4, 1.205], [-1.074, 2.035], [-0.652, 2.979], [0, 0], [0, 4.167], [0.635, 3.011], [1.057, 2.051], [1.383, 1.254], [1.514, 0.684], [1.514, 0.211], [5.729, -0.033]],
              v: [[38.281, -4.102], [42.871, -18.945], [42.871, -26.66], [31.299, -26.66], [31.299, -18.506], [30.786, -14.185], [29.419, -11.157], [27.441, -9.399], [25.098, -8.838], [21.851, -9.497], [19.678, -11.719], [18.481, -15.869], [18.115, -22.363], [18.115, -60.449], [18.579, -67.139], [19.922, -71.46], [22.119, -73.779], [25.195, -74.463], [29.639, -71.045], [31.152, -60.742], [31.152, -56.494], [41.406, -56.494], [42.212, -61.499], [42.48, -66.455], [41.626, -73.291], [38.745, -78.931], [33.374, -82.739], [25.049, -84.131], [20.923, -83.838], [16.455, -82.593], [12.109, -79.834], [8.398, -74.976], [5.811, -67.456], [4.834, -56.689], [4.834, -27.148], [5.786, -16.382], [8.325, -8.789], [11.987, -3.833], [16.333, -0.928], [20.874, 0.415], [25.098, 0.732]],
              c: true
            },
            ix: 2
          },
          nm: 'C',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'C',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'U',
    size: 200,
    style: 'Regular',
    w: 53.42,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [-0.635, -2.881], [-1.074, -1.953], [-1.367, -1.139], [-1.465, -0.602], [-1.449, -0.163], [-1.205, 0], [-1.465, 0.163], [-1.482, 0.603], [-1.384, 1.14], [-1.074, 1.953], [-0.652, 2.898], [0, 4.07], [0, 0], [0, 0], [0, 0], [0.309, -1.725], [0.602, -1.025], [0.928, -0.439], [1.237, 0], [0.895, 0.439], [0.569, 1.025], [0.26, 1.726], [0, 2.605], [0, 0], [0, 0]],
              o: [[0, 4.102], [0.635, 2.881], [1.074, 1.953], [1.367, 1.14], [1.465, 0.603], [1.448, 0.163], [1.204, 0], [1.465, -0.163], [1.481, -0.602], [1.383, -1.139], [1.074, -1.953], [0.651, -2.897], [0, 0], [0, 0], [0, 0], [0, 2.605], [-0.31, 1.726], [-0.603, 1.025], [-0.928, 0.439], [-1.237, 0], [-0.896, -0.439], [-0.57, -1.025], [-0.261, -1.725], [0, 0], [0, 0], [0, 0]],
              v: [[6.836, -25.635], [7.788, -15.161], [10.352, -7.91], [14.014, -3.271], [18.262, -0.659], [22.632, 0.488], [26.611, 0.732], [30.615, 0.488], [35.034, -0.659], [39.331, -3.271], [43.018, -7.91], [45.605, -15.186], [46.582, -25.635], [46.582, -83.398], [33.984, -83.398], [33.984, -22.266], [33.521, -15.771], [32.153, -11.646], [29.858, -9.448], [26.611, -8.789], [23.413, -9.448], [21.216, -11.646], [19.971, -15.771], [19.58, -22.266], [19.58, -83.398], [6.836, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'U',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'U',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'A',
    size: 200,
    style: 'Regular',
    w: 47.22,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[0.928, 0], [13.77, 0], [15.967, -14.941], [31.201, -14.941], [33.496, 0], [46.289, 0], [30.859, -83.398], [16.309, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'A',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[17.432, -24.463], [23.34, -66.016], [23.877, -66.016], [29.736, -24.463]],
              c: true
            },
            ix: 2
          },
          nm: 'A',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'A',
        np: 5,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'R',
    size: 200,
    style: 'Regular',
    w: 51.17,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.823, 3.988], [0, 6.348], [0, 0], [0.813, 2.654], [1.35, 1.758], [1.741, 1.009], [1.871, 0.505], [1.871, 0.13], [1.562, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.548, -1.758], [1.823, -3.987], [0, 0], [0, -3.776], [-0.814, -2.653], [-1.351, -1.758], [-1.742, -1.009], [-1.872, -0.504], [-1.872, -0.13], [0, 0], [0, 0]],
              v: [[7.129, 0], [19.531, 0], [19.531, -31.201], [24.268, -31.201], [35.352, 0], [48.73, 0], [35.352, -33.35], [43.408, -41.968], [46.143, -57.471], [46.143, -59.57], [44.922, -69.214], [41.675, -75.83], [37.036, -79.98], [31.616, -82.251], [26.001, -83.203], [20.85, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'R',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [-1.53, -0.488], [-0.928, -1.009], [-0.391, -1.562], [0, -2.148], [0, 0], [0.423, -1.904], [0.944, -1.155], [1.53, -0.488], [2.213, 0]],
              o: [[0, 0], [0, 0], [2.311, 0], [1.53, 0.488], [0.928, 1.009], [0.391, 1.562], [0, 0], [0, 2.8], [-0.423, 1.904], [-0.945, 1.156], [-1.53, 0.488], [0, 0]],
              v: [[19.531, -40.332], [19.531, -74.17], [21.436, -74.17], [27.197, -73.438], [30.884, -71.191], [32.861, -67.334], [33.447, -61.768], [33.447, -55.176], [32.812, -48.12], [30.762, -43.53], [27.051, -41.064], [21.436, -40.332]],
              c: true
            },
            ix: 2
          },
          nm: 'R',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'R',
        np: 5,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: '\r',
    size: 200,
    style: 'Regular',
    w: 0,
    fFamily: 'Fjalla One'
  }, {
    ch: 'H',
    size: 200,
    style: 'Regular',
    w: 54.64,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [19.775, 0], [19.775, -38.525], [34.766, -38.525], [34.766, 0], [47.412, 0], [47.412, -83.398], [34.766, -83.398], [34.766, -48.486], [19.775, -48.486], [19.775, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'H',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'H',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'N',
    size: 200,
    style: 'Regular',
    w: 55.03,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0.098, 3.076], [0.13, 2.312], [0.163, 1.709], [0.098, 1.465], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.098, -2.571], [-0.13, -2.034], [-0.163, -1.595], [-0.098, -1.302], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, -4.231], [-0.098, -3.076], [-0.13, -2.311], [-0.163, -1.709], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 3.223], [0.098, 2.572], [0.13, 2.035], [0.163, 1.595], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [18.359, 0], [18.359, -24.512], [18.213, -35.474], [17.871, -43.555], [17.432, -49.585], [17.041, -54.346], [17.432, -54.346], [37.549, 0], [47.9, 0], [47.9, -83.398], [36.572, -83.398], [36.572, -52.979], [36.719, -44.287], [37.061, -37.378], [37.5, -31.934], [37.891, -27.588], [37.598, -27.588], [17.383, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'N',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'N',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'I',
    size: 200,
    style: 'Regular',
    w: 26.9,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[7.129, 0], [19.775, 0], [19.775, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'I',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'I',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'S',
    size: 200,
    style: 'Regular',
    w: 46.68,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[-0.603, -2.116], [-1.482, -1.66], [-2.49, -1.009], [-3.777, 0], [-2.441, 0.895], [-1.726, 1.66], [-0.928, 2.377], [0, 2.962], [1.432, 3.207], [2.669, 3.484], [0, 0], [0.488, 0.749], [0.342, 0.798], [0.179, 0.945], [0, 1.172], [-1.172, 1.318], [-2.377, 0], [-1.27, -2.36], [0, -4.427], [0, 0], [0, 0], [-0.277, 1.514], [0, 1.791], [0.602, 2.1], [1.465, 1.693], [2.457, 1.042], [3.678, 0], [2.393, -0.928], [1.627, -1.676], [0.862, -2.311], [0, -2.766], [-1.27, -3.043], [-2.344, -2.995], [0, 0], [-0.749, -1.188], [-0.439, -1.074], [-0.179, -1.09], [0, -1.302], [1.27, -1.318], [2.409, 0], [1.057, 0.603], [0.635, 1.189], [0.276, 1.726], [0, 2.246], [0, 0], [0, 0], [0.211, -1.514], [0, -1.79]],
              o: [[0.602, 2.116], [1.481, 1.66], [2.49, 1.009], [3.059, 0], [2.441, -0.895], [1.725, -1.66], [0.928, -2.376], [0, -3.58], [-1.433, -3.206], [0, 0], [-0.619, -0.813], [-0.488, -0.748], [-0.342, -0.797], [-0.179, -0.944], [0, -2.213], [1.172, -1.318], [2.864, 0], [1.27, 2.361], [0, 0], [0, 0], [0.358, -1.823], [0.276, -1.514], [0, -2.116], [-0.603, -2.1], [-1.465, -1.692], [-2.458, -1.041], [-3.027, 0], [-2.393, 0.928], [-1.628, 1.677], [-0.863, 2.312], [0, 3.451], [1.27, 3.044], [0, 0], [1.172, 1.465], [0.748, 1.189], [0.439, 1.074], [0.179, 1.091], [0, 2.539], [-1.27, 1.318], [-1.53, 0], [-1.058, -0.602], [-0.635, -1.188], [-0.277, -1.725], [0, 0], [0, 0], [-0.423, 1.758], [-0.212, 1.514], [0, 2.214]],
              v: [[4.81, -10.4], [7.935, -4.736], [13.892, -0.732], [23.291, 0.781], [31.543, -0.562], [37.793, -4.395], [41.772, -10.449], [43.164, -18.457], [41.016, -28.638], [34.863, -38.672], [20.166, -56.445], [18.506, -58.789], [17.261, -61.108], [16.479, -63.721], [16.211, -66.895], [17.969, -72.192], [23.291, -74.17], [29.492, -70.63], [31.396, -60.449], [31.396, -56.494], [41.162, -56.494], [42.114, -61.499], [42.529, -66.455], [41.626, -72.778], [38.525, -78.467], [32.642, -82.568], [23.438, -84.131], [15.308, -82.739], [9.277, -78.833], [5.542, -72.852], [4.248, -65.234], [6.152, -55.493], [11.572, -46.436], [24.756, -30.762], [27.637, -26.782], [29.419, -23.389], [30.347, -20.142], [30.615, -16.553], [28.711, -10.767], [23.193, -8.789], [19.312, -9.692], [16.772, -12.378], [15.405, -16.748], [14.99, -22.705], [14.99, -26.758], [5.176, -26.758], [4.224, -21.851], [3.906, -16.895]],
              c: true
            },
            ix: 2
          },
          nm: 'S',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'S',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'B',
    size: 200,
    style: 'Regular',
    w: 51.12,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [-2.246, 0.212], [-1.986, 0.57], [-1.66, 1.009], [-1.205, 1.579], [-0.668, 2.23], [0, 3.027], [0, 0], [2.1, 3.174], [4.134, 0.749], [0, 0], [-1.335, 0.928], [-1.042, 1.416], [-0.635, 1.855], [0, 2.214], [0, 0], [0.764, 2.068], [1.286, 1.4], [1.725, 0.83], [1.92, 0.423], [2.018, 0.13], [1.888, 0], [0, 0]],
              o: [[0, 0], [2.376, 0], [2.246, -0.211], [1.985, -0.569], [1.66, -1.009], [1.204, -1.579], [0.667, -2.229], [0, 0], [0, -4.948], [-2.1, -3.174], [0, 0], [1.399, -0.325], [1.334, -0.928], [1.041, -1.416], [0.635, -1.855], [0, 0], [0, -2.897], [-0.765, -2.067], [-1.286, -1.399], [-1.726, -0.83], [-1.921, -0.423], [-2.019, -0.13], [0, 0], [0, 0]],
              v: [[7.129, 0], [20.41, 0], [27.344, -0.317], [33.691, -1.489], [39.16, -3.857], [43.457, -7.739], [46.265, -13.452], [47.266, -21.338], [47.266, -25.586], [44.116, -37.769], [34.766, -43.652], [34.766, -44.043], [38.867, -45.923], [42.432, -49.438], [44.946, -54.346], [45.898, -60.449], [45.898, -64.502], [44.751, -71.948], [41.675, -77.148], [37.158, -80.493], [31.689, -82.373], [25.781, -83.203], [19.922, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'B',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [-1.449, -0.537], [-0.896, -1.041], [-0.391, -1.497], [0, -1.953], [0, 0], [0.537, -1.383], [0.993, -0.862], [1.399, -0.407], [1.692, 0]],
              o: [[0, 0], [0, 0], [2.083, 0], [1.448, 0.537], [0.895, 1.042], [0.391, 1.498], [0, 0], [0, 1.953], [-0.537, 1.384], [-0.993, 0.863], [-1.4, 0.407], [0, 0]],
              v: [[19.531, -47.705], [19.531, -74.17], [21.973, -74.17], [27.271, -73.364], [30.786, -70.996], [32.715, -67.188], [33.301, -62.012], [33.301, -58.594], [32.495, -53.589], [30.2, -50.22], [26.611, -48.315], [21.973, -47.705]],
              c: true
            },
            ix: 2
          },
          nm: 'B',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 2,
          ty: 'sh',
          ix: 3,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [-1.433, -0.537], [-0.896, -1.025], [-0.391, -1.514], [0, -1.953], [0, 0], [0.537, -1.432], [0.993, -0.928], [1.383, -0.439], [1.692, 0]],
              o: [[0, 0], [0, 0], [2.083, 0], [1.432, 0.537], [0.895, 1.025], [0.391, 1.514], [0, 0], [0, 1.953], [-0.537, 1.433], [-0.993, 0.928], [-1.384, 0.439], [0, 0]],
              v: [[19.531, -8.789], [19.531, -38.77], [23.145, -38.77], [28.418, -37.964], [31.909, -35.62], [33.838, -31.812], [34.424, -26.611], [34.424, -20.117], [33.618, -15.039], [31.323, -11.499], [27.759, -9.448], [23.145, -8.789]],
              c: true
            },
            ix: 2
          },
          nm: 'B',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'B',
        np: 6,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'T',
    size: 200,
    style: 'Regular',
    w: 42.29,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[14.844, 0], [27.49, 0], [27.49, -73.438], [40.869, -73.438], [40.869, -83.398], [1.416, -83.398], [1.416, -73.438], [14.844, -73.438]],
              c: true
            },
            ix: 2
          },
          nm: 'T',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'T',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'Y',
    size: 200,
    style: 'Regular',
    w: 46.83,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              v: [[17.041, 0], [29.688, 0], [29.688, -27.783], [46.582, -83.398], [33.887, -83.398], [23.779, -43.506], [23.193, -43.506], [12.988, -83.398], [0.244, -83.398], [17.041, -27.783]],
              c: true
            },
            ix: 2
          },
          nm: 'Y',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'Y',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }, {
    ch: 'P',
    size: 200,
    style: 'Regular',
    w: 47.95,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [0, 0], [-1.839, 0.212], [-1.807, 0.668], [-1.677, 1.302], [-1.27, 2.165], [-0.765, 3.174], [0, 4.46], [0, 0], [0.83, 2.865], [1.367, 1.904], [1.774, 1.107], [1.904, 0.537], [1.904, 0.146], [1.595, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0], [1.627, 0], [1.839, -0.211], [1.807, -0.667], [1.676, -1.302], [1.27, -2.164], [0.764, -3.174], [0, 0], [0, -4.102], [-0.83, -2.864], [-1.367, -1.904], [-1.775, -1.106], [-1.904, -0.537], [-1.904, -0.146], [0, 0], [0, 0]],
              v: [[7.129, 0], [19.775, 0], [19.775, -25.391], [20.996, -25.391], [26.196, -25.708], [31.665, -27.026], [36.89, -29.98], [41.309, -35.181], [44.36, -43.188], [45.508, -54.639], [45.508, -57.568], [44.263, -68.018], [40.967, -75.171], [36.255, -79.688], [30.737, -82.153], [25.024, -83.179], [19.775, -83.398], [7.129, -83.398]],
              c: true
            },
            ix: 2
          },
          nm: 'P',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0], [0, 0], [-1.562, -0.569], [-0.928, -1.172], [-0.359, -1.807], [0, -2.473], [0, 0], [0.407, -2.229], [0.928, -1.416], [1.562, -0.667], [2.278, 0]],
              o: [[0, 0], [0, 0], [2.376, 0], [1.562, 0.57], [0.928, 1.172], [0.358, 1.807], [0, 0], [0, 3.125], [-0.407, 2.23], [-0.928, 1.416], [-1.562, 0.668], [0, 0]],
              v: [[19.775, -34.668], [19.775, -74.17], [20.41, -74.17], [26.318, -73.315], [30.054, -70.703], [31.982, -66.235], [32.52, -59.814], [32.52, -52.295], [31.909, -44.263], [29.907, -38.794], [26.172, -35.669], [20.41, -34.668]],
              c: true
            },
            ix: 2
          },
          nm: 'P',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'P',
        np: 5,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'Fjalla One'
  }]
});

/***/ }),

/***/ "./app/publications/index.tsx":
/*!************************************!*\
  !*** ./app/publications/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_literature_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/literature.jpg */ "./assets/literature.jpg");
/* harmony import */ var _assets_literature_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_literature_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_bioRxivLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/bioRxivLogo.png */ "./assets/bioRxivLogo.png");
/* harmony import */ var _assets_biorxiv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/biorxiv.png */ "./assets/biorxiv.png");
/* harmony import */ var _assets_openAccess_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/openAccess.svg */ "./assets/openAccess.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/app/publications/index.tsx";






const prePublications = [{
  name: 'Cryo-electron tomography of native Drosophila tissues vitrified by plunge freezing',
  author: 'Felix J.B. Bäuerlein,  José C. Pastor-Pareja,  Rubén Fernández-Busnadiego',
  preprintTime: 'April 14, 2021',
  doi: '10.1101/2021.04.14.437159'
}];
const publications = [{
  name: 'Tricalbin‐mediated contact sites control ER curvature to maintain plasma membrane integrity',
  author: ' J. Collado, M. Kalemanov, A. Martínez-Sánchez, F. Campelo, W. Baumeister, C.J. Stefan and R. Fernández-Busnadiego',
  publishTime: '2019',
  journal: {
    name: 'Dev Cell',
    number: '51(4):476-487.'
  },
  preprintLink: 'https://doi.org/10.1016/j.devcel.2019.10.018',
  preprintTime: 'October 18, 2019',
  year: 2019,
  pmid: 31743662,
  pmcid: 6863395,
  openAccessUrl: 'https://pubmed.ncbi.nlm.nih.gov/31743662/' // associatedDescriptions: [
  //   [
  //     {
  //       url: 'https://www.ebi.ac.uk/pdbe/entry/emdb/EMD-23061',
  //       value: 'EMD-23061',
  //     },
  //     { url: 'https://www.rcsb.org/structure/7KX7', value: '7KX7' },
  //   ],
  //   [
  //     {
  //       url: 'https://www.ebi.ac.uk/pdbe/entry/emdb/EMD-23063',
  //       value: 'EMD-23063',
  //     },
  //     { url: 'https://www.rcsb.org/structure/7KX9', value: '7KX9' },
  //   ],
  //   {
  //     url: 'https://www.ebi.ac.uk/pdbe/entry/emdb/EMD-23062',
  //     value: 'EMD-23062',
  //   },
  // ],

}, {
  name: 'The cryo-EM structure of huntingtin.',
  author: 'Q. Guo, B. Huang, J. Cheng, M. Seefelder, T. Engler, G. Pfeifer, P. Oeckl, M. Otto, F. Moser, M. Maurer, A. Pautsch, W. Baumeister, R. Fernández-Busnadiego* and S. Kochanek.',
  publishTime: '2018',
  journal: {
    name: 'Nature',
    number: '555(7694): 117-120.'
  },
  preprintLink: 'https://doi.org/10.1038/nature25502',
  preprintTime: '21 February 2018',
  year: 2018,
  pmid: 29466333,
  pmcid: 5837020,
  openAccessUrl: 'https://www.nature.com/articles/nature25502'
}, {
  name: 'In situ structure of neuronal C9orf72 poly-GA aggregates reveals proteasome recruitment.',
  author: 'Q. Guo, C. Lehmer, A. Martínez-Sánchez, T. Rudack, F. Beck, H. Hartmann, M.S. Hipp, F.U. Hartl, D. Edbauer and W. Baumeister and R. Fernández-Busnadiego.',
  publishTime: '2018',
  journal: {
    name: 'Cell',
    number: '172(4): 696-705.'
  },
  year: 2018,
  pmid: 29398115,
  pmcid: 6035389,
  preprintLink: 'https://doi.org/10.1016/j.cell.2017.12.030',
  preprintTime: '12 December 2017',
  openAccessUrl: 'https://pubmed.ncbi.nlm.nih.gov/29398115/'
}];
class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderPublication(publication) {
    const prePublication = publication;
    const published = publication;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "container pub-box module already-visible",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "overlay-pub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "col-sm",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
            children: publication.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), publication.author, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), published.journal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                children: published.journal.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this), ' ; ', published.journal.number, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, this) : null, publication.publishTime ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: ["Published ", publication.publishTime]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: ["Online ", publication.preprintTime]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), publication.doi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
              children: "DOI:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: `http://dx.doi.org/${publication.doi}`,
              target: "_blank",
              rel: "noreferrer",
              children: publication.doi
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, this) : null, published.preprintLink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              alt: "bioRxiv",
              className: "inline-block",
              style: {
                height: '1em'
              },
              src: _assets_biorxiv_png__WEBPACK_IMPORTED_MODULE_3__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 17
            }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: published.preprintLink,
              target: "_blank",
              rel: "noreferrer",
              children: "Associated preprint"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, this), ' (posted ', published.preprintTime, ")", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "col-sm-auto text-right",
          children: [published.pmid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: `https://www.ncbi.nlm.nih.gov/pubmed/${published.pmid}`,
              target: "_blank",
              className: "btn btn-outline-dark btn-sm pub-button",
              rel: "noreferrer",
              children: ["PMID ", published.pmid]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 15
          }, this) : null, published.pmcid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: `http://ncbi.nlm.nih.gov/pmc/articles/${published.pmcid}`,
              target: "_blank",
              className: "btn btn-outline-dark btn-sm pub-button",
              rel: "noreferrer",
              children: ["PMCID ", published.pmcid]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 15
          }, this) : null, published.downloadUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              target: "_blank",
              href: published.downloadUrl,
              className: "btn btn-outline-dark btn-sm pub-button mb-2",
              rel: "noreferrer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                className: "fa fa-download",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 19
              }, this), " Full Text"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 15
          }, this) : null, published.openAccessUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              target: "_blank",
              href: published.openAccessUrl,
              className: "btn btn-outline-dark btn-sm pub-button open-access mb-2",
              rel: "noreferrer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                alt: "open access",
                className: "inline-block",
                style: {
                  height: '1em'
                },
                src: _assets_openAccess_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 19
              }, this), ' ', "Open Access"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, this) : null, publication.associatedDescriptions && publication.associatedDescriptions.length > 0 ? this.renderAssociatedDescriptions(publication.associatedDescriptions) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, publication.name, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this);
  }

  renderPublications(publications) {
    const groups = [];
    let currentYear = 0;
    let currentGroup = null;

    for (const pub of publications) {
      if (pub.year !== currentYear) {
        currentYear = pub.year;
        currentGroup = {
          year: pub.year,
          publications: [pub]
        };
        groups.push(currentGroup);
      } else {
        var _currentGroup;

        (_currentGroup = currentGroup) === null || _currentGroup === void 0 ? void 0 : _currentGroup.publications.push(pub);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: groups.map(g => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-sm-2 no-padding",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              className: "year-label",
              children: g.year
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-sm-10 no-padding-left",
            children: g.publications.map(p => this.renderPublication(p))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, this);
  }

  renderAssociatedDescriptions(associatedDescriptions) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
        children: "Associated Depositions:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 9
      }, this), associatedDescriptions.map((asso, index, arr) => {
        const isLast = index === arr.length - 1;

        if (Array.isArray(asso)) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [asso.map((link, i, links) => {
              const lastLink = i === links.length - 1;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  href: link.url,
                  target: "_blank",
                  rel: "noreferrer",
                  children: link.value
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 23
                }, this), lastLink ? null : ' | ']
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 21
              }, this);
            }), isLast ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 34
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 15
          }, this);
        } else {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: asso.url,
              target: "_blank",
              rel: "noreferrer",
              children: asso.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 17
            }, this), isLast ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 34
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }, this);
        }
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }, this);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "intro intro-single route bg-image",
        style: {
          backgroundImage: `url(${_assets_literature_jpg__WEBPACK_IMPORTED_MODULE_1___default.a})`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "overlay-mf"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "intro-content display-table",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "table-cell",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
                className: "intro-title mb-4",
                children: "Preprints & Publications"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        className: "portfolio-details",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          id: "preprints",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row title-pub",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-sm-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "title-box-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  className: "title-left",
                  children: "Preprints (not peer-reviewed)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-sm-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                alt: "bioRxiv logo",
                className: "img-fluid img-logo",
                src: _assets_bioRxivLogo_png__WEBPACK_IMPORTED_MODULE_2__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-sm-10 no-padding-left",
              children: prePublications.map(p => this.renderPublication(p))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        className: "portfolio-mf route",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          id: "publications",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "row title-pub",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "col-sm-12",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "title-box-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                  className: "title-left",
                  children: "Peer-reviewed publications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, this), this.renderPublications(publications)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./assets/Ruben_Fernandez-Busnadiego.png":
/*!***********************************************!*\
  !*** ./assets/Ruben_Fernandez-Busnadiego.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Ruben_Fernandez-Busnadiego.8a97845.png";

/***/ }),

/***/ "./assets/bioRxivLogo.png":
/*!********************************!*\
  !*** ./assets/bioRxivLogo.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABuCAMAAACqRN6UAAAA2FBMVEVHcEwkHyAjHyAjHyAiHiAiHh9BHCE0HiEiHiAuHR8iHiAjHiAiHiAiHiAjHyAhHh8iHiC/JjYjHyAjHyA/HSEjHyAjHyAjHyC/JzYiHh8jHyAiHh8jHyAiHiAjHiAjHyAjHyAiHiAjHyAjHyAjHyAjHyAiHiAjHiAjHiAjHiAjHyDEKDfCJzcjHyAkHyAiHiAjHyDDKDYjHiDAJzbAJjYjHx8iHiAjHyC/JjYjHyDCJzbBJzbBJzZeIicjHyDCJzY5ICLBJzbBJzYkHiDBKDYiHiC9Jja/JjYUZr78AAAARXRSTlMA7A9H6BUFAv0K3zrlNJMo+fyjsAj1wvMVIvAb2WJdQKkuu1SaTYt10W5/ufHJ9x5oXNQu1Ib3WYrNTed2SvujhcqU/Y7ADncfAAAbaElEQVR42uxaaXPiMBbExlg24cbcN+EYCHE4kiGBlFKJxsn//0er05ZtmZBA1e6HVaZmqiYgS61+/fo9OZUKBkj9f5w77I75fxBOD5MOx9aLhfED+K8tIDb+J2k+Y6Mw3LrZ4vkrBHRcAarm6/Pz87/n58jfz6+bw65pX3evFy+6YdHhIc/6AVhmJ71e37auELe79/InHl/4R/67/FleHd8/NrsrMgxkBr3Fvuj8fob1Fnl8nA+W3h8btb/tl7V+ObV2b6tP9SCAvb/urqWk9i1d9J/F7xdt7nMeQggz63yw9LlGvmBZ2vzyQAHNt/Jn8ii/v9pXYZe9yEGyT6v99Gu0gF7BOJG9o3PBArcGBdfzrFz6Chs5HE+h9XX8uEYsgnQWsRhCxv7X84FegxILnc0sfcjh9Tw4uTwQU823r89TaJXfdlcg1gQSoOhWqzr4NeTaz5gFil0GLn6w9fJwhYz4L2BWubxaHY/H1epTYlv5rXnxQzr3bNE/CSHFGOR+xiwwynF08U+3eHmIgFch8eXj2+sGe4bD5vXuKJFr9epc+pCHbbBo4+bXzLox0M+Y1doi/7nb1hW0dyPA+rprmia2QylgNw9vK59cX48XB2Kn7q8ZZUe/ZxYH62yWEM0SgTi8gmalDgKWMgZLHInZfA7IVX52Ltcsf9X1zK+D4CbHN352NtxrIv7b/Wu4+IPELMlu6354YgNxKbVAOiewqi1+b918Zp3vswptBq87yVyBWGAjKISZBUIOzKfW8XDpU/Rlg3ILwuHva+AfaxYemVkWeggak6uU3kDJLBKJgQMrv178pMwy6+JFa5VLchLOhj8FC9iD5XBYmOrXqdw2kmaFZmzeCQdW/ri86nHyy8qwsM9csGjMLIjHD0wpFRTTtk1wpSp3o2ZWCjgfPrPertCBwIvWncsWjZlF0II+swCGgnSUTk9Lfm3q332ETvVdY0RmVlj6X31mvTlXiXi6aFPx/z9iFhTMMvViuj9fLuf9QUtXTUIeCCi3HhYn4h8AOzNK9xfL5XKxTxczJ440iVkYLJ9ZH87lMJFVO511JQ+k9hY5Tz3fVwcnCA2WDSVmOftqV3MtXPbVjG2l14ofaLHf6/Xxz7xQb+TyagRAyi72C/WsVsIVGYI1rTt+SneS2p+JmuX8u5LAg5ZY9Kyuaaz67+x7fMwrWSOt+tZDvyeNgcQsChYYdEkrkA1k1f7Mox0+sDfcUqnEdC4BLKCnJ90ab02Q7oTlWVAbrx/MnzHL7958HQ8gdN5YMm37tP6YdvA0MM3xReNNMbDAIOv+LZFBHIW7UE01FR/B46/Ro5oF2SBgZYaQ4UTrZPyvW99H+kmZpUFBIFiowbIHFYM2XwO4EEGsVt/rP9Ks3eOXwpQCPb9fziaVwlN/lCyaer/QC5KCvsjyRXuIM0vv112fFupOhN578Vuj1rgTMIuGoblu+3OKrRrLTMQ3LDTe60CGAizQeiKleVCKsT/0gUahBc5nlhNU2P8ClpiDaraGqWph4mcnN05Sr09DuQEIEus+x9fMmUUWOjN4iwvHiKq4BubNVuDZ6DHNCpg1erEYq+SfxqQT6WVXBJoKZpk347+WF55BtL88VKoq4E1gFsDEYswqP+6cQEjuIZ2QtaeyCyW5QL7rebU1kMsOyBcjwMLH3usiDiGcKb2JM4OcWHViwGVm6aRDhqI7tXBVAyL9Qs6ZOLOc2y2UJ6B5Fvkcw1Vs/AgTmLW78+X9WaoZi9tgNjy0pSq07QIW4RBYYNrm3/PBwszpGVxQvO1IydC5y8DiBaXwWZhZewMh6DYaDReGubUMkR3gBIrUzDL3Wcv/nmvcDwuzSfVFgxLH6jGAlbWhubvzg/BuFzqOybA63roiBLS1wjcNiERp03AbLgYW4ZvLt+LOzRPMsu6pfkjMStehVi8s9tP9ejY2pA1auWlog/kc8/wxZoF01yemu3266dg4c9kP6ULWR9+D1dYZzGoe3n1ePR6iRtzWi8ucQH+bjyszDZGXkECKBq8lgwVGXbHNe5WcZsZMs0ocSqxZjFq5SneCzRB1YmZmMMmhgA5jeSZySAzfCLNAse7zSisUeRFA8BpUa37wuDP9tGYB0Dy8HUVjGWNlxmwcdpdr0S2JXwRgp4AfBAshGWqJc5TBStkzfoxeu6dIVmmDgmVtWb+QMYtsvjEZBC4Bb3D6EpDLDfWA8jluzSLM4ppH9DLbCwkvyBQavtbnbkEiszAKzd3mLrjwwVipE54+c/nqondMIFNF9L9TYbBgPAxZwLIlj+MuHksfI9aTE64NsWaZkbx5H0iXTFKfWTAMFrjVBLFyfTO6gZnre4lxByQwa3fYPBOk/BBc3e0SqkJQfBFJJEIts9fG64CRLm6LhyEMgZXSK6zYQ54xBbGcmmXE6ubDtSHJhlEXMPADOkRSDBb/Sggs0Bn7RFzGbkbBQ1UQlXuWGLO+vu6ej6sv6WJsdXxtJlbQ5qIm2pahDAtatN8e0dlUaxu1DvyE21yAUSUazs5TiRIr8BVMsxBz8JEPzxsc9dBMIK9kFti3RRCqXsjBhBeTeWHGy8x6D6Aqrx4/dvaJ92ladT5f6UmOCWdZImuYRAyYWrMw5ce8keBJJpbnBGZJLf8wfGbBGLMwV+oMdPwU+TpDzSx9KBRL3ZrHWspnQ8Y0gVlN6Xr68XVnn6z+nIXL55PzHmDx0I34OUCYBeNhiIO2xgpdVApnBMwVZrKkTEE1C0n9rBDTXQG7FqiyWrNwgAsNqavbzfksnwz7ZSchGzaDft/jt++EFP9wrjYC+4nrC3K2WAiiPOySBgiMMiuVeqjzo/e2o3A43zOPFTDuFLMwLGx/BIE5iGbDMLPAusaDED6Z6l7EUEyG6p0kn7Xz/dXn3XcX0faT4GrVj2us7uy8YkHbpSccY1bKnLt8We7SDGsiI5akQL7PUrWVM1UoYJ/Yp5nl38zB9m1C/lrXxGRZOX5DDt70efZZ/miCbxqXWU7VAIAiaRQgI74Eoln001GwACUonSeU8x/qTLGM4PO+z0IKZqXMGeRsgFX9dDbMjDmvsFVN2JvwZ1jV5M3ImoW9ux+I31/bs7xP3YMtWz04ixeMWLPYw6Ng4aQnGC+Fcwr026wsHEqZQvJZIJkMEI0zp7Oh72Pgn6S3RTr3YrJQsy3cKQW7R59ax4P5zX1vm81ndZncmH16AVxXnDteH1IyC8tKV1ArSNPY2bLqU7s1oz14pNSsVOq2zffnSZfeKmZhBKmA4nGfSbz4F5NZsjpEakN7c/ZNNE3XXFLphCMWhFNVm40xC1pxsLBR59wK0hiYarzSk23O4ITAkxeS+G9hoMlMs1CYWeSylokCrHeSBLkgJkNyOoz04OV3Ab97N8tcinRNMjDOhCWSCZ9ULwvibMjOMg4WEBggyxdzvcJ8UMgGUWYhqLYOeBotHobKbAjExQeEL0lgYXFA/AhnycxKOUEgfpX/nb4wZHaEyA3elLMgPStY7ajyAs+G0FOAhbWPpUpkCJsg3o0Il2aSZikeQZjFfh8S+Lhm+aejFj/2maX4CFyCE51SR3olZLU5iRbOwbyoxzqczqrsaCQbKphFqlrBCW5ASW6PODj53lAt8LcNrmgwZB0U2VDQDUOYTmYWZ7G7Bif6Wab8Um7oYiceh0xUabFSJG/3Qa2nTgqCWUgFlrBIHmKmBpsSVuVF/BoNH5SkWdzC408EksyyYVSzxGIiSITAmgg8I9Yhem9o+vc634p8R/hvWBlSYzlLeLv5FLNozcNyZYnuE5dmitZUyMEDNcspMvL21D6r7sfYJCFy2PnRgxmdYlYK2Bupo3XylVLA/DeOmRLNimrBCnyWkllBzUPqTNpAZabxJYLJIMciQ1nuYGckFG0EvnXwHAn4p6W+ey1u+fHBcSehBx+/BiP3FSdkC+9LqBYtqUeJPYr/sHftTYoiSVwQKkVRWXnYoLaI4IMZ0XHHMfpmg4td1rnv/42usqAAedizEXN/3IzVETN2WRTJj6zMrHxUc85vBIvvguPEPBGqZL8wXaiFpPPdnAUBN7MSXax4SpMKZ5ETX7HxdNEM1nXKR1yMd3zw8PJXWciTd0V85qANoB2suE0bMimyy8Tpjeo/+y2d7lzln0cyS5wkGbeUF2+Lp3TYT/ia1RvzLNhsSfpyG93K5egOFMlZaMk/YK1A4PZ30ibcMzvrAWd1jFxTO1fKZulm5KI0Z9E02VlMo6a4zFfveUqZUyFTOI0OrcL0uweT5Am4dzmlYmFtVYJhVRHvcbDM8MF65ZzVLLPQw8SllruyMj6tRe3a7SxAXZwJonLAttVTmq+yxrjSTM8EFl2mdwzwr4/fmiLSRlnIF3nMDzR2m7ujkFlJK2ex7UVKoOSnwZVKeKhkwdftLDi6GjfK53eOhFWTzKLaIFd2iTap7Q8VtjNhE96vUqORszqsmiDfUv/W7twqpO7D6ph3OAvTtvmrZv5Jyj2D2qCWvSHAWNdumRSK9sZ9cDe7RK1Gd3LWMjcVF7iydW7caA1aQmG1nNLCW/PtY+suUc6tt4Z1873aMBfQpVaHHt9LwmUWFBlQ4us5vvGr3Xs+QW3IYFTvaxUKTsYEiSOUopDHkcPZLqqITSg4689K5t/Lh9/eq3cC5i7NhGUUkvfBklrAYpqihJe07DRzFjPH1yzajk0cnyyzd8tM3vhwj0mhDStgwdGLc7jiw1XG3ERs8utBSzLhH7uVfTYUnPW5IplKvi0m5ZsMpFP5Ea3ZA9Ohl8msJTyymfM2qefnoGslWzrO3PPD/Wkf+pbK0noygXyu7kxzBapWVjUZnrlKoZdPD5dgNR4Pr6Nd1OPCPfaqqQ5Gnjn67WsFjnIqPG586r5AEhSShqn9NrBgnGm7WGizxdIQYvJoWGqmZOyQJD3MEuN5R6nHZVmNLuf8WpuQLM9xblDTyzVBVZ04TQNM+72agVKqN/z4qWb+/FEuD/v6yagq/B2+UpM7MONJq4hPXUg4uK2GBo2f/J3GTbmAgIZ3kj8fTxtM8sfTazVUJMxfZk1GkKWVGcJpBlWP57Jx6Ve3Kcr2VD0pWfnrrhrx75damBulYB4KaRXxhYFRtwgK6OdxYZo2YHW3UJPkLu8PpVIoVwOdsNplxgbdBdaQhPHELPYfGVQcLSGsm/akvAv8XDPVoawS0YQokgApK4yYEprI9o6/jRYRz2L63EZqrTcka75RbkoT6az8qGC9IqUxw8qZDIw6GmV49brZLy7OcXUydovI69YTjF8+ldfZt7oQZ7V0Be/95/MfL4Vwd5BKzwYW7cZnuDUHeMF2S4rOarUwjHU/Sylq2jh5cZrKmIcHkyLBse8vGxTCclegS823XU3BArHDeWUy+kyR1ZSZ/1I9qeBrLfwFBhZqFjYEtbiMLEDAPHT9JdW33P2dNIp4GFqpzZiRPm/db5OB165Wrxv3MBeiAquMqaZz9zRucqPB+rDbnelP+s/ucG0YY9gnXaXSJJ/OnPtB0+Yafv/w+c/7n7/rpjq8/P7Hvz8UYz4wrQi2h4uQpUkyaZIujkYR37V2ZarfFu2VIbOQMld0alrNQIhoD7un0Het3Xk+78/nZ0vfnJZ2W0q+It+3xjgoEHF8veiHM53wbE223WPLdOSl1hrnA1AqY0D0tYQlZ0Huj2Kx4iaJZFSIfuTXJ0PfObQVB2b1SIYizo62bR9lkRUnPfJOFj/woHiHGCJOKCuPpgOoFcg037IYyj3BQsmXiY7FNg1dIZn9PIxGikHwXk7KuwT/8/aj57sTQ2e03oRXUolJ3g7HH0B352dqGOq7lVPW0FJmOufHFG7/VA0zi/BcicIIyDL4KFw/5EiAn4mxVjs0TMxtoV6MfZTt2Rr8UL90U0aY1HDzjk1hnprr/BdnrNQcFe7cyFivk27ZduOn1CpLd7bHuPc4FQGRaPsEq+QjktjZCvdePEjzAFFJHuwnSLm33Gd5CBuj5hdOeEzMeKLE7VGWWlSTTJy1MO1o+VyIuR+PFQgadY8Iz7SPrSH5X+0d/s9WIYr32GqQS2lsEuMH8XmzX6xXz0N9ZYtVXjUBMXN5RUgSR6Z5Dn553pphjovemLiauXH5EQlf9r88WLJ+i9UWngF7o/JcrcRxn9YpCay3U2uERhls9bfz/HzQL4H8lPAdIs8elCGCochHeyYrxlMbfo9t0XnC9GzP9mzP9mzP9mzP9mzP9mzP9g83Uvl/UO4pdXTSFI/iU3kgPP66A203qBIB9zeC6leVG1UoqBJ7N6r4FWoPfk9N/ZfyMHY8Kjagu3XmfKQ9kPfz/B5FFEXm8wb8lHZDOoSkX6fnEWVfQ3kekroCCBT34u4DcSYbgF+mh7TST2I6E7Bfs1mabtS5pwAP25dlA3ISC5cDzs4vIumseJaxnFIJSn74K3bmeSZg0F/oRelTZMOG/oS1ka3sJ1e8bulf5A50We8m9UfC0nfdiY95juLFpR/DIR05HuEQfwDkdUI7N4FI++hA19+zw3T5PHjQqbGYLIziXinlg43ueScCYsi6FwYoe5x901WU7WSL+R0QTC6ynd5oCXClX7uj/GzYjIIhOv32rueN1iLG8RkNJ54XrdDZ6UVIPCV0r2AYaO173uSEGWti6Kf1fGmnu2dpbCBffd3TR12y9P0VemBH/oAS05+avd7UmQ9llx0gAAvzfATYftEESeCpYq9mLAmR489g9hYLfSfadQELWQRB6q/B2NxMVdCkUMSosKqakbcCWES7GcD+S89ZEFD8nq90s3tlRdvd3Rep378oIHu9qSRII6Uj6r1pX9D6JyU0MUMGU9Mn4lDtOZLQfwVyiSNV1QT+R5kGUkIpmCMt3tSUnFjC9xMIGqVhqmdoyV6s7vqmMxLBGLGDG2YjIRKEeIpZ67ODeWKPSDtNgT4jJZ3i7QqRpErmlowPeFKUsok8m45ZXy9TYXsNZFGPM7B2FN1ttFt3u8vUIQmv0/6665vTBQUrugwXcwydD1RnT4fMKA2x1V17cX9JwRIWw9CJthQs8w3B0nq9wyoFi94rdBy8Fz6G7NKrVkNKG32cSbfbHdOl5Pbc4foQW7Nhn1KKVfDOmgz5jShY1rKra/20SI1SIOAXMoyteLfvXr0YX0wgqOvBZWouOFhaeFz5Wn8FhIElbkxhE6xHApYyzQ5TBpZCUdgEwUjQJjLIrqaGy0Gwp6tmO+0PYDhPs+YAJx/S9Utf4oau9BQs2JqWXAjb1+nZxmLYkTF7M0+EDtVlylnSkp0YaWxiXSRLiZK3xL7jgcKOYB0RLGFK3w0Di47tSuxe2CiPjhR2B9nSwjSVknLWSCGhtjtSKD0ZSBgdjjBUBco8KEAutJNcHX5UxUBSByzJcxv1AzrB6oAXBZK6gvFc23Kw6KsjpynlZ8pZLuX+vhmKdKVR/AbAwRr0zYtI39ZIUwdk4QgLFGn4h23sQzSSR1FWqJ6CRTlej/Xren0dRQVnDQkHa45gxRdCwdqKgzdto1Cw2Aun3I1gURycV+SsQF6r9BOcpmwZRp4eq+sULEzeyMvuZNq/WSKTZZxl40HYPV8e6xqdbjGVunC0tIvBOUtEzvLsIyXQBs5Z1/HYNijp7CwiEsbzVYeCNZAXgrTucLA2w7WFy5BxFmwjdswcdAVcKSlYlE4s1gVKoHkSJ1nNANNTp+n8NM/PmErBopx1+297V9Okqg5EjUCiiEjJVxkVFAYUq4yWVVxqNmyo+///0j0dPsZ5897y7S6LKSdCd9I5fbpVulFMMhl2mrNCD3TgW5MbFqkbOwVx1tV/Sbg7lUhJZr5WMNaCvIPqLVJTRb5tutbkhsrP7TbbuAtqYNAjawg4xUspxwdIrGgBunAqQvdv2/9kEbh8RxuSM4BIrEdFMJbpR+ww/mYI1nRsO9rs75pBiEIANYOpLLOdkdisrGM2a69QpDkLfyIyhTjbv6rRWLzs7hTMgMj2Ag7VJSvrqllSHy1lq6mIcEJW96LgAvfXyHLcsnxOnNWaZugAvTCWbOWF2uSsnPBUljeqb1goh6lDwongw+6QYJsBjR5Z/v4WhreP3lhvyBL8fMtke99Qj8KoLEtDIyv2Qpc2fll6n+ePDtsFNxwU8XoRKs9fDz/cYwbYGv/jAWO5NCaeCs4GgpfdNR+zAEj3q/IaZrseWYHbN4aDWPUcjQXn6I11tlW1z/rWas+YGvDAKbuvGsURWX7rWshQqpGzHssgmDhLZsgNlsQ04fal3LneV9PQSROioeOfamo3njrMZZJsDDcckGXtsvaQ/UAW7SfsKBsBzqqRV3E9Bz/yfN0h2zDZ5RVXfKY5SysigvfV5ySBZjBHOoTLyG/E0gU+gCzHlawZ0yfNWcuGsXzgrAtxFTwukaahoyHRXqV0az/RSFaAkqnIG2Mago+oO1niH8g6ES2LKRpG++lBssRZZ0tnZzBWVUnqCdATPJ0SlJ2/mwd9w3RWuIpuYpmQhWXkwNtPZAVIU/UasPe3gARhDr/d3Im1ByGKXWPqWQhjmYZWRJyV3ttx6jQDXSKAOCCfFp83troFxMHpVl0nbtQEn5MijSyeOu3Hgy/XEfXigLEqSnRTR21pMGuzB3+GcfkIAgpyM+KnhTvdhPKFrD51iHtk2W5dX6y3aDjEsPBpbb1XSpwVbuu6PhNnDeQ2o2h4jqj2aIyGZCzEmMUPZPFjXd2ubbSDsbqorOucYw6da91ih2DBqUuqvghuSIrWmuCthMmxJYGOhpppotY8lVtHkWKD2ef159RoBUY/JdXdgyLNWZiNirPy4+pRCc/+7t2RJm/mJQZdF4O5oMo8+gcpjNWT+VR1h7xUB4L5VupGHkd2p0WyWMbyNfz+nZifw00r+4g9EaIZXGV1iHE4jQhqOd5OnR7slBe2CWxADiGLkR3PUSxdjSx7uht76XpKsYwIPpOkDInEfBuXwd6XEZXmnV9St2FGlkOKTCSlN+lb85INhUqYwXBnMl9lzEPCusV13MB6+NE2h4egWlkoKVYRwZcSeZbYuY5qPZYVAaUtUsr4sBKPUg9GeaA/BNBDL0JHNxHQkxqN9WhyGgvSRK9j14CbxCahoxhsgLHh1bJoNphb0+yFlSdN0jTYy3WSDoVaVt5YYmngQqHlzDaNEdBikoQwgBw4H+MKX13KW070FBgQhBO4ngMXm6bRFG8kudYKoQkUbbCIxAgw32bFB2356JH74lJXfRUb1jMXyyIpemMFxvF4TNK9NnuS0pXztKovWjUpgWyIEfP0OQ4COavn5fLUF/WTevtU/u37h/eq+f94NTUvH05+f3safX/rx5cJOhxyMX6y/yZpOvfrq4zZd5HiX6b1ViGkz3/7vuBN+iiZf72cTW/yd8lfz2kSfx91//f4P48/2Kjwn0itbO4AAAAASUVORK5CYII=");

/***/ }),

/***/ "./assets/biorxiv.png":
/*!****************************!*\
  !*** ./assets/biorxiv.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAMAABMLAAATCwAAAAAAAAAAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j4+SMjI1ram1jYmWMjI7j4+T////U0fF5cdKemt77+/7////r6/iMhdh8ddPV1PHj4+MZGBxHRkmEg4VISEskIyfLy8fOyvUUBLCbld3////19ftWS8YkFbauquP7+/7t7e0iISWioqP///////9VVFdDQz/Kx+wlFriwrOX///93b9EiE7XAven////////s7OwiISWbm5z///////+hoaIdHRqqpswpGry5tue0sOYeDrSfmd/////////////s7OwhICSfn6D///////+BgYMhIR6xrdMwIb2HgtYzJbtkW8r////////////////s7OwnJipycXPDw8Sgn6EVFBhra2bSz/QpGriLhdiOh9lCNsCOh9n9/f7////////s7OwnJiqCgoRTU1UlJChnZ2nw8O3SzvQiE7WxreX///+3s+cfELS7uOj////////u7u4iISWfn6D8/Pzz8/P////////Mye4iE7WzsOX////V1PEfELWWkNz////////f398PDhKWlpf////////////////FwuwcDbNpYM2XkdxFOcA1J7vX1vH////////Z2dmOjo/Hx8j////////////////Pze9vZ89tZM5oX8yGf9bZ2PL///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AACsrAAArKwAAQhIAAADQAAABkQAAAAAAAAAAAAAAAAAAAAAAAAAQAABCEgAAANAAAAAAAAByQAAAAAAAAAAA");

/***/ }),

/***/ "./assets/gzmb.jpg":
/*!*************************!*\
  !*** ./assets/gzmb.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gzmb.5f79c39.jpg";

/***/ }),

/***/ "./assets/labOuting.jpg":
/*!******************************!*\
  !*** ./assets/labOuting.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "labOuting.6f480f6.jpg";

/***/ }),

/***/ "./assets/linkedin.svg":
/*!*****************************!*\
  !*** ./assets/linkedin.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8, _g9, _g10, _g11, _g12, _g13, _g14, _g15;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLinkedin(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 382 382",
    style: {
      enableBackground: "new 0 0 382 382"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    style: {
      fill: "#0077B7"
    },
    d: "M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
  }), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g2 || (_g2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g3 || (_g3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g4 || (_g4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g5 || (_g5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g6 || (_g6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g7 || (_g7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g8 || (_g8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g9 || (_g9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g10 || (_g10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g11 || (_g11 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g12 || (_g12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g13 || (_g13 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g14 || (_g14 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)), _g15 || (_g15 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null)));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLinkedin);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM4MiAzODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4MiAzODI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDc3Qjc7IiBkPSJNMzQ3LjQ0NSwwSDM0LjU1NUMxNS40NzEsMCwwLDE1LjQ3MSwwLDM0LjU1NXYzMTIuODg5QzAsMzY2LjUyOSwxNS40NzEsMzgyLDM0LjU1NSwzODJoMzEyLjg4OQ0KCUMzNjYuNTI5LDM4MiwzODIsMzY2LjUyOSwzODIsMzQ3LjQ0NFYzNC41NTVDMzgyLDE1LjQ3MSwzNjYuNTI5LDAsMzQ3LjQ0NSwweiBNMTE4LjIwNywzMjkuODQ0YzAsNS41NTQtNC41MDIsMTAuMDU2LTEwLjA1NiwxMC4wNTYNCglINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYNCgljNS41NTQsMCwxMC4wNTYsNC41MDIsMTAuMDU2LDEwLjA1NlYzMjkuODQ0eiBNODYuNzQ4LDEyMy40MzJjLTIyLjQ1OSwwLTQwLjY2Ni0xOC4yMDctNDAuNjY2LTQwLjY2NlM2NC4yODksNDIuMSw4Ni43NDgsNDIuMQ0KCXM0MC42NjYsMTguMjA3LDQwLjY2Niw0MC42NjZTMTA5LjIwOCwxMjMuNDMyLDg2Ljc0OCwxMjMuNDMyeiBNMzQxLjkxLDMzMC42NTRjMCw1LjEwNi00LjE0LDkuMjQ2LTkuMjQ2LDkuMjQ2SDI4Ni43Mw0KCWMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OQ0KCWMwLDUuMTA2LTQuMTM5LDkuMjQ2LTkuMjQ2LDkuMjQ2aC00NC40MjZjLTUuMTA2LDAtOS4yNDYtNC4xNC05LjI0Ni05LjI0NlYxNDkuNTkzYzAtNS4xMDYsNC4xNC05LjI0Niw5LjI0Ni05LjI0Nmg0NC40MjYNCgljNS4xMDYsMCw5LjI0Niw0LjE0LDkuMjQ2LDkuMjQ2djE1LjY1NWMxMC40OTctMTUuNzUzLDI2LjA5Ny0yNy45MTIsNTkuMzEyLTI3LjkxMmM3My41NTIsMCw3My4xMzEsNjguNzE2LDczLjEzMSwxMDYuNDcyDQoJTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "./assets/literature.jpg":
/*!*******************************!*\
  !*** ./assets/literature.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "literature.f3e6dc1.jpg";

/***/ }),

/***/ "./assets/openAccess.svg":
/*!*******************************!*\
  !*** ./assets/openAccess.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _circle, _circle2;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgOpenAccess(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 640,
    height: 1000,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    style: {
      fill: "none",
      strokeWidth: 100,
      stroke: "#f68212"
    }
  }, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M111.4 308.1V272.4A209.2 209.2 0 0 1 529.8 272.4V530.8"
  })), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 320,
    cy: 680.7,
    r: 256.1
  }))), _circle2 || (_circle2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 321,
    cy: 681.7,
    r: 86.4,
    fill: "#f68212"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgOpenAccess);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iMTAwMCI+CiAgPGcgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MTAwO3N0cm9rZTojZjY4MjEyIj4KICAgIDxwYXRoIGQ9Ik0xMTEuNCAzMDguMVYyNzIuNEEyMDkuMiAyMDkuMiAwIDAgMSA1MjkuOCAyNzIuNFY1MzAuOCIvPgogICAgPGNpcmNsZSBjeD0iMzIwIiBjeT0iNjgwLjciIHI9IjI1Ni4xIi8+CiAgPC9nPgogIDxjaXJjbGUgY3g9IjMyMSIgY3k9IjY4MS43IiByPSI4Ni40IiBmaWxsPSIjZjY4MjEyIi8+Cjwvc3ZnPg==");


/***/ }),

/***/ "./assets/orcidid_logo.svg":
/*!*********************************!*\
  !*** ./assets/orcidid_logo.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _style, _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgOrcididLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 16 16",
    style: {
      enableBackground: "new 0 0 16 16"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _style || (_style = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
    type: "text/css"
  }, "\n\t.st0{fill:#A6CE39;}\n\t.st1{fill:#FFFFFF;}\n")), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "st0",
    d: "M16,8c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S16,3.6,16,8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "st1",
    d: "M5.4,11.6h-1V4.9h1v3V11.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "st1",
    d: "M6.8,4.9h2.6c2.5,0,3.6,1.8,3.6,3.3c0,1.7-1.3,3.3-3.6,3.3H6.8C6.8,11.6,6.8,4.9,6.8,4.9z M7.8,10.8h1.5 c2.2,0,2.7-1.7,2.7-2.5c0-1.3-0.9-2.5-2.7-2.5H7.8L7.8,10.8L7.8,10.8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "st1",
    d: "M5.5,3.5c0,0.3-0.3,0.6-0.6,0.6S4.3,3.9,4.3,3.6c0-0.3,0.3-0.6,0.6-0.6C5.3,2.9,5.5,3.2,5.5,3.5z"
  })))));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgOrcididLogo);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojQTZDRTM5O30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYsOGMwLDQuNC0zLjYsOC04LDhzLTgtMy42LTgtOHMzLjYtOCw4LThTMTYsMy42LDE2LDh6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNS40LDExLjZoLTFWNC45aDF2M1YxMS42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02LjgsNC45aDIuNmMyLjUsMCwzLjYsMS44LDMuNiwzLjNjMCwxLjctMS4zLDMuMy0zLjYsMy4zSDYuOEM2LjgsMTEuNiw2LjgsNC45LDYuOCw0Ljl6IE03LjgsMTAuOGgxLjUKCQkJYzIuMiwwLDIuNy0xLjcsMi43LTIuNWMwLTEuMy0wLjktMi41LTIuNy0yLjVINy44TDcuOCwxMC44TDcuOCwxMC44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01LjUsMy41YzAsMC4zLTAuMywwLjYtMC42LDAuNlM0LjMsMy45LDQuMywzLjZjMC0wLjMsMC4zLTAuNiwwLjYtMC42QzUuMywyLjksNS41LDMuMiw1LjUsMy41eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/rubenResearch.png":
/*!**********************************!*\
  !*** ./assets/rubenResearch.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rubenResearch.4e779d9.png";

/***/ }),

/***/ "./assets/satelliteTorreyPines.jpg":
/*!*****************************************!*\
  !*** ./assets/satelliteTorreyPines.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "satelliteTorreyPines.d28b010.jpg";

/***/ }),

/***/ "./assets/scripps-logo.png":
/*!*********************************!*\
  !*** ./assets/scripps-logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "scripps-logo.5a94dc4.png";

/***/ }),

/***/ "./assets/twitter2_logo.svg":
/*!**********************************!*\
  !*** ./assets/twitter2_logo.svg ***!
  \**********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _style, _rect, _path;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgTwitter2Logo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "Logo_FIXED",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 16 16",
    style: {
      enableBackground: "new 0 0 16 16"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), _style || (_style = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
    type: "text/css"
  }, "\n\t.st0{fill:none;}\n\t.st1{fill:#1DA1F2;}\n")), title === undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, "Twitter_Logo_Blue") : title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    x: -192,
    y: -192,
    className: "st0",
    width: 400,
    height: 400
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "st1",
    d: "M5.1,14.5c5.9,0,9.2-4.9,9.2-9.2c0-0.1,0-0.3,0-0.4c0.6-0.5,1.2-1,1.6-1.7c-0.6,0.3-1.2,0.4-1.9,0.5 c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2,0.8c-1.2-1.3-3.3-1.4-4.6-0.1C8,3.4,7.6,4.6,7.9,5.7c-2.6-0.1-5-1.4-6.6-3.4 c-0.9,1.5-0.4,3.4,1,4.3c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.5,1.1,2.9,2.6,3.2c-0.5,0.1-1,0.1-1.5,0.1c0.4,1.3,1.6,2.2,3,2.2 c-1.1,0.9-2.6,1.4-4,1.4c-0.3,0-0.5,0-0.8,0C1.6,14,3.3,14.5,5.1,14.5"
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgTwitter2Logo);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxvZ29fRklYRUQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDojMURBMUYyO30KPC9zdHlsZT4KPHRpdGxlPlR3aXR0ZXJfTG9nb19CbHVlPC90aXRsZT4KPHJlY3QgeD0iLTE5MiIgeT0iLTE5MiIgY2xhc3M9InN0MCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUuMSwxNC41YzUuOSwwLDkuMi00LjksOS4yLTkuMmMwLTAuMSwwLTAuMywwLTAuNGMwLjYtMC41LDEuMi0xLDEuNi0xLjdjLTAuNiwwLjMtMS4yLDAuNC0xLjksMC41CgljMC43LTAuNCwxLjItMSwxLjQtMS44Yy0wLjYsMC40LTEuMywwLjYtMiwwLjhjLTEuMi0xLjMtMy4zLTEuNC00LjYtMC4xQzgsMy40LDcuNiw0LjYsNy45LDUuN2MtMi42LTAuMS01LTEuNC02LjYtMy40CgljLTAuOSwxLjUtMC40LDMuNCwxLDQuM2MtMC41LDAtMS0wLjItMS41LTAuNGMwLDAsMCwwLDAsMGMwLDEuNSwxLjEsMi45LDIuNiwzLjJjLTAuNSwwLjEtMSwwLjEtMS41LDAuMWMwLjQsMS4zLDEuNiwyLjIsMywyLjIKCWMtMS4xLDAuOS0yLjYsMS40LTQsMS40Yy0wLjMsMC0wLjUsMC0wLjgsMEMxLjYsMTQsMy4zLDE0LjUsNS4xLDE0LjUiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ytm/git/Gottingen/rubenlab.org/apps/lab-website/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map