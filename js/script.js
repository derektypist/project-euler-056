// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length==0 || num<2 || num>100 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 100.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Maximum digital sum is ${powerfulDigitSum(num)}.`;
    }
    
    // Display Information in the browser
    document.getElementById("numinfo").innerHTML = txt;
}