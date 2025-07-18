import React from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTask] = React.useState('')
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
    .then(result => console.log(result))
    .catch(err => console.error(err))
  }
  return (
    <div className='create'>
      <input className='create_form ' type="text" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)} />
      <button className=' button' type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create