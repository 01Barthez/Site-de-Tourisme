import React from 'react'
import { FallbackProps } from 'react-error-boundary';
import { Button } from '../../components/ui/button';

const FallbackNavbarUI: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div
            role="alert"
            className="container sticky z-50 top-0 left-0 w-screen backdrop-blur-md bg-destructive/10 border-b border-foreground/20 flex flex-col justify-center items-center gap-2 py-2"
        >
            <div className="flex items-center gap-2">
                <p>Something went wrong:</p>
                <pre className='font-semibold text-destructive'>{error.message}</pre>
            </div>
            <Button
                variant='outline'
                onClick={resetErrorBoundary}
                className='border-destructive text-foreground/65 bg-transparent h-auto py-1'
            >
                Try again
            </Button>
        </div>
    )
}

export default FallbackNavbarUI;
