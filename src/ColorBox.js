import React, { Component } from 'react'
import './ColorBox.css'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }

    render() {
        const { background, name, id, paletteId } = this.props
        const {copied} = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background: background }} className="ColorBox">
                    <div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }}></div>
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <Link to={`/palette/${paletteId}/${id}`} onClick={evt => evt.stopPropagation()}>
                        <span className="see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}
