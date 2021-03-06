let income;
let personalAllowance = 12500;
let lowerTaxBracket = 50000;
let higherRateBracket = 150000;

function lowerTax() {
    let lowerTaxableIncome; 
    let finalLower; 
    if (income > 50000) {
        lowerTaxableIncome = (50000 - personalAllowance) * 0.80;
        finalLower = lowerTaxableIncome + personalAllowance;
        return finalLower;
    } else {
        lowerTaxableIncome = (income - personalAllowance) * 0.80; //This gets the taxable income value and multiplies it by 0.80 to get the taxed income for the 20% bracket.
        finalLower = lowerTaxableIncome + personalAllowance; //This adds the taxed income to the personal allowance to get the final taxed lower income.
        return finalLower;
    }
}

function higherRateTax() {
    let higherTaxIncome;
    let finalHigherTax;
    if (income > 150000) {
        higherTaxIncome = 100000 * 0.60; // This gets the taxable income for the additional rate tax payers as they will always need to calculate the 100000 (the money for this bracket) as they have over 150k in yearly income.
        finalHigherTax = higherTaxIncome + (lowerTax());
        return finalHigherTax;
    }
    else {
        higherTaxIncome = (income - lowerTaxBracket) * 0.60; //This gets the taxable income value for the higher rate taxes and multiplies it by 0.60 to get the taxed income for the higher rate bracket.
        finalHigherTax = higherTaxIncome + (lowerTax());
        return finalHigherTax;
    }
}

function additionalRateTax() {
    let additionalRateTaxIncome = (income - higherRateBracket) * 0.55;
    let finaladditionalRateTax = additionalRateTaxIncome + higherRateTax(); // I do not include the lower rate tax as this is used within the higher rate tax function 
    return finaladditionalRateTax;
}

function yearlyCalc() { //The if and else if statements determine what bracket the user is in and then uses that information to calculate the correct answer.
    let answer;
    if (income <= personalAllowance) {
        answer = income;
    } else if (income > personalAllowance && income <= lowerTaxBracket) {
        answer = lowerTax();
    } else if ( income > lowerTaxBracket && income <= higherRateBracket) {
            answer = higherRateTax();
    } else if (income > higherRateBracket) {
            answer = additionalRateTax();
    } else {
        document.getElementById("output").innerHTML = "There has been an error.";
        return;
    }
    let outputstring =  "You take home £" + answer.toString() + " every year!";
    document.getElementById("output").innerHTML = outputstring;
    return answer;
}

function monthlyCalc() {
    let answer;
    answer = (yearlyCalc()) / 12;
    document.getElementById("output").innerHTML = "You take home £" + answer.toFixed(2) + " every month!";
}

function finalCalc() {
    income = document.getElementById("income").value;
    if (document.getElementById("yearly").checked) { //I use .checked in this function to help determine what calculation should be completed - either yearly or monthly.
        yearlyCalc();
    } else if (document.getElementById("monthly").checked) {
        monthlyCalc()
    }
    else {
        document.getElementById("output").innerHTML = "Please add your salary before hitting submit";
    }
}

function reset() {
    location.reload(true);
}