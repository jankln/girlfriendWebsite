import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Countdown from './components/Countdown'
import Heart from './components/Heart'
import LoveClicker from './components/LoveClicker'

function App() {
  const [started, setStarted] = useState(false)
  const [isZooming, setIsZooming] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const handleStart = () => {
    if (isZooming) return
    setIsZooming(true)
    
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.play().catch(e => console.log("Audio play failed:", e))
    }

    setTimeout(() => {
      setStarted(true)
    }, 800)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/backgroudSong.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {!started && (
          <motion.div 
            key="intro"
            onClick={handleStart}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              background: 'var(--color-bg)',
              zIndex: 50,
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{ pointerEvents: 'none' }}
              animate={isZooming ? { 
                scale: 30,
                opacity: 0 
              } : { 
                scale: 1,
                opacity: 1
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut"
              }}
            >
              <Heart />
            </motion.div>
            
            <AnimatePresence>
              {!isZooming && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="script-font intro-text"
                >
                  PRESS START
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="responsive-container"
        >
          <button 
            onClick={toggleMute}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 100,
              background: 'rgba(0,0,0,0.5)',
              border: '2px solid var(--color-stitch-blue)',
              color: 'white',
              padding: '0',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          <LoveClicker /> {/* Background floating hearts */}
          
          <header className="responsive-header">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              OHANA MEANS FAMILY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="script-font"
            >
              FAMILY MEANS NO ONE GETS LEFT BEHIND OR FORGOTTEN 💙
            </motion.p>
          </header>

          <main className="responsive-main-box">
            <section style={{ width: '100%' }}>
              <Countdown />
            </section>
          </main>

          <footer style={{ marginTop: 'auto', padding: '2rem', opacity: 0.7, fontSize: '1.2rem', zIndex: 10 }}>
            <p>für mein boo</p>
          </footer>
        </motion.div>
      )}
    </>
  )
}

export default App
