import React from 'react'
import { Button } from '../../../ui/button'
import { Link } from 'react-router-dom'

/**
 * Functional component that renders a link to the '/listing-stay' page with a button.
 * The button has specific styling classes applied for appearance.
 * @returns JSX element representing the ListProperty component.
 */
const ListProperty: React.FC = () => {
  return (
    <Link
      to={'/listing-stay'}
    >
      <Button
        variant={'outline'}
        className='rounded-full shadow-none bg-transparent hover:bg-foreground/5 border-foreground duration-200'
      >
        List propertys
      </Button>
    </Link>
  )
}

export default ListProperty