import React, {Component} from "react";
import Child from "./Child";
class Parent extends Component{
    constructor(){
        super();
        //const  parentmethod  = this.parentmethod.bind();
    }
    parentmethod(parameters){
        alert(`hello harinadh ${parameters}`)
    }
    render(){
        return (
            <div>
                <Child alertFunction={this.parentmethod} />
                <button onClick={this.parentmethod}>Parent Button: clickme </button>
            </div>
        )
    }
}
export default Parent;