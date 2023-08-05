import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectProducts } from "../features/productsData/productsSlice";
import { priceSummaryChanged, selectPriceSummaryChanged } from "../features/priceSummary/priceSummarySlice";
import './productPage.css';
import axios from 'axios';
import { useGetProductsQuery } from '../features/apiSlice/apiSlice.js';





const StatsComponent = () => {
const [productNumber, setproductNumber] = useState(0);



const pageNumber = useSelector(state => state.pagination.value);
const totalPrice = useSelector(selectPriceSummaryChanged);
const { data } = useGetProductsQuery(pageNumber);


const getTotalNumberOfProducts = async () => {
  try {
    const url = 'https://fake-products.onrender.com/productsnumbur'
   const response = await axios.get(url);
   setproductNumber(response.data[0].row_count);
  } catch (error) {
    
  }
}
useEffect(()=> {
  getTotalNumberOfProducts()
},[totalPrice])

return (
  <div className="summary">
  <span>
    <p>Total Number of Products:</p>
    <strong>{Number(productNumber)}</strong>
  </span>
  <span>
    <p>Total Price of products in this page:</p>
    <strong>
      $
      {data?.reduce((acc, curr) => {
        return acc + Number(curr.price);
      }, 0)}
    </strong>
  </span>
</div>
)

}

export default StatsComponent