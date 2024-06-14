const getIdString = (type) => {
    if (type == 'orders') {
        const str = 'number'
    } else if (type == 'products_orders' || type == 'products_carts') {
        const str = 'product_id'
    } else {
        const str = 'id'
    }
    return str;
}

const modelSchema = {
    carts: 'id, username',
    orders: 'number, date_created, status, user_id',
    products: 'id, name, img_path, description',
    users: 'id, username, password, first_name, last_name, street_address, city, state, zip, date_created, isadmin',
    products_carts: 'product_id, cart_id',
    products_orders: 'product_id, order_number'
}

const formatValues = (type, model) => {
    if (!modelSchema.hasOwnProperty(type)) {
        throw new Error('Invalid Type');
    }
    const values = Object.values(model);
    values.forEach((value, index) => {
        if (typeof value == 'string') {
            value = `'${value}'`
            values[index] = value;
        }
    })
    return values.join(', ');
}

module.exports = {
    getIdString,
    modelSchema,
    formatValues
}