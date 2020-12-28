import React from "react";


class SignUp extends React.Component {
    constructor(){
        super()
    
        this.state={
        name:"",
        lastname:"",
        email:"",
        password:"",
        passworbis:"",
    }

        this.updateEmailField = this.updateEmailField.bind(this);
        this.updateNameField = this.updateNameField.bind(this);
        this.updateLastNameField = this.updateLastNameField.bind(this);
        this.updatePasswordField = this.updatePasswordField.bind(this);
        this.updatePasswordBisField = this.updatePasswordBisField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}   
    updateEmailField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateNameField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateLastNameField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updatePasswordField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updatePasswordBisField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
            <h1>Sign Up</h1>
            <input type="text" name="name" value={this.state.name} onChange={this.updateNameField}/>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateLastNameField}/>
            <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
            <input type="password" name="password" value={this.state.password} onChange={this.updatePasswordField}/>
            <input type="password" name="passwordbis" value={this.state.passwordbis} onChange={this.updatePasswordBisField}/>
            <input type="submit" value="Soumettre" />
            </div>
            </form>
        ) 
    }
}
export default SignUp;