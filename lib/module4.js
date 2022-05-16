"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generics
var apple = {
  p1: "",
  grow: function grow() {}
};
var tomato = {
  p2: "",
  grow: function grow() {}
};
var pumpkin = {
  p3: "",
  grow: function grow() {}
};

function grow(plant) {
  plant.grow();
  return plant;
}

grow(apple);
var tomatoResult = grow(tomato);
grow(pumpkin);

function draw(point) {
  // logic
  var test = point;
  return test;
}

var str = "";
var point = {
  x: 1,
  y: 2
};
var result = draw(point);
var point3D = {
  x: 1,
  y: 2,
  z: 3
};
draw(point3D);
draw({
  x: 1,
  y: 2,
  z: 3
});
var body = {
  body: {
    content: ''
  }
};

function get() {
  return {
    body: {
      content: ''
    }
  };
} // function post<T>(): CustomResponse<T> {
//     return { body: { content: '' } };
// }


function getProperty(obj, key) {
  return obj[key];
}

;
var point3D2 = {
  x: 1,
  y: 1,
  z: 2
};
var xValue = getProperty(point3D2, 'x');

var CustomClass = /*#__PURE__*/function () {
  function CustomClass(property) {
    _classCallCheck(this, CustomClass);

    _defineProperty(this, "property", void 0);

    this.property = property;
  }

  _createClass(CustomClass, [{
    key: "getProperty",
    value: function getProperty(property) {
      return this.property || property;
    }
  }]);

  return CustomClass;
}();

