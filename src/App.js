import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/nav';
import Home from './Components/Home/home';
import './App.css';
import Create from './create';
import About from './about';
import Footer from './Components/Footer/footer';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>

        <Route exact path="/">
       <Home/>
       </Route>

       <Route path="/create">
         <Create/>
       </Route>

       <Route path="/about">
         <About/>
       </Route>

       <Route path="/blogs/:id">
         <BlogDetails/>
       </Route>
       
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
