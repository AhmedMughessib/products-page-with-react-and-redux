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

const getTotalNumberOfProducts = async () => {
  try {
   const response = await axios.get('http://localhost:5000/productsnumbur');
   setproductNumber(response.data[0].row_count);
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
},[])



return (
  <div className="summary">
<span><p>Total Number of Products:</p>{Number(productNumber)}</span>
<span><p>Total Price of products in this page:</p>${totalPrice}</span>
  </div>
)

}

export default StatsComponent