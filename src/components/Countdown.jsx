import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
  // Placeholder date - should be configurable
  const anniversaryDate = new Date('2023-01-01T00:00:00') 
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = now - anniversaryDate
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeElapsed({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="countdown-wrapper"
    >
      <h2 className="countdown-title">
        Ich liebe dich unendlich +1 seit:
      </h2>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">{timeElapsed.days}</span>
          <span className="countdown-label">Tagen</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeElapsed.hours}</span>
          <span className="countdown-label">Stunden</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeElapsed.minutes}</span>
          <span className="countdown-label">Minuten</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeElapsed.seconds}</span>
          <span className="countdown-label">Sekunden</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Countdown
