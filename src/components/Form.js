
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
            eduStart: '',
            eduEnd: '',
            eduHistory: []
        }

        this.updateForm = this.updateForm.bind(this)
        this.updateEduHistory = this.updateEduHistory.bind(this)
    }

    updateForm(key, value){
        this.setState({
            [key] : value
        })
    }

    updateEduHistory(){
        this.setState((state) => {
            const {school, studyTitle, eduStart, eduEnd, eduHistory} = state
            const updatedEduHistory = state.eduHistory.concat({
                school,
                studyTitle,
                eduStart,
                eduEnd
            })
            return {
                eduHistory: updatedEduHistory
            }
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
                eduStart={eduStart} eduEnd={eduEnd}
                updateForm={this.updateForm}
                updateEduHistory={this.updateEduHistory}/>
            </form>
        )
    }
}

export default Form