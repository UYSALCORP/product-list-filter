import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
// import { Header } from "../header/Header";
import { useState } from "react";
import { Header } from "../header/Header";

const ProductsList = ({products}) => {
  const [search, setSearch] = useState("")
  const [callCategory, setCallCategory] = useState("all")

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  //! Kategori ve Arama filtresi birleştirme
  const filteredData = products.filter((item)=>item.title.toLowerCase().includes(search.trim().toLowerCase()) && (callCategory === "all" || item.category.toLowerCase() === callCategory));

  return (
    <>
    {/* //! HEADER */}
      <Header categories={categories} callCategory={callCategory} setCallCategory={setCallCategory}/>
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleChange}
      />
      {/* //! PRODUCT CARD  */}
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {
            filteredData.map((item)=> (
              <ProductCard key={item.id} {...item}/>
            ))
          }
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
