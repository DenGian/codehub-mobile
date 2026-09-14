import * as SecureStore from 'expo-secure-store';
import {TokenCache} from '@/types/TokenCache';

const useTokenCache = (): TokenCache => {
    return {
        async getToken(key: string) {
            try {
                return SecureStore.getItemAsync(key);
            } catch {
                return null;
            }
        },
        async saveToken(key: string, value: string) {
            try {
                return SecureStore.setItemAsync(key, value);
            } catch {
                return;
            }
        }
    };
};

export default useTokenCache;
