import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles'
import chroma from 'chroma-js';

class ColorPickerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentColor: '#4AAAAA',
            newColorName: '',
        }
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        ))
        ValidatorForm.addValidationRule('isColorUnique', (value) => (
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        ))
    }

    handleColorChange(color) {
        this.setState({ currentColor: color.hex })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({ newColorName: '' })
    }

    render() {
        const { isPaletteFull, classes } = this.props
        const { currentColor, newColorName } = this.state
        const isDark = chroma(this.state.currentColor).luminance() >= 0.3
            ? '#333'
            : '#eee'

        return (
            <div className={classes.root}>
                <ChromePicker onChangeComplete={(newColor) => this.handleColorChange(newColor)} color={currentColor} className={classes.picker} />
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                    instantValidate={false}
                >
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        variant="filled"
                        placeholder="Color Name"
                        onChange={this.handleChange}
                        className={classes.colorInput}
                        validators={[
                            'required',
                            'isColorNameUnique',
                            'isColorUnique']}
                        errorMessages={[
                            'enter color name',
                            'colorname already taken',
                            'color already added']} />
                    <Button
                        style={{
                            background: isPaletteFull
                                ? 'rgba(0, 0, 0, 0.26)'
                                : currentColor,
                            color: isDark
                        }}
                        variant="contained"
                        type="submit"
                        disabled={isPaletteFull}
                        className={classes.addButton}>
                        {isPaletteFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
                <Divider />
            </div >
        )
    }
}

export default withStyles(styles)(ColorPickerForm)