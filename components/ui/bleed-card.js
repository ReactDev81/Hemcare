import { View, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FlatButton from '../ui/FlatButton'

const BleedCard = ({icon, iconBg}) => {
    return (
        <View className={`flex flex-row items-center justify-between rounded-2xl p-3.5 border border-solid border-gray-light bg-white`}>
            <View className="flex flex-row items-center">
                <View className={`${iconBg} p-2 rounded-full mr-3 w-14 h-14 flex items-center justify-center`}>{icon}</View>
                <View className="pr-2">
                    <Text className="text-blue-light font-medium text-xl leading-6">Right Elbow</Text>
                    <View className="mt-1 flex flex-row items-center">
                        <MaterialCommunityIcons name="clock" size={18} color="#5C6679" />
                        <Text className="text-gray-dark text-xs leading-[14.5px] font-normal ml-1">23 Aug, 2024 at 3:45 pm</Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatButton text="Resolve" classname="bg-red-dark py-1.5 px-5 rounded-[5px]" />
            </View>
        </View>
    );
}

export default BleedCard;