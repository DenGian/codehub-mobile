import {View} from 'react-native';
import {useState} from 'react';
import {useUser} from '@clerk/clerk-expo';
import profileStyles from '@/styles/routes/tabs/profileStyles';
import InputField from '@/components/ui/InputField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import GreetingText from '@/components/ui/GreetingText';

const index = () => {
    const {user} = useUser();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [loading, setLoading] = useState(false);

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

    return (
        <View style={profileStyles.container}>
            <GreetingText firstName={user?.firstName || ''} lastName={user?.lastName || ''}/>
            <InputField
                placeholder="First Name"
                value={firstName || ''}
                onChangeText={setFirstName}
            />
            <InputField
                placeholder="Last Name"
                value={lastName || ''}
                onChangeText={setLastName}
            />
            <PrimaryButton onPress={onSaveUser} title="Update account" color="#6c47ff" loading={loading}/>
        </View>
    );
};

export default index;