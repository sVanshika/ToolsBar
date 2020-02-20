//mass conversion
function massConverter(valNum){
    document.getElementById("outputMilliGrams").innerHTML = valNum*1000;
    document.getElementById("outputKiloGrams").innerHTML = valNum*0.001;
    document.getElementById("outputPounds").innerHTML = valNum*0.00220462;
    document.getElementById("outputOunces").innerHTML = valNum*0.0352739619;
}

//speed conversion
function speedConverter(valNum){
    document.getElementById("outputKpS").innerHTML = valNum*0.001;
    document.getElementById("outputKpH").innerHTML = valNum*3.6;
    document.getElementById("outputMpH").innerHTML = valNum*2.23693629;
}

//volume conversion
function volumeConverter(valNum){
    document.getElementById("outputML").innerHTML = valNum*1000;
    document.getElementById("outputCC").innerHTML = valNum*1000;
    document.getElementById("outputCM").innerHTML = valNum*0.001;
}


//length conversion
function lengthConverter(valNum) {
    document.getElementById("outputCentiMeters").innerHTML = valNum*100;
    document.getElementById("outputMilliMeters").innerHTML = valNum*1000;
    document.getElementById("outputKilloMeters").innerHTML = valNum / 1000;
    document.getElementById("outputFoot").innerHTML = valNum*3.2808399;
}


