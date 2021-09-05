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
        stage: 'form',
        newPaletteName: ''
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteUnique', (value) => (
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        ))

    }

    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // }

    // handleClose = () => {
    //     this.setState({ open: false });
    // }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    showEmojiPicker = () => {
        this.setState({ stage: 'emoji' })
    }

    savePalette = (emoji) => {
        const paletteInfo = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.savePalette(paletteInfo)
    }

    render() {
        const { newPaletteName } = this.state
        const { hideForm } = this.props
        return (
            <div>
                <Dialog open={this.state.stage === 'emoji'}>
                    <Picker onSelect={this.savePalette} />
                </Dialog>
                <Dialog
                    open={this.state.stage === 'form'}
                    onClose={hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a unique name for your new beautiful palette.
                            </DialogContentText>
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
            </div>
        )
    }
}