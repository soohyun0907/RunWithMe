Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  getPosition: function () {
    function getPosition(x, min, max) {
      return Math.pow(max / (max - min), 0.5) * Math.pow((x - min) / max, 0.5) * 100;
    }

    return getPosition;
  }(),
  getValue: function () {
    function getValue(x, min, max) {
      return Math.floor(Math.pow(x / 100, 2) * (max - min)) + min;
    }

    return getValue;
  }()
};