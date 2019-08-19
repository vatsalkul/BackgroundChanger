import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      randomColor: null
    };
  }

  getRandomColor = () => {
      return(
        "rgb(" +
        Math.floor((Math.random()*256)) + "," +
        Math.floor((Math.random()*256)) + "," +
        Math.floor((Math.random()*256)) + ")"
      )
  }

  
  myButtonPressed = () => {
      this.setState({randomColor: this.getRandomColor() })
    }
  
  
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
        <TouchableOpacity onPress ={this.myButtonPressed}>
        <Text style={[styles.text, {backgroundColor: this.state.randomColor}]}>
        Login
        </Text>
        </TouchableOpacity>
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
    text: {
    color: "#FFFFFF",
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white'

  }
});
