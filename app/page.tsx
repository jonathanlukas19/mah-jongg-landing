import Link from "next/link"
import { Instagram, Facebook, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F0DB]">
      <nav className="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 max-w-6xl">
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap text-sm">
            <Link href="/small-group-lessons" className="hover:text-emerald-200 transition-colors">
              Small Group Lessons
            </Link>
<a href="https://fourwindslounge.mahjpass.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
            Registration
          </a>
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

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <header className="flex flex-col items-center text-center mb-12">
          <section
            aria-labelledby="lounge-hours-heading"
            className="mb-8 w-full max-w-3xl rounded-2xl border border-emerald-800/20 bg-[#fffdf6] px-5 py-6 shadow-sm sm:px-8"
          >
            <h2 id="lounge-hours-heading" className="font-serif text-2xl font-bold text-emerald-800 sm:text-3xl">
              Lounge Hours
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Visit us at Bayshore
            </p>
            <dl className="mx-auto mt-4 grid max-w-xl grid-cols-1 gap-x-10 sm:grid-cols-2">
              <div className="flex items-center justify-between gap-4 border-b border-emerald-100 py-2.5 text-left text-base sm:text-lg">
                <dt className="font-semibold text-emerald-900">Wednesday</dt>
                <dd className="text-gray-700">12–8 pm</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-emerald-100 py-2.5 text-left text-base sm:text-lg">
                <dt className="font-semibold text-emerald-900">Thursday</dt>
                <dd className="text-gray-700">12–8 pm</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-emerald-100 py-2.5 text-left text-base sm:text-lg">
                <dt className="font-semibold text-emerald-900">Friday</dt>
                <dd className="text-gray-700">10 am–6 pm</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-emerald-100 py-2.5 text-left text-base sm:text-lg">
                <dt className="font-semibold text-emerald-900">Saturday</dt>
                <dd className="text-gray-700">10 am–3 pm</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5 text-left text-base sm:text-lg">
                <dt className="font-semibold text-emerald-900">Sunday, Monday &amp; Tuesday</dt>
                <dd className="font-semibold text-emerald-700">Closed</dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-col items-center justify-center gap-1 border-t border-emerald-100 pt-4 sm:flex-row sm:gap-2">
              <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-700" />
              <address className="text-center text-base font-medium not-italic text-gray-700 sm:text-left">
                5710 N Centerpark Way, Bayshore Mall
              </address>
            </div>
          </section>
          <div className="mb-6">
            <img
              src="/four-winds-logo.png"
              alt="Four Winds Lounge Logo"
              className="w-104 h-104 md:w-112 md:h-112 mx-auto"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800 mb-2">
            Four Winds, One Passion... Mah Jongg
          </h1>
        </header>

        <main>
          <section className="mb-16 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-900 mb-8">
                Learn the game that is sweeping the nation! Connect with us for lessons and events throughout Wisconsin
                and Northern IL. We have more than 25 years of combined experience in training beginners to experienced
                players. As certified Mah Jongg instructors, we have helped countless students learn the game while
                promoting social engagement and strengthening cognitive skills.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800 mb-6">
              Follow us on social media!
            </h2>

            <div className="flex justify-center gap-6">
              <Link
                href="https://www.instagram.com/fourwindslounge_wi/profilecard/?igsh=MW9sZjV5ZXV2dGszNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Instagram</span>
              </Link>

              <Link
                href="https://www.facebook.com/share/g/17rQxJReHE/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Facebook</span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-emerald-100 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Four Winds Lounge. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
