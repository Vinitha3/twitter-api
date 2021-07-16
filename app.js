const express = require('express');
const app = express();

const Twitter = require("./api/helpers/twitter");
const twitter = new Twitter();

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  next();
})

app.get("/",(req,res) => {
  res.status(200).send("all is well")
})

app.get("/tweets",(req,res) => {
  const query = req.query.q;
  const count = req.query.count;
  twitter.get(query,count).then((response) => {
    res.status(200).send(response.data);
  }).catch ((e) => {
    res.status(400).send(e);
  })
});

app.listen(process.env.PORT || 5000 , () => {
    console.log("app listening on port:5000")
})
