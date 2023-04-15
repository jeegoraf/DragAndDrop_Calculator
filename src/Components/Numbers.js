function Numbers (props) {

    const dragStartHandler = () =>{
        props.setDragged("numbers")
    }

    const dragEndHandler = () =>{
        props.setDragged("")
    }


    const dragOverHandler = (event) =>{
        props.setOvered("numbers")
    }

    const dragLeaveHandler = (event) =>{
        props.setOvered("")
    }



    const handleClick = (event) => {

        let input = event.target.innerHTML.replace(/ /g, '')

        if (props.state === "Calculated") {
            props.setState("Input A")

            if (props.A !== "") {
                props.setResult(input)
                props.setA(input)
                return
            }
            props.setResult((props.A + input).replace(/ /g, ''))
            props.setA((props.A + input).replace(/ /g, ''))
        } 

        if (props.state === "Input A"){

            if (props.A.includes(".") & (input === ".")) {
                props.setA("0")
                props.setResult(props.A)
                
                return
            }

            props.setResult((props.A + input).replace(/ /g, ''))
            props.setA((props.A + input).replace(/ /g, ''))
        }    

        else if (props.state === "Input B") {

            if (props.B.includes(".") & (input === '.')) {
                props.setResult("0")
                props.setB("0")
                return
            }
    
            props.setResult((props.B + input).replace(/ /g, ''))
            props.setB((props.B + input).replace(/ /g, ''))
        }

        else if (props.state === "WFO"){
            props.setResult((props.B + input).replace(/ /g, ''))
            props.setB((props.B + input).replace(/ /g, ''))
            props.setState("Input B")
        }


        
    }

    return(
        // flex-container (колонка)
        <div 
        className="numbers" 
        draggable={true} 
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}> 
            
            <div className="numbers-row" >
                <button onClick={handleClick}> 7 </button>
                <button onClick={handleClick}> 8 </button>
                <button onClick={handleClick}> 9 </button>
            </div>

            <div className="numbers-row" >
                <button onClick={handleClick}> 4 </button>
                <button onClick={handleClick}> 5 </button>
                <button onClick={handleClick}> 6 </button>
            </div>

            <div className="numbers-row" >
                <button onClick={handleClick}> 1 </button>
                <button onClick={handleClick}> 2 </button>
                <button onClick={handleClick}> 3 </button>
            </div>

            <div className="numbers-row">
                <button className="zero-button" onClick={handleClick}> 0 </button>
                <button onClick={handleClick}> . </button>
            </div>

        </div>
        
    )

   
    
    
}

export default Numbers