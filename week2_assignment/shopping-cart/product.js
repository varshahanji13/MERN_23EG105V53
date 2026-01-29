
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
export function getProductById(id) {
// Find and return product by ID
//find method is used to find object in array
const findProduct= products.find(product=>product.id===id);
return findProduct;
}
export function getAllProducts() {
// Return all products
return products;
}

export function getProductsByCategory(category) {
// Filter products by category
//filter method is used to filter objects in array based on condition
const categoryProducts = products.filter(product=>product.category=== category);
return categoryProducts;
}

export function searchProducts(query) {
// Search products by name (case-insensitive)
//toLowerCase method is used to convert string to lowercase for case-insensitive comparison
const Search = products.filter(product=>product.name.toLowerCase().includes(query.toLowerCase()));
return Search;
}
 
export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
const product = products.find(p => p.id === productId);
return product ? product.stock >= quantity : false;//ternary operator is used to check if product exists and has enough stock
}
export function reduceStock(productId, quantity) {
// Reduce product stock after purchase
const product = products.find(p=> p.id === productId);
product ? product.stock -= quantity : null;//ternary operator is used to check if product exists and reduce stock 

}