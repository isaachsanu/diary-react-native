import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type Onboarding1NavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding1'>;
type Onboarding1Props = { navigation: Onboarding1NavigationProp };

const Onboarding1 = ({ navigation }: Onboarding1Props) => {
    return (
        <OnboardingScreen navigation={navigation} />
    );
};

const OnboardingScreen = ({ navigation }: Onboarding1Props) => {
    const handleGetStarted = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to My App</Text>
            </View>
            <View style={styles.content}>
                <Icon name="rocket" type="font-awesome" size={80} color="#3F51B5" />
                <Text style={styles.description}>
                    This app helps you get things done faster and easier than ever before.
                </Text>
            </View>
            <View style={styles.footer}>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('Onboarding2')}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                />
            </View>
        </View>
    );
};

type Onboarding2NavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding2'>;
type Onboarding2Props = { navigation: Onboarding2NavigationProp };

const Onboarding2 = ({ navigation }: Onboarding2Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Easy to Use</Text>
            </View>
            <View style={styles.content}>
                <Icon name="thumbs-o-up" type="font-awesome" size={80} color="#3F51B5" />
                <Text style={styles.description}>
                    Our app is designed to be user-friendly and intuitive, so you can get started right away.
                </Text>
            </View>
            <View style={styles.footer}>
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('Onboarding3')}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                />
            </View>
        </View>
    );
};

type Onboarding3NavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding3'>;
type Onboarding3Props = { navigation: Onboarding3NavigationProp };

const Onboarding3 = ({ navigation }: Onboarding3Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Get Things Done</Text>
            </View>
            <View style={styles.content}>
                <Icon name="check-circle-o" type="font-awesome" size={80} color="#3F51B5" />
                <Text style={styles.description}>
                    With our app, you'll be able to accomplish your tasks faster and more efficiently than ever before.
                </Text>
            </View>
            <View style={styles.footer}>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('LoginScreen')}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3F51B5',
    },
    content: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 30,
        color: '#777',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '80%',
    },
    button: {
        backgroundColor: '#3F51B5',
        borderRadius: 8,
        paddingVertical: 10,
    },
});

export { Onboarding1, Onboarding2, Onboarding3 };