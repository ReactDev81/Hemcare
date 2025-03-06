import { View, Text, ImageBackground, Image} from "react-native";
import { useRouter } from "expo-router";
import FlatButton from "../components/ui/FlatButton";
import Title from "../components/ui/title";
import BgShape from '../assets/welcome-bg-shape.png';

const WelcomeScreen = () => {

    const router = useRouter();

    return(
        <ImageBackground source={BgShape} className="flex-1 items-center w-full h-full">
            <View className='px-3 pb-10 pt-24'>
                <Image source={require('../assets/welcome.png')} resizeMode="contain" className="mx-auto" />
                <Title text="Welcome" classname="text-[42px] leading-[56.66px] text-center text-white mt-5" />
                <Text className="text-sm leading-[22px] font-normal text-white text-center mt-2 mb-7 font-figtree">Keep your haemophilia records organized and accessible. Record your bleeds, treatments, and important information in one convenient place.</Text>
            </View>
            <View className="absolute bottom-0 w-full px-5 pb-10">
                <FlatButton classname='bg-red-dark' text="Lets Start" onPress={() => router.push('auth/login')}  />
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen