import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const styles = {
    root: {
        backgroundColor: '#394bad',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        alignItems:'center',
        '& a' :{
            textDecoration: 'none',
            color: 'white'
        }
    },
    palettes: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',
    }
}

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
                        <Link to="/palette/new">Create New Palette</Link>
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