"use client"

import { motion } from "framer-motion"
import { Plane, MapPin } from "lucide-react"
import { useState } from "react"

const locations = [
  { name: "South Africa", flag: "🇿🇦", position: { top: "65%", left: "55%" }, color: "bg-green-500" },
  { name: "Mexico", flag: "🇲🇽", position: { top: "40%", left: "18%" }, color: "bg-red-500" },
  { name: "Thailand", flag: "🇹🇭", position: { top: "45%", left: "72%" }, color: "bg-purple-500" },
  { name: "Australia", flag: "🇦🇺", position: { top: "70%", left: "82%" }, color: "bg-yellow-500" },
  { name: "Hamburg", flag: "🇩🇪", position: { top: "28%", left: "50%" }, color: "bg-primary", isHome: true },
]

const continents = ["Africa", "Europe", "Asia", "North America", "South America", "Australia", "Antarctica"]

// Animated 3D Globe Component
function AnimatedGlobe() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      
      {/* Globe container */}
      <div className="relative w-full h-full">
        {/* Ocean base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 shadow-2xl overflow-hidden">
          {/* Atmosphere glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10" />
          
          {/* Rotating continents layer */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Stylized continent shapes */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* North America */}
              <motion.ellipse
                cx="50" cy="60" rx="25" ry="20"
                fill="rgba(34, 197, 94, 0.6)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* South America */}
              <motion.ellipse
                cx="65" cy="120" rx="12" ry="25"
                fill="rgba(34, 197, 94, 0.6)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              {/* Europe */}
              <motion.ellipse
                cx="110" cy="55" rx="15" ry="12"
                fill="rgba(34, 197, 94, 0.7)"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              {/* Africa */}
              <motion.ellipse
                cx="115" cy="100" rx="18" ry="28"
                fill="rgba(34, 197, 94, 0.6)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              />
              {/* Asia */}
              <motion.ellipse
                cx="145" cy="65" rx="30" ry="22"
                fill="rgba(34, 197, 94, 0.6)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
              {/* Australia */}
              <motion.ellipse
                cx="165" cy="130" rx="15" ry="12"
                fill="rgba(34, 197, 94, 0.6)"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
              />
            </svg>
          </motion.div>

          {/* Grid lines - latitude */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20">
            <ellipse cx="100" cy="100" rx="95" ry="30" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="95" ry="60" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="95" ry="85" fill="none" stroke="white" strokeWidth="0.5" />
            {/* Longitude lines */}
            <ellipse cx="100" cy="100" rx="30" ry="95" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(0 100 100)" />
            <ellipse cx="100" cy="100" rx="30" ry="95" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(45 100 100)" />
            <ellipse cx="100" cy="100" rx="30" ry="95" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(90 100 100)" />
            <ellipse cx="100" cy="100" rx="30" ry="95" fill="none" stroke="white" strokeWidth="0.5" transform="rotate(135 100 100)" />
          </svg>

          {/* Specular highlight */}
          <div className="absolute top-4 left-8 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 blur-xl" />
          <div className="absolute top-8 left-12 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 blur-md" />
        </div>

        {/* Orbiting plane */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="bg-white rounded-full p-1.5 shadow-lg">
              <Plane className="w-4 h-4 text-primary rotate-90" />
            </div>
          </motion.div>
        </motion.div>

        {/* Orbiting ring */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            style={{ transform: "rotateX(70deg)" }}
          />
        </motion.div>

        {/* Location pins floating around */}
        {[
          { top: "5%", left: "50%", delay: 0 },
          { top: "25%", left: "90%", delay: 1 },
          { top: "75%", left: "85%", delay: 2 },
          { top: "90%", left: "45%", delay: 3 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: pos.delay * 0.5 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function TravelGlobe() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            World <span className="text-primary">Traveler</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;ve been fortunate to call many places home and have explored every continent on Earth
          </p>
        </motion.div>

        {/* Globe and Map Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Animated 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <AnimatedGlobe />
          </motion.div>

          {/* Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Map container */}
            <div className="relative aspect-[2/1] bg-card/30 backdrop-blur-sm border border-border rounded-3xl overflow-hidden">
              {/* Simplified world map background with grid lines */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                  {/* Latitude lines */}
                  {[10, 20, 30, 40].map((y) => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" strokeWidth="0.2" className="text-primary" />
                  ))}
                  {/* Longitude lines */}
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="50" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
                  ))}
                </svg>
              </div>

              {/* Animated flight paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 50">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Path from Hamburg to various locations */}
                <motion.path
                  d="M 50 14 Q 35 25 18 20"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d="M 50 14 Q 52 30 55 32.5"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
                <motion.path
                  d="M 50 14 Q 60 20 72 22.5"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.9 }}
                />
                <motion.path
                  d="M 50 14 Q 70 30 82 35"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.1 }}
                />
              </svg>

              {/* Location markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ top: location.position.top, left: location.position.left }}
                  onMouseEnter={() => setActiveLocation(location.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  {/* Pulse effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${location.color} opacity-30`}
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  {/* Marker */}
                  <div className={`relative w-4 h-4 rounded-full ${location.color} ${location.isHome ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""} shadow-lg flex items-center justify-center`}>
                    {location.isHome && <MapPin className="w-2.5 h-2.5 text-primary-foreground" />}
                  </div>

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeLocation === location.name ? 1 : 0, y: activeLocation === location.name ? 0 : 10 }}
                    className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 shadow-lg pointer-events-none"
                  >
                    <span className="text-lg mr-1">{location.flag}</span>
                    <span className="text-sm font-medium text-foreground">{location.name}</span>
                    {location.isHome && <span className="text-xs text-muted-foreground ml-1">(Home)</span>}
                  </motion.div>
                </motion.div>
              ))}

              {/* Animated plane */}
              <motion.div
                className="absolute text-primary"
                animate={{
                  left: ["10%", "90%"],
                  top: ["30%", "25%", "35%", "28%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Plane className="w-5 h-5 rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Places lived cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-muted-foreground mb-6 font-medium">Places I&apos;ve called home</p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.filter(l => !l.isHome).map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full"
              >
                <span className="text-xl">{location.flag}</span>
                <span className="font-medium text-foreground">{location.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continents badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-lg">7</span>
              </div>
              <span className="text-xl font-bold text-foreground">Every Continent Visited</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {continents.map((continent, index) => (
                <motion.span
                  key={continent}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1 text-sm bg-card/50 border border-border rounded-full text-muted-foreground"
                >
                  {continent}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
