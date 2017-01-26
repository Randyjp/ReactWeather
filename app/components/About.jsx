var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

//stateless components, they only define a render function and don't maintain
//any state. The About component above is a great example so it will get refactored
var About = (props) => {
  return (
    <h3>About component</h3>
  );
};
module.exports = About;
