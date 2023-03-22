import React from "react";

import {Popover, Button,Modal,ModalBody,Input,Select,option,RadioGroup,Radio, } from '@chakra-ui/react';
const AddProduct = () => {
  

  return (
    <>
   <Popover>
      <Button  my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"></Button>
        </ModalBody>
      </Modal>
      </Popover>
    </>
  );
};

export default AddProduct;