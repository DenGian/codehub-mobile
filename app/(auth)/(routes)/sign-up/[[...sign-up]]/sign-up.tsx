import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { TextInput, Button, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function SignUpPage() {
    const { signUp, setActive, isLoaded } = useSignUp();
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPress = async () => {
        if (!isLoaded) return;

        try {
            await signUp.create({ emailAddress, password });
            router.replace({ pathname: '../sign-in' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Sign Up" onPress={onSignUpPress} />
        </View>
    );
}