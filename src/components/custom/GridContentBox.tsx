import React from 'react'
import { IGridContentBox } from '../../global/interface/interface'
import CardExploreNearby from './cards/CardExploreNearby'

const GridContentBox: React.FC<IGridContentBox> = ({ TableToMap }) => {
    return (
        <>
            {
                TableToMap.map((zone) => (
                    <CardExploreNearby
                        url={zone.url}
                        image={zone.image}
                        name={zone.name}
                        delay={zone.delay}
                        visit={zone.visit}
                    />
                ))
            }
        </>
    )
}

export default GridContentBox

