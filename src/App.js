import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <Router>
      <Header />

        <hr />

        <Route exact path="/" component={Main} />
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
    </Router>
  );
}




export default App;
