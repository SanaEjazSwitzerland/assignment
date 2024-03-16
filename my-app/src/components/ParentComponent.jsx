import React from 'react'
import FunctionalComponent from './FunctionalComponent'

const ParentComponent = ({}) => {
  const renderProp = (count) =>{
    return <FunctionalComponent count ={count}/>
  }
  return(
    <div>renderProp{5} </div>
  )
}

export default ParentComponent