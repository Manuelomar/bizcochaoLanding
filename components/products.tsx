import { Reveal } from "@/components/reveal"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"


export function Products() {
  return (
    <section id="productos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Favoritos de nuestros clientes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Los antojos que más se repiten en cada pedido.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
