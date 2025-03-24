import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView} from "react-native";
import LinkList from "../../../components/profile-tab/linkList";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FlatButton from '../../../components/ui/FlatButton'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Profile = () => {

    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userData');
            router.replace('/welcome');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    return(
        <ScrollView>
            <View className="flex-1">

                <View className="bg-red-light">
                    <View className="pt-10 pb-20 justify-center items-center">
                        <View className="w-28 h-28 rounded-full items-center justify-end bg-[#FFBE98] overflow-hidden">
                            <Image source={require('../../../assets/user.png')} resizeMode="contain" />
                        </View>
                        <Text className="text-base leading-[19.2px] font-figtree-medium text-blue-dark mt-5">{user?.user?.name}</Text>
                        <Text className="text-sm leading-4 figtree-normal text-gray-dark mt-2.5">Haemophilia A - <Text className="text-red-dark">Severe</Text></Text>
                    </View>
                </View>
                
                <View className="bg-gray-light w-full h-full px-5 pb-10">

                    <View className="bg-white p-5 rounded-[10px] -mt-12">
                        <LinkList 
                            text="Personal Information"
                            icon={<FontAwesome5 name="user-plus" size={14} color="#5C6679" />}
                            onpress={() => router.push('profile-details/personalInfo')}
                        />
                        <LinkList 
                            text="Health Details"
                            icon={<MaterialCommunityIcons name="heart-plus" size={18} color="#5C6679" />}
                            onpress={() => router.push('profile-details/healthInfo')}
                        />
                        <LinkList 
                            classname="mb-0 pb-0 border-0"
                            text="Residential Details"
                            icon={<MaterialIcons name="add-home" size={19} color="#5C6679" />}
                            onpress={() => router.push('profile-details/residentialDetails')}
                        />
                    </View>

                    <View className="bg-white p-5 rounded-[10px] mt-4">
                        <LinkList 
                            text="Personal Information"
                            icon={<FontAwesome5 name="user-alt" size={16} color="#5C6679" />}
                            onpress={() => router.push('profile-details/personalInfo')}
                        />
                        <LinkList 
                            text="Health Details"
                            icon={<FontAwesome5 name="user-alt" size={16} color="#5C6679" />}
                            onpress={() => router.push('profile-details/healthInfo')}
                        />
                        <LinkList 
                            classname="mb-0 pb-0 border-0"
                            text="Residential Details"
                            icon={<FontAwesome5 name="user-alt" size={16} color="#5C6679" />}
                            onpress={() => router.push('profile-details/residentialDetails')}
                        />
                    </View>

                    <FlatButton onPress={handleLogout} text="Log Out" classname="bg-red-dark mt-7" />

                    <Text className="font-figtree-normal text-center mt-5 text-blue-light text-base leading-5">App version 1.6.7</Text>

                </View>
            </View>
        </ScrollView>
    )
}

export default Profile