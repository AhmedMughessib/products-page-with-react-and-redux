import './productPage.css';

import { useDispatch } from 'react-redux';
import { sortAdded } from '../features/sort/sort';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SortComponent() {

const dispatch = useDispatch()

  const handleClick = (e) => {
  dispatch(sortAdded(e.target.value))
  };
  

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Sort by</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue='none'
      >
        <FormControlLabel value="name" control={<Radio />} label="Name" onClick={handleClick}/>
        <FormControlLabel value="price" control={<Radio />} label="Price" onClick={handleClick}/>
        <FormControlLabel value="none" control={<Radio />} label="None" onClick={handleClick}/>
      </RadioGroup>
    </FormControl>
  );
}

