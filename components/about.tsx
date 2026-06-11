import Image from "next/image"
import { Heart, Sparkles, Home } from "lucide-react"
import { Reveal } from "@/components/reveal"

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
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            Sobre Bizcochao
          </span>
          <h2 className="mt-5 font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-muted"
            />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-border">
              <Image
                src="/images/about.png"
                alt="Cocina artesanal de Bizcochao preparando postres"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
