import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { StoryMap } from "./components/StoryMap/StoryMap";
import Dashboard from "./components/DashboardPage/DashboardPage";
import { ProjectPage } from "./components/ProjectPage/ProjectPage";
import { ACarousel } from "./components/Carousel/Carousel";
import ProjectOverview from "./components/ProjectOverview/ProjectOverview";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
} from "./components/ProjectPage/Steps";

interface State {
  isLoggedIn: boolean;
  username: string;
}

class App extends React.Component<{}, State> {
  public constructor() {
    super({});
    this.state = {
      isLoggedIn: false,
      username: "Jaques",
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
              <Route exact path="/step1" component={Step1} />
              <Route exact path="/step2" component={Step2} />
              <Route exact path="/step3" component={Step3} />
              <Route exact path="/step4" component={Step4} />
              <Route exact path="/step5" component={Step5} />
              <Route exact path="/step6" component={Step6} />
              <Route exact path="/step7" component={Step7} />
              <Route exact path="/story" component={StoryMap} />
              <Route
                exact
                path="/dashboard"
                render={() => <Dashboard username={this.state.username} />}
              />
              <Route exact path="/project" component={ProjectPage} />
              <Route exact path="/carousel" component={ACarousel} />
              <Route
                exact
                path="/projectoverview"
                component={ProjectOverview}
              />
              <Route
                exact
                path="/login"
                render={() => <LoginPage update={this.login} />}
              />
            </div>
          )}
          {this.state.isLoggedIn && (
            <div>
              <Route
                exact
                path="/"
                render={() => <Dashboard username={this.state.username} />}
              />
              <Route exact path="/hello" component={LandingPage} />
            </div>
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
