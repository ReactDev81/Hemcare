import { useState } from "react";
import { View, Text, FlatList, Pressable, Modal} from "react-native";
import Svg, {Path} from 'react-native-svg';
import Bleeds from '../../../assets/bleed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BleedFilters from '../../../components/bleed-filters/index';


const ElbowIcon = () => {
    return(
        <Svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M34.083 17.8197C34.083 17.8197 26.149 17.1708 22.5942 19.2987" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M21.1582 24.8012C21.1582 24.8012 22.2887 22.5081 23.0178 15.3626C23.7469 8.2172 25.4665 2.00507 25.4665 2.00507" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M14.2086 1.21899C14.2086 1.21899 8.30001 9.54941 6.07309 16.1185C3.84616 22.6876 3.67456 23.8927 3.15976 24.4489C2.04434 25.654 1.48664 27.2257 1.91564 28.8901C2.34465 30.5545 5.42568 31.8523 7.6994 32.9521C11.8607 34.962 22.6444 37.5914 34.0832 36.2051" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M5.36133 24.8012C6.20409 25.248 6.79743 26.2726 6.79743 27.4641C6.79743 28.2675 6.5291 28.9896 6.09827 29.5177" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M13.9779 8.29364C12.8773 10.4307 11.5084 13.2727 10.3877 16.1544" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M15.4138 5.14935C15.4138 5.14935 15.1297 5.74366 14.6958 6.7215" stroke="#F43F5E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        </Svg>
    )
}

const BleedIcon = () => {
    return(
        <Svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.81984 2.22283C10.0975 5.50399 11.5512 9.10693 11.358 11.797C11.2623 13.1294 10.7673 14.2219 9.91225 14.9842C9.05547 15.748 7.77333 16.237 5.99986 16.237C4.22641 16.237 2.94431 15.7481 2.08758 14.9842C1.23254 14.2219 0.737629 13.1294 0.641997 11.7971C0.448914 9.10695 1.90265 5.504 5.18026 2.22283C5.63468 1.76793 6.36543 1.76793 6.81984 2.22283L7.26202 1.78112L6.81984 2.22283Z" stroke="#F43F5E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8.66701 9.41394C9.33368 11.289 8.66701 13.1641 6.66699 13.7891" stroke="#F43F5E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}

const CheckIcon = () => {
    return(
        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11.5364 6.073C11.7805 6.31714 11.7805 6.71289 11.5364 6.95691L7.34351 11.1499C7.09937 11.3939 6.70374 11.3939 6.45959 11.1499L4.46362 9.15381C4.21948 8.90979 4.21948 8.51404 4.46362 8.27002C4.70764 8.02588 5.10339 8.02588 5.34741 8.27002L6.90149 9.8241L10.6525 6.073C10.8966 5.82898 11.2924 5.82898 11.5364 6.073ZM16 8.61145C16 13.0334 12.4214 16.6115 8 16.6115C3.578 16.6115 0 13.0328 0 8.61145C0 4.18945 3.57861 0.61145 8 0.61145C12.422 0.61145 16 4.19006 16 8.61145ZM14.75 8.61145C14.75 4.88037 11.7306 1.86145 8 1.86145C4.26892 1.86145 1.25 4.88086 1.25 8.61145C1.25 12.3425 4.26941 15.3615 8 15.3615C11.7311 15.3615 14.75 12.342 14.75 8.61145Z" fill="#14B8A6"/>
        </Svg>
    )
}

const Bleed = () => {

    const [filterModal, setFilterModal] = useState(false);

    return(
        <>
            <FlatList
                className="py-6 px-5 bg-gray-light"
                ListHeaderComponent={
                    <View className="mb-6 flex-row justify-between items-center">
                        <Text className="text-sm leading-4 font-bold text-blue-dark">All Bleeds</Text>
                        <Pressable activeOpacity={1} className="flex-row items-center" onPress={() => setFilterModal(true)}>
                            <FontAwesome name="filter" size={16} color="#F43F5E" />
                            <Text className="text-sm leading-4 font-bold text-red-dark ml-1.5">Filters</Text>
                        </Pressable>
                    </View>
                }
                ListFooterComponent={<View className="p-4"></View>}
                data={Bleeds}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View className="flex flex-row items-center justify-start rounded-2xl p-2.5 bg-white w-full mb-4">
                        <View className="p-2 rounded-full mr-4 w-20 h-20 flex items-center justify-center bg-red-light">
                            <ElbowIcon />
                        </View>
                        <View className="flex-1">
                            <Text className="text-blue-light font-bold text-xl leading-5">{item.bleed_part}</Text>
                            <View className="mt-2 flex flex-row items-end">
                                <View className="w-4">
                                    <BleedIcon />
                                </View>
                                <Text className="text-gray-dark text-xs leading-[14.5px] font-normal ml-2 flex-1">{item.bleed_time}</Text>
                            </View>
                            <View className="mt-2 flex flex-row items-end">
                                <View className="w-4">
                                    <CheckIcon />
                                </View>
                                <Text className="text-gray-dark text-xs leading-[14.5px] font-normal ml-2 flex-1">{item.bleed_time}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={filterModal}
                onRequestClose={() => setFilterModal(false)}
            >
                <BleedFilters onpress={() => setFilterModal(false)} />
            </Modal>
        </>
    )
}

export default Bleed