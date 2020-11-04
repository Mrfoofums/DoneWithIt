import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View,TouchableWithoutFeedback,  Platform, Alert, TouchableOpacity, Button, TouchableHighlight,  Image, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  

  return (
    <WelcomeScreen/>
  );
}

const containerStyle = {backgroundColor :"orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
