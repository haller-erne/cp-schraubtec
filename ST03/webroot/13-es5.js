(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13], {
    /***/
    "OMus":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@bci-web-core/web-components/dist/esm/bci-toolbar_3.entry.js ***!
      \***********************************************************************************/

    /*! exports provided: bci_toolbar, bci_toolbar_item, bci_toolbar_spacing */

    /***/
    function OMus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bci_toolbar", function () {
        return Toolbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bci_toolbar_item", function () {
        return Item;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bci_toolbar_spacing", function () {
        return Spacing;
      });
      /* harmony import */


      var _index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-267cdec7.js */
      "mTGF");
      /* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */


      var toolbarCss = "/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;background-color:#FFFFFF;height:48px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}:host>.toolbar-spacing,:host>::slotted(.toolbar-spacing){height:32px;border-left:1px solid #CFD0D1;margin:8px}:host>.toolbar-item,:host>::slotted(.toolbar-item){display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:48px;width:48px;background-color:#FFFFFF}:host>.toolbar-item>*,:host>.toolbar-item>::slotted(*),:host>::slotted(.toolbar-item)>*,:host>::slotted(.toolbar-item)>::slotted(*){display:block;margin:0;color:#293036;font-size:24px;font-weight:bold;text-decoration:none;text-align:center;height:24px;width:24px;min-width:24px;padding:0;background-color:#FFFFFF}:host>.toolbar-item:hover,:host>::slotted(.toolbar-item:hover){background-color:#FBFBFB;color:#000000}:host>.toolbar-item:active,:host>::slotted(.toolbar-item:active){-webkit-transition:0s;transition:0s;background-color:#FBFBFB}";

      var Toolbar = /*#__PURE__*/function () {
        function Toolbar(hostRef) {
          _classCallCheck(this, Toolbar);

          Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.itemClick = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "itemClick", 7);
        }

        _createClass(Toolbar, [{
          key: "clicked",
          value: function clicked(event) {
            var toolbarItem = this.getToolbarItem(event);

            if (toolbarItem && toolbarItem.dataset.value) {
              this.itemClick.emit(toolbarItem.dataset.value);
            }
          }
        }, {
          key: "getToolbarItem",
          value: function getToolbarItem(target) {
            return target.composedPath().find(function (el) {
              return el.nodeName && el.nodeName.toLowerCase() === 'bci-toolbar-item';
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this = this;

            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": "toolbar",
              onClick: function onClick(event) {
                return _this.clicked(event);
              }
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }]);

        return Toolbar;
      }();

      Toolbar.style = toolbarCss;
      var itemCss = "";

      var Item = /*#__PURE__*/function () {
        function Item(hostRef) {
          _classCallCheck(this, Item);

          Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /** The string value of the item which will be emitter on click. By default set to ''.*/

          this.value = '';
          this.stateValue = '';
        }

        _createClass(Item, [{
          key: "watchValueHandler",
          value: function watchValueHandler(newValue) {
            this.stateValue = newValue;
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.stateValue = this.value;
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": "toolbar-item",
              "data-value": this.stateValue
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "value": ["watchValueHandler"]
            };
          }
        }]);

        return Item;
      }();

      Item.style = itemCss;
      var spacingCss = "";

      var Spacing = /*#__PURE__*/function () {
        function Spacing(hostRef) {
          _classCallCheck(this, Spacing);

          Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(Spacing, [{
          key: "render",
          value: function render() {
            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": "toolbar-spacing"
            });
          }
        }]);

        return Spacing;
      }();

      Spacing.style = spacingCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=13-es5.js.map