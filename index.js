const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ramie8:tkfkdgo1!@cluster0.ygevk.mongodb.net/todoapp?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (요청,응답) => 응답.send("앙녕"));
app.listen(port,() => console.log(`listening ${port}!`))