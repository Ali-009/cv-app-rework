
import React from 'react'
import PersonalInformationInput from './PersonalInformation'
import EducationInput from './Education'

import uniqid from 'uniqid'

import '../styles/form-style.css'

class EduHistoryItem extends React.Component{
    constructor(props){
        super(props)
        this.handleHistoryEdit = this.handleHistoryEdit.bind(this)
    }

    handleHistoryEdit(event){
        event.preventDefault()
        this.props.editEduHistoryRequest(this.props.eduHistoryElement)
    }

    render() {
        const {studyTitle, school, eduStart, eduEnd} = this.props.eduHistoryElement
        const formattedStartDate = new Date(eduStart).toLocaleDateString('en-GB')
        const formattedEndDate = new Date(eduEnd).toLocaleDateString('en-GB')
        return (
            <li>Studied {studyTitle} in {school} from {formattedStartDate} to {formattedEndDate} <button onClick={this.handleHistoryEdit}>edit</button></li>
        )
    }
}

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
            eduHistory: [],
            historyEdit: false,
            schoolEdit: '',
            studyTitleEdit: '',
            eduStartEdit: '',
            eduEndEdit: '',
        }

        this.updateMainForm = this.updateMainForm.bind(this)
        this.updateEduHistory = this.updateEduHistory.bind(this)
        this.editEduHistoryRequest = this.editEduHistoryRequest.bind(this)
        this.updateEditSection = this.updateEditSection.bind(this)
    }

    updateMainForm(key, value){
        this.setState({
            [key] : value
        })
    }

    //Controlled inputs for edit sections of the form
    //To the section components, both forms of updating the form are identical and are referenced using this.props.updateForm
    //The state member variables for editing are named similar to the ones in MainForm and only have 'Edit' at the end of their key
    //The function below is also reusable for editing experience section
    updateEditSection(key, value){
        this.setState({
            [key + 'Edit']: value,
        })
    }

    updateEduHistory(){
        this.setState((state) => {
            const {school, studyTitle, eduStart, eduEnd, eduHistory} = state

            const updatedEduHistory = eduHistory.concat({
                school,
                studyTitle,
                eduStart: eduStart,
                eduEnd: eduEnd,
            })
            return {
                eduHistory: updatedEduHistory
            }
        })
    }

    editEduHistoryRequest(elementData){
        this.setState({
            historyEdit: true,
            schoolEdit: elementData.school,
            studyTitleEdit: elementData.studyTitle,
            eduStartEdit: elementData.eduStart,
            eduEndEdit: elementData.eduEnd,
        })
    }

    render() {
        const {firstName, lastName, phoneNumber, email} = this.state
        const {school, studyTitle, eduStart, eduEnd, eduHistory, historyEdit} = this.state

        let eduHistoryContianer = null
        if(eduHistory.length > 0){
            eduHistoryContianer = <div className="education-history-container">
                <h3>Education History</h3>
                <ul>
                    {eduHistory.map((eduHistoryElement) => {
                        return (
                            <EduHistoryItem key={uniqid()} 
                            eduHistoryElement={eduHistoryElement}
                            editEduHistoryRequest={this.editEduHistoryRequest}/>
                        )
                    })}
                </ul>
            </div>
        }

        let eduHistoryEditSection = null;
        if(historyEdit){
            const {schoolEdit, studyTitleEdit, eduStartEdit, eduEndEdit} = 
            this.state

            eduHistoryEditSection =
            <EducationInput header={'Edit Education History'} 
            functionString={'Edit'}
            school={schoolEdit} studyTitle={studyTitleEdit} eduStart={eduStartEdit} eduEnd={eduEndEdit} updateForm={this.updateEditSection}/>
        }


        return (
            <form action="#">
                <PersonalInformationInput firstName={firstName} lastName={lastName}
                phoneNumber={phoneNumber} email={email} 
                updateForm={this.updateMainForm}/>
                
                {eduHistoryContianer}
                {eduHistoryEditSection}
                
                <EducationInput header={'Education'}
                school={school} studyTitle={studyTitle} 
                eduStart={eduStart} eduEnd={eduEnd}
                updateForm={this.updateMainForm}
                updateEduHistory={this.updateEduHistory}
                functionString={'Add'}/>
            </form>
        )
    }
}

export default Form