
import React from 'react'
import PersonalInformation from './PersonalInformation';

import '../styles/form-style.css'

class Form extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <form action="#">
                <PersonalInformation />
            </form>
        )
    }
}

export default Form