import { Heart, Sparkles, Home } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { InteractiveImage } from "@/components/interactive-image"

const values = [
  { icon: Heart, label: "Hecho con amor" },
  { icon: Sparkles, label: "Cuidado en cada detalle" },
  { icon: Home, label: "Sabores de casa" },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <Reveal className="order-2 md:order-1">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
            NUESTRA HISTORIA
          </span>
          <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Sabor, amor y creatividad en cada mesa
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Bizcochao nace con el deseo de llevar sabor, amor y creatividad a
            cada mesa. Cada pedido se prepara con dedicación, cuidando los
            detalles y usando sabores que hacen sentir en casa.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {values.map((v) => (
              <li
                key={v.label}
                className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-accent-foreground"
              >
                <v.icon className="size-4 text-primary" />
                {v.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="order-1 md:order-2">
          <InteractiveImage
            img1="/images/about.png"
            img2="/images/hero-cake.png"
            alt1="Cocina artesanal de Bizcochao preparando postres"
            alt2="Pastel de Bizcochao"
            aspectRatioClassName="aspect-[4/5]"
            decorationClassName="absolute inset-0 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-[#f4a261]/20 shadow-lg"
            rotateOnHover={5}
          />
        </Reveal>
      </div>
    </section>
  )
}
