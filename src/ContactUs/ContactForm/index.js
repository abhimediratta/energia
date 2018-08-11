import React, { Component } from 'react';

import Button from 'Button';
import InputBox from 'FormElements/InputBox';
import Input from 'FormElements/Input';
import TextArea from 'FormElements/TextArea';
import Label from 'FormElements/Label';
import FormVertical from 'FormElements/FormVertical';
import InputError from 'FormElements/InputError';


export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {},
      formValid: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("hola")
  }

  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => { 
      this.validateField(name, value) 
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Please enter a valid email address';
        break;
      case 'name':
        nameValid = !!value;
        fieldValidationErrors.name = nameValid ? '': 'Please give us your name for communication';
        break;
      case 'message':
        messageValid = !!value;
        fieldValidationErrors.message = messageValid ? '': 'Thanks for trying to contact us, but we need a message from you';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      nameValid,
      messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ 
      formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid
    });
  }

  render () {
    return (
      <FormVertical name="contactForm" onSubmit={this.handleSubmit} validate="novalidate">
        <InputBox>
          <Label>
            Name
          </Label>
          <Input name="name" value={this.state.name} onChange={this.handleChange}  />
          <InputError error={this.state.formErrors.name}></InputError>
        </InputBox>

        <InputBox>
          <Label>
            Email
          </Label>
          <Input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <InputError error={this.state.formErrors.email}></InputError>
        </InputBox>

        <InputBox>
          <Label>
            Message
          </Label>
          <TextArea name="message" rows="10" value={this.state.message} onChange={this.handleChange}>
          </TextArea>
          <InputError error={this.state.formErrors.message}></InputError>
        </InputBox>

        <InputBox>
          <Button size="large" disabled={!this.state.formValid}>
            Send
          </Button>
        </InputBox>
        
      </FormVertical>
    )
  }
}
