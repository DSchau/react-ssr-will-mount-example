import React from 'react'

export class App extends React.Component {
  componentWillMount() {
    console.log('I was invoked');
  }

  render() {
    return <h1>Hello World</h1>
  }
}
