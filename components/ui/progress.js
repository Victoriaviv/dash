// ui/progress.js
import React from "react";

export function Progress({ value = 0, className = "", color = "bg-blue-500" }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className={`${color} h-full transition-all duration-300`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
