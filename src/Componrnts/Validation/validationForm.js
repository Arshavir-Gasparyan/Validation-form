import { Component } from "react";
import style from "./validationForm.Module.css";
let data = localStorage.getItem("form");
let savedForm = data ? JSON.parse(data) : null;

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: savedForm ? savedForm.nameValue : "",
      surnameValue: savedForm ? savedForm.surnameValue : "",
      emailValue: savedForm ? savedForm.emailValue : "",
      passwordValue: "",
      nameErr: "",
      surnameErr: "",
      emailErr: "",
      passwordErr: "",
      disabled: true,
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  validateForm = (e) => {
    e.preventDefault();
    const { nameValue, surnameValue, emailValue, passwordValue } = this.state;
    let form = {
      nameValue,
      surnameValue,
      emailValue,
      passwordValue,
    };
    localStorage.setItem("form", JSON.stringify(form));
  };

  getNameValue = (e) => {
    let temp = e.target.value;
    if (Number.isNaN(+temp) && temp.length > 2) {
      this.setState({
        nameValue: temp,
        nameErr: "",
        disabled: false,
      });
    } else {
      this.setState({
        nameErr: "Please enter your Name",
        disabled: true,
      });
    }
  };

  getSurnameValue = (e) => {
    let temp = e.target.value;
    if (Number.isNaN(+temp) && temp.length > 2) {
      this.setState({
        surnameValue: temp,
        surnameErr: "",
        disabled: false,
      });
    } else {
      this.setState({
        surnameErr: "Please enter your Surname",
        disabled: true,
      });
    }
  };

  getEmailValue = (e) => {
    let temp = e.target.value;
    if (Number.isNaN(+temp) && temp.length > 2) {
      this.setState({
        emailValue: temp,
        emailErr: "",
        disabled: false,
      });
    } else {
      this.setState({
        emailErr: "Please enter valid email",
        disabled: true,
      });
    }
  };
  getPasswordValue = (e) => {
    let temp = e.target.value;
    if (Number.isNaN(+temp) && temp.length > 5) {
      this.setState({
        passwordValue: temp,
        passwordErr: "",
        disabled: false,
      });
    } else {
      this.setState({
        passwordErr: "Please enter valid password",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className={style.form}>
        <form>
          <label>
            Name
            <input
              onChange={(e) => this.getNameValue(e)}
              type="text"
              placeholder={
                savedForm ? ` ${savedForm.nameValue}` : "enter your name"
              }
            ></input>
            <p>{this.state.nameErr}</p>
          </label>
          <label>
            Surname
            <input
              onChange={(e) => this.getSurnameValue(e)}
              type="text"
              placeholder={
                savedForm ? `${savedForm.surnameValue}` : "enter your surname"
              }
            ></input>
            <p>{this.state.surnameErr}</p>
          </label>
          <label>
            Email
            <input
              onChange={this.getEmailValue}
              type="email"
              placeholder={
                savedForm ? ` ${savedForm.emailValue}` : "enter your email"
              }
            ></input>
            <p>{this.state.emailErr}</p>
          </label>
          <label>
            Password
            <input onChange={this.getPasswordValue} type="password"></input>
            <p>{this.state.passwordErr}</p>
          </label>
          <button
            disabled={this.state.disabled}
            onClick={(e) => this.validateForm(e)}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}
