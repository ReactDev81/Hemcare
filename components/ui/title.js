import { View, Text } from "react-native";

const Title = ({text, classname}) => {
    return(
        <View>
            <Text className={`text-blue-dark text-3xl leading-[40.47px] font-bold tracking-[0.3px] ${classname}`}>{text}</Text>
        </View>
    )
}

export default Title