import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const cartItems = getCartItems();
                            const cartTotal = getCartTotal();

                            // 2. Apply discount if coupon provided
                            const discountDetails = applyDiscount(cartTotal, couponCode, cartItems);

                            // 3. Validate payment method (card/upi/cod)
                            const paymentValid = validatePaymentMethod(paymentMethod);
                            if (!paymentValid) {
                              return {
                                status: 'failed',
                                message: 'Invalid payment method'
                              };
                            }
                            // 4. Process payment (simulate)
                            const paymentSuccess = true; // Simulate always successful
                            if (!paymentSuccess) {
                              return {
                                status: 'failed',
                                message: 'Payment processing failed'
                              };
                            }   
                            // 5. Reduce stock for all items
                            cartItems.forEach(item => {
                              reduceStock(item.id, item.quantity);
                            });
                            // 6. Clear cart
                            clearCart();
                            // 7. Generate order summary
                            const orderId = generateOrderId();
                            return {
                              orderId,
                              items: cartItems,
                              subtotal: cartTotal,
                              discount: discountDetails.discount,
                              total: discountDetails.finalTotal,
                              paymentMethod,
                              status: 'success',
                              message: 'Payment processed successfully'
                            };      
                            
 }
                          
  export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)


                        



 }
                          
 function generateOrderId() {
   // Generate random order ID




return 'ORD' + Date.now();
 }


