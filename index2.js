function generatePassword() {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*_-';
    const numberChars = '0123456789';

    let passwordChars = '';
    if (document.getElementById('upperCaseCheckbox').checked) {
        passwordChars += upperCaseChars;
    }
    if (document.getElementById('lowerCaseCheckbox').checked) {
        passwordChars += lowerCaseChars;
    }
    if (document.getElementById('symbolsCheckbox').checked) {
        passwordChars += symbolChars;
    }
    if (document.getElementById('numbersCheckbox').checked) {
        passwordChars += numberChars;
    }


    const minLength = 6;
    const maxLength = 12;

    // Generate a random password length between 6 and 12
    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.charAt(randomIndex);
    }

    document.getElementById('generatePassword').value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    const passwordField = document.getElementById('generatePassword');
    passwordField.select();
    try {
        document.execCommand('copy');
        const notify = document.getElementById('notify');
        notify.textContent = 'Copied!';
        setTimeout(function () {
            notify.textContent = '';
        }, 2000);
    } catch (error) {
        console.error('Unable to copy password', error);
    }
    passwordField.blur();
}

// // Attach event handlers to buttons
// document.getElementById('generateBtn').addEventListener('click', generatePassword);
// document.getElementById('copyBtn').addEventListener('click', copyPassword);





