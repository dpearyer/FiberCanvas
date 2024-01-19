import React, {useState} from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

let data = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]

export default function Chart(){

    const [boxColor, setBoxColor]= useState('white');
    const pressBox =()=>{
        const newColor = boxColor == 'white' ? 'pink': 'white';
        setBoxColor(newColor);
    }
    return(
        
        <View className='container' style={styles.container}>
        
            <View className='chart' style={styles.chart}>
                <View className='row1' style={styles.row}>
                    <Pressable style={[styles.box, {backgroundColor: boxColor}]} onPress={pressBox}><View className='box' ></View></Pressable>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row2' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row3' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row4' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row5' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row6' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row7' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box'style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row8' style={styles.row}>
                    <Pressable style={[styles.box, {backgroundColor: boxColor}]} onPress={pressBox}><View className='box' ></View></Pressable>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row9' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
                <View className='row10' style={styles.row}>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    <View className='box' style={styles.box}></View>
                    
                </View>
            </View>
            <Pressable style={styles.button}><Text style={styles.reset}>Reset</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE9CF4'
    },
    button:{
        width: 120,
        height:60,
        border: 'none',
        outline: 'none',
        borderRadius: 50,
        backgroundColor: '#304476',
        color: 'white',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    box: {
        display: 'flex',
        height: 40,
        width: 40,
        backgroundColor: '#CFCED1',
        borderColor: '#170D25',
        borderWidth: 1, 
    },
    chart:{
        height: 400,
        width: 400,
        display: 'flex',
        marginBottom: 30,
    },
    reset:{
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        fontSize: 25,
        fontFamily: 'Patrick Hand-Cursive',

    },
    row:{
        flex:1,
        flexDirection: 'row',
    }
});

Chart.navigationOptions = {
    title: "Chart"
  };