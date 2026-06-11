import Image from "next/image"
import { MessageCircle, UtensilsCrossed } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Reveal } from "@/components/reveal"
import { Wave } from "@/components/wave"
import { WHATSAPP_LINK } from "@/lib/data"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-10 md:pt-16">
      {/* soft organic blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 size-72 rounded-full bg-secondary/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-48 size-64 rounded-full bg-muted/60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 md:grid-cols-2 md:px-8 md:pb-32">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-sm ring-1 ring-border">
            Repostería artesanal boutique
          </span>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-balance text-foreground md:text-6xl">
            Postres artesanales hechos con{" "}
            <span className="italic text-primary">amor</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            En Bizcochao preparamos pasteles, tres leches, postres, picaderas,
            café y batidas para endulzar tus momentos especiales.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="border border-primary/20 bg-primary/15 text-primary hover:bg-primary/25"
            >
              <MessageCircle className="size-5" />
              Ordenar ahora
            </LinkButton>
            <LinkButton
              href="#menu"
              size="lg"
              variant="outline"
              className="border border-secondary-foreground/15 bg-secondary/40 text-secondary-foreground hover:bg-secondary/60"
            >
              <UtensilsCrossed className="size-5" />
              Ver menú
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-secondary"
            />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-border">
              <Image
                src="/images/hero-cake.png"
                alt="Pastel artesanal de Bizcochao decorado con fresas"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Wave />
    </section>
  )
}
