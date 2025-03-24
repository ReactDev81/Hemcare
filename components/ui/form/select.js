import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Picker } from '@react-native-picker/picker';

const Select = ({setValue, value, placeholder, items}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View className={`relative flex justify-center border border-solid rounded-[10px] py-0.5 px-0.5 bg-transparent ${isFocused ? 'border-green-dark' : 'border-gray-dark'}`}>
        <Picker
          selectedValue={value}
          onValueChange={setValue}
          style={[
            styles.picker,
            {color: isFocused ? '#14B8A6' : '#5C6679'},
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <Picker.Item label={placeholder} value="" />
          {items.map((item, index) => { 
            return(
              <Picker.Item key={index} label={item.label} value={item.value} />
            )
          })}
        </Picker>
        <FontAwesome6 
          name="chevron-down" 
          size={16} 
          color={isFocused ? '#14B8A6' : '#5C6679'} 
          style={styles.icon} 
        />
      </View>  
    );
};
  
  const styles = StyleSheet.create({
    picker: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 16,
      letterSpacing: '0.3px',
      color: 'red'
    },
    icon: {
      position: 'absolute',
      backgroundColor: '#fff',
      right: 15, 
      top: '50%',
      transform: [{ translateY: -5 }], 
    },
  });

export default Select;