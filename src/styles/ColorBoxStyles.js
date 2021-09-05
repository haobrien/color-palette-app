import { XS, SM, MD, LG } from '../constants'
import chroma from 'chroma-js'
const styles = {
    checkLuminance: {
        color: props =>
            chroma(props.background).luminance() >= 0.3 ? '#333' : '#eee'
    },
    colorboxPropStyles: {
        background: props => props.background
    },
}
export default styles