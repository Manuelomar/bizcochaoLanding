import Image from "next/image"

export function Logo({
  className,
  textClassName,
  size = 44,
}: {
  className?: string
  textClassName?: string
  size?: number
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span
        className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-card shadow-sm ring-1 ring-border"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo de Bizcochao"
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
      <span
        className={`font-heading text-xl font-semibold tracking-tight text-primary ${textClassName ?? ""}`}
      >
        Bizcochao
      </span>
    </div>
  )
}
