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

- [x] Include two different types of users: administrator and user  
- [x] POST registration  
- [x] PUT user by id - change account status * *admin-only*  
- [x] POST login  
- [x] POST logout by id  

### User Account CRUD operations

- [x] GET user profile * *validate-self*  
- [x] GET all accounts * *admin only*  
- [x] DELETE user by id * *validate-self* or *admin-only*  
- [x] PUT user by id * *validate-self* or *admin-only*  

### Product CRUD operations

- [x] GET all products  
- [x] GET product by id  
- [x] POST product * *admin only*  
- [x] PUT product by id * *admin only*  
- [x] DELETE product by id * *admin only*  

### User Owned Cart CRUD

- [x] GET cart id by id * *validate-self*  
- [x] POST product to cart  
- [x] DELETE product in cart  
- [x] DELETE all products in cart  

### Orders 

- [x] POST new order  
- [x] GET existing order  
- [x] GET all orders * *admin-only*  
- [x] PUT edit exisiting order 

### Potential Modules/Middleware

[ ] userIsAdmin  
[ ] identifyUser - for cart and validation of profile edits 
[ ] checkOrderStatus - isShipped? or isNotShipped? - maybe add some date functionality with this
