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
  const resposnse = await axios.get('https://fake-products.onrender.com/categories');
  setCategories(resposnse.data)
}

useEffect(()=> {
  getCategories()
  console.log(categories);
},[])


  return (
    <div className="filter">
    <Typography variant="h6" component="h2">
      Filter by Category
    </Typography>
    {categories.map(category => (
      <div key={category.category} className="filters">
        <label  className='filters'>
      <span>{category.category}</span>
        <Checkbox
      name={category.category}
      value={category.category}
      onChange={handleFilterChange}
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
        </label>
      </div>
    ))}
  </div>
      
  )
}

export default FilterComponent;