let income = document.getElementById("income").value;
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
    let finaladditionalRateTax = additionalRateTaxIncome + higherRateTax() + lowerTax();
    return finaladditionalRateTax;
}

function yearlyCalc() {
    let answer;
    if (income < personalAllowance) {
        document.getElementById("output").innerHTML = "You do not pay any tax!"
       } else if ( income > lowerTaxBracket && income < higherRateBracket) {
            answer = higherRateTax();
            return answer;
       } else if (income > higherRateBracket) {
            answer = additionalRateTax();
            return answer;
       } else if (income > personalAllowance && income < lowerTaxBracket){
            answer = lowerTax();
            return answer;
        }
    // answer = parseFloat(answer).toFixed(2);
    document.getElementById("output").innerHTML = "You takehome £" + answer + " every year!";
}


function monthlyCalc() {
    answer = (yearlyCalc()) / 12;
    document.getElementById("output").innerHTML = "You takehome £" + answer.toFixed(2) + " every year!";
}

function finalCalc() {
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