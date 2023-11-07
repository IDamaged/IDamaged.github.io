function convertirFarenheit(){
    const celsiusInput = document.getElementById("celsius");
            const result = document.getElementById("result");
            const celsius = parseFloat(celsiusInput.value);
            
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9/5) + 32;
                result.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
            } else {
                result.textContent = "Ingrese una temperatura válida en grados Celsius.";
            }
}
function convertirKelvin(){
    const celsiusInput = document.getElementById("celsius");
    const result = document.getElementById("result");
    const celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
        const kelvin = celsius + 273.15;
        result.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
    } else {
        result.textContent = "Ingrese una temperatura válida en grados Celsius.";
    }
}

function convertirMillas(){
    var kilometrosInput = document.getElementById("kilometros");
    var resultado = document.getElementById("result1");
    var kilometros = parseFloat(kilometrosInput.value);

    if(!isNaN(kilometros)){
        var millas = kilometros /1.609344;
        resultado.textContent= `Millas: ${millas.toFixed(2)} millas`
    }else{
        resultado.textContent = "Ingrese un kilometraje valido";
    }
}
function convertirmetros(){
    var kilometrosInput = document.getElementById("kilometros");
    var resultado = document.getElementById("result1");
    var kilometros = parseFloat(kilometrosInput.value);

    if(!isNaN(kilometros)){
        var metros = kilometros *1000;
        resultado.textContent= `Metros: ${metros.toFixed(2)} metros`
    }else{
        resultado.textContent = "Ingrese un kilometraje valido";
    }
}

function imc(){
    const pesoInput = document.getElementById("peso");
            var alturaInput = document.getElementById("altura");
            var result = document.getElementById("result2");

            var peso = parseFloat(pesoInput.value);
            var altura = parseFloat(alturaInput.value);

            if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
                var imc = peso / (altura * altura);
                result.textContent = `Tu IMC es: ${imc.toFixed(2)}`;
            } else {
                result.textContent = "Ingrese un peso y una altura válidos (mayores que cero).";
            }
}