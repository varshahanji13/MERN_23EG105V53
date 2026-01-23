const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
/*
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably
*/
const activeUsers = users.filter(user=>user.active == true);
console.log("activeUsers", activeUsers)



let userNames=activeUsers.map(user=>user.name)
console.log("userNames", userNames)


const anyAdmin=users.find(user=>user.role ==="admin")
console.log("anyAdmin", anyAdmin)

const findUser= users.find(user=>user.id===2)
console.log("findUser", findUser)


const deactivateUser = users.map(user=>({...user, active:false}))
console.log("deactivateUser", deactivateUser)
   

/*    
MODULE-2 :COURSE PROCESSING ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably
  */

const publishedCourses = courses.filter(course => course.published ===true)
console.log("publishedCourses", publishedCourses)

const sortCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("sortCourses", sortCourses)

const courseTitlePrice=courses.map(course=>({title:course.title, price:course.price}))
console.log("courseTitlePrice", courseTitlePrice)


const totalValue= courses.reduce((total, course) => total + course.price, 0)
console.log("totalValue", totalValue)

const newCourse= { id: 104, title: "Dbms", price: 1999, published: true }
courses.push(newCourse)
console.log("courses after adding new course", courses)


/*    
MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses

*/
const cartMap=new Map(cart.map(item=>[item.courseId,item.qty]))
//mapping the courseId and qty and map() is used best for the lookup compared to other functions
const mergeCart= courses.reduce((acc,course)=>{
 if (cartMap.has(course.id))//if id is present in the cartMap then it is viewed or else output is undefined
{
  acc.push({
    ...course, qty : cartMap.get(course.id)
})

}
return acc //acc must be returned

},[]); // [] is the accumulator for result
console.log("mergeCart", mergeCart)


const totalAmount = mergeCart.reduce((acc,item)=> acc + item.price * item.qty,0)
console.log("Total cart amount:",totalAmount)



const increaseQty=cart.map(item=>
  item.courseId ? {...item, qty: item.qty + 1} : item
)
console.log("After quantity increased:",increaseQty)

const removeCourseId=102
const updatedCart=cart.filter(item=>item.courseId !== removeCourseId)
console.log("After removing course from cart:",updatedCart)

const allPaidCourses= mergeCart.every(item=> item.price > 0)
console.log("All cart items are paid courses:",allPaidCourses)
 




/*MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
*/
const roleNames= Object.keys(roles)
console.log("roleNames", roleNames)


const studentCanDelete= roles.student.includes("delete")
console.log("studentCanDelete", studentCanDelete)

const allPermissions= Object.values(roles).flat()
const uniquePermissions= [...new Set(allPermissions)]
console.log("uniquePermissions", uniquePermissions)


const newRole={moderator:["update","view"]}

const updatedRoles={...roles, ...newRole}
console.log("updatedRoles", updatedRoles)


