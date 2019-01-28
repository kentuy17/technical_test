import React, { Component } from 'react';
import { View, Image, CheckBox, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styles from './styles'

export default class techTest extends Component {
  constructor(props){
    super(props);
      this.state = {
        TextEmail: '',
        TextPassword: '',
        ErrorStatus1: 0,
        ErrorStatus2: 0,
      }
  }
  handelEmail = (TextEmail) =>{
    this.setState({
      TextEmail: TextEmail
    });
  }
  handelPassword = (TextPassword) =>{
    this.setState({
      TextPassword: TextPassword
    });
  }

  buttonClickListener = () =>{
      const { TextEmail }  = this.state ;
      if (TextEmail == ""){
        this.setState({ErrorStatus1 : 1}) ;
      }else{
        this.setState({ErrorStatus1 : 0}) ;
          if (TextEmail.length < 6 || TextEmail.length > 10){
            this.setState({ErrorStatus1 : 2}) ;
           }else{
            this.setState({ErrorStatus1 : 0}) ;
          }
      }
      const { TextPassword } = this.state ;
      if (TextPassword == ""){
        this.setState({ErrorStatus2 : 1}) ;
      }else{
        this.setState({ErrorStatus2 : 0}) ;
          if (TextPassword.length < 6 || TextPassword.length > 10){
            this.setState({ErrorStatus2 : 2}) ;
          }else{
            this.setState({ErrorStatus2 : 0}) ;
          }
      }
      //this.setState({submitted: true})
  }

   render() {
      return (
         <View style = {styles.container}>
            <Image style = {styles.logo}
            source={require('./Logo.png')} />

            <Text>Email</Text>

            <TextInput style = {styles.input}
               placeholder = "Input email address"
               autoCapitalize = "none"
               //onChangeText={this.handelEmail}
               onChangeText={this.handelEmail}
               />


             { this.state.ErrorStatus1 == 1? (
             <Text style = {styles.validation}>
                Input must be filled
             </Text>
             ) : this.state.ErrorStatus1 == 2? (
             <Text style = {styles.validation}>
                not correct format for email address
             </Text>  
             ): null
              }

            <Text>Password</Text>

            <TextInput style = {styles.input}
               placeholder = "Input password"
               autoCapitalize = "none"
               secureTextEntry = {true}
               onChangeText={this.handelPassword} />

            { this.state.ErrorStatus2 == 1? (
             <Text style = {styles.validation}>
                Input must be filled
             </Text> ) : this.state.ErrorStatus2 == 2? (
             <Text style = {styles.validation}>
                Password length must be 6-12 characters
             </Text>

             ): null //no error
              }

            <CheckBox style = {styles.checkbox} />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.buttonClickListener}>
               <Text style = {styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
         </View>
      );
   }
}