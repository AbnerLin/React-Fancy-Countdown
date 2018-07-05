import React from 'react';

const slideCountdown = (WrappedComponent) => {

  class SlideCountdown extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        due: false
      };

      this.updateTime = this.updateTime.bind(this);
    }

    updateTime(flatSeconds) {
      console.log(flatSeconds);
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          updateTime={ this.updateTime }>
          Flip countdown.
          <div>

          </div>
        </WrappedComponent>
      );
    }
  }

  SlideCountdown.propTypes = {

  };

  SlideCountdown.defaultProps = {

  };

  return SlideCountdown;
}

export default slideCountdown;

