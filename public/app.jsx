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

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        );
    }
});

/*
 * creating a react component
 * the create class takes an object as the only param
 * the only require thing of that object is a render method
 * can have many other things
 * YOU CAN ONLY RETURN ONE ROOT ELEMENT
 * components should not update their own props
 * they can update their state
  */
var Greetter = React.createClass({
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
        name: this.props.name
      };
    },

    //responds to the form submit
    handleNewName : function (name) {
        this.setState({
            name: name
        });
    },

    //YOU CAN ONLY RETURN ONE ROOT ELEMENT
    render: function  () {
        var name = this.state.name; //using state instead of props
        var message = this.props.message; //using state instead of props

        /*ref is a react element that can be accessed later*/
        return (
            <div>

                <GreeterMessage name={name} message={message}/>

                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

var firstName = 'Jise';
var message = 'Soy el mejor del mundo';
/*
 * This is the react dom that takes care of rendering things to the DOM
 * the first param is a react component and we are passing it using JxX
 * the variable Greeter tunrs into <Greetter/>,
 * {} -> to use a javascript expresion
 */
ReactDOM.render(
    <Greetter name={firstName} message={message}/>, // passing an argument to our create classs method,
    document.getElementById('app')
);
