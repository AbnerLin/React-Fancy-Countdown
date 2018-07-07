import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';
import Effect from '../../effect';

import './index.scss';

const slideCountdown = (WrappedComponent) => {

  class SlideCountdown extends React.Component {

    /**
      =====Props=====
      Days: Set true if hours are more than 99; If false this component only support less than 100 hours and doesn't show Hours and Weeks.
      Weeks: Set true if days are more than 99; If false this component only support less than 100 days and doesn't show Weeks.
      ================
    */

    constructor(props) {
      super(props);

      this.state = {
        due: false,
        initDone: false
      };

      this.updateTime = this.updateTime.bind(this);
      this.slide = this.slide.bind(this);
    }

    updateTime(flatSeconds) {

      let checkTime = (wrap, val) => {
        let tensDom = wrap.querySelector('.tens');
        let onesDom = wrap.querySelector('.ones');

        let tens = parseInt(val / 10);
        let ones = val % 10;

        if (tens != tensDom.querySelector('.bottom').innerHTML) this.slide(tensDom, tens);
        if (ones != onesDom.querySelector('.bottom').innerHTML) this.slide(onesDom, ones);
      };

      let _thisDoc = ReactDOM.findDOMNode(this);
      let timeObjs = DateTimeUtil.getTimeObjs(flatSeconds, this.props.days, this.props.weeks);

      if (this.state.initDone) {
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
    }

    componentDidMount() {
      let secondsInterval = this.props.deadline ? DateTimeUtil.getInterval(DateTimeUtil.now(), this.props.deadline) : undefined;
      let timeObjs = DateTimeUtil.getTimeObjs(secondsInterval, this.props.days, this.props.weeks);

      var getElement = (dom, ...className) => {
        let target = dom;
        for (var index in className) {
          target = target.querySelector('.' + className[index]);
        }
        return target;
      }

      let _thisDoc = ReactDOM.findDOMNode(this);
      let units = ['seconds', 'minutes', 'hours', 'days', 'weeks'];
      let digits = ['tens', 'ones'];
      let doms = ['top', 'bottom'];


      for(let index in units) {
        var unit = units[index];

        for(let index in digits) {
          var digit = digits[index];

          for(let index in doms) {
            var dom = doms[index];

            try {
              let value = digit === 'tens' ? parseInt(timeObjs[unit] / 10) : parseInt(timeObjs[unit] % 10);
              getElement(_thisDoc, unit, digit, dom).innerHTML = value;
            } catch(e) {
              // pass
            }
          }
        }
      }

      this.setState({
        initDone: true
      });
    }

    slide(element, value) {
      let mask = element.querySelector('.mask');
      let top = element.querySelector('.top');
      let bottom = element.querySelector('.bottom');

      top.innerHTML = value;

      Effect.slideDown(mask, 0, -40, 650, () => {
        bottom.innerHTML = value;
        Effect.setPositionB(mask, 0);
      });
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }>
          <div className="slideCountdown">
            { this.props.weeks && this.props.days ? (
            <div className="slide-block-time weeks">
              <div className="wrap-stage">
                <div className="stage tens">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">WEEKS</div>
            </div> ) : null }

            { this.props.days ? (
            <div className="slide-block-time days">
              <div className="wrap-stage">
                <div className="stage tens">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">DAYS</div>
            </div> ) : null }

            <div className="slide-block-time hours">
              <div className="wrap-stage">
                <div className="stage tens">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">HOURS</div>
            </div>

            <div className="slide-block-time minutes">
              <div className="wrap-stage">
                <div className="stage tens">
                  <div className="mask">
                    <div className="top">6</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">6</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">MINUTES</div>
            </div>

            <div className="slide-block-time seconds">
              <div className="wrap-stage">
                <div className="stage tens">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">2</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">6</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">SECONDS</div>
            </div>
          </div>
        </WrappedComponent>
      );
    }
  }

  SlideCountdown.propTypes = {
    days: PropTypes.bool,
    weeks: PropTypes.bool
  };

  SlideCountdown.defaultProps = {
    days: true,
    weeks: true
  };

  return SlideCountdown;
}

export default slideCountdown;

