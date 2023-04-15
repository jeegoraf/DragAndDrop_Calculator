function Output(props){

    const dragStartHandler = () =>{
        props.setDragged("output")
    }

    const dragEndHandler = () =>{
        props.setDragged("")
    }


    return(<input 
        className="output" 
        key="output"
        value={props.result}
        readOnly={true} 
        style={{textAlign: 'right'}}
        draggable={true}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        >
    </input>)
}

export default Output