"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip = /*#__PURE__*/function () {
  //setnup a couple of variables that will be used in different locations
  //$ means it will be a dom element and plural means its an array
  // will hold the single tooltip that we create
  // the constructor is the starting point for our class anytime its loaded via Tooltip()
  function Tooltip(selector) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    _defineProperty(this, "$tooltips", null);

    _defineProperty(this, "tooltipDiv", null);

    _defineProperty(this, "mouseover", function (evt) {
      // "this" maps to the tooltip instance
      console.log('mousing over', evt.target, evt);
      var tooltipText = evt.target.getAttribute('data-tooltip');
      _this.tooltipDiv.innerHTML = tooltipText;
    });

    console.log('creating new tooltip', selector);
    this.$tooltips = document.querySelectorAll(selector);
    this.$tooltips.forEach(function ($tooltip) {
      _this.setupTooltip($tooltip);
    });
    this.tooltipDiv = document.createElement('div');
    this.tooltipDiv.innerHTML = 'TEST';
    this.tooltipDiv.classList.add('show-tooltip');
    document.body.appendChild(this.tooltipDiv);
  }

  _createClass(Tooltip, [{
    key: "setupTooltip",
    value: function setupTooltip($tooltip) {
      console.log('tip', $tooltip);
      var tooltipText = $tooltip.getAttribute('data-tooltip');
      console.log('text', tooltipText);

      if (!tooltipText) {
        return;
      }

      console.log('setting up tooltip for', tooltipText); //add a hover state with addEventListener

      $tooltip.addEventListener('mouseover', this.mouseover);
    } // mouseover(evt){}		//"this" maps to the evt.target

  }]);

  return Tooltip;
}();
//# sourceMappingURL=tooltip.js.map
