import { Pressable, Text} from "react-native";

const FlatButton = ({text, onPress, classname, textColor}) => {
    return(
        <Pressable onPress={onPress} className={`block rounded-[10px] py-4 text-center ${classname}`}>
            <Text className={`font-semibold text-base leading-5 text-center ${textColor ? textColor : 'text-white'}`}>{text}</Text>
        </Pressable>
    )
}

export default FlatButton