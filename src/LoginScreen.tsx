import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import axios, { AxiosError } from 'axios';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenProps = { navigation: LoginScreenNavigationProp };

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://example.com/api/login', { email, password });
            const token = response.data.token;
            await AsyncStorage.setItem('token', token);
            const user = jwt_decode(token);
            console.log(user);
            // navigation.navigate('MainScreen', { user });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || 'An error occurred');
            } else {
                console.log('Error', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Diary</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <View style={styles.buttonGroupWrapper}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPassive} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText}>Not Now</Text>
                </TouchableOpacity>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#3F51B5',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: 18,
        color: '#777',
    },
    button: {
        backgroundColor: '#3F51B5',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonPassive: {
        backgroundColor: '#AAA',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonGroupWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    error: {
        color: '#FF0000',
        fontSize: 16,
        marginTop: 10,
    },
});

export { LoginScreen };