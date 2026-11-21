interface ButtonDaisyUiBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  color?: 'primary' | 'secondary' | 'accent' | 'ghost'
  variant?: 'outline' | 'primary' | 'ghost' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
}

export type ButtonDaisyUiProps = ButtonDaisyUiBaseProps & (
  | {
      iconOnly: true
      icon: React.ReactNode
      startIcon?: never
      endIcon?: never
      square: true
      circle?: never
    }
  | {
      iconOnly: true
      icon: React.ReactNode
      startIcon?: never
      endIcon?: never
      square?: never
      circle: true
    }
  | {
      iconOnly?: false
      icon?: never
      startIcon?: React.ReactNode
      endIcon?: React.ReactNode
      square?: never
      circle?: never
    }
)
