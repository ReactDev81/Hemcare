import { Tabs } from 'expo-router'; 
import { View, Pressable, Animated, Easing, TouchableWithoutFeedback} from 'react-native';
import Toast from 'react-native-toast-message';
import Svg, { Path, Mask, G} from 'react-native-svg';
import { useState, useRef, useEffect} from 'react';
import AddTabPopup from '../../../components/add-tab-popup';

const HomeIcon = ({color}) => {
    return(
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M18.7564 22H14.8782C14.6725 22 14.4752 21.917 14.3297 21.7694C14.1842 21.6217 14.1025 21.4214 14.1025 21.2126C14.1025 21.0037 14.1842 20.8034 14.3297 20.6558C14.4752 20.5081 14.6725 20.4251 14.8782 20.4251H18.7564C18.9621 20.4251 19.1594 20.3422 19.3048 20.1945C19.4503 20.0468 19.532 19.8465 19.532 19.6377V9.99947C19.5318 9.67192 19.4646 9.348 19.3347 9.04818C19.2048 8.74836 19.015 8.47918 18.7773 8.25766L12.0486 1.99911C11.7635 1.73182 11.3896 1.58338 11.0015 1.58338C10.6134 1.58338 10.2395 1.73182 9.9544 1.99911L3.22261 8.25766C2.98495 8.47918 2.79516 8.74836 2.66526 9.04818C2.53535 9.348 2.46815 9.67192 2.46791 9.99947V19.6377C2.46791 19.8465 2.54963 20.0468 2.69509 20.1945C2.84055 20.3422 3.03784 20.4251 3.24355 20.4251H7.12175C7.32747 20.4251 7.52475 20.5081 7.67022 20.6558C7.81568 20.8034 7.8974 21.0037 7.8974 21.2126C7.8974 21.4214 7.81568 21.6217 7.67022 21.7694C7.52475 21.917 7.32747 22 7.12175 22H3.24355C2.62641 22 2.03455 21.7511 1.59817 21.3081C1.16178 20.8651 0.916626 20.2642 0.916626 19.6377V9.99947C0.917177 9.45371 1.02919 8.914 1.2456 8.41442C1.46201 7.91485 1.77811 7.46625 2.17394 7.09697L8.90573 0.83449C9.47602 0.298042 10.2248 0 11.0023 0C11.7798 0 12.5285 0.298042 13.0988 0.83449L19.8283 7.09619C20.2238 7.46576 20.5395 7.91458 20.7555 8.41429C20.9715 8.914 21.0831 9.45375 21.0833 9.99947V19.6377C21.0833 20.2642 20.8381 20.8651 20.4018 21.3081C19.9654 21.7511 19.3735 22 18.7564 22Z" fill={color}/>
            <Path d="M14.8193 22C14.6167 22 14.4224 21.9241 14.2792 21.789C14.1359 21.654 14.0554 21.4708 14.0554 21.2798V16.2381C14.0554 15.474 13.7335 14.7412 13.1605 14.201C12.5875 13.6607 11.8103 13.3571 10.9999 13.3571C10.1895 13.3571 9.4123 13.6607 8.83927 14.201C8.26625 14.7412 7.94432 15.474 7.94432 16.2381V21.2798C7.94432 21.4708 7.86384 21.654 7.72058 21.789C7.57733 21.9241 7.38303 22 7.18043 22C6.97784 22 6.78354 21.9241 6.64028 21.789C6.49703 21.654 6.41654 21.4708 6.41654 21.2798V16.2381C6.41654 15.092 6.89943 13.9928 7.75897 13.1824C8.61851 12.372 9.7843 11.9167 10.9999 11.9167C12.2155 11.9167 13.3812 12.372 14.2408 13.1824C15.1003 13.9928 15.5832 15.092 15.5832 16.2381V21.2798C15.5832 21.4708 15.5027 21.654 15.3595 21.789C15.2162 21.9241 15.0219 22 14.8193 22Z" fill={color}/>
        </Svg>
    )
}

const BleedIcon = ({color, width, height}) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M9.58377 1.85675C14.811 6.74388 17.1819 12.1975 16.9891 16.2735C16.8937 18.2906 16.1778 19.9426 14.9099 21.0951C13.6386 22.2505 11.7059 23 8.99978 23C6.29369 23 4.36108 22.2505 3.08988 21.0951C1.822 19.9427 1.10623 18.2907 1.01088 16.2736C0.818224 12.1975 3.18925 6.74389 8.41639 1.85676C8.74553 1.54903 9.25463 1.54903 9.58377 1.85675Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13 13C14 15.7692 13 18.5385 10 19.4615" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    )
}

