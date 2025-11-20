import { motion } from 'framer-motion'

const Heart = () => {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 24 24"
        fill="var(--color-burgundy)"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ filter: 'drop-shadow(0px 10px 20px rgba(106, 27, 77, 0.3))' }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>
      
      {/* Particle effects could be added here */}
    </div>
  )
}

export default Heart
