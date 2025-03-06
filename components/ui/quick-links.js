import { View, Text } from "react-native";

const QuickLinks = ({ icon, name }) => {
    return(
        <View className="mt-3.5 max-w-[75px] w-full">
            <View className='flex items-center justify-center w-full h-[75px] rounded-2xl bg-white'>
                {icon}
            </View>
            <Text className="font-medium text-xs leading-4 text-gray-dark mt-2.5 text-center">{name}</Text>
        </View>
    )
}

export default QuickLinks;