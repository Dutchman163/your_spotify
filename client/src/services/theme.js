import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  shape: {
    borderRadius: '10px',
  },
  palette: {
    primary: { main: '#1365ff' },
    secondary: { main: '#EBECF0' },
    success: { main: '#255E2B' },
    error: { main: '#A90202' },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightBold: 'lighter',
    subtitle1: {
      color: 'grey',
    },
    subtitle2: {
      fontWeight: 'bold',
    },
    allVariants: {
      fontWeight: 'normal',
      margin: '0px',
      padding: '0px',
    },
    fontWeightRegular: 'normal',
  },
  shadows: [
    'none',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
    '0 0 14px 0 rgba(53,64,82,.05)',
  ],
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        'box-shadow': '0 0 14px 0 rgba(53,64,82,.05)',
        backgroundColor: 'white',
        borderRadius: '10px',
        minHeight: 44,
      },
      flexContainer: {
        position: 'relative',
        padding: '0 3px',
        zIndex: 1,
      },
      indicator: {
        top: 3,
        bottom: 3,
        right: 3,
        height: 'auto',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
      },
    },
  },
});

theme.overrides.MuiTab = {
  root: {
    '&:hover': {
      opacity: 1,
    },
    minHeight: 44,
    minWidth: 96,
    [theme.breakpoints.up('md')]: {
      minWidth: 120,
    },
  },
  wrapper: {
    // zIndex: 2,
    // marginTop: spacing(0.5),
    color: theme.palette.text.primary,
    textTransform: 'initial',
  },
};

export default theme;