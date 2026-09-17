import {useState} from 'react';
import {useSignUp} from '@clerk/expo';
import getClerkErrorMessage from '@/utils/getClerkErrorMessage';

const useRegisterForm = () => {
    const {signUp} = useSignUp();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const onSignUpPress = async () => {
        if (!signUp) {
            return;
        }
        setLoading(true);

        try {
            const {error} = await signUp.password({
                emailAddress,
                password,
                username,
            });

            if (error) {
                alert(getClerkErrorMessage(error));
                return;
            }

            const {error: verificationError} = await signUp.verifications.sendEmailCode();
            if (verificationError) {
                alert(getClerkErrorMessage(verificationError));
                return;
            }

            setPendingVerification(true);
        } catch (error: unknown) {
            alert(getClerkErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const onPressVerify = async () => {
        if (!signUp) {
            return;
        }
        setLoading(true);

        try {
            const {error} = await signUp.verifications.verifyEmailCode({code});
            if (error) {
                alert(getClerkErrorMessage(error));
                return;
            }

            const {error: finalizeError} = await signUp.finalize();
            if (finalizeError) {
                alert(getClerkErrorMessage(finalizeError));
            }
        } catch (error: unknown) {
            alert(getClerkErrorMessage(error));
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
