import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  DashCircleFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import ApiService from "../components/dataService";
interface Product {
  title: string;
  price: string;
  image: string;
  description: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}
let HomeComponent: React.FC = () => {
  let [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     console.log(res);
    //     setProducts(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    ApiService.getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Product List</h2>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Rating</th>
              <th scope="col"> Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-thumbnail"
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} </td>
                <td>{product.description}</td>
                <td>{product.rating.rate}</td>
                <td>
                  {product.quantity}1<PlusCircleFill></PlusCircleFill>{" "}
                  <DashCircleFill></DashCircleFill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default HomeComponent;
