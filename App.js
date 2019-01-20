import React, { Component } from 'react';
import { View, Image, CheckBox, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (password) => {
      this.setState({ password: password })
   }
   login = (email, pass) => {
      alert('Login Success')
   }
   render() {
      return (
         <View style = {styles.container}>
            <Image style = {styles.logo}
            source={require('./Logo.png')} />

            <TextInput style = {styles.input}
               placeholder = "Input email address"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               placeholder = "Input password"
               autoCapitalize = "none"
               secureTextEntry = {true}
               onChangeText = {this.handlePassword}/>

            <CheckBox style = {styles.checkbox}

            />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 100,    
      height: '100%',
      //justifyContent: 'center',
      alignItems: 'center'
   },
   logo: {
      marginBottom: 50,
      width: 260,
      height: 180,
   },
   input: {
      margin: 15,
      height: 40,
      width: '90%',
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      //placeholderStyle: {style: 'italic'},
   },
   checkbox: {
      borderColor: 'black',
      color: '#7a42f4',
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width: '90%',
      alignText: 'center',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'arial'
   }
})