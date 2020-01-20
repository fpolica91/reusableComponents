import React, { useState } from 'react';


export function simpleValidator(value, name) {
    let errors = {
        username_errors: {},
        password_errors: {},
        email: {}
    }
    const alphumeric = /^[0-9a-zA-Z]+$/
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const test = name.toString()
    let str;
    let strUpper = false
    let strNum = false
    switch (test) {
        // VALIDATES USERNAME BEING ALPHANUMBERIC AND AT LEAST 6 CHARS
        case "username":
            if (value.length <= 5) {
                errors["username_errors"] = "Username must be at least 6 characters"
                return errors["username_errors"]
            } else {
                if (!value.match(alphumeric)) {
                    errors["username_errors"] = "Username can only contain alphanumeric characters"
                    return errors["username_errors"]
                } else {
                    return null
                }
            }

        // VALIDATES PASSWORD HAVING AT LEAST 6 CHARS, ONE UPPERCASE, ONE NUM
        case "password":
            if (value.length < 6) {
                errors['password_errors'] = "password must be at least 6 characters"
                return errors['password_errors']
            } else {
                for (let i = 0; i < value.length; i++) {
                    str = value.charAt(i)
                    if (str.toUpperCase() === str) {
                        strUpper = true
                    }
                    if (!isNaN(str)) {
                        strNum = true
                    }
                }
                if (!strUpper) {
                    errors['password_errors'] = "Password must contain at least one uppercase letter"
                    return errors['password_errors']
                }
                if (!strNum) {
                    errors['password_errors'] = "Password must contain at least one number"
                    return errors['password_errors']
                }
                else {
                    return null
                }
            }
        // VALIDATES EMAIL HAVING AN @ 
        case "email":
            if (!value.toLowerCase().match(emailValidator)) {
                errors['email'] = "Please Check Your Email"
                return errors['email']
            }
    }
}