import React from 'react'

const Sidebar = ({ openModal, darkMode }) => {

  
  return (
    <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <button className="sidebar-button">New Task</button>
      <button className="sidebar-button" onClick={openModal}>
        Create Task
      </button>
    </div>
  )
}

export default Sidebar
