import React from 'react'

// Simple compoment to render a separator line 
const SeparatorLine: React.FC = () => {
    return (
        <div className="flex items-center gap-2 mx-auto">
            <div className="w-full border border-foreground/20"></div>
            <div className="text-lg font-medium">OR</div>
            <div className="w-full border border-foreground/20"></div>
        </div>
    )
}

export default SeparatorLine