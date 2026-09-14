import {useState} from 'react';
import {useSignIn} from '@clerk/clerk-expo';

const usePasswordReset = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const [loading, setLoading] = useState(false);
    const {signIn, setActive} = useSignIn();

    const onRequestReset = async () => {
        setLoading(true);
        try {
            await signIn!.create({
                strategy: 'reset_password_email_code',
                identifier: emailAddress,
            });
            setSuccessfulCreation(true);
        } catch (err: any) {
            alert(err.errors[0].message);
        } finally {
            setLoading(false);
        }
    };

    const onReset = async () => {
        setLoading(true);
        try {
            const result = await signIn!.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code,
                password,
            });
            alert('Password reset successfully');
            await setActive!({session: result.createdSessionId});
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
        code,
        setCode,
        successfulCreation,
        onRequestReset,
        onReset,
        loading,
    };
};

export default usePasswordReset;
