import express  from 'express'


const app = express();
app.get('/test' ,(req,res) => {
    res.json('ok')
});

app.listen(9000 ,() => {
    console.log('server')
});