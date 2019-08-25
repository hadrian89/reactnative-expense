import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal
} from 'react-native';

//import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'

// import { authenticate, confirmUserLogin } from '../actions'
// import { fonts, colors } from '../theme'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    username: '',
    password: '',
    accessCode: ''
  }
  
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    //alert( password)
    this.setState({
      username
    })
    this.props.navigation.navigate('Home')
  // this.props.dispatchAuthenticate(username, password)
  }

  confirm() {
    const { authCode } = this.state
    //this.props.dispatchConfirmUserLogin(authCode)
  }
  
  render() {
    // const { fontsLoaded } = this.state
    const { 
      signInErrorMessage,
      isAuthenticating,
      signInError,
      showSignInConfirmationModal
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image
            source={require('../../../assets/shape.png')}
            style={styles.headingImage}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.greeting]}>
          Welcome back,
        </Text>
        <Text style={[styles.greeting2]}>
          sign in to continue
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="User Name"
            type='username'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText}
            value={this.state.password}
            secureTextEntry
          />
        </View>

        <Button
          isLoading={isAuthenticating}
          title='Sign In'
          onPress={this.signIn.bind(this)}
        />      
        <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>Error logging in. Please try again.</Text>
        <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>{signInErrorMessage}</Text>
        {
          showSignInConfirmationModal && (
            <Modal>
              <View style={styles.modal}>
                <Input
                  placeholder="Authorization Code"
                  type='authCode'
                  keyboardType='numeric'
                  onChangeText={this.onChangeText}
                  value={this.state.authCode}
                  keyboardType='numeric'
                />
                <Button
                  title='Confirm'
                  onPress={this.confirm.bind(this)}
                  isLoading={isAuthenticating}
                />
              </View>
            </Modal>
          )
        }
      </View>
    );
  }
}

const mapDispatchToProps = {
  dispatchConfirmUserLogin: authCode => confirmUserLogin(authCode),
  dispatchAuthenticate: (username, password) => authenticate(username, password)
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    flexDirection: 'row'
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent'
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  greeting: {
    marginTop: 20,
    fontSize: 24
  },
  greeting2: {
    color: '#666',
    fontSize: 24,
    marginTop: 5
  }
});