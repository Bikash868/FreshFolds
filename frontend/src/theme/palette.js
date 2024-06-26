import { green, blue, orange, red, grey } from "@mui/material/colors";

const white = '#FFFFFF';
const black = '#000000';

export default {
	type: 'light',
	black,
	white,
	primary: {
		contrastText: white,
		dark: '#003A7D',
		main: '#0070EF',
		light: '#4A9FFF'
	},
	secondary: {
		contrastText: white,
		dark: '#18144B',
		main: '#302793',
		light: '#4B3FCC',
	},
	grey: {
		contrastText: white,
		dark: '#0F172A',
		// main: '#475569',
		main: '#94A3B8',
		light: '#E2E8F0'

	},
	success: {
		contrastText: white,
		dark: green[900],
		main: green[600],
		light: green[400]
	},
	info: {
		contrastText: white,
		dark: blue[900],
		main: blue[600],
		light: blue[400]
	},
	warning: {
		contrastText: white,
		dark: orange[900],
		main: orange[600],
		light: orange[400]
	},
	error: {
		contrastText: white,
		dark: red[900],
		main: red[600],
		light: red[400]
	},
	text: {
		primary: '#252E4B',
		secondary: '#6f7894',
		light1: '#fafbff',
		light2: '#f3f5f9 ',
		light3: '#abadbc',
		light4: '#979797',
		light5: '#888a98',
		link: blue[600]
	},
	background: {
		default: '#FFFFFF',
		default2: '#303030',
		default3: '#202020',
		default4: '#111010',
		paper: '#fff'
	},
	icon: grey[900],
	divider: grey[200]
};
