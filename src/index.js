import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/antd-min.css";
import "@alifd/next/dist/next.css";
import Index from "./components/Global";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route, Redirect } from "react-router-dom";

const Routers = () => {
  return (
    <HashRouter>
      <div>
        <Route
          path="/"
          exact={true}
          component={() => <Redirect to="/index" />}
        />
        <Route path="/index" component={Index} />
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<Routers />, document.getElementById("root"));
registerServiceWorker();
