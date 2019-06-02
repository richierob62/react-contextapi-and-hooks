import React, { useContext } from 'react'
import { DogContext } from '../store/DogProvider'
import { CatContext } from '../store/CatProvider'

const TestComponent = () => {
  // @ts-ignore
  const [dogState, dogActions] = useContext(DogContext)

  // @ts-ignore
  const [catState, catActions] = useContext(CatContext)

  return (
    <div>
      <div>{JSON.stringify(dogState)}</div>
      <button onClick={() => dogActions.feedDog('feeding')}>Feed Dog</button>
      <button onClick={() => dogActions.petDog('petting')}>Pet Dog</button>
      <button onClick={() => dogActions.callDog('calling')}>Call Dog</button>
      <br />
      <br />
      <br />
      <div>{JSON.stringify(catState)}</div>
      <button onClick={() => catActions.feedCat('feeding')}>Feed Cat</button>
      <button onClick={() => catActions.petCat('petting')}>Pet Cat</button>
      <button onClick={() => catActions.callCat('calling')}>Call Cat</button>
    </div>
  )
}

export default TestComponent
