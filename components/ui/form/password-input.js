import { useState } from 'react';
import { View, TextInput} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const PasswordInput = ({setValue, value}) => {

    const [show, setShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false); 
    return(
        <View className={`border border-solid rounded-[10px] py-3 px-5 bg-transparent mt-5 flex flex-row items-center justify-between ${isFocused ? 'border-green-dark' : 'border-gray-dark'}`}>
            <TextInput
                className={`text-sm leading-4 font-normal tracking-[0.3px] mr-3 flex-1 ${isFocused ? 'text-green-dark' : 'text-gray-dark'}`}
                onChangeText={setValue}
                value = {value}
                placeholder="Password"
                secureTextEntry={show ? true : false}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {show ?  <MaterialCommunityIcons onPress={() => setShow(false)} name="eye-off" size={24} color={isFocused ? '#14B8A6' : '#5C6679'} /> : <MaterialCommunityIcons onPress={() => setShow(true)} name="eye" size={24} color={isFocused ? '#14B8A6' : '#5C6679'} />}
        </View>
        
    )
}

export default PasswordInput 