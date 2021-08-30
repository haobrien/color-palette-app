import React, { Component } from 'react'
import chroma from 'chroma-js'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { background, name, id, paletteId, showMore } = this.props
        const { copied } = this.state
        const isDarkColor = (chroma(background).luminance() <= 0.2)
        const isLightColor = (chroma(background).luminance() >= 0.7)
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background: background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }}></div>
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLightColor && 'dark-text'}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </div>
                        <button className={'copy-button ' + (isLightColor && 'dark-text')}>Copy</button>
                    </div>
                    {showMore && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={evt => evt.stopPropagation()}>
                            <span className={'see-more ' + (isLightColor && 'dark-text')}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}
