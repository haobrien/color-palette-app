import React from 'react'
import { withStyles } from '@material-ui/styles'
import './styles/DraggableColorBox.css'
import DeleteIcon from '@material-ui/icons/Delete'
import { SortableElement } from 'react-sortable-hoc'

const styles = {
    root: {
        backgroundColor: props =>
            props.color
    },
}

const DraggableColorBox = SortableElement((props) => {
    return (
        <div className={`DraggableColorBox ${props.classes.root}`}>
            <div className="box-content">
                <span>{props.name}</span>
                <DeleteIcon
                    onClick={props.removeColor}
                    className="delete-icon" />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)