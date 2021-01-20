import React from 'react'
import ReactDOM from 'react-dom'

//set countdown down time in seconds
const SECONDS = 1000

class App extends React.Component{
    constructor(props){
        super(props)
        this.state= { seconds: SECONDS }
    }

    componentDidMount(){
        setInterval(()=>this.tick(),1000)
    }
    tick(){
        if(this.state.seconds > 0)
        this.setState((state)=>({
            seconds : state.seconds - 1
        }))
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <h2>Timer Based on Seconds</h2>
                <h3>
                    { new Date(this.state.seconds * 1000).toISOString().substr(11,8) }
                </h3>
            </div>
        )
    }
} 
ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )