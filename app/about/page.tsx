"use client"

import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 px-6 bg-gradient-to-br from-background via-[#1a1410] to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 text-sm tracking-widest text-primary uppercase font-light">Our Story</div>
          <h1 className="text-6xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
            About <span className="text-primary">NOIRÈ</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Founded on a singular belief: true power is quiet. NOIRÈ exists for women who understand that luxury means
            intention, not excess.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Born from <span className="text-primary">Restraint</span>
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
              NOIRÈ emerged from a simple observation: luxury doesn't need to shout. The most powerful moments come from
              silence, from knowing exactly who you are, and from choosing beauty that honors that certainty.
            </p>
            <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
              We started by asking one question: What would a lip color look like if designed entirely for intention?
              The answer was NOIRÈ—minimal, sensual, editorial. A color that makes a statement precisely because it
              refuses to explain itself.
            </p>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Every shade, every formula, every decision is guided by our core belief: Does this feel quietly powerful?
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-lg flex items-center justify-center border border-primary/20">
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-muted-foreground text-sm">Luxury defined</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Restrained",
                description:
                  "Black as foundation, gold as accent, white for clarity. We believe in the power of limitation. Fewer elements mean more meaning. Every choice is deliberate.",
              },
              {
                title: "Intentional",
                description:
                  "We design for moments when women choose themselves. Not for trends, not for others—for personal ritual, self-expression, and inner assurance.",
              },
              {
                title: "Uncompromising",
                description:
                  "Performance, comfort, luxury feel. These are non-negotiable. If something looks impressive but feels uncomfortable, it does not belong to NOIRÈ.",
              },
            ].map((value, idx) => (
              <div key={idx} className="border border-primary/20 rounded-lg p-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-light mb-4 text-primary">{value.title}</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Our Commitment</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
            NOIRÈ is committed to creating products that are as honest as they are beautiful. We source responsibly, we
            formulate thoughtfully, and we stand behind every product we create.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-primary/20 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-primary">Ethically Made</h3>
              <p className="text-sm text-muted-foreground font-light">
                We partner with suppliers who share our values around quality, safety, and ethical production.
              </p>
            </div>
            <div className="p-8 border border-primary/20 rounded-lg">
              <h3 className="text-xl font-light mb-4 text-primary">Cruelty-Free</h3>
              <p className="text-sm text-muted-foreground font-light">
                Never tested on animals. Never. Our commitment to beauty without harm is absolute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-background via-[#1a1410] to-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ready to <span className="text-primary">Choose Yourself?</span>
          </h2>
          <button className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-light hover:opacity-90 transition">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">About</h3>
              <a href="/about" className="text-sm text-primary hover:opacity-70 transition">
                Our Story
              </a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">Contact</h3>
              <a href="/contact" className="text-sm text-primary hover:opacity-70 transition">
                Get in Touch
              </a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">Follow</h3>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-primary hover:opacity-70 transition">
                  Instagram
                </a>
                <a href="#" className="text-sm text-primary hover:opacity-70 transition">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
            <p>© 2026 NOIRÈ. Designed for intention.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
