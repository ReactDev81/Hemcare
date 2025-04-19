import { Stack } from "expo-router";
import Toast from 'react-native-toast-message';

const AppLayout = () => {
    return(
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(drawer)" />
                <Stack.Screen name='auth/register'></Stack.Screen>
                <Stack.Screen name='auth/login'></Stack.Screen>
                <Stack.Screen name='auth/forgot-password/send-otp'></Stack.Screen>
                <Stack.Screen name='auth/forgot-password/verify-otp'></Stack.Screen>
                <Stack.Screen name='auth/forgot-password/reset-password'></Stack.Screen>
            </Stack>
            <Toast />
        </>
    ) 
}

export default AppLayout;