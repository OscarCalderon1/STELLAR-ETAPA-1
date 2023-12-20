import 'react-native-gesture-hand';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';


import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';

const Stack = createStackNavigation();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigation initialRouteName='Home'>
       <Stack.Screen name ="Home" component={HomeScreen}/>
       <Stack.Screen name ="StarMap" component={StarMapScreen}/>
       <Stack.Screen name ="DailyPic" component={DailyPicScreen}/>
       <Stack.Screen name ="SpaceCraft" component={SpaceCraftScreen}/>
      </Stack.Navigation>
    </NavigationContainer>
  );
}
