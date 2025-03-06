import { useState } from "react";
import { View, Text, FlatList, Pressable, Modal} from "react-native";
import Svg, {Path} from 'react-native-svg';
import Treatments from '../../../assets/treatments';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TreatmentFilters from "../../../components/treatment-fliters";

const ElbowIcon = () => {
    return(
        <Svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M34.083 17.8197C34.083 17.8197 26.149 17.1708 22.5942 19.2987" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M21.1582 24.8012C21.1582 24.8012 22.2887 22.5081 23.0178 15.3626C23.7469 8.2172 25.4665 2.00507 25.4665 2.00507" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M14.2086 1.21899C14.2086 1.21899 8.30001 9.54941 6.07309 16.1185C3.84616 22.6876 3.67456 23.8927 3.15976 24.4489C2.04434 25.654 1.48664 27.2257 1.91564 28.8901C2.34465 30.5545 5.42568 31.8523 7.6994 32.9521C11.8607 34.962 22.6444 37.5914 34.0832 36.2051" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M5.36133 24.8012C6.20409 25.248 6.79743 26.2726 6.79743 27.4641C6.79743 28.2675 6.5291 28.9896 6.09827 29.5177" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M13.9779 8.29364C12.8773 10.4307 11.5084 13.2727 10.3877 16.1544" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path d="M15.4138 5.14935C15.4138 5.14935 15.1297 5.74366 14.6958 6.7215" stroke="#14B8A6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        </Svg>
    )
}

const Treatment = () => {
    const [filterModal, setFilterModal] = useState(false);
    return(
        <>
            <FlatList
                className="py-6 px-5 bg-gray-light"
                ListHeaderComponent={
                    <View className="mb-6 flex-row justify-between items-center">
                        <Text className="text-sm leading-4 font-bold text-blue-dark">All Treatments</Text>
                        <Pressable activeOpacity={1} className="flex-row items-center" onPress={() => setFilterModal(true)}>
                            <FontAwesome name="filter" size={16} color="#14B8A6" />
                            <Text className="text-sm leading-4 font-bold text-green-dark ml-1.5">Filters</Text>
                        </Pressable>
                    </View>
                }
                ListFooterComponent={<View className="p-4"></View>}
                data={Treatments}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View className="flex flex-row items-center justify-start rounded-2xl p-2.5 bg-white w-full mb-4">
                        <View className="p-2 rounded-full mr-4 w-20 h-20 flex items-center justify-center bg-green-light">
                            <ElbowIcon />
                        </View>
                        <View className="flex-1">
                            <Text className="text-blue-light font-figtree-bold text-xl leading-5">{item.treated_part_name}</Text>
                            <Text className="mt-2 text-gray-dark text-xs leading-[14.5px] font-figtree-normal flex-1">
                                <Text className="font-figtree-medium">Medicine:</Text> {item.medicine}
                            </Text>
                            <Text className="mt-1 text-gray-dark text-xs leading-[14.5px] font-figtree-normal flex-1">
                                <Text className="font-figtree-medium">Dose:</Text> {item.dose}
                            </Text>
                            <Text className="mt-1 text-gray-dark text-xs leading-[14.5px] font-figtree-normal flex-1">
                                <Text className="font-figtree-medium">Administrated:</Text> {item.administrated}
                            </Text>
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
                <TreatmentFilters onpress={() => setFilterModal(false)} />
            </Modal>
        </>
    )
}

export default Treatment