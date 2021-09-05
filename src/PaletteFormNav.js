import React, { Component } from 'react'
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { withStyles } from '@material-ui/core/styles';
import NewPaletteModal from './NewPaletteModal';
import styles from './styles/PaletteFormNavStyles'


class PaletteFormNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formShowing: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    showForm = () => {
        this.setState({ formShowing: true })
    }

    hideForm = () => {
        this.setState({ formShowing: false })
    }

    render() {
        const { classes, open, palettes, savePalette } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <AddToPhotosIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create New Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navButtons}>
                        <Link to='/'>
                            <Button variant="contained" color="secondary">
                                Go Back
                            </Button>
                        </Link>
                        <Button variant="contained" color="primary" onClick={this.showForm}>
                            Save
                        </Button>
                        {this.state.formShowing && <NewPaletteModal palettes={palettes} savePalette={savePalette} hideForm={this.hideForm} />}
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)