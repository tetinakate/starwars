import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { App } from './components/app';
import store from './components/store/store';
import { Provider } from 'react-redux';
import './index.css';

// https://swapi.dev/

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);