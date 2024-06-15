const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


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


app.get('/test', (req, res) => {
    res.json('test ok')
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});