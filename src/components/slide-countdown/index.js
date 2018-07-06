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
                <div className="stage tens">
                   <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">WEEKS</div>
            </div>
            <div className="slide-block-time days">
              <div className="wrap-stage">
                <div className="stage tens">
                   <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">DAYS</div>
            </div>
            <div className="slide-block-time hours">
              <div className="wrap-stage">
                <div className="stage tens">
                   <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">HOURS</div>
            </div>
            <div className="slide-block-time minutes">
              <div className="wrap-stage">
                <div className="stage tens">
                   <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">MINUTES</div>
            </div>
            <div className="slide-block-time seconds">
              <div className="wrap-stage">
                <div className="stage tens">
                   <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
                <div className="stage ones">
                  <div className="mask">
                    <div className="top">2</div>
                    <div className="bottom">6</div>
                  </div>
                </div>
              </div>
              <div className="title">SECONDS</div>
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

