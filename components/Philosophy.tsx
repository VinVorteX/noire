"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Philosophy() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text → from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Designed for <span className="text-primary">intention</span>
          </h2>

          <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
            NOIRÈ exists in moments when women choose themselves. Whether
            that's a night out, a quiet evening, or a moment of inner
            assurance—every product prioritizes performance, comfort, and a
            premium experience.
          </p>

          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Minimal. Sensual. Editorial. If something looks impressive but
            feels uncomfortable, it does not belong to NOIRÈ.
          </p>
        </motion.div>

        {/* Image → from RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative h-[28rem] w-full rounded-lg overflow-hidden"
        >
          <Image
            src="/lipstick2.jpeg"
            alt="NOIRÈ philosophy"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

      </div>
    </section>
  )
}
