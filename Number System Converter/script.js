//from decimal number -  conversion
function fromDecimal(valNum){
    document.getElementById("outputD2Binary").innerHTML = parseInt(valNum, 10).toString(2);
    document.getElementById("outputD2Octal").innerHTML = parseInt(valNum, 10).toString(8);
    document.getElementById("outputD2Hexadecimal").innerHTML = parseInt(valNum, 10).toString(16);
    
}

//from binary number -  conversion
function fromBinary(valNum){
    document.getElementById("outputB2Decimal").innerHTML = parseInt(valNum, 2).toString(10);
    document.getElementById("outputB2Octal").innerHTML = parseInt(valNum, 2).toString(8);
    document.getElementById("outputB2Hexadecimal").innerHTML = parseInt(valNum, 2).toString(16);
    
}

//from octal number -  conversion
function fromOctal(valNum){
    document.getElementById("outputO2Binary").innerHTML = parseInt(valNum, 8).toString(2);
    document.getElementById("outputO2Decimal").innerHTML = parseInt(valNum, 8).toString(10);
    document.getElementById("outputO2Hexadecimal").innerHTML = parseInt(valNum, 8).toString(16);
    
}

//from hexadecimal number -  conversion
function fromHexaDecimal(valNum){
    document.getElementById("outputH2Binary").innerHTML = parseInt(valNum, 16).toString(2);
    document.getElementById("outputH2Octal").innerHTML = parseInt(valNum, 16).toString(8);
    document.getElementById("outputH2Decimal").innerHTML = parseInt(valNum, 16).toString(10);
    
}



