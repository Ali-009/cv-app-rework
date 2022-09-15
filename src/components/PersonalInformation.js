import React from 'react'

import '../styles/section-style.css'

class PersonalInformation extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <fieldset>
                <div className="section-container">
                    <legend>Personal Information</legend>
                    <div className="form-control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="tel" id="phone-number"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default PersonalInformation