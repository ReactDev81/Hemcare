import { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import FlatButton from "../components/ui/FlatButton";
import Title from "../components/ui/title";
import BgShape from '../assets/welcome-bg-shape.png';

const WelcomeScreen = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    router.replace('/(drawer)'); // Redirect if user is logged in
                    return;
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
            setLoading(false); // Stop loading when check is complete
        };

        checkLoginStatus();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-900">
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    return (
        <ImageBackground source={BgShape} className="flex-1 items-center w-full h-full">
            <View className="px-3 pb-10 pt-24">
                <Image source={require('../assets/welcome.png')} resizeMode="contain" className="mx-auto" />
                <Title text="Welcome" classname="text-[42px] leading-[56.66px] text-center text-white mt-5" />
                <Text className="text-sm leading-[22px] font-normal text-white text-center mt-2 mb-7 font-figtree">
                    Keep your haemophilia records organized and accessible. Record your bleeds, treatments, and important information in one convenient place.
                </Text>
            </View>
            <View className="absolute bottom-0 w-full px-5 pb-10">
                <FlatButton classname="bg-red-dark" text="Let's Start" onPress={() => router.push('auth/login')} />
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;
