import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BasicCountdown, FlipCountdown } from '../../src'


const Due = () => ( <div className="due">Game over!</div> );

const App = () => (
  <div>

    <div>
    	<BasicCountdown
        deadline="2018-06-25 13:00:00"
        interval={1000}
        format="Y[year(s)] M[months] D[days] HH:mm:ss"
        callback={ () => {
          console.log("時間到......");
        }}
        dueElement={ <Due /> } />

      <hr />

      <BasicCountdown
        deadline="2019-06-29 22:33:20"
        interval={1000}
        format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />

      <hr />

      <BasicCountdown
        deadline="2019-06-30 12:39:11"
        interval={3000}
        format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />
    </div>

    <hr /><hr /><hr /><hr />

    <div>

      <FlipCountdown
        deadline="2018-09-11 14:48:00"
        interval={1000} />

    </div>
  </div>




);

ReactDOM.render(<App />, document.getElementById('root'));
