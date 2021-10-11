import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route exact path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
