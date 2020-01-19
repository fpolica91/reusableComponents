import React from 'react';
import { TextInput, View, Text } from 'react-native'

const Input = ({ placeholder, ...rest }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                name={placeholder}
                {...rest}
            />
        </View>
    );
}

export default Input;