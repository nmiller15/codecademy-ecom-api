const formatDate = require('date-format');

const date = new Date(2000, 1, 1, 1, 1, 1);
const formattedDate = formatDate(date);

const cartModel = {
    id: 999,
    username: 'test_user_9999'
}

const orderModel = {
    number: 999,
    date_created: formattedDate,
    status: 'Pending',
    user_id: 999
}

const userModel = {
    id: 999,
    username: 'test_user_9999',
    password: "ffffffffff",
    first_name: 'test',
    last_name: 'user',
    street_address: '123 Anystreet',
    city: 'Anytown',
    state: 'USA',
    zip: 99999,
    date_created: formattedDate,
    isAdmin: true
}

const productModel = {
    id: '999',
    name: 'Test Product',
    img_path: '/test/path',
    description: 'This is a description of a product.'
}

const productCartModel = {
    product_id: '999',
    cart_id: 999
}

const productOrderModel = {
    product_id: '999',
    order_id: 999
}

module.exports = {
    cartModel,
    orderModel,
    userModel,
    productModel,
    productCartModel,
    productOrderModel
}