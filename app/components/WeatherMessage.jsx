var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {location, temp} = this.props;
//
//     return (
//       <p>It's it {temp} in {location}!</p>
//     );
//   }
// });

//destructuring in the arguments :o :o
//same as if I was getting props as an argument and do
//destructuring after
var WeatherMessage = ({temp, location}) => {
  // var {location, temp} = props;

  return (
    <h3 className="text-center">It's it {temp} in {location}!</h3>
  );
}

module.exports = WeatherMessage;
