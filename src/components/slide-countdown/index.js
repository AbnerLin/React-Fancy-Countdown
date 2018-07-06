import React from 'react';

import './index.scss';

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
          <div className="slideCountdown">
            <div className="slide-block-time weeks">
              <div className="wrap-stage">
                <div className="stage tens">8</div>
                <div className="stage ones">7</div>
              </div>
              <span className="title">WEEKS</span>
            </div>
            <div className="slide-block-time days">
              <div className="wrap-stage">
                <div className="stage tens">8</div>
                <div className="stage ones">7</div>
              </div>
              <span className="title">DAYS</span>
            </div>
            <div className="slide-block-time hours">
              <div className="wrap-stage">
                <div className="stage tens">8</div>
                <div className="stage ones">7</div>
              </div>
              <span className="title">HOURS</span>
            </div>
            <div className="slide-block-time minutes">
              <div className="wrap-stage">
                <div className="stage tens">8</div>
                <div className="stage ones">7</div>
              </div>
              <span className="title">MINUTES</span>
            </div>
            <div className="slide-block-time seconds">
              <div className="wrap-stage">
                <div className="stage tens">
                  <span className="top">7</span>
                  <span className="bottom">8</span>
                </div>
                <div className="stage ones">
                  <span className="top">6</span>
                  <span className="bottom">7</span>
                </div>
              </div>
              <span className="title">SECONDS</span>
            </div>
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

