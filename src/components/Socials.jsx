import { useState } from 'react'

const LINKS = [
  {
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/anuraj-kashyap-b389aa383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/officialxerocodes-cloud',
  },
]

export default function Socials() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed top-[80%] right-[5%] z-110 flex aspect-square w-[12%] cursor-pointer items-center justify-center border-2 border-[#5a2f5a] bg-[#1a0f1a] shadow-[0_0_0_3px_#0a050a] transition-colors duration-300 hover:border-[#694069] hover:bg-[#382638]
          md:top-[20%] md:right-[2%] md:m-4 md:w-[4%] md:min-w-[56px]"
        aria-label="Social links"
      >
        <i className="fa-solid fa-cube text-[2rem] text-[#a070ff]" />
      </button>

      {open && (
        <section
          className="fixed top-0 left-0 z-[120] flex min-h-screen w-full items-center justify-center bg-black/50"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="flex w-[85%] flex-col items-center border-4 border-[#373737] bg-[#c6c6c6] pb-4 shadow-[inset_0_0_0_4px_#fff] md:w-1/4 md:min-w-[320px]">
            <h2 className="my-4 w-full text-center text-[2.2rem] font-medium tracking-wide text-black [text-shadow:0_4px_0_#7a7a7a] md:text-[2.8rem]">
              Social Links
            </h2>
            {LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => window.open(l.url, '_blank')}
                className="my-4 flex w-[90%] cursor-pointer items-center justify-center gap-2 rounded-[5px] border-[3px] border-[#373737] bg-[#8b8b8b] px-4 py-4 text-[1.2rem] text-black shadow-[0_4px_0_0_#000] transition-colors duration-300 hover:bg-[#a1a0a0] md:w-[70%] md:px-[25px] md:py-5 md:text-[1.5rem]"
              >
                <i className={`${l.icon} text-[1.5rem] text-black`} />
                {l.label}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
