var React = require('react');
//when using index route you wanna use index link instead of link
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather app</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

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

// var Nav = (props) => {
//   return(
//     <div>
//       <h2>Nav component</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//       <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//       <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//     </div>
//   );
// };
