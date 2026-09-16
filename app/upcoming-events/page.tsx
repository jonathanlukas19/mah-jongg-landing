import Link from "next/link"

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-[#F8F0DB]">
      <nav className="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 max-w-6xl">
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap text-sm">
            <Link href="/small-group-lessons" className="hover:text-emerald-200 transition-colors">
              Small Group Lessons
            </Link>
            <Link href="/registration" className="hover:text-emerald-200 transition-colors">
              Registration
            </Link>
            <Link href="/merchandise" className="hover:text-emerald-200 transition-colors">
              Merchandise
            </Link>
            <Link href="/gift-certificates" className="hover:text-emerald-200 transition-colors">
              Gift Certificates
            </Link>
            <Link href="/upcoming-events" className="hover:text-emerald-200 transition-colors">
              Upcoming Events
            </Link>
            <Link href="/events" className="hover:text-emerald-200 transition-colors">
              Corporate & Club Customers
            </Link>
            <Link href="/about" className="hover:text-emerald-200 transition-colors">
              About the FWL Team
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <header className="flex flex-col items-center text-center mb-12">
          <Link href="/">
            <img
              src="/four-winds-logo.png"
              alt="Four Winds Lounge Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 cursor-pointer"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">Upcoming Events</h1>
        </header>

        <main className="max-w-3xl mx-auto">
          <article className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-lg md:p-10">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                October 22 · 6:00–9:00 PM
              </p>
              <h2 className="text-3xl font-serif font-bold text-emerald-800 md:text-4xl">Women&apos;s Night Out</h2>
              <p className="mt-3 text-lg font-medium text-gray-800">The ARGO in Whitefish Bay</p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-gray-900 md:text-lg">
              <p>
                Real Women&apos;s Collective will be hosting a presentation and panel discussion for women about
                Peri/Menopause, GLPs, Pelvic Floor and Bladder Health and so much more!
              </p>
              <p>
                Four Winds Lounge will be present as a vendor and is donating a Mah Jongg playing mat.
              </p>
            </div>

            <div className="mt-8 border-t border-emerald-900/10 pt-8 text-center">
              <p className="mb-4 text-gray-800">To register, click the link here:</p>
              <a
                href="https://www.eventbrite.com/e/womens-night-out-tickets-1993797812930?utm_experiment=test_share_listing&aff=ebdsshios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
              >
                Register on Eventbrite
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
