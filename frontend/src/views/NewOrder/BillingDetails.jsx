import React from 'react';
import { FormInput } from '@components/FormInput';
import { useSelector } from 'react-redux';

export function BillingDetailsForm() {
   const { price } = useSelector(state => state.OrderReducer)

    return (
        <form style={{display:'grid', gridTemplateColumns:'1fr 1fr', columnGap:'20'}}>
            <FormInput title={'Subtotal'} type={'textField'} placeholderKey={'blank'} value={price.subTotal}/>
            <FormInput title={'Tax Amont'} type={'textField'} placeholderKey={'blank'} value={price.taxAmount}/>
            <FormInput title={'Pickup Charge'} type={'textField'} placeholderKey={'blank'} value={0}/>
            <FormInput title={'Delivery Charge'} type={'textField'}  placeholderKey={'blank'} value={0}/>
            <FormInput title={'Total Amount'} type={'textField'} placeholderKey={'blank'} value={price.total}/>
        </form>
    )
}