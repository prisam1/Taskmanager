import React, {useState, useMemo}from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  const [sortBy, setSortBy] = useState('')
  
  const sortedTasks = useMemo(() => {
    let sortedTasks = [...tasks]
    if (sortBy === 'completed') {
      sortedTasks = sortedTasks.filter(task => task.completed)
    } else if (sortBy === 'incomplete') {
      sortedTasks = sortedTasks.filter(task => !task.completed)
    }
    sortedTasks.sort((a, b) => a.title.localeCompare(b.title))
    return sortedTasks
  }, [tasks, sortBy])
 
  return (
    <div className="task-list">
      <div className="sort-filter-buttons">
        <button onClick={() => setSortBy('completed')} className="filter-buttons">Completed</button>
        <button onClick={() => setSortBy('incomplete')} className="filter-buttons" >Incomplete</button>
        <button onClick={() => setSortBy('title')} className="filter-buttons">Sort by Title</button>
        <button onClick={() => setSortBy('')}className="filter-buttons">Clear Filters</button>
      </div>
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}
export default TaskList
