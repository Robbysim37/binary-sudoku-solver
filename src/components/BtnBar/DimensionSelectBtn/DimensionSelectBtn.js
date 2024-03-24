import React from 'react'
import "./DimensionSelectBtn.css"

export default function DimensionSelectBtn(props) {

  const {updateDimensions,children} = props

  const dimensionClick = (e) => {
    updateDimensions(parseInt(e.target.innerText))
  }

  return (
    <div className='dimensionBtn' onClick={dimensionClick}>{children}</div>
  )
}
