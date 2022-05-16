"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.example = example;
exports.getUsersOnlineMessage1 = getUsersOnlineMessage1;
exports.getUsersOnlineMessage2 = getUsersOnlineMessage2;
exports.isFish = isFish;
exports.log = log;
exports.padLeft = padLeft;

// TypeGuards
// typeof
// string
// number
// bigint
// boolean
// symbol
// undefined
// object
// function
function padLeft(padding, input) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }

  return padding + input;
}

padLeft('   ', 'str'); // '   str'

padLeft(3, 'str'); // '   str'
// проверку на истинность

function getUsersOnlineMessage1(numUsersOnline) {
  if (numUsersOnline) {
    return numUsersOnline === null || numUsersOnline === void 0 ? void 0 : numUsersOnline.toFixed();
  }

  return 0;
}

function getUsersOnlineMessage2(numUsersOnline) {
  return (numUsersOnline === null || numUsersOnline === void 0 ? void 0 : numUsersOnline.toFixed()) || 0;
} // проверка на равенство


function example(x, y) {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
} // instanceof


function log(value) {
  if (value instanceof Date) {
    console.log(value.toUTCString());
  } else {
    console.log(value.toLowerCase());
  }
} // type predicates


function isFish(pet) {
  return pet.swim !== undefined && typeof pet.swim === 'function';
}

function isBird(pet) {
  return pet.fly !== undefined && typeof pet.fly === 'function';
}

function move(pet) {
  if (isFish(pet)) {
    pet.swim();
  }

  if (isBird(pet)) {
    pet.fly();
  }
} // исключающие объединения


var PetKind;

(function (PetKind) {
  PetKind["Dog"] = "dog";
  PetKind["Cat"] = "cat,";
})(PetKind || (PetKind = {}));

function makeNoise(pet) {
  if (pet.kind === PetKind.Dog) {
    pet.bark();
  }

  if (pet.kind === PetKind.Cat) {
    pet.meow();
  }
}

var MovieTypes;

(function (MovieTypes) {
  MovieTypes["Film"] = "film";
  MovieTypes["TvSeries"] = "tvSeries";
  MovieTypes["TvShow"] = "tvShow";
})(MovieTypes || (MovieTypes = {}));

function watch(movie) {
  if (movie.type === 'Film') {
    console.log(movie.duration);
  }

  if (movie.type === 'TvSeries') {
    console.log(movie.season);
  }
}

