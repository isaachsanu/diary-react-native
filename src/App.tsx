import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen } from './IntroScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Onboarding1, Onboarding2, Onboarding3 } from './OnboardingScreen';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
    Intro: undefined,
    LoginScreen: undefined,
    HomeScreen: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor={'#fff'}
                barStyle={'dark-content'}
            />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;