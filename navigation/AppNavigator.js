import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/Login.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LogIn" component="LogIn" options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;