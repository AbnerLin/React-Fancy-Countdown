import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

const basicCountdown = (WrappedComponent) => {

  class BasicCountdown extends React.Component {

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
    */

    constructor(props) {
      super(props);

      this.state = {
        time: "",
        due: false
      };

      this.updateTime = this.updateTime.bind(this);
    }

    updateTime(seconds) {
      if (seconds) {
        if (this.props.format) {
          seconds = DateTimeUtil.format(seconds, this.props.format);
        }
      } else {
        seconds = 'Invalid date!';
      }

      this.setState({
        time: seconds
      });
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }>
          <div>
            { !this.state.due ? this.state.time : this.props.dueElement }
          </div>
        </WrappedComponent>
      );
    }

  }

  BasicCountdown.propTypes = {
    format: PropTypes.string
  };

  return BasicCountdown;
}

export default basicCountdown;
