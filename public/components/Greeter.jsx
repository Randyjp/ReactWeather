var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

/*
 * creating a react component
 * the create class takes an object as the only param
 * the only require thing of that object is a render method
 * can have many other things
 * YOU CAN ONLY RETURN ONE ROOT ELEMENT
 * components should not update their own props
 * they can update their state
 */
var Greeter = React.createClass({
    /*
     * create a default properties object for props. Will be used when we do not provide a property
     */
    getDefaultProps: function () {
        return {
            name: 'mmguevaso',
            message: "This is from a componet"
        };
    },

    /*
     * set the initial values of the states from this component
     */
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    //responds to the form submit
    handleUpdates : function (updates) {
        // if(updates.hasOwnProperty('name')) {
        //     this.setState({
        //         name: updates.name
        //     });
        // }
        // if(updates.hasOwnProperty('message')) {
        //     this.setState({
        //         message: updates.message
        //     });
        // }

        this.setState(updates); //react renders the states that changes that's why you use this and not on top way
    },

    //YOU CAN ONLY RETURN ONE ROOT ELEMENT
    render: function  () {
        var name = this.state.name; //using state instead of props
        var message = this.state.message; //using state instead of props

        /*ref is a react element that can be accessed later*/
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onUpdates={this.handleUpdates}/>
            </div>
        );
    }
});

module.exports = Greeter;