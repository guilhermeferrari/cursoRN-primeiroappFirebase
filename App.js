/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import firebase from 'firebase';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      pontuacao: 0
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAr9hBjxRf-MpkB_ajJnkLGOAnJeQX_U7I",
      authDomain: "configuracaofirebasereac-b1ce8.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-b1ce8.firebaseio.com",
      projectId: "configuracaofirebasereac-b1ce8",
      storageBucket: "configuracaofirebasereac-b1ce8.appspot.com",
      messagingSenderId: "397769847389"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    var funcionarios = firebase.database().ref("funcionarios")
    // funcionarios.child("001").child("nome").set("Jamilton")
    // funcionarios.child("002").child("nome").set("Guilherme")
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      this.setState({
        pontuacao: snapshot.val()
      })
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => { this.salvarDados(); }}
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados" />
        <Button
          onPress={() => { this.listarDados(); }}
          title="Listar dados"
          color="#841584"
          accessibilityLabel="Lista dados" />
        <Text>{this.state.pontuacao}</Text>
      </View>
    )
  }
}