let status = 0; //0: BIN - 1: DEC

function changeResult(){//CHANGE VALUE OF STATUS

    if(status == 0){

        status = 1;
        document.getElementById('bin').setAttribute('disabled', true);
        document.getElementById('bin').value = '';
        document.getElementById('dec').removeAttribute('disabled');
        document.getElementById('dec').value = '';

    } else if(status == 1){

        status = 0;
        document.getElementById('bin').value = '';
        document.getElementById('dec').value = '';
        document.getElementById('bin').removeAttribute('disabled');
        document.getElementById('dec').setAttribute('disabled', true);

    }

}

function result(valBin, valDec){

    if(status == 0){

        let aux = '0b';
        valBin = aux + valBin;
        valBin = Number(valBin);

        if(isNaN(valBin)){//Check if there are only 0's and 1's;

            alert('Verifique o valor inserido! Binário é composto por 0 ou 1.');

            document.getElementById('bin').value = '';
            document.getElementById('dec').value = '';      

            return;

        }

        let resultSpace = document.getElementById('dec');
        resultSpace.value = valBin;

    } else if(status == 1){

        if(Number(valDec) > 255){

            alert('Verifique o valor inserido! O valor máximo é 255.');

            document.getElementById('bin').value = '';
            document.getElementById('dec').value = '';            

            return;

        }

        valDec = Number(valDec);
        let resultSpace = document.getElementById('bin');
        resultSpace.value = valDec.toString(2);                    

    }

}