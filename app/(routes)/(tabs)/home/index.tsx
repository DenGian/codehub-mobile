import React from 'react';
import {useCodingResources} from '@/hooks/api/useCodingResources';

const HomeScreen: React.FC = () => {
    const {resources, loading, error} = useCodingResources();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Coding Resources</h1>
            <ul>
                {resources?.map(resource => (
                    <li key={resource.id}>
                        <a href={resource.url}>{resource.description}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeScreen;