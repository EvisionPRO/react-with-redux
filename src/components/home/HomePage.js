import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>My New react, Redux and react routes in ES6 first app</p>
          <Link to="about" className="btn btn-secondary btn-lg">Learn More</Link>
        </div>
    );
  }
}

export default HomePage;
