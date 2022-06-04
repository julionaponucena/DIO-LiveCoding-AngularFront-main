const express = require("express")
const app = express()

const books = [
    {
        id:1,
        name:'book 1',
        price: 15,
        quantity:5,
        category:'action',
        img:'img1'
    },
    {
        id:2,
        name:'book 2',
        price:50,
        quantity:1,
        category:'action',
        img:'img2'
    },
    {
        id:3,
        name:'book 3',
        price:20,
        quantity:2,
        category:'action',
        img:'img3'
    },
    {
        id:4,
        name:'book 4',
        price:10,
        quantity:1,
        category:'action',
        img:'img1'
    },
    {
        id:5,
        name:'book 3',
        price:15,
        quantity:5,
        category:'action',
        img:'img2'
    }
]

app.get('/api/bookstore',(req,res)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(books)
})

app.listen(44382,()=>console.info('servidor rodando'))