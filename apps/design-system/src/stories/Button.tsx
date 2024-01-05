import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, className = 'rounded-md px-4 h-12', ...props }, ref) => {
    return (
      <>
        <button type="button" ref={ref} {...props} className={`bg-blue-500 text-white hover:bg-blue-300 ${className}`}>
          {label}
        </button>
      </>
    )
  },
)

Button.displayName = 'Button'
