import React from 'react'
import { withStyles } from '@material-ui/styles'
import './styles/DraggableColorBox.css'

const styles = {
    root: {
        backgroundColor: props =>
            props.color
    }
}

function DraggableColorBox(props) {
    return (
        <div className={`DraggableColorBox ${props.classes.root}`}>
            {props.name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox)