import react,{Component} from "react";

function Child(props){
    const parameters = "child classparameters"
    return (
        <div>
            <button onClick={()=>props.alertFunction(parameters)}>button From child</button>
            
        </div>
    )
}


export default Child;
