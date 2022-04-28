function getPasswordChecker(password) {
    const passwordEntered = password;
    return function checkingPassword(newPassword) {
        if(newPassword === passwordEntered) {
            return true
        } else return false
    }
}


const myPass = getPasswordChecker('1234');
console.log(myPass('1234'))
console.log(myPass('1233'))
console.log(myPass('1234'))
console.log(myPass('1111'))