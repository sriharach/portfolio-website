// libs
import React from 'react'
import Image from 'next/image'

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
    <article className='group w-full'>
      <button
        className='block w-full text-left'
        onClick={onClick}
        type='button'
      >
        <figure className='aspect-[1.32] overflow-hidden bg-main-color-primavera2'>
          <Image
            alt={title ?? ''}
            className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]'
            height={480}
            src={image}
            width={600}
          />
        </figure>
        <div className='flex items-start justify-between gap-5 border-b border-main-color-primavera2/15 py-5'>
          <div>
            <p className='mb-2 text-[11px] font-bold uppercase text-main-color-primavera3'>{feature}</p>
            <h3 className='text-xl font-bold text-main-content-color-primavera1 transition-colors group-hover:text-main-content-color-primavera1 sm:text-2xl'>
              {title}
            </h3>
            {description && <p className='mt-2 text-sm text-main-content-color-primavera1/70'>{description}</p>}
          </div>
          <span className='mt-1 shrink-0 border-b border-main-color-primavera2 pb-1 text-xs font-bold uppercase text-main-content-color-primavera1'>
            {viewText}
          </span>
        </div>
      </button>
    </article>
  )
}

export default GardDaisyUi
