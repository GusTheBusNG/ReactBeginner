import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';


export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 50 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="This is the placeholder text"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
