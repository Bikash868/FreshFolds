export default {
	styleOverrides: {
		root: {
			boxShadow: 'none',
			[`& fieldset`]: {
				borderRadius: '4px',
			},
			'MuiInputBase-input': {
				padding: '0px !important'
			},
			size: 'small',
			fontSize: '0.875rem',
		},
		input: {
			padding:'8px 5px'
		}
	}
};
