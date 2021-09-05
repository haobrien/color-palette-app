import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import 'rc-slider/assets/index.css'
import './styles/Palette.css'
import Footer from './Footer'

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
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

    deletePalette(){
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
                    showSlider={true}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
