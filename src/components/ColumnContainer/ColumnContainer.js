import "./ColumnContainer.css"
import CellColumn from '../CellColumn/CellColumn'


export default function ColumnContainer(props) {

  const {puzzleState,updatePuzzlecontent,isPuzzleSolved} = props

  return (
    <div className='container'>
      {puzzleState.map((currentColumn,i) => {
        return <CellColumn updatePuzzle={updatePuzzlecontent} x={i} 
        key={Math.random()} cells={currentColumn}
        isPuzzleSolved={isPuzzleSolved}/>
      })}
    </div>
  )
}
