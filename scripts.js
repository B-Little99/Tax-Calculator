let income;
let personalAllowance = 12500;
let lowerTaxBracket = 50000;
let higherRateBracket = 150000;

function lowerTax() {
    // income = a;
    let lowerTaxableIncome = (income - personalAllowance) * 0.80; //This gets the taxable income value and multiplies it by 0.80 to get the taxed income for the 20% bracket.
    let finalLower = lowerTaxableIncome + personalAllowance; //This adds the taxed income to the personal allowance to get the final taxed lower income.
    return finalLower;
}

function higherRateTax() {
    let higherTaxIncome = (income - lowerTaxBracket) * 0.60; //This gets the taxable income value for the higher rate taxes and multiplies it by 0.60 to get the taxed income for the higher rate bracket.
    let finalHigherTax = higherTaxIncome + (lowerTax(50000));
    return finalHigherTax;
}

function additionalRateTax() {
    let additionalRateTaxIncome = (income - higherRateBracket) * 0.55;
    let finaladditionalRateTax = additionalRateTaxIncome + higherRateTax(100000) + lowerTax(50000);
    return finaladditionalRateTax;
}

function yearlyCalc() {
    let answer;
    if (income <= personalAllowance) {
        answer = income;
    } else if ( income > lowerTaxBracket && income <= higherRateBracket) {
            answer = higherRateTax();
    } else if (income > higherRateBracket) {
            answer = additionalRateTax();
    } else if (income > personalAllowance && income <= lowerTaxBracket) {
            answer = lowerTax();
    } else {
        document.getElementById("output").innerHTML = "There has been an error.";
        return; // stops rest of function
    }
    // answer = parseFloat(answer).toFixed(2);
    let outputstring =  "You take home £" + answer.toString() + " every year"; //practice this more
    document.getElementById("output").innerHTML = outputstring;
    return answer;
}

function monthlyCalc() {
    let answer;
    answer = (yearlyCalc()) / 12;
    document.getElementById("output").innerHTML = "You takehome £" + answer.toFixed(2) + " every month!";
}

function finalCalc() {
    income = document.getElementById("income").value;
    if (document.getElementById("yearly").checked) {
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