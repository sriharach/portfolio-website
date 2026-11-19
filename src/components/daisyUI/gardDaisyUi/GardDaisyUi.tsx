// libs
import React from 'react'
import Image from 'next/image'

// components
import ButtonDaisyUi from '../buttonDaisyUi/ButtonDaisyUi'

// type
import { GardDaisyUiProps } from './type'

const GardDaisyUi = ({
  image,
  title,
  description,
  feature,
  viewText = 'View',
  onClick,
}: GardDaisyUiProps) => {
  return (
    <article className='card card-compact group w-full overflow-hidden border border-main-color-primavera4/10 bg-base-100 shadow-sm transition-shadow hover:shadow-lg'>
      <figure className='aspect-[1.25] overflow-hidden bg-main-color-primavera2'>
        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]' src={image} width={600} height={480} alt={title ?? ''} />
      </figure>
      <div className='card-body gap-2 p-5'>
        <h3 className='card-title text-base text-main-color-primavera4 group-hover:text-main-color-primavera1'>
          {title}
        </h3>
        <p className='text-sm text-main-color-primavera3'>{feature}</p>
        {description && <p className='text-sm text-main-color-primavera4/70'>{description}</p>}
        <ButtonDaisyUi
          fullWidth
          text={viewText}
          variant='outline'
          onClick={onClick}
        />
      </div>
    </article>
  )
}

export default GardDaisyUi
