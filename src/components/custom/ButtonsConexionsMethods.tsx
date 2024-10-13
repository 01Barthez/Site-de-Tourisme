import React from 'react'

interface IButtonMethod {
    icon: React.ReactNode
    name: string
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

const SocialButton: React.FC<IButtonMethod> = (props) => {
    return (
        <button
            className="text-nowrap text-sm md:text-base w-full rounded-lg flex items-center gap-4 md:py-2 py-2.5 px-4 md:px-6 bg-primary/20 hover:scale-105 duration-300"
            type='button'
            onClick={props.onClick}
        >
            {/* Icon */}
            <div>
                {props.icon}
            </div>

            {/* Name */}
            <span className="text-sm text-foreground/60 font-medium px-6 sm:px-10 md:px-20">
                {props.name}
            </span>
        </button>)
    }

export default SocialButton