var MovieTypesMap = {
  Film: 123,
  TvSeries: 456
};
var testPick = {
  type: 'Film',
  duration: 123
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwYWRMZWZ0IiwicGFkZGluZyIsImlucHV0IiwiQXJyYXkiLCJqb2luIiwiZ2V0VXNlcnNPbmxpbmVNZXNzYWdlMSIsIm51bVVzZXJzT25saW5lIiwidG9GaXhlZCIsImdldFVzZXJzT25saW5lTWVzc2FnZTIiLCJleGFtcGxlIiwieCIsInkiLCJ0b1VwcGVyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsInRvTG93ZXJDYXNlIiwiaXNGaXNoIiwicGV0Iiwic3dpbSIsInVuZGVmaW5lZCIsImlzQmlyZCIsImZseSIsIm1vdmUiLCJQZXRLaW5kIiwibWFrZU5vaXNlIiwia2luZCIsIkRvZyIsImJhcmsiLCJDYXQiLCJtZW93IiwiTW92aWVUeXBlcyIsIndhdGNoIiwibW92aWUiLCJ0eXBlIiwiZHVyYXRpb24iLCJzZWFzb24iLCJNb3ZpZVR5cGVzTWFwIiwiRmlsbSIsIlR2U2VyaWVzIiwidGVzdFBpY2siXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlNS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUeXBlR3VhcmRzXG5cbi8vIHR5cGVvZlxuXG4vLyBzdHJpbmdcbi8vIG51bWJlclxuLy8gYmlnaW50XG4vLyBib29sZWFuXG4vLyBzeW1ib2xcbi8vIHVuZGVmaW5lZFxuLy8gb2JqZWN0XG4vLyBmdW5jdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gcGFkTGVmdChwYWRkaW5nOiBudW1iZXIgfCBzdHJpbmcsIGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShwYWRkaW5nICsgMSkuam9pbignICcpICsgaW5wdXRcbiAgICB9XG5cbiAgICByZXR1cm4gcGFkZGluZyArIGlucHV0O1xufVxuXG5cbnBhZExlZnQoJyAgICcsICdzdHInKTsgLy8gJyAgIHN0cidcbnBhZExlZnQoMywgJ3N0cicpOyAvLyAnICAgc3RyJ1xuXG5cbi8vINC/0YDQvtCy0LXRgNC60YMg0L3QsCDQuNGB0YLQuNC90L3QvtGB0YLRjFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnNPbmxpbmVNZXNzYWdlMShudW1Vc2Vyc09ubGluZT86IG51bWJlcikge1xuICAgIGlmIChudW1Vc2Vyc09ubGluZSkge1xuICAgICAgICByZXR1cm4gbnVtVXNlcnNPbmxpbmU/LnRvRml4ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzT25saW5lTWVzc2FnZTIobnVtVXNlcnNPbmxpbmU/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtVXNlcnNPbmxpbmU/LnRvRml4ZWQoKSB8fCAwO1xufVxuXG4vLyDQv9GA0L7QstC10YDQutCwINC90LAg0YDQsNCy0LXQvdGB0YLQstC+XG5cbmV4cG9ydCBmdW5jdGlvbiBleGFtcGxlKHg6IHN0cmluZyB8IG51bWJlciwgeTogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgIHgudG9VcHBlckNhc2UoKTtcbiAgICAgICAgeS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgICBjb25zb2xlLmxvZyh5KTtcbiAgICB9XG59XG5cbi8vIGluc3RhbmNlb2ZcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyh2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUudG9VVENTdHJpbmcoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxufVxuXG4vLyB0eXBlIHByZWRpY2F0ZXNcbmV4cG9ydCBpbnRlcmZhY2UgRmlzaCB7XG4gICAgc3dpbTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaXJkIHtcbiAgICBmbHk6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zpc2gocGV0OiBGaXNoIHwgQmlyZCk6IHBldCBpcyBGaXNoIHtcbiAgICByZXR1cm4gKHBldCBhcyBGaXNoKS5zd2ltICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIChwZXQgYXMgRmlzaCkuc3dpbSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNCaXJkKHBldDogRmlzaCB8IEJpcmQpOiBwZXQgaXMgQmlyZCB7XG4gICAgcmV0dXJuIChwZXQgYXMgQmlyZCkuZmx5ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIChwZXQgYXMgQmlyZCkuZmx5ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxuZnVuY3Rpb24gbW92ZShwZXQ6IEZpc2ggfCBCaXJkKSB7XG4gICAgaWYgKGlzRmlzaChwZXQpKSB7XG4gICAgICAgIHBldC5zd2ltKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzQmlyZChwZXQpKSB7XG4gICAgICAgIHBldC5mbHkoKTtcbiAgICB9XG59XG5cbi8vINC40YHQutC70Y7Rh9Cw0Y7RidC40LUg0L7QsdGK0LXQtNC40L3QtdC90LjRj1xuXG5jb25zdCBlbnVtIFBldEtpbmQge1xuICAgIERvZyA9ICdkb2cnLFxuICAgIENhdCA9ICdjYXQsJ1xufVxuXG5pbnRlcmZhY2UgRG9nIHtcbiAgICBraW5kOiBQZXRLaW5kLkRvZztcbiAgICBiYXJrOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2F0IHtcbiAgICBraW5kOiBQZXRLaW5kLkNhdDtcbiAgICBtZW93OiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBtYWtlTm9pc2UocGV0OiBEb2cgfCBDYXQpIHtcbiAgICBpZiAocGV0LmtpbmQgPT09IFBldEtpbmQuRG9nKSB7XG4gICAgICAgIHBldC5iYXJrKCk7XG4gICAgfVxuXG4gICAgaWYgKHBldC5raW5kID09PSBQZXRLaW5kLkNhdCkge1xuICAgICAgICBwZXQubWVvdygpO1xuICAgIH1cbn1cblxuZW51bSBNb3ZpZVR5cGVzIHtcbiAgICBGaWxtID0gJ2ZpbG0nLFxuICAgIFR2U2VyaWVzID0gJ3R2U2VyaWVzJyxcbiAgICBUdlNob3cgPSAndHZTaG93J1xufVxuXG5pbnRlcmZhY2UgRmlsbSB7XG4gICAgcmVhZG9ubHkgdHlwZTogJ0ZpbG0nO1xuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xuICAgIGFjdG9yczogc3RyaW5nW107XG4gICAgZGlyZWN0b3JzOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFR2U2VyaWVzIHtcbiAgICB0eXBlOiAnVHZTZXJpZXMnO1xuICAgIHNlYXNvbjogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiB3YXRjaChtb3ZpZTogRmlsbSB8IFR2U2VyaWVzKSB7XG4gICAgaWYgKG1vdmllLnR5cGUgPT09ICdGaWxtJykge1xuICAgICAgICBjb25zb2xlLmxvZyhtb3ZpZS5kdXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChtb3ZpZS50eXBlID09PSAnVHZTZXJpZXMnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vdmllLnNlYXNvbik7XG4gICAgfVxufVxuXG50eXBlIE1vdmllVHlwZSA9ICdGaWxtJyB8ICdUdlNlcmllcyc7XG5cbnR5cGUgVGVzdFBhcnRpYWwgPSBQYXJ0aWFsPFR2U2VyaWVzPjtcbnR5cGUgVGVzdFJlcXVpcmVkID0gUmVxdWlyZWQ8VGVzdFBhcnRpYWw+O1xuY29uc3QgTW92aWVUeXBlc01hcDogUmVjb3JkPE1vdmllVHlwZSwgbnVtYmVyPiA9IHtcbiAgICBGaWxtOiAxMjMsXG4gICAgVHZTZXJpZXM6IDQ1Nixcbn1cblxudHlwZSBUZXN0UGljayA9IFJlYWRvbmx5PFBpY2s8RmlsbSwgJ3R5cGUnPj4gJiBSZXF1aXJlZDxQaWNrPEZpbG0sICdkdXJhdGlvbic+PjtcblxuY29uc3QgdGVzdFBpY2s6IFRlc3RQaWNrID0geyB0eXBlOiAnRmlsbScsIGR1cmF0aW9uOiAxMjN9XG5cblxudHlwZSB0ZXN0T21pdCA9IE9taXQ8RmlsbSwg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