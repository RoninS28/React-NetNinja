import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const title = "Welcome to the new blog";
  return (
    <Router>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Navbar />{/*navbar is outside the switch because navbar is always going to be present irrespective of the page*/}
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;//this is so that we can use this function elsewhere (i.e in index.js)
