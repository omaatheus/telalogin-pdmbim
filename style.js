import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerForm: {
      backgroundColor: 'gray',
      borderTopLeftRadius: 25, 
      borderTopRightRadius: 25, 
      paddingStart: '5%',
      paddingEnd: '5%',
      borderBottomLeftRadius: '25%',
      borderBottomRightRadius: '25%',
      borderBottomWidth: 1.5,
      width: 370,
      height: 850,
      marginRight: 25,
  },
  loginto:{
    marginTop: 170,
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 29,
    color: '#fff'
  
  },
  loginto2:{
  marginLeft: 35,
  fontWeight: 'bold',
  fontSize: 29,
  color: '#fff'
  },
  divPai:{
    justifyContent: 'space-between',
    width: '80%',
  },
  formInput:{
    marginTop: 50,
    marginLeft: 34,
  },
  formInputSenha: {
    marginTop: 30,
    textAlign: 'left',
    marginLeft: 34,
  
  },
  forgot: {
    textAlign: 'right',
    marginRight: -17,
    marginTop: -9,
    fontSize: 12,
    color: '#fff'
  },
  div: {
    width: '100%',
    height: 1,
    marginLeft: 35,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  div2: {
    width: '80%',
    height: 1,
    marginLeft: 35,
    backgroundColor: '#fff',
    marginTop: 18,
  },
  visto: {
    marginTop: 10,
    marginLeft: 32,
  },
  formButton: {
      backgroundColor: '#000',
      width: '80%',
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: 35,
      marginTop: 10,
  },
  textButton: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center',
      
  },
  formButton2: {
      backgroundColor: '#FFF',
      width: '80%',
      margin: 10,
      padding: 10,
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: 35,
      marginTop: 10,
  },
  textButton2: {
      color: '#000',
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center',
      
  },
  subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 210,
  },
  subButton: {
      padding: 10,
      marginLeft: 25,
  },
  subTextButton: {
      color: 'white'
  },
  subButton2: {
      padding: 10,
      marginLeft: -15,
  },
  subTextButton2: {
      color: 'white',
      textDecorationLine: 'underline'
  },
  blur: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  }
  });
  