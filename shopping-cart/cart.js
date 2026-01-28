
import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
  const product = getProductById(productId);            
    if (!product) {
        return { success: false, message: 'Product not found' };
    }
    const availableStock = checkStock(productId);
    if (availableStock < quantity) {
        return { success: false, message: 'Insufficient stock' };

    }
    const existingItem = cartItems.find(item => item.productId === productId);  
    if (existingItem) {

        if (availableStock < existingItem.quantity + quantity) {
            return { success: false, message: 'Insufficient stock' };
        }
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ productId, quantity });
    }
    return { success: true, message: 'Product added to cart' };
}
export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.productId !== productId);
}
export function updateQuantity(productId, newQuantity) {

    const item = cartItems.find(item => item.productId === productId);
    if (!item) {
        return { success: false, message: 'Product not in cart' };
    }
    const availableStock = checkStock(productId);
    if (availableStock < newQuantity) {
        return { success: false, message: 'Insufficient stock' };
    }   
    item.quantity = newQuantity;
    return { success: true, message: 'Quantity updated' };
}
export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.productId);
        return {
            ...product,
            quantity: item.quantity
        };
    });         
}
export function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}   
export function clearCart() {
    cartItems = [];
}       


