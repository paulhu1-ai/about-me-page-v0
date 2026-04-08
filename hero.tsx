"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, MapPin } from "lucide-react"

export function Bootcamp() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Excited for <span className="text-primary">Bootcamp!</span>
                </h2>
              </div>

              {/* San Francisco illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                {/* Stylized Golden Gate Bridge */}
                <div className="relative w-full max-w-md">
                  <svg viewBox="0 0 300 120" className="w-full h-auto">
                    {/* Sky gradient */}
                    <defs>
                      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="300" height="120" fill="url(#skyGradient)" rx="16" />
                    
                    {/* Water */}
                    <motion.rect
                      x="0" y="90" width="300" height="30" fill="var(--primary)" opacity="0.2" rx="0"
                      animate={{ opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Bridge towers */}
                    <motion.g
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {/* Left tower */}
                      <rect x="70" y="30" width="8" height="60" fill="var(--primary)" rx="2" />
                      <rect x="66" y="25" width="16" height="8" fill="var(--primary)" rx="1" />
                      
                      {/* Right tower */}
                      <rect x="222" y="30" width="8" height="60" fill="var(--primary)" rx="2" />
                      <rect x="218" y="25" width="16" height="8" fill="var(--primary)" rx="1" />
                    </motion.g>
                    
                    {/* Bridge cables */}
                    <motion.path
                      d="M 74 30 Q 150 60 226 30"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                    
                    {/* Bridge deck */}
                    <motion.rect
                      x="50" y="80" width="200" height="6" fill="var(--primary)" rx="1"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      style={{ transformOrigin: "center" }}
                    />
                    
                    {/* Vertical cables */}
                    {[90, 110, 130, 150, 170, 190, 210].map((x, i) => (
                      <motion.line
                        key={x}
                        x1={x}
                        y1={40 + Math.abs(150 - x) * 0.15}
                        x2={x}
                        y2="80"
                        stroke="var(--primary)"
                        strokeWidth="1"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                      />
                    ))}
                    
                    {/* Sun */}
                    <motion.circle
                      cx="250" cy="35" r="15"
                      fill="var(--accent)"
                      opacity="0.6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center gap-2 mb-6"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xl font-semibold text-foreground">San Francisco</span>
              </motion.div>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
              >
                I&apos;m looking forward to the bootcamp and meeting all my new colleagues in person. 
                Can&apos;t wait to put faces to names and build connections with the amazing Vercel team!
              </motion.p>

              {/* Team excitement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mt-8"
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">See you all there!</span>
                  <span className="text-2xl">{"🎉"}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
