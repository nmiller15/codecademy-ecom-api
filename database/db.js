const { response } = require('express');
const query = require('./index');
const {
    getIdString,
    modelSchema,
    formatValues,
    formatColumns,
    createWhereClause
} = require('./util')

const getAllInstances = async (type) => {
    const text = `SELECT * FROM ${type}`
    const response = await query(text);
    return response;
}
    
const getInstanceById = async (type, id, secondaryId) => {
    let text;
    if (type == 'carts') {
        text = `SELECT * FROM products_carts JOIN products ON products.id = products_carts.product_id JOIN carts ON carts.id = products_carts.cart_id WHERE carts.id = ${id};`
    } else if (type == 'orders') {
        text = `SELECT * FROM products_orders JOIN products ON products.id = products_orders.product_id JOIN orders ON orders.number = products_orders.order_number WHERE orders.number = ${id};`
    } else {
        text = `SELECT * FROM ${type} WHERE ${createWhereClause(type, id, secondaryId)}`
    }
    const response = await query(text)
    if (type == 'carts' || type == 'orders') return response.rows;
    const instance = response.rows[0];
    if (!instance) return {};
    return instance;
}

const getPassword = async (username) => {
    const text = `SELECT password FROM users WHERE username = '${username}';`
    try {
        const response = await query(text);
        if (!response.rows[0].password) return false
        return response.rows[0].password;
    } catch (err) {
        return false;
    }
}

const addInstance = async (type, model) => {
    const schema = formatColumns(type, model);
    const values = formatValues(type, model);
    const text = `INSERT INTO ${type} (${schema}) VALUES (${values})`;
    return await query(text);
}

const updateInstanceById = async (type, id, model) => {
    const schemaArr = modelSchema[type].split(', ');
    let setArr = []
    schemaArr.forEach((col, index) => {
        let value = model[col];
        if (typeof value == 'string') value = `'${value}'`
        if (index == schemaArr.length - 1) {
            setArr.push(`${col} = ${value}`)
        } else {
            setArr.push(`${col} = ${value},`)
        }
    })

    const setString = setArr.join(' ')
    const text = `UPDATE ${type} SET ${setString} WHERE ${createWhereClause(type, id)}`
    const response = await query(text);
    const instance = getInstanceById(type, id);
    if (!instance) return {};
    return instance;
}

const removeInstanceById = async (type, id, secondaryId) => {
    const text = `DELETE FROM ${type} WHERE ${createWhereClause(type, id, secondaryId)}`
    const response = await query(text);
    return response;
}

module.exports = {
    getInstanceById,
    getAllInstances,
    getPassword,
    addInstance,
    updateInstanceById,
    removeInstanceById
}