"use client"

import { motion } from "framer-motion"
import { Waves, Sun } from "lucide-react"
import Image from "next/image"

// Animated Golf Ball Component
function GolfAnimation() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Golf Course */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-600/40 to-green-500/20 rounded-b-xl" />
      
      {/* Flag */}
      <motion.div className="absolute bottom-8 right-8">
        <div className="w-0.5 h-16 bg-foreground/60" />
        <motion.div
          animate={{ skewX: [0, 5, 0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 left-0.5 w-8 h-5 bg-red-500 rounded-r-sm"
        />
        {/* Hole */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-foreground/80 rounded-full" />
      </motion.div>
      
      {/* Golf Ball with arc animation */}
      <motion.div
        initial={{ x: -20, y: 60 }}
        animate={{
          x: [0, 40, 80, 100],
          y: [60, 0, 20, 50],
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
        className="absolute w-4 h-4"
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg border border-gray-200">
          {/* Golf ball dimples */}
          <div className="absolute inset-0.5 rounded-full opacity-30 bg-[radial-gradient(circle_at_30%_30%,transparent_1px,rgba(0,0,0,0.1)_1px)] bg-[length:3px_3px]" />
        </div>
      </motion.div>
      
      {/* Club swing */}
      <motion.div
        className="absolute bottom-6 left-4"
        animate={{ rotate: [-45, 45] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2.7 }}
      >
        <div className="w-1 h-12 bg-gray-400 rounded origin-bottom" />
        <div className="absolute -bottom-1 -left-1 w-3 h-4 bg-gray-500 rounded" />
      </motion.div>
    </div>
  )
}

// Animated Freediving Component
function FreediveAnimation() {
  return (
    <div className="relative w-full h-32 overflow-hidden bg-gradient-to-b from-blue-400/20 via-blue-500/30 to-blue-700/40 rounded-xl">
      {/* Water surface waves */}
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-blue-300/40 to-transparent"
      />
      
      {/* Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          initial={{ x: 30 + i * 15, y: 100 }}
          animate={{
            y: [100, -10],
            opacity: [0.6, 0],
            scale: [0.5, 1.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Diver */}
      <motion.div
        animate={{
          y: [20, 80, 20],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <svg width="40" height="60" viewBox="0 0 40 60" className="fill-foreground/70">
          {/* Head */}
          <circle cx="20" cy="10" r="8" />
          {/* Body */}
          <ellipse cx="20" cy="30" rx="8" ry="12" />
          {/* Arms */}
          <motion.path
            d="M12 25 Q5 20, 8 35"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            animate={{ d: ["M12 25 Q5 20, 8 35", "M12 25 Q5 30, 8 40", "M12 25 Q5 20, 8 35"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M28 25 Q35 20, 32 35"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            animate={{ d: ["M28 25 Q35 20, 32 35", "M28 25 Q35 30, 32 40", "M28 25 Q35 20, 32 35"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Fins */}
          <motion.path
            d="M15 42 L10 58 L20 50 L30 58 L25 42"
            animate={{ d: ["M15 42 L10 58 L20 50 L30 58 L25 42", "M15 42 L8 55 L20 52 L32 55 L25 42", "M15 42 L10 58 L20 50 L30 58 L25 42"] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      
      {/* Fish */}
      <motion.div
        animate={{ x: [-20, 120] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-16 text-xl"
      >
        {"🐠"}
      </motion.div>
    </div>
  )
}

// Animated Cooking Component
function CookingAnimation() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      {/* Stove */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-600/50 rounded-t" />
      
      {/* Burner glow */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-2 bg-orange-500/60 rounded-full blur-sm"
      />
      
      {/* Pan */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative">
          {/* Pan body */}
          <div className="w-20 h-4 bg-gray-700 rounded-b-full" />
          {/* Pan handle */}
          <div className="absolute top-1 -right-8 w-10 h-2 bg-gray-600 rounded" />
          
          {/* Food in pan */}
          <motion.div
            animate={{ y: [-2, -8, -2] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute -top-4 left-2"
          >
            <span className="text-lg">{"🍳"}</span>
          </motion.div>
          <motion.div
            animate={{ y: [-2, -10, -2] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
            className="absolute -top-4 left-8"
          >
            <span className="text-sm">{"🧅"}</span>
          </motion.div>
        </div>
      </div>
      
      {/* Steam */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-6 bg-white/20 rounded-full blur-sm"
          style={{ left: `calc(50% + ${(i - 1) * 12}px)` }}
          initial={{ bottom: 50, opacity: 0.6 }}
          animate={{
            bottom: [50, 100],
            opacity: [0.6, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Chef hat */}
      <motion.div
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-2 right-4 text-2xl"
      >
        {"👨‍🍳"}
      </motion.div>
    </div>
  )
}

// Animated Beach Component with rising/setting sun
function BeachAnimation() {
  return (
    <div className="relative w-full h-32 overflow-hidden rounded-xl">
      {/* Animated Sky - changes color with sun position */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(251,146,60,0.4), rgba(251,191,36,0.3), rgba(34,211,238,0.3))",
            "linear-gradient(to bottom, rgba(56,189,248,0.3), rgba(34,211,238,0.25), rgba(34,211,238,0.3))",
            "linear-gradient(to bottom, rgba(251,146,60,0.5), rgba(239,68,68,0.3), rgba(124,58,237,0.3))",
            "linear-gradient(to bottom, rgba(251,146,60,0.4), rgba(251,191,36,0.3), rgba(34,211,238,0.3))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />
      
      {/* Sun - rises and sets */}
      <motion.div
        animate={{
          y: [60, 8, 8, 60],
          x: [20, 50, 80, 110],
          scale: [0.8, 1, 1, 0.8],
          opacity: [0.6, 1, 1, 0.6],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 w-12 h-12"
      >
        {/* Sun glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-yellow-400/40 rounded-full blur-md"
        />
        {/* Sun body */}
        <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full" />
        {/* Sun rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="absolute w-0.5 h-3 bg-yellow-400/60 left-1/2 -translate-x-1/2"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: "50% 24px",
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars that appear during sunset */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0, 0.8, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: i * 0.3 }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: 8 + i * 8, left: 15 + i * 25 }}
        />
      ))}
      
      {/* Ocean waves */}
      <motion.div
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-0 right-0 h-8 bg-gradient-to-t from-cyan-500/50 to-cyan-400/30"
      />
      <motion.div
        animate={{ x: [5, -5, 5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-0 right-0 h-6 bg-gradient-to-t from-cyan-600/40 to-transparent"
      />
      
      {/* Sun reflection on water */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-yellow-400/40 to-transparent blur-sm"
      />
      
      {/* Sand */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-amber-200/50 to-amber-100/30" />
      
      {/* Beach umbrella */}
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-6 left-6"
      >
        <div className="w-1 h-12 bg-amber-700/70" />
        <div className="absolute -top-2 -left-6 w-14 h-7 bg-gradient-to-r from-red-500/70 via-white/70 to-red-500/70 rounded-t-full" />
      </motion.div>
      
      {/* Surfboard */}
      <motion.div
        animate={{ rotate: [10, 15, 10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 right-8 w-3 h-12 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full transform rotate-12"
      />
    </div>
  )
}

export function Hobbies() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            When I&apos;m Not <span className="text-primary">Working</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;m very outgoing and love connecting with people. Here&apos;s what keeps me busy!
          </p>
        </motion.div>

        {/* Hobbies bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Golf Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm cursor-default"
          >
            <GolfAnimation />
            <div className="p-6 pt-2">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Golf</h3>
              <p className="text-muted-foreground">Nothing beats a morning on the green</p>
            </div>
          </motion.div>

          {/* Freediving Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm cursor-default"
          >
            <FreediveAnimation />
            <div className="p-6 pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Waves className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-foreground">Freediving</h3>
              </div>
              <p className="text-muted-foreground">Exploring the underwater world</p>
            </div>
          </motion.div>

          {/* Cooking Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm cursor-default"
          >
            <CookingAnimation />
            <div className="p-6 pt-2">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Hobby Chef</h3>
              <p className="text-muted-foreground">Experimenting in the kitchen</p>
            </div>
          </motion.div>

          {/* Beach Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm cursor-default"
          >
            <BeachAnimation />
            <div className="p-6 pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl font-semibold text-foreground">Beach & Ocean</h3>
              </div>
              <p className="text-muted-foreground">My happy place is by the water</p>
            </div>
          </motion.div>

          {/* Dog Card - With actual photo and appearing puppies! */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-600/10 backdrop-blur-sm cursor-default md:col-span-2 lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto min-h-[200px] overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-08%20at%2012.10.30-gy54qpE6DZJx3fi1Za1JPrOSekFumB.jpeg"
                  alt="Paul with a dog"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-900/30" />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col justify-center md:w-1/2 relative overflow-hidden">
                {/* Appearing puppies animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Puppy 1 - pops up from bottom left */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: [100, 0, 0, 100], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-4 left-4 text-3xl"
                  >
                    {"🐶"}
                  </motion.div>
                  {/* Puppy 2 - pops up from bottom right */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: [100, 0, 0, 100], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                    className="absolute bottom-4 right-4 text-2xl"
                  >
                    {"🐕"}
                  </motion.div>
                  {/* Puppy 3 - peeks from top right corner */}
                  <motion.div
                    initial={{ x: 50, rotate: 20, opacity: 0 }}
                    animate={{ x: [50, 0, 0, 50], rotate: [20, 20, 20, 20], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, delay: 1 }}
                    className="absolute top-2 right-2 text-2xl"
                  >
                    {"🐾"}
                  </motion.div>
                  {/* Golden retriever puppy - bounces in */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl"
                  >
                    {"🦮"}
                  </motion.div>
                  {/* Paw prints walking across */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.7, 0.7, 0],
                        scale: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: 2 + i * 0.4,
                      }}
                      className="absolute text-sm text-amber-400/60"
                      style={{
                        bottom: 60 - i * 8,
                        left: 20 + i * 30,
                        transform: `rotate(${-30 + i * 15}deg)`,
                      }}
                    >
                      {"🐾"}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl mb-3"
                >
                  {"🐕"}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Future Dog Dad</h3>
                <p className="text-muted-foreground mb-4">{"Can't wait for my furry companion! I absolutely love dogs."}</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary w-fit"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {"🐾"}
                  </motion.span>
                  <span>Coming soon!</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personality highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full">
            <motion.span 
              className="text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {"💬"}
            </motion.span>
            <span className="text-foreground font-medium">I love interacting and connecting with people!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
