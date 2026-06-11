"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function InteractiveHeroImage() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const img1 = "/images/hero-cake.png"
  const img2 = "/images/about.png"

  const img1Front = !isFlipped
  const img2Front = isFlipped

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-[#f4a261]/20 shadow-lg transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? "rotate(-5deg) scale(1.02)" : "rotate(-3deg) scale(1)",
        }}
      />

      {/* Image 2 (Back initially) */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-border/50 bg-background"
        initial={false}
        animate={{
          rotate: img2Front ? (isHovered ? 4 : 0) : (isHovered ? -8 : -4),
          x: img2Front ? (isHovered ? 15 : 0) : (isHovered ? -30 : -12),
          y: img2Front ? (isHovered ? -15 : 0) : (isHovered ? 20 : 12),
          scale: img2Front ? 1 : 0.9,
          zIndex: img2Front ? 20 : 10,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
      >
        <Image
          src={img2}
          alt="Postre de Bizcochao"
          fill
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover"
        />
      </motion.div>

      {/* Image 1 (Front initially) */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-border/50 bg-background"
        initial={false}
        animate={{
          rotate: img1Front ? (isHovered ? 4 : 0) : (isHovered ? -8 : -4),
          x: img1Front ? (isHovered ? 15 : 0) : (isHovered ? -30 : -12),
          y: img1Front ? (isHovered ? -15 : 0) : (isHovered ? 20 : 12),
          scale: img1Front ? 1 : 0.9,
          zIndex: img1Front ? 20 : 10,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
      >
        <Image
          src={img1}
          alt="Pastel artesanal de Bizcochao decorado con fresas"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
