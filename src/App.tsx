import React from 'react';
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import NewsPage from "./pages/NewsPage";
import {Redirect, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
  return (
      <>
          <Header />
          <Switch>
              <Route path="/news/:id" component={NewsPage} />
              <Route exact path="/" component={MainPage} />
              <Redirect to="/" />
          </Switch>
      </>
  )
}

export default App;
