import Link from "next/link"

export default function Merchandise() {
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
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">Merchandise</h1>
        </header>

        <main className="prose prose-lg max-w-none">
          <div className="text-gray-900 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              The Four Winds Lounge team is proud to source products that are beautifully made and enhance your
              enjoyment of the fantastic game of Mah Jongg. We sell tile sets and racks (both complete sets and a la
              carte options to customize your own set) plus gorgeous totes to carry it all.
            </p>
            <p>
              Want to take your tablescape up a notch? We've got you covered! Gorgeous table mats, vintage and new
              serving pieces, beautiful and functional cordless table lamps and custom game tables are all sourced with
              a critical eye from those who have played the game for years.
            </p>
            <p>
              Love your Mah Jongg friends and looking for fun, festive gifts? From locally made chocolate "Jokers" to
              beautiful jewelry made from vintage Mah Jongg tiles plus tons of fun notepads, pajama sets, coin purses
              and more are available to make the prettiest and most useful gifts for hosting, birthdays and more.
            </p>
            <p className="font-semibold">Why can't I just buy online?</p>
            <p>
              Whether you are brand new to the game and want a quality starter set or you are ready for unique tiles and
              a decked out table, we are here to help. Mah Jongg is a visual and tactile game; it's difficult to know
              what you are getting when you buy online so we prefer to bring the items to you or have you check them out
              in person at our classes, in our retail pop-ups or in our homes (both in Northshore Milwaukee). The market
              for these items is fast and furious – many online retailers sellout quickly and have disappointed
              customers when they promise inventory that is no longer available. When you shop with our team, you are
              only getting inventory that we have in stock – we keep enough for you to have a great selection but not so
              much that the set you choose is not available when you want it.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
