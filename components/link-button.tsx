import type { AnchorHTMLAttributes } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
}

/** Anchor styled like a Button (the base-ui Button has no asChild support). */
export function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        buttonVariants({ variant, size }),
        // Generous padding + soft pill shape regardless of the tiny base sizes
        "h-auto gap-2 rounded-full px-7 py-3.5 text-base font-medium backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  )
}