const AddIcon = () => {
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9 13C10.1046 13 11 13.8954 11 15V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V15C13 13.8954 13.8954 13 15 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H15C13.8954 11 13 10.1046 13 9V1C13 0.447715 12.5523 0 12 0C11.4477 0 11 0.447715 11 1V9C11 10.1046 10.1046 11 9 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H9Z" fill="#1E293B"/>
        </Svg>
    )
}

const TreatmentIcon = ({color}) => {
    return(
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Mask id="mask0_214_467" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                <Path d="M21 21V1.00002H1V21H21Z" fill="white" stroke="white" stroke-width="2"/>
            </Mask>
            <G mask="url(#mask0_214_467)">
                <Path d="M21.1406 16.8438V10.8711C21.1406 8.49798 19.2169 6.57423 16.8437 6.57423H5.15625C2.78313 6.57423 0.859375 8.49798 0.859375 10.8711V16.8438C0.859375 19.2169 2.78313 21.1406 5.15625 21.1406H16.8437C19.2169 21.1406 21.1406 19.2169 21.1406 16.8438Z" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M11 11.043V16.6289" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M8.20703 13.8359H13.793" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M13.793 3.65234C13.793 2.10985 12.5425 0.859377 11 0.859377C9.45751 0.859377 8.20703 2.10985 8.20703 3.65234" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </G>
        </Svg>
    )
}

const UserIcon = ({color}) => {
    return(
        <Svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.7088 11.3041C13.803 11.3041 16.3114 8.79576 16.3114 5.70155C16.3114 2.60735 13.803 0.098999 10.7088 0.098999C7.61461 0.098999 5.10626 2.60735 5.10626 5.70155C5.10626 8.79576 7.61461 11.3041 10.7088 11.3041ZM14.3114 5.70155C14.3114 7.69119 12.6985 9.30411 10.7088 9.30411C8.71918 9.30411 7.10626 7.69119 7.10626 5.70155C7.10626 3.71192 8.71918 2.099 10.7088 2.099C12.6985 2.099 14.3114 3.71192 14.3114 5.70155ZM8.72801 11.9291L8.728 11.9291L8.7279 11.929C8.55834 11.8872 8.38084 11.8433 8.19355 11.7987C7.22048 11.5671 6.06723 11.3455 4.7804 11.56C2.41934 11.9535 0.565975 13.9985 0.323548 17.0635C0.202099 18.599 1.42148 19.726 2.80795 19.7982C6.48576 19.9898 14.7477 19.9884 18.5549 19.7945C19.9687 19.7225 21.2037 18.5721 21.0988 17.0221C20.9873 15.3739 20.4542 13.9891 19.4922 13.0098C18.5215 12.0217 17.2115 11.5464 15.7525 11.5464C14.2075 11.5464 13.3091 11.7427 12.5677 11.9404C12.484 11.9627 12.4046 11.9843 12.3282 12.0051L12.3277 12.0052C11.7592 12.1598 11.3651 12.2669 10.7089 12.2669C10.0964 12.2669 9.49292 12.1179 8.72801 11.9291ZM5.1092 13.5328C5.98389 13.387 6.81205 13.5257 7.73031 13.7444C7.87106 13.7779 8.01738 13.8144 8.16828 13.8521L8.16829 13.8521C8.93852 14.0446 9.82837 14.2669 10.7089 14.2669C11.6443 14.2669 12.2796 14.0927 12.8595 13.9336C12.9348 13.913 13.0091 13.8926 13.0831 13.8729C13.6926 13.7103 14.4154 13.5464 15.7525 13.5464C16.7654 13.5464 17.5298 13.8662 18.0655 14.4114C18.6098 14.9655 19.0151 15.8523 19.1034 17.1571C19.1237 17.4569 18.8911 17.7748 18.4532 17.7971C14.7124 17.9876 6.51917 17.9888 2.91198 17.8009C2.49494 17.7792 2.29638 17.486 2.31732 17.2212C2.49954 14.9175 3.79825 13.7513 5.1092 13.5328Z" fill={color} />
        </Svg>
    )
}


