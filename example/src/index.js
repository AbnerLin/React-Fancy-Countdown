import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BasicCountdown } from '../../src'

const App = () => (
	<BasicCountdown />
);

ReactDOM.render(<App />, document.getElementById('root'));