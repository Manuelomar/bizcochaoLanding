import { MessageCircle, UtensilsCrossed } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Reveal } from "@/components/reveal"
import { Wave } from "@/components/wave"
import { WHATSAPP_LINK } from "@/lib/data"
import { InteractiveImage } from "@/components/interactive-image"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-10 md:pt-16">
      {/* modern vibrant blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 size-72 rounded-full bg-primary/10 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-48 size-64 rounded-full bg-[#f4a261]/20 blur-[80px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 md:grid-cols-2 md:px-8 md:pb-32">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-card px-4 py-1.5 text-sm font-bold tracking-wide text-primary shadow-sm">
            REPOSTERÍA BOUTIQUE
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight text-balance text-foreground tracking-tight md:text-7xl">
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
              className="rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl"
            >
              <MessageCircle className="size-5" />
              Ordenar ahora
            </LinkButton>
            <LinkButton
              href="#menu"
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-primary/20 bg-transparent text-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
            >
              <UtensilsCrossed className="size-5" />
              Ver menú
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <InteractiveImage 
            img1="/images/hero-cake.png"
            img2="/images/about.png"
            alt1="Pastel artesanal de Bizcochao decorado con fresas"
            alt2="Postre de Bizcochao"
          />
        </Reveal>
      </div>

      <Wave />
    </section>
  )
}
