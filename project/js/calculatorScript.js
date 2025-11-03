function convertCurrency() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let currencyType = document.getElementById("currencyType").value;
    let answer = document.getElementById("answer");

    let result;
    if (currencyType === "currencyA") {
        result = inputValue * 56;
    } else if (currencyType === "currencyB") {
        result = inputValue * 3;
    } else {
        result = "Choose the currency!";
    }

    answer.textContent = "Currency: " + result;
}