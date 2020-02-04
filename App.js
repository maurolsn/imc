import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004D40"
  },
  contener2: {
    flexDirection: "row",
    backgroundColor: "#80CBC4",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    marginTop: 24,
  },
  txtInput: {
    height: 80,
    width: '50%',
    textAlign: 'center',
    fontSize: 50,
    marginTop: 24,    
  },
  txtBtn:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    padding: 30,
  }

})

export default class Imc extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contener2}>
          <TextInput 
            style={styles.txtInput}
            placeholder='Peso'
            keyboardType='numeric'
          />

          <TextInput
            style={styles.txtInput}
            placeholder='Altura'
            keyboardType='numeric'
          />
        </View>

        <View>

        </View>
          <TouchableOpacity >
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>
      </View>
    );
  }
}