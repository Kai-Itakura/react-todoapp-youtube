import React from 'react'

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
    )
  }

  return (
    <div className='todoList'>
      <div className='todos'>
        {taskList.map((task, index) => (
          <div className={`todo ${task.completed ? 'completed' : ''}`} key={index}>
            <div className='todoText'>
              <span>{task.text}</span>
            </div>
            <div className='icons'>
              <button className='fas fa-check' onClick={() => handleCompleted(task.id)}></button>
              <button className='fas fa-trash' onClick={() => handleDelete(task.id)}></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
