import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BasicCountdown } from '../../src'


const Due = () => ( <div className="due">Game over!</div> );

const App = () => (
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
      deadline="2018-06-27 01:22:30"
      interval={2000}
      format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />

    <hr />

    <BasicCountdown
      deadline="2018-06-28 07:56:11"
      interval={3000}
      format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />

  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
