import { useState } from 'react';
import { Text, View } from 'react-native';
import Select from '../../ui/form/select';

const TreatmentInfo = () => {

    const [selectedValue, setSelectedValue] = useState(null); 

    return (
        <View className="w-full">
            <View className="mt-5">
                <Text className="text-gray-dark text-sm leading-4 mb-2">Reason for treatment</Text>
                <Select 
                    value={selectedValue}
                    setValue={(value) => {
                        setSelectedValue(value);
                    }}  
                    placeholder="Select treatment" 
                    items={[
                        {label: "Prophylaxis", value: "prophylaxis"}, 
                        {label: "On demand (bleed)", value: "on_demand_bleed"},
                        {label: "Treatment before activity", value: "treatment_before_activity"},
                        {label: "Surgery / Procedure", value: "surgery_procedure"}, 
                        {label: "Immune Tolerance Induction (ITI)", value: "immune_tolerance_induction_iti"},
                        {label: "Other", value: "other"},
                    ]}
                /> 
            </View>
        </View>
    )
}
export default TreatmentInfo