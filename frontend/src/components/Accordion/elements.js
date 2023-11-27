import Styled from "@emotion/styled";
import { AccordionSummary } from "@mui/material";

export const AccordionSummaryWrapper = Styled(AccordionSummary)`
    border-bottom: ${(props) => (props.noBorder ? 'none' : '1px solid #d7d7d7')};
`;