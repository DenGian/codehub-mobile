import {View, Text, Button, TextInput} from 'react-native';
import {useState} from 'react';
import {useUser} from '@clerk/clerk-expo';
import profileStyles from "@/styles/routes/tabs/profileStyles";

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

            <TextInput
                placeholder="First Name"
                placeholderTextColor="black"
                value={firstName || ''}
                onChangeText={setFirstName}
                style={profileStyles.inputField}
            />
            <TextInput
                placeholder="Last Name"
                placeholderTextColor="black"
                value={lastName || ''}
                onChangeText={setLastName}
                style={profileStyles.inputField}
            />
            <Button onPress={onSaveUser} title="Update account" color={'#6c47ff'}/>
        </View>
    );
};

export default index;