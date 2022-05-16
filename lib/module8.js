"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomClass = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Decorators
function CustomBehavior(meta) {
  return function (constructor) {
    return /*#__PURE__*/function (_constructor) {
      _inherits(_class2, _constructor);

      var _super = _createSuper(_class2);

      function _class2() {
        var _this;

        _classCallCheck(this, _class2);

        // console.log('decorator');
        _this = _super.call(this);

        _defineProperty(_assertThisInitialized(_this), "name", void 0);

        _this.name = 'decoratorName';
        return _this;
      }

      return _createClass(_class2);
    }(constructor);
  };
} // @CustomBehavior({
//     name: '13',
// })


var CustomClass = /*#__PURE__*/_createClass(function CustomClass() {// console.log('constructor');

  _classCallCheck(this, CustomClass);

  _defineProperty(this, "name", 'defaultName');
});

exports.CustomClass = CustomClass;
var customObject = new CustomClass();
console.log(customObject.name);

function LogTime() {
  return function (target, propertyName, descriptor) {
    var method = descriptor.value;

    descriptor.value = function () {
      console.time(propertyName);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = method.apply(this, args);
      console.timeEnd(propertyName);
      return result;
    };
  };
}

var PropertyDecoratorClass = /*#__PURE__*/function () {
  function PropertyDecoratorClass(property) {
    _classCallCheck(this, PropertyDecoratorClass);

    _defineProperty(this, "property2", '123');

    _defineProperty(this, "property", '');

    this.property = property;
  }

  _createClass(PropertyDecoratorClass, [{
    key: "customMethod",
    value: // @LogTime()
    // @LogTime()
    function customMethod() {
      console.log(this.property2);
      return Math.random() * Math.random() * Math.random() * Math.random() * Math.random() * Math.random();
    }
  }]);

  return PropertyDecoratorClass;
}();

