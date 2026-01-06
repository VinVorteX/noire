"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const scrollToCollection = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById("collection")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
        <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center overflow-hidden bg-black/40">
          <Image
            src="/noire-logo.png"
            alt="NOIRÈ"
            width={48}
            height={48}
            className="w-10 h-10 object-contain"
            priority
          />
        </div>
        <span className="text-sm uppercase tracking-widest font-light hidden sm:inline">NOIRÈ</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm tracking-wide">
        <a href="#collection" onClick={scrollToCollection} className="hover:text-primary transition">
          COLLECTION
        </a>
        <a href="/about" className="hover:text-primary transition">
          ABOUT
        </a>
        <a href="/contact" className="hover:text-primary transition">
          CONTACT
        </a>
      </div>
      <button className="text-primary">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2-9m-12 9h16m-6-9v6m-4-6v6"
          />
        </svg>
      </button>
    </nav>
  )
}
