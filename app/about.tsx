import Link from "next/link"

export default function SmallGroupLessons() {
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
            <Link href="/events" className="hover:text-emerald-200 transition-colors">
              Events
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
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 cursor-pointer"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </Link>
        </header>

        <main className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-6">Mah Jongg for Beginners</h2>
            <div className="text-gray-900 space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Learn to play American Mah Jongg, the game that is the talk of the town! Devoted players include Kelly
                Ripa, Julia Roberts, Mindy Kaling, Sarah Jessica Parker, Cher, Megan Markle, Savannah Guthrie... and
                likely, at least a few of your friends!
              </p>
              <p>
                People Magazine recently listed Mah Jongg on its list of "Hot" activities for 2025; the Today Show ran a
                feature on the Mah Jongg craze as well. If you are wondering how to jump on board with this ancient yet
                wildly popular game, the Four Winds Lounge is here to help.
              </p>
              <p>
                Kitty and Amy, co-founders of the Four Winds Lounge, began teaching Mah Jongg informally to family and
                friends years ago. With a deep understanding of the game drawn from their combined 16 years of
                experience playing Mah Jongg, Kitty and Amy went on to become certified Mah Jongg instructors to ensure
                students learn the intricacies of the game quickly and thoroughly. Our eight-hour curriculum is built to
                provide a solid understanding of all facets of this centuries-old game. Four Winds Lounge can also
                facilitate ongoing events as your calendar allows, providing you and your group opportunities to grow
                their understanding and enjoyment of the game.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-6">Pricing</h2>
            <div className="text-gray-900 space-y-4 text-base md:text-lg leading-relaxed">
              <p className="font-bold text-xl">$165 per person – MAXIMUM 16 participants per session*</p>
              <p className="font-semibold">Includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Four 2-hour sessions (classes held once a week for four weeks)</li>
                <li>2025 Official National Mah Jongg League Card ($15 value)</li>
                <li>Access to several Mah Jongg sets to rent or buy</li>
                <li>Access to Four Winds Lounge team for questions beyond training time</li>
              </ul>
              <p>
                The Four Winds Lounge team will provide all necessary supplies (mah jongg sets, table mats, shufflers,
                racks). You would only need to provide playing tables (4 players at each), chairs and a quiet space for
                the sessions to be held at your home or venue.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-6">
              Private Parties and Events?
            </h2>
            <div className="text-gray-900 space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                We are happy to coordinate ongoing events for new and experienced players – pricing and details
                available upon request. Event suggestions include: two day intensive seminars for beginners, Mahj Jongg
                and Yoga for Moms to celebrate Back to School in fall, "Friendsgiving Afternoon of Mah Jongg" in
                mid-November, etc. The Four Winds Lounge team has years of experience in planning events of all sizes–
                with your ideas, we will creatively organize a memorable event that you will love.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
