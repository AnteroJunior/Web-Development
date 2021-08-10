//Main variables
let total_minutos;//Mutable value
let total_segundos;//Mutable value
let back_minutos;//Save the first value for restart (minutes)
let back_segundos;//Save the first value for restart (seconds)
let status = 0;//Show if it's 'Start' or 'Stop'

//Change tab functions
const pomodoro = () => {

    //Elements style (background)
    document.getElementById('pomodoro').style.backgroundColor = '#FFF';
    document.getElementById('short').style.backgroundColor = 'transparent';
    document.getElementById('long').style.backgroundColor = 'transparent';

    //Change value when selecting 'Pomodoro'
    total_minutos = 25;
    total_segundos = 0;

    //Backup value when 'Stop' is clicked
    back_minutos = total_minutos;
    back_segundos = total_segundos;

    //Change value on screen
    document.getElementById('tempo_restante').innerHTML = total_minutos + ':' + (total_segundos.toString()).padStart(2, '0');

};

const short = () => {

    //Elements style (background)
    document.getElementById('pomodoro').style.backgroundColor = 'transparent';
    document.getElementById('long').style.backgroundColor = 'transparent';
    document.getElementById('short').style.backgroundColor = '#FFF';

    //Change value when selecting 'Short Break'
    total_minutos = 5;
    total_segundos = 0;

    //Backup value when 'Stop' is clicked
    back_minutos = total_minutos;
    back_segundos = total_segundos;

    //Change value on screen
    document.getElementById('tempo_restante').innerHTML = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0');

};

const long = () => {

    //Elements style (background)
    document.getElementById('pomodoro').style.backgroundColor = 'transparent';
    document.getElementById('short').style.backgroundColor = 'transparent';
    document.getElementById('long').style.backgroundColor = '#FFF';

    //Change value when selecting 'Long Break'
    total_minutos = 30;
    total_segundos = 0;

    //Backup value when 'Stop' is clicked
    back_minutos = total_minutos;
    back_segundos = total_segundos;

    //Change value on screen
    document.getElementById('tempo_restante').innerHTML = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0');   

};

//Clock working
const start = () => {

    //If 0 then we can start the counting
    if(status == 0){

        count_time_interval = setInterval(counter, 1000);//Create a new interval (1 sec.)
        status = 1;//We can stop the counting
        document.getElementById('start').innerHTML = '<i class="fas fa-pause"></i>';//Change the button text

    } else {//If 1 then we can stop the counting and restart

        document.getElementById('start').innerHTML = '<i class="fas fa-play"></i>';//Change the button text
        status = 0;//We can start the counting
        stopCount();//Calling function that stops the counting

        //Changing the value on screen
        document.getElementById('tempo_restante').innerHTML = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0');

        //Show the time in the title
        document.title = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0') + ' - Pomodoro Clock';

    }

};

const restart = () => {

    //When we restart the counting. These are the original values of the selected option
    total_segundos = back_segundos;
    total_minutos = back_minutos;

    //Changing the value on screen
    document.getElementById('tempo_restante').innerHTML = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0');

    //Show the time in the title
    document.title = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0') + ' - Pomodoro Clock';

};

const counter = () => {

    //Function to update the values

    //Values on screen
    document.getElementById('tempo_restante').innerHTML = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0');

    //Value in the title
    document.title = (total_minutos.toString()).padStart(2, '0') + ':' + (total_segundos.toString()).padStart(2, '0') + ' - Pomodoro Timer';

    if(total_segundos == 0){

        if(total_minutos == 0){//Play the audio when finished

            total_minutos = 0;
            total_segundos = 0;

            let alarm = new Audio('alarm-clock.wav');
            alarm.play();

            stopCount();//Function to stop the counting

            document.getElementById('start').click();
            document.getElementById('restart').click();

        }

        //If seconds == 0 and minutes != 0
        total_segundos = 59;
        total_minutos--;

    } else {

        //If seconds > 0
        total_segundos--;

    }

};

const stopCount = () => {//Function to stop the counting

    clearInterval(count_time_interval);

};
