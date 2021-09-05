import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


export default class NewPaletteModal extends Component {
    state = {
        open: true,
        newPaletteName: ''
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteUnique', (value) => (
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        ))

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {
        const { newPaletteName } = this.state
        const { hideForm, savePalette } = this.props
        return (
            <Dialog
                open={this.state.open}
                onClose={hideForm}
                aria-labelledby="form-dialog-title"
            >
                <ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
                    <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a unique name for your new beautiful palette.
                        </DialogContentText>
                        <Picker />
                        <TextValidator
                            value={newPaletteName}
                            name="newPaletteName"
                            label="Palette Name"
                            fullWidth
                            margin="normal"
                            onChange={this.handleChange}
                            validators={[
                                'required',
                                'isPaletteUnique'
                            ]}
                            errorMessages={[
                                'palette name required',
                                'palette name already taken'
                            ]} />
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" type="submit">
                                Save Palette
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </ValidatorForm>
            </Dialog>
        )
    }
}