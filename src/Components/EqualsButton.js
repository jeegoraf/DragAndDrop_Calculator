function EqualsButton(props){


    const dragStartHandler = () =>{
        props.setDragged("equalsButton")
    }

    const dragEndHandler = () =>{
        props.setDragged("")
    }

    return( <div 
            className="equals-button-container" 
            draggable={true} 
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}>
                <button className="equals-button" onClick={props.calculate}> = </button>
            </div> )
}

export default EqualsButton