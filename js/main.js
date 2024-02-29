var currTab = "atomic";

function incrementQuark(){
    player.quarks += player.gain.qpc;
}

function loop(){
    updateDisplay();
}

function updateDisplay(){
    upd("quarks", player.quarks);

    document.getElementByID(currTab).classList.add("selected");
}

setInterval(loop, 50);
