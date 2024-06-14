const express = require('express');
const app = express();
const PORT = '8080';

const accountsRouter = require('./routers/accountsRouter');


app.use('/accounts', accountsRouter);
// app.use('/users', usersRouter);
// app.use('/users/:id/cart', cartRouter);
// app.use('/products', productsRouter);
// app.use('/orders', ordersRouter);


app.get('/test', (req, res) => {
    res.json('test ok');
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});