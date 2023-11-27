import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePrice } from '@store/actions';
import { updateCloths } from '@store/actions';

import { Button } from '@components/Button';
import { NewItemRow } from "./components";
import { AddItemButtonContainer } from "./elements";

const emptyClothItem = {
  'name':'',
  'quantity':0,
  'price':0,
  'details':''
}

export const ServiceDetails = () => {
  const dispatch = useDispatch();
  let { clothList } = useSelector( state => state.OrderReducer);

  const addClothes = () => {
    const updatedClothList = [...clothList];
    updatedClothList.push({...emptyClothItem});
    dispatch(updateCloths(updatedClothList));
  }

  const handleFormInput = (obj) => {
    const {index,key,value, unitPrice} = obj;

    let updatedClothList = clothList;
    updatedClothList[index][key] = value;

    if(unitPrice) {
      updatedClothList[index].unitPrice = unitPrice;
    }
    
    if(updatedClothList[index].name && updatedClothList[index].quantity !==0) {
      updatedClothList[index].price = updatedClothList[index].quantity * updatedClothList[index].unitPrice;
    }

    const subTotal = updatedClothList.reduce((acc,curr)=>{
      acc+=(curr.price);
      return acc;
    },0);
    const taxAmount = subTotal * 0.09;
    const total = subTotal + taxAmount;

    dispatch(updatePrice({subTotal,taxAmount,total}))
    dispatch(updateCloths(updatedClothList));
  }


	return (
		<div style={{ display: 'flex', flexDirection: 'column'}}>
      {
        clothList.map((item, index) => ( 
          <NewItemRow key={index} onChange={handleFormInput} {...item} index={index}/>
        ))
      }
      <AddItemButtonContainer>
        <Button
          startIcon={<AddIcon />}
          loading={false}
          variant={'outlined'}
          label={'Add Clothes'}
          handleClick={addClothes}
          styleObj={{ background:"#0164ec", color:"#fff", margin:'1rem', padding:'0.25rem 1rem', borderRadius:'1rem'}}
        />
      </AddItemButtonContainer>
		</div>
	);
};
