import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Sub from './components/Sub';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
const location = useLocation();


  return (

      <AnimatePresence exitBeforeEnter>
     <Switch location={location} key={location.key}>
     {/* <Switch> */}
      <Route exact path={"/"}>
      <Navbar/>
       <Home/>
       <Footer />
      </Route>
      <Route path={"/sub/:id"}>
      <Navbar/>
       <Sub/>
       <Footer />
      </Route>
      <Route path={"/about"}>
        <h1>about</h1>
      </Route>
      <Route path="*">
      <Navbar/>
       <Home/>
       <Footer/>
      </Route>
     </Switch>
     </AnimatePresence>
    
  );
}

export default App;
