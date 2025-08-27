import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const luxuryButtonVariants = cva(
  "relative overflow-hidden transition-all duration-500 font-semibold tracking-wide",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-luxury text-primary-foreground",
          "hover:shadow-glow hover:scale-105",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
          "shadow-luxury"
        ],
        secondary: [
          "bg-card border-2 border-primary/30 text-foreground",
          "hover:border-primary hover:bg-primary/10 hover:shadow-luxury",
          "transition-all duration-300"
        ],
        ghost: [
          "text-primary hover:text-primary-glow",
          "hover:bg-primary/10 border border-primary/20 hover:border-primary/40"
        ]
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-9 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxuryButtonVariants> {
  asChild?: boolean;
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <Button
        className={cn(luxuryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";

export { LuxuryButton, luxuryButtonVariants };