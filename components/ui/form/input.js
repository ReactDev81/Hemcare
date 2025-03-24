import React, { useState } from 'react';
import { View, TextInput} from "react-native";

const Input = ({setValue, value, placeholder}) => {
    const [isFocused, setIsFocused] = useState(false); 
    return(
        <View className={`border border-solid rounded-[10px] bg-transparent py-3 px-5 ${isFocused ? 'border-green-dark' : 'border-gray-dark'}`}>
            <TextInput
                className={`text-sm leading-4 font-normal tracking-[0.3px] ${isFocused ? 'text-green-dark' : 'text-gray-dark'}`}
                onChangeText={setValue}
                value = {value}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
        
    )
}

export default Input