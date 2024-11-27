import {useState} from 'react';
import {useUser} from '@clerk/clerk-expo';

const useUpdateUser = () => {
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);

    const onSaveUser = async () => {
        setLoading(true);
        try {
            await user?.update({
                firstName: firstName!,
                lastName: lastName!,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        loading,
        onSaveUser,
    };
};

export default useUpdateUser;