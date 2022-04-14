import React from "react";
import Products from "./Products";

const Main = ({products, baseUrl, fetchTasks,setFilteredProduct,filteredProduct}) => {
  
  const handleCategory = (e)=> {
    if(e.target.value=="categories"){
      setFilteredProduct(products);
    }
    else{
    const filtered = products.filter(product=>product.category==e.target.value);
    setFilteredProduct(filtered);
  }}

  return (
  <div>
  <div  
  className="d-flex justify-content-between"
  style={{height:"4rem"}}
  >
  
    <form className="form-inline">
      <input 
      className="form-control mr-sm-2 w-auto" 
      type="search" 
      placeholder="Apple Watch, Samsung S21, Macbook Pro.." 
      aria-label="Search"
      />
    </form>
    <select 
    className="btn btn-light btn-sm dropdown-toggle mt-4" 
    id="dropdown"
    onChange={handleCategory}
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
      <Products baseUrl={baseUrl} filteredProduct={filteredProduct} fetchTasks={fetchTasks}/>
      </div>
    </div>

  )
    
 
};

export default Main;
