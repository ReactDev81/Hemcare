import { View , Text} from "react-native"
import Toast from 'react-native-toast-message';
import Title from "../../components/ui/title"
import { Link, useRouter} from "expo-router"
import Select from "../../components/ui/form/select"
import Input from "../../components/ui/form/input"
import PasswordInput from "../../components/ui/form/password-input"
import FlatButton from "../../components/ui/FlatButton"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react"
import { Formik } from "formik";
import * as Yup from 'yup';


const Register = () => {
    const [selectedValue, setSelectedValue] = useState(null); 
    const router = useRouter();

    const userSchema = Yup.object().shape({
        hemophiliaType: Yup.string()
            .required('Hemophilia type is required'),
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    return (
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Register" />
            <Text className="mt-3.5 text-[#1D4A7A] text-sm">Already have an account ? <Link className="text-[#C41B33]" href="auth/login">Login</Link></Text>
            
            <Formik
                initialValues={{name: '', email: '', password: '', hemophiliaType: ''}}
                onSubmit={(values, {resetForm }) => {
                    Toast.show({
                        type: 'success',
                        text1: '👋 Hi ' + values.name,
                        text2: 'You have registred successfully',
                    });
                    router.push('/(drawer)');
                    resetForm();
                }}
                validationSchema={userSchema}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <View className="w-full mt-10">
                        <Select 
                            value={selectedValue}
                            setValue={(value) => {
                                setSelectedValue(value);
                                handleChange('hemophiliaType')(value); 
                            }}  
                            placeholder="Hemophilia Type" 
                            items={[
                                {label: "Hemophilia A", value: "hemophilia_a"}, 
                                {label: "Hemophilia B", value: "hemophilia_b"},
                            ]}
                        />
                        {errors.hemophiliaType && <Text className="pt-1.5 text-red-dark">{errors.hemophiliaType}</Text>}
                        <View className="mt-5">
                            <Input 
                                placeholder="Full Name" 
                                value={values.name} 
                                setValue={handleChange('name')}
                                onBlur={handleBlur('name')}
                            />
                            {errors.name && <Text className="pt-1.5 text-red-dark">{errors.name}</Text>}
                        </View>
                        
                        <View className="mt-5">
                            <Input 
                                placeholder="Email Address"
                                value={values.email}
                                setValue={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                            {errors.email && <Text className="pt-1.5 text-red-dark">{errors.email}</Text>}
                        </View>
                        <PasswordInput 
                            value={values.password} 
                            setValue={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && <Text className="pt-1.5 text-red-dark">{errors.password}</Text>}
                        <FlatButton onPress={handleSubmit} text="Sign up" classname="mt-10 bg-red-dark" />
                    </View>
                )}
            </Formik>

            {/* spreator */}
            <View className="max-w-[300px] w-full mt-10 relative flex justify-center items-center">
                <View className="bg-[#E0E5EB] h-[2px] w-full absolute"></View>
                <Text className="text-[#637F9C] tracking-[0.3px] text-xs h-[18px] w-[98px] bg-white text-center">or sign up with</Text>
            </View>

            {/* social media login */}
            <View className="flex justify-between items-center flex-row gap-x-[26px] mt-8">
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="google" size={24} color="#DB4437" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="apple1" size={24} color="#000000" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                </View>
            </View>


        </View>
    )
}

export default Register


