import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TravelGlobe } from "@/components/travel-globe"
import { Hobbies } from "@/components/hobbies"
import { Bootcamp } from "@/components/bootcamp"
import { Connect } from "@/components/connect"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <TravelGlobe />
        <Hobbies />
        <Bootcamp />
        <Connect />
      </div>
    </main>
  )
}
