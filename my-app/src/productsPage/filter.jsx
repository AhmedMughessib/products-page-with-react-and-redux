import {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import axios from 'axios';
import './productPage.css';
import { useDispatch } from 'react-redux';
import {filterAdded} from '../features/filter/filterSlice';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const FilterComponent = () => {

  const dispatch = useDispatch();

const handleFilterChange = (e) => {
  console.log(e.target.value, e.target.checked, 'qq');
    dispatch(filterAdded({
      value: e.target.value,
      checked: e.target.checked
    }))
 
}


  const [categories, setCategories] = useState([]);
const getCategories = async () => {
  const resposnse = await axios.get('http://localhost:5000/categories');
  setCategories(resposnse.data)
}


useEffect(()=> {
  getCategories()
  console.log(categories);
},[])


  return (
    <div className='filter'>
      <Typography>
        Filter by Category
      </Typography>
   { categories.map(category => {
    //return id from db and assing it to hte elements key
    return (
    <div className='filters'>
     <span>{category.category}</span>
      <Checkbox
      name={category.category}
      value={category.category}
      onChange={handleFilterChange}
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      </div>
      )
})}
    </div>    
  )
}

export default FilterComponent;