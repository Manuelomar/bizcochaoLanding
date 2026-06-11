type WaveProps = {
  className?: string
  /** "top" flips the wave to sit at the top of a section */
  position?: "top" | "bottom"
  /** main wave fill color */
  color?: string
  /** secondary (back) wave fill color */
  colorBack?: string
}

/**
 * Decorative layered waves inspired by the Bizcochao logo.
 * Purely decorative, hidden from screen readers.
 */
export function Wave({
  className,
  position = "bottom",
  color = "#C6E3D2",
  colorBack = "#DCEFE5",
}: WaveProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${position === "top" ? "top-0" : "bottom-0"} overflow-hidden leading-[0] ${className ?? ""}`}
      style={{ transform: position === "top" ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="h-[80px] w-full md:h-[140px]"
      >
        <path
          fill={colorBack}
          d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192L1440,220L0,220Z"
        />
        <path
          fill={color}
          d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,170.7C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,220L0,220Z"
        />
      </svg>
    </div>
  )
}
