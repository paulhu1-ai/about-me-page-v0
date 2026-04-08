"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Building2, Heart } from "lucide-react"

const experiences = [
  {
    icon: Building2,
    title: "Financial SaaS",
    description: "Helped fintech companies scale their operations",
  },
  {
    icon: TrendingUp,
    title: "Real Estate",
    description: "Drove digital transformation in property tech",
  },
]

export function About() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            My Journey to <span className="text-primary">Vercel</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                Before joining Vercel, I built my career in the <span className="text-primary font-medium">Financial SaaS</span> and <span className="text-accent font-medium">Real Estate</span> sectors, 
                helping companies leverage technology to transform their operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <exp.icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{exp.title}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Why Vercel?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m genuinely excited to help companies see how Vercel can benefit their operations. 
                I&apos;m convinced that <span className="text-primary font-medium">every company could benefit from Vercel</span> - 
                and I can&apos;t wait to show them why.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
