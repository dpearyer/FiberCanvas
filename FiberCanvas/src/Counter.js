import React from 'react'

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,

        }
    }
    increment = () => {
        this.setState(prevState => ({count:prevState.count+1 }))
    }
    decrement=()=>{
        this.setState(prevState => ({count:prevState.count+1 }))

    }
}

export default Counter