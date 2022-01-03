
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';


const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

function App() {
  return (
    <div className="App bg-gradient-to-t from-gray-200 to bg-gray-100 h-full">
      <Router>
      <Navbar />
      <Switch>
          <Route path="/portfolio">
          <Portfolio />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
