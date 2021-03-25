import React, { useState } from 'react';
import { StyleSheet, View, Button,ScrollView,TouchableOpacity, FlatList, Text,TextInput } from 'react-native';
import GoalItem from '../AddNewGoalScreen/GoalItem';
import GoalInput from '../AddNewGoalScreen/GoalInput';
import styles from './styles';

export default function AddNewGoalScreen({navigation}) {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    
    
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
     
      <View style={styles.screen}>
      <b>
            <strong>To Do List</strong>
      </b>
      <br></br>
       
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        /><br></br>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
      
    
    );
  }