import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
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


const Sub = () => {
  const { id } = useParams();
    return ( 
      <motion.div className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
            {/* <h1>Hello</h1> */}
            {data && (data[id].pictures.map((pic) => (
                <div className="image">
                <a href={pic}  className="fancybox" data-fancybox="gallery1">
                  <img src={pic} alt="picture" />
                  </a>
                 <h1 className="caption">{data[id].caption}</h1>   
                </div>         
                 ))
            )}
        </motion.div>
     );
}
 
export default Sub;
                   
