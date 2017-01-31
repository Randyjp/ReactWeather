var React = require('react');
var ReactDOM = require('react-dom');
//eqivalent to var Router = require('react-router').Route
//good for all the variables
var {Router, Route, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load and require your css(foundation)
//c! -> css loader so webpack can handle it
//style! -> injects the css to the html
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation(); //fire-up foundation

//load app costum css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,

	document.getElementById('app')
);
