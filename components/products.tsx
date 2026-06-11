import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { Reveal } from "@/components/reveal"
import { products, WHATSAPP_NUMBER } from "@/lib/data"

function orderLink(productName: string) {
  return `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `¡Hola Bizcochao! Quiero pedir: ${productName} 🍰`,
  )}`
}

export function Products() {
  return (
    <section id="productos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
            Favoritos de nuestros clientes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Los antojos que más se repiten en cada pedido.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
                    className="mt-5 w-full border border-primary/20 bg-primary/15 px-5 py-2.5 text-sm text-primary hover:bg-primary/25"
                  >
                    <MessageCircle className="size-4" />
                    Pedir
                  </LinkButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
