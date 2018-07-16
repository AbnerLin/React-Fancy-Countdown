import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';
import Effect from '../../effect';

import './index.scss';

const flipCountdown = (WrappedComponent) => {

  class FlipCountdown extends React.Component {

    /**
      =====Props=====
      Days: Set true if hours are more than 99; If false this component only support less than 100 hours and doesn't show Days and Weeks.
      Weeks: Set true if days are more than 99; If false this component only support less than 100 days and doesn't show Weeks.
      ================
    */

    constructor(props) {
      super(props);

      this.state = {
        due: false
      };

      this.updateTime = this.updateTime.bind(this);
      this.flip = this.flip.bind(this);
    }

    updateTime(flatSeconds) {

      let checkTime = (wrap, val) => {
        let tensDom = wrap.querySelector('.tens');
        let unitsDom = wrap.querySelector('.units');

        let tens = parseInt(val / 10);
        let units = val % 10;

        if (tens != tensDom.querySelector('.top').innerHTML) this.flip(tensDom, tens);
        if (units != unitsDom.querySelector('.top').innerHTML) this.flip(unitsDom, units);
      }

      let _thisDoc = ReactDOM.findDOMNode(this);
      let timeObjs = DateTimeUtil.getTimeObjs(flatSeconds, this.props.days, this.props.weeks);

      /** seconds */
      checkTime(_thisDoc.querySelector('.seconds'), timeObjs.seconds);

      /** minutes */
      checkTime(_thisDoc.querySelector('.minutes'), timeObjs.minutes);

      /** hours */
      checkTime(_thisDoc.querySelector('.hours'), timeObjs.hours);

      /** days */
      if (this.props.days) {
        checkTime(_thisDoc.querySelector('.days'), timeObjs.days);

        /**  weeks */
        if (this.props.weeks) {
          checkTime(_thisDoc.querySelector('.weeks'), timeObjs.weeks);
        }
      }
    }

    flip(element, value) {
      let top = element.querySelector('.top');
      let topBack = element.querySelector('.top-back');
      let bottom = element.querySelector('.bottom');
      let bottomBack = element.querySelector('.bottom-back');

      topBack.innerHTML = value;
      bottom.innerHTML = value;

      Effect.rotateX(top, 0, 90, 150, () => {
        Effect.rotateX(bottom, -90, 0, 80, () => {
          top.innerHTML = value;
          bottomBack.innerHTML = value;
          Effect.setRotateX(top, 0);
          Effect.setRotateX(bottom, -90);
        });
      });
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }>
          <div className="flipCountdown">
              { this.props.weeks && this.props.days ? (
                <div className="flip-block-time weeks">
                  <span className="title">WEEKS</span>
                  <div className="stage tens">
                    <span className="top">7</span>
                    <span className="top-back">7</span>
                    <span className="bottom">7</span>
                    <span className="bottom-back">7</span>
                  </div>
                  <div className="stage units">
                    <span className="top">7</span>
                    <span className="top-back">7</span>
                    <span className="bottom">7</span>
                    <span className="bottom-back">7</span>
                  </div>
                </div>
              ) : null }

              { this.props.days ? (
                <div className="flip-block-time days">
                  <span className="title">DAYS</span>
                  <div className="stage tens">
                    <span className="top">7</span>
                    <span className="top-back">7</span>
                    <span className="bottom">7</span>
                    <span className="bottom-back">7</span>
                  </div>
                  <div className="stage units">
                    <span className="top">7</span>
                    <span className="top-back">7</span>
                    <span className="bottom">7</span>
                    <span className="bottom-back">7</span>
                  </div>
                </div>
              ) : null }

              <div className="flip-block-time hours">
                <span className="title">HOURS</span>
                <div className="stage tens">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
                <div className="stage units">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
              </div>

              <div className="flip-block-time minutes">
                <span className="title">MINUTES</span>
                <div className="stage tens">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
                <div className="stage units">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
              </div>

              <div className="flip-block-time seconds">
                <span className="title">SECONDS</span>
                <div className="stage tens">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
                <div className="stage units">
                  <span className="top">7</span>
                  <span className="top-back">7</span>
                  <span className="bottom">7</span>
                  <span className="bottom-back">7</span>
                </div>
              </div>

          </div>
        </WrappedComponent>
      );
    }

  }

  FlipCountdown.propTypes = {
    days: PropTypes.bool,
    weeks: PropTypes.bool
  };

  FlipCountdown.defaultProps = {
    days: true,
    weeks: true
  };

  return FlipCountdown;
}

export default flipCountdown;

