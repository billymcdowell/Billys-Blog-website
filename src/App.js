import React from "react";
import ImageList from "./Components/ImageList";
import "./styles.css";
import SingleImage from "./Components/SingleImage";
import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={ImageList} />
        <Route path="/work/:id" component={SingleImage} />
      </Switch>
      <Footer />
    </div>
  );
}
