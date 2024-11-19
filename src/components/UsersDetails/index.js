import {Component} from 'react'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UsersDetails extends Component {
  state = {
    usersList: [],
    username: '',
    email: '',
    apiStatus: apiStatusConstants.initial,
    editUserId: null,
    error: null,
  }

  componentDidMount() {
    this.getUsersList()
  }

  getUsersList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const options = {method: 'GET'}

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const updatedData = await response.json()
        const fetchedData = updatedData.map(eachUser => ({
          id: eachUser.id,
          name: eachUser.name,
          email: eachUser.email,
        }))
        this.setState({
          apiStatus: apiStatusConstants.success,
          usersList: fetchedData,
        })
      } else {
        throw new Error('Failed to fetch users.')
      }
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        error: error.message,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, email, usersList, editUserId} = this.state

    if (editUserId) {
      // Update user logic
      try {
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${editUserId}`
        const options = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name: username, email}),
        }

        const response = await fetch(apiUrl, options)
        if (!response.ok) throw new Error('Failed to update user.')

        const updatedUser = await response.json()
        const updatedUsersList = usersList.map(user =>
          user.id === editUserId ? {...user, ...updatedUser} : user,
        )

        this.setState({
          usersList: updatedUsersList,
          username: '',
          email: '',
          editUserId: null,
        })
      } catch (error) {
        this.setState({error: error.message})
      }
    } else {
      // Add user logic
      try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name: username, email}),
        }

        const response = await fetch(apiUrl, options)
        if (!response.ok) throw new Error('Failed to add user.')

        const newUser = await response.json()
        this.setState(prevState => ({
          usersList: [...prevState.usersList, newUser],
          username: '',
          email: '',
        }))
      } catch (error) {
        this.setState({error: error.message})
      }
    }
  }

  onEditUser = user => {
    this.setState({
      username: user.name,
      email: user.email,
      editUserId: user.id,
    })
  }

  onDeleteUser = async userId => {
    try {
      const {usersList} = this.state
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
      const options = {method: 'DELETE'}

      const response = await fetch(apiUrl, options)
      if (!response.ok) throw new Error('Failed to delete user.')

      const updatedUsersList = usersList.filter(user => user.id !== userId)
      this.setState({usersList: updatedUsersList})
    } catch (error) {
      this.setState({error: error.message})
    }
  }

  render() {
    const {
      username,
      email,
      usersList,
      apiStatus,
      error,
      editUserId,
    } = this.state

    return (
      <div>
        <h1>User Management</h1>

        {error && <p style={{color: 'red'}}>{error}</p>}

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            value={username}
            placeholder="Name"
            onChange={this.onChangeUsername}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.onChangeEmail}
          />
          <button type="submit">
            {editUserId ? 'Update User' : 'Add User'}
          </button>
        </form>

        {apiStatus === apiStatusConstants.inProgress && <p>Loading...</p>}
        {apiStatus === apiStatusConstants.failure && (
          <p>Failed to fetch users.</p>
        )}

        <ul>
          {usersList.map(user => (
            <li key={user.id}>
              <p className="name">{user.name}</p>
              <p className="name">{user.email}</p>
              <button onClick={() => this.onEditUser(user)} type="button">
                Edit
              </button>
              <button onClick={() => this.onDeleteUser(user.id)} type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UsersDetails
