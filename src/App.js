import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Get from './Pages/Get';
import Set from './Pages/Set';
import Go from './Pages/Go';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/get" component={Get} />
        <Route path="/set" component={Set} />
        <Route path="/go" component={Go} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
