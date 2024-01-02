import { motion } from 'framer-motion';
import { buttonClick } from '../utils';

const AnimatedButton = ({children, className}) => {
  return (
    <motion.button whileTap={buttonClick} className={className}>
        {children}
    </motion.button>
  )
}

export default AnimatedButton