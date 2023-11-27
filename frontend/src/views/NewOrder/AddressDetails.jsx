import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { updateCustomer } from '@store/actions';
import { FormInput } from '@components/FormInput';

export function AddressDetailsForm() {
    const dispatch = useDispatch();
	let { flat, apartment, pin, country, city } = useSelector((state) => state.OrderReducer.customer);

	const onValueChange = (key, value) => {
		dispatch(updateCustomer({ [key]: value }));
	};

	return (
		<form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20' }}>
			<FormInput
				title={'Holuse/Flat/Block No.'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('flat', e.target.value)}
				placeholderKey={'flat'}
                value={flat}
			/>
			<FormInput
				title={'Apartment/Road/Area'}
				type={'textField'}
				onChange={(e) => onValueChange('apartment', e.target.value)}
				placeholderKey={'apartment'}
                value={apartment}
			/>
			<FormInput
				title={'Postal Code'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('pin', e.target.value)}
				placeholderKey={'pin'}
                value={pin}
			/>
			<FormInput
				title={'Country/Region'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('country', e.target.value)}
				placeholderKey={'country'}
                value={country}
			/>
			<FormInput
				title={'City'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('city', e.target.value)}
				placeholderKey={'city'}
                value={city}
			/>
		</form>
	);
}
