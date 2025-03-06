import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import FlatButton from '../../../components/ui/FlatButton'
import Input from "../../../components/profile-tab/form/input";
import RadioButton from "../../../components/ui/form/radio-button";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from "formik";
import * as Yup from 'yup';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const ResidentialDetails  = () => {

    const [gender, setGender] = useState('Male');

    const genderSelection = (value) => {
        setGender(value);
    };

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const userSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
        phone: Yup.string()
            .required('Hemophilia type is required'),
    });

    return(
        <ScrollView>
            <View className="flex-1">

                <View className="bg-red-light">
                    <View className="pt-10 pb-20 justify-center items-center relative">
                        <View className="w-28 h-28 rounded-full bg-[#FFBE98]">
                            <View className="w-full h-full overflow-hidden rounded-full items-center justify-end">
                                <Image source={require('../../../assets/user.png')} resizeMode="contain" />
                            </View>
                            <Pressable className="w-9 h-9 rounded-full items-center justify-center absolute bottom-2 -right-2 bg-red-dark" activeOpacity={1}>
                                <Feather name="camera" size={18} color="white" />
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View className="bg-gray-light w-full h-full px-5 pb-10">
                    <View className="bg-white p-5 rounded-[10px] -mt-12">
                        <Formik
                            initialValues={{ name: 'Rowan Atkinson', phone: '+123-456-789', email: 'rowanatkinson@gmail.com'}}
                            onSubmit={values => console.log(values)}
                            validationSchema={userSchema}
                        >
                            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                                <View className="mt-5">

                                    {/* name */}
                                    <Input 
                                        label="Name"
                                        placeholder={values.name} 
                                        value={values.name} 
                                        setValue={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                    />
                                    {errors.name && <Text className="pt-1.5 text-red-dark">{errors.name}</Text>}

                                    {/* phone */}
                                    <Input 
                                        label="Phone"
                                        placeholder={values.phone} 
                                        value={values.phone} 
                                        setValue={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        marginTop="mt-5"
                                    />
                                    {errors.phone && <Text className="pt-1.5 text-red-dark">{errors.phone}</Text>}

                                    {/* email */}
                                    <Input 
                                        label="Email"
                                        placeholder={values.email} 
                                        value={values.email} 
                                        setValue={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        marginTop="mt-5"
                                    />
                                    {errors.email && <Text className="pt-1.5 text-red-dark">{errors.email}</Text>}

                                    {/* gender */}
                                    <View className="mt-5">
                                        <Text className="font-figtree-bold text-base leading-5 text-blue-light pb-5">Gender</Text>
                                        <View className="flex-row border-b border-solid border-[#5C667933] pb-1">
                                            <RadioButton 
                                                classname="mb-4 mr-4"
                                                label="Male" 
                                                onPress={() => genderSelection('Male')}
                                                selectedRadio={gender}
                                                selectedRadioValue="Male"
                                            />
                                            <RadioButton 
                                                classname="mb-4"
                                                label="Female" 
                                                onPress={() => genderSelection('Female')}
                                                selectedRadio={gender}
                                                selectedRadioValue="Female"
                                            />
                                        </View>
                                    </View>

                                    {/* date of birth */}
                                    <Pressable onPress={() => setShow(true)} className="mt-5" activeOpacity={1}>
                                        <Text className="font-figtree-bold text-base leading-5 text-blue-light pb-5">Date of Birth</Text>
                                        <View className="flex-row items-start justify-between border-b border-solid border-[#5C667933]">
                                            <Text className="text-lg leading-[21.6px] font-figtree-normal text-gray-dark pb-4">{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                                            <Ionicons name="calendar-clear" size={24} color="#5C6679" />
                                        </View>
                                    </Pressable>

                                    {show && (
                                        <DateTimePicker
                                            value={date}
                                            mode="date"
                                            is24Hour={true}
                                            display="default"
                                            onChange={onChange}
                                        />
                                    )}

                                    <FlatButton onPress={handleSubmit} text="Save" classname="mt-10 bg-red-dark" />
                                </View>
                            )}
                            
                        </Formik>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default ResidentialDetails ;