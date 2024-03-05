var accelContainer = document.querySelector("#accel");

function incrementQuark(){
    player.quarks = player.quarks.add(player.gain.qpc);
}

function loop(){
    updateDisplay();
}

function updateDisplay(){
    upd("quarks", notate(player.quarks));

    if(player.accel.unl()){
        accelContainer.style.display = "flex";
    }
}

setInterval(loop, 50);
