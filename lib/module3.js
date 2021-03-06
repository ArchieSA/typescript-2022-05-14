"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUpperCase = toUpperCase;

// Mapped types
function toUpperCase(text) {
  if (typeof text === 'number') {
    return text.toString().toUpperCase();
  }

  return text.toUpperCase();
}

var answer = {
  '0': 123,
  'fg': 123,
  1: 123,
  anb: 123
};
// 'bold' | 'bolder' .... ;
var fontWeightMap = {
  'bold': 500,
  // 'bolder': '600',
  'normal': '400' // 'lighter': 300,

}; // const font: FontSettings = { weight: 'bold' };
//
//
// console.log(fontWeightMap[font.weight]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0b1VwcGVyQ2FzZSIsInRleHQiLCJ0b1N0cmluZyIsImFuc3dlciIsImFuYiIsImZvbnRXZWlnaHRNYXAiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlMy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYXBwZWQgdHlwZXNcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVXBwZXJDYXNlKHRleHQ6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdGV4dC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKTtcbn1cblxuXG5pbnRlcmZhY2UgRG9nIHtcbiAgICBiYXJrOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2F0IHtcbiAgICBtZW93OiAoKSA9PiB2b2lkO1xufVxuXG50eXBlIENhdE9yRG9nID0gRG9nIHwgQ2F0O1xuXG50eXBlIFQxID0ge307XG50eXBlIFQyID0ge307XG50eXBlIFQzID0ge307XG50eXBlIFQ0ID0ge307XG5cblxudHlwZSBDdXN0b21UeXBlID0gKFQxIHwgVDIpICYgVDM7XG5cblxuaW50ZXJmYWNlIEFuc3dlciB7XG4gICAgW25hbWU6IHN0cmluZ106IG51bWJlcjtcbn1cblxuY29uc3QgYW5zd2VyOiBBbnN3ZXIgPSB7XG4gICAgJzAnOiAxMjMsXG4gICAgJ2ZnJzogMTIzLFxuICAgIDE6IDEyMyxcbiAgICBhbmI6IDEyMyxcbn1cblxudHlwZSBGb250V2VpZ2h0TWFwID0ge1xuICAgICdib2xkJzogbnVtYmVyLFxuICAgICdib2xkZXInOiBzdHJpbmcsXG4gICAgJ25vcm1hbCc6IHN0cmluZyxcbiAgICAnbGlnaHRlcic6IG51bWJlcixcbn1cbi8vXG4vLyBpbnRlcmZhY2UgRm9udFNldHRpbmdzIHtcbi8vICAgICB3ZWlnaHQ6IEZvbnRXZWlnaHQ7XG4vLyB9XG5cbnR5cGUgQm9sZEZvbnRXZWlnaHQgPSBGb250V2VpZ2h0TWFwWydib2xkJ107XG5cbnR5cGUgQm9sZFR5cGUgPSBGb250V2VpZ2h0TWFwWydib2xkJ107XG50eXBlIEZvbnRXZWlnaHRzID0ga2V5b2YgRm9udFdlaWdodE1hcC8vICdib2xkJyB8ICdib2xkZXInIC4uLi4gO1xuXG5jb25zdCBmb250V2VpZ2h0TWFwOiB7XG4gICAgW2Z3IGluIGtleW9mIEZvbnRXZWlnaHRNYXBdPzogRm9udFdlaWdodE1hcFtmd107XG59ID0ge1xuICAgICdib2xkJzogNTAwLFxuICAgIC8vICdib2xkZXInOiAnNjAwJyxcbiAgICAnbm9ybWFsJzogJzQwMCcsXG4gICAgLy8gJ2xpZ2h0ZXInOiAzMDAsXG59O1xuXG5cblxuLy8gY29uc3QgZm9udDogRm9udFNldHRpbmdzID0geyB3ZWlnaHQ6ICdib2xkJyB9O1xuLy9cbi8vXG4vLyBjb25zb2xlLmxvZyhmb250V2VpZ2h0TWFwW2ZvbnQud2VpZ2h0XSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQW9EO0VBQ3ZELElBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtJQUMxQixPQUFPQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0JGLFdBQWhCLEVBQVA7RUFDSDs7RUFFRCxPQUFPQyxJQUFJLENBQUNELFdBQUwsRUFBUDtBQUNIOztBQTBCRCxJQUFNRyxNQUFjLEdBQUc7RUFDbkIsS0FBSyxHQURjO0VBRW5CLE1BQU0sR0FGYTtFQUduQixHQUFHLEdBSGdCO0VBSW5CQyxHQUFHLEVBQUU7QUFKYyxDQUF2QjtBQXFCc0M7QUFFdEMsSUFBTUMsYUFFTCxHQUFHO0VBQ0EsUUFBUSxHQURSO0VBRUE7RUFDQSxVQUFVLEtBSFYsQ0FJQTs7QUFKQSxDQUZKLEMsQ0FXQTtBQUNBO0FBQ0E7QUFDQSJ9