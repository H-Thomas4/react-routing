import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import People from './pages/People';
import PeopleDetails from './pages/PeopleDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {<Home />}
        </Route>
        <Route exact path="/Films">
          {<Films />}
        </Route>
        <Route exact path="/Films/:Film.id">
          {<FilmDetails />}
        </Route>
        <Route exact path="/People">
          {<People />}
        </Route>
        <Route exact path="/People/:People.id">
          {<PeopleDetails />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
