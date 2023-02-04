import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {data} from "./data.js";

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
const Home = () => {
    return ( 
        <motion.div className="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="flex-container">
                { data.map((sub) => (
                    <div className="flex-item">
                        <a href={"/gallery/sub/" + sub["id"]} ><img src={process.env.PUBLIC_URL + sub["mainpic"]} alt={sub["title"]} /></a>
                        <p>{ sub["title"] }</p>
                    </div>
                ))}
            </div>
        </motion.div>
     );
}
 
export default Home;