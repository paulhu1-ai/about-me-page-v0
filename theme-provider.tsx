"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Floating orbs for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative mb-8"
        >
          <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto">
            {/* Animated ring around photo */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, var(--primary) 25%, transparent 50%)",
                opacity: 0.3,
              }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 180deg, transparent 0%, var(--accent) 25%, transparent 50%)",
                opacity: 0.2,
              }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl shadow-primary/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slack%20pp-IVLeyJZ38X7kSmKHT3PSqp08lQUmJD.jpeg"
                alt="Paul Hundhausen"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Wave badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
              className="absolute -bottom-2 -right-2 w-14 h-14 bg-card rounded-full border-2 border-border flex items-center justify-center shadow-lg"
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-3xl"
              >
                {"👋"}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 text-balance"
        >
          <span className="text-foreground">Hey, I&apos;m </span>
          <span className="text-primary">Paul</span>
        </motion.h1>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground font-medium">
            Commercial VDR
          </span>
          <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium">
            EMEA
          </span>
          <span className="px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium">
            {"Bailey's Team"}
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-lg">Hamburg, Germany</span>
          <span className="text-sm opacity-60">(Remote)</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
