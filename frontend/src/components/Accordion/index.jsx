import React from "react";
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Accordion,
    AccordionDetails,
    // ListItem
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummaryWrapper } from './elements';

const useStyles = makeStyles((theme) =>
    createStyles({
        panelSummary: {
            flexDirection: "row-reverse",
            paddingLeft: "1rem",
        },
        heading: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: theme.typography.fontWeightRegular,
            marginLeft: '0.5rem !important',
        },
        innerMenuItem: {
            paddingLeft: "32px"
        },
        expanded: {
            padding: "0px"
        }
    })
);

export const StyledAccordion = (props) => {
    const classes = useStyles();

    return (
        <Accordion style={{ boxShadow: 'none', background: 'transparent', borderRadius: '0'}} defaultExpanded={props.defaultExpanded}>
            <AccordionSummaryWrapper
                className={classes.panelSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                noBorder={props?.noBorder || false}
            >
                <div style={{display:'flex',justifyContent: props.rightElement ? 'space-between' : 'start', width:'100%'}}>
                    <Typography className={classes.heading}>{props.title}</Typography>
                    {props.rightElement ? props.rightElement: null}
                </div>
            </AccordionSummaryWrapper>
            <AccordionDetails>
                <Grid container direction="column">
                    {props.children}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

StyledAccordion.propTypes = {
    title: PropTypes.string,
    noBorder: PropTypes.bool,
    children: PropTypes.children,
    defaultExpanded: PropTypes.bool,
    rightElement: PropTypes.node
}
