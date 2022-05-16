"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _getName;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Interface
// public
// protected
// private
var CDog = /*#__PURE__*/function () {
  function CDog(weight, color) {
    _classCallCheck(this, CDog);

    _defineProperty(this, "weight", void 0);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "height", 12);

    this.weight = weight;
    this.color = color;
  }

  _createClass(CDog, [{
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }]);

  return CDog;
}();

var frenchBulldog = {
  weight: 12,
  color: 'fawn',
  name: 'Richard'
};
frenchBulldog.weight;
frenchBulldog.color;
var corgi = {
  weight: 1,
  color: 'golden'
};
corgi.weight;
corgi.color;

function getWeight(dog) {
  if (dog.color === 'golden') {
    return 123;
  }

  return dog.weight;
} // frenchBulldog.color = 'white';


frenchBulldog.weight = 13;
frenchBulldog.name;

function getName(dog) {
  return dog.name;
}

(_getName = getName(corgi)) === null || _getName === void 0 ? void 0 : _getName.toUpperCase(); // const newDog = new Dog(14, 'white');
//
// newDog.weight = 15;
// newDog.color;

var Dog = /*#__PURE__*/function () {
  function Dog() {
    _classCallCheck(this, Dog);

    _defineProperty(this, "name", 'dog');
  }

  _createClass(Dog, [{
    key: "bark",
    value: function bark() {}
  }]);

  return Dog;
}();

var Cat = /*#__PURE__*/function () {
  function Cat() {
    _classCallCheck(this, Cat);

    _defineProperty(this, "name", 'cat');
  }

  _createClass(Cat, [{
    key: "meow",
    value: function meow() {}
  }]);

  return Cat;
}();

var dog = new Dog();
var cat = new Cat();

function getPetName(pet) {
  return pet.name;
}

getPetName(dog);
getPetName(cat);
var customPosition = 'absolute';
var customDog;
var extraDog = {
  weight: 123,
  color: 'golden'
}; //================================

var C1 = /*#__PURE__*/_createClass(function C1(p1, p2, p3) {
  _classCallCheck(this, C1);

  _defineProperty(this, "p1", void 0);

  _defineProperty(this, "p2", void 0);

  _defineProperty(this, "p3", void 0);

  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
});

var C2 = /*#__PURE__*/function (_C) {
  _inherits(C2, _C);

  var _super = _createSuper(C2);

  function C2(p1, p2, p3, p4) {
    var _this;

    _classCallCheck(this, C2);

    _this = _super.call(this, p1, p2, p3);

    _defineProperty(_assertThisInitialized(_this), "p4", void 0);

    _this.p4 = p4;
    return _this;
  }

  return _createClass(C2);
}(C1);

var C3 = /*#__PURE__*/function (_C2) {
  _inherits(C3, _C2);

  var _super2 = _createSuper(C3);

  function C3() {
    _classCallCheck(this, C3);

    return _super2.apply(this, arguments);
  }

  return _createClass(C3);
}(C2);

