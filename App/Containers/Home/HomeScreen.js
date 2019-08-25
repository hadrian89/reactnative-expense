import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker
} from 'react-native'

import { connect } from 'react-redux'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

class HomeScreen extends React.Component {

  state = {
    username: ''
  }

  render() {
    return (
        <View style={styles.container}>
        {/* <View style={styles.heading}>
          <Image
            source={require('../../../assets/shape.png')}
            style={styles.headingImage}
            resizeMode="contain"
          />
        </View> */}
        <Text style={styles.greeting2}>
          Enter Credit Card Details
        </Text>
        <View style={styles.inputContainer}>
          <Input
            value={this.state.username}
            placeholder="User Name"
            type='username'
            onChangeText={this.onChangeText}
          />
          <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
          <Input
            value={this.state.email}
            placeholder="Email"
            type='email'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type='password'
            onChangeText={this.onChangeText}
          />
          <Input
            placeholder="Phone Number"
            type='phone_number'
            keyboardType='numeric'
            onChangeText={this.onChangeText}
            value={this.state.phone_number}
          />
        </View>
        <Button
          title='Save and Continue'
          //onPress={this.signUp.bind(this)}
          //isLoading={isAuthenticating}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
})


const mapStateToProps = state => ({
  // auth: state.auth
})

const mapDispatchToProps = {
//  dispatchLogout: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)