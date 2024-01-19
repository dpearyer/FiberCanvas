
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function RowCounter() {
    
    const[number, setNumber]=useState(0)
    
       
    return (
        
      <View style={styles.container}>
        
        
        

        <View className='counter' style={styles.counter}>
            <Text className='counterName' style={styles.counterName}>Row Counter</Text>
    
            <View className='Display' style={styles.Display}>
            <Text className='DisplayNumber' style={styles.DisplayNumber}>{number}</Text>
            </View>
            
            <Pressable style={styles.button}  onPress={()=>setNumber(number+1)}>
            <Text className= 'Sign' style={styles.Sign}>+</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=>setNumber(number-1)}>
            <Text className='Sign' style={styles.Sign} >-</Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
    
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1B8D7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
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
        backgroundColor: '#A56186',
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
            backgroundColor: '#560845',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
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
    },
    
    });

    RowCounter.navigationOptions = {
        title: "RowCounter"
      };