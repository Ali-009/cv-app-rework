import React from 'react'
import '../styles/section-style.css'

class Education extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddEduHistory = this.handleAddEduHistory.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.props.updateForm(name, value)
    }

    handleAddEduHistory(event){
        event.preventDefault()
    }

    render(){
        return (
            <fieldset>
                <div className="section-container">
                    <legend>Education</legend>
                    <div className="form-control">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school"
                        onChange={this.handleChange}
                        value={this.props.school}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="study-title">Title of Study</label>
                        <input type="text" id="study-title" name="studyTitle"
                        onChange={this.handleChange}
                        value={this.props.studyTitle}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="eduStart">From</label>
                        <input type="date" id="eduStart" name="eduStart"
                        onChange={this.handleChange}
                        value={this.props.eduStart}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="eduEnd">To</label>
                        <input type="date" id="eduEnd" name="eduEnd"
                        onChange={this.handleChange}
                        value={this.props.eduEnd}/>
                    </div>
                    <button className="addEduHistory" 
                    onClick={this.handleAddEduHistory}>Add</button>
                </div>
            </fieldset>
        )
    }
}

export default Education