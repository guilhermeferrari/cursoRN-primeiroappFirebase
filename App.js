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

  constructor(props) {
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

  cadastrarUsuario() {
    var email = "xxx@gmail.com"
    var senha = "testeaas"
    const usuario = firebase.auth()
    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        var msgErro = "";
        if (erro.code == "auth/weak-password") {
          msgErro = "A senha precisa ter no minimo 6 caracteres"
        }
        alert(msgErro)
      }
    )
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth()

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("Usuario logado")
        } else {
          alert("Usuario nao está logado")
        }
      }
    )

    /* const usuarioAtual = usuario.currentUser
    if (usuarioAtual) {
      alert("Usuario logado")
    } else {
      alert("Usuario nao está logado")
    } */
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => { this.cadastrarUsuario(); }}
          title="Cadastrar Usuario"
          color="#841584"
          accessibilityLabel="Cadastrar usuário" />
        <Button
          onPress={() => { this.verificarUsuarioLogado(); }}
          title="Verificar usuario logado"
          color="#841584"
          accessibilityLabel="verificar usuario logado" />
        <Text>xx</Text>
      </View>
    )
  }
}