import React from 'react'
import "./BtnBar.css"
import DimensionSelectBtn from './DimensionSelectBtn/DimensionSelectBtn'
import SolveBtn from './SolveBtn/SolveBtn'

export default function BtnBar() {
  return (
  <div className='buttonContainer'>
    <SolveBtn></SolveBtn>
    <div className='DimensionBar'>
      <DimensionSelectBtn>4</DimensionSelectBtn>
      <DimensionSelectBtn>6</DimensionSelectBtn>
      <DimensionSelectBtn>8</DimensionSelectBtn>
      <DimensionSelectBtn>10</DimensionSelectBtn>
      <DimensionSelectBtn>12</DimensionSelectBtn>
    </div>
  </div>
  )
}
