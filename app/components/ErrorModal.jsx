var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMSever = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  //with prop tyopes you can specify the type of the properties expected
  //by the componet. Also, if they are required or not. Even if they are
  //required and are not provided the component will try to render itselft.
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  //gets called by react after the DOM is updated with the content of the
  //render function. In this case it shows the modal
  componentDidMount: function (){
    var {title, message} = this.props;
    //had to move the markup here because foundation was altering the DOM
    //this doesn't work well with react because react it's trying to maintain
    //the state of the DOM. Solution: use Jquery for the DOM is this case
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMSever.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    // var {title, message} = this.props;
    return (
      <div>

      </div>
    );
    // return (
    //   <div className="reveal tiny text-center" id="error-modal" data-reveal="">
    //     <h4>{title}</h4>
    //     <p>{message}</p>
    //     <p>
    //       <button className="button hollow" data-close="">
    //         Okay
    //       </button>
    //     </p>
    //   </div>
    // );
  }
});

module.exports = ErrorModal;
