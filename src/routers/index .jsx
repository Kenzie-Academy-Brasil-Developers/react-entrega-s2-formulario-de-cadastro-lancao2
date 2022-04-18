import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Congratutations from "../pages/congratulation";


const Routers = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/:userName">
                <Congratutations/>
            </Route>
        </Switch>
    )
}