const styles = {
    root: {
        backgroundColor: '#394bad',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'white'
        }
    },
    palettes: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',
    }
}

export default styles