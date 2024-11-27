import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import {useUser} from '@clerk/clerk-expo';
import profileStyles from '@/styles/routes/tabs/profileStyles';
import InputField from '@/components/ui/InputField';

const index = () => {
    const {user} = useUser();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);

    const onSaveUser = async () => {
        try {
            await user?.update({
                firstName: firstName!,
                lastName: lastName!,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={profileStyles.container}>
            <Text style={{textAlign: 'center'}}>
                Good morning {user?.firstName} {user?.lastName}!
            </Text>

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
            <Button onPress={onSaveUser} title="Update account" color={'#6c47ff'}/>
        </View>
    );
};

export default index;