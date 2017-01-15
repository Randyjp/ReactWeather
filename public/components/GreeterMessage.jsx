var React = require('react');

var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hi {name}!!</h1>
                <p>{message}!!</p>
            </div>
        );
    }
});

//export so when you require the file there is information
//it's like the return of the require statement
module.exports =GreeterMessage;