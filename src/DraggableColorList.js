import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'

const DraggableColorList = SortableContainer((props) => {
    return (
        <div style={{ height: '100%' }}>
            {props.colors.map((color, i) => (
                <DraggableColorBox removeColor={() => props.removeColor(color.name)} key={color.name} index={i} color={color.color} name={color.name} />
            ))}
        </div>
    )
})

export default DraggableColorList