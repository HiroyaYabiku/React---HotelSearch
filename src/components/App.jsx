import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';


const App = () => (
  <Router>
    <div className="app">
      <ul className="navi">
        <li><Link to="/React---HotelSearch">ホテル検索</Link></li>
        <li><Link to="/React---HotelSearch/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/React---HotelSearch" component={SearchPage} />
        <Route exact path="/React---HotelSearch/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
