const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products

const inStock=cart.filter(item=>item.inStock==true)
console.log("In Stock Items:", inStock);

//Use map() to create a new array with:  { name, totalPrice }
const newarray= cart.map(item=>{ return {name:item.name ,Totalprice:totalPrice=item.price * item.quantity }})
console.log("Items with Total Price:", newarray);


//Use reduce() to calculate grand total cart value
const grandtotal=cart.reduce((accumulator,item)=> accumulator + (item.price * item.quantity),0)
console.log("Grand Total Cart Value:", grandtotal);

//Use find() to get details of "Mouse"
const Mouse=cart.find(item=>item.name==="Mouse")
console.log("Details of Mouse:", Mouse);

//Use findIndex() to find the position of "Keyboard"
const Keyboard=cart.findIndex(item=>item.name=="Keyboard")
console.log("Index of Keyboard:", Keyboard);
