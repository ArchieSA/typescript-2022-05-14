"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Mixins
var Animal = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);
  }

  _createClass(Animal, [{
    key: "feed",
    value: function feed() {
      console.log('Feed animal');
    }
  }]);

  return Animal;
}();

exports.Animal = Animal;

// 1
// export class Movable {
//     speed: number = 0;
//
//     move(): void {
//         console.log('Wrooom');
//     }
// }
//
// class Horse {
//
// }
//
// interface Horse extends Animal, Movable {}
//
//
// function applyMixins(derivedCtor: Constructor, baseCtors: Constructor[] = []) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         })
//     });
// }
//
//
// applyMixins(Horse, [Movable, Animal])
//
// let pony: Horse = new Horse();
//
// pony.feed();
// pony.move();
// 2
var Horse = /*#__PURE__*/function (_Animal) {
  _inherits(Horse, _Animal);

  var _super = _createSuper(Horse);

  function Horse() {
    _classCallCheck(this, Horse);

    return _super.apply(this, arguments);
  }

  return _createClass(Horse);
}(Animal);

function Movable(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(_class2, _Base);

    var _super2 = _createSuper(_class2);

    function _class2() {
      var _this;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super2.call.apply(_super2, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "speed", 0);

      return _this;
    }

    _createClass(_class2, [{
      key: "move",
      value: function move() {
        console.log('Wrooom');
      }
    }]);

    return _class2;
  }(Base);
}

var pony = new Horse();
pony.feed();
var MovableHorse = Movable(Horse);
var movablePony = new MovableHorse();
movablePony.feed();
movablePony.move();
movablePony.speed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbmltYWwiLCJjb25zb2xlIiwibG9nIiwiSG9yc2UiLCJNb3ZhYmxlIiwiQmFzZSIsInBvbnkiLCJmZWVkIiwiTW92YWJsZUhvcnNlIiwibW92YWJsZVBvbnkiLCJtb3ZlIiwic3BlZWQiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlNi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNaXhpbnNcblxuZXhwb3J0IGNsYXNzIEFuaW1hbCB7XG4gICAgZmVlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlZWQgYW5pbWFsJyk7XG4gICAgfVxufVxuXG50eXBlIENvbnN0cnVjdG9yID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4ge307XG5cbi8vIDFcbi8vIGV4cG9ydCBjbGFzcyBNb3ZhYmxlIHtcbi8vICAgICBzcGVlZDogbnVtYmVyID0gMDtcbi8vXG4vLyAgICAgbW92ZSgpOiB2b2lkIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1dyb29vbScpO1xuLy8gICAgIH1cbi8vIH1cbi8vXG4vLyBjbGFzcyBIb3JzZSB7XG4vL1xuLy8gfVxuLy9cbi8vIGludGVyZmFjZSBIb3JzZSBleHRlbmRzIEFuaW1hbCwgTW92YWJsZSB7fVxuLy9cbi8vXG4vLyBmdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvcjogQ29uc3RydWN0b3IsIGJhc2VDdG9yczogQ29uc3RydWN0b3JbXSA9IFtdKSB7XG4vLyAgICAgYmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xuLy8gICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG4vLyAgICAgICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGVbbmFtZV0gPSBiYXNlQ3Rvci5wcm90b3R5cGVbbmFtZV07XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSk7XG4vLyB9XG4vL1xuLy9cbi8vIGFwcGx5TWl4aW5zKEhvcnNlLCBbTW92YWJsZSwgQW5pbWFsXSlcbi8vXG4vLyBsZXQgcG9ueTogSG9yc2UgPSBuZXcgSG9yc2UoKTtcbi8vXG4vLyBwb255LmZlZWQoKTtcbi8vIHBvbnkubW92ZSgpO1xuXG4vLyAyXG5cbmNsYXNzIEhvcnNlIGV4dGVuZHMgQW5pbWFsIHtcblxufVxuXG5mdW5jdGlvbiBNb3ZhYmxlPEJhc2VUeXBlIGV4dGVuZHMgQ29uc3RydWN0b3I+KEJhc2U6IEJhc2VUeXBlKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgICAgIHNwZWVkOiBudW1iZXIgPSAwO1xuXG4gICAgICAgIG1vdmUoKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV3Jvb29tJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHBvbnkgPSBuZXcgSG9yc2UoKTtcbnBvbnkuZmVlZCgpO1xuXG5jb25zdCBNb3ZhYmxlSG9yc2UgPSBNb3ZhYmxlKEhvcnNlKTtcbmNvbnN0IG1vdmFibGVQb255ID0gbmV3IE1vdmFibGVIb3JzZSgpO1xubW92YWJsZVBvbnkuZmVlZCgpO1xubW92YWJsZVBvbnkubW92ZSgpO1xubW92YWJsZVBvbnkuc3BlZWQ7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRWFBLE07Ozs7Ozs7V0FDVCxnQkFBYTtNQUNUQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0lBQ0g7Ozs7Ozs7O0FBS0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtJQUVNQyxLOzs7Ozs7Ozs7Ozs7RUFBY0gsTTs7QUFJcEIsU0FBU0ksT0FBVCxDQUErQ0MsSUFBL0MsRUFBK0Q7RUFDM0Q7SUFBQTs7SUFBQTs7SUFBQTtNQUFBOztNQUFBOztNQUFBO1FBQUE7TUFBQTs7TUFBQTs7TUFBQSx3REFDb0IsQ0FEcEI7O01BQUE7SUFBQTs7SUFBQTtNQUFBO01BQUEsT0FHSSxnQkFBYTtRQUNUSixPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO01BQ0g7SUFMTDs7SUFBQTtFQUFBLEVBQXFCRyxJQUFyQjtBQU9IOztBQUVELElBQU1DLElBQUksR0FBRyxJQUFJSCxLQUFKLEVBQWI7QUFDQUcsSUFBSSxDQUFDQyxJQUFMO0FBRUEsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNELEtBQUQsQ0FBNUI7QUFDQSxJQUFNTSxXQUFXLEdBQUcsSUFBSUQsWUFBSixFQUFwQjtBQUNBQyxXQUFXLENBQUNGLElBQVo7QUFDQUUsV0FBVyxDQUFDQyxJQUFaO0FBQ0FELFdBQVcsQ0FBQ0UsS0FBWiJ9