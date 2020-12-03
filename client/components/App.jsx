import React from 'react'
import Repos from './Repos'

class App extends React.Component {
  render () {
    return (
      <>
        <header>
          <h1>Main Page Here</h1>
        </header>
        <section>
          <Repos/>
        </section>
      </>
    )
  }
}

export default App
