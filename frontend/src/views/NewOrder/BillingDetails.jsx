import React from 'react';
import { FormInput } from '@components/FormInput';

export function BillingDetailsForm() {
    const onNameChange = () => {

    }

    const onPhoneChange = () => {

    }

    return (
        <form style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'20'}}>
            <FormInput title={'Subtotal'} type={'textField'} onChange={onNameChange} placeholderKey={'blank'}/>
            <FormInput title={'Tax Amont'} type={'textField'} onChange={onPhoneChange} placeholderKey={'blank'}/>
            <FormInput title={'Pickup Charge'} type={'textField'} onChange={onNameChange} placeholderKey={'blank'}/>
            <FormInput title={'Delivery Charge'} type={'textField'} onChange={onPhoneChange} placeholderKey={'blank'}/>
            <FormInput title={'Total Amount'} type={'textField'} onChange={onNameChange} placeholderKey={'blank'}/>
        </form>
    )
}