import React from "react"
import { cn } from "../../lib/util"

const Switch = React.forwardRef(({ className, onCheckedChange, ...props }, ref) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        ref={ref}
        onChange={(event) => {
          if (onCheckedChange) {
            onCheckedChange(event.target.checked);
          }
        }}
        {...props}
      />
      <div
        className={cn(
          "relative w-11 h-6 bg-gray-300 rounded-full dark:bg-gray-600 peer-checked:bg-black dark:peer-checked:bg-white transition-all duration-300 ease-in-out after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:dark:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 after:ease-in-out peer-checked:after:translate-x-full",
          className
        )}
      />
    </label>
  )
})
Switch.displayName = "Switch"

export { Switch }
