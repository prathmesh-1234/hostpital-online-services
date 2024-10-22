// const express = require("express");
// const app = express();
// const port = 5001;
// const DbConnetion = require("./controllers/Db/DbConnection");
// DbConnetion();
// app.use(express.json());
// app.use("/api/auth", require("./controllers/auth-controller"));

// app.listen(port, () => {
//     console.log(`server run on :- ${port}`);
// })


const express=require('express');
const app=express();
const port=5000;
const db=require('./controllers/Db/DbConnection');
const cors=require('cors');
const option={
      origin:"http://localhost:3000",
      method:"POST,GET,PUT,DELETE,PATCH,HEAD",
      credential:true,
}
app.use(cors(option));
app.use(express.json());

db();
app.use('/api/auth',require('./controllers/auth-controller'));

app.listen(port,()=>{
      console.log(`server run ${port}`);
})