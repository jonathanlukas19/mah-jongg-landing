import Link from "next/link"

export default function About() {
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
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800 mb-8">About the FWL Team</h1>

          {/* Team Photo */}
          <div className="mb-8">
            <img
              src="/public/IMG_8150.jpeg"
              alt="Kitty and Amy playing Mah Jongg"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </header>

        <main className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl text-gray-900">
            <p>
              Kitty and Amy took Mah Jongg lessons nearly 10 years ago. In addition to a full teaching calendar, we
              maintain a weekly game with dear friends. This time together is part mental workout, part therapy and
              complete joy.
            </p>
            <p>
              Kitty plays Mah Jongg any chance she gets when she's not cooking, reading, travelling with her husband or
              spending time with her 6 adult children and 2 darling grandsons. Never a dull moment! Mahj Jongg is truly
              a game of friendship - that's what Kitty loves most about it.
            </p>
            <p>
              When not teaching or playing, Amy is either playing a racquet sport or reading a good book with her
              Schnoodle in her lap, her Sheepadoodle at her feet, and her husband and 4 kids nearby planning their next
              family adventure. Mah Jongg is a game of making order out of chaos while having fun; Amy finds this skill
              applies to all areas of her life!
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
