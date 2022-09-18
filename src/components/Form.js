
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
        const {editEduHistoryRequest, eduHistoryElement, eduHistoryElementIndex} 
        = this.props
        event.preventDefault()
        editEduHistoryRequest(eduHistoryElement, eduHistoryElementIndex)
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
            currentEduEditIndex: 0,
        }

        this.updateMainForm = this.updateMainForm.bind(this)
        this.updateEduHistory = this.updateEduHistory.bind(this)
        this.editEduHistoryRequest = this.editEduHistoryRequest.bind(this)
        this.updateEditSection = this.updateEditSection.bind(this)
        this.editEduHistory = this.editEduHistory.bind(this)
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

    editEduHistoryRequest(elementData, index){
        this.setState({
            historyEdit: true,
            schoolEdit: elementData.school,
            studyTitleEdit: elementData.studyTitle,
            eduStartEdit: elementData.eduStart,
            eduEndEdit: elementData.eduEnd,
            currentEduEditIndex: index,
        })
    }

    editEduHistory(){
        this.setState((state) => {
            //This callback function will use Array.prototype.map
            //to replace the requested item in the eduHistory array without mutating it

            const {schoolEdit, studyTitleEdit, eduStartEdit, eduEndEdit, eduHistory} = state

            const editedEduHistory = eduHistory.map((eduHistoryElement, index) => {
                if(this.state.currentEduEditIndex === index){
                    return {
                        school: schoolEdit,
                        studyTitle: studyTitleEdit,
                        eduStart: eduStartEdit,
                        eduEnd: eduEndEdit,
                    }
                } else {
                    return eduHistoryElement
                }
            })

            return {
                eduHistory: editedEduHistory
            }
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
                    {eduHistory.map((eduHistoryElement, index) => {
                        return (
                            <EduHistoryItem key={uniqid()} 
                            eduHistoryElement={eduHistoryElement}
                            eduHistoryElementIndex={index}
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
            school={schoolEdit} studyTitle={studyTitleEdit} eduStart={eduStartEdit} eduEnd={eduEndEdit} updateForm={this.updateEditSection}
            updateEduHistory={this.editEduHistory}/>
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