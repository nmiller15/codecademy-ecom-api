const query = require('./index');
const {
    getIdString,
    modelSchema,
    formatValues
} = require('./util')

const getAllInstances = async (type) => {
    const text = `SELECT * FROM ${type}`
    const response = await query(text);
    return response;
}
    
const getInstanceById = async (type, id) => {
    const text = `SELECT * FROM ${type} WHERE ${getIdString(type)} = ${id}`
    const response = await query(text)
    const instance = response.rows[0];
    if (!instance) return {};
    return instance;
}

const addInstance = async (type, model) => {
    const schema = modelSchema[type];
    const values = formatValues(type, model);
    const text = `INSERT INTO ${type} (${schema}) VALUES (${values})`;
    return response = await query(text);
}

const updateInstanceById = async (type, id, model) => {
    const schemaArr = modelSchema[type].split(', ');
    let setArr = []
    schemaArr.forEach((col, index) => {
        let value = model.value
        if (index == schemaArr.length - 1) {
            setArr.push(`${col} = ${value}`)
        } else {
            setArr.push(`${col} = ${value}, `)
        }
    })
    const setString = setArr.join();
    const text = `UPDATE table_name SET ${setString} WHERE ${getIdString(type)} = ${id}`
    const response = await query(text);
    return response;
}

const removeInstanceById = async (type, id, secondaryId) => {
    let text;
    if (type == 'products_orders') {
        text = `DELETE FROM ${type} WHERE product_id = '${id}' AND order_number = ${secondaryId}`
    } else if (type == 'products_carts') {
        text = `DELETE FROM ${type} WHERE product_id = '${id}' AND cart_id = ${secondaryId}`
    } else if (type == 'products') {
        text = `DELETE FROM ${type} WHERE id = '${id}'`
    } else {
        text = `DELETE FROM ${type} WHERE ${getIdString(type)} = ${id}`
    }
    const response = await query(text);
    return response;
}

module.exports = {
    getInstanceById,
    getAllInstances,
    addInstance,
    updateInstanceById,
    removeInstanceById
}