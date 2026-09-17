import {useState} from 'react';
import {useSignIn} from '@clerk/expo';
import getClerkErrorMessage from '@/utils/getClerkErrorMessage';

const usePasswordReset = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const [loading, setLoading] = useState(false);
    const {signIn} = useSignIn();

    const onRequestReset = async () => {
        if (!signIn) {
            return;
        }

        setLoading(true);
        try {
            const {error} = await signIn.create({
                identifier: emailAddress,
            });

            if (error) {
                alert(getClerkErrorMessage(error));
                return;
            }

            const {error: sendError} = await signIn.resetPasswordEmailCode.sendCode();
            if (sendError) {
                alert(getClerkErrorMessage(sendError));
                return;
            }

            setSuccessfulCreation(true);
        } catch (error: unknown) {
            alert(getClerkErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const onReset = async () => {
        if (!signIn) {
            return;
        }

        setLoading(true);
        try {
            const {error} = await signIn.resetPasswordEmailCode.verifyCode({code});
            if (error) {
                alert(getClerkErrorMessage(error));
                return;
            }

            const {error: passwordError} = await signIn.resetPasswordEmailCode.submitPassword({password});
            if (passwordError) {
                alert(getClerkErrorMessage(passwordError));
                return;
            }

            const {error: finalizeError} = await signIn.finalize();
            if (finalizeError) {
                alert(getClerkErrorMessage(finalizeError));
                return;
            }

            alert('Password reset successfully');
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
        code,
        setCode,
        successfulCreation,
        onRequestReset,
        onReset,
        loading,
    };
};

export default usePasswordReset;
