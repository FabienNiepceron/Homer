import React from "react";


class SignUp extends React.Component {
    constructor(){
        super()
    
        this.state={
        email:"Email"
    }

        this.updateEmailField = this.updateEmailField.bind(this);
}   
    updateEmailField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    render () {
        return(
            <div>
            <h1>{this.state.email} </h1>
            <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
            </div>
        ) 
    }
}
export default SignUp;