"use client";
import { Navbar } from "@/components/navbar";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Philosophy } from "../components/Philosophy";

export default function Home() {
  const scrollToCollection = () => {
    const element = document.getElementById("collection");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const products = [
    {
      name: "Midnight Velvet",
      description: "Deep, intentional. A shade that speaks before words.",
      shade: "from-primary to-primary/80",
      image: "/lipstick1.jpeg"
    },
    {
      name: "Refined Noir",
      description: "Pure. Undeniable. The perfect red-black.",
      shade: "from-primary/90 to-black",
      image: "/lipstick1.jpeg"
    },
    {
      name: "After Hours",
      description: "Sophisticated calm. Confidence in a tube.",
      shade: "from-primary/75 to-primary/95",
      image: "/lipstick1.jpeg"
    },
  ];
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-background via-[#1a1410] to-background">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/NOIRÈ.png"
            alt="NOIRÈ After Dark"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="mb-6 text-sm tracking-widest text-primary uppercase font-light">
            After Dark Luxury
          </div>
          <h1 className="text-6xl md:text-7xl font-light tracking-tighter mb-6 leading-tight">
            True Power <span className="text-primary">is Quiet</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto mb-12">
            Luxury lip color for women who use beauty as self-expression,
            ritual, and personal power. Emotion-driven, never trend-driven.
          </p>
          <button
            onClick={scrollToCollection}
            className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-light hover:opacity-90 transition"
          >
            Explore Collection
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Products Section */}
      <section
        className="py-20 md:py-32 px-6 bg-card scroll-mt-24"
        id="collection"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
            The Collection
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Restrained luxury in every shade. Designed for women who know what
            they want.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group">
                <div className="relative h-110 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Editorial dark overlay */}
                  <div className="absolute inset-0 bg-black/35" />
                </div>

                <h3 className="text-lg font-light mb-2">{product.name}</h3>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                  {product.description}
                </p>

                <button className="text-primary text-sm uppercase tracking-widest font-light hover:opacity-70 transition">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Our Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Restrained",
                text: "Black as foundation, gold as accent, white for clarity. Fewer elements, more meaning.",
              },
              {
                title: "Intentional",
                text: "Every decision is guided by one question: Does this feel quietly powerful?",
              },
              {
                title: "Uncompromising",
                text: "Performance, comfort, and premium experience. Never excess. Never noise.",
              },
            ].map((value, idx) => (
              <div key={idx} className="border-l border-primary/30 pl-6">
                <h3 className="text-2xl font-light mb-4 text-primary">
                  {value.title}
                </h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-background via-[#1a1410] to-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Choose <span className="text-primary">Yourself</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-12">
            For moments when you know exactly who you are.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-light hover:opacity-90 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">
                About
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                NOIRÈ is built on the belief that true power is quiet. Luxury
                without excess.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">
                Contact
              </h3>
              <p className="text-sm text-primary hover:opacity-70 cursor-pointer">
                hello@noire.com
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-4 font-light">
                Follow
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm text-primary hover:opacity-70 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-primary hover:opacity-70 transition"
                >
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
  );
}
