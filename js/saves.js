function upd(x, y){
    document.getElementById(x).innerHTML = y;
}

function E(x){
    return new ExpantaNum(x);
}

var player = {
    quarks: E(0),

    gain: {
        qpc: E(1)
    }
}
