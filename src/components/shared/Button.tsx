import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'light' | 'iconOnly';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  className = '',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] ${
    variant === 'iconOnly' ? '' : 'text-sm sm:text-base px-4 py-2'
  }`;

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-hover)] hover:shadow-md',

    outline:
      'border border-[var(--color-primary)] text-[var(--color-heading)] hover:bg-orange-50 hover:text-[var(--color-primary)]',

    light:
      'bg-white text-[var(--color-heading)] shadow-md hover:bg-orange-50 hover:text-[var(--color-primary)]',

    iconOnly:
      'h-10 w-10 shrink-0 rounded-lg bg-transparent text-[var(--color-text)] hover:bg-orange-50 hover:text-[var(--color-primary)]',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      aria-label={variant === 'iconOnly' ? props['aria-label'] : undefined}
      {...props}
    >
      {variant !== 'iconOnly' && leftIcon}
      {variant !== 'iconOnly' && children}
      {variant !== 'iconOnly' && rightIcon}

      {variant === 'iconOnly' && (children ?? leftIcon ?? rightIcon)}
    </button>
  );
}
