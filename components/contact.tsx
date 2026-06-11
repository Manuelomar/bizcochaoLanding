import { MessageCircle, Camera, Clock, MapPin } from "lucide-react"
import Image from "next/image"
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
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-secondary-foreground md:text-5xl">
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
              className="w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl sm:w-auto"
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
              className="w-full rounded-full border-2 border-primary/20 bg-card text-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md sm:w-auto"
            >
              <Camera className="size-5" />
              Síguenos en Instagram
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {/* Tarjetas de Información */}
          <div className="grid gap-5 sm:grid-cols-2">
            {info.map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-[2rem] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

          {/* Tarjeta del Código QR de Instagram (Más grande y centrada) */}
          <Reveal delay={0.3} className="mx-auto w-full max-w-md">
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center group border border-primary/5">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-6 w-full"
              >
                <div className="relative w-full max-w-[320px] aspect-square overflow-hidden rounded-[2rem] bg-white p-2 shadow-sm border border-border/50 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-md">
                  <Image
                    src="/images/instagram-qr.png"
                    alt="Instagram QR Code"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    <Camera className="size-6 text-primary" />
                    @bizcochao
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    Escanea para descubrir más delicias
                  </p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
