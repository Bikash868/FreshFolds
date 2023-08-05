import { makeStyles } from '@mui/styles';

export default makeStyles(theme => {
	return ({
		root: {
			display: 'flex',
		},

		mainContent: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			overflowY: 'auto',
			overflowX: 'hidden',
			width: '100%',
			paddingLeft: theme.spacing(0),
			[theme.breakpoints.up('sm')]: {
				paddingLeft: theme.spacing(8),
			}
		},
		mainContentNoAuth: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			overflowY: 'auto',
			overflowX: 'hidden',
			width: '100%',
		},
		mainContainer: {
			// display: 'flex',
			// flexGrow: 1,
			// flexBasis: 'none',
			padding: theme.spacing(2),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(4),
			}
		},
		mainContainerDense: {
			padding: theme.spacing(1),
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(2),
			}
		},
		mainContainerCentered: {
			display: 'flex',
			flexGrow: 1,
			flexBasis: 'none',
		},
		appBarSpacer: {
			width: '100%',
			// paddingLeft: '13rem',
			...theme.mixins.toolbar
		},

		// -- form general styles
		formBasic: {
			display: 'flex',
			flexDirection: 'column',
			margin: '1.5rem 0',
			['&.full-width']: {
				width: '100%',
			},
		},
		formGroup: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			['&.spacing-bottom']: {
				marginBottom: '1rem',
			},
			['&.spacing-right']: {
				marginRight: '1rem',
			},
		},
		formGroupLabel: {
			display: 'inline-flex',
			marginBottom: '-5px',
			fontWeight: 500,
		},

		// -- 
		pAbsolute: { position: 'absolute' },
		pFixed: { position: 'fixed' },
		pRelative: { position: 'relative' },
		pStatic: { position: 'static' },

		pAbsoluteCentered: {
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		},

		flex: {
			display: 'flex',
		},
		flexDirCol: {
			flexDirection: 'column',
		},
		flexWrap: {
			flexWrap: 'wrap',
		},
		flexAlignContentCenter: {
			display: 'flex',
			alignContent: 'center',
		},
		flexAlignItemsCenter: {
			display: 'flex',
			alignItems: 'center',
		},
		flexAlignItemsStart: {
			display: 'flex',
			alignItems: 'flex-start',
		},
		flexJustifyContentCenter: {
			display: 'flex',
			justifyContent: 'center',
		},
		flexJustifyContentStart: {
			display: 'flex',
			justifyContent: 'flex-start',
		},
		flexJustifyItemsCenter: {
			display: 'flex',
			justifyItems: 'center',
		},
		flexJustifyContentSpaceBetween: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		flexJustifyContentFlexEnd: {
			display: 'flex',
			justifyContent: 'flex-end',
		},
		flexJustifyItemsSpaceBetween: {
			display: 'flex',
			justifyItems: 'space-between',
		},
		flexInline: {
			display: 'inline-flex',
		},
		flexGrow: {
			flexGrow: 1,
		},

		textAlignCenter: { textAlign: 'center' },
		textAlignLeft: { textAlign: 'left' },
		textAlignRight: { textAlign: 'right' },

		fontBold: { fontWeight: 'bold' },
		fontItalic: { fontStyle: 'italic' },

		textWhite: { color: theme.palette.white },
		textBlack: { color: theme.palette.black },
		textBlue1: { color: theme.palette.text.blue1 },

		m0: { margin: 0 },
		m1: { margin: '1rem' },
		m15: { margin: '1.5rem' },
		m2: { margin: '2rem' },
		m3: { margin: '3rem' },

		mb1: { marginBottom: '1rem' },
		mb15: { marginBottom: '1.5rem' },
		mb2: { marginBottom: '2rem' },
		mb3: { marginBottom: '3rem' },

		mt0: { marginTop: '0.5rem' },
		mt1: { marginTop: '1rem' },
		mt15: { marginTop: '1.5rem' },
		mt2: { marginTop: '2rem' },
		mt3: { marginTop: '3rem' },

		ml1: { marginLeft: '1rem' },
		ml15: { marginLeft: '1.5rem' },
		ml2: { marginLeft: '2rem' },
		ml3: { marginLeft: '3rem' },

		mr1: { marginRight: '1rem' },
		mr15: { marginRight: '1.5rem' },
		mr2: { marginRight: '2rem' },
		mr3: { marginRight: '3rem' },

		mx5px: { marginLeft: '5px', marginRight: '5px' },
		mx1: { marginLeft: '1rem', marginRight: '1rem' },
		mx15: { marginLeft: '1.5rem', marginRight: '1.5rem' },
		mx2: { marginLeft: '2rem', marginRight: '2rem' },
		mx3: { marginLeft: '3rem', marginRight: '3rem' },

		my1: { marginTop: '1rem', marginBottom: '1rem' },
		my15: { marginTop: '1.5rem', marginBottom: '1.5rem' },
		my2: { marginTop: '2rem', marginBottom: '2rem' },
		my3: { marginTop: '3rem', marginBottom: '3rem' },

		pb1: { paddingBottom: '1rem' },
		pb15: { paddingBottom: '1.5rem' },
		pb2: { paddingBottom: '2rem' },
		pb3: { paddingBottom: '3rem' },

		pt1: { paddingTop: '1rem' },
		pt15: { paddingTop: '1.5rem' },
		pt2: { paddingTop: '2rem' },
		pt3: { paddingTop: '3rem' },

		pl1: { paddingLeft: '1rem' },
		pl15: { paddingLeft: '1.5rem' },
		pl2: { paddingLeft: '2rem' },
		pl3: { paddingLeft: '3rem' },

		pr1: { paddingRight: '1rem' },
		pr15: { paddingRight: '1.5rem' },
		pr2: { paddingRight: '2rem' },
		pr3: { paddingRight: '3rem' },

		px1: { paddingLeft: '1rem', paddingRight: '1rem' },
		px15: { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
		px2: { paddingLeft: '2rem', paddingRight: '2rem' },
		px3: { paddingLeft: '3rem', paddingRight: '3rem' },

		py1: { paddingTop: '1rem', paddingBottom: '1rem' },
		py15: { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
		py2: { paddingTop: '2rem', paddingBottom: '2rem' },
		py3: { paddingTop: '3rem', paddingBottom: '3rem' },

		p0: { padding: 0 },
		p1: { padding: '1rem' },
		p15: { padding: '1.5rem' },
		p2: { padding: '2rem' },
		p3: { padding: '3rem' },

		wd100: { width: '100%' },
		wd90: { width: '90%' },
		wd80: { width: '80%' },
		wd70: { width: '70%' },
		wd60: { width: '60%' },
		wd50: { width: '50%' },
		wd40: { width: '40%' },
		wd30: { width: '30%' },
		wd20: { width: '20%' },
		wd10: { width: '10%' },

		textUppercase: {
			textTransform: 'uppercase',
		},
		textLowercase: {
			textTransform: 'lowercase',
		},
		textCapitalize: {
			textTransform: 'capitalize',
		},

		cursorPointer: {
			cursor: 'pointer',
		},
		underline: {
			textDecoration: 'underline',
		},

		rounded: {
			borderRadius: 80,
			paddingLeft: theme.spacing(8),
			paddingRight: theme.spacing(8)
		},

	});
});