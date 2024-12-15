import {Redirect} from 'expo-router';
import React from "react";

const StartPage: React.FC = () => {
    return <Redirect href="/(auth)/login"/>;
};

export default StartPage;