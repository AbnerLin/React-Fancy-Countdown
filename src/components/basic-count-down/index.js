import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

const basicCountDown = (WrappedComponent) => {

  class BasicCountDown extends React.Component {

    /**

    =====Format=====
    years: Y or y
    months: M
    weeks: W or w
    days: D or d
    hours: H or h
    minutes: m
    seconds: s
    ms: S
    Escape token characters within the template string using square brackets.
    ================

    TODO:
      1. numbers replace.

    */

    constructor(props) {
      super(props);

      this.state = {
        time: "",
        due: false
      };

      this.updateTime = this.updateTime.bind(this);
      this._callback = this._callback.bind(this);
    }

    updateTime(seconds) {
      if(seconds) {
        if (this.props.format) {
          seconds = DateTimeUtil.format(seconds, this.props.format);
        }

        this.setState({
          time: seconds
        });

      } else {
        console.log('error'); // TODO
      }
    }

    _callback() {
      this.props.callback();
      this.setState({
        due: true
      });
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }
          callback={ this._callback }>
          <div>
            { !this.state.due ? this.state.time : this.props.dueElement }
          </div>
        </WrappedComponent>
      );
    }

  }

  BasicCountDown.propTypes = {
    format: PropTypes.string,
    dueElement: PropTypes.element
  };

  BasicCountDown.defaultProps = {
    dueElement: (<div> Time is up. </div>),
    callback: () => {
      console.log('Time is up.');
    }
  };

  return BasicCountDown;
}

export default basicCountDown;
