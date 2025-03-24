import { View, Text, ImageBackground } from "react-native";
import RadioInput from "components/ui/form/radio";

const FullBody = ({ selectedPart, handleBodyPartSelection }) => {
    return(
        <View>
            <Text className="text-red-dark font-bold text-sm leading-4 mb-4">{selectedPart}</Text>
            <ImageBackground
                source={require('../../../assets/images/body.png')}
                className="w-[155px] h-[477px] relative ml-4"
                resizeMode="cover"
            >
                <Text className="text-gray-dark text-xs leading-[14.52px] absolute top-2/4 -left-6">R</Text>
                <Text className="text-gray-dark text-xs leading-[14.52px] absolute top-2/4 -right-6">L</Text>
                <RadioInput 
                    classname="top-[15px] left-[70px]"
                    onPress={() => handleBodyPartSelection('Head')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Head"
                />
                <RadioInput 
                    classname="top-[64px] left-[70px]"
                    onPress={() => handleBodyPartSelection('Jaw')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Jaw"
                />
                <RadioInput 
                    classname="top-[98px] left-[18px]"
                    onPress={() => handleBodyPartSelection('Right Shoulder')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Shoulder"
                />
                <RadioInput 
                    classname="top-[98px] left-[120px]"
                    onPress={() => handleBodyPartSelection('Left Shoulder')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Shoulder"
                />
                <RadioInput 
                    classname="top-[130px] left-[70px]"
                    onPress={() => handleBodyPartSelection('Chest')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Chest"
                />
                <RadioInput 
                    classname="top-[170px] left-[7px]"
                    onPress={() => handleBodyPartSelection('Right Elbow')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Elbow"
                />
                <RadioInput 
                    classname="top-[170px] left-[132px]"
                    onPress={() => handleBodyPartSelection('Left Elbow')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Elbow"
                />
                <RadioInput 
                    classname="top-[240px] left-[4px]"
                    onPress={() => handleBodyPartSelection('Right Wrist')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Wrist"
                />
                <RadioInput 
                    classname="top-[240px] left-[135px]"
                    onPress={() => handleBodyPartSelection('Left Wrist')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Wrist"
                />
                <RadioInput 
                    classname="top-[220px] left-[40px]"
                    onPress={() => handleBodyPartSelection('Right Hip')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Hip"
                />
                <RadioInput 
                    classname="top-[220px] left-[100px]"
                    onPress={() => handleBodyPartSelection('Left Hip')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Hip"
                />
                <RadioInput 
                    classname="top-[350px] left-[44px]"
                    onPress={() => handleBodyPartSelection('Right Knee')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Knee"
                />
                <RadioInput 
                    classname="top-[350px] left-[96px]"
                    onPress={() => handleBodyPartSelection('Left Knee')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Knee"
                />
                <RadioInput 
                    classname="top-[442px] left-[52px]"
                    onPress={() => handleBodyPartSelection('Right Ankle')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Right Ankle"
                />
                <RadioInput 
                    classname="top-[442px] left-[87px]"
                    onPress={() => handleBodyPartSelection('Left Ankle')}
                    selectedRadio={selectedPart}
                    selectedRadioValue="Left Ankle"
                />
            </ImageBackground>
        </View>
    )
}

export default FullBody;