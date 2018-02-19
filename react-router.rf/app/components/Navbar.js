/*
 * Navbar.js
 */

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var NavLink = ReactRouterDOM.NavLink;

class Navbar extends React.Component {
	render() {
		return (
			<ul>
				<li><NavLink to='/'>Logo</NavLink></li>
				<li><NavLink to='/projects'>Projects</NavLink></li>
				<li><NavLink to='/about'>About</NavLink></li>
			</ul>
		)
	}
}

module.exports = Navbar;
