import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur'
import CheckBox from 'react-native-check-box';
import { useState } from 'react';
import { styles } from './style.js'


export default function App() {
  const [isChecked, setIsChecked] = useState(
    {
      dancing: false,
    });
  return (
    <ImageBackground source={require('../my-app/assets/braco.png')} style={styles.container}>
        
        <ImageBackground source={require('../my-app/assets/blur.png')} style={styles.containerForm} >
        <BlurView intensity={90} style={styles.blur}/>
        <Text style={styles.loginto}>Log into</Text>
        <Text style={styles.loginto2}>your account</Text>
        <StatusBar style="auto" />
        <TextInput style={styles.formInput}
  
        placeholder="Username/Email"
        placeholderTextColor={'#fff'}
        autoCapitalize="none"
        autoComplete="email"
        />
        <View style={styles.divPai}>
        <View style={styles.div}></View>
        <TextInput style={styles.formInputSenha}
        placeholder="Password" 
        placeholderTextColor={'#fff'}
        secureTextEntry
        />  
        <Pressable style={styles.forgot}>
        <Text style={styles.forgot}>forgot?</Text>
      </Pressable>

    
      </View>
        <View style={styles.div2}></View>
        <CheckBox style={styles.visto} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} 
        rightText="Remember Me" 
        rightTextStyle={{ fontSize: 13, color: isChecked ? 'white' : 'white',  }}
        checkBoxColor='white'
        checkedCheckBoxColor='white'
        uncheckedCheckBoxColor='white'

        
        
        />

        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Log In</Text>
        </Pressable>
        <Pressable style={styles.formButton2}>
          <Text style={styles.textButton2}>f    Log In with Facebook</Text>
        </Pressable>
        <View style={styles.subContainer}>

        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Don't have an account?</Text>
        </Pressable>
  
        <Pressable style={styles.subButton2}>
          <Text style={styles.subTextButton2}>Sign Up</Text>

        </Pressable>
        </View>
        
        </ImageBackground>
      </ImageBackground>
  );
}

