import { View, Text, Pressable} from "react-native";
import { Link, useRouter} from "expo-router";
import { useState } from "react"
import { Formik } from "formik";
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Path } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import useAxios from "hooks/useAxios";
import Toast from 'react-native-toast-message';
import Title from "../../components/ui/title"
import Select from "../../components/ui/form/select"
import Input from "../../components/ui/form/input"
import PasswordInput from "../../components/ui/form/password-input"
import FlatButton from "../../components/ui/FlatButton"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

const Register = () => {

    const { loading, fetchData } = useAxios('/signup', 'post');
    
    const [selectedValue, setSelectedValue] = useState(null); 
    const [show, setShow] = useState(false);
    const router = useRouter();

    const userSchema = Yup.object().shape({
        hemophilia_type: Yup.string()
            .required('Hemophilia type is required'),
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
        date_of_birth: Yup.date().required('Date of Birth is required')
            .typeError('Invalid date'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    return (
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Register" />
            <Text className="mt-3.5 text-[#1D4A7A] text-sm">
                Already have an account ? <Link className="text-[#C41B33]" href="auth/login">Login</Link>
            </Text>
            
            <Formik
                initialValues={{ name: '', email: '', date_of_birth: '', password: '', hemophilia_type: ''}}
                validationSchema={userSchema}
                onSubmit={async ( values, { resetForm }) => {
                    try{
                        const response = await fetchData({ 
                            data: {
                                ...values, 
                                password_confirmation: values.password,
                            } 
                        });
                        if (response.data.token) {
                            await AsyncStorage.setItem('userData', JSON.stringify(response.data));
                        } 
                        Toast.show({
                            type: 'success',
                            text1: '👋 Hi ' + response.data.user.name,
                            text2: 'You have registred successfully',
                        });
                        router.push('/(drawer)');
                        resetForm();
                    }catch (err){
                        Toast.show({
                            type: 'error',
                            text1: 'Login Failed',
                            text2: err.response?.data?.message || 'Something went wrong. Please try again.',
                        });
                    }
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (

                    <View className="w-full mt-10">

                        <Select 
                            value={selectedValue}
                            setValue={(value) => {
                                setSelectedValue(value);
                                setFieldValue('hemophilia_type', value);
                            }}  
                            placeholder="Hemophilia Type" 
                            items={[
                                {label: "Hemophilia A", value: "hemophilia-a"}, 
                                {label: "Hemophilia B", value: "hemophilia-b"},
                            ]}
                        />
                        {errors.hemophilia_type && <Text className="pt-1.5 text-red-dark">{errors.hemophilia_type}</Text>}

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

                        <View>
                            <Pressable onPress={() => setShow(true)} className="mt-5" activeOpacity={1}>
                                <View className={`border border-solid rounded-[10px] py-5 px-5 bg-transparent mt-1 flex flex-row items-center justify-between border-gray-dark`}>
                                    <Text className="text-gray-dark text-sm leading-4">
                                        {values.date_of_birth ? new Date(values.date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Date of Birth"}
                                    </Text>
                                    <View>
                                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.8974 2.13333V0.769231C15.8974 0.565218 15.8164 0.369561 15.6721 0.225302C15.5279 0.0810436 15.3322 0 15.1282 0C14.9242 0 14.7285 0.0810436 14.5843 0.225302C14.44 0.369561 14.359 0.565218 14.359 0.769231V2.05128H5.64103V0.769231C5.64103 0.565218 5.55998 0.369561 5.41572 0.225302C5.27146 0.0810436 5.07581 0 4.8718 0C4.66778 0 4.47213 0.0810436 4.32787 0.225302C4.18361 0.369561 4.10256 0.565218 4.10256 0.769231V2.13333C2.96101 2.31376 1.92108 2.89496 1.16925 3.77272C0.417428 4.65047 0.00289719 5.76736 0 6.92308V15.1282C0 16.4203 0.513277 17.6594 1.42692 18.5731C2.34055 19.4867 3.57971 20 4.8718 20H15.1282C16.4203 20 17.6594 19.4867 18.5731 18.5731C19.4867 17.6594 20 16.4203 20 15.1282V6.92308C19.9971 5.76736 19.5826 4.65047 18.8307 3.77272C18.0789 2.89496 17.039 2.31376 15.8974 2.13333ZM4.8718 3.58974H15.1282C15.8763 3.59257 16.6018 3.847 17.1878 4.31209C17.7738 4.77718 18.1863 5.42589 18.359 6.15385H1.64103C1.81367 5.42589 2.22619 4.77718 2.8122 4.31209C3.39822 3.847 4.12365 3.59257 4.8718 3.58974ZM15.1282 18.4615H4.8718C3.98857 18.4588 3.1423 18.1068 2.51776 17.4822C1.89323 16.8577 1.54117 16.0114 1.53846 15.1282V7.69231H18.4615V15.1282C18.4588 16.0114 18.1068 16.8577 17.4822 17.4822C16.8577 18.1068 16.0114 18.4588 15.1282 18.4615Z" fill="#5C6679"/>
                                            <Path d="M15.1923 12H9.80769C9.59348 12 9.38804 12.1054 9.23657 12.2929C9.0851 12.4804 9 12.7348 9 13C9 13.2652 9.0851 13.5196 9.23657 13.7071C9.38804 13.8946 9.59348 14 9.80769 14H15.1923C15.4065 14 15.612 13.8946 15.7634 13.7071C15.9149 13.5196 16 13.2652 16 13C16 12.7348 15.9149 12.4804 15.7634 12.2929C15.612 12.1054 15.4065 12 15.1923 12Z" fill="#5C6679"/>
                                            <Path d="M6.1 12H4.9C4.66131 12 4.43239 12.1054 4.2636 12.2929C4.09482 12.4804 4 12.7348 4 13C4 13.2652 4.09482 13.5196 4.2636 13.7071C4.43239 13.8946 4.66131 14 4.9 14H6.1C6.3387 14 6.56761 13.8946 6.7364 13.7071C6.90518 13.5196 7 13.2652 7 13C7 12.7348 6.90518 12.4804 6.7364 12.2929C6.56761 12.1054 6.3387 12 6.1 12Z" fill="#5C6679"/>
                                        </Svg>
                                    </View>
                                </View>
                            </Pressable>
                            {errors.date_of_birth && <Text className="pt-1.5 text-red-dark">{errors.date_of_birth}</Text>}

                            {show && (
                                <DateTimePicker
                                    value={values.date_of_birth ? new Date(values.date_of_birth) : new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShow(false);
                                        if (selectedDate) {
                                            setFieldValue('date_of_birth', selectedDate.toISOString().split('T')[0]);
                                        }
                                    }}
                                />
                            )}
                        </View>

                        <PasswordInput 
                            value={values.password} 
                            setValue={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && <Text className="pt-1.5 text-red-dark">{errors.password}</Text>}

                        <FlatButton onPress={handleSubmit} text={loading ? 'Loading...' : 'Sign up'} classname="mt-10 bg-red-dark" />
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