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

- [ ] first_name  
- [ ] last_name  
- [ ] username [pk] 
- [ ] password
- [ ] isAdmin

### `products`  

- [ ] name
- [ ] img_path
- [ ] id [pk]
- [ ] description

### `carts`

- [ ] id [pk]
- [ ] username [fk]
- [ ]  

### `orders`

- [ ] id
- [ ] status

## Relationships

### `users`

- [ ] one user, one cart
- [ ] one user, many orders

### `products`

- [ ] many products, many carts
- [ ] many products, many orders

### `carts`

- [ ] one cart, one user
- [ ] many carts, many products

### `orders`

- [ ] many orders, one user
- [ ] many orders, many products

### Necessecary Tables
- [ ] `products_carts`
- [ ] `products_orders` 
