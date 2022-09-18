import React from 'react'

import '../styles/section-style.css'

class PersonalInformationInput extends React.Component{
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
                    <legend>Personal Information</legend>
                    <div className="form-control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName"
                        onChange={this.handleChange}
                        value={this.props.firstName}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName"
                        onChange={this.handleChange}
                        value={this.props.lastName}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                        onChange={this.handleChange}
                        value={this.props.email}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="tel" id="phone-number" name="phoneNumber"
                        onChange={this.handleChange}
                        value={this.props.phoneNumber}/>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default PersonalInformationInput