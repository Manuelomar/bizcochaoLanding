import { Check, MessageCircle } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Reveal } from "@/components/reveal"
import { Wave } from "@/components/wave"
import { WHATSAPP_NUMBER } from "@/lib/data"

const benefits = [
  "Pedidos personalizados",
  "Postres frescos",
  "Opciones dulces y saladas",
  "Atención por WhatsApp",
]

const quoteLink = `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola Bizcochao! Quiero cotizar postres para mi evento 🎉",
)}`

export function Events() {
  return (
    <section className="relative overflow-hidden bg-muted py-20 md:py-28">
      <Wave position="top" color="#FADADD" colorBack="#FADADD" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-balance text-accent-foreground md:text-4xl">
            Endulzamos tus eventos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-accent-foreground/80">
            Preparamos pedidos personalizados para cumpleaños, reuniones,
            celebraciones, actividades empresariales y momentos especiales.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-sm ring-1 ring-border"
              >
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <span className="font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <LinkButton
            href={quoteLink}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-10 border border-primary/20 bg-primary/15 text-primary hover:bg-primary/25"
          >
            <MessageCircle className="size-5" />
            Cotizar mi evento
          </LinkButton>
        </Reveal>
      </div>
    </section>
  )
}
