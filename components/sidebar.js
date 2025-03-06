import { View, Text, Pressable, Image, ImageBackground } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

const Sidebar = ({ navigation }) => {

    const handleClose = () => {
        navigation.closeDrawer();
    };

    return( 
        <ImageBackground source={require('../assets/welcome-bg-shape.png')} className="flex-1 items-center w-full h-full">
            <View className="flex-1 justify-between">
                <View className="px-5 pt-5">
                    <View className="flex-row justify-between items-center w-full pb-6 border-b border-white/50">
                        <View className="flex-row justify-between items-center">
                            <View className="w-[67px] h-[67px] rounded-full items-center justify-end bg-[#FFBE98] overflow-hidden">
                                <Image source={require('../assets/user.png')} resizeMode="contain" className="w-[60px] h-16" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-base leading-[19.2px] font-figtree-medium text-white">Rowan Atkinson</Text>
                                <Text className="text-sm leading-4 figtree-normal text-white mt-2.5">danishmin@gmail.com</Text>
                            </View>
                        </View>
                        <Pressable className="w-9 h-9 rounded-[10px] bg-white flex items-center justify-center" onPress={handleClose}>
                            <Fontisto name="close-a" size={14} color="#F43F5E" />
                        </Pressable>
                    </View>

                    <View className='mt-8 flex gap-y-9'>
                        <Link href="/(drawer)" className='flex items-center'>
                            <View className="flex-row items-center gap-x-3">
                                <Entypo name="home" size={20} color="#fff" />
                                <Text className='text-white'>Home</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/message" >
                            <View className="flex-row items-center gap-x-3">
                                <MaterialCommunityIcons name="message-processing" size={20} color="#fff" />
                                <Text className="text-white">Message</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/notification">
                            <View className="flex-row items-center gap-x-3">
                                <MaterialIcons name="notifications" size={24} color="#fff" />
                                <Text className='text-white'>Notification</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/about" >
                            <View className="flex-row items-center gap-x-3">
                                <MaterialCommunityIcons name="information" size={22} color="#fff" />
                                <Text className='text-white'>About</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/privacy-policy" >
                            <View className="flex-row items-center gap-x-3">
                                <MaterialIcons name="policy" size={24} color="#fff" />
                                <Text className='text-white'>Privacy Policy</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/term-conditions" >
                            <View className="flex-row items-center gap-x-3">
                                <Ionicons name="shield-checkmark-sharp" size={22} color="#fff" />
                                <Text className='text-white'>Terms & Conditions</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/settings" >
                            <View className="flex-row items-center gap-x-3">
                                <Ionicons name="settings-sharp" size={22} color="#fff" />
                                <Text className='text-white'>Settings</Text>
                            </View>
                        </Link>
                        <Link href="/(drawer)/help-support">
                            <View className="flex-row items-center gap-x-3">
                                <Ionicons name="help-circle-sharp" size={24} color="#fff" />
                                <Text className='text-white'>Help and Support</Text>
                            </View>
                        </Link>
                    </View>
                </View>
                <View className="px-5">
                    <Pressable className="border-t border-solid border-[#151F311A] py-6 flex-row">
                        <AntDesign name="arrowleft" size={24} color="#5C6679" />
                        <Text className="ml-3 font-figtree-semibold text-base leading-5 text-gray-dark">Log Out</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Sidebar;