var c1 = new C1('1', '2', '3');
var c2 = new C2('1', '2', '3', '4');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDRG9nIiwid2VpZ2h0IiwiY29sb3IiLCJoZWlnaHQiLCJmcmVuY2hCdWxsZG9nIiwibmFtZSIsImNvcmdpIiwiZ2V0V2VpZ2h0IiwiZG9nIiwiZ2V0TmFtZSIsInRvVXBwZXJDYXNlIiwiRG9nIiwiQ2F0IiwiY2F0IiwiZ2V0UGV0TmFtZSIsInBldCIsImN1c3RvbVBvc2l0aW9uIiwiY3VzdG9tRG9nIiwiZXh0cmFEb2ciLCJDMSIsInAxIiwicDIiLCJwMyIsIkMyIiwicDQiLCJDMyIsImMxIiwiYzIiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlMi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnRlcmZhY2VcblxuLy8gcHVibGljXG4vLyBwcm90ZWN0ZWRcbi8vIHByaXZhdGVcblxuZXhwb3J0IGludGVyZmFjZSBJRG9nIHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHdlaWdodDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJRG9nMiBleHRlbmRzIElEb2d7XG4gICAgcmVhZG9ubHkgY29sb3I6ICdnb2xkZW4nIHwgJ3doaXRlJztcbn1cblxuaW50ZXJmYWNlIElDYXQge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgd2VpZ2h0OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZztcbn1cblxuY2xhc3MgQ0RvZyBpbXBsZW1lbnRzIElEb2cge1xuICAgIHB1YmxpYyB3ZWlnaHQ6IG51bWJlcjtcbiAgICByZWFkb25seSBjb2xvcjogc3RyaW5nO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSAxMjtcblxuICAgIGNvbnN0cnVjdG9yKHdlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yXG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHRcbiAgICB9XG59XG5cbmNvbnN0IGZyZW5jaEJ1bGxkb2c6IElEb2cgPSB7XG4gICAgd2VpZ2h0OiAxMixcbiAgICBjb2xvcjogJ2Zhd24nLFxuICAgIG5hbWU6ICdSaWNoYXJkJyxcbn07XG5cbmZyZW5jaEJ1bGxkb2cud2VpZ2h0O1xuZnJlbmNoQnVsbGRvZy5jb2xvclxuXG5cbmNvbnN0IGNvcmdpOiBJRG9nID0ge1xuICAgIHdlaWdodDogMSxcbiAgICBjb2xvcjogJ2dvbGRlbicsXG59XG5cblxuY29yZ2kud2VpZ2h0O1xuY29yZ2kuY29sb3I7XG5cbmZ1bmN0aW9uIGdldFdlaWdodChkb2c6IElEb2cpOiBudW1iZXIge1xuICAgIGlmIChkb2cuY29sb3IgPT09ICdnb2xkZW4nKSB7XG4gICAgICAgIHJldHVybiAxMjM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvZy53ZWlnaHQ7XG59XG5cbi8vIGZyZW5jaEJ1bGxkb2cuY29sb3IgPSAnd2hpdGUnO1xuZnJlbmNoQnVsbGRvZy53ZWlnaHQgPSAxMztcbmZyZW5jaEJ1bGxkb2cubmFtZTtcblxuZnVuY3Rpb24gZ2V0TmFtZShkb2c6IElEb2cpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBkb2cubmFtZTtcbn1cblxuZ2V0TmFtZShjb3JnaSk/LnRvVXBwZXJDYXNlKCk7XG5cblxuLy8gY29uc3QgbmV3RG9nID0gbmV3IERvZygxNCwgJ3doaXRlJyk7XG4vL1xuLy8gbmV3RG9nLndlaWdodCA9IDE1O1xuLy8gbmV3RG9nLmNvbG9yO1xuXG5pbnRlcmZhY2UgUGV0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmNsYXNzIERvZyBpbXBsZW1lbnRzIFBldCB7XG4gICAgbmFtZSA9ICdkb2cnO1xuXG4gICAgYmFyaygpIHtcblxuICAgIH1cbn1cblxuY2xhc3MgQ2F0IGltcGxlbWVudHMgUGV0IHtcbiAgICBuYW1lID0gJ2NhdCc7XG5cbiAgICBtZW93KCkge1xuXG4gICAgfVxufVxuXG5jb25zdCBkb2cgPSBuZXcgRG9nKCk7XG5jb25zdCBjYXQgPSBuZXcgQ2F0KCk7XG5cbmZ1bmN0aW9uIGdldFBldE5hbWUocGV0OiBQZXQpIHtcbiAgICByZXR1cm4gcGV0Lm5hbWU7XG59XG5cbmdldFBldE5hbWUoZG9nKTtcbmdldFBldE5hbWUoY2F0KTtcblxuXG50eXBlIFBvc2l0aW9uID0gJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAncmVsYXRpdmUnO1xuXG5jb25zdCBjdXN0b21Qb3NpdGlvbjogUG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG50eXBlIFREb2cgPSB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB3ZWlnaHQ6IG51bWJlcjtcbiAgICByZWFkb25seSBjb2xvcjogc3RyaW5nO1xufVxuXG5sZXQgY3VzdG9tRG9nOiBURG9nO1xuXG50eXBlIEV4dHJhRG9nID0gSURvZzIgJiBJRG9nO1xuXG5jb25zdCBleHRyYURvZzogRXh0cmFEb2cgPSB7XG4gICAgd2VpZ2h0OiAxMjMsXG4gICAgY29sb3I6ICdnb2xkZW4nLFxufTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFQxID0ge307XG5cbnR5cGUgVDIgPSB7fTtcblxudHlwZSBUMyA9IHt9O1xuXG50eXBlIFQ0ID0ge307XG5cbmludGVyZmFjZSBJMSB7XG5cbn1cblxuaW50ZXJmYWNlIEkyIHtcblxufVxuXG5pbnRlcmZhY2UgSTMgZXh0ZW5kcyBUMSwgSTJ7XG5cbn1cblxuY2xhc3MgQzEge1xuICAgIHAxOiBzdHJpbmc7XG4gICAgcDI6IHN0cmluZztcbiAgICBwMzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocDE6IHN0cmluZywgcDI6IHN0cmluZywgcDM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnAxID0gcDE7XG4gICAgICAgIHRoaXMucDIgPSBwMjtcbiAgICAgICAgdGhpcy5wMyA9IHAzO1xuICAgIH1cbn1cblxuY2xhc3MgQzIgZXh0ZW5kcyBDMSBpbXBsZW1lbnRzIEkxLCBJMiB7XG4gICAgcDQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHAxOiBzdHJpbmcsIHAyOiBzdHJpbmcsIHAzOiBzdHJpbmcsIHA0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIocDEsIHAyLCBwMyk7XG4gICAgICAgIHRoaXMucDQgPSBwNDtcbiAgICB9XG59XG5cbmNsYXNzIEMzIGV4dGVuZHMgQzIge1xuXG59XG5cblxuY29uc3QgYzEgPSBuZXcgQzEoJzEnLCAnMicsICczJyk7XG5jb25zdCBjMiA9IG5ldyBDMignMScsICcyJywgJzMnLCAnNCcpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0lBa0JNQSxJO0VBS0YsY0FBWUMsTUFBWixFQUE0QkMsS0FBNUIsRUFBMkM7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQSxnQ0FGbEIsRUFFa0I7O0lBQ3ZDLEtBQUtELE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtFQUNIOzs7O1dBRUQsb0JBQVc7TUFDUCxPQUFPLEtBQUtBLEtBQVo7SUFDSDs7O1dBRUQscUJBQVk7TUFDUixPQUFPLEtBQUtDLE1BQVo7SUFDSDs7Ozs7O0FBR0wsSUFBTUMsYUFBbUIsR0FBRztFQUN4QkgsTUFBTSxFQUFFLEVBRGdCO0VBRXhCQyxLQUFLLEVBQUUsTUFGaUI7RUFHeEJHLElBQUksRUFBRTtBQUhrQixDQUE1QjtBQU1BRCxhQUFhLENBQUNILE1BQWQ7QUFDQUcsYUFBYSxDQUFDRixLQUFkO0FBR0EsSUFBTUksS0FBVyxHQUFHO0VBQ2hCTCxNQUFNLEVBQUUsQ0FEUTtFQUVoQkMsS0FBSyxFQUFFO0FBRlMsQ0FBcEI7QUFNQUksS0FBSyxDQUFDTCxNQUFOO0FBQ0FLLEtBQUssQ0FBQ0osS0FBTjs7QUFFQSxTQUFTSyxTQUFULENBQW1CQyxHQUFuQixFQUFzQztFQUNsQyxJQUFJQSxHQUFHLENBQUNOLEtBQUosS0FBYyxRQUFsQixFQUE0QjtJQUN4QixPQUFPLEdBQVA7RUFDSDs7RUFFRCxPQUFPTSxHQUFHLENBQUNQLE1BQVg7QUFDSCxDLENBRUQ7OztBQUNBRyxhQUFhLENBQUNILE1BQWQsR0FBdUIsRUFBdkI7QUFDQUcsYUFBYSxDQUFDQyxJQUFkOztBQUVBLFNBQVNJLE9BQVQsQ0FBaUJELEdBQWpCLEVBQWdEO0VBQzVDLE9BQU9BLEdBQUcsQ0FBQ0gsSUFBWDtBQUNIOztBQUVELFlBQUFJLE9BQU8sQ0FBQ0gsS0FBRCxDQUFQLHNEQUFnQkksV0FBaEIsRyxDQUdBO0FBQ0E7QUFDQTtBQUNBOztJQU1NQyxHOzs7O2tDQUNLLEs7Ozs7O1dBRVAsZ0JBQU8sQ0FFTjs7Ozs7O0lBR0NDLEc7Ozs7a0NBQ0ssSzs7Ozs7V0FFUCxnQkFBTyxDQUVOOzs7Ozs7QUFHTCxJQUFNSixHQUFHLEdBQUcsSUFBSUcsR0FBSixFQUFaO0FBQ0EsSUFBTUUsR0FBRyxHQUFHLElBQUlELEdBQUosRUFBWjs7QUFFQSxTQUFTRSxVQUFULENBQW9CQyxHQUFwQixFQUE4QjtFQUMxQixPQUFPQSxHQUFHLENBQUNWLElBQVg7QUFDSDs7QUFFRFMsVUFBVSxDQUFDTixHQUFELENBQVY7QUFDQU0sVUFBVSxDQUFDRCxHQUFELENBQVY7QUFLQSxJQUFNRyxjQUF3QixHQUFHLFVBQWpDO0FBUUEsSUFBSUMsU0FBSjtBQUlBLElBQU1DLFFBQWtCLEdBQUc7RUFDdkJqQixNQUFNLEVBQUUsR0FEZTtFQUV2QkMsS0FBSyxFQUFFO0FBRmdCLENBQTNCLEMsQ0FLQTs7SUFzQk1pQixFLDZCQUtGLFlBQVlDLEVBQVosRUFBd0JDLEVBQXhCLEVBQW9DQyxFQUFwQyxFQUFnRDtFQUFBOztFQUFBOztFQUFBOztFQUFBOztFQUM1QyxLQUFLRixFQUFMLEdBQVVBLEVBQVY7RUFDQSxLQUFLQyxFQUFMLEdBQVVBLEVBQVY7RUFDQSxLQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDSCxDOztJQUdDQyxFOzs7OztFQUdGLFlBQVlILEVBQVosRUFBd0JDLEVBQXhCLEVBQW9DQyxFQUFwQyxFQUFnREUsRUFBaEQsRUFBNEQ7SUFBQTs7SUFBQTs7SUFDeEQsMEJBQU1KLEVBQU4sRUFBVUMsRUFBVixFQUFjQyxFQUFkOztJQUR3RDs7SUFFeEQsTUFBS0UsRUFBTCxHQUFVQSxFQUFWO0lBRndEO0VBRzNEOzs7RUFOWUwsRTs7SUFTWE0sRTs7Ozs7Ozs7Ozs7O0VBQVdGLEU7O0FBS2pCLElBQU1HLEVBQUUsR0FBRyxJQUFJUCxFQUFKLENBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBWDtBQUNBLElBQU1RLEVBQUUsR0FBRyxJQUFJSixFQUFKLENBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0FBWCJ9