import React from 'react';
import SpacingGrid from './grid';
import CustomIcons from './pagination';
import './productPage.css';
import FilterComponent from './filter';
import StatsComponent from './statsComponent';
import SortComponent from './sortComponent'



const ProductsPage = () => {
return (
  <div className='productPage'>
    <div className='productsSection'>
    <SpacingGrid />
    <CustomIcons />
    </div>
    <div className='controllers'>
    <FilterComponent />
    <StatsComponent />
    <SortComponent />
    </div>
      
  </div>

)
}

export default ProductsPage;