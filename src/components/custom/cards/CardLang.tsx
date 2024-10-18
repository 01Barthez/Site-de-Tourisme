import React from 'react'
import { ILanguages } from '../../../global/interface/interface'
import { ToggleGroupItem } from '../../ui/toggle-group'

/**
 * Functional component for displaying a card with language and region information.
 * @param {ILanguages} lang - The language object containing language and region information.
 * @returns JSX element representing the card with language and region details.
 */
const CardLang: React.FC<ILanguages> = ({ lang, region }) => {
  return (

    <ToggleGroupItem
      value={`${lang}-${region}`}
      aria-label="Toggle bold"
      className='rounded-lg pr-16 py-1 h-auto w-full flex flex-col items-start text-start hover:bg-foreground/5 hover:text-foreground'
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