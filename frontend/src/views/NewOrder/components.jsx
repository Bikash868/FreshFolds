import { Grid } from '@mui/material';
import { FormInput } from '@components/FormInput';
import PropTypes from 'prop-types';
import { Items } from '@data';

export const NewItemRow = (props) => {
	const isDryCleanAvailable = props.dryClean.available;

	const serviceOptions = [
		{
			label: 'Normal Wash',
			value: 'normalWash',
		},
		{
			label: 'Dry Clean',
			value: 'dryClean',
		},
	];

	const newItemObj = [
		{
			key: 'name',
			type: 'dropDown',
			placeholderKey: 'Name',
			options: Items.sort((a, b) => a.label.localeCompare(b.label)),
		},
		{
			key: 'serviceType',
			type: 'dropDown',
			placeholderKey: 'Service Type',
			options: isDryCleanAvailable ? serviceOptions : serviceOptions.slice(0, 1),
			defaultValue: 'normalWash',
		},
		{
			key: 'quantity',
			type: 'dropDown',
			placeholderKey: 'Quantity',
			options: [...Array(10).keys()].map((i) => ({
				label: i + 1,
				value: i + 1,
			})),
			defaultValue: '1',
		},
		{
			key: 'price',
			type: 'textField',
			placeholderKey: 'Price',
		},
		{
			key: 'details',
			type: 'textField',
			placeholderKey: 'Details',
		},
	];

	return (
		<Grid container spacing={2}>
			{newItemObj.map((item) => (
				<Grid item xs={12 / 5} key={item.key}>
					<FormInput
						title={''}
						mandatory
						type={item.type}
						onChange={(obj) => props.onChange({ index: props.index, key: item.key, ...obj })}
						placeholderKey={item.placeholderKey}
						{...item}
						value={props[item.key]}
						defaultValue={item?.defaultValue}
					/>
				</Grid>
			))}
		</Grid>
	);
};

NewItemRow.propTypes = {
	details: PropTypes.string,
	index: PropTypes.number,
	name: PropTypes.string,
	onChange: PropTypes.func,
	price: PropTypes.number,
	quantity: PropTypes.number,
	dryClean: PropTypes.object,
};
