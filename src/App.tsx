import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Floating particles ── */
function Particles() {
  const colors = ['#00f5ff', '#bf00ff', '#ff006e', '#00ff88', '#ffee00']
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${8 + Math.random() * 12}s`,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: `${1 + Math.random() * 3}px`,
  }))

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            animationDelay: p.delay,
            animationDuration: p.duration,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}

/* ── Corner decorations ── */
function Corners() {
  return (
    <>
      <div className="corner-tl" aria-hidden="true" />
      <div className="corner-tr" aria-hidden="true" />
      <div className="corner-bl" aria-hidden="true" />
      <div className="corner-br" aria-hidden="true" />
    </>
  )
}

/* ── Animated counter number ── */
function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.4)'
    el.style.color = '#ff006e'
    el.style.textShadow = '0 0 20px #ff006e'
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)'
      el.style.color = ''
      el.style.textShadow = ''
    }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span
      ref={ref}
      className="counter-num"
      style={{ transition: 'all 0.2s ease' }}
    >
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Particles />
      <Corners />

      {/* ── Hero section ── */}
      <section id="center">
        <div className="hero-badge animate-in-1">
          <span className="dot" />
          SYSTEM ONLINE — VITE + REACT
        </div>

        <div className="hero animate-in-2">
          <img src={heroImg} className="base" width="160" height="168" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div className="animate-in-3">
          <h1 className="glitch" data-text="GET STARTED">
            GET STARTED
          </h1>
          <div className="neon-line" />
        </div>

        <p className="subtitle animate-in-4">
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>

        <button
          type="button"
          className="counter animate-in-5"
          onClick={() => setCount((c) => c + 1)}
        >
          COUNT_
          <CounterNum value={count} />
        </button>
      </section>

      <div className="ticks" />

      {/* ── Next steps ── */}
      <section id="next-steps">
        <div id="docs">
          <div className="section-icon-wrap">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon" />
            </svg>
          </div>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn More
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <div className="section-icon-wrap">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon" />
            </svg>
          </div>
          <h2>Connect With Us</h2>
          <p>Join the Vite X-Template Community</p>
          <ul>
            <li>
              <a href="https://github.com/Ex2-Axon/x-template" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/8Zeq8VCU" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon" />
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/Microtronic2" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon" />
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/microtronic.bsky.social" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon" />
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks" />

      <section id="spacer">
        <span className="footer-text">// SYSTEM v1.0.0 — READY</span>
      </section>
    </>
  )
}

export default App
