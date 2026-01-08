import Link from "next/link"

export default function CorporateClubCustomers() {
  return (
    <div className="min-h-screen bg-[#F8F0DB]">
      <nav className="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex justify-center gap-6 flex-wrap">
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
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">Corporate & Club Customers</h1>
        </header>

        <main className="max-w-3xl mx-auto">
          <div className="text-gray-900 space-y-8 text-base md:text-lg leading-relaxed">
            <p>
              Interested in bringing the game of Mah Jongg to your clients, members or teams? Looking for an interesting
              activity for a birthday party or shower? Reach out to Four Winds Lounge and we can plan your next event
              together! Whether a full 8-hour course or simply a 2-hour, hands-on introduction to the game, we have the
              skills and experience to set up a fun, educational experience for all. We bring the supplies in and you
              give your guests not only a fun event, but also skills and relaxation that last well beyond when your
              guests head home.
            </p>

            <p>
              Ready to plan YOUR unique Mah Jongg event?{" "}
              <Link
                href="mailto:amylukas@fourwindslounge.com"
                className="text-emerald-700 hover:text-emerald-800 underline font-semibold"
              >
                Reach out today!
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
