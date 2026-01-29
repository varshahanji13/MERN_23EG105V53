
const coupons = {
     'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
     'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
      'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
 };
                          
                         
export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
    const coupon = coupons[couponCode];
    if (!coupon) {
        return { valid: false, message: 'Invalid coupon code' };
    }   

// 2. Check minimum amount requirement
    if (coupon.minAmount && cartTotal < coupon.minAmount) {
        return { valid: false, message: 'Cart total does not meet minimum amount requirement' };
    }

// 3. Check category requirement (if any)
    if (coupon.category) {
        const hasCategoryItem = cartItems.some(item => {
            const product = getProductById(item.productId);
            return product && product.category === coupon.category;
        });
        if (!hasCategoryItem) {
            return { valid: false, message: 'Cart does not contain items from the required category' };
        }
    }
// Return { valid: true/false, message: '...' }
    return { valid: true, message: 'Coupon is valid' };
}
                          
export function calculateDiscount(couponCode, cartTotal) {
    const coupon = coupons[couponCode];
    if (!coupon) {
        return 0;
    }
    if (coupon.type === 'percentage') {
        return (cartTotal * coupon.value) / 100;
    } else if (coupon.type === 'flat') {
        return coupon.value;
    }
    return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
    const validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        return { 
            originalTotal: cartTotal, 
            discount: 0, 
            finalTotal: cartTotal,
            message: validation.message
        };
    }
// 2. If valid, calculate discount
    const discount = calculateDiscount(couponCode, cartTotal);
    const finalTotal = Math.max(0, cartTotal - discount);

 // 3. Return final amount and discount details
    return { 
        originalTotal: cartTotal, 
        discount: discount, 
        finalTotal: finalTotal,
        message: 'Coupon applied successfully'
    };
                            
}
