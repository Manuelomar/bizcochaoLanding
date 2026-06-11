import {
  CakeSlice,
  Milk,
  Dessert,
  Soup,
  Drumstick,
  Beef,
  Coffee,
  CupSoda,
  type LucideIcon,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { categories } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  CakeSlice,
  Milk,
  Dessert,
  Soup,
  Drumstick,
  Beef,
  Coffee,
  CupSoda,
}

export function Categories() {
  return (
    <section id="menu" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-secondary-foreground md:text-5xl">
            Lo que preparamos para ti
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/75">
            Una selección dulce y salada para cada antojo y ocasión.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? CakeSlice
            return (
              <Reveal key={cat.name} delay={(i % 4) * 0.08}>
                <article className="group h-full rounded-[2rem] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
