import {useSignIn} from '@clerk/expo';
import {useState} from 'react';
import getClerkErrorMessage from '@/utils/getClerkErrorMessage';

const useLoginForm = () => {
    const {signIn} = useSignIn();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        if (!signIn) {
            return;
        }
        setLoading(true);
        try {
            const {error} = await signIn.password({
                emailAddress,
                password
            });

            if (error) {
                alert(getClerkErrorMessage(error));
                return;
            }

            if (signIn.status !== 'complete') {
                alert('Additional verification is required to finish signing in.');
                return;
            }

            const {error: finalizeError} = await signIn.finalize();
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
        loading,
        onSignInPress
    };
};

export default useLoginForm;
