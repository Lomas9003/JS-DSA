import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName={"BatMan"}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"SuperMan"}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"Joker"}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Parent
