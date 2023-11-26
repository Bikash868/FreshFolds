import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
import PropTypes, { oneOfType } from 'prop-types';

export function Button ({loading, handleClick, label, startIcon, endIcon, variant, styleObj={} }) {
    return (
        <LoadingButton
          size="small"
          onClick={handleClick}
          startIcon={startIcon ? startIcon : null}
          endIcon={endIcon ? endIcon : null}
          loading={loading}
          loadingPosition={startIcon ? "start" : "end"}
          variant={variant}
          style={{textTransform: 'none',...styleObj}}
        >
            <Typography>{label}</Typography>
        </LoadingButton>
    )
}

Button.propTypes = {
    loading: PropTypes.bool,
    handleClick: PropTypes.func,
    startIcon: oneOfType([PropTypes.node, PropTypes.undefined]),
    endIcon: oneOfType([PropTypes.node, PropTypes.undefined]),
    value: oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
    variant:  PropTypes.string,
    styleObj: PropTypes.object
}