import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BasicCountdown } from '../../src'

const App = () => (
  <div>

  	<BasicCountdown
      deadline="2018-06-29 13:00:00"
      interval={1000}
      format="Y[year(s)] M[months] D[days] HH:mm:ss" />

      <hr />

    <BasicCountdown
      deadline="2018-06-28 07:56:11"
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
