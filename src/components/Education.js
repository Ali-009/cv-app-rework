import React from 'react'
import '../styles/section-style.css'

class Education extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <fieldset>
                <div className="section-container">
                    <legend>Education</legend>
                    <div className="form-control">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="study-title">Title of Study</label>
                        <input type="text" id="study-title"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="start-date">From</label>
                        <input type="date" id="start-date"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="end-date">To</label>
                        <input type="date" id="end-date"/>
                    </div>
                    <button className="addEduHistory">Add</button>
                </div>
            </fieldset>
        )
    }
}

export default Education