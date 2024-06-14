const assert = require('assert');
const db = require('./db');
const query = require('./index.js');
const util = require('./util.js');
const formatDate = require('date-format');

const date = new Date(2000, 1, 1, 1, 1, 1);
const formattedDate = formatDate(date);
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
    id: 999,
    name: 'Test Product',
    img_path: '/test/path',
    description: 'This is a description of a product.'
}

describe('query', () => {
    it('connects to the database', async () => {
        const databaseConnected = await query('SELECT NOW()');
        assert.ok(databaseConnected);
    })
})

describe('util', () => {
    describe('getIdString', () => {

        it('returns number if given an orders type', () => {
            const type = 'orders';
            const expected = 'number';

            const actual = db.getIdString(type);

            assert.ok(expected == actual);
        })

        it('returns id if given any other type', () => {
            const type1 = 'another value';
            const type2 = 'cart';
            const expected = 'id';

            const actual1 = util.getIdString(type1)
            const actual2 = util.getIdString(type2)

            assert.equal(expected, actual1);
            assert.equal(expected, actual2);
        })

    })

    describe('formatValues', () => {

        it('formats a users type into valid SQL values', () => {
            const type = 'users'
            const model = userModel;
            const expected = "999, 'test_user_9999', 'ffffffffff', 'test', 'user', '123 Anystreet', 'Anytown', 'USA', 99999, '2000-02-01T01:01:01.000', true"

            const actual = util.formatValues(type, model);

            assert.equal(expected, actual);
        })

        it('formats a products type into valid SQL values', () => {
            const type = 'products'
            const model = productModel;
            const expected = "999, 'Test Product', '/test/path', 'This is a description of a product.'"
            
            const actual = util.formatValues(type, model);

            assert.equal(expected, actual);
        })
    })
})

describe('db', () => {
    
    describe('getAllInstances', () => {
        it('can access the rows on the users table', async () => {
            const type = 'users';

            const response = await db.getAllInstances(type);

            assert.ok(response.rows);
        })
        it('can access the rows on the products table', async () => {
            const type = 'products';

            const response = await db.getAllInstances(type);

            assert.ok(response.rows)
        })
    })

    describe('getInstanceById', () => {
        it('retrieves a user from the database with a matching id', () => {
            

        })

    })

    describe('addInstance', () => {
        
        it('adds a user to the database', async () => {
            const type = 'users';
            const model = userModel

            const response = await db.addInstance(type, model);

            assert.ok(response);
        })
    })
})