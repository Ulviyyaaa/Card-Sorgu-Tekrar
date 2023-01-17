import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Helmet } from "react-helmet";

function ProductPage() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Navbar />
      {product.map((element) => {
        return (
          <div className="main">
            <div className="card" style={{ width: "18rem" }}>
              <img src={element.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
                <p className="card-text">{element.price}</p>
                <Link to={`/add/${element.id}`}>
                  <button>buy</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
