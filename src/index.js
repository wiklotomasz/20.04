import React from 'react';
import { render } from 'react-dom';
import {Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import routes from './routes';


render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes}/>
		<div>
			<DevTools />
			<h1>Inicjacja projektu</h1>
		</div>
	</Provider>,	
	document.getElementById('root')
	);