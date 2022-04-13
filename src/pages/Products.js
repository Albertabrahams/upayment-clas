
import { Link, useNavigate } from "react-router-dom";
import styles from "./Products.module.css";
import { AiFillPlusCircle } from 'react-icons/ai';
import axios from "axios";


const Products = ({baseUrl, fetchTasks, filteredProduct}) => {
  const navigate = useNavigate();

  const HandleDelete = async (e)=>{ 
    await axios.delete(`${baseUrl}/${e.target.parentElement.parentElement.id}`)
    
    fetchTasks();
  }


  return (
    <div>
      
      <div className={styles.products}>
        {filteredProduct.map((each) => (

          <span
            id={each.id}
            className={styles.product}
          >
              <div className="card mt-5" onClick={()=>navigate(`details/${each.id}`)} >
            <img 
            className="card-img-top" src={each.avatar} 
            style={{width: "15rem", height:"15rem"}} 
            alt="Card image cap"
            
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{each.name}</h5>
              <p className="card-text text-center font-weight-bold">${each.price}</p>
            </div>
          </div>
          <div><a href="#" className="btn btn-primary" onClick={HandleDelete}>Delete</a></div>
          </span>
  
        ))}
      </div>
      <Link
      to={"/create"}
      
      >
      <AiFillPlusCircle
      className={styles.plus}/>
      </Link>
      
    </div>
  );
};

export default Products;
