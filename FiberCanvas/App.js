
import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Chart from './screens/Chart';
import RowCounter from './screens/RowCounter';


  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="FiberCanvas" component={RowCounter} />
        
        <Drawer.Screen name="Chart" component={Chart} />
      </Drawer.Navigator>
    );
  }
      
  

  export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }