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

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 1rem'
  }

  const numberStyle = {
    fontSize: '2.5rem',
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-burgundy)'
  }

  const labelStyle = {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.8,
    color: 'var(--color-burgundy)'
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'center' }}
    >
      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-script)', fontSize: '2rem', color: 'var(--color-burgundy)' }}>Wir sind zusammen seit...</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={itemStyle}>
          <span style={numberStyle}>{timeElapsed.days}</span>
          <span style={labelStyle}>Tagen</span>
        </div>
        <div style={itemStyle}>
          <span style={numberStyle}>{timeElapsed.hours}</span>
          <span style={labelStyle}>Stunden</span>
        </div>
        <div style={itemStyle}>
          <span style={numberStyle}>{timeElapsed.minutes}</span>
          <span style={labelStyle}>Minuten</span>
        </div>
        <div style={itemStyle}>
          <span style={numberStyle}>{timeElapsed.seconds}</span>
          <span style={labelStyle}>Sekunden</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Countdown
