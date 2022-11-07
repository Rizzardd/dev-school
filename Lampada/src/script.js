const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lampada');

function isLampOff (){
    return lampada.src = '../images/led-off.jpg';
}

function isLampOn (){
    return lampada.src = '../images/led-on.jpg';
}

turnOff.addEventListener('click', isLampOff);
turnOn.addEventListener('click', isLampOn)
