/*
 * App.js
 */

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var BrowserRouter = ReactRouterDOM.BrowserRouter;
var Route = ReactRouterDOM.Route;

var Navbar = require('./Navbar');
var Content = require('./Content');

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Content />
			</div>
		)
	}
}

module.exports = App;
