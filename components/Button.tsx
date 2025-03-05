import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  isIcon?: boolean
}

export function Button({ children, variant = "primary", isIcon = false, className, ...props }: ButtonProps) {
  return (
    <button className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        variant === "primary"
          ? "bg-primary text-white hover:bg-Fprimary/90"
          : "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        isIcon ? "p-2" : "px-6 py-3",
        className,
      )}>
      {children}
    </button>
  )
}
