import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Blink text='Nick Gustafson' />
        <Blink text='Nick Gustafson' />
        <Blink text='Nick Gustafson' />
        <Blink text='Nick Gustafson' />
        <Blink text='Nick Gustafson' />
        <Blink text='Nick Gustafson' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
