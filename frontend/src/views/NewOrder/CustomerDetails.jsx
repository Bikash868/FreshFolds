import React from 'react';
import { FormInput } from '@components/FormInput';

export function CustomerDetailsForm() {
    const onNameChange = () => {

    }

    const onPhoneChange = () => {

    }

    return (
        <form style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'20'}}>
            <FormInput title={'Customer'} mandatory type={'textField'} onChange={onNameChange} placeholderKey={'Customer'}/>
            <FormInput title={'Phone Number'} mandatory type={'textField'} onChange={onPhoneChange} placeholderKey={'Phone'}/>
        </form>
    )
}