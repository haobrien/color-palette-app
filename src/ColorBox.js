import React, { Component } from 'react'
import chroma from 'chroma-js'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './styles/ColorBox.css'
import styles from './styles/ColorBoxStyles'

class ColorBox extends Component {
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
        const { background, name, id, paletteId, isFullPalette, classes } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={`ColorBox ${classes.colorboxPropStyles}`}>
                    <div className={`copy-overlay ${copied && 'show'}`}></div>
                    <div className={`copy-message ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText + classes.checkLuminance}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.checkLuminance}>{name}</span>
                        </div>
                        <button className={'copy-button ' + classes.checkLuminance}>Copy</button>
                    </div>
                    {isFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={evt => evt.stopPropagation()}>
                            <span className={'see-more ' + classes.checkLuminance}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)