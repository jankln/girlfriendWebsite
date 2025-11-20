import { motion } from 'framer-motion'

const Heart = () => {
  return (
    <div className="intro-heart-container">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="intro-heart"
      >
        💙
      </motion.div>
    </div>
  )
}

export default Heart
