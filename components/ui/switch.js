// ui/switch.js
import React from "react";

export function Switch({ checked = false, onChange }) {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
      <div
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </label>
  );
}
