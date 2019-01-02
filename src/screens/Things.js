import React from 'react';
import Thing from './Thing';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Things = ({ match }) => (
  <div>
    <h2>Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React hjghjghjg j</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:thingId`} component={Thing} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a thing.</h3>}
    />
  </div>
);

export default Things;