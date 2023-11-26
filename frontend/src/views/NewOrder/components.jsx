import { Grid } from "@mui/material";
import { FormInput } from '@components/FormInput';
import PropTypes from 'prop-types';

export const NewItemRow = (props) => {

    // const handleNameChange = (e) => {
    //     console.log(props);
    //     props.onChange({index:props.index, key:e.key, value:e.value})
    // }

    const newItemObj = [
        {
            key: 'name',
            type: 'textField',
            // onChange: handleNameChange,
            placeholderKey: 'Name'
        },
        {
            key: 'quantity',
            type: 'dropDown',
            // onChange: handleNameChange,
            placeholderKey: 'Quantity',
            options: [ ...Array(10).keys() ].map( i => ({
                'label': i+1,
                'value': i+1
            }))
        },
        {
            key: 'price',
            type: 'textField',
            // onChange: handleNameChange,
            placeholderKey: 'Price'
        },
        {
            key: 'details',
            type: 'textField',
            // onChange: handleNameChange,
            placeholderKey: 'Details'
        }
    ]

    return (
        <Grid container spacing={2}>
        {
            newItemObj.map((item) => (
                <Grid item xs={3} key={item.key}>
                    <FormInput title={''} mandatory type={item.type} onChange={(e) =>props.onChange({index:props.index,key:item.key,value:e.target.value})} placeholderKey={item.placeholderKey} {...item} value={props[item.key]}/>
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