const express = require('express')
const app = express()
const mongoose= require('mongoose');
require('dotenv').config()
const port = process.env.PORT || 5000;
//3BLCGMb08qhnUYXa
const cors= require("cors");

//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

const bookRoutes= require('./src/books/book.route')
app.use("/api/books", bookRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('Hello World!')
      });
  }

  main().then(()=> console.log("Mongodb connected")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})