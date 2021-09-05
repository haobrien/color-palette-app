import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import { Link } from 'react-router-dom'
import { IconButton, MenuItem } from '@material-ui/core'
import { Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CheckIcon from '@material-ui/icons/Check';
import Cancel from '@material-ui/icons/Cancel'
import './styles/Navbar.css'
import { mergeClasses } from '@material-ui/styles'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex', open: false, deleteDialogOpen: false }
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

    openDialog = () => {
        this.setState({ deleteDialogOpen: true })
    }

    closeDialog = () => {
        this.setState({ deleteDialogOpen: false })
    }

    render() {
        const { level, changeLevel, showSlider, deletePalette } = this.props
        const { format, deleteDialogOpen } = this.state
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
                <div className="right-menu">
                    <div className="select-container">
                        <Select value={format} onChange={this.handleFormatChange}>
                            <MenuItem value="hex">Hex - #ffffff</MenuItem>
                            <MenuItem value="rgb">rgb - rgb 255, 255, 255</MenuItem>
                            <MenuItem value="rgba">rgba - rgba 255, 255, 255, 1</MenuItem>
                        </Select>
                    </div>
                    <div className="delete">
                        <DeleteIcon onClick={this.openDialog} />
                    </div>
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
                <Dialog open={deleteDialogOpen} aria-labeledby="delete-dialog-title" onClose={this.closeDialog}>
                    <DialogTitle id="delete-dialog-title">Delete palette?</DialogTitle>
                    <List>

                        <ListItem button onClick={deletePalette} >
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.closeDialog} >
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </header>
        )
    }
}
