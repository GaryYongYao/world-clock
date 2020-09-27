import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, textBlack, lightGrey, lightGreyO } from './colors'

const theme = createMuiTheme({
  overrides: {
    MuiAutocomplete: {
      paper: {
        backgroundColor: '#FFFFFF !important'
      }
    },
    MuiFormControl: {
      root: {
        margin: '8px 0px',
      },
    },
    MuiPickersBasePicker: {
      container: {
        backgroundColor: '#FFFFFF'
      }
    },
    MuiFormLabel: {
      root: {
        color: '#707070',
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1,
        '&.Mui-focused': {
          color: '#707070',
        },
      },
    },
    MuiInputBase: {
      input: {
        color: '#1a1a1a',
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1
      }
    },
    MuiFormControlLabel: {
      root: {
        color: '#707070'
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.9)'
      }
    },
    MuiFormHelperText: {
      root: {
        lineHeight: '1.3em',
        color: '#707070'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #e4e4e4',
        },
        '&:after': {
          borderBottom: `1px solid ${primaryColor}`,
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: `1px solid ${primaryColor}`,
        }
      },
    },
    MuiButton: {
      root: {
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: 1.75,
        textTransform: 'inherit',
        minWidth: 85,
        'text-transform': 'uppercase'
      },
      sizeSmall: {
        'text-transform': 'none'
      },
      wrapper: {
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: 1.75,
      },
      contained: {
        boxShadow: 'none',
        '&.Mui-disabled': {
          backgroundColor: lightGreyO,
          color: lightGrey
        }
      },
      outlinedSizeSmall: {
        padding: '2.7px 9px'
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 3px 6px #0000000A',
      }
    },
    MuiTypography: {
      useNextVariants: true,
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        color: '#707070',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
        color: '#707070',
      },
      h2: {
        fontSize: '3.75rem',
        fontWeight: 100,
        lineHeight: 1,
        color: '#707070',
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 400,
        lineHeight: 1.17,
        color: '#707070',
      },
      h4: {
        fontSize: '2.125rem',
        fontWeight: 400,
        lineHeight: 1.17,
        color: '#707070',
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: 1.33,
        letterSpacing: '0em',
        color: '#707070',
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        color: '#303030',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em'
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em'
      },
    },

    MuiDrawer: {
      paper: {
        backgroundColor: '#FAFAFA'
      }
    },

    MuiPopover: {
      paper: {
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.05), 0px 4px 7px 1px rgba(0, 0, 0, 0.01), 0px 3px 5px 1px rgba(0,0,0,0.12)',
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8
      },
      elevation2: {
        boxShadow: 'initial',
        '& [class^="Component-horizontalScrollContainer-"]': {
          overflowX: 'visible !important',
          '& > div > div': {
            overflowY: 'visible !important',
          }
        }
      }
    }
  },
  palette: {
    primary: { main: primaryColor, text: '#707070' },
    secondary: { main: textBlack },
    error: { main: '#ff5a5f', text: '#707070' }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Orbitron"," sans-serif"',
    htmlFontSize: 14,
  },
  custom: {
    authLayoutContainer: {
      minHeight: '100vh',
    },
  },
})

export default theme
