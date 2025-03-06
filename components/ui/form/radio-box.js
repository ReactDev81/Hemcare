import {View, Pressable, Text} from 'react-native';
import { useState } from 'react';

const RadioBox = ({classname, onPress, selectedRadio, selectedRadioValue, label, icon, green}) => {
    return(
        <Pressable className={`${classname} flex-row items-center`} onPress={onPress} activeOpacity={1}>
            <View className={`items-center justify-center w-full h-[72px] rounded-[10px] border border-solid ${selectedRadio === selectedRadioValue ?  `${green ? 'bg-green-light' : 'bg-red-light'} ${green ? 'border-green-dark' : 'border-red-dark'}` : 'border-[#5C667933] bg-gray-light'}`}>
                {icon}
                <Text className={`text-xs font-medium leading-[14.4px] mt-2 ${selectedRadio === selectedRadioValue ?  `${green ? 'text-green-dark' : 'text-red-dark'}` : 'text-gray-dark'}`}>{label}</Text>
            </View>
        </Pressable>
    )
}

export default RadioBox