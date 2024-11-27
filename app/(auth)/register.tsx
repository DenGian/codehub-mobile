import {Button, TextInput, View} from 'react-native';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {Stack} from 'expo-router';
import registerStyles from '@/styles/auth/registerStyles';
import useRegisterForm from '@/hooks/auth/useRegisterForm';

const Register = () => {
    const {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        username,
        setUsername,
        pendingVerification,
        code,
        setCode,
        loading,
        onSignUpPress,
        onPressVerify
    } = useRegisterForm();

    return (
        <View style={registerStyles.container}>
            <Stack.Screen options={{headerBackVisible: !pendingVerification}}/>
            <Spinner visible={loading}/>

            {!pendingVerification && (
                <>
                    <TextInput
                        autoCapitalize="none"
                        placeholderTextColor="black"
                        placeholder="email@example.com"
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                        style={registerStyles.inputField}
                    />
                    <TextInput
                        placeholder="username"
                        placeholderTextColor="black"
                        value={username}
                        onChangeText={setUsername}
                        style={registerStyles.inputField}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="black"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={registerStyles.inputField}
                    />

                    <Button onPress={onSignUpPress} title="Sign up" color="#6c47ff"/>
                </>
            )}

            {pendingVerification && (
                <>
                    <View>
                        <TextInput
                            value={code}
                            placeholder="Code..."
                            style={registerStyles.inputField}
                            onChangeText={setCode}
                        />
                    </View>
                    <Button onPress={onPressVerify} title="Verify Email" color="#6c47ff"/>
                </>
            )}
        </View>
    );
};

export default Register;