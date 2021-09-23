import React from "react";
import './sign-in-component.style.scss';
import FormInput from "../form-input/form-input-component";
import CustomeButton from "../custome-button/custome-button-component";
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',

        }
    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({email:'' , password: ''});
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]:value});
    }
    render(){
        return(<div className="sign-in">
            <h1>I have already hav an acoount </h1>
            <span>Sing in with your email and password</span>
            <form onSubmit={this.handelSubmit}>
                <FormInput name="email" lable="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                <FormInput name="password" lable="password" type="password" value={this.state.password}  handleChange={this.handleChange}required/>
                <CustomeButton type="submit">Sing In</CustomeButton>
            </form>
        </div>);
    }
}
export default SignIn;