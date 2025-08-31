// components/ui/badge.js
import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  let baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  let variantClasses = "";
  switch (variant) {
    case "default":
      variantClasses = "bg-gray-100 text-gray-800";
      break;
    case "secondary":
      variantClasses = "bg-blue-100 text-blue-800";
      break;
    case "success":
      variantClasses = "bg-green-100 text-green-800";
      break;
    case "warning":
      variantClasses = "bg-yellow-100 text-yellow-800";
      break;
    case "danger":
      variantClasses = "bg-red-100 text-red-800";
      break;
    case "outline":
      variantClasses = "border border-gray-300 text-gray-800";
      break;
    default:
      variantClasses = "bg-gray-100 text-gray-800";
  }

  return <span className={`${baseClasses} ${variantClasses} ${className}`}>{children}</span>;
}
