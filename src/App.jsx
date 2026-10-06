import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Socials from './components/Socials'
import AchievementToast from './components/AchievementToast'
import FreeEndAnimation from './components/FreeEndAnimation'
import Home from './pages/Home'
import Nether from './pages/Nether'
import End from './pages/End'

const STORAGE_KEY = 'minefolio-achievements'

export const ACHIEVEMENTS = {
  overworld: { title: 'Overworld', desc: 'You have unlocked the overworld' },
  nether: { title: 'We need to go deeper', desc: 'Enter the Nether' },
  end: { title: 'The End?', desc: 'Enter the End' },
  free: { title: 'Free the End', desc: 'Complete your journey' },
}
const TOTAL = Object.keys(ACHIEVEMENTS).length

// which achievement each page grants the first time it is visited
const PAGE_ACHIEVEMENT = { home: 'overworld', nether: 'nether', end: 'end' }

function loadUnlocked() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved.filter((id) => id in ACHIEVEMENTS) : []
  } catch {
    return []
  }
}

export default function App() {
  const [page, setPage] = useState('home') // 'home' | 'nether' | 'end'
  const [unlocked, setUnlocked] = useState(loadUnlocked)
  const [toast, setToast] = useState(null)
  const [freeing, setFreeing] = useState(false)

  // ref mirrors state so unlock() is safe even if an effect runs twice (StrictMode)
  const unlockedRef = useRef(unlocked)
  const toastTimer = useRef(null)

  const unlock = useCallback((id) => {
    if (!id || unlockedRef.current.includes(id)) return
    const next = [...unlockedRef.current, id]
    unlockedRef.current = next
    setUnlocked(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* storage unavailable, keep going in memory */
    }
    setToast({ ...ACHIEVEMENTS[id], key: Date.now() })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 4500)
  }, [])

  // visiting a page (button OR header tab) unlocks its achievement
  useEffect(() => {
    unlock(PAGE_ACHIEVEMENT[page])
    window.scrollTo(0, 0)
  }, [page, unlock])

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const startFreeEnd = () => {
    if (freeing) return
    setFreeing(true)
    setTimeout(() => {
      setFreeing(false)
      unlock('free')
      setPage('home')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Header page={page} onNavigate={setPage} count={unlocked.length} total={TOTAL} />
      <main className="relative w-full">
        {page === 'home' && <Home onNext={() => setPage('nether')} />}
        {page === 'nether' && <Nether onNext={() => setPage('end')} />}
        {page === 'end' && <End onFinish={startFreeEnd} />}
      </main>
      <Socials />
      <AchievementToast toast={toast} />
      {freeing && <FreeEndAnimation />}
    </div>
  )
}
