# React-Fancy-Countdown
A fancy countdown component for React.

## Demo
Live demo: https://abnerlin.github.io/React-Fancy-Countdown/

## Installation
`
npm install --save react-fancy-countdown
`

## Usage 
### Basic Countdown 
This is basic usage, the more advanced usage please check [Demo](https://abnerlin.github.io/React-Fancy-Countdown/).
```
import { BasicCountdown } from 'react-fancy-countdown';
 
class App extends React.Component {
  ...
  render() {
    <BasicCountdown
      deadline="2030-12-31 14:23:22"
      format="Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]" />
  }
}
```

#### Basic Countdown Props
Parameter|Type|Description
---------|----|-----------
id|String|DOM Id.
className|String|DOM class.
deadline|String|Deadline, format must be "YYYY-MM-DD HH:mm:ss".<br />Recommend to store deadline in State, once deadline updated in State, the countdown will reset.
interval|Number|The interval(ms) for updating component.<br />Deafult is 1000ms.
format|String|years : Y or y <br />months : M or MM <br />weeks : W or WW <br />days : D or DD <br />hours : H or HH <br />minutes: mm <br />seconds: ss <br />Escape token characters within the template string using square brackets. <br />Example => Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]
callback|Function|The function will invoked when the time is up. <br />Default is console.log('Time is up.');
dueElement|Element|The Element will show up to replace the countdown component when the time is up. <br />Default is &lt;div&gt; Time is up. &lt;/div&gt;

---

### Flip Countdown
This is basic usage, the more advanced usage please check [Demo](https://abnerlin.github.io/React-Fancy-Countdown/).
```
import { FlipCountdown } from 'react-fancy-countdown';
import 'react-fancy-countdown/dist/countdown.css';
 
class App extends React.Component {
  ...
  render() {
    <FlipCountdown
      deadline="2030-12-31 14:23:22" />
  }
}
```

#### Flip Countdown Props
Parameter|Type|Description
---------|----|-----------
id|String|DOM Id.
className|String|DOM class.
weeks|Boolean|Whether to show the unit "weeks". If "days" set to false, "weeks" will always be false. <br />If "weeks" is false, please make sure the deadline won't over than 99 days!
days|Boolean|Whether to show the unit "days". <br />If "days" is false, plsease make sure the deadline won't over than 99 hours!
deadline|String|Deadline, format must be "YYYY-MM-DD HH:mm:ss".<br />Recommend to store deadline in State, once deadline updated in State, the countdown will reset.
interval|Number|The interval(ms) for updating component.<br />Deafult is 1000ms.
callback|Function|The function will invoked when the time is up. <br />Default is console.log('Time is up.');
dueElement|Element|The Element will show up to replace the countdown component when the time is up. <br />Default is &lt;div&gt; Time is up. &lt;/div&gt;

---

### Slide Countdown
This is basic usage, the more advanced usage please check [Demo](https://abnerlin.github.io/React-Fancy-Countdown/).
```
import { SlideCountdown } from 'react-fancy-countdown';
import 'react-fancy-countdown/dist/countdown.css';

class App extends React.Component {
  ...
  render() {
    <SlideCountdown
      deadline="2030-12-31 14:23:22" />
  }
}
```

#### Slide Countdown Props
Parameter|Type|Description
---------|----|-----------
id|String|DOM Id.
className|String|DOM class.
weeks|Boolean|Whether to show the unit "weeks". If "days" set to false, "weeks" will always be false. <br />If "weeks" is false, please make sure the deadline won't over than 99 days!
days|Boolean|Whether to show the unit "days". <br />If "days" is false, plsease make sure the deadline won't over than 99 hours!
deadline|String|Deadline, format must be "YYYY-MM-DD HH:mm:ss".<br />Recommend to store deadline in State, once deadline updated in State, the countdown will reset.
interval|Number|The interval(ms) for updating component.<br />Deafult is 1000ms.
callback|Function|The function will invoked when the time is up. <br />Default is console.log('Time is up.');
dueElement|Element|The Element will show up to replace the countdown component when the time is up. <br />Default is &lt;div&gt; Time is up. &lt;/div&gt;
