// Conversion Form Constant Variables

const temperatureForm = document.getElementById('temperature');


// Hide Form
temperatureForm.style.display = "none";


// Display Form by Category
const conversionCategory = document.getElementById('conversionCategory');

conversionCategory.addEventListener('change', function() {
    const conversionValue = conversionCategory.value;
    
    // If statement for form display
    if (conversionValue === "temperature") {
        temperatureForm.style.display = "";
    } else if (conversionValue === "length") {
        temperatureForm.style.display = "none";
    } else if (conversionValue === "area") {
        temperatureForm.style.display = "none";
         
    } else if (conversionValue === "weight") {
        temperatureForm.style.display = "none";
          
    } else if (conversionValue === "time") {
        temperatureForm.style.display = "none";
        
    } else {
        temperatureForm.style.display = "none";
       
    };
});

// Temperature Function
function convertTemperature() {
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromTemperatureUnit").value;
    const toUnit = document.getElementById("toTemperatureUnit").value;

    // Perform the conversion
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        result = inputValue;
    }

    // Display the result
    document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)}`;
};
