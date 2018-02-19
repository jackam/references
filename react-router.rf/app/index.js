/*
 * index.js
 */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
var BrowserRouter = ReactRouterDOM.BrowserRouter; 

require('./index.css');

var App = require('./components/App');

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	), document.getElementById('app')
);