var testProperty = new PropertyDecoratorClass('');
testProperty.customMethod();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21CZWhhdmlvciIsIm1ldGEiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJDdXN0b21DbGFzcyIsImN1c3RvbU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJMb2dUaW1lIiwidGFyZ2V0IiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsIm1ldGhvZCIsInZhbHVlIiwidGltZSIsImFyZ3MiLCJyZXN1bHQiLCJhcHBseSIsInRpbWVFbmQiLCJQcm9wZXJ0eURlY29yYXRvckNsYXNzIiwicHJvcGVydHkiLCJwcm9wZXJ0eTIiLCJNYXRoIiwicmFuZG9tIiwidGVzdFByb3BlcnR5IiwiY3VzdG9tTWV0aG9kIl0sInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZTgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjb3JhdG9yc1xuXG5mdW5jdGlvbiBDdXN0b21CZWhhdmlvcihtZXRhOiB7bmFtZTogc3RyaW5nfSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoY29uc3RydWN0b3I6IG5ldyAoKSA9PiB7fSkge1xuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjb25zdHJ1Y3RvciB7XG4gICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVjb3JhdG9yJyk7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSAnZGVjb3JhdG9yTmFtZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEBDdXN0b21CZWhhdmlvcih7XG4vLyAgICAgbmFtZTogJzEzJyxcbi8vIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2xhc3Mge1xuICAgIG5hbWU6IHN0cmluZyA9ICdkZWZhdWx0TmFtZSc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO1xuICAgIH1cbn1cblxuXG5jb25zdCBjdXN0b21PYmplY3QgPSBuZXcgQ3VzdG9tQ2xhc3MoKTtcbmNvbnNvbGUubG9nKGN1c3RvbU9iamVjdC5uYW1lKTtcblxuZnVuY3Rpb24gTG9nVGltZSgpIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiguLi5hcmdzOiBSZXR1cm5UeXBlPHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlPikge1xuICAgICAgICAgICAgY29uc29sZS50aW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBjb25zb2xlLnRpbWVFbmQocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBQcm9wZXJ0eURlY29yYXRvckNsYXNzIHtcbiAgICBwcm9wZXJ0eTI6IHN0cmluZyA9ICcxMjMnO1xuICAgIC8vIEBMb2dUaW1lKClcbiAgICBwcm9wZXJ0eTogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBATG9nVGltZSgpXG4gICAgY3VzdG9tTWV0aG9kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BlcnR5Mik7XG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpKk1hdGgucmFuZG9tKCkqTWF0aC5yYW5kb20oKSpNYXRoLnJhbmRvbSgpKk1hdGgucmFuZG9tKCkqTWF0aC5yYW5kb20oKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB9XG59XG5cblxuY29uc3QgdGVzdFByb3BlcnR5ID0gbmV3IFByb3BlcnR5RGVjb3JhdG9yQ2xhc3MoJycpO1xudGVzdFByb3BlcnR5LmN1c3RvbU1ldGhvZCgpO1xuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThDO0VBQzFDLE9BQU8sVUFBVUMsV0FBVixFQUFxQztJQUN4QztNQUFBOztNQUFBOztNQUVJLG1CQUFjO1FBQUE7O1FBQUE7O1FBQ1Y7UUFDQTs7UUFGVTs7UUFHVixNQUFLQyxJQUFMLEdBQVksZUFBWjtRQUhVO01BSWI7O01BTkw7SUFBQSxFQUFxQkQsV0FBckI7RUFRSCxDQVREO0FBVUgsQyxDQUVEO0FBQ0E7QUFDQTs7O0lBQ2FFLFcsNkJBRVQsdUJBQWMsQ0FDVjs7RUFEVTs7RUFBQSw4QkFEQyxhQUNEO0FBRWIsQzs7O0FBSUwsSUFBTUMsWUFBWSxHQUFHLElBQUlELFdBQUosRUFBckI7QUFDQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVksQ0FBQ0YsSUFBekI7O0FBRUEsU0FBU0ssT0FBVCxHQUFtQjtFQUNmLE9BQU8sVUFBQ0MsTUFBRCxFQUFpQkMsWUFBakIsRUFBdUNDLFVBQXZDLEVBQTBFO0lBQzdFLElBQU1DLE1BQU0sR0FBR0QsVUFBVSxDQUFDRSxLQUExQjs7SUFDQUYsVUFBVSxDQUFDRSxLQUFYLEdBQW1CLFlBQXVEO01BQ3RFUCxPQUFPLENBQUNRLElBQVIsQ0FBYUosWUFBYjs7TUFEc0Usa0NBQTNDSyxJQUEyQztRQUEzQ0EsSUFBMkM7TUFBQTs7TUFFdEUsSUFBTUMsTUFBTSxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYSxJQUFiLEVBQW1CRixJQUFuQixDQUFmO01BQ0FULE9BQU8sQ0FBQ1ksT0FBUixDQUFnQlIsWUFBaEI7TUFFQSxPQUFPTSxNQUFQO0lBQ0gsQ0FORDtFQU9ILENBVEQ7QUFVSDs7SUFHS0csc0I7RUFXRixnQ0FBWUMsUUFBWixFQUE4QjtJQUFBOztJQUFBLG1DQVZWLEtBVVU7O0lBQUEsa0NBUlgsRUFRVzs7SUFDMUIsS0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7RUFDSDs7OztXQVhEO0lBR0E7SUFDQSx3QkFBZTtNQUNYZCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLYyxTQUFqQjtNQUNBLE9BQU9DLElBQUksQ0FBQ0MsTUFBTCxLQUFjRCxJQUFJLENBQUNDLE1BQUwsRUFBZCxHQUE0QkQsSUFBSSxDQUFDQyxNQUFMLEVBQTVCLEdBQTBDRCxJQUFJLENBQUNDLE1BQUwsRUFBMUMsR0FBd0RELElBQUksQ0FBQ0MsTUFBTCxFQUF4RCxHQUFzRUQsSUFBSSxDQUFDQyxNQUFMLEVBQTdFO0lBQ0g7Ozs7OztBQVFMLElBQU1DLFlBQVksR0FBRyxJQUFJTCxzQkFBSixDQUEyQixFQUEzQixDQUFyQjtBQUNBSyxZQUFZLENBQUNDLFlBQWIifQ==