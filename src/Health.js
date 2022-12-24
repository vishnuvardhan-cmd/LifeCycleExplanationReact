import React from 'react';

class Health extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:true,
            count:0
        };
    }

    buttonStyle={
        borderWidth:"1px solid black",
        borderRadius:"2px",
        placeItems:"center"

    }

    delHeader=()=>{
        this.setState({show:false})
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    
    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        let myHeader;
        if(this.state.show){
            myHeader=<Child/>;
        };
        return(
            <div>
                <h1>{myHeader}</h1>
                <button style={this.buttonStyle} onClick={this.delHeader}>delHeader</button>
                <span><h3>Count : </h3><p>{this.state.count}</p></span>
                <button style={this.buttonStyle} onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

class Child extends React.Component{

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
            <div>
                Hello World
            </div>
        );
    }
}

export default Health;