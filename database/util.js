const getIdString = (type) => {
    if (type == 'orders') {
        return 'number';
    } else {
        return 'id';
    }
}

const modelSchema = {
    carts: 'id, user_id',
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

const createWhereClause = (type, id, secondaryId) => {
    if (type == 'products_orders') {
        return `product_id = '${id}' AND order_number = ${secondaryId}`
    } else if (type == 'products_carts') {
        return `product_id = '${id}' AND cart_id = ${secondaryId}`
    } else if (type == 'products') {
        return `id = '${id}'`
    } else {
        return `${getIdString(type)} = ${id}`
    }
}

module.exports = {
    getIdString,
    modelSchema,
    formatValues,
    createWhereClause
}