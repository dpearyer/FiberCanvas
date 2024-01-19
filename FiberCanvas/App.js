
import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Chart from './screens/Chart';
import RowCounter from './screens/RowCounter';
import { StyleSheet, Text, View, Pressable} from 'react-native';


  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <View style={{ flex: 1, height: 100 }}>

        <Drawer.Navigator>
          <Drawer.Screen name="FiberCanvas" component={RowCounter} />
          
          <Drawer.Screen name="Chart" component={Chart} />
        </Drawer.Navigator>
      </View>
    );
  }
      
  

  export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }