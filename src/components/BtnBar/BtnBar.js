import React from 'react'
import "./BtnBar.css"
import DimensionSelectBtn from './DimensionSelectBtn/DimensionSelectBtn'


export default function BtnBar() {
  return (
    <div className='dimensionBtnContainer'>
      <DimensionSelectBtn>4</DimensionSelectBtn>
      <DimensionSelectBtn>6</DimensionSelectBtn>
      <DimensionSelectBtn>8</DimensionSelectBtn>
      <DimensionSelectBtn>10</DimensionSelectBtn>
      <DimensionSelectBtn>12</DimensionSelectBtn>
    </div>
  )
}
