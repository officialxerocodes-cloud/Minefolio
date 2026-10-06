import { useState } from 'react'

const PROJECTS = [
  {
    icon: 'fa-money-bills',
    title: 'Currency Converter',
    text: 'Real-time currency converter supporting 150+ currencies via API integration, featuring an interactive background powered by tsParticles.',
    url: 'https://currency-converter-lake-iota.vercel.app/',
  },
  {
    icon: 'fa-chart-line',
    title: 'Finance Tracker',
    text: 'A personal finance app that tracks income and expenses, categorizes transactions, and visualizes spending insights using Chart.js.',
    url: 'https://officialxerocodes-cloud.github.io/D-Code-/',
  },
  {
    icon: 'fa-code-branch',
    title: 'Demo website for Innovision',
    text: 'Built a demo event website featuring a live countdown timer using JavaScript Date & Time objects to track the exact time remaining until the event.',
    url: 'https://officialxerocodes-cloud.github.io/Enactus/',
  },
  {
    icon: 'fa-brain',
    title: 'eCell Website',
    text: 'Developed a responsive website for eCell using HTML and CSS, focusing on clean design and structured layout.',
    url: 'https://officialxerocodes-cloud.github.io/eCell/',
  },
]

// Minecraft-style bevelled stone button: light top/left edge, dark bottom/right edge, black outline, no box-shadow
const MC_BTN =
  'cursor-pointer border-[3px] border-t-[#b9b9b9] border-l-[#b9b9b9] border-b-[#3b3b3b] border-r-[#3b3b3b] bg-[#6f6f6f] text-white outline-2 outline-black [text-shadow:2px_2px_0_#2a2a2a] transition-colors duration-150 hover:bg-[#7a86c4] active:border-t-[#3b3b3b] active:border-l-[#3b3b3b] active:border-b-[#b9b9b9] active:border-r-[#b9b9b9]'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className="my-[15px] flex min-h-[150px] w-full cursor-pointer flex-col items-start gap-[25px] border-[3px] border-[#a8a658] bg-[#d9d688] p-5 shadow-[0_15px_15px_-10px_#787638] transition-colors duration-200 hover:border-[#8f8d48] hover:bg-[#e4e19d] md:flex-row md:items-center md:px-[30px] md:py-[25px]"
    >
      <div className="flex flex-col items-center justify-center px-0 py-[5px] text-[1.8rem]">
        <i className={`fa-solid ${project.icon} text-[#545428]`} />
      </div>
      <div className="flex w-full flex-col items-start justify-between text-left">
        <h4 className="mb-[0.4rem] w-full text-[1.5rem] font-medium text-black md:text-[1.8rem]">{project.title}</h4>
        {open && (
          <>
            <p className="mb-[0.4rem] w-full text-[1.2rem] text-[#545428] md:text-[1.4rem]">{project.text}</p>
            <div className="flex w-full items-end justify-start">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.url, '_blank')
                }}
                className={`${MC_BTN} flex items-center justify-center gap-[5px] px-[25px] py-2.5 text-base font-medium`}
              >
                Visit
                <i className="fa-solid fa-up-right-from-square text-[0.8rem]" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function End({ onFinish }) {
  return (
    <section className="flex min-h-[90vh] w-full justify-center bg-[radial-gradient(circle_at_50%_30%,#1a0033_0%,#0a0014_35%,#000_70%)] px-4 py-10 shadow-[inset_0_0_200px_rgba(160,112,255,0.15)] md:p-10">
      <div className="flex w-[90%] flex-col md:w-3/5">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-[1.2rem] w-full text-center text-[2.8rem] font-medium text-[#a070ff] md:text-[3.8rem]">
            The End
          </h1>
          <p className="mb-[1.2rem] w-full text-center text-[1.4rem] text-[#d9d688] md:text-[1.8rem]">
            The final dimension-Explore my projects
          </p>
        </div>

        <div className="my-5 flex w-full flex-col items-start justify-center">
          <h2 className="my-[1.2rem] w-full text-center text-[2.2rem] font-medium text-[#a070ff] md:text-[2.5rem]">
            Projects
          </h2>
          <div className="my-[15px] grid w-full grid-cols-1 items-start gap-x-[6%] md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        <div className="my-5 flex w-full flex-col items-center justify-center">
          <h2 className="my-4 w-full text-center text-[2.2rem] font-medium text-[#ff00ff] [animation:blink_1.5s_infinite] md:text-[2.8rem]">
            The Final Challenge
          </h2>
          <p className="mb-[0.4rem] w-full text-center text-[1.3rem] md:text-[1.6rem]">
            Have you explored everything? Complete your journey!
          </p>
          <div className="my-[1.2rem] flex w-full items-center justify-center">
            <button
              onClick={onFinish}
              className={`${MC_BTN} w-full px-[25px] py-5 text-[1.2rem] font-medium md:w-3/5 md:text-[1.5rem]`}
            >
              Complete Your Journey
              <i className="fa-solid fa-arrow-right ml-2 text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
