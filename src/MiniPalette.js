import React from 'react'
import { withStyles, withTheme } from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'gray',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        paddingTop: '0.5rem',
        color: 'white',
        fontSize: '1rem',
        position: 'relative',
        color: 'black'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
}

function MiniPalette(props) {
    const { classes, colors, emoji, id, paletteName, handleClick } = props
    const miniColorBoxes = colors.map(color => (
        <div key={id} className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
    ))

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)