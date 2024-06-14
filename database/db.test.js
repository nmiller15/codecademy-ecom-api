const assert = require('assert');
const db = require('./db');
const query = require('./index.js');
const util = require('./util.js');
const {
    cartModel,
    orderModel,
    userModel,
    productModel,
    productCartModel,
    productOrderModel
} = require('./mockModels.js');

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

            const actual = util.getIdString(type);

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
            const expected = "'999', 'Test Product', '/test/path', 'This is a description of a product.'"
            
            const actual = util.formatValues(type, model);

            assert.equal(expected, actual);
        })
    })
})

describe('db', () => {
    
    describe('addInstance', () => {
        
        it('adds a user to the database', async () => {
            const type = 'users';
            const model = userModel

            const response = await db.addInstance(type, model);

            assert.ok(response);
        })

        it('adds a product to the database', async () => {
            const type = 'products';
            const model = productModel
            
            const response = await db.addInstance(type, model);

            assert.ok(response);
        })

        it('adds a cart to the database', async () => {
            const type = 'carts';
            const model = cartModel
            
            const response = await db.addInstance(type, model);

            assert.ok(response);
        })

        it('adds an order to the databse', async () => {
            const type = 'orders';
            const model = orderModel;

            const response = await db.addInstance(type, model);

            assert.ok(response);
        })

        it('adds a products_carts row', async () => {
            const type = 'products_carts'
            const model = productCartModel;

            const response = await db.addInstance(type, model);

            assert.ok(response);
        })

        it('adds a products_orders row', async () => {
            const type = 'products_orders'
            const model = productOrderModel;

            const response = await db.addInstance(type, model);

            assert.ok(response);
        })
    })

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

    describe('getInstanceById', async () => {
        it('retrieves a user from the database with a matching id', async () => {
            const type = 'users'
            const id = 999
            const expected = 999

            const response = await db.getInstanceById(type, id);
            const actual = response.id;
            
            assert.equal(expected, actual);
        })

    })

    describe('removeInstanceById', async () => {
        it('removes a product_order with two matching ids', async () => {
            const type = 'products_orders'
            const id = '999'
            const secondaryId = 999
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id, secondaryId);
            const actual = response.command;

            assert.equal(expected, actual);
        })
        it('removes a product_cart with two matching ids', async () => {
            const type = 'products_carts'
            const id = '999'
            const secondaryId = 999
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id, secondaryId);
            const actual = response.command;

            assert.equal(expected, actual);
        })
        it('removes an order with a matching id', async () => {
            const type = 'orders'
            const id = 999
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id);
            const actual = response.command;

            assert.equal(expected, actual);
        })
        it('removes a product with a matching id', async () => {
            const type = 'products'
            const id = '999'
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id);
            const actual = response.command;

            assert.equal(expected, actual);
        })
        it('removes a cart with a matching id', async () => {
            const type = 'carts'
            const id = 999
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id);
            const actual = response.command;

            assert.equal(expected, actual);
        })
        it('removes a user with a matching id', async () => {
            const type = 'users'
            const id = 999
            const expected = 'DELETE'

            const response = await db.removeInstanceById(type, id);
            const actual = response.command;

            assert.equal(expected, actual);
        })
    })

})