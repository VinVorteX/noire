"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 px-6 bg-gradient-to-br from-background via-[#1a1410] to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 text-sm tracking-widest text-primary uppercase font-light">Get in Touch</div>
          <h1 className="text-6xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
           <span className="text-primary">Contact Us</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Questions about our products? Want to collaborate? We're here to listen.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-12">
              Let's <span className="text-primary">Connect</span>
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-light">Email</h3>
                <a href="mailto:hello@noire.com" className="text-lg text-foreground hover:text-primary transition">
                  hello@noire.com
                </a>
                <p className="text-sm text-muted-foreground mt-2 font-light">
                  For product inquiries and collaborations
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-light">Phone</h3>
                <a href="tel:+1234567890" className="text-lg text-foreground hover:text-primary transition">
                  +1 (234) 567-890
                </a>
                <p className="text-sm text-muted-foreground mt-2 font-light">Available Monday-Friday, 9AM-6PM EST</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-light">Follow</h3>
                <div className="flex gap-6">
                  <a href="#" className="text-lg text-foreground hover:text-primary transition">
                    Instagram
                  </a>
                  <a href="#" className="text-lg text-foreground hover:text-primary transition">
                    Pinterest
                  </a>
                  <a href="#" className="text-lg text-foreground hover:text-primary transition">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-widest mb-3 font-light">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-primary/20 rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest mb-3 font-light">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-primary/20 rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest mb-3 font-light">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-primary/20 rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary transition font-light"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-widest mb-3 font-light">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-card border border-primary/20 rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition font-light resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-widest uppercase font-light hover:opacity-90 transition"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Frequently Asked</h2>

          <div className="space-y-8">
            {[
              {
                question: "What are your shipping times?",
                answer:
                  "Orders typically ship within 2-3 business days. Delivery times vary by location but most orders arrive within 5-7 business days.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Yes, we ship to most countries worldwide. International shipping times and costs vary by destination.",
              },
              {
                question: "What's your return policy?",
                answer:
                  "We offer 30-day returns on unused products in original packaging. Your satisfaction is our priority.",
              },
              {
                question: "Are your products vegan?",
                answer:
                  "Most of our collection is vegan. Please check individual product descriptions for specific ingredient information.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-primary/20 pb-8 last:border-0">
                <h3 className="text-lg font-light mb-3">{faq.question}</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-background via-[#1a1410] to-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Thank you for <span className="text-primary">reaching out</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-12">We'll get back to you as soon as possible.</p>
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-light hover:opacity-90 transition"
          >
            Back to Home
          </a>
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
