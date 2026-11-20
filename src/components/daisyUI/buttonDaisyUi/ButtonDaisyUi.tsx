// lib
import React from 'react'
import clsx from 'clsx'

// type
import { ButtonDaisyUiProps } from './ButtonDaisyUi.type'

const ButtonDaisyUi = ({
  text = 'Button',
  color = 'primary',
  variant = 'primary',
  loading,
  className,
  fullWidth,
  ...props
}: ButtonDaisyUiProps) => {
  return (
    <button
      className={clsx(
        'btn',
        {
          'btn-primary': color === 'primary',
          'btn-secondary': color === 'secondary',
          'btn-accent': color === 'accent',
          'btn-ghost': variant === 'ghost' || color === 'ghost',
          'btn-outline': variant === 'outline',
          'btn-block': fullWidth,
        },
        className,
      )}
      {...props}
    >
      {loading ? <span className='loading loading-spinner' /> : text}
    </button>
  )
}

export default ButtonDaisyUi
