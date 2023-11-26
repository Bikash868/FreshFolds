import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledAccordion } from '@components/Accordion';

import { ServiceDetails } from './ServiceDetails';
import { PickupDetailsForm } from './PickupDetails';
import { BillingDetailsForm } from './BillingDetails';
import { AddressDetailsForm } from './AddressDetails';
import { CustomerDetailsForm } from './CustomerDetails';

import { Button } from '@components/Button';
import { ReactComponent as ScanIcon } from "@assets/svg/scan.svg";
import { ReactComponent as PrinterIcon } from "@assets/svg/printer.svg";
import { ReactComponent as ArrowForwardIcon } from "@assets/svg/arrow-round-forward.svg";


export const ScanGarment = () => {
    const handleClick = () => {

    }
    return (
        <Button
            startIcon={<ScanIcon/>}
            loading={false}
            variant={'outlined'}
            label={'Scan Garment'}
            handleClick={handleClick}
        />
    )
}

export const PrintInvoice = () => {
    const handleClick = () => {

    }
    return (
        <Button
            startIcon={<PrinterIcon/>}
            loading={false}
            variant={'contained'}
            label={'Print Invoice'}
            handleClick={handleClick}
        />
    )
}

export default function NewOrder() {

    return (
        <Container maxWidth={false}>
            <Grid container style={{ borderRadius: '1rem', background: '#fff' }}>
                <Grid item xs={12}>
                    <StyledAccordion title={"Place new Order"} defaultExpanded>
                        <CustomerDetailsForm/>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Pickup & Delivery"} defaultExpanded>
                        <PickupDetailsForm/>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Address"} defaultExpanded>
                        <AddressDetailsForm/>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Service & Detail"} rightElement={<ScanGarment/>} defaultExpanded>
                        <ServiceDetails/>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Billing"} noBorder={true} rightElement={<PrintInvoice/>} defaultExpanded >
                        <BillingDetailsForm/>
                    </StyledAccordion>
                </Grid>
                <Grid item xs={12}>
                    <div style={{display:'flex',marginLeft:'auto',padding:'1rem',justifyContent:'flex-end'}} >
                    <Button
                        startIcon={<ArrowForwardIcon/>}
                        loading={false}
                        variant={'contained'}
                        label={'Place Order'}
                        handleClick={()=>{}}
                    />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
