export function StorefrontBanner() {
  return (
    <aside className="border-b-2 border-[#b98b35] bg-gradient-to-r from-[#f1d89d] via-[#fff3cf] to-[#f1d89d] px-4 py-4 text-center text-[#3c2d1f] shadow-md">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-4">
        <span className="rounded-full border border-[#b98b35] bg-[#fff8e6] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-[#8a5d16] shadow-sm sm:text-sm">
          Big news, Milwaukee
        </span>
        <p className="text-lg font-extrabold leading-snug tracking-tight sm:text-xl">
          Four Winds Lounge is opening at Bayshore on November 1!
        </p>
      </div>
      <p className="mx-auto mt-1 max-w-4xl text-sm font-semibold leading-relaxed text-[#654a2c] sm:text-base">
        The area&apos;s first dedicated Mah Jongg lounge and retail space is coming soon. Get ready to rack and roll!
      </p>
    </aside>
  )
}
