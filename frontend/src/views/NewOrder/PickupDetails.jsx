import React from 'react';
import { FormInput } from '@components/FormInput';

export function PickupDetailsForm() {
    const onNameChange = () => {

    }

    const onPhoneChange = () => {

    }

    return (
        <form style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'20'}}>
            <FormInput title={'Pickup Type'} type={'textField'} onChange={onNameChange} placeholderKey={'blank'}/>
            <FormInput title={'Delivery Type'} type={'textField'} mandatory onChange={onPhoneChange} placeholderKey={'Delivery'}/>
        </form>
    )
}