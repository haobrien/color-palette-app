import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import 'rc-slider/assets/index.css'
import './Palette.css'

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette
        const { level } = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color} key={color.name} />
        ))
        return (
            <div className="Palette">
                <Navbar changeLevel={this.changeLevel} level={level}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
