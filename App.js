import { NavigationContainer } from '@react-navigation/native';
import { React } from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
          <AppNavigator/>
    </NavigationContainer>
  );
}

