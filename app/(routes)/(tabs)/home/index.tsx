// screens/HomeScreen.tsx
import React from 'react';
import {FlatList, View, Text, ScrollView} from 'react-native';
import EventCard from "@/components/route/tabs/home/eventCard";
import {useCodingResources} from '@/hooks/api/useCodingResources';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const HomeScreen: React.FC = () => {
    const {resources, loading, error} = useCodingResources();

    if (loading) return <LoadingSpinner visible={true}/>;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <ScrollView style={{flex: 1}}>
            <View style={{padding: 20}}>
                <FlatList
                    data={resources}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <EventCard event={item}/>}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
