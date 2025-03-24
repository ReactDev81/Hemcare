import { View, Text, ImageBackground } from "react-native";
import RadioInput from "components/ui/form/radio";

const Feet = ({ selectedPart, handleBodyPartSelection }) => {
    return(
        <View>
            <Text className="text-red-dark font-bold text-sm leading-4 mb-4">{selectedPart}</Text>
            <ImageBackground
                source={require('../../../assets/images/left-feet.png')}
                className="w-[106px] h-[247px] relative"
                resizeMode="cover"
            >
                <Text className="text-gray-dark text-xs leading-[14.52px] absolute top-4 left-5">L</Text>
                <RadioInput 
                    classname="top-[150px] left-[110px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Thumb')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Thumb"
                />
                <RadioInput 
                    classname="top-[92px] left-[168px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Finger 1')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Finger 1"
                />
                <RadioInput 
                    classname="top-[50px] left-[174px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Finger 2')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Finger 2"
                />
                <RadioInput 
                    classname="top-[24px] left-[150px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Finger 3')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Finger 3"
                />
                <RadioInput 
                    classname="top-[2px] left-[108px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Finger 4')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Finger 4"
                />
                <RadioInput 
                    classname="top-[85px] left-[60px]"
                    onPress={() => handleBodyPartSelection('Left Hand - Sole')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hand - Sole"
                />
            </ImageBackground>
            <ImageBackground
                source={require('../../../assets/images/right-feet.png')}
                className="w-[106px] h-[247px] relative"
                resizeMode="cover"
            >
                <Text className="text-gray-dark text-xs leading-[14.52px] absolute top-4 left-5">R</Text>
                <RadioInput 
                    classname="top-[12px] left-[110px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Thumb')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Thumb"
                />
                <RadioInput 
                    classname="top-[72px] left-[170px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Finger 1')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Finger 1"
                />
                <RadioInput 
                    classname="top-[114px] left-[174px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Finger 2')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Finger 2"
                />
                <RadioInput 
                    classname="top-[140px] left-[150px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Finger 3')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Finger 3"
                />
                <RadioInput 
                    classname="top-[158px] left-[105px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Finger 4')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Finger 4"
                />
                <RadioInput 
                    classname="top-[80px] left-[60px]"
                    onPress={() => handleBodyPartSelection('Right Hand - Sole')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hand - Sole"
                />
            </ImageBackground>
        </View>
    )
}

export default Feet;