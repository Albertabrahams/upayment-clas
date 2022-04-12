import React from "react";
import Products from "./Products";

const Main = ({products, baseUrl, fetchTasks}) => {

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
      <Products products={products} baseUrl={baseUrl} fetchTasks={fetchTasks}/>
      </div>
    </div>

  )
    
 
};

export default Main;
