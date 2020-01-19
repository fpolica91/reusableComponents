import React, { Component } from 'react';
import Input from './text.input';


class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    handleChange = (text, name) => {
        this.setState({
            data: { ...this.state.data, [name]: text }
        })
    }


    renderInput = (name) => {
        const { data } = this.state
        console.log(data)
        return (
            <Input
                placeholder={name}
                value={data[name]}
                onChangeText={(text) => this.handleChange(text, [name])}
            />
        )
    }
}

export default Form;