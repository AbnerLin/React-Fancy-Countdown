import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

class Countdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      deadline: DateTimeUtil.isValid(this.props.deadline)
    };


    // let now = moment();
    // let secondsInterval = DateTimeUtil.getInterval(now, this.state.deadline);

    // console.log(secondsInterval);
    // console.log(moment.duration(secondsInterval, "seconds").format("Y[year(s)] M[months] D[days] H:m:s")); // set interval format.

    this.start = this.start.bind(this);
    this.start();
  }

  start() {
    setInterval(() => {
      let secondsInterval = this.state.deadline ? DateTimeUtil.getInterval(DateTimeUtil.now(), this.state.deadline) : undefined;
      this.props.updateTime(secondsInterval);
    }, this.props.interval || 1000);
  }

	render() {
		return (
      <div>
        { this.props.children }
        <br />=======<br />
        { this.state.deadline.format() }
      </div>
    );
	}

}

Countdown.propTypes = {
	deadline: PropTypes.string.isRequired,
  updateTime: PropTypes.func.isRequired,
  interval: PropTypes.number
};

export default Countdown;
