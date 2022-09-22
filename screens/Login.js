import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
          style={{
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#009fff',
          }}>
          <Text>go to signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          style={{
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#009fff',
            marginVertical: 20,
          }}>
          <Text>go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
