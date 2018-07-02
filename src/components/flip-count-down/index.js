import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';
import Effect from '../../effect';

import './index.scss';

const flipCountDown = (WrappedComponent) => {

  class FlipCountDown extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        due: false,
        time: '' // !!?
      };

      this.updateTime = this.updateTime.bind(this);
      // this._callback = this._callback.bind(this);
      this.flip = this.flip.bind(this);
    }

    componentDidMount() {
      var dom = document.getElementsByClassName('top')[0];
      Effect.rotateX(dom, 0, 90, 100, () => {
        var bottomDom = document.getElementsByClassName('bottom')[0];
        Effect.rotateX(bottomDom, -90, 0, 100, null);
      });

       var dom = document.getElementsByClassName('top')[1];
       Effect.rotateX(dom, 0, 90, 100, () => {
         var bottomDom = document.getElementsByClassName('bottom')[1];
         Effect.rotateX(bottomDom, -90, 0, 100, null);
       });
    }

    updateTime(flatSeconds) {

      // console.log(DateTimeUtil.getSecondsDef());
      // console.log(parseInt(seconds / DateTimeUtil.getSecondsDef().DAY));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().DAY / DateTimeUtil.getSecondsDef().HOUR));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().HOUR / DateTimeUtil.getSecondsDef().MINUTE));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().MINUTE));
      console.log(DateTimeUtil.format(flatSeconds, 'd hh mm ss'));

      /** seconds */
      let seconds = parseInt(flatSeconds % DateTimeUtil.getSecondsDef().MINUTE);
      var seconds1 = document.querySelector('.seconds-1');
      var seconds2 = document.querySelector('.seconds-2');

      // console.log(seconds);
      // console.log(seconds1);
      // console.log(seconds2);

      if (seconds / 10 != seconds1.querySelector('.top').innerHTML) this.flip(seconds1, seconds / 10);
      if (seconds % 10 != seconds2.querySelector('.top').innerHTML) this.flip(seconds2, seconds % 10);


      this.setState({
        time: flatSeconds
      });
    }

    flip(element, value) {
      console.log(element.querySelector('.top').innerHTML);



    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }
          _callback={this._callback}>
          <div>
            { !this.state.due ? this.state.time : this.props.dueElement }
            <div className="countdown">

              <div className="block-time">
                <span className="title">DAYS</span>
                <div className="stage days days-1">
                  <span className="top">5</span>
                  <span className="top-back">4</span>
                  <span className="bottom">4</span>
                  <span className="bottom-back">5</span>
                </div>
                <div className="stage days days-2">
                  <span className="top">2</span>
                  <span className="top-back">1</span>
                  <span className="bottom">1</span>
                  <span className="bottom-bck">2</span>
                </div>
              </div>

              <div className="block-time">
                <span className="title">HOURS</span>
                <div className="stage hours hours-1">
                  <span className="top">4</span>
                  <span className="top-back">3</span>
                  <span className="bottom">3</span>
                  <span className="bottom-back">4</span>
                </div>
                <div className="stage hours hours-2">
                  <span className="top">4</span>
                  <span className="top-back">3</span>
                  <span className="bottom">3</span>
                  <span className="bottom-bck">4</span>
                </div>
              </div>

              <div className="block-time">
                <span className="title">MINUTES</span>
                <div className="stage minutes minutes-1">
                  <span className="top">3</span>
                  <span className="top-back">2</span>
                  <span className="bottom">2</span>
                  <span className="bottom-back">3</span>
                </div>
                <div className="stage minutes minutes-2">
                  <span className="top">3</span>
                  <span className="top-back">2</span>
                  <span className="bottom">2</span>
                  <span className="bottom-bck">3</span>
                </div>
              </div>

              <div className="block-time">
                <span className="title">SECONDS</span>
                <div className="stage seconds seconds-1">
                  <span className="top">5</span>
                  <span className="top-back">4</span>
                  <span className="bottom">4</span>
                  <span className="bottom-back">5</span>
                </div>
                <div className="stage seconds seconds-2">
                  <span className="top">6</span>
                  <span className="top-back">5</span>
                  <span className="bottom">5</span>
                  <span className="bottom-bck">6</span>
                </div>
              </div>

            </div>
          </div>
        </WrappedComponent>
      );
    }

  }

  FlipCountDown.propTypes = {
    dueElement: PropTypes.element,
    callback: PropTypes.func
  }

  return FlipCountDown;
}

export default flipCountDown;

