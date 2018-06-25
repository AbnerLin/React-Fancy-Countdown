import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

const basicCountDown = (WrappedComponent) => {

  return class extends React.Component {

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
    ================

    TODO:
      1. CSS
      2. numbers replace.

    */

    constructor(props) {
      super(props);

      this.state = {
        time: DateTimeUtil.format(
              DateTimeUtil.getInterval(DateTimeUtil.now(), DateTimeUtil.toDate(this.props.deadline)),
              this.props.format)
      };

      this.updateTime = this.updateTime.bind(this);
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

    render() {
      return (
        <WrappedComponent
          updateTime={ this.updateTime }
          { ...this.props }>
          <div>
            { this.state.time }
          </div>
        </WrappedComponent>
      );
    }

  };
}

basicCountDown.propTypes = {
  format: PropTypes.string
};

export default basicCountDown;
