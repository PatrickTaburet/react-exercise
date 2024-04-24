import React, { Component } from 'react'
import Profile from './components/exercice10/Profile'
import { UserContext } from './components/exercice10/MyContext'
import { ColorContext } from './components/exercice10/MyContext'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: "lisa",
        age : 8
      }
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={"yellow"}>
          <Profile/>
        </ColorContext.Provider>
      </UserContext.Provider>
    )
  }
}

export default App