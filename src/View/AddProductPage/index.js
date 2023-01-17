import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Helmet } from "react-helmet";

function AddProductPage() {
  let { id } = useParams();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Navbar />
      <div className="main">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            {/* <Link to={`/add/${product.id}`}><button>buy</button></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
