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
  txtBtn: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    padding: 30,
  },
  txtResulte: {
    alignSelf: 'center',
    color: 'lightgrey',
    fontSize: 65,
    padding: 15,
    fontWeight: 'bold',
  }

})

export default class Imc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mass: 0, 
      heightR: 0, 
      result: 0, 
      textResult: '' };
      this.calculate = this.calculate.bind(this);
  }

  calculate() {
    let imc = this.state.mass / (this.state.heightR * this.state.heightR);

    let s = this.state;
    s.result = imc;
    this.setState(s);

    if (s.result < 16) {
      s.textResult = 'Magreza Grave'
    } else if (s.result >= 16 && s.result < 17) {
      s.textResult = 'Magreza Moderada'
    } else if (s.result >= 17 && s.result < 18.5) {
      s.textResult = 'Magreza Leve'
    } else if (s.result >= 18.5 && s.result < 25) {
      s.textResult = 'Saudável'
    } else if (s.result >= 25 && s.result < 30) {
      s.textResult = 'Sobrepeso'
    } else if (s.result >= 30 && s.result < 35) {
      s.textResult = 'Obesidade Grau I'
    } else if (s.result >= 35 && s.result < 40) {
      s.textResult = 'Obesidade Grau II'
    } else {
      s.textResult = 'Obesidade Grau III (MÓRBIDA)'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contener2}>
          <TextInput
            style={styles.txtInput}
            placeholder='Peso'
            keyboardType='numeric'
            onChangeText={(mass) => { this.setState({ mass }) }}
          />

          <TextInput
            style={styles.txtInput}
            placeholder='Altura'
            keyboardType='numeric'
            onChangeText={(heightR) => { this.setState({ heightR }) }}
          />
        </View>

        <View>
          <TouchableOpacity onPress={this.calculate} >
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.txtResulte}>{this.state.result.toFixed(2)}</Text>
        <Text style={styles.txtResulte, {fontSize: 35}}>{this.state.textResult}</Text>
      </View>


    );
  }
}