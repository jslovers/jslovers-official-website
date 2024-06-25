import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "flex items-center rounded-md text-sm font-medium", 
  {
    variants: {
      variant: {
        default: "bg-indigo-300 hover:bg-indigo-600 hover:text-white",
        secondary: "bg-background-gray-light",  
      },
      size: {
        default: "h-10 py-2 px-4",
        lg: "h-16 px-6 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps
  = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
