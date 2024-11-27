import {useState} from 'react';
import {useSignUp} from '@clerk/clerk-expo';

const useRegisterForm = () => {
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

    return {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        username,
        setUsername,
        pendingVerification,
        setPendingVerification,
        code,
        setCode,
        loading,
        onSignUpPress,
        onPressVerify
    };
};

export default useRegisterForm;