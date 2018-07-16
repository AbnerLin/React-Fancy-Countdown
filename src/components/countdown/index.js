import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

class Countdown extends React.Component {

  /**
    =====Props=====
    dueElement: The dom will replace original dom when the time is up.
    callback: Method will invoked when the time is up.
    ================
  */

  constructor(props) {
    super(props);

    this.state = {
      deadline: DateTimeUtil.isValid(this.props.deadline),
      due: false
    };

    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    this.update();
    this.start();

    /** pause timer when tab inactive. */
    document.addEventListener("visibilitychange", () => {
      switch(document.visibilityState) {
        case 'hidden':
          this.pause = true;
          break;
        case 'visible':
          this.pause = false;
          break;
      }
    });
  }

  componentWillUpdate(nextProps) {
    if (this.props.deadline != nextProps.deadline) {
      clearInterval(this.timer);
      this.setState({
        deadline: nextProps.deadline,
        due: false
      }, () => {
        this.update();
        this.start();
      });
    }
  }

  start() {
    this.timer = setInterval(() => {
      this.update();
    }, this.props.interval);
  }

  update() {
    if (!this.pause) {
      let secondsInterval = this.state.deadline ? DateTimeUtil.getInterval(DateTimeUtil.now(), this.state.deadline) : undefined;

      if (secondsInterval <= 0) {
        this.stop();
      } else {
        this.props.updateTime(secondsInterval);
      }
    }
  }

  stop() {
    this.setState({
      due: true
    }, () => {
      this.props.callback();
      clearInterval(this.timer);
    });
  }

	render() {
		return (
      <div className={this.props.className} id={this.props.id}>
        { this.state.due ? this.props.dueElement : this.props.children }
      </div>
    );
	}

}

Countdown.propTypes = {
	deadline: PropTypes.string.isRequired,
  updateTime: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  interval: PropTypes.number,
  dueElement: PropTypes.element
};

Countdown.defaultProps = {
  dueElement: (<div> Time is up. </div>),
  callback: () => {
    console.log('Time is up.');
  },
  interval: 1000
};

export default Countdown;
