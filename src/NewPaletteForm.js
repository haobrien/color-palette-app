import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaletteFormNav from './PaletteFormNav';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import styles from './styles/NewPaletteFormStyles'
import seedColors from './seedColors';


class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20
    }

    constructor(props) {
        super(props)
        this.state = {
            open: true,
            colors: seedColors[0].colors,
        }
        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.removeColor = this.removeColor.bind(this)
        this.clearColors = this.clearColors.bind(this)
        this.addRandomColor = this.addRandomColor.bind(this)
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    addNewColor(newColor) {
        this.setState({ colors: [...this.state.colors, newColor], newColorName: '' })
    }

    savePalette(newPaletteInfo) {
        const { paletteName, emoji } = newPaletteInfo
        const newPalette = {
            paletteName: paletteName,
            id: paletteName.toLowerCase().replace(' ', '-'),
            colors: this.state.colors,
            emoji: emoji
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
        const allColors = seedColors.map(p => p.colors).flat()
        let isDuplicateColor = true;
        let rand, randomColor
        while (isDuplicateColor){
            rand = Math.floor(Math.random() * allColors.length)
            randomColor = allColors[rand]
            isDuplicateColor = this.state.colors.some(color => color.name === randomColor.name)
        }
        this.setState({
            colors: [...this.state.colors, randomColor]
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
                    <div className={classes.drawerContent}>

                        <Typography variant="h4" gutterBottom>Design Your Color</Typography>
                        <div className={classes.buttons}>
                            <Button variant="contained" color='secondary' onClick={this.clearColors}>
                                Clear Palette
                            </Button>
                            <Button variant="contained" color='primary' onClick={this.addRandomColor} disabled={isPaletteFull}>
                                Random Color
                            </Button>
                        </div>

                        <ColorPickerForm
                            isPaletteFull={isPaletteFull}
                            colors={colors}
                            addNewColor={this.addNewColor} />
                    </div>

                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    {/* <div className={classes.drawerHeader} /> */}
                    <DraggableColorList
                        colors={colors}
                        removeColor={this.removeColor}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                        distance={20} />
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



