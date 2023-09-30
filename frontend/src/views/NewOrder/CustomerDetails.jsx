import React from 'react';
import { FormInput } from '@components/FormInput';

export function CustomerDetailsForm() {
    return (
        <form>
            <FormInput title={'Customer'} mandatory />
            <FormInput title={'Phone Number'} mandatory />
        </form>
    )
}