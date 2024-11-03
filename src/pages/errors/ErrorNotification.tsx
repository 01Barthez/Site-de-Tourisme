import { FiAlertTriangle } from "react-icons/fi";
import React from 'react'

const ErrorNotification: React.FC<{error: string}> = (props) => {
    return (
        <div className='min-w-52 border-l-8 shadow-md shadow-foreground/20 border-destructive flex flex-col gap-6 items-center mx-auto bg-destructive/20 rounded-lg p-10'>
            {/* Icon part */}
            <FiAlertTriangle className="text-center text-5xl text-foreground" />

            {/* Error part */}
            <div className="text-sm text-center">
                <p>An error Occured: </p>
                <span className="text-destructive font-medium">{props.error}</span>
            </div>
        </div>
    )
}

export default ErrorNotification

