import React, { Component } from 'react';

class Rating extends Component {
  render() {
    let n = this.props.children
    return (
        <div id="Rating">
            {n >= 0.5 ? '★' : '☆'}
            {n >= 1.5 ? '★' : '☆'}
            {n >= 2.5 ? '★' : '☆'}
            {n >= 3.5 ? '★' : '☆'}
            {n >= 4.5 ? '★' : '☆'}
        </div>
    )
        
    
  }
}

export default Rating;
