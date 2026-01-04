import Link from "next/link"
import { Mail, Instagram, Facebook, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <header className="flex flex-col items-center text-center mb-12">
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
                and Northern IL. We have more than 16 years of combined experience in training beginners to experienced
                players. As certified Mah Jongg instructors, we have helped countless students learn the game while
                promoting social engagement and strengthening cognitive skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="mailto:amylukas@fourwindslounge.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Us!
                  </Link>
                </Button>

                <Button
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <Link
                    href="https://www.venmo.com/u/Fourwindslounge"
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CreditCard className="h-5 w-5" />
                    Registration Link
                  </Link>
                </Button>
              </div>
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
