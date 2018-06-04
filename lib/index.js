'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Praise = function () {
    function Praise(num) {
        _classCallCheck(this, Praise);

        this.num = num;
    }

    _createClass(Praise, [{
        key: 'like',
        value: function like() {
            this.num++;
        }
    }]);

    return Praise;
}();

var Thumb = function (_Praise) {
    _inherits(Thumb, _Praise);

    function Thumb(num) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));
    }

    return Thumb;
}(Praise);

var liking = new Thumb(0);
var thumb = document.getElementById('thumb');
var num = document.getElementById('num');
window.onload = function () {
    num.innerHTML = liking.num;
};

thumb.addEventListener('click', function () {
    liking.like();
    num.innerHTML = liking.num;
});