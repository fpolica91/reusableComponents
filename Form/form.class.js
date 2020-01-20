import React, { Component } from 'react';
import Input from './text.input';
import { Button } from 'react-native'
import { simpleValidator } from '../custom.validator';




class Form extends Component {
    state = {
        data: {},
        errors: {},
    }

    handleChange = (text, name) => {
        const errors = { ...this.state.errors }
        const errorMessage = simpleValidator(text, name)
        if (errorMessage) errors[name] = errorMessage
        else delete errors[name]
        const data = { ...this.state.data }
        data[name] = text

        this.setState({
            // data: { ...this.state.data, [name]: text },
            data,
            errors,
        })
    }



    renderButton = (label) => (
        <>
            <Button
                title={label}
            />
        </>
    )




    renderInput = (name, bool) => {
        const { data, errors, disabled } = this.state
        console.log(disabled)
        return (
            <Input
                name={name}
                secureTextEntry={bool}
                placeholder={name}
                value={data[name]}
                error={errors[name]}
                onChangeText={(text) => this.handleChange(text, [name])}
            />
        )
    }
}

export default Form;
