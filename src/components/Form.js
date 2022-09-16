
import React from 'react'
import PersonalInformation from './PersonalInformation'
import Education from './Education'

import '../styles/form-style.css'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            school: '',
            studyTitle: '',
            eduStart: new Date(),
            eduEnd: new Date(),
        }

        this.updateForm = this.updateForm.bind(this)
    }

    updateForm(key, value){
        this.setState({
            [key] : value
        })
    }

    render() {
        const {firstName, lastName, phoneNumber, email} = this.state
        const {school, studyTitle, eduStart, eduEnd} = this.state
        return (
            <form action="#">
                <PersonalInformation firstName={firstName} lastName={lastName}
                phoneNumber={phoneNumber} email={email} 
                updateForm={this.updateForm}/>

                <Education school={school} studyTitle={studyTitle} 
                eduStart={eduStart} eduEnd={eduEnd}/>
            </form>
        )
    }
}

export default Form