import { Camera, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { navLinks, WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo textClassName="text-primary-foreground" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Dulce, artesanal y hecho con amor.
          </p>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h3 className="font-heading text-base font-semibold">Enlaces rápidos</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-base font-semibold">Síguenos</h3>
          <div className="mt-4 flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escríbenos por WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors hover:bg-primary-foreground/25"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/15 transition-colors hover:bg-primary-foreground/25"
            >
              <Camera className="size-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70 md:px-8">
          © {new Date().getFullYear()} Bizcochao. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
