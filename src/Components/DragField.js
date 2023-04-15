import Numbers from "./Numbers"
import Operators from "./Operators"
import Output from "./Output"
import EqualsButton from "./EqualsButton"


function DragField (props){

    return(
        <div className="drag-field" >

        {props.dragState.map((item) => {
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
                        key="equalsButton">
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

export default DragField