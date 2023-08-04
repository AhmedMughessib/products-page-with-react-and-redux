import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectProducts } from "../features/productsData/productsSlice";
import { priceSummaryChanged, selectPriceSummaryChanged } from "../features/priceSummary/priceSummarySlice";
import './productPage.css';
import axios from 'axios';



const StatsComponent = () => {
const [productNumber, setproductNumber] = useState(0);

const prouctsData = useSelector(selectProducts);
const totalPrice = useSelector(selectPriceSummaryChanged);
console.log(totalPrice, 'eerrt');
const dispatch = useDispatch();

const cache = {};

const getTotalNumberOfProducts = async () => {
  try {
    const url = 'http://localhost:5000/productsnumbur'
    if (cache['url']) {
      console.log('from cache');
    }
   const response = await axios.get(url);
   cache['url'] = 'response.data[0].row_count';
   setproductNumber(response.data[0].row_count);
   console.log('from api');
  } catch (error) {
    
  }
}



const getTotalPrice = () => {
  try {
    dispatch(priceSummaryChanged(prouctsData))
  } catch (error) {
    console.log(error.message)
  }
}
useEffect(()=> {
  getTotalPrice()
},[prouctsData])

useEffect(()=> {
  getTotalNumberOfProducts()
},[totalPrice])



return (
  <div className="summary">
<span><p>Total Number of Products:</p>{Number(productNumber)}</span>
<span><p>Total Price of products in this page:</p>${totalPrice}</span>
  </div>
)

}

export default StatsComponent