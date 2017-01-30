var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      // alert(errorMessage);
    });
  },
  render: function () {
    var {location, temp, isLoading, errorMessage} = this.state;

    //nested function to conditionally render or not a component
    function renderMessage () {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});


module.exports = Weather;
