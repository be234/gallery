import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {data} from "./data.js";
import uuid from 'react-uuid';


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


const Sub = ({setShowModal, setModalImage}) => {
  const { id } = useParams();
  const changeShow = (pic) => {
    setShowModal(true);
    setModalImage(pic);
}

const shuffle = (array) => {
  let cIndex = array.length, rIndex;
  while (cIndex != 0) {
    rIndex = Math.floor(Math.random() * cIndex);
    cIndex--;
    [array[cIndex], array[rIndex]] = [array[rIndex], array[cIndex]];
  }
return array;
}

const shuffled = shuffle(data[id].pictures);

    return ( 
      <motion.div className="sub-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
            {/* <h1>Hello</h1> */}
            {(shuffled.map((pic) => (
                <div className="image" key={uuid()}>
                {(window.innerWidth > 700) && <Link to={"/sub/" + data[id]["id"]} onClick={() => changeShow(pic)}  className="fancybox" data-fancybox="gallery1">
                  <img src={process.env.PUBLIC_URL  + pic} alt={data[id]["caption"]} />
                 <h1 className="caption">{data[id].caption}</h1>   
                  </Link>}

                  {(window.innerWidth < 700) && 
                  <>
                  <img src={pic} alt={data[id]["caption"]} /> 
                  <h1 className="caption">{data[id].caption}</h1>
                  </>
                  }

                </div>         
                 ))
            )}
        </motion.div>
     );
}
 
export default Sub;
                   
