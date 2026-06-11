"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Product } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"
import { WHATSAPP_NUMBER } from "@/lib/data"

function orderLink(productName: string) {
  return `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `¡Hola Bizcochao! Quiero pedir: ${productName} 🍰`,
  )}`
}

export function ProductCard({ product }: { product: Product }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div 
          className="relative aspect-[4/3] overflow-hidden cursor-pointer"
          onClick={() => {
            setCurrentIndex(0)
            setIsGalleryOpen(true)
          }}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center">
            <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 bg-black/20 backdrop-blur-md border border-white/50 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-black/40">
              Ver producto
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {product.name}
          </h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <LinkButton
            href={orderLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <MessageCircle className="size-4" />
            Pedir
          </LinkButton>
        </div>
      </article>

      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setIsGalleryOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4"
            >
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="absolute -top-12 right-4 md:-right-12 md:top-0 p-2 text-white/70 hover:text-white transition-colors z-50"
              >
                <X className="size-8" />
              </button>

              <div className="relative aspect-square w-full md:aspect-[4/3] max-h-[70vh] overflow-hidden rounded-2xl bg-black/50 ring-1 ring-white/20 shadow-2xl">
                <Image
                  src={images[currentIndex]}
                  alt={`${product.name} gallery image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-110 z-20"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-110 z-20"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="mt-6 flex gap-3 overflow-x-auto px-4 pb-4 w-full justify-center scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentIndex(idx)
                      }}
                      className={`relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-xl transition-all ${
                        idx === currentIndex ? "ring-2 ring-primary ring-offset-2 ring-offset-black scale-105" : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
