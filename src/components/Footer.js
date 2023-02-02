import { motion } from "framer-motion";


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
  
const Footer = () => {
    return ( 
        <motion.footer className="footer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div>
            <p>Cairo, Egypt | © 2021 GEBALY PHOTOGRAPHY</p>
            <p>Built by, Belal Elgebaly</p>
            </div>
        </motion.footer>
     );
}
 
export default Footer;