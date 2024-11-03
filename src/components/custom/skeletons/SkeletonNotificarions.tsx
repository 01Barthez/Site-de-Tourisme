import React from 'react'
import { Skeleton } from '../../ui/skeleton'

const SkeletonNotificarions: React.FC = () => {
    return (
        <>
            <div className='mb-2 flex items-center gap-4'>
                <Skeleton className="w-14 h-14 rounded-full overflow-hidden" />

                <div className="flex flex-col gap-1">
                    <Skeleton className="w-2/3 h-3 bg-foreground/10" />
                    <Skeleton className="w-52 h-6" />
                    <Skeleton className="w-1/2 h-2 bg-foreground/5" />
                </div>
            </div>

            <div className='mb-2 flex items-center gap-4'>
                <Skeleton className="w-14 h-14 rounded-full overflow-hidden" />

                <div className="flex flex-col gap-1">
                    <Skeleton className="w-2/3 h-3 bg-foreground/10" />
                    <Skeleton className="w-52 h-6" />
                    <Skeleton className="w-1/2 h-2 bg-foreground/5" />
                </div>
            </div>

            <div className='mb-2 flex items-center gap-4'>
                <Skeleton className="w-14 h-14 rounded-full overflow-hidden" />

                <div className="flex flex-col gap-1">
                    <Skeleton className="w-2/3 h-3 bg-foreground/10" />
                    <Skeleton className="w-52 h-6" />
                    <Skeleton className="w-1/2 h-2 bg-foreground/5" />
                </div>
            </div>
        </>
    )
}

export default SkeletonNotificarions
