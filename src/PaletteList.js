import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import styles from './styles/PaletteListStyles'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push('/palette/' + id)
    }

    render() {
        const { palettes, classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">
                            <Button size="small" variant="contained" color="secondary">
                                <AddCircleOutlineIcon />New Palette
                            </Button>
                        </Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette {...palette} key={palette.id} handleClick={() => this.goToPalette(palette.id)} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)