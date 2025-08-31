"use client"

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow border border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`px-4 py-3 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-sm font-semibold text-gray-700 ${className}`}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
