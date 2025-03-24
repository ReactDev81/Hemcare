import { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import FlatButton from 'components/ui/FlatButton';
import ModalHeader from "../../ui/modal-header";
import ProphylaxisDate from './prophylaxis-date';
import ProphylaxisDrug from './prophylaxis-drug';

const AddProphylaxis = ({ visible, onClose }) => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };
    
    const previousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const goToStep = (selectedStep) => {
        setStep(selectedStep);
    };

    const StepIndicator = () => (
        <View className="flex-row justify-around mb-5 bg-white p-3 rounded-[10px]">
            <Pressable onPress={() => goToStep(1)} className="items-center gap-y-1.5" activeOpacity={1}>
                <View className={`w-12 h-12 relative rounded-full flex items-center justify-center ${step === 1 ? 'bg-red-light' : 'bg-gray-light'}`}>
                    <View className={`w-[10px] h-[10px] absolute -bottom-1 left-5 rotate-45 ${step === 1 ? 'bg-red-light' : 'bg-transparent'}`}></View>
                    <FontAwesome6 name="calendar" size={24} color={step === 1 ? '#F43F5E' : '#5C6679'} />
                </View>
                <Text className={`text-sm leading-4 ${step === 1 ? 'text-red-dark' : 'text-gray-dark'}`}>Date</Text>
            </Pressable>
            <Pressable onPress={() => goToStep(2)} className="items-center gap-y-1.5" activeOpacity={1}>
                <View className={`w-12 h-12 relative rounded-full flex items-center justify-center ${step === 2 ? 'bg-red-light' : 'bg-gray-light'}`}>
                    <View className={`w-[10px] h-[10px] absolute -bottom-1 left-5 rotate-45 ${step === 2 ? 'bg-red-light' : 'bg-transparent'}`}></View>
                    <Fontisto name="injection-syringe" size={24} color={step === 2 ? '#F43F5E' : '#5C6679'} />
                </View>
                <Text className={`text-sm leading-4 ${step === 2 ? 'text-red-dark' : 'text-gray-dark'}`}>Drug</Text>
            </Pressable>
        </View>
    );

    return(
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            transparent={true}
        >
            <View className="flex-1 justify-start bg-white h-full">
            
                <ModalHeader onPress={onClose} />

                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View className="p-5 w-full bg-gray-light h-full">
                    
                        <StepIndicator />

                        <View className="p-5 bg-white w-full rounded-[10px]">
                            {step === 1 && (
                                <View>
                                    <Text className="text-blue-dark font-semibold text-lg leading-[21.6px]">Enter date and time of your treatment</Text>
                                    <ProphylaxisDate />
                                </View>
                            )}
                            {step === 2 && (
                                <View>
                                    <Text className="text-blue-dark font-semibold text-lg leading-[21.6px]">Enter drug and dose administered</Text>
                                    <ProphylaxisDrug />
                                </View>
                            )}
                        </View>

                        {/* Previous/Next Buttons */}
                        <View className="flex-row justify-between mt-5">
                            {step < 2 ? (
                                <FlatButton onPress={nextStep} text="Next" classname="bg-red-dark flex-1 ml-2" />
                            ) : (
                                <>
                                    <FlatButton onPress={previousStep} text="Previous" classname={`bg-red-light flex-1 mr-2`} textColor="text-red-dark" />
                                    <FlatButton onPress={onClose} text="Submit" classname="bg-red-dark flex-1 ml-2" />
                                </>
                            )}
                        </View>

                    </View>
                </ScrollView>

            </View>
        </Modal>
    )
}

export default AddProphylaxis;