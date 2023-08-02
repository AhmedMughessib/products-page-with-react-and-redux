import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import {useSelector} from 'react-redux';
import axios from 'axios';

import ImgMediaCard from './card';

const SpacingGrid = () => {
const paginationNum = useSelector(state => state.pagination.value);
const filters = useSelector(state => state.filter.value)
const [productsData, setProductsData] = useState([]);
// notice cleanup function in useEffect when finish


const getProducts = async () => {
try {
  const response = await axios.get(`http://localhost:5000/products?pageNumber=${paginationNum}`);
  setProductsData(response.data)
} catch (error) {
  console.log(error.message);
}
}

const filterProducts = () => {
try {
  const filterData = productsData.filter((product) => {
    return filters.includes(product.category)
  })
  if(filters.length) {
    setProductsData(filterData)
  }
} catch (error) {
  console.log(error.message);
  
}
}

useEffect(() => {
  getProducts()
  filterProducts()
},[productsData])
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {productsData.map((product) => (
            <Grid key={product.id} item>
            <ImgMediaCard product={product}/>

            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
             
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}



export default SpacingGrid;