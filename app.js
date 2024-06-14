const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const query = require('./database/index');
const db = require('./database/db');


const accountsRouter = require('./routers/accountsRouter');
const usersRouter = require('./routers/usersRouter');
const cartRouter = require('./routers/cartRouter');
const productsRouter = require('./routers/productsRouter');
const ordersRouter = require('./routers/ordersRouter');

app.use('/accounts', accountsRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);


app.get('/test', async (req, res) => {
    const date = new Date();
    const database = await query('SELECT NOW()');
    const addUserInstance = await db.addInstance('users', {
        id: 999,
        username: 'test_user_9999',
        password: "ffffffffff",
        first_name: 'test',
        last_name: 'user',
        street_address: '123 Anystreet',
        city: 'Anytown',
        state: 'USA',
        zip: 99999,
        date_created: date.toString(),
        isAdmin: true
    })
    const allInstances = await db.getAllInstances('products');
    res.json({
        test: 'test ok',
        databaseTime: `${database.rows[0].now}`,
        dbTestAllInstances: `${allInstances.rows}`,
        dbTestInstanceById: `${addUserInstance.rows}`
    });
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});