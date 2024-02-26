function incrementQuark(){
    player.quarks += player.gain.qpc;
}

function loop(){
    updateDisplay();
}

function updateDisplay(){
    upd("quarks", player.quarks);
}

setInterval(loop, 50);
