import React, { Component } from "react";
import { Content, Theme } from "@carbon/react";
import "./app.scss";
import NavHeader from "./components/NavHeader";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import Blog from "./content/Blog";
import DeveloperEffectiveness from "./content/DeveloperEffectiveness";
import SoftwareArchitecture from "./content/SoftwareArchitecture";
import TechnicalLeadership from "./content/TechnicalLeadership";

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="white">
          <NavHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/blog" component={Blog} />
            <Route
              path="/developer-effectiveness"
              component={DeveloperEffectiveness}
            />
            <Route
              path="/software-architecture"
              component={SoftwareArchitecture}
            />
            <Route
              path="/technical-leadership"
              component={TechnicalLeadership}
            />
          </Switch>
        </Content>
      </>
    );
  }
}
export default App;
