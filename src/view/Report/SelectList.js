import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectList() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" sx={{ minWidth: 130 }}>
      {age === "" ? 
        <InputLabel id="demo-simple-select-standard-label">Flow-Meter</InputLabel>
        : ""}
        <Select
          
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label={age === "" ? "Age" : ""}
          InputLabelProps={{ shrink: false }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    
    </>
  );
}