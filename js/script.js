// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num < 2 || num > 100 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 100.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Maximum digital sum is ${powerfulDigitSum(num)}.`;
    }

    // Display Information in the browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the maximum digital sum
    powerfulDigitSum(3)   returns 4
    powerfulDigitSum(10)  returns 45
    powerfulDigitSum(50)  returns 406
    powerfulDigitSum(75)  returns 684
    powerfulDigitSum(100) returns 972
*/
function powerfulDigitSum(n) {
    function sumDigitsOfPower(numA, numB) {
        let digitsSum = 0;
        let number = power(numA, numB);
        while (number > 0n) {
            const digit = number % 10n;
            digitsSum += parseInt(digit, 10);
            number = number / 10n;
        }
        return digitsSum;
    }

    function power(numA, numB) {
        let product = 1n;
        for (let b = 0; b < numB; b++) {
            product = product * BigInt(numA);
        }
        return product;
    }

    const limit = n - 1;
    let maxDigitsSum = 0;
    for (let a = limit; a > 0; a--) {
        for (let b = limit; b > 0; b--) {
            const curDigitSum = sumDigitsOfPower(a, b);
            maxDigitsSum = Math.max(maxDigitsSum, curDigitSum);
        }
    }
    return maxDigitsSum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}