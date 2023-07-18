import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp1 from '../screens/SignUp1.js';
import Login from '../screens/Login.js';
import SignUp2 from '../screens/SignUp2.js';
import SignUp3 from '../screens/SignUp3.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Login" screenOptions={{ animationEnabled: false, gestureEnabled: false}} options={{ headerShown: false}}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp1" component={SignUp1} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp2" component={SignUp2} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp3" component={SignUp3} options={{ headerShown: false}}/>
            </Stack.Navigator>
    );
};

export default AppNavigator;