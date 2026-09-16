import Link from "next/link"
import { CalendarDays, ExternalLink } from "lucide-react"

const navigation = [
  ["Small Group Lessons", "/small-group-lessons"],
  ["Registration", "/registration"],
  ["Merchandise", "/merchandise"],
  ["Gift Certificates", "/gift-certificates"],
  ["Upcoming Events", "/upcoming-events"],
  ["Corporate & Club Customers", "/events"],
  ["About the FWL Team", "/about"],
]

export default function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-[#F8F0DB] text-emerald-950">
      <nav className="sticky top-0 z-50 border-b border-emerald-700/30 bg-emerald-800 text-white shadow-md">
        <div className="container mx-auto flex max-w-6xl justify-center px-4 py-3">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={href === "/upcoming-events" ? "font-semibold text-emerald-100" : "text-white/85 transition-colors hover:text-emerald-200"}
                aria-current={href === "/upcoming-events" ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-5xl px-4 py-10 md:py-16">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <Link href="/" className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4">
            <img
              src="/four-winds-logo.png"
              alt="Four Winds Lounge Logo"
              className="mx-auto mb-6 h-28 w-28 cursor-pointer object-contain md:h-36 md:w-36"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>
          <h1 className="font-serif text-4xl font-bold text-emerald-800 md:text-6xl">Upcoming Events</h1>
          <p className="mt-5 text-base leading-7 text-emerald-950/70 md:text-lg">
            Meet new players, sharpen your game, and enjoy the social side of Mah Jongg with Four Winds Lounge.
          </p>
        </header>

        <main className="mx-auto max-w-3xl">
          <section className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/65 shadow-[0_18px_50px_rgba(31,78,58,0.10)]">
            <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-56 items-center justify-center bg-emerald-800 p-8 text-center text-[#F8F0DB] md:min-h-full">
                <div>
                  <CalendarDays className="mx-auto mb-4 h-10 w-10 stroke-1 text-emerald-200" aria-hidden="true" />
                  <p className="font-serif text-3xl">Women&apos;s Night Out</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">October 22 · 6:00–9:00 PM</p>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Save the date</p>
                <h2 className="font-serif text-3xl font-bold text-emerald-800">Real Women&apos;s Collective presents Women&apos;s Night Out</h2>
                <p className="mt-4 font-semibold text-emerald-950">The ARGO in Whitefish Bay</p>
                <p className="mt-4 leading-7 text-emerald-950/70">
                  Real Women&apos;s Collective will be hosting a presentation and panel discussion for women about Peri/Menopause, GLPs, Pelvic Floor and Bladder Health, and so much more!
                </p>
                <p className="mt-4 leading-7 text-emerald-950/70">
                  Four Winds Lounge will be present as a vendor and is donating a Mah Jongg playing mat.
                </p>
                <Link
                  href="https://www.eventbrite.com/e/womens-night-out-tickets-1993797812930?utm_experiment=test_share_listing&aff=ebdsshios"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                >
                  Register for the event
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
