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






const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Keerthi", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
const passed= students.filter(item=>item.marks>=40)

/*map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D
*/
const grade=students.map(item=>
{
    let grade
    if(item.marks>=90)
        students.grade= 'A'
    else if(item.marks>=75 && item.marks<90)
        students.grade='B'
    else if (item.marks>=60 && item.marks<75)
        students.grade='C'
    else
        student.grade= 'D'
}
)

//reduce() to calculate average marks
const average=students.reduce((sum,item)=>sum+item.marks,0)/students.length;
console.log("Average marks:", average);


//find() the student who scored 92
//findIndex() of student "Keerthi"
const find92=students.find(item=> item.marks==92);
console.log("Student who scored 92:", find92);
const indexofKeerthi=students.findIndex(item=> item.name=="Keerthi");
console.log("Index of student 'Keerthi':", indexofKeerthi);




const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

  //  1. filter() employees from IT department
const itEmployees=employees.filter(item=> item.department=="IT")
console.log("IT Department Employees:", itEmployees);

   // 2. map() to add:
   //         netSalary = salary + 10% bonus
const netSalaries=employees.map(item=> { return { name:item.name, netSalary: item.salary + (item.salary * 0.10) }})
console.log("Employees with Net Salary:", netSalaries);

 //   3. reduce() to calculate total salary payout
const totalPayout=employees.reduce((sum,item)=> sum + item.salary,0)

//    4. find() employee with salary 30000
const find30000=employees.find(item=> item.salary==30000);
console.log("Employee with salary 30000:", find30000);

//    5. findIndex() of employee "Neha"
const indexofNeha=employees.findIndex(item=> item.name=="Neha");
console.log("Index of employee 'Neha':", indexofNeha);
console.log("Total Salary Payout:", totalPayout);
console.log("Total Salary Payout:", totalPayout);





const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


/*Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const sciFiMovies=movies.filter(item=> item.genre=="Sci-Fi")
console.log("Sci-Fi Movies:", sciFiMovies);
const movieTitles=movies.map(item=> `${item.title} (${item.rating})`)
console.log("Movie Titles with Ratings:", movieTitles);
const averageRating=movies.reduce((sum,item)=> sum + item.rating,0)/movies.length;
console.log("Average Movie Rating:", averageRating);
const findJoker=movies.find(item=> item.title=="Joker");
console.log("Details of movie 'Joker':", findJoker);
const indexofAvengers=movies.findIndex(item=> item.title=="Avengers");
console.log("Index of movie 'Avengers':", indexofAvengers);



const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

/*
Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
const creditTransactions=transactions.filter(item=> item.type=="credit")
console.log("Credit Transactions:", creditTransactions);
const transactionAmounts=transactions.map(item=> item.amount)
console.log("Transaction Amounts:", transactionAmounts);
const finalBalance=transactions.reduce((balance,item)=> item.type=="credit" ? balance + item.amount : balance - item.amount,0)
console.log("Final Account Balance:", finalBalance);
const firstDebit=transactions.find(item=> item.type=="debit");
console.log("First Debit Transaction:", firstDebit);
const indexof10000=transactions.findIndex(item=> item.amount==10000);
console.log("Index of transaction with amount 10000:", indexof10000);
console.log("Total Salary Payout:", totalPayout);
