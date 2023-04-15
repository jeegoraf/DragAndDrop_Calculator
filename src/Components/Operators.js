

function Operators (props){


    const clickHandler = (event) =>{
        event.preventDefault()
        props.setOperator(event.target.innerHTML.replace(/ /g, ''))
        props.setState("Input B") // Waiting For Operand
    }

    const dragStartHandler = (event) =>{
        props.setDragged("operators")
    }

    const dragEndHandler = () =>{
        props.setDragged("")
    }

    return (
        <div 
        className="operators" 
        draggable={true} 
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler} >
            <button onClick={clickHandler}> / </button>
            <button onClick={clickHandler}> X </button>
            <button onClick={clickHandler}> - </button>
            <button onClick={clickHandler}> + </button>
        </div>
    )
}

export default Operators