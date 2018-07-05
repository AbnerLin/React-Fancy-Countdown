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
      Days: Set true if hours are more than 99; If false this component only support less than 100 hours and doesn't show Hours and Weeks.
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

      /** seconds */
      let seconds = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().MINUTE);
      checkTime(_thisDoc.querySelector('.seconds'), seconds);

      /** minutes */
      let minutes = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().HOUR / DateTimeUtil.getSecondsDef().MINUTE);
      checkTime(_thisDoc.querySelector('.minutes'), minutes);


      /** hours */
      let hours = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().DAY / DateTimeUtil.getSecondsDef().HOUR);
      if (!this.props.days) {
        hours = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().HOUR % 100);
      }
      checkTime(_thisDoc.querySelector('.hours'), hours);

      /** days */
      if (this.props.days) {
        let days = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().WEEK / DateTimeUtil.getSecondsDef().DAY);
        if (!this.props.weeks) {
          days = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().DAY % 100);
        }
        checkTime(_thisDoc.querySelector('.days'), days);

        /**  weeks */
        if (this.props.weeks) {
          let weeks = parseInt(flatSeconds / DateTimeUtil.getSecondsDef().WEEK);
          checkTime(_thisDoc.querySelector('.weeks'), weeks);
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
        Effect.rotateX(bottom, -90, 0, 100, () => {
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
                <div className="block-time weeks">
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
                <div className="block-time days">
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

              <div className="block-time hours">
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

              <div className="block-time minutes">
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

              <div className="block-time seconds">
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

