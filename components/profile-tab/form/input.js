import { View, TextInput, Text} from "react-native";

const Input = ({setValue, value, placeholder, label, marginTop}) => {
    return (
        <View className={`${marginTop} border-b border-solid border-[#5C667933]`}>
            <Text className="font-figtree-bold text-base leading-5 text-blue-light pb-2.5">{label}</Text>
            <TextInput 
                className={`text-lg leading-[21.6px] font-figtree-normal text-gray-dark pb-3 `}
                onChangeText={setValue}
                value = {value}
                placeholder={placeholder}
            />
        </View>
    )
}

export default Input;
