export function simpleValidator(value, name) {
    let errors = {
        username_errors: {},
        password_errors: {}
    }


    const alphumeric = /^[0-9a-zA-Z]+$/
    const test = name.toString()
    let str;
    let strUpper = false
    switch (test) {
        case "username":
            if (value.length <= 5) {
                errors["username_errors"] = "Username must be at least 6 characters"
                return errors["username_errors"]
            } else {
                if (!value.match(alphumeric)) {
                    errors["username_errors"] = "Username can only contain alphanumeric characters"
                    return errors["username_errors"]
                }
            }
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
                }
                if (!strUpper) {
                    errors['password_errors'] = "Password must contain at least one uppercase letter"
                    return errors['password_errors']
                }
            }
    }
}