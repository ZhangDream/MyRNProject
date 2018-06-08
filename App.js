/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Welcome to learn React Native</Text>
        <Text style={styles.welcome}>Hello {this.props.name}</Text>
        <TextInput style={styles.inputTexts} placeholder="please input "
                   onChangeText={(text) => this.setState({ text })}></TextInput>
        <Text>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 630,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#00ff00',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputTexts: {
    textAlign: 'center',
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
