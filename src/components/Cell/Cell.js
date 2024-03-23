import React from 'react'
import "./Cell.css"

export default function Cell(props) {

  const {x,y,color} = props

  const cellClickHandler = (e) => {
    props.updatePuzzle(x,y,color)
  }

    
  return (
    <div className={`cell ${color}`} onClick={cellClickHandler}></div>
  )
}
