import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: .3, duration: 0.2}
    },
    exit: {
     opacity: 0,
     transition: {ease: 'easeInOut' } 
    }
  }
const gallery = "/gallery";
const Navbar = () => {
    return ( 
        <motion.nav className="navbar-1" id="top"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <a href="/"><h1>ANWITA+ARUN</h1></a>
            <ul>
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="/">HOME</a></li>
                <li><a a="#">ABOUT</a></li>
            </ul>
        </motion.nav>
     );
}
 
export default Navbar;