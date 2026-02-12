### Backened development


1. Create a git repo
    git init
2. Add .gitignore file

3. Create .env file for enivronment variables and read data from .env with "dotenv" module
    npm install dotenv

 -->used for keeping variables protected like secret key before pushing into github
 -->if the port number is assigned to other application , after deploying the our application may crash so .env helps to assign a port number which is not used yet
 
 4. Generate package.json
    npm init -y

5. Create express app
    server.js

6. Connect to database
    npm install mongoose

7. Add middlewares(body parser, error handling middlewares)

8. Design schemas and create models

9. Design REST APIS  for the all resources

### User login and sign in
10. Registration and login in common for user and author . Create a seperate service to reuse 

11. The client won't send the role it just redirects to the specific API

