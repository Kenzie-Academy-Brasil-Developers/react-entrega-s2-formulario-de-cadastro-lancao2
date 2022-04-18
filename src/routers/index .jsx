import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Congratutations from "../pages/congratulation";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wellcome/:user">
        <Congratutations />
      </Route>
    </Switch>
  );
};
export default Routers;
