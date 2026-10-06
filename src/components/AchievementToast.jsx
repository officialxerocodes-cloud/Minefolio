export default function AchievementToast({ toast }) {
  if (!toast) return null
  return (
    <div
      key={toast.key}
      className="pointer-events-none fixed top-[12vh] right-4 z-[150] flex w-[320px] max-w-[calc(100vw-2rem)] items-center gap-4 border-2 border-[#5a5a5a] bg-[#1c1c1c] px-4 py-3 outline-2 outline-black [animation:toast-in_4.5s_ease-in-out_forwards]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#5a5a5a] bg-[#3a3a3a]">
        <i className="fa-solid fa-trophy text-[1.6rem] text-[#ffd84a]" />
      </div>
      <div className="leading-tight">
        <p className="text-[1.2rem] text-[#ffff55]">Advancement Made!</p>
        <p className="text-[1.5rem] text-white">{toast.title}</p>
      </div>
    </div>
  )
}
