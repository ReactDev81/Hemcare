import {View, Pressable, Text} from 'react-native';

const RadioButton = ({classname, onPress, selectedRadio, selectedRadioValue, label, green}) => {
    return(
        <Pressable className={`${classname} flex-row items-center gap-x-2`} onPress={onPress} activeOpacity={1}>
            <View className={`w-[18px] h-[18px] items-center justify-center rounded-full p-1 border border-solid ${selectedRadio === selectedRadioValue ? `${green ? 'border-green-dark' : 'border-red-dark'}` : 'border-gray-dark'}`}>
                {
                    selectedRadio === selectedRadioValue && 
                    <View className={`w-2.5 h-2.5 rounded-full ${green ? 'bg-green-dark' : 'bg-red-dark'}`} />
                }
                
            </View>
            <Text className={`text-sm font-medium leading-4 text-gray-dark`}>{label}</Text>
        </Pressable>
    )
}

export default RadioButton