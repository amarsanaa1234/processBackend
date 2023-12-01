const express = require('express');
const app = express();

const questionRoutes = require('./routers/questionRouter');
const titleRouter = require('./routers/mainTitleRouter');
const answerRouter = require('./routers/answerRouter');
const port = 4000;

app.use(express.json());

app.get('/', (err, res)=>{
    res.send('Hello World!');
})

app.use('/title', titleRouter);
app.use('/question', questionRoutes);
app.use('/answer', answerRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});