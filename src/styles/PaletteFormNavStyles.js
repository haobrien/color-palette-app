import { DRAWER_WIDTH } from "../constants";

const styles = theme => ({
    root: {
        display: 'flex'
    },
    hide: {
        display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navButtons: {
        marginRight: '1rem',
        '& button': {
            margin: '0 0.5rem',
        },
        '& a': {
            textDecoration: 'none'
        }
    },
    [`@media (max-width: 576px)`]: {
        root: {
            '& h6:after': {
                fontSize: '1rem',
            }
        },
        navButtons: {
            marginRight: '0.2rem',
            '& button': {
                margin: '0 0.3rem',
                padding: '5px',
                fontSize: '0.8rem'
            },
        },
        menuButton: {
            marginLeft: 6,
            marginRight: 0,
        },
    }
})

export default styles