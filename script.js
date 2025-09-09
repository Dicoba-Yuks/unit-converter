document.addEventListener('DOMContentLoaded', function() {
    // Get all the necessary elements from the HTML
    const inputValueElement = document.getElementById('inputValue');
    const inputUnitElement = document.getElementById('inputUnit');
    const outputUnitElement = document.getElementById('outputUnit');
    const resultValueElement = document.getElementById('resultValue');

    // Function to perform the conversion
    function convertUnits() {
        // Get the value and selected units
        const inputValue = parseFloat(inputValueElement.value);
        const inputUnit = inputUnitElement.value;
        const outputUnit = outputUnitElement.value;
        let result;

        // Check if the input value is a valid number
        if (isNaN(inputValue)) {
            resultValueElement.textContent = "Please enter a valid number.";
            return;
        }

        // Logic for temperature conversion
        if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
            result = (inputValue * 9/5) + 32;
        } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
            result = (inputValue - 32) * 5/9;
        } else {
            // If the units are the same, no conversion is needed
            result = inputValue;
        }

        // Display the result with two decimal places
        resultValueElement.textContent = result.toFixed(2);
    }

    // Add event listeners to trigger the conversion on change
    inputValueElement.addEventListener('input', convertUnits);
    inputUnitElement.addEventListener('change', convertUnits);
    outputUnitElement.addEventListener('change', convertUnits);

    // Initial conversion on page load
    convertUnits();
});