import {Button, TextInput, View} from 'react-native';
import {useSignUp} from '@clerk/clerk-expo';
import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {Stack} from 'expo-router';
import registerStyles from '@/styles/auth/registerStyles';

const Register = () => {
    const {isLoaded, signUp, setActive} = useSignUp();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }
        setLoading(true);

        try {
            await signUp.create({
                emailAddress,
                password,
                username,
            });

            await signUp.prepareEmailAddressVerification({strategy: 'email_code'});

            setPendingVerification(true);
        } catch (err: any) {
            alert(err.errors[0].message);
        } finally {
            setLoading(false);
        }
    };

    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }
        setLoading(true);

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({code});
            await setActive({session: completeSignUp.createdSessionId});
        } catch (err: any) {
            alert(err.errors[0].message);
        } finally {
            setLoading(false);
        }
    };

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