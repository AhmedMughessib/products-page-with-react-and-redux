import { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './productPage.css';

import ImgMediaCard from './card';

import { useGetProductsQuery } from '../features/apiSlice/apiSlice.js';
import {selectProducts} from '../features/productsData/productsSlice';
import {selectFilteredProducts, productsFiltered} from '../features/fiteredProducts/filteredProductsSlice';
import { sortSelector } from '../features/sort/sort';
import { selectSortedProducts, productsSorted } from '../features/sortedProducts/sortedProducts';

const SpacingGrid = () => {
  
const pageNumber = useSelector(state => state.pagination.value);
const productsData = useSelector(selectProducts);
const filters = useSelector(state => state.filter.value);
const filteredData = useSelector(selectFilteredProducts);
const sortType = useSelector(sortSelector);
const sortedData = useSelector(selectSortedProducts);


const { data, erorr, isLoading } = useGetProductsQuery(pageNumber);
console.log(data, 'easd');


const dispatch = useDispatch();

const filterProducts = () => {
  try {
    console.log(productsData, 'ff',filters);
    dispatch(productsFiltered({
      data: data,
      filters: filters
    }))
  } catch (error) {
    console.log(error.message)
  }
}

const sortProducts = () => {
  try {
    dispatch(productsSorted({
      sort: sortType,
      data: filteredData
    }))
  } catch (error) {
  console.log(error.message);    
  }
}

useEffect(() => {
  filterProducts()
},[filters, data])

useEffect(() => {
  sortProducts()
},[filteredData, productsData,sortType ])

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} className='productsList'>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {sortedData?.map((product) => (
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