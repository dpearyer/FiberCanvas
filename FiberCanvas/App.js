import React, {useState, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function App(){
  const[number, setNumber]=useState(0)
  const increment =()=>{
    setNumber(number+1);
  };
  const decrement=()=>{
    setNumber(number-1);
  };
  return (
    <View style={styles.container}>
     
      <View className='counter' style={styles.counter}>
        <Text className='counterName' style={styles.counterName}>Row Counter</Text>

        <View className='Display' style={styles.Display}>
          <Text className='DisplayNumber' style={styles.DisplayNumber}>{number}</Text>
        </View>
        
         <Pressable style={styles.button}  >
          <Text className= 'Sign' style={styles.Sign} onPress={increment}>+</Text>
         </Pressable>
         <Pressable style={styles.button}>
        <Text className='Sign' style={styles.Sign} onPress={decrement} >-</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1B8D7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
  counterName:{
    textAlign:'center',
    marginTop: 5,
    marginBottom:10,
    color: 'white',
    fontSize: '18',
    fontFamily: 'Patrick Hand-Cursive',

  },
  counter:{
    width: 294,
    height: 497,
    backgroundColor: '#70C8DB',
    borderRadius: 46,
    padding: 35,
    justifyContent:'center',
    alignItems: 'center',
  },
  Display: {
    backgroundColor: 'white',
    width: 250,
    height: 200,
    left: 0,
    right: 0,
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:26,
  },
  button: {
          backgroundColor: '#BB79E3',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 150,
          height:84,
          width: 84,
          marginBottom:15,
          marginTop:15,
  },
 
  Sign:{
    color:'white',
    justifyContent:'center',
    alignItems: "center",
    fontSize:'45',
  },
  DisplayNumber:{
    fontSize:'55',
    color:'#304476'
  }
});
