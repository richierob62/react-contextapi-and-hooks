import React from 'react'
import DogData from './DogProvider'
import CatData from './CatProvider'

export default ({ children }) => (
  <DogData>
    <CatData>{children}</CatData>
  </DogData>
)
