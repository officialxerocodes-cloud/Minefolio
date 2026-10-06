const SKILLS = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'C++', 'Python', 'Learning Tailwind CSS and React']
const LIBRARIES = ['GSAP', 'Chart.js', 'tsParticles']

const H2 = 'mb-[1.2rem] w-full text-[2.2rem] font-medium md:text-[2.8rem]'

function Steve() {
  const block = 'border-[5px] border-black'
  return (
    <div className="mx-auto flex h-[450px] w-3/5 cursor-pointer flex-col items-center justify-center border-2 border-black bg-linear-to-b from-[#0d94aa] to-[#2e5d8a] transition-transform duration-300 hover:scale-[1.01] md:mx-0 md:h-full md:w-1/4">
      {/* head */}
      <div className="flex h-1/4 w-1/2 items-center justify-center">
        <div className={`${block} flex h-[90%] w-full flex-col items-center justify-center bg-[#d4a574]`}>
          <div className="flex h-1/2 w-1/2 items-start justify-between">
            <div className="h-2.5 w-2.5 bg-[#0d94aa]" />
            <div className="h-2.5 w-2.5 bg-[#0d94aa]" />
          </div>
          <div className="h-[10%] w-1/2 bg-[#1f7c8a]" />
        </div>
      </div>
      {/* body */}
      <div className="h-1/2 w-4/5">
        <div className="flex h-full w-full items-center justify-between gap-[5%]">
          <div className={`${block} h-full w-[15%] bg-[#0d94aa]`} />
          <div className={`${block} h-full w-3/5 bg-[#0d94aa]`} />
          <div className={`${block} h-full w-[15%] bg-[#0d94aa]`} />
        </div>
      </div>
      {/* legs */}
      <div className="flex h-1/4 w-4/5 items-center justify-center">
        <div className="flex h-[90%] w-3/5 items-center justify-between gap-[10%]">
          <div className={`${block} h-full w-[35%] bg-[#2e3a8a]`} />
          <div className={`${block} h-full w-[35%] bg-[#2e3a8a]`} />
        </div>
      </div>
    </div>
  )
}

export default function Home({ onNext }) {
  return (
    <section className="flex min-h-[90vh] w-full justify-center bg-linear-to-b from-[#87CEEB] to-[#7fbc42] px-4 py-10 md:p-10">
      <div className="flex w-[90%] flex-col md:w-3/5">
        {/* hero */}
        <div className="flex w-full flex-col justify-between gap-5 md:h-[40vh] md:flex-row md:gap-0">
          <div className="flex w-full flex-col items-center justify-center md:h-full md:w-[72%]">
            <h1 className="mb-4 w-full text-[2.8rem] font-medium md:text-[3.8rem]">Welcome to the overworld</h1>
            <p className="w-full text-[1.2rem] font-medium md:text-[1.5rem]">
              Begin your journey by exploring my portfolio.
            </p>
          </div>
          <Steve />
        </div>

        {/* about me */}
        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <h2 className={H2}>About me</h2>
          <div className="flex w-full items-center justify-between gap-5 border-[3px] border-[#5a8731] bg-[#7fbc42] px-4 py-2.5 shadow-[0_15px_15px_-10px_#3d5b20] md:px-[25px]">
            <i className="fa-solid fa-user mb-4 w-full text-[2.5rem]" />
            <div className="mb-4 w-full text-[1.1rem] tracking-[0.5px] md:text-[1.3rem]">
              <p>
                I’m Anuraj Kashyap, an IT student at NSUT and a web developer specializing in immersive digital
                experiences. I create dynamic, user-friendly websites that blend technical expertise with creative
                design.
              </p>
              <br />
              <p>
                Driven by a passion for new tech, I focus on delivering high-quality, high-performance code. I approach
                every project with a dedicated, problem-solving mindset to build seamless interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="mt-[50px] flex w-full flex-col items-center justify-center">
          <h2 className={H2}>Skills</h2>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
            {SKILLS.map((s) => (
              <div
                key={s}
                className="flex min-h-[85px] cursor-pointer items-center justify-center border-[3px] border-[#5b3f2a] bg-[#866043] px-[25px] py-2.5 text-center text-[1.2rem] shadow-[0_15px_15px_-10px_#3d2618] transition-all duration-300 hover:-translate-y-[5px] hover:bg-[#8f6b4f]"
              >
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* libraries */}
        <div className="mt-[50px] flex w-full flex-col items-center justify-center">
          <h2 className={H2}>Libraries</h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-6 md:gap-[50px]">
            {LIBRARIES.map((l) => (
              <div
                key={l}
                className="flex min-h-[60px] w-full cursor-pointer items-center justify-center border-[3px] border-[#575555] bg-[#6E6E6E] px-[25px] py-2.5 text-[1.2rem] shadow-[0_15px_15px_-10px_#575555] transition-all duration-300 hover:translate-x-[5px] hover:bg-[#818181] md:w-1/5"
              >
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* enter nether */}
        <div className="mt-[50px] flex w-full items-center justify-center">
          <button
            onClick={onNext}
            className="mb-4 flex min-h-[60px] min-w-[20%] cursor-pointer items-center justify-center gap-2.5 border-[3px] border-[#6b2029] bg-[#8b4049] px-[25px] py-2.5 text-[1.4rem] font-medium shadow-[0_15px_15px_-10px_#4b1019] transition-all duration-300 hover:border-[#8b4049] hover:bg-[#6b2029]"
          >
            Enter Nether
            <i className="fa-solid fa-arrow-right text-base" />
          </button>
        </div>
      </div>
    </section>
  )
}
