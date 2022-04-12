
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { AiFillPlusCircle } from 'react-icons/ai';
import { async } from "@firebase/util";
import axios from "axios";


const Products = ({products, baseUrl, fetchTasks}) => {

  const HandleDelete = async (e)=>{ 
    await axios.delete(`${baseUrl}/${e.target.id}`)
  }

  return (
    <div>
      
      <div className={styles.products}>
        {products.map((each) => (
          <Link
            to={`details/${each.id}`}
            key={each.id}
            className={styles.product}
          >
              <div className="card mt-5">
  <img className="card-img-top" src={each.avatar} style={{width: "15rem", height:"15rem"}} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{each.name}</h5>
    <p className="card-text text-center font-weight-bold">${each.price}</p>
    <a href="#" className="btn btn-primary" onClick={HandleDelete}>Delete</a>
  </div>
</div>
            {/* <img className={styles.img} style={{ width: "100px" }} src={each.avatar} alt="" />
            <h6 className={styles.name}>{each.name}</h6>
            <p className={styles.price}>${each.price}</p> */}
          </Link>
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
