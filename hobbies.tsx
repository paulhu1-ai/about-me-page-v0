"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, ExternalLink } from "lucide-react"

const contacts = [
  {
    platform: "Slack",
    handle: "@paul.hundhausen",
    description: "Best way to reach me at Vercel",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    color: "from-[#4A154B]/20 to-[#4A154B]/10",
    borderColor: "border-[#4A154B]/30",
    href: "slack://user?team=T02V3BMHS&id=paul.hundhausen",
  },
  {
    platform: "Email",
    handle: "paul.hundhausen@vercel.com",
    description: "For anything work related",
    icon: <Mail className="w-6 h-6" />,
    color: "from-primary/20 to-primary/10",
    borderColor: "border-primary/30",
    href: "mailto:paul.hundhausen@vercel.com",
  },
  {
    platform: "WhatsApp",
    handle: "+49 176 4719 8341",
    description: "For quick chats",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "from-green-500/20 to-green-500/10",
    borderColor: "border-green-500/30",
    href: "https://wa.me/4917647198341",
  },
]

export function Connect() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;d love to hear from you! Reach out anytime.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.platform}
              href={contact.href}
              target={contact.platform === "WhatsApp" ? "_blank" : undefined}
              rel={contact.platform === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative block overflow-hidden rounded-2xl border ${contact.borderColor} bg-gradient-to-br ${contact.color} backdrop-blur-sm p-6 cursor-pointer`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-card/50 border border-border flex items-center justify-center mb-4 text-foreground group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                {/* Platform */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{contact.platform}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Handle */}
                <p className="text-primary font-medium mb-2 break-all">{contact.handle}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Made with <span className="text-red-400">{"♥"}</span> by Paul
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Powered by Vercel & Next.js
          </p>
        </motion.div>
      </div>
    </section>
  )
}
