import Numbers from "./Numbers"
import Operators from "./Operators"
import EqualsButton from "./EqualsButton"
import Output from "./Output"

function DropField(props){

  const dragOverHandler = (event) =>{
    event.preventDefault()
    event.target.style.background = '#ebf5fa'
  }

  const dragLeaveHandler = (event) =>{
    event.preventDefault()
    event.target.style.background = 'white'
  }

  const dropHandler = (event) =>{
    event.preventDefault()

    event.target.style.background = 'white'

    if (props.dropState.includes(props.dragged)) return

    // положение перетаскиваемого элемента  в dragState
    let index = props.dragState.indexOf(props.dragged)

    // создаем копию состояния, чтобы не менять его напрямую
    let dragState = Object.assign([], props.dragState)
  
    // splice меняет содержимое массива и возвращает массив удаленных элементов
    // здесь мы удаляем "output" из "dragState" и меняем состояние
    let curElem = dragState.splice(index, 1) 
    props.setDragState(dragState)

    // а здесь меняем dropState и обнуляем текущий элемент
    props.setDropState([...props.dropState, curElem[0]])
    props.setDragged("")
  }

  return(
    <div 
    className="drop-field" 
    onDragOver={dragOverHandler}
    onDragLeave={dragLeaveHandler}
    onDrop={dropHandler} >

    {props.dropState.map((item) => {
        switch (item){
            case "output": {
                return <Output 
                    result={props.result}
                    dragged={props.dragged}
                    setDragged={props.setDragged}
                    overed={props.overed}
                    setOvered={props.setOvered}
                    key="output">
                </Output>
            }

            case "numbers":{
                return ( 
                    <Numbers
                    A={props.A}
                    setA={props.setA}
                    B={props.B}
                    setB={props.setB}
                    state={props.state}
                    setState={props.setState} 
                    result={props.result}
                    setResult={props.setResult}
                    dragged={props.dragged}
                    setDragged={props.setDragged}
                    overed={props.overed}
                    setOvered={props.setOvered}
                    key="numbers"
                    />
                )
            }

            case "operators":{
                return( 
                    <Operators 
                    setOperator={props.setOperator}
                    setState={props.setState}
                    A={props.A}
                    setA={props.setA}
                    B={props.B}
                    setB={props.setB}
                    state={props.state} 
                    result={props.result}
                    setResult={props.setResult}
                    dragged={props.dragged}
                    setDragged={props.setDragged}
                    overed={props.overed}
                    setOvered={props.setOvered}
                    key="operators"
                    />
                )
                      
            }

            case "equalsButton":{
                return <EqualsButton 
                    calculate={props.calculate}
                    dragged={props.dragged}
                    setDragged={props.setDragged}
                    overed={props.overed}
                    setOvered={props.setOvered}
                    key="equals-button">
                    </EqualsButton>

            }

            default: {
                return null
            }
        }
    })}

    </div>
   
)



}

export default DropField