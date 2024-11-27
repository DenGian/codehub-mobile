import {View} from 'react-native';
import profileStyles from '@/styles/routes/tabs/profileStyles';
import PrimaryButton from '@/components/ui/PrimaryButton';
import GreetingText from '@/components/ui/GreetingText';
import useUpdateUser from '@/hooks/route/tabs/useUpdateUser';
import UserInputFields from '@/components/ui/UserInputFields';

const index = () => {
    const {firstName, setFirstName, lastName, setLastName, loading, onSaveUser} = useUpdateUser();

    return (
        <View style={profileStyles.container}>
            <GreetingText firstName={firstName || ''} lastName={lastName || ''}/>
            <UserInputFields
                firstName={firstName || ''}
                setFirstName={setFirstName}
                lastName={lastName || ''}
                setLastName={setLastName}
            />
            <PrimaryButton onPress={onSaveUser} title="Update account" color="#6c47ff" loading={loading}/>
        </View>
    );
};

export default index;