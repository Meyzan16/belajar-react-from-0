import React from 'react'


class ClassComponents extends React.Component 
{
    constructor (props){
        super(props)
    }


    render () {
        return (
            <div>
                <h1>
                testing ClassComponents {this.props.paragraf()}
                </h1>
            </div>
        )

    }
    
}

export default ClassComponents