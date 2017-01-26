var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value; //get location from from

    //validate there's something in there
    if (location.length > 0) {
      this.refs.location.value = ''; //clean field
      this.props.onSearch(location); //pass to parent function because this
      //is a component that only fetcthes the data.
    }
  },
  render: function (){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter city name" ref="location"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
