import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import { AboutPage } from './pages/About';
import { Article } from './pages/Article';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>

          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
          <Route path="/articles/:id"><Article /></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
