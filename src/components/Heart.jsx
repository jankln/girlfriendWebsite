import { motion } from 'framer-motion'

const Heart = () => {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ 
          fontSize: '10rem',
          filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.5))',
          lineHeight: 1
        }}
      >
        💙
      </motion.div>
    </div>
  )
}

export default Heart
