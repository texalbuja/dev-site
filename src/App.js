import React, { Component } from "react";
import "./app.scss";
import { Button, Content } from "@carbon/react";
import NavHeader from "./components/NavHeader";

class App extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <Content>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}
export default App;
