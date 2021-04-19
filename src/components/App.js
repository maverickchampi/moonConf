import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import BadgeDetails from "../pages/BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/moonConf" component={Home} />
          <Route exact path="/moonConf/speakers" component={Badges} />
          <Route exact path="/moonConf/speakers/new" component={BadgeNew} />
          <Route
            exact
            path="/moonConf/speakers/:badgeId"
            component={BadgeDetails}
          />
          <Route
            exact
            path="/moonConf/speakers/:badgeId/edit"
            component={BadgeEdit}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
