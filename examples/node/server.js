const express = require('express');
const app = express();
const port = 4000;

const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/identify/user', userRoutes);
app.use('/identify/account', accountRoutes);
app.use('/track/event', eventRoutes);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});