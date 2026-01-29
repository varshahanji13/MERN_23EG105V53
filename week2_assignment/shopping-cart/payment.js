import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const cartItems = getCartItems();
                            const cartTotal = getCartTotal();

                            // Handle empty cart
                            if (cartItems.length === 0) {
                              return {
                                _status: 'failed',
                                get status() {
                                  return this._status;
                                },
                                set status(value) {
                                  this._status = value;
                                },
                                message: 'Cart is empty'
                              };
                            }

                            // 2. Apply discount if coupon provided
                            const discountDetails = couponCode
                              ? applyDiscount(cartTotal, couponCode, cartItems)
                              : { discount: 0, finalTotal: cartTotal };

                            // 3. Validate payment method (card/upi/cod)
                            paymentMethod = paymentMethod.toLowerCase();
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
                              discount: discountDetails.discount || 0,
                              total: discountDetails.finalTotal || cartTotal,
                              paymentMethod,
                              status: 'success',
                              message: 'Payment processed successfully'
                            };      
                            
  }

// Validate payment method (card / upi / cod)
export function validatePaymentMethod(method) {

  const allowedMethods = ['card', 'upi', 'cod'];

  return allowedMethods.includes(method);
}


// Generate random order id
function generateOrderId() {
  return 'ORD' + Date.now();
}
