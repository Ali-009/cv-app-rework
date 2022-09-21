import React from 'react'

import '../styles/section-style.css'

class WorkExperienceInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.props.updateForm(name, value)
    }

    render(){
        return(
            <fieldset>
                <div className="section-container">
                    <legend>{this.props.header}</legend>
                    <div className="form-control">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName"
                        onChange={this.handleChange}
                        value={this.props.companyName}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" name="position"
                        onChange={this.handleChange}
                        value={this.props.position}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="workStart">From</label>
                        <input type="date" name="workStart" id="workStart"
                        onChange={this.handleChange}
                        value={this.props.workStart}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="workEnd">To</label>
                        <input type="date" name="workEnd" id="workEnd"
                        onChange={this.handleChange}
                        value={this.props.workEnd}/>
                    </div>
                    <div className="form-control form-control-mainTask">
                        <label htmlFor="mainTask">Main Tasks</label>
                        <input type="text" id="mainTask" name="mainTask"
                        onChange={this.handleChange}
                        value={this.props.mainTask}/>
                        <button className='addMainTask'>Add Task</button>
                    </div>
                    <div className="mainTaskList">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default WorkExperienceInput