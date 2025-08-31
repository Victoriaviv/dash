// lib/utils.js

/**
 * Utility to merge class names (like classnames library)
 * Supports conditional classes
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  