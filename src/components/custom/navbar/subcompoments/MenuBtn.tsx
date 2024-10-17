import { AiOutlineMenu } from "react-icons/ai"; 
import React from 'react'
import { Button } from '../../../ui/button'

const MenuBtn: React.FC = () => {
    return (
        <div>
            <Button
                variant='outline'
                size="icon"
                className="relative w-auto h-auto p-3 text-xl border-none bg-transparent shadow-none rounded-full hover:bg-foreground/5 duration-200"
            >
                    {/* Icon Menu */}
                    <AiOutlineMenu className='text-2xl' />
            </Button>
        </div>
    )
}

export default MenuBtn