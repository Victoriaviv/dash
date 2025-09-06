import { Slot } from "@radix-ui/react-slot"; // only if using Radix UI
import { cn } from "@/lib/utils";

export const Button = ({ className, variant = "default", asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";

  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <Comp className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {props.children}
    </Comp>
  );
};
