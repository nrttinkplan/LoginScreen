import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={['rgba(248, 140, 140, 0.61)', '#000000', '#514E4E', 'rgba(0, 0, 0, 0)']}
      locations={[0, 0.9998, 0.9999, 1]}
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <Image
          source={require('./assets/background.png')}
          style={styles.backgroundImg}
        />
        <View style={styles.imgTextContainer}>
          <Text style={styles.sampleText}>SAMPLE</Text>
          <Text style={styles.iotAppText}>IOT APP</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="#fff"
            style={styles.input}
          />
          <Image
            source={require('./assets/email.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#fff"
            secureTextEntry
            style={styles.input}
          />
          <Image
            source={require('./assets/lock.png')}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Don’t have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer: {
    position: 'relative',
  },
  backgroundImg: {
    width: 414,
    height: 480,
    borderWidth: 1,
    borderColor: '#D04A4A',
  },
  imgTextContainer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
  },
  sampleText: {
    fontSize: 30,
    color: '#000',
    marginBottom: 1,
  },
  iotAppText: {
    fontSize: 78,
    fontWeight: 'bold',
    color: '#000',
  },
  formContainer: {
    width: '70%',
    marginTop: 50,
  },
  signInText: {
    fontSize: 17,
    fontFamily: 'Roboto',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FDA43C',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 25,
  },
  icon: {
    width: 17,
    height: 17,
    left: 0,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Roboto',
  },
  loginButton: {
    height: 52,
    backgroundColor: '#FDA43C',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 3,
  },
  footerText: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  createAccountText: {
    color: '#FDA43C',
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
