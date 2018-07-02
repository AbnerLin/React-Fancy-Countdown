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
      this._callback = this._callback.bind(this);
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

    updateTime(seconds) {

      // console.log(DateTimeUtil.getSecondsDef());
      // console.log(parseInt(seconds / DateTimeUtil.getSecondsDef().DAY));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().DAY / DateTimeUtil.getSecondsDef().HOUR));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().HOUR / DateTimeUtil.getSecondsDef().MINUTE));
      // console.log(parseInt(seconds % DateTimeUtil.getSecondsDef().MINUTE));
      // console.log(DateTimeUtil.format(seconds, 'd hh mm ss'));

      this.setState({
        time: seconds
      });
    }

    _callback() {

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

              <span className="title">HOURS</span>
              <div className="stage hours hours-1">
                <span className="top">5</span>
                <span className="top-back">
                  4
                </span>
                <span className="bottom">4</span>
                <span className="bottom-back">
                  5
                </span>
              </div>

              <div className="stage hours hours-2">
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

