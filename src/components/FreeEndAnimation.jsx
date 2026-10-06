import { useMemo } from 'react'

// 2 second "dragon egg + rising ender particles" overlay
const EGG = ['..XX..', '.XXXX.', 'XXXXXX', 'XXXXXX', 'XXXXXX', '.XXXX.']

export default function FreeEndAnimation() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        size: 6 + Math.floor(Math.random() * 3) * 6,
        delay: Math.random() * 0.8,
        duration: 1 + Math.random() * 0.9,
        color: ['#a070ff', '#d9b3ff', '#ff00ff', '#6b3fd1'][Math.floor(Math.random() * 4)],
      })),
    [],
  )

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden bg-[#05000a] [animation:mc-overlay_2s_ease-in-out_forwards]">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `mc-rise ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div className="[animation:mc-bob_0.7s_ease-in-out_infinite]">
          {EGG.map((row, r) => (
            <div key={r} className="flex">
              {row.split('').map((c, i) => (
                <span
                  key={i}
                  className="block h-6 w-6 md:h-8 md:w-8"
                  style={{
                    backgroundColor: c === 'X' ? ((r + i) % 3 === 0 ? '#a070ff' : '#0d0012') : 'transparent',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <p className="px-4 text-center text-[2.4rem] text-[#d9b3ff] md:text-[3rem]">Freeing the End...</p>
      </div>

      <div className="absolute inset-0 bg-white [animation:mc-flash_2s_ease-out_forwards]" />
    </div>
  )
}
