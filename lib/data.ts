export const WHATSAPP_NUMBER = "8094333384"
export const WHATSAPP_LINK = `https://wa.me/1${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola Bizcochao! Me gustaría hacer un pedido 🍰",
)}`
export const INSTAGRAM_LINK = "https://instagram.com/bizcochao"

export type Category = {
  name: string
  description: string
  icon: string
}

export const categories: Category[] = [
  { name: "Pasteles", description: "Bizcochos suaves y personalizados para cada ocasión.", icon: "CakeSlice" },
  { name: "Tres Leches", description: "Cremosos, frescos y llenos de sabor casero.", icon: "Milk" },
  { name: "Postres variados", description: "Cheesecakes, brownies y dulces irresistibles.", icon: "Dessert" },
  { name: "Empanadas", description: "Doraditas y rellenas, perfectas para compartir.", icon: "Soup" },
  { name: "Quipes", description: "Crujientes por fuera, sabrosos por dentro.", icon: "Drumstick" },
  { name: "Croquetas", description: "Bocados salados ideales para tus picaderas.", icon: "Beef" },
  { name: "Café", description: "Caliente o frío, para acompañar tu antojo.", icon: "Coffee" },
  { name: "Batidas", description: "Refrescantes y cremosas, hechas al momento.", icon: "CupSoda" },
]

export type Product = {
  name: string
  description: string
  image: string
  gallery?: string[]
}

export const products: Product[] = [
  {
    name: "Bizcocho personalizado",
    description: "Diseñado a tu gusto para cumpleaños y celebraciones.",
    image: "/images/prod-bizcocho.png",
    gallery: ["/images/prod-bizcocho.png", "/images/hero-cake.png", "/images/about.png"],
  },
  {
    name: "Tres leches artesanal",
    description: "Esponjoso y bañado en nuestra mezcla secreta de leches.",
    image: "/images/prod-tresleches.png",
    gallery: ["/images/prod-tresleches.png", "/images/hero-cake.png"],
  },
  {
    name: "Cheesecake",
    description: "Cremoso con topping de fresas frescas.",
    image: "/images/prod-cheesecake.png",
    gallery: ["/images/prod-cheesecake.png", "/images/hero-cake.png", "/images/about.png"],
  },
  {
    name: "Brownies",
    description: "Intensos, húmedos y con mucho chocolate.",
    image: "/images/prod-brownies.png",
    gallery: ["/images/prod-brownies.png"],
  },
  {
    name: "Empanadas",
    description: "Crujientes y rellenas, perfectas para tus eventos.",
    image: "/images/prod-empanadas.png",
    gallery: ["/images/prod-empanadas.png", "/images/about.png"],
  },
  {
    name: "Café frío o batida",
    description: "Bebidas refrescantes hechas con amor.",
    image: "/images/prod-cafe.png",
    gallery: ["/images/prod-cafe.png", "/images/hero-cake.png"],
  },
]

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Menú", href: "#menu" },
  { label: "Sobre Nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
]
