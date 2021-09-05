import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import 'rc-slider/assets/index.css'
import './styles/Palette.css'
import Footer from './Footer'
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
import CloseIcon from '@material-ui/icons/Close';
import Cancel from '@material-ui/icons/Cancel'

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex',
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
        this.deletePalette = this.deletePalette.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(format) {
        this.setState({ format })
    }

    deletePalette() {
        this.props.deletePalette(this.props.palette.id)
        this.props.history.push('/')
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={id}
                isFullPalette={true} />
        ))
        return (
            <div className="Palette">
                <Navbar
                    changeLevel={this.changeLevel}
                    level={level}
                    changeFormat={this.changeFormat}
                    deletePalette={this.deletePalette}
                    showSlider={true} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
