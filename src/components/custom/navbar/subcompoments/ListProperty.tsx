import React from 'react'
import { Button } from '../../../ui/button'
import { Link } from 'react-router-dom'

const ListProperty: React.FC = () => {
  return (
    <Link
      to={'/listing-stay'}
    >
      <Button
        variant={'outline'}
        className='rounded-full shadow-none hover:bg-transparent hover:border-foreground duration-300'
      >
        List propertyns
      </Button>
    </Link>
  )
}

export default ListProperty