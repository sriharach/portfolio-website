export interface ButtonDaisyUiProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  color?: 'primary' | 'secondary' | 'accent' | 'ghost'
  variant?: 'outline' | 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
}
