import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        // y: "-110vh",
        opacity: 0
    },
    visible: {
        // y: 0,
        opacity: 1,
        transition: { delay: 0.5}
    }
}


const Modal = ({ showModal, setShowModal, modalImage }) => {
    const changeShow = () => {
        setShowModal(false);
    }
    return ( 
        <AnimatePresence>
            { showModal && (
                <motion.div className='backdrop'
                variants={backdrop}
                initial="hidden"
                animate="visible"
                onClick={changeShow}
                exit="hidden"
                >
                    <motion.div className='modal'
                    variants={modal}
                    >
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + modalImage} alt="" />
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
     );
}
 
export default Modal;