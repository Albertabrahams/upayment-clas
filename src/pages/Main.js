import React from "react";
import Products from "./Products";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {

  const baseUrl = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
   
    const {data} = await axios.get(baseUrl);
    // console.log(data);

    setProducts(data);
  };

  return (
  <div>
  <div  
  className="d-flex justify-content-between"
  style={{height:"4rem"}}
  >
  
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    <select 
    className="btn btn-light btn-sm dropdown-toggle mt-4" 
    id="dropdown"
    >
        <option value="categories" selected>Categories</option>
        <option value="electronics" >Electronics</option>
        <option value="furnitures" >Furnitures</option>
        <option value="mens-clothings" >Mens-clothings</option>
        <option value="womens-clothings" >Womens-clothings</option>
        <option value="accessories" >Accessories</option>
    </select>

  </div>
      <div>
      <Products products={products}/>
      </div>
    </div>

  )
    
 
};

export default Main;
