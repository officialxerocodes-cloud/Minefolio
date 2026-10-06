import { useEffect, useRef, useState } from 'react'

// `page` is the id the app uses; each tab maps to one page
const TABS = [
  {
    page: 'home',
    label: 'Home',
    active: 'bg-[#7fbc42] border-[#5a8731] text-white',
    inactive: 'bg-[#3e5c22] border-[#2d4515] text-[#cfd8c3] hover:bg-[#4d7229]',
  },
  {
    page: 'nether',
    label: 'Education',
    active: 'bg-[#bc4242] border-[#872222] text-white',
    inactive: 'bg-[#5a1e1e] border-[#3a1212] text-[#e0b4b4] hover:bg-[#702828]',
  },
  {
    page: 'end',
    label: 'Projects',
    active: 'bg-[#d9d688] border-[#a8a658] text-black',
    inactive: 'bg-[#6e6c3a] border-[#4a4826] text-[#e6e4b5] hover:bg-[#838048]',
  },
]

export default function Header({ page, onNavigate, count, total }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // close the mobile menu when clicking outside the header
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  const go = (target) => {
    setMenuOpen(false)
    onNavigate(target)
  }

  return (
    <header>
      <nav
        ref={navRef}
        className="relative z-100 flex h-[10vh] min-h-[64px] w-full items-center justify-between border border-[#3d3d3d] bg-black/80 px-[5%]"
      >
        <div className="flex flex-col items-center">
          <h3 className="w-full text-[2rem] font-normal leading-none text-white">Minefolio</h3>
          <p className="text-[1.2rem] text-[#aaaaaa]">Minecraft+portfolio</p>
        </div>

        {/* tabs: row on desktop, dropdown on mobile */}
        <div
          className={`${menuOpen ? 'flex' : 'hidden'} absolute top-full left-0 z-25 w-full flex-col gap-1 border-b-2 border-[#3d3d3d] bg-black py-2
            min-[901px]:static min-[901px]:flex min-[901px]:w-auto min-[901px]:flex-row min-[901px]:gap-4 min-[901px]:border-0 min-[901px]:bg-transparent min-[901px]:p-0`}
        >
          {TABS.map((tab) => (
            <div
              key={tab.page}
              onClick={() => go(tab.page)}
              className={`cursor-pointer border-2 px-6 py-3 text-center text-[1.2rem] transition-colors duration-300 min-[901px]:px-[25px] min-[901px]:py-[15px]
                ${page === tab.page ? tab.active : tab.inactive}`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex cursor-pointer items-center gap-2.5 border-2 border-[#5a5a5a] bg-[#8b8b8b] px-4 py-2.5 text-[1.2rem] text-[#2c2b2b] transition-colors duration-300 hover:bg-[#a0a0a0] min-[901px]:px-[25px] min-[901px]:py-[15px]">
            <i className="fa-solid fa-trophy text-black" />
            <span className="text-[#2c2b2b]">
              {count}/{total}
            </span>
          </div>

          <button
            className="cursor-pointer p-2.5 text-[1.8rem] text-white min-[901px]:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </nav>
    </header>
  )
}
