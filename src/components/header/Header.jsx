import React from "react";
import { Container, Stack } from "react-bootstrap";
import "./Header.scss";


export const Header = ({ categories, callCategory, setCallCategory }) => {
  
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
    </Container>
  );
};
