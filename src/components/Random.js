import React, { Component } from 'react'

 class Random extends Component {
    render() {
        let RandomValue = this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min +1))
        return (
            <div>
                Random value between {this.props.min} and {this.props.max} => {RandomValue} 
            </div>
        )
    }
}

export default Random