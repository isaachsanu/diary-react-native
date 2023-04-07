import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen } from './IntroScreen';
import { LoginScreen } from './LoginScreen';
import { Onboarding1, Onboarding2, Onboarding3 } from './OnboardingScreen';

export type RootStackParamList = {
    Intro: undefined,
    Onboarding1: undefined, // undefined because you aren't passing any params to the home screen
    Onboarding2: undefined,
    Onboarding3: undefined,
    LoginScreen: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Onboarding1" component={Onboarding1} />
                <Stack.Screen name="Onboarding2" component={Onboarding2} />
                <Stack.Screen name="Onboarding3" component={Onboarding3} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;