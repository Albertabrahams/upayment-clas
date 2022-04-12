import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/CheckoutBag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);
  
  
  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow
          className={styles.detailsNavIcon}
          onClick={() => navigate(-1)}
        />
        <h1>Details Page</h1>
        <CheckoutBag
          className={styles.detailsNavIcon}
          onClick={() => navigate("/checkout", { state: { product } })}
        />
      </div>
      <div className={styles.container}>
      <div className={styles.detailsWrapper}>
        <div>
          <img
          className={styles.detailsImage}
          src={product?.avatar}
          alt={product?.title}
        /></div>
        
        <div>
        <p><strong>{product?.name}</strong></p>
        <br /><br /><br /><br />
        <p><strong>${product?.price}</strong></p>
        </div>
        </div>
        <hr />
        <div className="desc">
          <h5><strong>Description</strong></h5>
          <p>{product?.description}</p>
          </div>
        
        

      </div>
    </div>
  );
};

export default Details;
