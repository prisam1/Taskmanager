import React, { useState, useEffect } from 'react'

const AddTaskModal = ({ isOpen, closeModal, addTask, initialTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title)
      setDescription(initialTask.description || '')
    }
  }, [initialTask])

  const handleSubmit = e => {
    e.preventDefault()
    const newTask = { title, description, completed: false }

    if (initialTask) {
      newTask.id = initialTask.id
    }

    addTask(newTask)
    setTitle('')
    setDescription('')
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className='headtask'
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className='taskdesc'
        />
        <button type="submit">Save</button>
        <button type="button" className="cancel-button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddTaskModal
