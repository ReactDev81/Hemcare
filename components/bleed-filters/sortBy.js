import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {useAnimatedStyle, withTiming, runOnUI} from 'react-native-reanimated';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useAccordian from '../../hooks/useAccordian';
import RadioButton from '../ui/form/radio-button';
import { useState} from 'react';


const SortBy = () => {

    const [sort, setSort] = useState('Bleed Start Date - Asc');
    const { setHeight, animatedHeightStyle, animatedRef, isOpened, handleLayout} = useAccordian();

    const sortSelection = (value) => {
        setSort(value);
    };

    const animatedChevronStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: withTiming(`${isOpened.value ? 180 : 0}deg`, { duration: 200 }) }],
    }));

    return(
        <View className="border-[#151F311A] border border-solid w-full rounded-[10px] overflow-hidden">
            <TouchableOpacity onPress={() => runOnUI(setHeight)()} activeOpacity={1}>
                <View className="flex-row items-center justify-between p-5">
                    <Text className="font-bold text-base leading-5 text-gray-dark">Sort by</Text>
                    <Animated.View style={animatedChevronStyle}>
                        <FontAwesome name="angle-down" size={24} color="#1E293B" />
                    </Animated.View>
                </View>
            </TouchableOpacity>
            <Animated.View style={animatedHeightStyle}>
                <View className="absolute top-0 left-0 w-full border-t border-solid border-[#151F311A]">
                    <View className="p-5" ref={animatedRef} collapsable={false} onLayout={handleLayout}>
                        <RadioButton 
                            classname="mb-4"
                            label="Bleed Start Date - Asc" 
                            onPress={() => sortSelection('Bleed Start Date - Asc')}
                            selectedRadio={sort}
                            selectedRadioValue="Bleed Start Date - Asc"
                        />
                        <RadioButton 
                            classname="mb-4"
                            label="Bleed Start Date - Desc" 
                            onPress={() => sortSelection('Bleed Start Date - Desc')}
                            selectedRadio={sort}
                            selectedRadioValue="Bleed Start Date - Desc"
                        />
                        <RadioButton 
                            classname="mb-4"
                            label="Bleed End Date - Asc" 
                            onPress={() => sortSelection('Bleed End Date - Asc')}
                            selectedRadio={sort}
                            selectedRadioValue="Bleed End Date - Asc"
                        />
                        <RadioButton 
                            label="Bleed End Date - Desc" 
                            onPress={() => sortSelection('Bleed End Date - Desc')}
                            selectedRadio={sort}
                            selectedRadioValue="Bleed End Date - Desc"
                        />
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}
export default SortBy