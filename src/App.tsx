import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/hero.png'

/* ── Extreme Rain ── */
function Rain() {
  const drops = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${0.4 + Math.random() * 0.8}s`,
    opacity: 0.05 + Math.random() * 0.2,
    height: `${50 + Math.random() * 100}px`
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {drops.map((d) => (
        <div
          key={d.id}
          className="absolute w-[1px] bg-accent animate-rain"
          style={{
            left: d.left,
            top: '-150px',
            height: d.height,
            animationDelay: d.delay,
            animationDuration: d.duration,
            opacity: d.opacity,
            boxShadow: `0 0 10px ${d.opacity > 0.15 ? 'var(--color-accent)' : 'transparent'}`
          }}
        />
      ))}
    </div>
  )
}

/* ── Cyber Terminal Logs ── */
function CyberTerminal() {
  const [logs, setLogs] = useState<string[]>([])
  const logMessages = [
    "INITIALIZING_NEURAL_LINK...",
    "ACCESS_GRANTED: DISTRICT_7",
    "ENCRYPTING_DATA_STREAM...",
    "BYPASSING_FIREWALL_v4.2...",
    "UPLINK_ESTABLISHED",
    "SCANNING_FOR_INTRUDERS...",
    "SYSTEM_STABLE: 100%",
    "NEON_CORE_ONLINE"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const nextLog = logMessages[Math.floor(Math.random() * logMessages.length)]
        return [...prev.slice(-5), `> ${nextLog}`]
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-24 left-8 z-50 font-mono text-[9px] text-accent/60 space-y-1 pointer-events-none hidden md:block">
      {logs.map((log, i) => (
        <div key={i} className="animate-flicker" style={{ opacity: (i + 1) / logs.length }}>
          {log}
        </div>
      ))}
    </div>
  )
}

/* ── Scanning Line ── */
function ScanningLine() {
  return (
    <div className="fixed left-0 right-0 h-[2px] bg-accent/20 shadow-[0_0_15px_rgba(0,245,255,0.5)] z-50 pointer-events-none animate-scanning" />
  )
}

/* ── Notification ── */
function Notification() {
  return (
    <div className="fixed top-8 right-8 z-[100] animate-flicker group cursor-default">
      <div className="w-[250px] h-[60px] bg-black/70 backdrop-blur-xl rounded-xl p-2 px-4 text-center shadow-[inset_2px_2px_0px_1px_rgba(255,0,0,0.5),inset_-2px_-2px_0px_1px_rgba(255,0,0,0.8),0px_10px_30px_rgba(0,0,0,0.5)] border border-primary/30 transition-transform group-hover:scale-105">
        <span className="text-[10px] uppercase tracking-[0.2em] text-text/80">Congratulations Champion!</span>
        <div className="flex justify-center mt-1 gap-1 items-center">
          <div className="text-[25px] leading-[25px] animate-bounce text-primary">↑</div>
          <div className="font-heading uppercase tracking-[2px] text-[22px] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Level 10</div>
          <div className="text-[25px] leading-[25px] animate-bounce text-primary">↑</div>
        </div>
      </div>
    </div>
  )
}

/* ── Glitch Text ── */
function GlitchText({ text }: { text: string }) {
  return (
    <div className="relative inline-block group">
      <h1 className="text-8xl md:text-[10rem] font-heading text-white relative z-10 animate-flicker tracking-tighter leading-none">
        {text}
      </h1>
      <h1 className="text-8xl md:text-[10rem] font-heading text-primary absolute inset-0 -z-10 translate-x-[4px] translate-y-[2px] opacity-70 group-hover:animate-glitch select-none">
        {text}
      </h1>
      <h1 className="text-8xl md:text-[10rem] font-heading text-accent absolute inset-0 -z-10 -translate-x-[4px] -translate-y-[2px] opacity-70 group-hover:animate-glitch animation-delay-150 select-none">
        {text}
      </h1>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay z-20 pointer-events-none" />
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [isHacking, setIsHacking] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    setCount(c => c + 1)
    setIsHacking(true)
    setTimeout(() => setIsHacking(false), 300)
  }

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300 ${isHacking ? 'bg-primary/10' : 'bg-background'}`}
    >
      {/* Background & Overlays */}
      <div className="grid-overlay opacity-50" />
      <div className="scanlines" />
      <div className="noise" />
      <Rain />
      <ScanningLine />
      <CyberTerminal />
      <Notification />

      {/* Extreme Background Decor */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="fixed -bottom-32 -left-32 w-96 h-96 border border-accent/5 rounded-full animate-float-slow" />
      <div className="fixed -top-32 -right-32 w-96 h-96 border border-primary/5 rounded-full animate-float-slow [animation-delay:2s]" />

      {/* HUD Corners */}
      <div className="fixed top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-accent/40 z-50 before:content-['STATUS:OK'] before:absolute before:top-0 before:left-4 before:text-[8px] before:font-mono before:text-accent/60" />
      <div className="fixed top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-accent/40 z-50 after:content-['SECURE:YES'] after:absolute after:top-0 after:right-4 after:text-[8px] after:font-mono after:text-accent/60" />
      <div className="fixed bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-accent/40 z-50 before:content-['COORD:0x35'] before:absolute before:bottom-0 before:left-4 before:text-[8px] before:font-mono before:text-accent/60" />
      <div className="fixed bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-accent/40 z-50 after:content-['LINK:ACTIVE'] after:absolute after:bottom-0 after:right-4 after:text-[8px] after:font-mono after:text-accent/60" />

      {/* Main Content */}
      <main className={`relative z-10 flex flex-col items-center gap-6 max-w-5xl w-full transition-transform duration-300 ${isHacking ? 'scale-105' : 'scale-100'}`}>
        
        {/* Animated Badge */}
        <div className="group relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-3 px-6 py-2 bg-black/40 border border-primary/40 rounded-sm overflow-hidden group-hover:border-primary">
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#ff006e] animate-ping" />
            <span className="text-xs font-mono tracking-[0.4em] text-primary uppercase">District 7 — Live Stream</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative py-8">
          {/* Hero Image Container */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full scale-125 animate-pulse-slow opacity-50" />
            <img 
              src={heroImg} 
              alt="Hero" 
              className="w-56 md:w-72 relative z-10 drop-shadow-[0_0_50px_rgba(255,0,110,0.4)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
            {/* Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/10 rounded-full animate-spin [animation-duration:20s] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-primary/10 rounded-full animate-spin [animation-duration:30s] direction-reverse pointer-events-none" />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center space-y-4">
          <GlitchText text="NOIR" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-accent font-mono tracking-[0.6em] text-sm md:text-lg opacity-90 uppercase animate-flicker">
              The city never sleeps.
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>

        {/* Interaction Area */}
        <div className="flex flex-col items-center gap-8 mt-4">
          <button
            onClick={handleEnter}
            className="group relative px-16 py-5 bg-transparent transition-all duration-300 active:scale-90 overflow-hidden"
          >
            {/* Multi-layered Borders */}
            <div className="absolute inset-0 border border-accent/20 group-hover:border-accent/40 transition-colors" />
            <div className="absolute -inset-[1px] border border-accent/0 group-hover:border-accent/20 transition-colors" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent shadow-[0_0_10px_var(--color-accent)]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent shadow-[0_0_10px_var(--color-accent)]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent shadow-[0_0_10px_var(--color-accent)]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent shadow-[0_0_10px_var(--color-accent)]" />
            
            {/* Background Glitch Effect */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-transform duration-500" />
            
            <span className="relative z-10 text-accent font-heading text-3xl tracking-[0.3em] drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]">
              ENTER_ <span className="text-primary group-hover:animate-glitch inline-block">{count}</span>
            </span>
          </button>

          {/* System Footer Info */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-mono tracking-widest text-muted uppercase">
            <div className="flex items-center gap-2 hover:text-accent cursor-pointer transition-colors group">
              <span className="w-1.5 h-1.5 bg-accent/40 rounded-full group-hover:bg-accent animate-pulse" />
              // PROTOCOL_v1.35.0
            </div>
            <div className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors group">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary animate-pulse" />
              // NEURAL_LINK_ESTABLISHED
            </div>
            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors group">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white animate-pulse" />
              // SYSTEM_READY
            </div>
          </div>
        </div>
      </main>

      {/* Floating UI Elements */}
      <div className="fixed bottom-8 left-8 right-8 z-10 flex justify-between items-end pointer-events-none">
        <div className="space-y-2 group pointer-events-auto cursor-help">
          <div className="h-[1px] w-32 bg-gradient-to-r from-accent/40 to-transparent" />
          <p className="text-[9px] font-mono text-muted tracking-[0.2em] uppercase group-hover:text-accent transition-colors">
            Node: <span className="text-accent/60">AXON-35-GENESIS</span>
          </p>
          <p className="text-[9px] font-mono text-muted tracking-[0.2em] uppercase">
            Uptime: <span className="text-accent/60">99.998%</span>
          </p>
        </div>
        
        <div className="text-right space-y-2 group pointer-events-auto cursor-help">
          <p className="text-[9px] font-mono text-muted tracking-[0.2em] uppercase group-hover:text-primary transition-colors">
            Identity: <span className="text-primary/60">ANONYMOUS_GHOST</span>
          </p>
          <p className="text-[9px] font-mono text-muted tracking-[0.2em] uppercase">
            Session: <span className="text-primary/60">0x{Math.random().toString(16).slice(2, 8).toUpperCase()}</span>
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-l from-primary/40 to-transparent ml-auto" />
        </div>
      </div>

      {/* Distortion Filters */}
      <svg className="hidden">
        <defs>
          <filter id="glitch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default App
