import chroma from 'chroma-js'
const styles = {
    checkLuminance: {
        color: props =>
            chroma(props.background).luminance() >= 0.3 ? '#333' : '#eee'
    },
    colorboxPropStyles: {
        height: props =>
            props.isFullPalette ? '25%' : '50%',
        background: props => props.background
    }
}

export default styles