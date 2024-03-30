import React from 'react'
import "./BtnBar.css"
import DimensionSelectBtn from './DimensionSelectBtn/DimensionSelectBtn'
import { EIGHTxEIGHT, FOURxFOUR, SIXxSIX, TENxTEN, TWELVExTWELVE } from '../../puzzleLogic/globalStrings'


export default function BtnBar(props) {

  const {updateDimensions,setIsPuzzleSolved} = props

  return (
    <div className='dimensionBtnContainer'>
      <DimensionSelectBtn setIsPuzzleSolved={setIsPuzzleSolved} updateDimensions={updateDimensions}>{FOURxFOUR}</DimensionSelectBtn>
      <DimensionSelectBtn setIsPuzzleSolved={setIsPuzzleSolved} updateDimensions={updateDimensions}>{SIXxSIX}</DimensionSelectBtn>
      <DimensionSelectBtn setIsPuzzleSolved={setIsPuzzleSolved} updateDimensions={updateDimensions}>{EIGHTxEIGHT}</DimensionSelectBtn>
      <DimensionSelectBtn setIsPuzzleSolved={setIsPuzzleSolved} updateDimensions={updateDimensions}>{TENxTEN}</DimensionSelectBtn>
      <DimensionSelectBtn setIsPuzzleSolved={setIsPuzzleSolved} updateDimensions={updateDimensions}>{TWELVExTWELVE}</DimensionSelectBtn>
    </div>
  )
}
