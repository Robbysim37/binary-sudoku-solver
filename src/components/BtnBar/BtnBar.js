import React from 'react'
import "./BtnBar.css"
import DimensionSelectBtn from './DimensionSelectBtn/DimensionSelectBtn'
import { EIGHTxEIGHT, FOURxFOUR, SIXxSIX, TENxTEN, TWELVExTWELVE } from '../../puzzleLogic/globalStrings'


export default function BtnBar(props) {

  const {updateDimensions} = props

  return (
    <div className='dimensionBtnContainer'>
      <DimensionSelectBtn updateDimensions={updateDimensions}>{FOURxFOUR}</DimensionSelectBtn>
      <DimensionSelectBtn updateDimensions={updateDimensions}>{SIXxSIX}</DimensionSelectBtn>
      <DimensionSelectBtn updateDimensions={updateDimensions}>{EIGHTxEIGHT}</DimensionSelectBtn>
      <DimensionSelectBtn updateDimensions={updateDimensions}>{TENxTEN}</DimensionSelectBtn>
      <DimensionSelectBtn updateDimensions={updateDimensions}>{TWELVExTWELVE}</DimensionSelectBtn>
    </div>
  )
}
