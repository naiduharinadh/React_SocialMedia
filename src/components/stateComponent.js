import React,{Component} from "react";

const Statecomponent = (props)=>{
        return (
            <div>
                <h1>Hello hairnadh ....!</h1><br/>{props.children}


            </div>
        );
}


class Harinadh extends  Component{
    constructor(props){
        super(props)
        this.state={
            myname: 0 ,
         }
       
    }

    changeme = ()=>{
        this.setState((prevState)=>({myname: this.state.myname+1}));
    };
        render(props){
            return(<div>
                <h1 className="dummyclass">alkdjdsljasldf .........!</h1><br />
                {this.state.myname}
                <button onClick={this.changeme}>change Name</button>
                </div>
            )
        }
}
export  {Statecomponent,Harinadh};