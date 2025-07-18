import React, { useState } from 'react'
import Create from './Create'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='home'>
      <h1 className='todo-list'>Todo-List</h1>
      <Create/>
      {
        todos.length === 0 ? 
        <div className='output'><h2>No record</h2></div>
        :
        todos.map(todo =>(

          
          <div className='task'>
              <div className='checkbox'>
            <BsCircleFill className='icon' />
            <p>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className='icon'/> </span>
            </div>
          
          </div>
        ))
      }
    </div>
  )
}

export default Home