import React from 'react'

class IdCard extends React.Component{
    render(){
        const {lastName, firstName, gender, height, birth, picture} = this.props
    return (
        <div id='IdCard'>
            <div>
                <p>Last name: {lastName}</p>
                <p>First name: {firstName}</p>
                <p>Birth: {birth.toDateString()}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height/100}</p>
                <img src = {picture} alt= {firstName} />
            </div>
        </div>
    )
    }
    
}

export default IdCard 