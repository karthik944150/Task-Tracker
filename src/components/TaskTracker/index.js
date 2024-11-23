import {useState, useEffect} from 'react'
import './index.css'

const TaskTracker = () => {
  const [tasks, setTasks] = useState([])
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  })

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.id !== null) {
      // Update existing task
      setTasks(
        tasks.map(task => (task.id === formData.id ? {...formData} : task)),
      )
    } else {
      // Add new task
      setTasks([...tasks, {...formData, id: Date.now()}])
    }
    setFormData({
      id: null,
      title: '',
      description: '',
      dueDate: '',
      status: 'Pending',
    })
  }

  // Handle editing a task
  const handleEdit = task => {
    setFormData(task)
  }

  // Handle deleting a task
  const handleDelete = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">
          {formData.id ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      <div className="task-list">
        {tasks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.status}</td>
                  <td>
                    <button onClick={() => handleEdit(task)} type="button">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(task.id)} type="button">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tasks added yet.</p>
        )}
      </div>
    </div>
  )
}

export default TaskTracker
