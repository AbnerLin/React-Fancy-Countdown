import React from 'react';
import PropTypes from 'prop-types';
import DateTimeUtil from '../../datetime-util';

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
          </div>
        </WrappedComponent>
      );
    }

  }

  FlipCountDown.propTypes = {
    dueElement: PropTypes.element,
    callback: PropTypes.func
  }

  // FlipCountDown.defaultProps = {
  //   dueElement: (<div> FlipCountDown time is up. </div>),
  //   callback: () => {
  //     console.log('FlipCountDown time is up.');
  //   }
  // };


  return FlipCountDown;
}

export default flipCountDown;

