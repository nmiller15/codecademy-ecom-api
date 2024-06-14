const query = require('./index');


const getInstanceById = (type, id) => {
    console.log('on');
}
    
const getAllInstances = (type, id) => {
    console.log('on');    
}
    
const addInstance = (type, model) => {
    console.log('on');
}

const updateInstanceById = (type, id, model) => {
    console.log('on');
}

const removeInstanceById = (type, id) => {
    console.log('on');
}

const removeAllInstances = (type) => {
    console.log('on');
}

module.exports = {
    getInstanceById,
    getAllInstances,
    addInstance,
    updateInstanceById,
    removeInstanceById,
    removeAllInstances
}