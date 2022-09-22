import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Signup</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#009fff',
          }}>
          <Text>go to Login</Text>
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
