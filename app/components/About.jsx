var React = require('react');
var {Link} = require('react-router');
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
    <div>
      <div className="callout primary">
        <h1 className="text-center">About</h1>
        <h3 className="subheader">Learning React</h3>
        <p className="text-justify">This website was created with the pupose of
        learning how to use react and related components(npm, babel, webpack...).
        I also made use of Foundation for style and open maps for fetching the weather.</p>
      </div>
      <p>Some of the tools:</p>
      <ul>
        <li>
          <a href='https://www.udemy.com/the-complete-react-web-app-developer-course'>React online class</a>
        </li>
        <li>
          <a href='https://facebook.github.io/react/'>React by Facebook</a>
        </li>
        <li>
          <a href='https://openweathermap.org'>Open weather</a>
        </li>
        <li>
          <a href='http://foundation.zurb.com/'>Foundation</a>
        </li>
      </ul>
    </div>
  );
};
module.exports = About;
