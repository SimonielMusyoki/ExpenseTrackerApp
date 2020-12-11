import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {
  View, Text, StyleSheet
} from 'react-native';

import { Home } from './screens';

const theme = {
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

const App = () => {

  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  
  if(!fontsLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontsLoaded(true)}/>
  }
  

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;