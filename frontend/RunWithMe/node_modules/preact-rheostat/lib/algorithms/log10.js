Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  getPosition: function () {
    function getPosition(value, min, max) {
      var minv = Math.log(min);
      var maxv = Math.log(max);

      var scale = (maxv - minv) / 100;

      return (Math.log(value) - minv) / scale;
    }

    return getPosition;
  }(),
  getValue: function () {
    function getValue(positionPercent, min, max) {
      var minv = Math.log(min);
      var maxv = Math.log(max);

      if (positionPercent === 0) {
        return min;
      } else if (positionPercent === 100) {
        return max;
      }

      // calculate adjustment factor
      var scale = (maxv - minv) / 100;

      return Math.floor(Math.exp(minv + scale * positionPercent)) || 0;
    }

    return getValue;
  }()
};