import { View, Text, Pressable } from 'react-native';
import { useRouter} from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { Drawer } from "expo-router/drawer";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";


const DrawerLayout = () => {

    const router = useRouter();

    const commonHeaderOptions = ({title}) => ({ 
        headerBackVisible: false,
        headerLeft: () => (
            <Pressable 
                className='pl-5'
                onPress={() => router.push('/(drawer)')}
            >
                <FontAwesome5 name="chevron-left" size={24} color="#fff" />
            </Pressable>
        ),
        headerStyle: { 
            backgroundColor: '#F43F5E',
        },
        headerShadowVisible: false,
        headerTitle: () => (
            <Text className="ml-5 text-lg font-figtree-semibold text-white">
                {title}
            </Text>
        ),
    });


    const profileDetailsHeader = ({title}) => ({ 
        headerShown: true,
        headerBackVisible: false,
        headerLeft: () => (
            <Pressable 
            className='pl-5'
                onPress={() => router.push('/(drawer)/(tabs)/profile')}
            >
                <View className="w-[34px] h-[34px] bg-white rounded-[10px] justify-center items-center">
                    <Entypo name="chevron-left" size={24} color="#F43F5E" />
                </View>
            </Pressable>
        ),
        headerStyle: { 
            backgroundColor: '#FFE5E9',
        },
        headerShadowVisible: false,
        headerTitle: () => (
            <Text className="ml-5 font-figtree-semibold text-base text-[#23262F]">
                {title}
            </Text>
        ),
    });

    return(
        <Drawer 
            screenOptions={({ route }) => {
                return {
                    header: route.name === '(tabs)' ? () => <Header /> : undefined,
                    drawerPosition: 'right',
                };
            }}
            drawerContent={(props) => <Sidebar {...props} />}
        >
            <Drawer.Screen name="(tabs)" options={{ title: "Hemcare" }}  />

            {/* profile detail screens */}
            <Drawer.Screen 
                name="profile-details/personalInfo" 
                options={profileDetailsHeader({ title: "Edit Personal Information" })}  
            />
            <Drawer.Screen 
                name="profile-details/healthInfo" 
                options={profileDetailsHeader({ title: "Edit Health Information" })}  
            />
            <Drawer.Screen 
                name="profile-details/residentialDetails" 
                options={profileDetailsHeader({ title: "Edit Residential Details" })}  
            />

            {/* sidebar screens */}
            <Drawer.Screen 
                name="message" 
                options={commonHeaderOptions({ title: "Message" })}  
            />
            <Drawer.Screen 
                name="notification"  
                options={commonHeaderOptions({ title: "Notification" })}  
            />
            <Drawer.Screen 
                name="about" 
                options={commonHeaderOptions({ title: "About" })}  
            />
            <Drawer.Screen 
                name="privacy-policy"  
                options={commonHeaderOptions({ title: "Privacy Policy" })}  
            />
            <Drawer.Screen 
                name="term-conditions"  
                options={commonHeaderOptions({ title: "Term Conditions" })}  
            />
            <Drawer.Screen 
                name="settings"   
                options={commonHeaderOptions({ title: "Settings" })}  
            />
            <Drawer.Screen 
                name="help-support"   
                options={commonHeaderOptions({ title: "Help and Support" })}  
            />
        </Drawer>
    )
}

export default DrawerLayout;