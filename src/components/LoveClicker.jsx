import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  "Du bist meine Baddie!",
  "Ich liebe dein Lachen.",
  "Du bist sexy.",
  "Du bist mein Zuhause.",
  "Mein Herz gehört dir.",
  "Ich vermisse dich...",
  "Mein Ein und Alles.",
  "Ich Liebe dich!",
  "Traumfrau ❤️"
]

const LoveClicker = () => {
  const [hearts, setHearts] = useState([])
  const [explosions, setExplosions] = useState([])
  const [floatingTexts, setFloatingTexts] = useState([])

  // Spawn hearts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random()
      const startX = Math.random() * 100 // percentage
      const duration = 5 + Math.random() * 5 // 5-10 seconds float time
      
      setHearts(prev => [...prev, { id, startX, duration }])

      // Cleanup old hearts
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, duration * 1000)
    }, 800) // Slightly faster spawn

    return () => clearInterval(interval)
  }, [])

  const handleHeartClick = (id, e) => {
    e.stopPropagation() // Prevent triggering other clicks
    setHearts(prev => prev.filter(h => h.id !== id))
    
    // Create explosion at click coordinates
    const explosionId = Date.now()
    setExplosions(prev => [...prev, { id: explosionId, x: e.clientX, y: e.clientY }])
    setTimeout(() => {
      setExplosions(prev => prev.filter(ex => ex.id !== explosionId))
    }, 1000)

    // Show floating text on click
    const textId = Date.now() + Math.random()
    const text = messages[Math.floor(Math.random() * messages.length)]
    const x = Math.random() * 80 + 10 // 10-90%
    const y = Math.random() * 80 + 10 // 10-90%
    
    setFloatingTexts(prev => [...prev, { id: textId, text, x, y }])

    setTimeout(() => {
      setFloatingTexts(prev => prev.filter(t => t.id !== textId))
    }, 4000)
  }

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      overflow: 'hidden'
    }}>
      {/* Background Floating Texts */}
      <AnimatePresence>
        {floatingTexts.map(text => (
          <motion.div
            key={text.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }} // Very subtle opacity
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2 }}
            style={{
              position: 'absolute',
              left: `${text.x}%`,
              top: `${text.y}%`,
              fontFamily: 'var(--font-script)',
              fontSize: '2.5rem',
              color: 'var(--color-gold)',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              zIndex: 0
            }}
          >
            {text.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Hearts */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', x: `${heart.startX}vw`, opacity: 0, scale: 0.5 }}
            animate={{ y: '-10vh', opacity: 1, scale: 1 }}
            exit={{ scale: 0, opacity: 0 }} // Shrink on exit (handled by explosion visual)
            transition={{ duration: heart.duration, ease: "linear" }}
            onClick={(e) => handleHeartClick(heart.id, e)}
            style={{
              position: 'absolute',
              cursor: 'pointer',
              pointerEvents: 'auto',
              fontSize: '2.5rem',
              color: 'var(--color-burgundy)',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
              zIndex: 10
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Explosions */}
      {explosions.map(ex => (
        <div 
          key={ex.id} 
          style={{ 
            position: 'fixed', 
            left: ex.x, 
            top: ex.y, 
            pointerEvents: 'none',
            zIndex: 20
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ 
                x: (Math.random() - 0.5) * 200, 
                y: (Math.random() - 0.5) * 200, 
                opacity: 0, 
                scale: 0 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: i % 2 === 0 ? 'var(--color-gold)' : 'var(--color-burgundy)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255,215,0,0.8)'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default LoveClicker
