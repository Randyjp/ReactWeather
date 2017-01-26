var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  //function built on react, gets call automatically
  getInitialState: function () {
    // return {
    //   location: 'Miami',
    //   temp: 88
    // }
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
    var that = this;
    
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function () {
    var {location, temp, isLoading} = this.state;

    //nested function to conditionally render or not a component
    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
