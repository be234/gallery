import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Sub from './components/Sub';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';
import About from './components/About';

function App() {
const location = useLocation();
const [showModal, setShowModal] = useState(false);
const [modalImage, setModalImage] = useState("");

  return (

      <AnimatePresence>
    <Modal showModal={showModal} setShowModal={setShowModal} modalImage={modalImage} />
      <Navbar/>
     <Switch location={location} key={location.key}>
     {/* <Switch> */}
    <Route exact path={"/"}>
       <Home/>
    </Route>

    <Route path={"/sub/:id"}>
       <Sub setShowModal={setShowModal} setModalImage={setModalImage}/>
    </Route>

    <Route path={"/about"}>
        <About />
    </Route>

    <Route path="*">
       <Home/>
    </Route>
     </Switch>
     <Footer/>
     </AnimatePresence>
    
  );
}

export default App;
