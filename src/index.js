import Countdown from './components/countdown';
import Basic from './components/basic-countdown';
import Flip from './components/flip-countdown';

const BasicCountdown = Basic(Countdown);
const FlipCountdown = Flip(Countdown);

export {
	BasicCountdown,
  FlipCountdown
};
