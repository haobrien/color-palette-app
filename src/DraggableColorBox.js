import React from 'react'
import { withStyles } from '@material-ui/styles'
import './styles/DraggableColorBox.css'
import DeleteIcon from '@material-ui/icons/Delete'
import { SortableElement } from 'react-sortable-hoc'
import chroma from 'chroma-js'

const styles = {
    root: {
        backgroundColor: props =>
            props.color,
    },
    checkLuminance: {
        color: props =>
            chroma(props.color).luminance() >= 0.3 ? '#333' : '#eee'
    },
}

const DraggableColorBox = SortableElement((props) => {
    return (
        <div className={`DraggableColorBox ${props.classes.root}`}>
            <div className={`box-content ${props.classes.checkLuminance}`}>
                <span>{props.name}</span>
                <DeleteIcon
                    onClick={props.removeColor}
                    className="delete-icon" />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)