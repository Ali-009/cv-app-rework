
import React from 'react'
import PersonalInformation from './PersonalInformation'
import Education from './Education'

import uniqid from 'uniqid'

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

            const formattedStartDate = new Date(eduStart).toLocaleDateString('en-GB')
            const formattedEndDate = new Date(eduEnd).toLocaleDateString('en-GB')

            const updatedEduHistory = eduHistory.concat({
                school,
                studyTitle,
                eduStart: formattedStartDate,
                eduEnd: formattedEndDate
            })
            return {
                eduHistory: updatedEduHistory
            }
        })
    }

    render() {
        const {firstName, lastName, phoneNumber, email} = this.state
        const {school, studyTitle, eduStart, eduEnd, eduHistory} = this.state

        let eduHistoryContianer = null
        if(eduHistory.length > 0){
            eduHistoryContianer = <div className="education-history-container">
                <h3>Education History</h3>
                <ul>
                    {eduHistory.map((eduHistoryElement) => {
                        const {school, studyTitle, eduStart, eduEnd} = eduHistoryElement
                        return (
                            <li key={uniqid()}>Studied {studyTitle} in {school} from {eduStart} to {eduEnd}</li>
                        )
                    })}
                </ul>
            </div>
        }

        return (
            <form action="#">
                <PersonalInformation firstName={firstName} lastName={lastName}
                phoneNumber={phoneNumber} email={email} 
                updateForm={this.updateForm}/>
                
                {eduHistoryContianer}

                <Education school={school} studyTitle={studyTitle} 
                eduStart={eduStart} eduEnd={eduEnd}
                updateForm={this.updateForm}
                updateEduHistory={this.updateEduHistory}/>
            </form>
        )
    }
}

export default Form