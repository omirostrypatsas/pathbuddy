import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp1 from '../screens/SignUp1.js';
import Login from '../screens/Login.js';
import SignUp2 from '../screens/SignUp2.js';
import SignUp3 from '../screens/SignUp3.js';
import SignUp4 from '../screens/SignUp4.js';
import SignUp5 from '../screens/SignUp5.js';
import SignUp6 from '../screens/SignUp6.js';
import Feed from '../screens/Feed.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Login" screenOptions={{ animationEnabled: false, gestureEnabled: false}} options={{ headerShown: false}}>
                {/* Log in and Sign Up screens: */}
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp1" component={SignUp1} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp2" component={SignUp2} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp3" component={SignUp3} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp4" component={SignUp4} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp5" component={SignUp5} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp6" component={SignUp6} options={{ headerShown: false}}/>
                <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false}}/>
            </Stack.Navigator>
    );
};

export default AppNavigator;