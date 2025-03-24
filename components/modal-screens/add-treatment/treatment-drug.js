import { useState } from 'react';
import { View, Text } from 'react-native';
import Select from '../../ui/form/select';
import Input from '../../ui/form/input';

const TreatmentDrug = () => {

    const [selectedValue, setSelectedValue] = useState(null); 

    return (
        <View className="w-full">

            <View className="mt-5">
                <Text className="text-gray-dark text-sm leading-4 mb-2">Drug Administered</Text>
                <Select 
                    value={selectedValue}
                    setValue={(value) => {
                        setSelectedValue(value);
                    }}  
                    placeholder="Select your drug administered" 
                    items={[
                        {label: "Kovaltry", value: "kovaltry"}, 
                        {label: "Adynovi", value: "adynovi"},
                        {label: "Elocate", value: "elocate"},
                        {label: "Ixinity", value: "ixinity"},
                        {label: "Xyntha", value: "xyntha"},
                    ]}
                /> 
            </View>

            <View className="mt-5">
                <Text className="text-gray-dark text-sm leading-4 mb-2">Dose</Text>
                <Input 
                    placeholder="Enter your dosage"
                />
            </View>

            <View className="mt-5">
                <Text className="text-gray-dark text-sm leading-4 mb-2">Unit</Text>
                <Select 
                    value={selectedValue}
                    setValue={(value) => {
                        setSelectedValue(value);
                    }}  
                    placeholder="Select unit" 
                    items={[
                        {label: "IU", value: "iu"}, 
                        {label: "MG", value: "mg"},
                        {label: "BU/ml", value: "bu_ml"},
                        {label: "Other", value: "other"},
                    ]}
                /> 
            </View>
        </View>
    )
}

export default TreatmentDrug