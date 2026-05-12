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
          <div className="text-gray-900 space-y-2 text-base md:text-lg leading-relaxed">
            <p>
              Join Four Winds Lounge in support of <strong>Wisconsin Breast Cancer Showhouse</strong>
            </p>

            <p>
              A tablescape event featuring creative, one-of-a-kind designs from the area's leading interior designers.
            </p>

            <p>
              May 29th Pfister Hotel Grand Ballroom
            </p>

            <p>
              One Day – Two Fabulous Events
            </p>

            <p>
              1:00-4:00 Styled Settings
            </p>

            <p>
              6:00 – 10:00 An Evening at Styled Settings
            </p>

            <p>
              Click{" "}
              <Link
                href="https://breastcancershowhouse.org/styled-settings-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline font-semibold"
              >
                link
              </Link>
              {" "}to purchase tickets!
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
