const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const query = require('./database/index');


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
    const database = await query('SELECT NOW()');
    res.json(`test ok - ${database.rows[0].now}`);
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});