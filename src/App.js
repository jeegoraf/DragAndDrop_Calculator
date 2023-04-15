import { useState } from 'react';
import './App.css';
import DragField from './Components/DragField';
import DropField from './Components/DropField';


function App() {

  const [A, setA] = useState("")
  const [B, setB] = useState("")
  const [result, setResult] = useState("0")
  const [operator, setOperator] = useState("")
  const [state, setState] = useState("Calculated")

  const [dragState, setDragState] = useState([
    "output", "operators", "numbers" ,"equalsButton"
  ])

  const [dropState, setDropState] = useState([])

  // текущий объект перетаскивания
  const [dragged, setDragged] = useState("")

  // текущий объект, над которым висит объект перетаскивания
  const [overed, setOvered] = useState("")


  const calculate = () => {
    const numA = Number(A)
    const numB = Number(B)

    setOperator("")
    setB("")
    setState("Calculated")

    switch (operator){
        case "/":{
            setResult(numA / numB)
            setA(numA / numB)
            
            break
        }

        case "X":{
            setResult(numA * numB)
            setA(numA * numB)
            
            break
        }

        case "+":{
            setResult(numA + numB)
            setA(numA + numB)
            
            break
        }

        case "-":{
            setResult(numA - numB)
            setA(numA - numB)
            
            break
        }
        default:{
            break
        }
    }
}

  return (
      <div className="app-сontainer">
          <DragField
            state={state}
            setState={setState}
            A={A}
            setA={setA}
            B={B}
            result={result}
            setResult={setResult}
            setB={setB}
            operator={operator}
            setOperator={setOperator}
            dragState={dragState}
            setDragState={setDragState}
            calculate={calculate}
            dragged={dragged}
            setDragged={setDragged}
            overed={overed}
            setOvered={setOvered}
          >
          </DragField>

          <DropField
            state={state}
            setState={setState}
            A={A}
            setA={setA}
            B={B}
            result={result}
            setResult={setResult}
            setB={setB}
            operator={operator}
            setOperator={setOperator}
            dragState={dragState}
            setDragState={setDragState}
            dropState={dropState}
            setDropState={setDropState}
            calculate={calculate}
            dragged={dragged}
            setDragged={setDragged}
            overed={overed}
            setOvered={setOvered}
          >
          </DropField>
      </div>      

  );


}

export default App
