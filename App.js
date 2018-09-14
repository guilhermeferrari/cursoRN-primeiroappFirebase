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

  render() {
    return (
      <View>
        <Text>Meu app</Text>
      </View>
    )
  }
}