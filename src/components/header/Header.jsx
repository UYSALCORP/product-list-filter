import React, { useState } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import "./Header.scss";
import { products, categories } from "../../helper/data";
import ProductCard from "../products/ProductCard";

export const Header = ({ products, categories }) => {
  const [callCategory, setCallCategory] = useState("all")
  //! Fitreleme Mantığı
  const filteredProducts = callCategory === "all" ? products : products.filter((product)=> product.category.toLowerCase() === callCategory);
  
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {/* //! Kategori Butonları */}
        {
          categories.map((category,index)=>(
            <button key={index} onClick={()=>setCallCategory(category.toLowerCase())} className={callCategory === category.toLowerCase() ? "active" : ""}>{category.toUpperCase()}</button>
          ))
        }
      </Stack>
      {/* <Stack className="products-list">
        {
          filteredProducts.length > 0 ? (filteredProducts.map((product)=>(
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <p>{product.category}</p>
            </div>
          ))) : (<p>No products found for this category</p>)
        }
      </Stack> */}




      
      {/* <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {
            filteredProducts.map((item)=> (
              <ProductCard key={item.id} {...item}/>
            ))
          }
        </Row>
      </Container> */}
    </Container>
  );
};
