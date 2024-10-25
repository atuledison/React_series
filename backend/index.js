import express from "express"
const app = express()
const port = process.env.port || 3000

app.get('./', (req, res)=>{

    res.send("My name is Atul Yadav");
})

app.listen(port, ()=>{

    console.log(`example app listening on port ${port}`)
})