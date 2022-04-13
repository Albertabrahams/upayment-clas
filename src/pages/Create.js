import { useState } from "react";
import "./Create.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import { getDefaultNormalizer } from "@testing-library/react";

const Create = ({baseUrl,fetchTasks}) => {



  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [category, setCategory] = useState("Categories");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const developerEmail="halilibrahim.soyman@gmail.com";
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduce ={name,description,avatar,category,price,developerEmail}; 
    newProducts(newProduce);
    setName("");
    setDescription("");
    setAvatar("");
    setCategory("Categories");
    setPrice("");
    navigate("/");
    
    

  }

  const newProducts = async (newProduct) => {
    await axios.post(baseUrl, newProduct);
    fetchTasks();
  };

  return (
    <div>
    <div className="detailsNav">
    <BackArrow
      className="detailsNavIcon"
      onClick={() => navigate(-1)}
    />
    </div>

    <div className='create-form'>
      
      <h3 className="title">Create Product</h3>
      
      <form 
      className='create'
      onSubmit={handleSubmit}>

      <div>
      <input
              type="text"
              placeholder="Product Name"
              className='input-box'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
      </div>
      <div>
      <textarea
              type="textarea"
              className='input-box'
              placeholder="Description"
              cols="30" rows="5"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
      </div>

      <div>
      <input
              type="text"
              className='input-box'
              placeholder="Image Url"
              onChange={(e) => setAvatar(e.target.value)}
              value={avatar}
              required
            />
      </div> 
      <select 
      className="input-box" 
      id="dropdown"
      onChange={(e) => setCategory(e.target.value)}
      value={category}>
          <option value="categories" selected>Categories</option>
          <option value="electronics" >Electronics</option>
          <option value="furnitures" >Furnitures</option>
          <option value="mens-clothings" >Mens-clothings</option>
          <option value="womens-clothings" >Womens-clothings</option>
          <option value="accessories" >Accessories</option>
      </select>
      <div>
      <input
              type="number"
              className='input-box'
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
      </div>

      <div>
          <button type="submit" className='input-box but'><strong>SUBMIT</strong></button>
      </div>
      
      

      </form>
    </div>
    </div>
  )
}

export default Create