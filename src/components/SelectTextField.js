import { InputLabel, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { LightBox } from '../Utils/Theme'

export default function SelectTextField({data,value,labelText}) {
    return (
        <>
          
            <TextField
          id="standard-select-currency"
          select
          label={labelText}
          defaultValue={value}
          variant="standard"
        fullWidth
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
           
        </>
    )
}
