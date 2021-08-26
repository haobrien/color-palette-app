import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        const { color, name } = this.props.background
        return (
            <div style={{ background: color }} className="ColorBox">
                <span>{name}</span>
                <span>MORE</span>
            </div>
        )
    }
}
