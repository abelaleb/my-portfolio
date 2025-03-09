import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  isIcon?: boolean
}

export function Button({ children, variant = "primary", isIcon = false, className }: ButtonProps) {
  return (
    <button className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary/90 text-[12px] md:text-lg"
          : "border-2 border-primary text-primary hover:bg-primary hover:text-white text-[12px] md:text-lg ",
        isIcon ? "p-2" : "px-6 py-3",
        className,
      )}>
      {children}
    </button>
  )
}
