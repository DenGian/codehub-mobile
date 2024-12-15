import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';

const TermsOfService: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>📜 Terms of Service for Code-Hub</Text>

            <Text style={styles.sectionTitle}>1. Acceptance of the Ridiculous</Text>
            <Text style={styles.text}>
                By using Code-Hub, you acknowledge that you have read, laughed at, and probably ignored these terms.
                Your continued use implies your agreement to everything here, including the jokes.
            </Text>

            <Text style={styles.sectionTitle}>2. Usage of the App</Text>
            <Text style={styles.text}>
                Code-Hub is intended for:
                {'\n'}• Developers, wannabe developers, and developers' pets.
                {'\n'}• Copy-pasting code like a true programmer.
                {'\n'}• Complaining about bugs that are clearly your fault.
            </Text>

            <Text style={styles.sectionTitle}>3. Liability Disclaimer</Text>
            <Text style={styles.text}>
                If Code-Hub:
                {'\n'}• Explodes your laptop: not our fault.
                {'\n'}• Deletes your files: also not our fault.
                {'\n'}• Steals your cat: actually, that one might be on us.
            </Text>

            <Text style={styles.sectionTitle}>4. Privacy Policy</Text>
            <Text style={styles.text}>
                We promise not to sell your data... unless someone offers us a really good deal. Just kidding. Probably.
            </Text>

            <Text style={styles.sectionTitle}>5. The Golden Rule</Text>
            <Text style={styles.text}>
                Be nice. Seriously, don't be a jerk. Code-Hub is a judgment-free zone (except for your variable names).
            </Text>

            <Text style={styles.sectionTitle}>6. Termination Clause</Text>
            <Text style={styles.text}>
                We reserve the right to terminate your access if you:
                {'\n'}• Write spaghetti code.
                {'\n'}• Claim JavaScript is "Java."
                {'\n'}• Use Comic Sans in your IDE.
            </Text>

            <Text style={styles.sectionTitle}>7. Updates to These Terms</Text>
            <Text style={styles.text}>
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#555',
    },
    text: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 10,
    },
});

export default TermsOfService;