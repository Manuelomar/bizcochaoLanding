"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface InteractiveImageProps {
  img1: string
  img2: string
  alt1: string
  alt2: string
  aspectRatioClassName?: string
  decorationClassName?: string
  rotateOnHover?: number
}

export function InteractiveImage({
  img1,
  img2,
  alt1,
  alt2,
  aspectRatioClassName = "aspect-square",
  decorationClassName = "absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-[#f4a261]/20 shadow-lg",
  rotateOnHover = -5
}: InteractiveImageProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const img1Front = !isFlipped
  const img2Front = isFlipped

  return (
    <div
      className={`relative mx-auto w-full max-w-md cursor-pointer ${aspectRatioClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        aria-hidden="true"
        className={`${decorationClassName} transition-transform duration-500 ease-out`}
        style={{
          transform: isHovered ? `rotate(${rotateOnHover}deg) scale(1.02)` : "scale(1)", // Base rotation is usually in className, so we just add extra transform or rely on framer. Wait, standard transform overrides className transform.
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
          alt={alt2}
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
          alt={alt1}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
