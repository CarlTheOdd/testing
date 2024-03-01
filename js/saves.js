function upd(x, y){
    document.getElementById(x).innerHTML = y;
}

function E(x){
    return new ExpantaNum(x);
}

function notate(ex, acc=2) {
    ex = E(ex)
    let e = ex.log10().floor()
    if (e.lt(6)) {
        if (e.lt(3)) {
            return ex.toFixed(acc)
        }
        return ex.floor().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    let m = ex.div(E(10).pow(e))
    return (e.log10().gte(6)?'':m.toFixed(2))+'e'+notate(e,0)
}

var player = {
    quarks: E(0),

    gain: {
        qpc: E(1)
    }
}

function save(){
    localStorage.setItem("incQuarksSave", btoa(JSON.stringify(player)));
}

function load(x){
    if(typeof x == "string"){
        let load = JSON.parse(atob(x));
        player.quarks = ex(load.quarks);
    }
}

function loadGame(){
    load(localStorage.getItem("incQuarksSave"));
    setInterval(save, 60000);
}
