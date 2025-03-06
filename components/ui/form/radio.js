import {View, Pressable} from 'react-native';

const RadioInput = ({classname, onPress, selectedRadio, selectedRadioValue}) => {
    return(
        <Pressable className={`${classname} absolute`} onPress={onPress}>
            <View className={`w-4 h-4 rounded-full border border-solid border-red-dark ${selectedRadio === selectedRadioValue ?  'bg-red-dark' : 'bg-red-light'}`} />
        </Pressable>
    )
}

export default RadioInput