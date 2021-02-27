import './App.css';
import About from './components/About';
import Auth from './components/Auth';
import Home from './components/Home';
import List from './components/List';
import Protected from './components/Protected';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* <h1>React Login Application</h1> */}

      {/* <Protected /> */}

      <Router>

        <Nav />

        {/* <Link to='home' >Home</Link>
        <Link to='about' >About</Link>
        <Link to='profile' >List</Link>
        <Link to='/' >Login</Link> */}

        <Switch>
          <Route path='/home'>
            {/* <Home /> */}
            <Protected cmp = { Home }/>
          </Route>
          <Route path='/about'>
            {/* <About /> */}
            <Protected cmp = { About }/>
          </Route>
          <Route path='/profile'>
            {/* <List /> */}
            <Protected cmp = { List }/>
          </Route>
          <Route path='/'>
            <Auth />
          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
