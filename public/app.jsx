//import react from webpack
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');






var firstName = 'Jise';
var message = 'Soy el mejor del mundo';
/*
 * This is the react dom that takes care of rendering things to the DOM
 * the first param is a react component and we are passing it using JxX
 * the variable Greeter tunrs into <Greetter/>,
 * {} -> to use a javascript expresion
 */
ReactDOM.render(
    <Greeter name={firstName} message={message}/>, // passing an argument to our create classs method,
    document.getElementById('app')
);
