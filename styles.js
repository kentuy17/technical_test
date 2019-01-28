import { StyleSheet } from 'react-native';

export default styles = {
   container: {
      paddingTop: 100,    
      height: '100%',
      alignItems: 'center',
   },
   logo: {
      marginBottom: 50,
      width: 260,
      height: 180,
   },
   input: {
      margin: 5,
      height: 40,
      width: '90%',
      borderColor: '#7a42f4',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      placeholderStyle: {fontStyle: 'italic'},
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
   },
   validation: {
      color: 'red',
      fontSize: 10,
      fontStyle: 'italic',
   }
}