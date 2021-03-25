
import React, { useState } from 'react';
import { StyleSheet, View, Button,ImageBackground,ScrollView,TouchableOpacity, FlatList, Text,TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles';

export default function HomeScreen({navigation}) {
  
  const geoLocationScreen = () => {
    navigation.navigate('GeoLocationScreen')}; 

  const onImagePickerScreen = () => {
    navigation.navigate('ImagePickerScreen')};
  
  const onAddNewGoalScreen = () => {
    navigation.navigate('AddNewGoalScreen')};
  
  return (
   
    <View style = {StyleSheet.container}>
           <br></br>        
      
      <b>
             Welcome to Revamp!!!!
              </b>
             <br></br>        
   
       <Button title="Geo Location" onPress={geoLocationScreen} style={styles.headerLink}>
      Geo Location</Button>
      <br></br>
 
      <Button title="Image Picker" onPress={onImagePickerScreen} style={styles.headerLink}>
      Image Picker</Button>
      <br></br>
      
      <Button title="To Do List" onPress={onAddNewGoalScreen} style={styles.headerLink}>
      To Do</Button>
      <br></br>
     </View>
  );
}

