import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import { Link } from 'react-router-dom'
import { IconButton, MenuItem } from '@material-ui/core'
import { Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex', open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value, open: true }, () => {
            this.props.changeFormat(this.state.format)
        })
    }

    closeSnackbar() {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel, showSlider } = this.props
        const { format } = this.state
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showSlider && (
                    <div className="slider-container">
                        <span>Level: {level}</span>
                        <div className="slider">
                            <Slider
                                defaultValue={level}
                                step={100}
                                min={100}
                                max={900}
                                onAfterChange={changeLevel} />
                        </div>
                    </div>
                )}
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">rgb - rgb 255, 255, 255</MenuItem>
                        <MenuItem value="rgba">rgba - rgba 255, 255, 255, 1</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
                    ContentProps={{
                        'area-describedby': 'message-id'
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}
