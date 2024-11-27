import {useSignIn} from '@clerk/clerk-expo';
import {useState} from 'react';

const useLoginForm = () => {
    const {signIn, setActive, isLoaded} = useSignIn();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }
        setLoading(true);
        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password
            });

            // This indicates the user is signed in
            await setActive({session: completeSignIn.createdSessionId});
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
        loading,
        onSignInPress
    };
};

export default useLoginForm;