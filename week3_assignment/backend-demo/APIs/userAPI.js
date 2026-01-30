import express from 'express'
export const userApp = express.Router();

userApp.use(express.json())



//CREATE API's
//test local in-memory data
let users=[];

//get request handling route(read users)
userApp.get('/users',(request,response)=>{
    //response.json({"message":"This is reponse from GET request handler"});
    response.status(200).json({"message":"All users",payload:users});

}) //handling get request and send response

//post request handling route(create user)
userApp.post('/users',(request,response)=>{
   // response.json({"message":"This is reponse from POST request handler"});
   let newUser=request.body;
   //console.log("New User",newUser)
   users.push(newUser)
   response.status(201).json({"message":"Users created"})
})

//put request handling route(update user)
userApp.put("/users",(request,response)=>{
    //response.json({"message":"This is reponse from PUT request handler"});
    //get modified the user in the array
    // find the user with id exists in array
    //if user found,then modify the user
    //send response as "user modified"
    //request.body.id ? response.status(200).json({"message":"All users",payload:users}):json({"message":"User id not found"})

    let modifying=request.body;
    console.log(modifying)
    let userIndex= users.findIndex(userObj=>userObj.id===modifying.id)

    //if user is not found
    if(userIndex===-1)
       return response.status(404).json({"message":"User not found"})
    //if user is found
    users.splice(userIndex,1,modifying)
    response.status(200).json({"message":"User modified",payload:modifying})
})

//read user by id
userApp.get('/users/:id',(request,response)=>{//: because of this it is considered as the url

// //read id from url parameter
// //pramas returns the object
console.log(request.params)
let userId=Number(request.params.id)//{ id: '100' }
let user=users.find(userObj=>userObj.id===userId)
if(!user)
{
    return response.status(404).json({"message":"User not found"})
}
//send response
response.status(200).json({"message":"User",payload:user})
})


//delete request handling route(delete user)
userApp.delete('/users/:id',(request,response)=>{
    //response.json({"message":"This is reponse from DELETE request handler"});

    let userId = Number(request.params.id);

    let index = users.findIndex(userObj => userObj.id === userId);

    if(index === -1)
      return response.status(404).json({"message":"User not found"});

    users.splice(index,1);

    response.status(200).json({"message":"User deleted"});
})
