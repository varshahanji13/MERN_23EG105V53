import express from 'express';

export const productApp = express.Router();

// local memory
let products = [];

// GET all products
productApp.get('/products', (request, response) => {
  response.status(200).json({ message: "All products", payload: products });
});

// POST create product
productApp.post('/products', (request, response) => {
  let newProduct = request.body;
  products.push(newProduct);
  response.status(201).json({ message: "Product created" });
});

// PUT update product
productApp.put('/products', (request, response) => {

  let modifying = request.body;

  let productIndex = products.findIndex(p => p.id === modifying.id);

  if (productIndex === -1)
    return response.status(404).json({ message: "Product not found" });

  products.splice(productIndex, 1, modifying);

  response.status(200).json({ message: "Product modified", payload: modifying });
});

// GET product by id
productApp.get('/products/:id', (request, response) => {

  let productId = Number(request.params.id);

  let product = products.find(p => p.id === productId);

  if (!product)
    return response.status(404).json({ message: "Product not found" });

  response.status(200).json({ message: "Product", payload: product });
});

// DELETE product
productApp.delete('/products/:id', (request, response) => {

  let productId = Number(request.params.id);

  let index = products.findIndex(p => p.id === productId);

  if (index === -1)
    return response.status(404).json({ message: "Product not found" });

  products.splice(index, 1);

  response.status(200).json({ message: "Product deleted" });
});

//export default productApp;
