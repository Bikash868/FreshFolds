import React from "react";
import PropTypes, { oneOfType } from 'prop-types';

// import { Box, Typography } from "@mui/material";
import { FormControl, FormLabel, MenuItem, Select, TextField } from "@mui/material";

export function FormInput({ title, mandatory, onChange, dropDown, options, value }) {
    return (
        <FormControl fullWidth>
            <FormLabel component="legend">{title} {mandatory && <span>*</span>}</FormLabel>
            {!dropDown && <TextField
                // InputProps={{ startAdornment: (<img className={classes.inputIcon} src={SMS_SVG}/>)}}
                required
                fullWidth
                onChange={onChange}
                placeholder="Alexmarin@email.com"
                variant="outlined"
                name="email"
                // error={errors['email']}
                // helperText={errors['email']}
                value={value}
                color="grey"
                className={classes.inputRounded}
                size="small"
            />}
            {dropDown && <Select
                value={value}
                onChange={onChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                {
                    options.map((item) => (<MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>))
                }
            </Select>
            }
            {/* <Box mb={2} sx={{ height: 5 }}>
                <Typography color={'red'} variant="body2">
                    {errors['email']}
                </Typography>
            </Box> */}
        </FormControl>
    )

}

FormInput.propTypes = {
    title: PropTypes.string.isRequired,
    mandatory: oneOfType([PropTypes.bool, PropTypes.undefined]),
    dropDown: oneOfType([PropTypes.bool, PropTypes.undefined]),
    value: oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
    options: PropTypes.array,
}

