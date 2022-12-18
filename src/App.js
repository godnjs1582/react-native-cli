import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



// const Stack = createStackNavigator();
// const Tab=createBottomTabNavigator();
const Tab=createMaterialTopTabNavigator();

const App = () => {

  // const icon=<FontAwesome5 name={'comments'} solid/>;

  return(
    <NavigationContainer>
      <Tab.Navigator
      //  initialRouteName="Home"
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
       barStyle={{ backgroundColor: '#694fad' }}
        screenOptions={({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name==='Screen_A'){
              iconName='autoprefixer';
              size=focused?25:20;
              color=focused?'#f0f':'#555';
              
            }else if(route.name==='Screen_B'){
              iconName='btc';
              size=focused?25:20;
              color=focused?'#f0f':'#555';
            }
            return(
             <FontAwesome5
             name={iconName}/>
            )
          }
        })}

        // screenOptions={{
        //   tabBarActiveTintColor:'#f0f',
        //   tabBarInactiveTintColor:'#555',
        //   tabBarActiveBackgroundColor:'#fff',
        //   tabBarInactiveBackgroundColor:'#999',
        //   showLabel:false,
        //   tabBarStyle:{fontSize:14}
        // }}
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{tabBarBadge:3}}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles =StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    margin:10,
  }
})




export default App;
