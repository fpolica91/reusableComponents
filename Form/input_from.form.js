import React from 'react';
import { TextInput, View, Text } from 'react-native'

const Input = ({ placeholder, error, name, ...rest }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                name={placeholder}
                {...rest}
            />
            {error && <Text>{error}</Text>}
        </View>
    );
}

export default Input;