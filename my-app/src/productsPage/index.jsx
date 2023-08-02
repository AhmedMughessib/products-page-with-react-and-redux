import React from 'react';
import SpacingGrid from './grid';
import CustomIcons from './pagination';
import './productPage.css';
import FilterComponent from './filter';




const ProductsPage = () => {
  const [pageNum, setPageNum] = React.useState(1);
return (
  <div className='productPage'>
    <div className='controlers'>
    <SpacingGrid />
    <CustomIcons />
    </div>
    <FilterComponent />
  </div>

)
}

export default ProductsPage;