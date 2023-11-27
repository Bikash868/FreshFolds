import { Grid } from "@mui/material";
import { FormInput } from '@components/FormInput';
import PropTypes from 'prop-types';
import { Items } from '@data';

export const NewItemRow = (props) => {


    const newItemObj = [
        {
            key: 'name',
            type: 'dropDown',
            placeholderKey: 'Name',
            options: Items.sort((a, b) => a.label.localeCompare(b.label))
        },
        {
            key: 'quantity',
            type: 'dropDown',
            placeholderKey: 'Quantity',
            options: [ ...Array(10).keys() ].map( i => ({
                'label': i+1,
                'value': i+1
            }))
        },
        {
            key: 'price',
            type: 'textField',
            placeholderKey: 'Price'
        },
        {
            key: 'details',
            type: 'textField',
            placeholderKey: 'Details'
        }
    ]

    return (
        <Grid container spacing={2}>
        {
            newItemObj.map((item) => (
                <Grid item xs={3} key={item.key}>
                    <FormInput title={''} mandatory type={item.type} onChange={(obj) => props.onChange({index:props.index,key:item.key,...obj})} placeholderKey={item.placeholderKey} {...item} value={props[item.key]}/>
                </Grid>
            ))   
        }
        </Grid>
    )
}

NewItemRow.propTypes = {
    details : PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    price: PropTypes.number,
    quantity: PropTypes.number
}