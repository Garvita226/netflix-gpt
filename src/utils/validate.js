export const checkValidEmail = (email) => {
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) {
        return "Email is not valid"
    }

    return null;
}

export const checkValidPassword = (password) => {
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))) {
        return "Password is not valid"
    }

    return null;
}

export const checkValidName = (name) => {
    if(!(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name))) {
        return "Name is not valid"
    }

    return null;
}