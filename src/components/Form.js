
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
        return (
            <li>Studied {studyTitle} in {school} from {eduStart} to {eduEnd} <button onClick={this.handleHistoryEdit}>edit</button></li>
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
            currentEdit: {},
        }

        this.updateForm = this.updateForm.bind(this)
        this.updateEduHistory = this.updateEduHistory.bind(this)
        this.editEduHistoryRequest = this.editEduHistoryRequest.bind(this)
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

    editEduHistoryRequest(elementData){
        this.setState({
            historyEdit: true,
            currentEdit: elementData,
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

        function getTwoDigitString(number){
            if(number < 10){
                return '0' + +number
            } else {
                return +number
            }
        }

        function convertToISODate(enGBFormattedDate){
            const [day, month, year] = enGBFormattedDate.split('/')
            
            return +year + '-' + getTwoDigitString(month) + '-' 
            + getTwoDigitString(day)
        }

        let eduHistoryEditSection = null;
        if(historyEdit){
            const {school, studyTitle, eduStart, eduEnd} = this.state.currentEdit

            eduHistoryEditSection =
            <EducationInput header={'Edit Education History'} 
            functionString={'Edit'}
            school={school} studyTitle={studyTitle} eduStart={convertToISODate(eduStart)} eduEnd={convertToISODate(eduEnd)}/>
        }


        return (
            <form action="#">
                <PersonalInformationInput firstName={firstName} lastName={lastName}
                phoneNumber={phoneNumber} email={email} 
                updateForm={this.updateForm}/>
                
                {eduHistoryContianer}
                {eduHistoryEditSection}
                
                <EducationInput header={'Education'}
                school={school} studyTitle={studyTitle} 
                eduStart={eduStart} eduEnd={eduEnd}
                updateForm={this.updateForm}
                updateEduHistory={this.updateEduHistory}
                functionString={'Add'}/>
            </form>
        )
    }
}

export default Form