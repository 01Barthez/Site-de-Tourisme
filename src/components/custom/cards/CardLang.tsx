import React from 'react'
import { ILanguages } from '../../../global/interface/interface'
import { ToggleGroupItem } from '../../ui/toggle-group'

const CardLang: React.FC<ILanguages> = ({ lang, region }) => {
  return (

    <ToggleGroupItem
      value={`${lang}-${region}`}
      aria-label="Toggle bold"
      className='rounded-lg pr-12 py-1 h-auto w-full flex flex-col items-start text-start hover:bg-foreground/5 hover:text-foreground'
    >
      <h4 className="font-medium text-sm">
        {lang}
      </h4>

      <span className='text-foreground/60 text-xs'>
        {region}
      </span>
    </ToggleGroupItem>
  )
}

export default CardLang