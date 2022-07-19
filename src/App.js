import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Switch>
          <Route path="/" exact><HomePage /></Route>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
