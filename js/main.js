loadGame();

function incrementQuark(){
    player.quarks = player.quarks.add(player.gain.qpc);
}

function loop(){
    updateDisplay();
}

function updateDisplay(){
    upd("quarks", notate(player.quarks));
}

setInterval(loop, 50);
