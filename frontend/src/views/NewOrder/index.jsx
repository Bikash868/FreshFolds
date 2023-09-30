import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledAccordion } from '@components/Accordion';

export default function NewOrder() {
    return (
        <Container maxWidth={false}>
            <Grid container style={{ borderRadius: '1rem', background: '#fff' }}>
                <Grid item xs={12}>
                    <StyledAccordion title={"Place new Order"}>
                        <div>Place new order</div>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Pickup & Delivery"}>
                        <div>Pickup & Delivery</div>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Address"}>
                        <div>Address</div>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Service & Detail"}>
                        <div>Service & Detail</div>
                    </StyledAccordion>
                </Grid>

                <Grid item xs={12}>
                    <StyledAccordion title={"Billing"} noBorder={true}>
                        <div>Billing</div>
                    </StyledAccordion>
                </Grid>
            </Grid>
        </Container>
    );
}
