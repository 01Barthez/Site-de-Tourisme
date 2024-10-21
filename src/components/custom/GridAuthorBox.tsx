import React from 'react'
import { IGridAuthorBox } from '../../global/interface/interface'
import CardAuthor from './cards/CardAuthor'



const GridAuthorBox: React.FC<IGridAuthorBox> = ({ TableToMap }) => {
    return (
        <>
            {
                TableToMap.map((zone) => (
                    <CardAuthor
                        id={zone.id}
                        variant={zone.variant}
                        url={zone.url}
                        image={zone.image}
                        name={zone.name}
                        country={zone.country}
                    />
                ))
            }
        </>
    )
}

export default GridAuthorBox

