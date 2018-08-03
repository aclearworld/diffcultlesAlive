import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import SignUp from './SignUp';

const Top = () => <h1>Top</h1>;
const Login = () => <h1>Login</h1>;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="top">Top </Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="signUp">SignUp</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={Top} />
              <Route path="/top" exact component={Top} />
              <Route path="/login" exact component={Login} />
              <Route path="/signUp" exact component={SignUp} />
              <Route component={Top} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
