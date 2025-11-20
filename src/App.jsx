import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Countdown from './components/Countdown'
import Heart from './components/Heart'
import LoveClicker from './components/LoveClicker'

function App() {
  const [started, setStarted] = useState(false)
  const [isZooming, setIsZooming] = useState(false)

  const handleStart = () => {
    if (isZooming) return
    setIsZooming(true)
    setTimeout(() => {
      setStarted(true)
    }, 800)
  }

  return (
    <>
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
                  className="script-font"
                  style={{ 
                    marginTop: '2rem', 
                    fontSize: '2rem', 
                    color: 'var(--color-stitch-light)',
                    opacity: 0.8,
                    position: 'absolute',
                    bottom: '20%',
                    pointerEvents: 'none',
                    textShadow: '2px 2px 0px #000'
                  }}
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
          style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem',
            gap: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <LoveClicker /> {/* Background floating hearts */}
          
          <header style={{ textAlign: 'center', zIndex: 10 }}>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.5' }}
            >
              OHANA MEANS FAMILY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="script-font"
              style={{ fontSize: '2rem', color: 'var(--color-stitch-light)' }}
            >
              FAMILY MEANS NO ONE GETS LEFT BEHIND OR FORGOTTEN 💙
            </motion.p>
          </header>

          <main style={{ 
            width: '100%', 
            maxWidth: '800px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '4rem', 
            alignItems: 'center', 
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '3rem',
            border: '8px solid var(--color-gold)',
            borderImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0zm10 10h10v10H10zm10 10h10v10H20z\' fill=\'%23F6C48B\' fill-opacity=\'0.4\'/%3E%3C/svg%3E") 30 round',
            boxShadow: '0 0 0 4px var(--color-bg), 0 0 0 8px var(--color-stitch-blue)'
          }}>
            <section>
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
