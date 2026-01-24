
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

/*
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

const deepCopy = structuredClone(order); //deep copy using structuredClone

deepCopy.customer.address.city="Mumbai"; //modifying city in copied object
deepCopy.items[0].price=65000; //modifying price in copied object

console.log("Original Object",order);
console.log("Deep Copied Object:",deepCopy);
