
class Effect {

  static doAnimation(element, from, to, period, action, callback) {
    var direct = from > to ? -1 : 1;
    var value = from;
    var interval = setInterval(animation, 3);

    function animation() {
      if (Math.abs(value - from) >= Math.abs(from - to)) {
        clearInterval(interval);
        if (callback)
          callback();
      } else {
        value += Math.abs(from - to) / period * 3;

        if ((direct < 0 && value < to) || (direct > 0 && value > to)) {
          value = to * direct;
        }

        action(element, value * direct);
      }
    }
  }

  static resetRotateX(element) {
    element.style.webkitTransform = 'rotateX(0)';
  }

  static setRotateX(element, deg) {
    element.style.webkitTransform = 'rotateX(' + deg + 'deg)';
  }

  static rotateX(element, from, to, period, callback) {
    Effect.doAnimation(element, from, to, period, (element, value) => {
      Effect.setRotateX(element, value);
    }, callback);

  }

  static setPositionB(element, bottomValue) {
    element.style.bottom = bottomValue + 'px';
  }

  static slideDown(element, from, to, period, callback) {
    Effect.doAnimation(element, from, to, period, (element, value) => {
      Effect.setPositionB(element, value);
    }, callback);
  }
}

export default Effect;
