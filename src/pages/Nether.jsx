const EDUCATION = [
  {
    icon: 'fa-graduation-cap',
    school: 'Netaji Subhas University of Technology',
    degree: 'B.Tech',
    branch: 'Information Technology',
    score: 'CGPA: 8.63',
  },
  {
    icon: 'fa-school',
    school: 'Army Public School Dhaula Kuan',
    degree: 'Class 12th',
    branch: 'Physics, Chemistry, Mathematics with Computer Science',
    score: 'Percentage: 93.8%',
  },
  {
    icon: 'fa-school',
    school: 'Army Public School Dhaula Kuan',
    degree: 'Class 10th',
    branch: 'Science, Mathematics, Social Science, English, Hindi',
    score: 'Percentage: 95.4%',
  },
]

const ACHIEVEMENTS = [
  { title: 'Adobe Hackathon Finalist', text: 'Top 30% from 550+ competitive participants in the Adobe Add-on Hackathon.' },
  { title: 'The 7-Year Red Coat', text: 'Awarded for maintaining 90%+ for 7 straight years.' },
  { title: 'Math School Topper (12th)', text: 'Ranked #1 in school with 99/100.' },
  { title: 'Physics School Rank #3 (12th)', text: 'Ranked #3 in school with 95/100.' },
  { title: 'Math School Rank #2 (10th)', text: 'Ranked #2 in school with 99/100.' },
  { title: 'Social Science School Rank #2 (10th)', text: 'Ranked #2 in school with 98/100.' },
]

const H2 = 'mb-[1.2rem] w-full text-left text-[2.2rem] font-medium text-[#ff6b35] md:text-[2.8rem]'

export default function Nether({ onNext }) {
  return (
    // no absolute positioning: the section grows with its content, so the gradient always covers the full page
    <section className="flex min-h-[90vh] w-full justify-center bg-linear-to-b from-[#1a0505] via-[#3d0d0d] to-[#a31d1d] px-4 py-10 md:p-10">
      <div className="flex w-[90%] flex-col md:w-3/5">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-[1.2rem] w-full text-center text-[2.8rem] font-medium text-[#ff6b35] md:text-[3.8rem]">
            The Nether
          </h1>
          <p className="mb-[1.2rem] w-full text-center text-[1.4rem] text-[#ffaa80] md:text-[1.8rem]">
            Enter the nether to explore the world of education
          </p>
        </div>

        {/* education */}
        <div className="my-5 flex w-full flex-col items-start">
          <h2 className={H2}>Education</h2>
          {EDUCATION.map((e, i) => (
            <div
              key={i}
              className="my-[15px] flex w-full cursor-pointer flex-col items-start gap-[25px] border-[3px] border-[#6b2029] bg-[#8b4049] p-5 shadow-[0_15px_15px_-10px_#4b1019] transition-all duration-300 hover:-translate-y-[5px] hover:bg-[#6b2029] md:flex-row md:items-center md:px-[30px] md:py-[25px]"
            >
              <div className="flex items-start px-0 py-[5px] text-[1.5rem]">
                <i className={`fa-solid ${e.icon} text-[#FF6B36]`} />
              </div>
              <div className="flex w-full flex-col items-start">
                <h3 className="mb-[0.4rem] w-full text-left text-[1.6rem] font-medium md:text-[2rem]">{e.school}</h3>
                <p className="mb-[0.4rem] w-full text-left text-[1.1rem] text-[#ffaa80] md:text-[1.5rem]">{e.degree}</p>
                <p className="mb-[0.4rem] w-full text-left text-[1.1rem] text-[#ff6b35] md:text-[1.3rem]">{e.branch}</p>
                <p className="mb-[0.4rem] w-full text-left text-[1.1rem] md:text-[1.3rem]">{e.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* achievements */}
        <div className="my-5 flex w-full flex-col items-start">
          <h2 className={H2}>Achievements</h2>
          <div className="my-[15px] grid w-full grid-cols-1 gap-x-[6%] md:grid-cols-2">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.title}
                className="my-[15px] flex min-h-[150px] cursor-pointer flex-col items-start gap-[25px] border-[3px] border-[#5c1414] bg-[#2a0a0a] p-5 shadow-[0_15px_15px_-10px_#000] transition-all duration-300 hover:translate-x-[5px] hover:border-[#2a0a0a] hover:bg-[#5c1414] md:flex-row md:items-center md:px-[30px] md:py-[25px]"
              >
                <div className="flex flex-col items-center justify-center px-0 py-[5px] text-[1.4rem]">
                  <i className="fa-solid fa-medal text-[#E0E0E0]" />
                </div>
                <div className="w-full text-left text-[1.1rem] md:text-[1.4rem]">
                  <h4 className="mb-[0.4rem] w-full text-left text-[1.2rem] font-medium text-[#ffaa80] md:text-[1.4rem]">
                    {a.title}
                  </h4>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* enter the end */}
        <div className="flex w-full items-center justify-center">
          <button
            onClick={onNext}
            className="mb-4 flex min-h-[60px] min-w-[20%] cursor-pointer items-center justify-center gap-2.5 border-[3px] border-[#a8a658] bg-[#d9d688] px-[25px] py-2.5 text-[1.4rem] font-medium text-black shadow-[0_15px_15px_-10px_#787638] transition-all duration-300 hover:border-[#d9d688] hover:bg-[#a8a658]"
          >
            Enter The End
            <i className="fa-solid fa-arrow-right text-base text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}