new CustomClass('propertyValue');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcHBsZSIsInAxIiwiZ3JvdyIsInRvbWF0byIsInAyIiwicHVtcGtpbiIsInAzIiwicGxhbnQiLCJ0b21hdG9SZXN1bHQiLCJkcmF3IiwicG9pbnQiLCJ0ZXN0Iiwic3RyIiwieCIsInkiLCJyZXN1bHQiLCJwb2ludDNEIiwieiIsImJvZHkiLCJjb250ZW50IiwiZ2V0IiwiZ2V0UHJvcGVydHkiLCJvYmoiLCJrZXkiLCJwb2ludDNEMiIsInhWYWx1ZSIsIkN1c3RvbUNsYXNzIiwicHJvcGVydHkiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlNC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmljc1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50IHtcbiAgICBncm93OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQXBwbGUge1xuICAgIHAxOiBzdHJpbmc7XG4gICAgZ3JvdzogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRvbWF0byBleHRlbmRzIFBsYW50IHtcbiAgICBwMjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHVtcGtpbiBleHRlbmRzIFBsYW50IHtcbiAgICBwMzogc3RyaW5nO1xufVxuXG5jb25zdCBhcHBsZTogQXBwbGUgPSB7cDE6IFwiXCIsIGdyb3c6ICgpID0+IHt9fTtcbmNvbnN0IHRvbWF0bzogVG9tYXRvID0ge3AyOiBcIlwiLCBncm93OiAoKSA9PiB7fX07XG5jb25zdCBwdW1wa2luOiBQdW1wa2luID0ge3AzOiBcIlwiLCBncm93OiAoKSA9PiB7fX07XG5cbmZ1bmN0aW9uIGdyb3c8VCBleHRlbmRzIFBsYW50PihwbGFudDogVCk6IFQge1xuICAgIHBsYW50Lmdyb3coKTtcblxuICAgIHJldHVybiBwbGFudDtcbn1cblxuZ3JvdzxBcHBsZT4oYXBwbGUpO1xuY29uc3QgdG9tYXRvUmVzdWx0OiBUb21hdG8gPSAgZ3JvdzxUb21hdG8+KHRvbWF0byk7XG5ncm93PFB1bXBraW4+KHB1bXBraW4pO1xuXG5cbmludGVyZmFjZSBQb2ludDJEIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUG9pbnQzRCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB6OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGRyYXc8VD4ocG9pbnQ6IFQpOiBUIHtcbiAgICAvLyBsb2dpY1xuICAgIGNvbnN0IHRlc3Q6IFQgPSBwb2ludDtcblxuICAgIHJldHVybiB0ZXN0O1xufVxubGV0IHN0ciA9IFwiXCI7XG5cbmNvbnN0IHBvaW50OiBQb2ludDJEID0ge3g6IDEsIHk6IDJ9O1xuXG5jb25zdCByZXN1bHQgPSBkcmF3KHBvaW50KTtcblxuY29uc3QgcG9pbnQzRDogUG9pbnQzRCA9IHt4OiAxLCB5OiAyLCB6OiAzfTtcbmRyYXc8UG9pbnQzRD4ocG9pbnQzRCk7XG5cbmRyYXc8UG9pbnQzRD4oe3g6IDEsIHk6IDIsIHo6IDN9KTtcblxuaW50ZXJmYWNlIEN1c3RvbVJlc3BvbnNlPEJvZHlUeXBlPiB7XG4gICAgYm9keTogQm9keVR5cGU7XG59XG5cbmNvbnN0IGJvZHk6IEN1c3RvbVJlc3BvbnNlPHsgY29udGVudDogc3RyaW5nIH0+ID0geyBib2R5OiB7IGNvbnRlbnQ6ICcnIH0gfTtcblxuXG5mdW5jdGlvbiBnZXQ8VCBleHRlbmRzIG9iamVjdD4oKTogQ3VzdG9tUmVzcG9uc2U8VD4ge1xuICAgIHJldHVybiB7IGJvZHk6IHsgY29udGVudDogJycgfSB9IGFzIEN1c3RvbVJlc3BvbnNlPFQ+O1xufVxuXG4vLyBmdW5jdGlvbiBwb3N0PFQ+KCk6IEN1c3RvbVJlc3BvbnNlPFQ+IHtcbi8vICAgICByZXR1cm4geyBib2R5OiB7IGNvbnRlbnQ6ICcnIH0gfTtcbi8vIH1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHk8VCBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwga2V5OiBLKTogVFtLXSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xufTtcblxuY29uc3QgcG9pbnQzRDI6IFBvaW50M0QgPSB7eDogMSwgeTogMSwgejogMn07XG5cbmNvbnN0IHhWYWx1ZSA9IGdldFByb3BlcnR5KHBvaW50M0QyLCAneCcpO1xuXG5jbGFzcyBDdXN0b21DbGFzczxUPiB7XG4gICAgcHJvcGVydHk6IFQ7XG5cbiAgICBnZXRQcm9wZXJ0eShwcm9wZXJ0eTogVCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eSB8fCBwcm9wZXJ0eTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eTogVCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgfVxufVxuXG5uZXcgQ3VzdG9tQ2xhc3M8c3RyaW5nPigncHJvcGVydHlWYWx1ZScpO1xuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQW1CQSxJQUFNQSxLQUFZLEdBQUc7RUFBQ0MsRUFBRSxFQUFFLEVBQUw7RUFBU0MsSUFBSSxFQUFFLGdCQUFNLENBQUU7QUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxNQUFjLEdBQUc7RUFBQ0MsRUFBRSxFQUFFLEVBQUw7RUFBU0YsSUFBSSxFQUFFLGdCQUFNLENBQUU7QUFBdkIsQ0FBdkI7QUFDQSxJQUFNRyxPQUFnQixHQUFHO0VBQUNDLEVBQUUsRUFBRSxFQUFMO0VBQVNKLElBQUksRUFBRSxnQkFBTSxDQUFFO0FBQXZCLENBQXpCOztBQUVBLFNBQVNBLElBQVQsQ0FBK0JLLEtBQS9CLEVBQTRDO0VBQ3hDQSxLQUFLLENBQUNMLElBQU47RUFFQSxPQUFPSyxLQUFQO0FBQ0g7O0FBRURMLElBQUksQ0FBUUYsS0FBUixDQUFKO0FBQ0EsSUFBTVEsWUFBb0IsR0FBSU4sSUFBSSxDQUFTQyxNQUFULENBQWxDO0FBQ0FELElBQUksQ0FBVUcsT0FBVixDQUFKOztBQWNBLFNBQVNJLElBQVQsQ0FBaUJDLEtBQWpCLEVBQThCO0VBQzFCO0VBQ0EsSUFBTUMsSUFBTyxHQUFHRCxLQUFoQjtFQUVBLE9BQU9DLElBQVA7QUFDSDs7QUFDRCxJQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBLElBQU1GLEtBQWMsR0FBRztFQUFDRyxDQUFDLEVBQUUsQ0FBSjtFQUFPQyxDQUFDLEVBQUU7QUFBVixDQUF2QjtBQUVBLElBQU1DLE1BQU0sR0FBR04sSUFBSSxDQUFDQyxLQUFELENBQW5CO0FBRUEsSUFBTU0sT0FBZ0IsR0FBRztFQUFDSCxDQUFDLEVBQUUsQ0FBSjtFQUFPQyxDQUFDLEVBQUUsQ0FBVjtFQUFhRyxDQUFDLEVBQUU7QUFBaEIsQ0FBekI7QUFDQVIsSUFBSSxDQUFVTyxPQUFWLENBQUo7QUFFQVAsSUFBSSxDQUFVO0VBQUNJLENBQUMsRUFBRSxDQUFKO0VBQU9DLENBQUMsRUFBRSxDQUFWO0VBQWFHLENBQUMsRUFBRTtBQUFoQixDQUFWLENBQUo7QUFNQSxJQUFNQyxJQUF5QyxHQUFHO0VBQUVBLElBQUksRUFBRTtJQUFFQyxPQUFPLEVBQUU7RUFBWDtBQUFSLENBQWxEOztBQUdBLFNBQVNDLEdBQVQsR0FBb0Q7RUFDaEQsT0FBTztJQUFFRixJQUFJLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQVg7RUFBUixDQUFQO0FBQ0gsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0UsV0FBVCxDQUEwREMsR0FBMUQsRUFBa0VDLEdBQWxFLEVBQWdGO0VBQzVFLE9BQU9ELEdBQUcsQ0FBQ0MsR0FBRCxDQUFWO0FBQ0g7O0FBQUE7QUFFRCxJQUFNQyxRQUFpQixHQUFHO0VBQUNYLENBQUMsRUFBRSxDQUFKO0VBQU9DLENBQUMsRUFBRSxDQUFWO0VBQWFHLENBQUMsRUFBRTtBQUFoQixDQUExQjtBQUVBLElBQU1RLE1BQU0sR0FBR0osV0FBVyxDQUFDRyxRQUFELEVBQVcsR0FBWCxDQUExQjs7SUFFTUUsVztFQU9GLHFCQUFZQyxRQUFaLEVBQXlCO0lBQUE7O0lBQUE7O0lBQ3JCLEtBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0g7Ozs7V0FORCxxQkFBWUEsUUFBWixFQUE0QjtNQUN4QixPQUFPLEtBQUtBLFFBQUwsSUFBaUJBLFFBQXhCO0lBQ0g7Ozs7OztBQU9MLElBQUlELFdBQUosQ0FBd0IsZUFBeEIifQ==