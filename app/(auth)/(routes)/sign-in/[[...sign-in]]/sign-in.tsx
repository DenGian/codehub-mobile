import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { TextInput, Button, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function SignInPage() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPress = async () => {
        if (!isLoaded) return;

        try {
            const signInAttempt = await signIn.create({ identifier: emailAddress, password });
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace({ pathname: '/' });
            }
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
            <Button title="Sign In" onPress={onSignInPress} />
            <Link href={{ pathname: '../sign-up' }}>
                <Text>Don't have an account? Sign up</Text>
            </Link>
        </View>
    );
}