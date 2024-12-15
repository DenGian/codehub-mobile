import React from 'react';
import {Text, ScrollView} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import tosStyles from '@/styles/auth/tosStyles';

const TermsOfService: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={tosStyles.container}>
            <Text style={tosStyles.header}>📜 Terms of Service for Code-Hub</Text>

            <Text style={tosStyles.sectionTitle}>1. Acceptance of the Ridiculous</Text>
            <Text style={tosStyles.text}>
                By using Code-Hub, you acknowledge that you have read, laughed at, and probably ignored these terms.
                Your continued use implies your agreement to everything here, including the jokes.
            </Text>

            <Text style={tosStyles.sectionTitle}>2. Usage of the App</Text>
            <Text style={tosStyles.text}>
                Code-Hub is intended for:
                {'\n'}• Developers, wannabe developers, and developers' pets.
                {'\n'}• Copy-pasting code like a true programmer.
                {'\n'}• Complaining about bugs that are clearly your fault.
            </Text>

            <Text style={tosStyles.sectionTitle}>3. Liability Disclaimer</Text>
            <Text style={tosStyles.text}>
                If Code-Hub:
                {'\n'}• Explodes your laptop: not our fault.
                {'\n'}• Deletes your files: also not our fault.
                {'\n'}• Steals your cat: actually, that one might be on us.
            </Text>

            <Text style={tosStyles.sectionTitle}>4. Privacy Policy</Text>
            <Text style={tosStyles.text}>
                We promise not to sell your data... unless someone offers us a really good deal. Just kidding. Probably.
            </Text>

            <Text style={tosStyles.sectionTitle}>5. The Golden Rule</Text>
            <Text style={tosStyles.text}>
                Be nice. Seriously, don't be a jerk. Code-Hub is a judgment-free zone (except for your variable names).
            </Text>

            <Text style={tosStyles.sectionTitle}>6. Termination Clause</Text>
            <Text style={tosStyles.text}>
                We reserve the right to terminate your access if you:
                {'\n'}• Write spaghetti code.
                {'\n'}• Claim JavaScript is "Java."
                {'\n'}• Use Comic Sans in your IDE.
            </Text>

            <Text style={tosStyles.sectionTitle}>7. Updates to These Terms</Text>
            <Text style={tosStyles.text}>
                These terms may change whenever we feel like it. No, we won't tell you.
                It's your job to keep up.
            </Text>

            <PrimaryButton
                title="I Accept These Totally Reasonable Terms"
                onPress={() => alert('Welcome to Code-Hub!')}
                color="#6c47ff"
            />
        </ScrollView>
    );
};

export default TermsOfService;