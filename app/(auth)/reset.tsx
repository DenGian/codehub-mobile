import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {Stack} from 'expo-router';
import {useSignIn} from '@clerk/clerk-expo';
import resetStyles from '@/styles/auth/resetStyles';

const PwReset = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const {signIn, setActive} = useSignIn();

    const onRequestReset = async () => {
        try {
            await signIn!.create({
                strategy: 'reset_password_email_code',
                identifier: emailAddress,
            });
            setSuccessfulCreation(true);
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    const onReset = async () => {
        try {
            const result = await signIn!.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code,
                password,
            });
            console.log(result);
            alert('Password reset successfully');
            await setActive!({session: result.createdSessionId});
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    return (
        <View style={resetStyles.container}>
            <Stack.Screen options={{headerBackVisible: !successfulCreation}}/>

            {!successfulCreation && (
                <>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="code@hub.dev"
                        placeholderTextColor="black"
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                        style={resetStyles.inputField}
                    />

                    <Button onPress={onRequestReset} title="Send Reset Email" color={'#6c47ff'}/>
                </>
            )}

            {successfulCreation && (
                <>
                    <View>
                        <TextInput
                            value={code}
                            placeholder="Code..."
                            placeholderTextColor="black"
                            style={resetStyles.inputField}
                            onChangeText={setCode}
                        />
                        <TextInput
                            placeholder="New password"
                            placeholderTextColor="black"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={resetStyles.inputField}
                        />
                    </View>
                    <Button onPress={onReset} title="Set new Password" color={'#6c47ff'}/>
                </>
            )}
        </View>
    );
};

export default PwReset;