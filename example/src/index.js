import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Container, Row, Col, Table } from 'reactstrap';
import Highlight from 'react-highlight';
import moment from 'moment';
import { BasicCountdown,
         FlipCountdown,
         SlideCountdown
       } from '../../src'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/gruvbox-light.css';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.yearLater = moment().add(1, 'years').format('YYYY-MM-DD HH:mm:ss');
    this.randomDate = moment().add(11765, 'hours').format('YYYY-MM-DD HH:mm:ss');
    this.tenSecondsLater = moment().add(10, 'seconds').format('YYYY-MM-DD HH:mm:ss');
    this.tenDaysLater = moment().add(10, 'days').format('YYYY-MM-DD HH:mm:ss');
    this.tenHoursLater = moment().add(10, 'hours').format('YYYY-MM-DD HH:mm:ss');
  }

  render() {
    const Due = () => ( <div className="due">Game over =)</div> );
    const Due2 = () => ( <div className="due">Time is up !!!! =)</div> );

    return (
      <div>

        <a href="https://github.com/AbnerLin/React-Fancy-Countdown">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
            alt="Fork me on GitHub" />
        </a>

        <header className="text-center w-100 pt-5 pb-3">
          Fancy Countdown
          <br />
          <div className="sub-title">
            <p className="text-left">A Fancy Countdown Component for ReactJS.<br />Hope you'll like it.</p>
          </div>
        </header>

        <Container>
          <Row>
            <Col className="title m-3"><h2>#Basic countdown</h2></Col>
          </Row>

          <Row>
            <Col md="7">
              <Highlight>
                {`
  <BasicCountdown
      deadline="` + this.randomDate + `"
      format="Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]" />
                `}
              </Highlight>
            </Col>
            <Col md="5" className="text-center my-auto basic-countdown-sample">
              <BasicCountdown
                deadline={ this.randomDate }
                format="Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]" />
            </Col>
          </Row>

          <Row className="d-flex flex-md-row-reverse mt-md-3 mt-5">
            <Col md="7">
              <Highlight className="my-auto">
                {`
  <BasicCountdown
      deadline="` + this.yearLater + `"
      format="Y[年] M[月] W[週] D[日] HH[時] mm[分] ss[秒]" />
                `}
              </Highlight>
            </Col>
            <Col md="5" className="text-center my-auto basic-countdown-sample">
              <BasicCountdown
                deadline={ this.yearLater }
                format="Y[年] M[月] W[週] D[日] HH[時] mm[分] ss[秒]" />
            </Col>
          </Row>

          <Row className="mt-md-3 mt-5">
            <Col md="7">
              <Highlight className="my-auto">
                {`
  .due {
    font-size: 30px;
    color: red;
    font-weight: bold;
  }

  const Due = () => ( <div className="due">Game over =)</div> );

  <BasicCountdown
      deadline="` + this.tenSecondsLater + `"
      format="ss [secs]"
      callback={ () => {
        console.log("Time is up..... !");
      }}
      dueElement={ <Due /> } />
                `}
              </Highlight>
            </Col>
            <Col md="5" className="text-center my-auto basic-countdown-sample">
              <BasicCountdown
                deadline={ this.tenSecondsLater }
                format="ss [secs]"
                callback={ () => {
                  console.log("Time is up..... !");
                }}
                dueElement={ <Due /> } />
            </Col>
          </Row>

          <Row className="mx-3 mt-3">
            <h4> Basic countdown Props </h4>
          </Row>
          <Row className="mt-md-3 mt-5">
            <Table bordered>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>String</td>
                  <td>DOM Id.</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>String</td>
                  <td>DOM class.</td>
                </tr>
                <tr>
                  <td>deadline</td>
                  <td>String</td>
                  <td>Deadline, format must be "YYYY-MM-DD HH:mm:ss".</td>
                </tr>
                <tr>
                  <td>interval</td>
                  <td>Number</td>
                  <td>The interval(ms) for updating component.<br /> Deafult is 1000ms.</td>
                </tr>
                <tr>
                  <td>format</td>
                  <td>String</td>
                  <td>
                      years  : Y or y      <br />
                      months : M or MM    <br />
                      weeks  : W or WW     <br />
                      days   : D or DD      <br />
                      hours  : H or HH     <br />
                      minutes: mm        <br />
                      seconds: ss        <br />
                      Escape token characters within the template string using square brackets. <br />
                      Example =>  Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]
                  </td>
                </tr>
                <tr>
                  <td>callback</td>
                  <td>Function</td>
                  <td>The function will invoked when the time is up.  <br />
                  Default is console.log('Time is up.');</td>
                </tr>
                <tr>
                  <td>dueElement</td>
                  <td>Element</td>
                  <td>The Element will show up to replace the countdown component when the time is up. <br />
                   Default is &lt;div&gt; Time is up. &lt;/div&gt;</td>
                </tr>
              </tbody>
            </Table>
          </Row>

          <hr />

          <Row>
            <Col className="title m-3"><h2>#Flip countdown</h2></Col>
          </Row>

          <Row>
            <Col>
              <FlipCountdown
                deadline={ this.tenDaysLater } />
            </Col>
          </Row>
          <Row>
            <Col className="px-5">
              <Highlight>
                {`
  <FlipCountdown
      deadline={`+ this.tenDaysLater + `} />
                `}
              </Highlight>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <FlipCountdown
                deadline={ this.tenDaysLater }
                weeks={false} />
            </Col>
          </Row>
          <Row>
            <Col className="px-5">
              <Highlight>
                {`
  <FlipCountdown
      deadline={`+ this.tenDaysLater + `}
      weeks={false} />
                `}
              </Highlight>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <FlipCountdown
                deadline={ this.tenHoursLater }
                days={false} />
            </Col>
          </Row>
          <Row>
            <Col className="px-5">
              <Highlight>
                {`
  <FlipCountdown
      deadline={`+ this.tenHoursLater + `}
      days={false} />
                `}
              </Highlight>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <FlipCountdown
                deadline={ this.tenSecondsLater }
                days={false}
                callback={ () => {
                  console.log('Flip countdown time is up.');
                }}
                dueElement={ <Due2 /> }/>
            </Col>
          </Row>
          <Row>
            <Col className="px-5">
              <Highlight>
                {`
  .due {
    font-size: 30px;
    color: red;
    font-weight: bold;
  }

  const Due2 = () => ( <div className="due">Time is up !!!! =)</div> );

  <FlipCountdown
      deadline={`+ this.tenSecondsLater + `}
      days={false}
      callback={ () => {
        console.log('Flip countdown time is up.');
      }}
      dueElement={ <Due2 /> }/>
                `}
              </Highlight>
            </Col>
          </Row>

          <Row className="mx-3 mt-3">
            <h4> Flip countdown Props </h4>
          </Row>
          <Row className="mt-md-3 mt-5">
            <Table bordered>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>String</td>
                  <td>DOM Id.</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>String</td>
                  <td>DOM class.</td>
                </tr>
                <tr>
                  <td>weeks</td>
                  <td>Boolean</td>
                  <td>Whether to show the unit "weeks". If "days" set to false, "weeks" will always be false.</td>
                </tr>
                <tr>
                  <td>days</td>
                  <td>Boolean</td>
                  <td>Whether to show the unit "days".</td>
                </tr>
                <tr>
                  <td>deadline</td>
                  <td>String</td>
                  <td>Deadline, format must be "YYYY-MM-DD HH:mm:ss".</td>
                </tr>
                <tr>
                  <td>interval</td>
                  <td>Number</td>
                  <td>The interval(ms) for updating component.<br /> Deafult is 1000ms.</td>
                </tr>
                <tr>
                  <td>callback</td>
                  <td>Function</td>
                  <td>The function will invoked when the time is up.  <br />
                  Default is console.log('Time is up.');</td>
                </tr>
                <tr>
                  <td>dueElement</td>
                  <td>Element</td>
                  <td>The Element will show up to replace the countdown component when the time is up. <br />
                   Default is &lt;div&gt; Time is up. &lt;/div&gt;</td>
                </tr>
              </tbody>
            </Table>
          </Row>






          <Row>
            <Col>
              The animation will pause when the tab inactive.
            </Col>
          </Row>
          <hr /><hr /><hr /><hr /><hr /><hr />

          <div>

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-30 22:38:20"
                interval={1000}
                weeks={false} />
            </div>

            <hr />

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-30 01:21:00"
                interval={1000} />
            </div>

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-09 01:23:00"
                days={false}
                weeks={false}
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2019-06-30 12:39:11"
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2018-07-08 12:39:11"
                days={true}
                weeks={false}
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2018-07-08 12:39:11"
                days={false}
                weeks={false}
                interval={3000} />
            </div>
          </div>


        </Container>
      </div>
    );
  }
}


const Due = () => ( <div className="due">Game over!</div> );

const App1 = () => (
  <Container>

    <header>
      Header.
    </header>

    <Row>
      <Col sm="6">aa</Col>
      <Col sm="6">aa</Col>
    </Row>

    <Button color="danger">Danger!</Button>



  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
