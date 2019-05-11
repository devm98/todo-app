import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import ListSidebar from '../components/ListSidebar'

class TodoApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ListSidebar />
          <div style={{ marginLeft: 250 }}>THE CONTENT!</div>
        </div>
      </Router>
    )
  }
}

export default TodoApp
