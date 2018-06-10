"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praise = function () {
    function Praise(num, btnElement, numElement) {
        _classCallCheck(this, Praise);

        this.num = num;
        this.btnElement = btnElement;
        this.numElement = numElement;
    }

    _createClass(Praise, [{
        key: "clickAction",
        value: function clickAction() {
            var _this = this;

            this.btnElement.click(function () {
                if (_this.num < 10) {
                    _this.num = add(_this.num);
                    _this.btnElement.css("color", "#af87ff");
                    _this.numElement.css("color", "#af87ff");
                    _this.numElement.html(_this.num);
                    console.log(_this.num);
                } else {
                    _this.num = 0;
                    _this.btnElement.css("color", "#000");
                    _this.numElement.css("color", "#000");
                    _this.numElement.html(0);
                    console.log(_this.num);
                }
            });
        }
    }]);

    return Praise;
}();

var Thumb = function (_Praise) {
    _inherits(Thumb, _Praise);

    function Thumb(num, btnElement, numElement) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, btnElement, numElement));
    }

    return Thumb;
}(Praise);

exports.default = Thumb;
