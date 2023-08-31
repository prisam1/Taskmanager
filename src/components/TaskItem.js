import React from 'react'

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className='tasks'>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      </div>
      <button onClick={() => toggleComplete(task.id,)}>
       {!task.completed ? 'Mark as Completed' : 'Mark as Incomplete'}</button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItem
