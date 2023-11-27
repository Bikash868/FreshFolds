import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormInput } from '@components/FormInput';

import { updateCustomer } from '@store/actions';

export function CustomerDetailsForm() {
	const dispatch = useDispatch();
	let { name, phone } = useSelector((state) => state.OrderReducer.customer);

	const onValueChange = (key,value) => {
		dispatch(updateCustomer({ [key]: value }));
	};

	return (
		<form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20' }}>
			<FormInput
				title={'Customer'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('name',e.target.value)}
				placeholderKey={'name'}
				value={name}
			/>
			<FormInput
				title={'Phone Number'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('phone',e.target.value)}
				placeholderKey={'phone'}
				value={phone}
			/>
		</form>
	);
}
