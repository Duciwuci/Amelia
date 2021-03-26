import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { StoryMap } from "./components/StoryMap/StoryMap";
import Dashboard from "./components/DashboardPage/DashboardPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";

interface State {
  isLoggedIn: boolean;
  username: string;
}

class App extends React.Component<{}, State> {
  public constructor() {
    super({});
    this.state = {
      isLoggedIn: false,
      username: "",
    };
    this.login = this.login.bind(this);
  }

  private login(name: string) {
    this.setState({ username: name, isLoggedIn: true });
  }

  public render() {
    return (
      <Router>
        <Switch>
          {!this.state.isLoggedIn && (
            <div>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/story" component={StoryMap} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/project" component={ProjectPage}/>
              <Route exact path="/login" render={() => <LoginPage update={this.login} />} />
            </div>
          )}
          {this.state.isLoggedIn && (
            <div>
              <Route exact path="/" render={() => <Dashboard username={this.state.username}/>} />
              <Route exact path="/hello" component={LandingPage} />
            </div>
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
