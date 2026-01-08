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
          <div className="text-gray-900 space-y-8 text-base md:text-lg leading-relaxed">
            <p>
              Join us every Thursday in January and February from 4-7 at Frozen Fairways in Kohler, WI.{" "}
              <Link
                href="https://www.kohlerwisconsin.com/explore-more/activities-and-events/frozen-fairways?nck=8448091801&id=pla_goo_dk_promo-frozen-fairways_2025_21722984314_f03&gclsrc=aw.ds&&id=pla_goo_dk_promo-spa_2024_21722984314_f03&gclsrc=aw.ds&gad_source=1&gad_campaignid=21719100479&gbraid=0AAAAADEmHoSxFBl0Bl4GA9WFJMYKsPqz-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline font-semibold"
              >
                (link here)
              </Link>
            </p>

            <p>
              Open Play for experienced players (sets/cards on site for your use), Guided Play for newer players and Mah
              Jongg Fundamentals for those looking to learn. Entrance to Frozen Fairways is $15 per person (free to
              registered guests of the hotel) and allows you to participate in all sorts of Winter Fun both indoors and
              out. Come out and enjoy the picturesque atmosphere of Blackwolf Run in the wintertime and cozy up with a
              few games of Mahj!
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
