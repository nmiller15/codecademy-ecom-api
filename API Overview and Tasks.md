# API Overview amd Tasks

Create the back-end of an e-commerce application. Design the database and the REST API using Node, Express, Postgres, and any of the other tools that you found useful in the Back-End module of Codecademy.

## Project Requirements

- [ ] User Registration and Login  
- [ ] User Account CRUD operations  
- [ ] Product CRUD operations  
- [ ] User-Owned Carts CRUD operations  
- [ ] Orders - Place one  
- [ ] Orders CRUD operations  

### User Registration and Login

- [ ] Include two different types of users: administrator and user  
- [ ] POST registration  
- [ ] PUT user by id - change account status * *admin-only*  
- [ ] POST login  
- [ ] POST logout by id  

### User Account CRUD operations

- [ ] GET user profile * *validate-self*  
- [ ] GET all accounts * *admin only*  
- [ ] DELETE user by id * *validate-self* or *admin-only*  
- [ ] GET all users *admin-only*  
- [ ] PUT user by id * *validate-self* or *admin-only*  

### Product CRUD operations

- [ ] GET all products  
- [ ] GET product by id  
- [ ] POST product * *admin only*  
- [ ] PUT product by id * *admin only*  
- [ ] DELETE product by id * *admin only*  

### User Owned Cart CRUD

- [ ] GET cart id by id * *validate-self*  
- [ ] POST product to cart  
- [ ] DELETE product in cart  
- [ ] DELETE all products in cart  

### Orders 

- [ ] POST new order  
- [ ] GET existing order  
- [ ] GET all orders * *admin-only*  
- [ ] PUT edit exisiting order 

### Potential Modules/Middleware

[ ] userIsAdmin  
[ ] identifyUser - for cart and validation of profile edits 
[ ] checkOrderStatus - isShipped? or isNotShipped? - maybe add some date functionality with this
