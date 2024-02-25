function buyUpg(upg){
    let currLvl = player.upg.lvl;
    let cost = upgs.currLvl.cost;

    if(player.quarks.gte(cost)){
        player.upg.lvl++;
        player.upg.upg.push(upgs.upg.currlvl);
    }
}

function incrementQuark(){
    player.quarks += player.qpc;
}

function loop(){
    updateDisplay();
}

function updateDisplay(){
    upd('quarks', player.quarks);
}

setInterval(loop, 50);
