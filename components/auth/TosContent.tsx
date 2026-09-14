import React from 'react';
import {Text, ScrollView} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import tosStyles from '@/styles/auth/tosStyles';
import {useRouter} from 'expo-router';

const TosContent: React.FC = () => {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={tosStyles.container}>
            <Text style={tosStyles.header}>CodeHub Terms of Use</Text>

            <Text style={tosStyles.sectionTitle}>1. Purpose</Text>
            <Text style={tosStyles.text}>
                CodeHub is an educational portfolio application for discovering and managing programming resources and
                events.
            </Text>

            <Text style={tosStyles.sectionTitle}>2. Accounts and data</Text>
            <Text style={tosStyles.text}>
                Authentication is provided by Clerk. CodeHub stores favorites on your device and sends resource data to
                the API configured by the person running this project.
            </Text>

            <Text style={tosStyles.sectionTitle}>3. Acceptable use</Text>
            <Text style={tosStyles.text}>
                Do not submit unlawful, harmful, or misleading content. Only add resources that you are authorized to
                share.
            </Text>

            <Text style={tosStyles.sectionTitle}>4. Availability</Text>
            <Text style={tosStyles.text}>
                This software is provided as-is without a guarantee of availability, data retention, or fitness for a
                particular purpose.
            </Text>

            <PrimaryButton
                title="Back to sign in"
                onPress={() => router.back()}
                color="#6c47ff"
            />
        </ScrollView>
    );
};

export default TosContent;
