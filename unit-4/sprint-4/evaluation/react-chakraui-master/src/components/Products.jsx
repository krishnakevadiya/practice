import React from "react";
import Product from "./Product";
import { Flex, Grid } from "@chakra-ui/react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid><Product/></Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;