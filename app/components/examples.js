var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few examples</p>
      <ol>
        <li>
          <Link to="?/location=Philadelphia">Philadelphia, Pa</Link>
        </li>
        <li>
          <Link to="?/location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;