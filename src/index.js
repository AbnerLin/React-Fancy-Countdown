import Countdown from './components/count-down';
import Basic from './components/basic-count-down';
import Flip from './components/flip-count-down';

const BasicCountdown = Basic(Countdown);
const FlipCountdown = Flip(Countdown);

export {
	BasicCountdown,
  FlipCountdown
};
