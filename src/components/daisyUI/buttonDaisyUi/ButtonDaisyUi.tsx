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
  startIcon,
  endIcon,
  iconOnly,
  icon,
  square,
  circle,
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
          'btn-soft': variant === 'soft',
          'btn-ghost': variant === 'ghost' || color === 'ghost',
          'btn-outline': variant === 'outline',
          'btn-block': fullWidth,
          'btn-square': iconOnly && square,
          'btn-circle': iconOnly && circle,
        },
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className='loading loading-spinner' />
      ) : iconOnly ? (
        icon
      ) : startIcon || endIcon ? (
        <>
          {startIcon && <span className='ml-2'>{startIcon}</span>}
          {text}
          {endIcon && <span className='mr-2'>{endIcon}</span>}
        </>
      ) : text}
    </button>
  )
}

export default React.memo(ButtonDaisyUi)
