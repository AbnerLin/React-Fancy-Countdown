
class Effect {

  static rotateX() {

  }

  static resetRotateX(element) {
    element.style.webkitTransform = 'rotateX(0)';
  }

  static setRotateX(element, deg) {
    element.style.webkitTransform = 'rotateX(' + deg + 'deg)';
  }

  static rotateX(element, from, to, period, callback) {
    var oriDeg = from;

    var interval = setInterval(animation, 3);

    function animation() {
      if (oriDeg >= to) {
        clearInterval(interval);
        if (callback)
          callback();
      } else {
        oriDeg += Math.abs(from - to) / period * 3;

        if(oriDeg > to)
          oriDeg = to;

        Effect.setRotateX(element, oriDeg);
      }
    }
  }
}

export default Effect;
