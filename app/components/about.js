var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>This is a weather app built with react.</p>
      <p>
        Tools used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map API</a>
          </li>
          <li>
            <a href="https://webpack.github.io/">Webpack</a>
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation Zurb</a>
          </li>
          <li>
            <a href="https://www.heroku.com/">Heroku</a>
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;