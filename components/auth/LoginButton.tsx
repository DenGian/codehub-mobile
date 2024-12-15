import React from 'react';
import {Pressable, Text} from 'react-native';
import {Link, LinkProps} from 'expo-router';
import loginStyles from '@/styles/auth/loginStyles';

interface LoginButtonProps {
    href: LinkProps['href'];
    text: string;
}

const LoginButton = ({href, text}: LoginButtonProps) => {
    return (
        <Link href={href} asChild>
            <Pressable style={loginStyles.button}>
                <Text>{text}</Text>
            </Pressable>
        </Link>
    );
};

export default LoginButton;