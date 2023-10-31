import React from 'react';
import { FormInput } from '@components/FormInput';

export function AddressDetailsForm() {
    const onNameChange = () => {

    }

    const onPhoneChange = () => {

    }

    return (
        <form style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'20'}}>
            <FormInput title={'Holuse/Flat/Block No.'} mandatory type={'textField'} onChange={onNameChange} placeholderKey={'Flat'}/>
            <FormInput title={'Apartment/Road/Area'} type={'textField'} onChange={onPhoneChange} placeholderKey={'Apartment'}/>
            <FormInput title={'Postal Code'} mandatory type={'textField'} onChange={onNameChange} placeholderKey={'Pin'}/>
            <FormInput title={'Country/Region'} mandatory type={'textField'} onChange={onPhoneChange} placeholderKey={'Country'}/>
            <FormInput title={'City'} mandatory type={'textField'} onChange={onNameChange} placeholderKey={'City'}/>
        </form>
    )
}