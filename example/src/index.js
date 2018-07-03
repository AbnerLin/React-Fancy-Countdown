import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BasicCountdown, FlipCountdown } from '../../src'


const Due = () => ( <div className="due">Game over!</div> );

const App = () => (
  <div>

    <div>

      <div className="text-center">
      	<BasicCountdown
          deadline="2018-06-25 13:00:00"
          interval={1000}
          format="Y[year(s)] M[months] D[days] HH:mm:ss"
          callback={ () => {
            console.log("時間到......");
          }}
          dueElement={ <Due /> } />
        </div>

      <hr />

      <div className="text-center">
        <BasicCountdown
          deadline="2019-06-29 22:33:20"
          interval={1000}
          format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />
      </div>

      <hr />

      <div className="text-center">
        <BasicCountdown
          deadline="2019-06-30 12:39:11"
          interval={3000}
          format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />
        </div>
    </div>

    <hr />

    <div>

      <div className="text-center">
        <FlipCountdown
          deadline="2018-07-08 15:31"
          interval={1000}
          weeks={false} />
      </div>

      <hr />

      <div className="text-center">
        <FlipCountdown
          deadline="2019-07-08 15:31:33"
          interval={1000} />
      </div>


    </div>
  </div>




);

ReactDOM.render(<App />, document.getElementById('root'));
