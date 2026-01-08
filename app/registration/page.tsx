import Link from "next/link"

export default function Registration() {
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
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">Registration</h1>
        </header>

        <main className="max-w-3xl mx-auto">
          <div className="text-gray-900 space-y-8 text-base md:text-lg leading-relaxed">
            <p>
              Already have your class arranged and a start date has been established? Great! Please click{" "}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFMjS5vwMmI1xV2lEqtR863OOjnFmbB-ab1yiYEKP2UYhNcQ/viewform?usp=sharing&ouid=103279560988399266284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline font-semibold"
              >
                here
              </Link>
              . We can't wait to work together!
            </p>

            <p>
              If you haven't arranged a class date and time, but are interested learning Mah Jongg, please click{" "}
              <Link
                href="mailto:info@fourwindslounge.com"
                className="text-emerald-700 hover:text-emerald-800 underline font-semibold"
              >
                here
              </Link>{" "}
              to message our team!
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
