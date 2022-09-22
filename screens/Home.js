import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
          <Text>Home</Text>
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
