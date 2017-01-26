var React = require('react');
//when using index route you wanna use index link instead of link
var {Link, IndexLink} = require('react-router');

//advantage of link vs <a> is that that hanldes the logic to know in which
//url you are at the moment
// var Nav = React.createClass({
//   render: function () {
//     return(
//       <div>
//         <h2>Nav component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return(
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </div>
  );
};
module.exports = Nav;