const TabLayout = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(rotateValue, {
            toValue: isPopupVisible ? 1 : 0,
            duration: 300, 
            easing: Easing.linear, 
            useNativeDriver: true, 
        }).start();
    }, [isPopupVisible]);

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    return(
        <View className="flex-1">

            <View className="flex-1">
                <Tabs  
                    screenOptions={() => ({
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            height: 65,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            elevation: 0,
                            zIndex: 999,
                        },
                        tabBarShowLabel: false,
                    })}
                >
                    <Tabs.Screen 
                        name='index'
                        options={{
                            title: 'Home',
                            tabBarIcon: ({ focused }) => (                            
                                <View
                                    style={{
                                        width: 45,
                                        height: 45,
                                        borderRadius: 50,
                                        backgroundColor: focused ? "#FFE5E9" : "#F1F5F9",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 13,
                                    }}
                                >
                                    <HomeIcon color={focused ? "#F43F5E" : "#5C6679"} />
                                </View>
                            ),
                            tabBarButton: (props) => (
                                <TouchableWithoutFeedback {...props}>
                                    <View style={props.style}>
                                        {props.children}
                                    </View>
                                </TouchableWithoutFeedback>
                            ),
                        }}
                    />
                    <Tabs.Screen 
                        name='bleed'
                        options={{
                            title: 'Bleed',
                            tabBarIcon: ({ focused }) => (
                                <View
                                    style={{
                                        width: 45,
                                        height: 45,
                                        borderRadius: 50,
                                        backgroundColor: focused ? "#FFE5E9" : "#F1F5F9",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 13,
                                    }}
                                >
                                    <BleedIcon width="18" height="24" color={focused ? "#F43F5E" : "#5C6679"} />
                                </View>
                                
                            ),
                            tabBarButton: (props) => (
                                <TouchableWithoutFeedback {...props}>
                                    <View style={props.style}>
                                        {props.children}
                                    </View>
                                </TouchableWithoutFeedback>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name='add'
                        options={{
                            title: 'Add',
                            tabBarIcon: () => (
                                <>
                                    <Pressable
                                        onPress={togglePopup}
                                        activeOpacity={1}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 30,
                                            backgroundColor: "#FFF",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                            zIndex: 1000,
                                            bottom: 40,
                                            elevation: 10,
                                            shadowColor: 'rgba(0,0,0,0.6)',
                                        }}
                                    >
                                        <Animated.View style={{ transform: [{ rotate }] }}>
                                            <AddIcon />
                                        </Animated.View>
                                    
                                    </Pressable>
                                </>
                            ),
                        }}
                    />
                    <Tabs.Screen 
                        name='treatment'
                        options={{
                            title: 'Treatment',
                            tabBarIcon: ({ focused }) => (
                                <View
                                    style={{
                                        width: 45,
                                        height: 45,
                                        borderRadius: 50,
                                        backgroundColor: focused ? "#FFE5E9" : "#F1F5F9",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 13,
                                    }}
                                >
                                    <TreatmentIcon color={focused ? "#F43F5E" : "#5C6679"} />
                                </View>
                            ),
                            tabBarButton: (props) => (
                                <TouchableWithoutFeedback {...props}>
                                    <View style={props.style}>
                                        {props.children}
                                    </View>
                                </TouchableWithoutFeedback>
                            ),
                        }}
                    />
                    <Tabs.Screen 
                        name='profile'
                        options={{
                            title: 'Profile',
                            tabBarIcon: ({ focused }) => (
                                <View
                                    style={{
                                        width: 45,
                                        height: 45,
                                        borderRadius: 50,
                                        backgroundColor: focused ? "#FFE5E9" : "#F1F5F9",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 13,
                                    }}
                                >
                                    <UserIcon color={focused ? "#F43F5E" : "#5C6679"} />
                                </View>
                            ),
                            tabBarButton: (props) => (
                                <TouchableWithoutFeedback {...props}>
                                    <View style={props.style}>
                                        {props.children}
                                    </View>
                                </TouchableWithoutFeedback>
                            ),
                        }}
                    />
                </Tabs>

                {/* Popup Modal */}
                {isPopupVisible && <AddTabPopup />}

            </View>

            <Toast />
        </View>
    )
}

export default TabLayout