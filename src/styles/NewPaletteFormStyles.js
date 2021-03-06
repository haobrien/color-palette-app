import { DRAWER_WIDTH } from "../constants";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerContent: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
    },
    buttons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& button': {
            width: '49%'
        }
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
        display: 'flex',
        alignItems: 'center'
    },
    drawerHeader: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -DRAWER_WIDTH,
        height: 'calc(100vh - 64px)',
        marginTop: '64px'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

export default styles