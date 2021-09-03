import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaletteFormNav from './PaletteFormNav';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button, colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        height: '100vh',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20
    }

    constructor(props) {
        super(props)
        this.state = {
            open: true,
            currentColor: '#4AAAAA',
            colors: this.props.palettes[0].colors,
            newColorName: '',
        }
        this.handleColorChange = this.handleColorChange.bind(this)
        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.removeColor = this.removeColor.bind(this)
        this.clearColors = this.clearColors.bind(this)
        this.addRandomColor = this.addRandomColor.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        ))
        ValidatorForm.addValidationRule('isColorUnique', (value) => (
            this.state.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        ))
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    }

    handleColorChange(color) {
        this.setState({ currentColor: color.hex })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    addNewColor() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.setState({ colors: [...this.state.colors, newColor], newColorName: '' })
    }

    savePalette(newPaletteName) {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(' ', '-'),
            colors: this.state.colors
        }
        this.props.savePalette(newPalette)
        this.props.history.push('/')
    }

    removeColor(colorName) {
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }

    clearColors() {
        this.setState({ colors: [] })
    }

    addRandomColor() {
        const allColors = this.props.palettes.map(p => p.colors).flat()
        let rand = Math.floor(Math.random() * allColors.length)
        this.setState({
            colors: [...this.state.colors, allColors[rand]]
        })
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex)
        }))
    }

    render() {
        const { classes, theme, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const isPaletteFull = colors.length >= maxColors

        return (
            <div className={classes.root}>
                <PaletteFormNav
                    open={open}
                    classes={classes}
                    palettes={palettes}
                    savePalette={this.savePalette}
                    handleDrawerOpen={this.handleDrawerOpen} />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    < Divider />
                    <Typography variant="h4">Design Your Color</Typography>
                    <div>
                        <Button variant="contained" color='secondary' onClick={this.clearColors}>
                            Clear Palette
                        </Button>
                        <Button variant="contained" color='primary' onClick={this.addRandomColor} disabled={isPaletteFull}>
                            Random Color
                        </Button>
                    </div>
                    <ChromePicker onChangeComplete={(newColor) => this.handleColorChange(newColor)} color={this.state.currentColor} />
                    <ValidatorForm onSubmit={this.addNewColor}>
                        <TextValidator
                            value={this.state.newColorName}
                            name="newColorName"
                            onChange={this.handleChange}
                            validators={[
                                'required',
                                'isColorNameUnique',
                                'isColorUnique']}
                            errorMessages={[
                                'enter color name',
                                'colorname already taken',
                                'color already added']} />
                        <Button
                            style={{ background: isPaletteFull ? 'rgba(0, 0, 0, 0.26)' : this.state.currentColor }} variant="contained"
                            type="submit"
                            disabled={isPaletteFull}>
                            {isPaletteFull ? 'Palette Full' : 'Add Color'}
                        </Button>
                    </ValidatorForm>
                    <Divider />
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList
                        colors={colors}
                        removeColor={this.removeColor}
                        axis='xy'
                        onSortEnd={this.onSortEnd} />
                </main>
            </div>
        );
    }
}

NewPaletteForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);



