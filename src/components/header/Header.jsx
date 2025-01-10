import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { products, categories } from "../../helper/data";

export const Header = ({ products, categories }) => {
  const [callCategory, setCallCategory] = useState("all")
  const handleClick=(e)=>{
    // console.log(e.target.value)
  }
  
  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {
          categories.map((item,index)=>(
            <button key={index} onClick={handleClick}>{item.toUpperCase()}</button>
          ))
        }
      </Stack>
    </Container>
  );
};
