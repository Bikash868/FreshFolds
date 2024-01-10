import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormInput } from '@components/FormInput';

import { updateCustomer, updateOrderDate, updateDeliveryDate } from '@store/actions';

export function CustomerDetailsForm() {
	const dispatch = useDispatch();
	let { name, phone } = useSelector((state) => state.OrderReducer.customer);
	let { orderDate, expDeliveryDate } = useSelector((state) => state.OrderReducer);

	const onValueChange = (key, value) => {
		dispatch(updateCustomer({ [key]: value }));
	};

	const handleOrderDateChange = (val) => {
		const newOrderDate = val.format('DD/MM/YYYY');
		dispatch(updateOrderDate(newOrderDate));
	};

	const handleDeliveryDateChange = (val) => {
		const newDelDate = val.format('DD/MM/YYYY');
		dispatch(updateDeliveryDate(newDelDate));
	};

	React.useEffect(() => {
		const today = dayjs(new Date()).format('DD/MM/YYYY');
		dispatch(updateCustomer({ orderDate: today }));
	}, []);

	return (
		<form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20' }}>
			<FormInput
				title={'Customer'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('name', e.target.value)}
				placeholderKey={'name'}
				value={name}
			/>
			<FormInput
				title={'Phone Number'}
				mandatory
				type={'textField'}
				onChange={(e) => onValueChange('phone', e.target.value)}
				placeholderKey={'phone'}
				value={phone}
			/>
			<FormInput
				title={'Order date'}
				type={'date'}
				onChange={handleOrderDateChange}
				placeholderKey={'oDate'}
				value={orderDate}
			/>
			<FormInput
				title={'Exp. delivery date'}
				mandatory
				type={'date'}
				onChange={handleDeliveryDateChange}
				placeholderKey={'dDate'}
				value={expDeliveryDate}
			/>
		</form>
	);
}
