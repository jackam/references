/*
 * Content.js
 */

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

var Home = require('./Home');
var Projects = require('./Projects');
var About = require('./About');

class Content extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/projects' component={Projects} />
				<Route path='/about' component={About} />
			</Switch>
		)
	}
}

module.exports = Content;


