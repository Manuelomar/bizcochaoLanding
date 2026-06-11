import { MessageCircle, Camera, Clock, MapPin } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Reveal } from "@/components/reveal"
import { Wave } from "@/components/wave"
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/data"

const info = [
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lun a Sáb: 9:00 am – 7:00 pm", "Domingo: pedidos previos"],
  },
  {
    icon: MapPin,
    title: "Ubicación",
    lines: ["Santo Domingo, R.D.", "Entregas y retiro coordinados"],
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <Wave position="top" color="#FADADD" colorBack="#FADADD" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-balance text-secondary-foreground md:text-4xl">
            Haz tu pedido
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondary-foreground/80">
            Escríbenos y endulzamos tu día. Realiza tus pedidos con tiempo para
            garantizar disponibilidad.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <LinkButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <MessageCircle className="size-5" />
              Ordenar por WhatsApp
            </LinkButton>
            <LinkButton
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              className="w-full rounded-full border-primary/30 bg-card text-primary hover:bg-muted sm:w-auto"
            >
              <Camera className="size-5" />
              Síguenos en Instagram
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {info.map((item, i) => (
            <Reveal key={item.title} delay={0.15 + i * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
