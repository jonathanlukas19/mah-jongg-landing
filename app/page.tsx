import Link from "next/link"
import { Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <header className="flex flex-col items-center text-center mb-12">
          <div className="mb-6">
            <img
              src="/four-winds-logo.png"
              alt="Four Winds Lounge Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800 mb-2">Four Winds Lounge</h1>
        </header>

        <main>
          <section className="mb-16 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 mb-8">
              </p>

              <Button
                size="lg"
                className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link href="mailto:hello@tileandtable.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Let's Connect
                </Link>
              </Button>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800 mb-6">Follow Our Journey</h2>
            <p className="text-lg text-gray-700 mb-8">
              Follow us on social media!
            </p>

            <div className="flex justify-center gap-6">
              <Link
                href="https://instagram.com"
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
                href="https://facebook.com"
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
          <p>© {new Date().getFullYear()} Tile & Table. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
