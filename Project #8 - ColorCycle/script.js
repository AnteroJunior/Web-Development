
let active = 0;//Status (ON:OFF)

function geraCores(){

    //Regex
    const regex = /\W|_/;

    active = !active;//Change status do another state when clicked
    
    //Get new background (user input)
    let valorCor = document.getElementById('cor');
    valorCor = valorCor.value;

    // Get HEX colors
    let red = valorCor.slice(0, 2);
    let green = valorCor.slice(2, 4);
    let blue = valorCor.slice(4, 6);

    // HEX to DEC
    red = parseInt(red, 16);
    green = parseInt(green, 16);
    blue = parseInt(blue, 16);

    // Increment values to INT - RED, GREEN, and BLUE
    let increment_red = document.getElementById('incremento-red');
    increment_red = parseInt(increment_red.value);

    let increment_green = document.getElementById('incremento-green');
    increment_green = parseInt(increment_green.value);

    let increment_blue = document.getElementById('incremento-blue');
    increment_blue = parseInt(increment_blue.value);

    //Regex test
    if(regex.test(valorCor) || increment_red < 0 || increment_green < 0 || increment_blue < 0){

        alert('Error! Pay attention to the values.');
        return 0;

    }

    //Variable to create interval (start, stop)
    let interval;

    // Set interval
    interval = setInterval(() => {

        if(active){

            // Change button text
            let botao = document.getElementById('botao');
            botao.value = 'Stop';

            // Style body background
            let getBackground = document.querySelector('body');
            getBackground.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

            // Add color value
            red = increment(increment_red, red);
            green = increment(increment_green, green);
            blue = increment(increment_blue, blue);

            // Change h3 text
            let newText = document.getElementById('valorAtual');
            newText.innerHTML = `#${(red.toString(16)).padStart(2, '0')}${(green.toString(16)).padStart(2, '0')}${(blue.toString(16)).padStart(2, '0')}`;

        } else {

            // Change button value
            let botao = document.getElementById('botao');
            botao.value = 'Start';

            //Stop interval
            clearInterval(interval);

        }
            

    }, 250);
    
}

function increment(increment, actualValue){

    if(actualValue + increment > 255){

        actualValue += increment;

        actualValue %= 255;

        return actualValue;

    } else {

        return actualValue + increment;

    }

}

function copy(){

    //get color value (HEX)
    let color = document.getElementById('valorAtual');

    navigator.clipboard.writeText(color.innerHTML);

    alert('Color copied!');

}