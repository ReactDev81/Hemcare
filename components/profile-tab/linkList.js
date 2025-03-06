import { View, Text, Pressable } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const LinkList = ({icon, text, classname, onpress}) => {
    return(
        <Pressable onPress={onpress} activeOpacity={1} className={`flex-row items-center justify-between pb-5 border-b border-solid border-[#5C667933] mb-5 ${classname}`}>
            <View className="flex-row items-center gap-x-5">
                <View className="w-8 h-8 border border-solid border-[#5C667933] rounded-md items-center justify-center">
                    {icon}
                </View>
                <Text className="font-figtree-semibold text-base leading-5 text-blue-light">{text}</Text>
            </View>
            <FontAwesome6 name="angle-right" size={18} color="#5C6679" />
        </Pressable>
    )
}

export default LinkList