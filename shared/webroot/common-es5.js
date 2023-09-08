(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "fmcd":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@bci-web-core/web-components/dist/esm/checkbox-collection.interface-94343af2.js ***!
      \******************************************************************************************************/

    /*! exports provided: C */

    /***/
    function fmcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return CollectionType;
      });
      /* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */

      /*
       * Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
       */


      var CollectionType;

      (function (CollectionType) {
        CollectionType[CollectionType["Multi"] = 0] = "Multi";
        CollectionType[CollectionType["Single"] = 1] = "Single";
      })(CollectionType || (CollectionType = {}));
      /***/

    },

    /***/
    "o3so":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@bci-web-core/web-components/dist/esm/navigation-controller-5d320afc.js ***!
      \**********************************************************************************************/

    /*! exports provided: N */

    /***/
    function o3so(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return NavigationController;
      });
      /* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */

      /*
       * Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
       */


      var NavigationController = /*#__PURE__*/function () {
        function NavigationController() {
          _classCallCheck(this, NavigationController);
        }

        _createClass(NavigationController, [{
          key: "checkArgument",
          value: function checkArgument(condition, message) {
            if (!condition) {
              throw Error('IllegalArgumentException: ' + (message || ''));
            }
          }
        }, {
          key: "getPathItems",
          value: function getPathItems(path, navigationItems) {
            var _this = this;

            return navigationItems.reduce(function (acc, item) {
              var windowPath = NavigationController.preprocessPath(path);
              var itemPath = NavigationController.preprocessPath(item.path);

              if (item.children) {
                var childItems = _this.getPathItems(path, item.children);

                if (childItems.length > 0) {
                  acc.push.apply(acc, [item].concat(_toConsumableArray(childItems)));
                } else if ((!!item.jsFiles || !!item.htmlFile) && windowPath.startsWith(itemPath)) {
                  acc.push(item);
                }
              } else if (windowPath.startsWith(itemPath)) {
                acc.push(item);
              }

              return acc;
            }, []);
          }
        }, {
          key: "getSelectedNavigationItem",
          value: function getSelectedNavigationItem(path, navigationItems) {
            var items = this.getPathItems(path, navigationItems);

            if (items.length > 0) {
              return items[items.length - 1];
            }

            return null;
          }
        }, {
          key: "setActiveNavigationByPath",
          value: function setActiveNavigationByPath(path, navigationItems) {
            this.checkArgument(path.startsWith('/'), 'Path must start with /');
            this.deactivateNavigationItems(navigationItems);
            var items = this.getPathItems(path, navigationItems);

            if (items.length > 0) {
              items.forEach(function (item, index) {
                if (index === items.length - 1) {
                  item.active = true;
                } else {
                  item.expanded = true;
                }
              });
              return items[items.length - 1];
            }

            return null;
          }
        }, {
          key: "getTranslatedPath",
          value: function getTranslatedPath(path, navigationItems) {
            var items = this.getPathItems(path, navigationItems);
            return items.map(function (item) {
              return item.title;
            });
          }
        }, {
          key: "deactivateNavigationItems",
          value: function deactivateNavigationItems() {
            var _this2 = this;

            var navigationItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            navigationItems.forEach(function (navigationItem) {
              navigationItem.active = false;

              _this2.deactivateNavigationItems(navigationItem.children || []);
            });
          }
        }], [{
          key: "preprocessPath",
          value: function preprocessPath(path) {
            return path.replace(NavigationController.REPLACE_REGEX, '$1/$4').replace('//', '/');
          }
        }]);

        return NavigationController;
      }();

      NavigationController.REPLACE_REGEX = /^(((?!\?).)+)(\?.+)?(#((?!\?).)*)(\?.*)?$/;
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map