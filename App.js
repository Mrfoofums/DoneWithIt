import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View,TouchableWithoutFeedback,  Platform, Alert, TouchableOpacity, Button, TouchableHighlight,  Image, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


export default function App() {
  

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",//Sencondary axis, alignment of items within each line
      // alignContent:"center"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
       
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }} />

    </View>


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
