var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   //props children renders all the children passed by react route
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });
// };
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
