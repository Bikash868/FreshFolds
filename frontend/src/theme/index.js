import { createTheme } from '@mui/material/styles';

import breakpoints from './breakpoints';
import color from './color';
import constants from './constants';
import general from './general';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
	breakpoints,
	color,
	constants,
	general,
	components: overrides,
	palette,
	typography,
	zIndex: {
		appBar: 1200,
		drawer: 1100,
	},
	root: {
		display: 'flex',
	},
});

export default theme;
