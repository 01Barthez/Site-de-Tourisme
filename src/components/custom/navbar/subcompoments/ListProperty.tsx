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
        className='rounded-full shadow-none bg-transparent hover:bg-foreground/5 border-foreground duration-200'
      >
        List propertys
      </Button>
    </Link>
  )
}

export default ListProperty