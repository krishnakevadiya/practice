import React,{useEffect,useState} from "react";
import axios from 'axios';


import { Stack,Text,Image,Box,Heading,Tag,TagLabel } from "@chakra-ui/react";



const Product = () => {

  // TODO: Remove below const and instead import them from chakra
  const [myData,setMydata]=useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setMydata(response.data))
      
  }, []);
  return (
    <Box>
    <Stack  textAlign={"center"} data-cy="product" boxShadow='lg' p="10px" w="60%">
    {myData.slice(0, 9).map((post) => {
      const {id, title,price,imageSrc,gender,category } = post;
      return (
      <Box w="60%">
      <Image w="100%" data-cy="product-image" src={imageSrc}  />
      <Text  data-cy="product-category">{category}</Text>
      <Tag  w="70px">
        <TagLabel  data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading fontSize={"20px"} data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
        </Box>
      );
    })}
  </Stack>
  </Box>

);
};
export default Product;