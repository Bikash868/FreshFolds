import React from 'react';
// import { ReactComponent as RoundedCancelIcon } from "@assets/svg/rounded-cance";
import PropTypes, { oneOfType } from 'prop-types';

// import { Box, Typography } from "@mui/material";
import { FormControl, FormLabel, MenuItem, TextField } from '@mui/material';
import { StyledSelect } from './elements';

export function FormInput({ title, mandatory, onChange, options, value, type, placeholderKey }) {
	const placeholders = {
		name: 'Alex Marin',
		phone: '9304147313',
		Flat: '49',
		Apartment: 'Nadiya Paradise',
		Pin: '560037',
		Country: 'India',
		City: 'Bengaluru',
		Dress: {
			id: '#46494437',
			type: 'Blanket',
			service: 'Dry Clean',
			amount: '210',
		},
		Delivery: 'Store',
		blank: '',
	};
    
	return (
		<FormControl
			fullWidth
			style={{
				display: 'grid',
				gridTemplateColumns: title ? '1fr 1fr' : '1fr',
				columnGap: '20',
				padding: '0.5rem',
				alignItems: 'center',
			}}
		>
			{title && (
				<FormLabel component="legend" style={{ display: 'flex', marginRight: '0.5rem' }}>
					{title} {mandatory && <span style={{ color: 'red' }}>*</span>}
				</FormLabel>
			)}
			{type === 'textField' && (
				<TextField
					InputProps={
						{
							// startAdornment: (<img className={classes.inputIcon} src={SMS_SVG}/>),
							// endAdornment: (<img className={classes.inputIcon} src={SMS_SVG}/>)
						}
					}
					required
					fullWidth
					onChange={onChange}
					placeholder={placeholderKey ? placeholderKey : placeholders[placeholderKey]}
					variant="outlined"
					name="email"
					value={value}
					color="grey"
					size="small"
					style={{ width: '15rem', background: '#EFF2F7 0% 0% no-repeat padding-box' }}
				/>
			)}
			{type === 'dropDown' && (
				<StyledSelect value={value} onChange={onChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} placeholder={placeholderKey}>
					{options.map((item) => (
						<MenuItem value={item.value} key={item.value}>
							{item.label}
						</MenuItem>
					))}
				</StyledSelect>
			)}
		</FormControl>
	);
}

FormInput.propTypes = {
	title: PropTypes.string.isRequired,
	mandatory: oneOfType([PropTypes.bool, PropTypes.undefined]),
	dropDown: oneOfType([PropTypes.bool, PropTypes.undefined]),
	value: oneOfType([PropTypes.string, PropTypes.object]),
	onChange: PropTypes.func,
	options: PropTypes.array,
	type: PropTypes.string,
	placeholderKey: PropTypes.string,
};
