import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

class Countdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      deadline: DateTimeUtil.isValid(this.props.deadline)
    };

    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
    this.stop = this.stop.bind(this);
    this.start();
    this.update();
  }

  start() {
    this.timer = setInterval(() => {
      this.update();
    }, this.props.interval || 1000);
  }

  update() {
    let secondsInterval = this.state.deadline ? DateTimeUtil.getInterval(DateTimeUtil.now(), this.state.deadline) : undefined;

    if(secondsInterval <= 0) {
      this.stop();
      this.props.callback();
    } else {
      this.props.updateTime(secondsInterval);
    }
  }

  stop() {
    clearInterval(this.timer);
  }

	render() {
		return (
      <div>
        { this.props.children }
        =======<br />
        { this.state.deadline.format() }
      </div>
    );
	}

}

Countdown.propTypes = {
	deadline: PropTypes.string.isRequired,
  updateTime: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  interval: PropTypes.number
};

export default Countdown;
