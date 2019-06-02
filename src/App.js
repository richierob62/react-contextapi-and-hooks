import React from 'react'
import TestComponent from './components/TestComponent';
import Store from './store/StoreContext'

function App() {
  return (
    <Store>
      <TestComponent />
    </Store>
  )
}

export default App
