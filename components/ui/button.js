import React from "react"
import { cn } from "@/lib/utils"

/**
 * Props:
 * - children: button content
 * - className: custom Tailwind classes
 * - variant: "default" | "ghost" | "outline" (optional)
 * - onClick: click handler
 */
export function Button({ children, className, variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
  }

  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  )
}
