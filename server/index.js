const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel = require('./Model/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo')

app.get('/get', (req,res)=>{
    todoModel.find()
    .then(result => res.json(result))
    .catch(err = res.json(err))
})

app.post('/add', async (req, res) => {
  const task  = await req.body.task;
  todoModel.create({ task: task })
  .then(result => res.json(result))
.catch(err => res.json(err));

})




app.listen(3001, () => {
  console.log('Server is running on port 3001');
});