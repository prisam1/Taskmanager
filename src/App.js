import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTaskModal from './components/TaskModal'
import Sidebar from './components/SideBar' 
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from './redux/actions'
import './App.scss'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const toggleComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const addTask = newTask => {
    if (selectedTask) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === selectedTask.id ? { ...newTask, id: task.id } : task
        )
      )
    } else {
      setTasks(prevTasks => [...prevTasks, { ...newTask, id: Date.now() }])
    }
    closeModal()
  }

  const editTask = task => {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  const deleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }

  const closeModal = () => {
    setSelectedTask(null)
    setIsModalOpen(false)
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
       <button className="dark-mode-toggle" onClick={() => dispatch(toggleDarkMode())}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      

      <Sidebar openModal={() => setIsModalOpen(true)} darkMode={darkMode} />
      
      
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
   
      <AddTaskModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addTask={addTask}
        initialTask={selectedTask}
      />
    </div>
  )
}

export default App
