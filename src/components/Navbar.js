import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineXMark } from 'react-icons/hi2';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useEffect, useState } from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { BsArrowLeft } from 'react-icons/bs';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.2}
    },
    exit: {
     opacity: 0,
     transition: {ease: 'easeInOut' } 
    }
  }
const gallery = "/gallery";
const Navbar = () => {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
      const threshold = 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;
    
      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
    
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
    
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
    
      window.addEventListener("scroll", onScroll);
      // console.log(scrollDir);

      setbars(false)
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);


  const [bars, setbars] = useState(false);

    return ( 
        <motion.nav className="navbar-1" id="top"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <a href="/gallery"><h1>ANWITA+ARUN</h1></a>
         { (window.innerWidth > 700) &&  <ul>
                <li><a href="https://be234.github.io/portfolio/" target="_blank">PORTFOLIO</a></li>
                <li><a href="/gallery">HOME</a></li>
                <li><a href="/gallery/about">ABOUT</a></li>
                <li className="social">
                <div className="ccontainer">
                <h6><FaBehance /></h6>
                <h6><FaTwitter /></h6>
                <h6><FaInstagram /></h6>
                <h6><FaFacebookSquare /></h6>
                {/* <h6 style={(window.location.href.indexOf("sub") > -1) ? {"padding-top": 100} : {"padding-top": 10}}><GoMail /></h6> */}
            </div>
                </li>
            </ul>}


           {(window.innerWidth < 700) && 
           <>
           <AnimatePresence>
        {!bars && <motion.h2
           initial={{ opacity: 0, scaleY: 0 }}
           animate={{ opacity: 1, scaleY: 1 }}
           exit={{ opacity: 0, position: "absolute", right: 10, scaleY: 1 }} 
           transition={{duration: .2}}onClick={() => setbars(!bars)}><HiOutlineBars3 /></motion.h2> }
                   </AnimatePresence>
       <AnimatePresence>
            {bars && <motion.h2
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, position: "absolute", right: 10, scale: 0 }} 
           transition={{duration: .2}}onClick={() => setbars(!bars)}><HiOutlineXMark /></motion.h2> }
           </AnimatePresence>
           <AnimatePresence>
           {bars && <motion.div         
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }} 
             transition={{duration: .2}}
        className="bars-container">
                <a href="/gallery">HOME</a>
                <a href="/gallery/about">ABOUT</a>
                <a href="https://be234.github.io/portfolio/" target="_blank">PORTFOLIO</a>
                <div className="container">
                <h6><FaBehance /></h6>
                <h6><FaTwitter /></h6>
                <h6><FaInstagram /></h6>
                <h6><FaFacebookSquare /></h6>
                {/* <h6 style={(window.location.href.indexOf("sub") > -1) ? {"padding-top": 100} : {"padding-top": 10}}><GoMail /></h6> */}
            </div>
           </motion.div>}
           </AnimatePresence>
           </>
           }
        </motion.nav>
     );
}
 
export default Navbar;