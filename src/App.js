import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
