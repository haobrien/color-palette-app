import bg from './confetti-doodles.svg'
/* background by SVGBackgrounds.com */

const styles = {
    root: {
        backgroundColor: '#e8e8e8',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundImage: `url(${bg})`,
        overflow: 'scroll'
    },
    container: {
        width: '60%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        width: '100%',
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'white',
            fontWeight:'bold',
            marginLeft: '1.2rem',
            '& svg' : {
                marginRight: '0.5rem'
            }
        }
    },
    palettes: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2rem',
    },
    [`@media (max-width: 992px)`]: {
        container: {
            width: '80%'
        },
         palettes: {
            gridTemplateColumns: 'repeat(2, 49%)',
        }
   },
    [`@media (max-width: 576px)`]: {
        palettes:{
            gridTemplateColumns: 'repeat(1, 98%)',
       }
    }

}

export default styles