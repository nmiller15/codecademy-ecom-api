# Database Overview and Tasks

This is not an exhaustive document of the complete database schema, but rather a rough idea of the tables that I will need to create the API.

## [Project Requirements](./API%20Overview%20and%20Tasks.md)

## Tables

### Database Name: `shop`

- [ ] users  
- [ ] products    
- [ ] carts  
- [ ] orders  

## Potential Columns

### `users` 

- [x] first_name  
- [x] last_name  
- [x] username [pk] 
- [x] password
- [x] isAdmin

### `products`  

- [x] name
- [x] img_path
- [x] id [pk]
- [x] description

### `carts`

- [x] id [pk]
- [x] username [fk]  

### `orders`

- [x] id
- [x] status

## Relationships

### `users`

- [x] one user, one cart
- [x] one user, many orders

### `products`

- [x] many products, many carts
- [x] many products, many orders

### `carts`

- [x] one cart, one user
- [x] many carts, many products

### `orders`

- [x] many orders, one user
- [x] many orders, many products

### Necessecary Tables
- [x] `products_carts`
- [x] `products_orders` 
