import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  // component did mount!
  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);

        console.log(
          res.data.map((product) => {
            return (
              <div className="product-card">
                <img
                  src={
                    product?.img +
                    "?random=" +
                    Math.round(Math.random() * 999999999)
                  }
                />
                <h3>{product?.name}</h3>
                <p>{product?.description}</p>
                <p>{product?.price} ₺</p>
              </div>
            );
          })
        );
      });
  }, []);

  const sozler = [
    <p key={1}>Hayatta en hakiki mürşit ilimdir!</p>,
    <p key={2}>Mutluluk göz hizasındadır</p>,
    <p key={3}>İstikbal göklerdedir.</p>,
    <p key={4}>Geldikleri gibi giderler!</p>,
  ];

  return (
    <div>
      <h1 className="sayfa-baslik">Ürünler Sayfası</h1>
      <hr />

      {sozler}

      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
