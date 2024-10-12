import React from 'react'

interface IButtonMethod {
    icon: React.ReactNode
    name: string
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

const SocialButton: React.FC<IButtonMethod> = (props) => {
    return (
        <button
            className="w-full rounded-lg flex items-center gap-4 py-2 px-6 bg-primary/15"
            type='button'
            onClick={props.onClick}
        >
            {/* Icon */}
            <div>
                {props.icon}
            </div>

            {/* Name */}
            <span className="text-sm text-[#374151] font-medium text-foreground2 px-8 md:px-20">
                {props.name}
            </span>
        </button>)
    }

export default SocialButton