const formatDate = require('date-format');

const dateCreated = () => {
    const date = new Date();
    return formatDate(date);
}

module.exports = dateCreated;