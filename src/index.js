import Countdown from './components/countdown';
import Basic from './components/basic-countdown';
import Flip from './components/flip-countdown';
import Slide from './components/slide-countdown';

const BasicCountdown = Basic(Countdown);
const FlipCountdown = Flip(Countdown);
const SlideCountdown = Slide(Countdown);

export {
	BasicCountdown,
  FlipCountdown,
  SlideCountdown
};
